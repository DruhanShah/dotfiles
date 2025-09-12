;;; nano-org.el --- Obsidian-like look for Org -*- lexical-binding: t -*-

;; Copyright (C) 2022-2025 Free Software Foundation, Inc.

;; This file is part of GNU Emacs.

;; This program is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <https://www.gnu.org/licenses/>.

;;; Commentary:

;; This package adds some styling to your Org buffer, which gives it a
;; modern look.  Enable the styling by default with:
;;   (global-nano-org-mode)

;;; Code:

(require 'compat)
(require 'org)
(require 'nerd-icons)
(require 'catppuccin-theme)
(eval-when-compile
  (require 'cl-lib)
  (require 'subr-x))

(defgroup nano-org nil
  "Modern looks for Org."
  :group 'org
  :prefix "nano-org-")

(defcustom nano-org-label-border 'auto
  "Line width used for tag label borders.
If set to `auto' the border width is computed based on the `line-spacing'.
A value between 0.1 and 0.4 of `line-spacing' is recommended."
  :type '(choice (const nil) (const auto) integer))

(defcustom nano-org-star 'nil
  "Style heading stars.
Can be nil, fold or replace.  See `nano-org-fold-stars' and
`nano-org-replace-stars' for the respective configurations."
  :type '(choice (const :tag "No styling" nil)
                 (const :tag "Folding indicators" fold)
                 (const :tag "Replace" replace)))

(defcustom nano-org-replace-stars "◉○◈◇✳"
  "Replacement strings for headline stars for each level."
  :type '(choice string (repeat string)))

(defcustom nano-org-fold-stars
  '(("▶" . "▼") ("▷" . "▽") ("⯈" . "⯆") ("▹" . "▿") ("▸" . "▾"))
  "Folding indicators for headings.
Replace headings' stars with an indicator showing whether its
tree is folded or expanded."
  :type '(repeat (cons (string :tag "Folded")
                       (string :tag "Expanded"))))

(defcustom nano-org-hide-stars t
  "Changes the displays of the stars.
Can be leading, t, or a string/character replacement for each leading
star.  Set to nil to disable.  This feature is automatically disabled if
`org-indent-mode' is enabled."
  :type '(choice
          (string :tag "Replacement string for leading stars")
          (character :tag "Replacement character for leading stars")
          (const :tag "Do not hide stars" nil)
          (const :tag "Hide all stars" t)
          (const :tag "Hide leading stars" leading)))

(defcustom nano-org-timestamp '(" %^b %d " . " %H:%M ")
  "Prettify time stamps, e.g. <2022-03-01>.
Set to nil to disable styling the time stamps.  In order to use
custom timestamps, the format should be (DATE . TIME) where DATE
is the format for date, and TIME is the format for time.  DATE
and TIME must be surrounded with space.  For the syntax, refer to
`format-time-string'."
  :type '(choice
          (const :tag "Disable time stamp styling" nil)
          (const :tag "Enable timestamp styling" t)
          (const :tag "Use format YYYY-MM-DD HH:MM" (" %Y-%m-%d " . " %H:%M "))
          (cons :tag "Custom format" string string)))

(defcustom nano-org-table t
  "Prettify tables."
  :type 'boolean)

(defcustom nano-org-table-vertical 2
  "Width of vertical table lines in pixels.
Set to nil to hide the vertical lines."
  :type '(choice (const nil) natnum))

(defcustom nano-org-table-horizontal 0.1
  "Prettify horizontal table lines."
  :type '(choice (const nil) number))

(defcustom nano-org-priority t
  "Prettify priorities.
If set to t, the priority will be prettified with the brackets
hidden.  If set to an alist of characters and strings, the
associated string will be used as replacement for the given
priority."
  :type '(choice (boolean :tag "Prettify")
                 (alist :key-type (character :tag "Priority")
                        :value-type (string :tag "Replacement"))))

(defcustom nano-org-list
  '((?+ . "◦")
    (?- . "–")
    (?* . "•"))
  "List of bullet replacement strings.
Set to nil to disable styling list bullets."
  :type '(alist :key-type character :value-type string))

(defcustom nano-org-checkbox
  '((?X . "☑")
    (?- . #("□–" 0 2 (composition ((2)))))
    (?\s . "□"))
  "List of check box replacement strings.
Set to nil to disable styling checkboxes."
  :type '(alist :key-type character :value-type string))

(defcustom nano-org-horizontal-rule t
  "Prettify horizontal rulers.
The value can either be a boolean to enable/disable style or display
replacement expression, e.g., a string."
  :type '(choice boolean sexp))

(defcustom nano-org-todo t
  "Prettify todo keywords, see `org-todo-keywords'."
  :type 'boolean)

(defcustom nano-org-todo-symbols nil
  "Alist of todo symbols and the icons to be displayed.
Set to nil to disable.")

(defcustom nano-org-todo-faces
  `(("TODO" . (:foreground ,(catppuccin-color 'red)
	       :box (:line-width (1 . 2) :color ,(catppuccin-color 'red))
	       :underline ,(catppuccin-color 'base)
	       :overline ,(catppuccin-color 'base)))
    ("DOING" . (:foreground ,(catppuccin-color 'yellow)
	       :box (:line-width (1 . 2) :color ,(catppuccin-color 'yellow))
	       :underline ,(catppuccin-color 'base)
	       :overline ,(catppuccin-color 'base)))
    ("DONE" . (:foreground ,(catppuccin-color 'green)
	       :box (:line-width (1 . 2) :color ,(catppuccin-color 'green))
	       :underline ,(catppuccin-color 'base)
	       :overline ,(catppuccin-color 'base)))
    ("HOLD" . (:foreground ,(catppuccin-color 'rosewater)
	       :box (:line-width (1 . 2) :color ,(catppuccin-color 'rosewater))
	       :underline ,(catppuccin-color 'base)
	       :overline ,(catppuccin-color 'base)))
    ("NOPE" . (:foreground ,(catppuccin-color 'subtext0)
	       :box (:line-width (1 . 2) :color ,(catppuccin-color 'subtext0))
	       :underline ,(catppuccin-color 'base)
	       :overline ,(catppuccin-color 'base))))
  "Faces for todo keywords.
This is an alist, with todo keywords in the car and faces in the
cdr."
  :type '(repeat
          (cons (choice
                  (string :tag "Keyword")
                  (const :tag "Default" t))
                (sexp :tag "Face   "))))

(defcustom nano-org-tag-faces nil
  "Faces for tags keywords.
This is an alist, with tag the car and faces in the cdr."
  :type '(repeat
          (cons (choice
                  (string :tag "Keyword")
                  (const :tag "Default" t))
                (sexp :tag "Face   "))))

(defcustom nano-org-priority-faces nil
  "Faces for priority tags.
This is an alist, with priority character in the car and faces in
the cdr."
  :type '(repeat
          (cons (choice
                 (character :tag "Priority")
                 (const :tag "Default" t))
                (sexp :tag "Face   "))))

(defcustom nano-org-tag t
  "Prettify tags in headlines, e.g., :tag1:tag2:."
  :type 'boolean)

(defcustom nano-org-block-name
  '(("src" . ("  " ""))
    ("quote" . ("  " ""))
    (t . t))
  "Prettify blocks names, i.e. #+begin_NAME and #+end_NAME lines."
  :type '(choice
          (const :tag "Hide #+begin_ and #+end_ prefixes" t)
          (cons (string :tag "#+begin_ replacement")
                (string :tag "#+end_ replacement"))
          (const :tag "Triangle bullets" ("‣" . "‣"))
          (alist :key-type
                 (choice
                  (string :tag "Block name")
                  (const :tag "Default" t))
                 :value-type
                 (choice
                  (list (string :tag "#+begin_NAME replacement")
                        (string :tag "#+end_NAME replacement"))
                  (const :tag "Hide #+begin_ and #+end_ prefixes" t)))))

(defcustom nano-org-source-icon t
  "Prettify source blocks with an icon."
  :type '(choice
	  (const :tag "Disable source block icon" nil)
	  (const :tag "Enable source block icon" t)
	  (const :tag "Triangle bullet" "‣")
	  (string :tag "Custom icon")))

(defcustom nano-org-source-names
  '(("emacs-lisp" . "elisp"))
  "Alist of source block names which are different from their major mode names."
  :type '(alist :key-type (string :tag "Block Name")
		:value-type (string :tag "Major Mode Name")))

(defcustom nano-org-block-fringe 12
  "Add a border to the blocks in the fringe.
This variable can also be set to an integer between 0 and 16, which
specifies the offset of the block border from the edge of the
window.  This feature is automatically disabled if `org-indent-mode' is
enabled."
  :type '(choice boolean natnum))

(defcustom nano-org-keyword t
  "Prettify keywords like #+title.
If set to t, the prefix #+ will be hidden.  If set to a string,
e.g., \"‣\", the string is used as replacement for #+.  If set to
an alist of keywords and strings, the associated string will be
used as replacement for \"#+keyword:\", with t the default key."
  :type '(choice (boolean :tag "Hide prefix")
                 (string :tag "Replacement")
                 (const :tag "Triangle bullet" "‣")
                 (alist :key-type (choice (string :tag "Keyword")
                                          (const :tag "Default" t))
                        :value-type (choice (string :tag "Replacement")
                                            (const :tag "Hide prefix" t)))))

(defcustom nano-org-footnote (cons nil (cadr org-script-display))
  "Prettify footnotes.
The car corresponds to display specification for definitions, the cdr for
references."
  :type '(choice (const nil) (cons sexp sexp)))

(defcustom nano-org-internal-target '(" ↪ " t " ")
  "Prettify internal link targets, e.g., <<introduction>>."
  :type '(choice (const nil) (list string boolean string)))

(defcustom nano-org-radio-target '(" ⛯ " t " ")
  "Prettify radio link targets, e.g., <<<radio>>>."
  :type '(choice (const nil) (list string boolean string)))

(defcustom nano-org-progress 12
  "Width in characters to draw progress bars.
Set to nil to disable bars."
  :type '(choice (const :tag "Disable progress bar" nil)
                 (natnum :tag "Bar width")))

(defgroup nano-org-faces nil
  "Faces used by `nano-org'."
  :group 'nano-org
  :group 'org-faces
  :group 'faces)

(defface nano-org-symbol
  `((t :family "Symbols Nerd Font"))
  "Face used for stars, checkboxes and progress indicators.
You can specify a font `:family'.  The font families `Iosevka', `Hack' and
`DejaVu Sans' give decent results.")

(defface nano-org-label
  `((t :height 0.9 :family "Iosevka" :weight medium))
  "Parent face for labels.
The parameters of this face depend on typographical properties of
the font and should therefore be adjusted by the user depending
on their font, e.g., the :width or :height parameters.  Themes
should not override this face, since themes usually don't control
the font.")

(defface nano-org-habit nil
  "Parent face for habits.")

(defface nano-org-block-name
  `((t :height 1.0
       :weight light))
  "Face used for block keywords.")

(defface nano-org-progress-complete
  `((t :background ,(catppuccin-color 'overlay0)
       :foreground ,(catppuccin-color 'base)
       :box (:color ,(catppuccin-color 'overlay0) :line-width (1 . 2))
       :underline ,(catppuccin-color 'base)
       :overline ,(catppuccin-color 'base)))
  "Face used for completed section of progress bars (colors only).")

(defface nano-org-progress-incomplete
  `((t :background ,(catppuccin-color 'mantle)
       :foreground ,(catppuccin-color 'text)
       :box (:color ,(catppuccin-color 'overlay0) :line-width (1 . 2))
       :underline ,(catppuccin-color 'base)
       :overline ,(catppuccin-color 'base)))
  "Face used for incomplete section of progress bars (colors only).")

(defface nano-org-tag
  `((t :inherit (nano-org-label)
       :foreground ,(catppuccin-color 'text)
       :background ,(catppuccin-color 'surface0)
       :box (:line-width (1 . 2) :color ,(catppuccin-color 'overlay1))
       :underline ,(catppuccin-color 'base)
       :overline ,(catppuccin-color 'base)
       :foreground ,(catppuccin-color 'text)))
  "Face used for tag labels.")

(defface nano-org-internal-target
  '((t :inherit nano-org-done))
  "Face used for internal link targets.")

(defface nano-org-radio-target
  '((t :inherit nano-org-done))
  "Face used for radio link targets.")

(defface nano-org-done
  '((t :inherit (org-done nano-org-symbol)))
  "Default face used for done labels.")

(defface nano-org-todo
  '((t :inherit (org-todo nano-org-symbol)))
  "Default face used for todo labels.")

(defface nano-org-priority
  '((t :inherit (org-priority nano-org-label)
       :weight semi-bold :inverse-video t))
  "Default face used for priority labels.")

(defface nano-org-date-active
  `((t :inherit (nano-org-label)
       :height 100
       :foreground ,(catppuccin-color 'base)
       :background ,(catppuccin-color 'blue)
       :overline ,(catppuccin-color 'base)
       :underline ,(catppuccin-color 'base)
       :box (:color ,(catppuccin-color 'blue) :line-width (1 . 2))))
  "Face used for active date labels.")

(defface nano-org-time-active
  `((t :inherit (nano-org-label)
       :height 100
       :foreground ,(catppuccin-color 'blue)
       :background ,(catppuccin-color 'base)
       :overline ,(catppuccin-color 'base)
       :underline ,(catppuccin-color 'base)
       :box (:line-width (1 . 2))))
  "Face used for active time labels.")

(defface nano-org-date-inactive
  `((t :inherit (nano-org-label)
       :height 100
       :foreground ,(catppuccin-color 'base)
       :background ,(catppuccin-color 'overlay0)
       :overline ,(catppuccin-color 'base)
       :underline ,(catppuccin-color 'base)
       :box (:color ,(catppuccin-color 'overlay0) :line-width (1 . 2))))
  "Face used for inactive date labels.")

(defface nano-org-time-inactive
  `((t :inherit (nano-org-label)
       :height 100
       :foreground ,(catppuccin-color 'overlay0)
       :background ,(catppuccin-color 'base)
       :overline ,(catppuccin-color 'base)
       :underline ,(catppuccin-color 'base)
       :box (:line-width (1 . 2))))
  "Face used for inactive time labels.")

(defface nano-org-horizontal-rule
  `((t :strike-through ,(catppuccin-color 'crust)))
  "Face used for horizontal ruler.")

(defvar-local nano-org--font-lock-keywords nil)
(defvar-local nano-org--folded-star-cache nil)
(defvar-local nano-org--expanded-star-cache nil)
(defvar-local nano-org--hide-stars-cache nil)
(defvar-local nano-org--checkbox-cache nil)
(defvar-local nano-org--table-sp-width 0)
(defconst nano-org--table-overline '(:overline t))
(defconst nano-org--table-sp '((space :width (nano-org--table-sp-width))
                                 (space :width (nano-org--table-sp-width))))

(defun nano-org--checkbox ()
  "Prettify checkboxes according to `nano-org-checkbox'."
  (let ((beg (match-beginning 3))
        (end (match-end 3)))
    (put-text-property
     beg end 'display
     (cdr (assq (char-after (1+ beg)) nano-org--checkbox-cache)))))

(defun nano-org--keyword ()
  "Prettify keywords according to `nano-org-keyword'."
  (let ((beg (match-beginning 0))
        (end (match-end 0))
        (rep (and (listp nano-org-keyword)
                  (cdr (assoc (downcase (match-string-no-properties 2))
                              nano-org-keyword)))))
    (unless rep
      (setq rep (cdr (assq t nano-org-keyword)) end (match-end 1)))
    (pcase rep
      ('t (put-text-property beg (match-end 1) 'invisible 'nano-org))
      ((pred stringp)
       (put-text-property beg end 'display rep)))))

(defun nano-org--priority ()
  "Prettify priorities according to `nano-org-priority'."
  (let* ((beg (match-beginning 1))
         (end (match-end 1))
         (prio (char-before (1- end))))
    (if-let ((rep (and (consp nano-org-priority)
                       (cdr (assq prio nano-org-priority)))))
        (put-text-property beg end 'display rep)
      (put-text-property beg (+ 2 beg) 'display " ")
      (put-text-property (1- end) end 'display " ")
      (put-text-property
       beg end 'face
       (if-let ((face (or (cdr (assq prio nano-org-priority-faces))
                          (cdr (assq t nano-org-priority-faces)))))
           `(:inherit (,face nano-org-label))
         'nano-org-priority)))))

(defun nano-org--progress ()
  "Prettify progress as color-coded bar."
  (let* ((beg (match-beginning 1))
         (end (match-end 1))
         (val (min 1.0
                   (if (match-beginning 2)
                       (* 0.01 (string-to-number (match-string-no-properties 2)))
                     (let ((q (string-to-number (match-string-no-properties 4))))
                       (if (= q 0)
                           1.0
                         (/ (* 1.0 (string-to-number (match-string-no-properties 3))) q))))))
         (w nano-org-progress)
         (complete (floor (* w val)))
         (w0 (- end beg 2))
         (w1 (/ (- w w0) 2))
         (bar (concat (make-string w1 ?\s)
                      (buffer-substring-no-properties (1+ beg) (1- end))
                      (make-string (- w w1 w0) ?\s))))
    (put-text-property 0 complete 'face 'nano-org-progress-complete bar)
    (put-text-property complete w 'face 'nano-org-progress-incomplete bar)
    (put-text-property beg end 'face 'nano-org-label)
    (put-text-property beg (1+ beg) 'display (substring bar 0 w1))
    (put-text-property (1- end) end 'display (substring bar (+ w1 w0) w))
    (dotimes (i w0)
      (put-text-property (+ 1 beg i) (+ 2 beg i)
                         'display (substring bar (+ w1 i) (+ w1 i 1))))))

(defun nano-org--tag ()
  "Prettify headline tags."
  (save-excursion
    (let* ((default-face (get-text-property (match-beginning 1) 'face))
           (colon-props `(display #(":" 0 1 (face org-hide)) face ,default-face))
           (beg (match-beginning 2))
           (end (match-end 2))
           colon-beg colon-end)
      (goto-char beg)
      (while (re-search-forward "::?" end 'noerror)
        (let ((cbeg (match-beginning 0))
              (cend (match-end 0)))
          (when colon-beg
            (put-text-property colon-end (1+ colon-end) 'display
                               (format #(" %c" 1 3 (cursor t)) (char-after colon-end)))
            (put-text-property (1- cbeg) cbeg 'display
                               (string (char-before cbeg) ?\s))
            (put-text-property
             colon-end cbeg 'face
             (if-let ((faces nano-org-tag-faces)
                      (face (or (cdr (assoc (buffer-substring-no-properties colon-end cbeg) faces))
                                (cdr (assq t faces)))))
                 `(:inherit (,face nano-org-tag))
               'nano-org-tag)))
          (add-text-properties cbeg cend colon-props)
          (setq colon-beg cbeg colon-end cend))))))

(defun nano-org--todo ()
  "Prettify headline todo keywords."
  (let ((todo (match-string-no-properties 1))
        (beg (match-beginning 1))
        (end (match-end 1)))
    (if (booleanp nano-org-todo-symbols)
	(put-text-property beg end 'display
			   (concat " " todo " "))
      (put-text-property beg end 'display
			 (if (assoc todo nano-org-todo-symbols)
			     (concat (cdr (assoc todo nano-org-todo-symbols)) "")
			   (if (string-match-p org-not-done-regexp todo)
			       "" ""))))
    (put-text-property
     beg end 'face
     (if-let ((face (or (cdr (assoc todo nano-org-todo-faces))
                        (cdr (assq t nano-org-todo-faces)))))
         `(:inherit (,face nano-org-label))
       (if (string-match-p org-not-done-regexp todo)
           'nano-org-todo 'nano-org-done)))))

(defun nano-org--timestamp ()
  "Prettify timestamps."
  (let* ((beg (1- (match-beginning 1)))
         (end (match-end 0))
         (tbeg (match-beginning 2))
         (tend (match-end 2))
         (active (eq (char-after beg) ?<))
         (date-face (if active
                        'nano-org-date-active
                      'nano-org-date-inactive))
         (time-face (if active
                        'nano-org-time-active
                      'nano-org-time-inactive)))
    (remove-list-of-text-properties beg end '(display))
    (if (consp nano-org-timestamp)
        (let* ((time (save-match-data
                       (encode-time
                        (org-fix-decoded-time
                         (org-parse-time-string
                          (buffer-substring beg end))))))
               (fmt nano-org-timestamp)
               (date-str (format-time-string (car fmt) time))
               (time-str (format-time-string (cdr fmt) time)))
          ;; year-month-day
          (add-text-properties beg (if (eq tbeg tend) end tbeg)
                               `(face ,date-face display ,date-str))
          ;; hour:minute
          (unless (eq tbeg tend)
            (add-text-properties tbeg end
                                 `(face ,time-face display ,time-str))))
      (put-text-property beg (1+ beg) 'display " ")
      (put-text-property (1- end) end 'display " ")
      ;; year-month-day
      (put-text-property beg (if (eq tbeg tend) end tbeg) 'face date-face)
      ;; hour:minute
      (unless (eq tbeg tend)
        (put-text-property (1- tbeg) tbeg 'display
                           (string (char-before tbeg) ?\s))
        (put-text-property tbeg end 'face time-face)))))

(defun nano-org--star ()
  "Prettify headline stars."
  (let* ((beg (match-beginning 1))
         (end (match-end 1))
         (level (- end beg))
         (hide-leading (and (eq nano-org-hide-stars 'leading)
                            (not (bound-and-true-p org-indent-mode)))))
    (when (and nano-org--hide-stars-cache (not (eq beg end)))
      (cl-loop for i from beg below end do
               (put-text-property i (1+ i) 'display
                                  (nth (logand i 1)
                                       nano-org--hide-stars-cache))))
    (when nano-org-star
      (when (and hide-leading org-hide-leading-stars)
        (put-text-property beg (1+ end) 'face (get-text-property end 'face)))
      (put-text-property
       (if hide-leading beg end)
       (1+ end) 'display
       (let ((cache (if (and nano-org--folded-star-cache
                             (org-invisible-p (pos-eol)))
                        nano-org--folded-star-cache
                      nano-org--expanded-star-cache)))
         (aref cache (min (1- (length cache)) level)))))))

(defun nano-org--cycle (state)
  "Flush font-lock for buffer or line at point for `org-cycle-hook'.
When STATE is `overview', `contents', or `all', flush for the
whole buffer; otherwise, for the line at point."
  (pcase state
    ((or 'overview 'contents 'all) (font-lock-flush))
    (_ (font-lock-flush (pos-bol) (pos-eol)))))

(defun nano-org--table ()
  "Prettify vertical table lines."
  (save-excursion
    (let* ((beg (match-beginning 0))
           (end (match-end 0))
           (tbeg (match-beginning 1))
           (tend (match-end 1))
           (inner (progn
                    (goto-char beg)
                    (forward-line)
                    (re-search-forward "^[ \t]*|" (line-end-position) t)))
           (separator (progn
                        (goto-char beg)
                        (re-search-forward "^[ \t]*|-" end 'noerror))))
      (goto-char beg)
      (while (re-search-forward
              "-+\\(?1:+\\)-\\|\\(?:^\\|[- ]\\)\\(?1:|\\)\\(?:$\\|[- ]\\)"
              end 'noerror)
        (let ((a (match-beginning 1))
              (b (match-end 1)))
          (cond
           ((and nano-org-table-vertical (or (not separator) inner))
            (add-text-properties a b
                                 `(display (space :width (,nano-org-table-vertical))
                                           face (:inherit org-table :inverse-video t))))
           ((and nano-org-table-horizontal separator)
            (put-text-property a b 'display `(space :width (,nano-org-table-vertical))))
           (t (put-text-property a b 'face 'org-hide)))))
      (goto-char beg)
      (when separator
        (when (numberp nano-org-table-horizontal)
          (add-face-text-property tbeg tend nano-org--table-overline 'append)
          (add-face-text-property beg (min (1+ end) (point-max)) `(:height ,nano-org-table-horizontal) 'append))
        (while (re-search-forward "[^|+]+" tend 'noerror)
          (let ((a (match-beginning 0))
                (b (match-end 0)))
            (cl-loop for i from a below b do
                     (put-text-property i (1+ i) 'display
                                        (nth (logand i 1) nano-org--table-sp)))))))))

(defun nano-org--block-name ()
  "Prettify block according to `nano-org-block-name'."
  (let* ((beg-ind (match-beginning 1))
         (beg-rep (match-beginning 2))
         (end-rep (match-end 3))
         (beg-name (match-beginning 3))
         (end-name (match-end 3))
         (names (and (listp nano-org-block-name) nano-org-block-name))
         (rep (cdr (assoc (downcase (match-string-no-properties 3)) names)))
         (fringe (and nano-org-block-fringe (not (bound-and-true-p org-indent-mode)))))
    (when (consp rep)
      (setq rep (if (= 8 (- beg-name beg-rep)) (car rep) (cadr rep))))
    (pcase rep
      ('t
       (add-face-text-property beg-name end-name 'nano-org-block-name)
       (put-text-property (if fringe beg-ind beg-rep) beg-name 'invisible 'nano-org))
      ((pred stringp)
       (add-face-text-property beg-name end-name 'nano-org-block-name)
       (put-text-property beg-rep end-rep 'display rep)
       (when fringe
         (put-text-property beg-ind beg-rep 'invisible 'nano-org))))))

(defun nano-org--source-name ()
  "Prettify source code block with the nerd-icon for the language.
Requires `nerd-icons'"
  (let* ((beg-ind (match-beginning 1))
	 (beg-rep (match-beginning 2))
	 (end-rep (match-end 3))
	 (beg-name (match-beginning 3))
	 (end-name (match-end 3))
	 (name (match-string-no-properties 3))
	 (name (if (cdr (assoc name nano-org-source-names))
		   (cdr (assoc name nano-org-source-names))
		 name))
	 (name (if nano-org-source-icon
		   (if (stringp nano-org-source-icon)
		       nano-org-source-icon
		     (nerd-icons-icon-for-mode (concat name "-mode"))))))
    (when name
      (put-text-property beg-rep end-rep 'display name)
      (add-face-text-property beg-name end-name 'nano-org-block-name)
      (put-text-property beg-ind beg-rep 'invisible 'nano-org))))

(defun nano-org--block-fringe ()
  "Prettify blocks with fringe bitmaps."
  (save-excursion
    (goto-char (match-beginning 0))
    (add-text-properties
     (point) (min (line-end-position) (point-max))
     '(wrap-prefix
       #(" " 0 1 (display (left-fringe nano-org--block-begin org-block-begin-line)))
       line-prefix
       #(" " 0 1 (display (left-fringe nano-org--block-begin org-block-begin-line)))))
    (forward-line)
    (while
        (cond
         ((eobp) nil)
         ((save-excursion
            (let ((case-fold-search t))
              (re-search-forward
               "^[ \t]*#\\+end_" (line-end-position) 'noerror)))
          (add-text-properties
           (point) (min (line-end-position) (point-max))
           '(wrap-prefix
             #(" " 0 1 (display (left-fringe nano-org--block-end org-block-begin-line)))
             line-prefix
             #(" " 0 1 (display (left-fringe nano-org--block-end org-block-begin-line)))))
          nil)
         (t
          (add-text-properties
           (point) (min (1+ (line-end-position)) (point-max))
           '(wrap-prefix
             #(" " 0 1 (display (left-fringe nano-org--block-inner org-block-begin-line)))
             line-prefix
             #(" " 0 1 (display (left-fringe nano-org--block-inner org-block-begin-line)))))
          (forward-line)
          t)))))

(defun nano-org--pre-redisplay (_)
  "Compute font parameters before redisplay."
  (when-let ((box (and nano-org-label-border
                       (face-attribute 'nano-org-label :box nil t))))
    (unless (equal (and (listp box) (plist-get box :color))
                   (face-attribute 'default :background nil t))
      (nano-org--update-faces)))
  (let ((face-remapping-alist
         `((default org-table
            ,@(or (ensure-list (cdr (assq 'default face-remapping-alist)))
                  '(default)))
           ,@face-remapping-alist)))
    (setq nano-org--table-sp-width (default-font-width)))
  (setf (cadr nano-org--table-overline) (face-attribute 'org-table :foreground nil t)))

(defun nano-org--update-faces ()
  "Update border of the `nano-org-label' face."
  (let* ((border (if (integerp nano-org-label-border)
                     nano-org-label-border
                   (max 2 (cond
                           ((integerp line-spacing)
                            line-spacing)
                           ((floatp line-spacing)
                            (ceiling (* line-spacing (frame-char-height))))
                           (t (/ (frame-char-height) 10))))))
         (box (list :color (face-attribute 'default :background nil t)
                    :line-width (cons -1 (- border)))))
    (set-face-attribute 'nano-org-label nil :box box)
    (set-face-attribute 'nano-org-habit nil :box box)))

(defun nano-org--update-bitmaps ()
  "Update fringe bitmaps."
  (when (and nano-org-block-fringe
             (fboundp 'fringe-bitmap-p)
             (not (fringe-bitmap-p 'nano-org--block-inner)))
    (let* ((block (- (expt 2 16) (expt 2 (if (booleanp nano-org-block-fringe) 0
				          nano-org-block-fringe)))))
      (define-fringe-bitmap 'nano-org--block-inner
        (vector block) nil 16 '(top t))
      (define-fringe-bitmap 'nano-org--block-begin
        (vector block) nil 16 '(top t))
      (define-fringe-bitmap 'nano-org--block-end
        (vector block) nil 16 '(bottom t)))))

(defun nano-org--symbol (str)
  "Add `nano-org-symbol' face to STR."
  (setq str (if (stringp str) (copy-sequence str) (char-to-string str)))
  (add-face-text-property 0 (length str) 'nano-org-symbol 'append str)
  str)

(defun nano-org--make-font-lock-keywords ()
  "Compute font-lock keywords."
  (append
   (when-let ((bullet (alist-get ?+ nano-org-list)))
     `(("^[ \t]*\\(+\\)[ \t]" 1 '(face nil display ,bullet))))
   (when-let ((bullet (alist-get ?- nano-org-list)))
     `(("^[ \t]*\\(-\\)[ \t]" 1 '(face nil display ,bullet))))
   (when-let ((bullet (alist-get ?* nano-org-list)))
     `(("^[ \t]+\\(*\\)[ \t]" 1 '(face nil display ,bullet))))
   (when nano-org-priority
     `(("^\\*+.*? \\(\\(\\[\\)#.\\(\\]\\)\\) "
        (1 (nano-org--priority)))))
   (when nano-org-todo
     `((,(format "^\\*+ +%s\\(?: \\|$\\)" (regexp-opt org-todo-keywords-1 t))
        (0 (nano-org--todo)))))
   (when nano-org-checkbox
     `((,org-list-full-item-re
        (3 (nano-org--checkbox) nil t))))
   (when (or nano-org-star (and nano-org-hide-stars
                                  (not (bound-and-true-p org-indent-mode))))
     `(("^\\(\\**\\)\\* "
        (0 ,(if (and (eq nano-org-hide-stars t)
                     (not (bound-and-true-p org-indent-mode)))
                ''(face nil invisible nano-org)
              '(nano-org--star))))))
   (when nano-org-horizontal-rule
     `(("^[ \t]*-\\{5,\\}$" 0
        '(face nano-org-horizontal-rule display
               ,(if (eq nano-org-horizontal-rule t)
                    '(space :width text)
                  nano-org-horizontal-rule)))))
   (when nano-org-table
     '(("^[ \t]*\\(|.*|\\)[ \t]*$" (0 (nano-org--table)))))
   (when nano-org-footnote
     `(("^\\(\\[fn:\\)[[:word:]-_]+\\]" ;; Definition
        ,@(if-let ((x (car nano-org-footnote)))
              `((0 '(face nil display ,x))
                (1 '(face nil display ,(propertize "[" 'display x))))
            '((1 '(face nil display "[")))))
       ("[^\n]\\(\\(\\[fn:\\)[[:word:]-_]+\\]\\)" ;; Reference
        ,@(if-let ((x (cdr nano-org-footnote)))
              `((1 '(face nil display ,x))
                (2 '(face nil display ,(propertize "[" 'display x))))
            '((2 '(face nil display "[")))))))
   (let ((target "\\([^<>\n\r\t ][^<>\n\r]*?[^<>\n\r\t @$]\\|[^<>\n\r\t @$]\\)"))
     (append
      (when nano-org-internal-target
        `((,(format "\\(<<\\)%s\\(>>\\)" target)
           (0 '(face nano-org-internal-target) t)
           (1 '(face nil display ,(nano-org--symbol (car nano-org-internal-target))))
           (3 '(face nil display ,(nano-org--symbol (caddr nano-org-internal-target))))
           ,@(unless (cadr nano-org-internal-target)
               '((2 '(face nil invisible nano-org)))))))
      (when nano-org-radio-target
        `((,(format "\\(<<<\\)%s\\(>>>\\)" target)
           (0 '(face nano-org-radio-target) t)
           (1 '(face nil display ,(nano-org--symbol (car nano-org-radio-target))))
           (3 '(face nil display ,(nano-org--symbol (caddr nano-org-radio-target))))
           ,@(unless (cadr nano-org-radio-target)
               '((2 '(face nil invisible nano-org)))))))))
   (when (integerp nano-org-progress)
     `((" \\(\\[\\(?:\\([0-9]+\\)%\\|\\([0-9]+\\)/\\([0-9]+\\)\\)]\\)"
        (0 (nano-org--progress)))))
   (when nano-org-tag
     `((,(concat "^\\*+.*?\\( \\)\\(:\\(?:" org-tag-re ":\\)+\\)[ \t]*$")
        (0 (nano-org--tag)))))
   ;; Ensure that blocks are properly fontified, source blocks etc.  This
   ;; fontification rule must come late such that nano-org does not interfere
   ;; with source fontification.
   '((org-fontify-meta-lines-and-blocks))
   (when nano-org-tag
     `((,(concat "^[ \t]*#\\+\\(?:filetags\\|FILETAGS\\):\\( +\\)\\(:\\(?:"
                 org-tag-re ":\\)+\\)[ \t]*$")
        (0 (nano-org--tag)))))
   (when nano-org-keyword
     `(("^[ \t]*\\(#\\+\\)\\([^: \t\n]+\\):"
        ,@(pcase nano-org-keyword
            ('t '(1 '(face nil invisible nano-org)))
            ((pred stringp) `(1 '(face nil display ,nano-org-keyword)))
            (_ '(0 (nano-org--keyword)))))))
   ;; Timestamps can come after keywords
   (when nano-org-timestamp
     '(("\\(?:<\\|^\\[\\|[^]]\\[\\)\\([0-9]\\{4\\}-[0-9]\\{2\\}-[0-9]\\{2\\}\\(?: [[:word:]]+\\.?\\)?\\(?: [.+-]+[0-9ymwdh/]+\\)*\\)\\(\\(?: [0-9:-]+\\)?\\(?: [.+-]+[0-9ymwdh/]+\\)*\\)\\(?:>\\|\\]\\)"
        (0 (nano-org--timestamp)))
       ("<[^>]+>\\(-\\)\\(-\\)<[^>]+>\\|\\[[^]]+\\]\\(?1:-\\)\\(?2:-\\)\\[[^]]+\\]"
        (1 '(face nano-org-label display #("  " 1 2 (face (:strike-through t) cursor t))) t)
        (2 '(face nano-org-label display #("  " 0 1 (face (:strike-through t)))) t))))
   ;; Do not add source block fringe markers if org-indent-mode is
   ;; enabled. org-indent-mode uses line prefixes for indentation.
   ;; Therefore we cannot have both.
   (when (and nano-org-block-fringe (not (bound-and-true-p org-indent-mode)))
     '(("^[ \t]*#\\+\\(?:begin\\|BEGIN\\)_\\S-"
        (0 (nano-org--block-fringe)))))
   (when nano-org-block-name
     (let* ((indent (and nano-org-block-fringe
                         (not (bound-and-true-p org-indent-mode))
                         '((1 '(face nil invisible nano-org)))))
            (name '(3 'nano-org-block-name append))
            (hide `(,@indent (2 '(face nil invisible nano-org)) ,name))
            (specs
             (pcase nano-org-block-name
               ('t ;; Hide
                (cons hide hide))
               (`((,_k . ,_v) . ,_rest) ;; Dynamic replacement
                '(((0 (nano-org--block-name))) . ((0 (nano-org--block-name)))))
               (`(,beg . ,end) ;; Static replacement
                `((,@indent (2 '(face nil display ,beg)) ,name) .
                  (,@indent (2 '(face nil display ,end)) ,name))))))
       `(("^\\([ \t]*\\)\\(#\\+\\(?:begin\\|BEGIN\\)_\\)\\(\\S-+\\).*"
          ,@(car specs))
         ("^\\([ \t]*\\)\\(#\\+\\(?:end\\|END\\)_\\)\\(\\S-+\\).*"
          ,@(cdr specs)))))
   (when nano-org-source-icon
     `(("^\\([ \t]*\\)\\(#\\+\\(?:begin\\|BEGIN\\)_\\(?:src\\|SRC\\)[ \t]+\\)\\(\\S-+\\).*"
	(0 (nano-org--source-name)))))
   (when (fboundp 'org-activate-folds) ;; Since Org 9.7.25
     '(org-activate-folds))))

;;;###autoload
(define-minor-mode nano-org-mode
  "Modern looks for Org."
  :global nil
  :group 'nano-org
  (unless (derived-mode-p 'org-mode)
    (error "`nano-org-mode' should be enabled only in `org-mode'"))
  (cond
   (nano-org-mode
    (add-to-invisibility-spec 'nano-org)
    (setq
     nano-org--folded-star-cache
     (and (eq nano-org-star 'fold)
          (vconcat (mapcar #'nano-org--symbol (mapcar #'car nano-org-fold-stars))))
     nano-org--expanded-star-cache
     (and nano-org-star
          (vconcat (mapcar #'nano-org--symbol (if (eq nano-org-star 'fold)
                                                    (mapcar #'cdr nano-org-fold-stars)
                                                  nano-org-replace-stars))))
     nano-org--hide-stars-cache
     (and (and (char-or-string-p nano-org-hide-stars)
               (not (bound-and-true-p org-indent-mode)))
          (list (nano-org--symbol nano-org-hide-stars)
                (nano-org--symbol nano-org-hide-stars)))
     nano-org--checkbox-cache
     (mapcar (pcase-lambda (`(,k . ,v)) (cons k (nano-org--symbol v)))
             nano-org-checkbox)
     nano-org--font-lock-keywords
     (append (remove '(org-fontify-meta-lines-and-blocks)
                     (remove '(org-activate-folds)
                             org-font-lock-keywords))
             (nano-org--make-font-lock-keywords)))
    (font-lock-remove-keywords nil org-font-lock-keywords)
    (font-lock-add-keywords nil nano-org--font-lock-keywords)
    (setq-local font-lock-unfontify-region-function #'nano-org--unfontify)
    (add-hook 'pre-redisplay-functions #'nano-org--pre-redisplay nil 'local)
    (add-hook 'org-after-promote-entry-hook #'nano-org--unfontify-line nil 'local)
    (add-hook 'org-after-demote-entry-hook #'nano-org--unfontify-line nil 'local)
    (when (eq nano-org-star 'fold)
      (add-hook 'org-cycle-hook #'nano-org--cycle nil 'local))
    (nano-org--update-faces)
    (nano-org--update-bitmaps))
   (t
    (remove-from-invisibility-spec 'nano-org)
    (font-lock-remove-keywords nil nano-org--font-lock-keywords)
    (font-lock-add-keywords nil org-font-lock-keywords)
    (setq-local font-lock-unfontify-region-function #'org-unfontify-region)
    (remove-hook 'pre-redisplay-functions #'nano-org--pre-redisplay 'local)
    (remove-hook 'org-after-promote-entry-hook #'nano-org--unfontify-line 'local)
    (remove-hook 'org-after-demote-entry-hook #'nano-org--unfontify-line 'local)
    (when (eq nano-org-star 'fold)
      (remove-hook 'org-cycle-hook #'nano-org--cycle 'local))))
  (without-restriction
    (with-silent-modifications
      (nano-org--unfontify (point-min) (point-max)))
    (font-lock-flush)))

(defun nano-org--unfontify-line ()
  "Unfontify prettified elements on current line."
  (nano-org--unfontify (pos-bol) (pos-eol)))

(defun nano-org--unfontify (beg end &optional _loud)
  "Unfontify prettified elements between BEG and END."
  (let ((font-lock-extra-managed-props
         (append
          ;; Only remove line/wrap-prefix if block fringes are used
          (if (and nano-org-block-fringe (not (bound-and-true-p org-indent-mode)))
              '(wrap-prefix line-prefix display invisible)
            '(display invisible))
          font-lock-extra-managed-props)))
    (org-unfontify-region beg end)))

;;;###autoload
(defun nano-org-agenda ()
  "Finalize Org agenda highlighting."
  (remove-from-invisibility-spec 'nano-org)
  (add-to-invisibility-spec 'nano-org) ;; Not idempotent?!
  (add-hook 'pre-redisplay-functions #'nano-org--pre-redisplay nil 'local)
  (setq-local face-remapping-alist (copy-tree face-remapping-alist))
  (maphash (lambda (face _spec)
             (when (string-prefix-p "org-habit-" (symbol-name face))
               (setf (alist-get face face-remapping-alist nil 'remove)
                     (and nano-org-label-border `(nano-org-habit ,face)))))
           face--new-frame-defaults)
  (save-excursion
    (save-match-data
      (let (case-fold-search)
        (when nano-org-todo
          (goto-char (point-min))
          (while (< (point) (point-max))
            (when-let ((org-not-done-regexp (get-text-property (point) 'org-not-done-regexp))
                       (re (get-text-property (point) 'org-todo-regexp))
                       (re (concat " " re " "))
                       ((re-search-forward re (pos-eol) 'noerror)))
              (nano-org--todo))
            (goto-char (min (1+ (pos-eol)) (point-max)))))
        (when nano-org-tag
          (goto-char (point-min))
          (let ((re (concat "\\( \\)\\(:\\(?:" org-tag-re "::?\\)+\\)[ \t]*$")))
            (while (re-search-forward re nil 'noerror)
              (nano-org--tag))))
        (when nano-org-priority
          (goto-char (point-min))
          (while (re-search-forward "\\(\\[#.\\]\\)" nil 'noerror)
            ;; For some reason the org-agenda-fontify-priorities adds overlays?!
            (when-let ((ov (overlays-at (match-beginning 0))))
              (overlay-put (car ov) 'face nil))
            (nano-org--priority)))))))

;;;###autoload
(define-globalized-minor-mode global-nano-org-mode
  nano-org-mode nano-org--on
  :group 'nano-org
  (if global-nano-org-mode
      (add-hook 'org-agenda-finalize-hook #'nano-org-agenda)
    (remove-hook 'org-agenda-finalize-hook #'nano-org-agenda)))

(defun nano-org--on ()
  "Enable `nano-org' in every Org buffer."
  (when (derived-mode-p #'org-mode)
    (nano-org-mode)))

(add-hook 'org-mode-hook 'nano-org-mode)

(provide 'nano-org)
;;; nano-org.el ends here
