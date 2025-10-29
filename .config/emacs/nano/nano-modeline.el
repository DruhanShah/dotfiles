;;; nano-modeline.el --- N Λ N O modeline -*- lexical-binding: t -*-

;; Copyright (C) 2021-2024 Free Software Foundation, Inc.

;; Maintainer: Nicolas P. Rougier <Nicolas.Rougier@inria.fr>
;; URL: https://github.com/rougier/nano-modeline
;; Version: 2.0
;; Package-Requires: ((emacs "27.1"))
;; Keywords: convenience, mode-line, header-line

;; This file is not part of GNU Emacs.

;; This file is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 3, or (at your option)
;; any later version.

;; This file is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; For a full copy of the GNU General Public License
;; see <https://www.gnu.org/licenses/>.

;;; Commentary:
;;
;; Nano modeline is a an alternative to the GNU/Emacs modeline.  It can
;; be displayed at the bottom (mode-line) or at the top (header-line)
;; depending on the nano-modeline-position custom setting.  There are
;; several modelines that can be installed on a per-mode basis or as
;; the default.
;;
;; Everything is configurable via the nano-modeline customization group.
;;
;; Usage example:
;;
;; Use default modeline for the current buffer
;; (nano-modeline)
;;
;; Install the modeline for all prog buffers:
;; (add-hook 'prog-mode-hook
;;    (lambda () (nano-modeline nano-modeline-format-default)))
;;
;; Make the default modeline the default for all buffers:
;; (nano-modeline nil t)
;;
;;; NEWS:
;;
;; Version  2.0
;; - Full rewrite for simplification
;; - Advanced customization interfaces
;; - No more svg buttons (only text buttons)
;; - No mode active/inactive faces (active indicator instead)
;; - Pixel precise alignment of the mode-line/header-line
;;
;; Version  1.1.0
;; - Minor bugfix with org-capture
;; - Better mu4e message mode line
;; - Fixed eat mode line
;; - Better margin/fringe alignment
;; - API change: button now take advantage of new svg-lib API
;; - Fixed flat-button style
;;
;; Version 1.0.1
;; - Minor bugfix
;;
;; Version 1.0.0
;; - Complete rewrite to make it simpler & faster
;; - API break: No longer a minor mode
;; - Activatable buttons can be added and grouped
;; - Modeline can be now be activated through modes hook
;;
;; Version 0.7.2
;; - Fix a bug in info mode (breadcrumbs)
;; - Fix mu header mode for version 1.8
;; - Put back padding (for default style)
;;
;; Version 0.7.1
;; - Fix a bug with mu4e-dashboard
;; - Fix a bug in pdf view mode
;; - Better org-capture mode
;;
;; Version 0.7
;; - Prefix is now an option (none, status or icon)
;; - Prefix can be replaced by icons
;; - Better space computation
;; - New imenu-list mode
;; - Indirect buffers are now handled properly
;; - Bugfix in org-clock-mode
;;
;; Version 0.6
;; - Spaces have face that enforce active/inactive
;; - Better marker for dedicated windows
;; - Internal reordering of modes, most frequent first
;;    (educated guess, might vary greatly with users)
;;
;; Version 0.5.1
;; - Bug fix (make-obsolete-variable)
;; - Added marker for dedicated window
;;
;; Version 0.5
;; - Dynamic version that is now configurable thanks to the wonderful
;;   contribution of Hans Donner (@hans-d)
;;
;; Version 0.4
;; - Reverted to RO/RW/** default prefix
;;
;; Version 0.3
;; - Usage of :align-to: properties for better alignment
;; - Added elpher mode
;; - Fix user mode
;;
;; Version 0.2
;; - Implements modeline as minor mode
;;
;; Version 0.1
;; - Submission to ELPA
;;

;;; Code:
(require 'flexoki-themes)

(defgroup nano nil
  "N Λ N O."
  :group 'convenience)

(defgroup nano-modeline nil
  "N Λ N O Modeline."
  :group 'nano)

(defgroup nano-modeline-faces nil
  "N Λ N O modeline faces."
  :group 'nano-modeline)

(defgroup nano-modeline-modes nil
  "N Λ N O modeline modes."
  :group 'nano-modeline)

(define-widget 'nano-modeline-part-type 'lazy
  "Nano modeline part made of various elements."
  :offset 4
  :tag "Nano modeline part"
  :type '(repeat
          (choice (choice :tag "→ Border"
                     (const :tag "Left" nano-modeline-element-border-left)
                     (const :tag "Right" nano-modeline-element-border-right))
                  (choice :tag "→ Space"
                     (const :tag "Full" nano-modeline-element-space)
                     (const :tag "Half" nano-modeline-element-half-space)
                     (list  :tag "Custom" (const :tag "" nano-modeline-element-space)
                                          (integer :tag "Width (pixels)")))
                  (choice :tag "→ Calendar"
                     (const :tag "Selected date"  nano-modeline-element-calendar-date))
                  (choice :tag "→ Buffer"
                     (const :tag "Name" nano-modeline-element-buffer-name)
                     (const :tag "Mode" nano-modeline-element-buffer-mode)
                     (const :tag "VC mode" nano-modeline-element-buffer-vc-mode)
                     (const :tag "Diagnostics" nano-modeline-element-diagnostics)
                     (const :tag "Position" nano-modeline-element-buffer-position))
                  (choice :tag "→ Terminal"
                     (const :tag "Status" nano-modeline-element-terminal-status)
                     (const :tag "Name" nano-modeline-element-terminal-name)
                     (const :tag "Mode" nano-modeline-element-terminal-mode)
                     (const :tag "Working directory" nano-modeline-element-terminal-directory))
                  (choice :tag "→ Org capture"
                     (const :tag "Description"  nano-modeline-element-org-capture-description)
                     (const :tag "Save (button)" nano-modeline-button-org-capture-save)
                     (const :tag "Kill (button)" nano-modeline-button-org-capture-kill)
                     (const :tag "Refile (button)" nano-modeline-button-org-capture-refile))
                  (choice :tag "→ Elfeed"
                     (const :tag "Update (button)" nano-modeline-button-elfeed-update)
                     (const :tag "Search filter" nano-modeline-element-elfeed-search-filter)
                     (const :tag "Search Count" nano-modeline-element-elfeed-search-count)
                     (const :tag "Entry feed" nano-modeline-element-elfeed-entry-feed)
                     (const :tag "Entry count" nano-modeline-element-elfeed-entry-count)
                     (const :tag "Entry title" nano-modeline-element-elfeed-entry-title))
                  (choice :tag "→ Window"
                     (const :tag "Status" nano-modeline-element-window-status)
                     (const :tag "Close" nano-modeline-button-window-close))
                  (list  :tag "Button" (const :tag "" nano-modeline-button)
                                       (string :tag "Label")
                                       (function :tag "Action")
                                       (symbol :tag "state")
                                       (string :tag "Help message"))
                  (choice :tag "→ Custom"
                     (string :tag "String")
                     (function :tag "Function")))))

(define-widget 'nano-modeline-type 'lazy
  "Nano modeline made of left and right parts"
  :offset 4
  :tag "Nano modeline"
  :type '(cons
          (nano-modeline-part-type :tag "Left part")
          (nano-modeline-part-type :tag "Right part")))

(defcustom nano-modeline-symbol-list
  '((buffer-read-only  . "󰌾")
    (buffer-modified   . "󰆓")
    (buffer-terminal   . "")
    (buffer-clone      . "")
    (buffer-narrow     . "")
    (mode-magit . "")
    (mode-dired . "")
    (mode-music . "")
    (window-close . "")
    (window-active . "●")
    (window-inactive . "")
    (window-dedicated . "󰐃")
    (vc-branch  . "󰘬")
    (vc-hash  . "#"))
  "Various symbols used in the modeline.
It is possible to add padding to left and right for
symbols that do not align perfectly."
  :type '(alist :key-type symbol
                :value-type (string :tag "Label"))
  :group 'nano-modeline)

(defcustom nano-modeline-position 'header
  "Default position for the nano modeline."
  :type '(choice (const :tag "Top"    header)
                 (const :tag "Bottom" footer))
  :group 'nano-modeline)

(defcustom nano-modeline-borders '(nil . nil)
  "Whether to add left / right borders to modlines."
  :type '(cons (boolean :tag "Left")
                 (boolean :tag "Right"))
  :group 'nano-modeline)

(defcustom nano-modeline-border-color (face-background 'default)
  "Border color."
  :type '(color)
  :group 'nano-modeline)

(defcustom nano-modeline-alignment '(window . window)
  "Left and right alignment of the mode-line (or header-line)."
  :type '(cons (choice :tag "Left"
                       (const window)
                       (const margin)
                       (const fringe)
                       (const text))
               (choice :tag "Right"
                       (const window)
                       (const margin)
                       (const fringe)
                       (const text)))
  :group 'nano-modeline)

(defcustom nano-modeline-padding '(0.40 . 0.45)
  "Default vertical space adjustment for the buffer status element.
The unit is fraction of character height"
  :type '(cons (float :tag "Top spacing")
               (float :tag "Bottom spacing"))
  :group 'nano-modeline)

(defface nano-modeline-face-buffer-read-only
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'default)
        :weight ,(face-attribute 'default :weight))))
  "Face for read only buffer."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-buffer-read-write
  `((t (:foreground ,(face-background 'default)
        :background ,(face-background 'flexoki-themes-ultralight)
        :weight ,(face-attribute 'bold :weight))))
  "Face for read-write buffer."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-buffer-modified
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-red)
        :weight ,(face-attribute 'bold :weight))))
  "Face for modified buffer."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-buffer-marked
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-purple)
        :weight ,(face-attribute 'bold :weight))))
  "Face for marked buffer."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-tag
  `((t ( :foreground ,(face-background 'default)
         :background ,(face-foreground 'flexoki-themes-blue)
         :weight ,(face-attribute 'bold :weight))))
  "Face for tags."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-default
  `((t (:foreground ,(face-foreground 'default))))
  "Default face for modeline."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-primary
  `((t (:foreground ,(face-foreground 'default)
        :weight ,(face-attribute 'bold :weight))))
  "Face for primary information."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-secondary
  `((t (:foreground ,(face-background 'flexoki-themes-ultralight))))
  "Face for secondary information."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-active
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-magenta)
        :weight ,(face-attribute 'bold :weight))))
  "Active button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-progress
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-orange)
        :weight ,(face-attribute 'bold :weight))))
  "Progress button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-dangerous
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-red)
        :weight ,(face-attribute 'bold :weight))))
  "Dangerous button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-inactive
  `((t (:foreground ,(face-foreground 'flexoki-themes-highlight)
        :background ,(face-background 'default))))
  "Inactive button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-highlight
  `((t (:foreground ,(face-background 'default)
        :background ,(face-foreground 'flexoki-themes-blue)
        :weight ,(face-attribute 'bold :weight))))
  "Highlight button face."
  :group 'nano-modeline-faces)


(defcustom nano-modeline-format-default
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-buffer-name
	  nano-modeline-element-space
	  nano-modeline-element-buffer-modified)
        '(nano-modeline-element-diagnostics
	  nano-modeline-element-space
	  nano-modeline-element-buffer-position
          nano-modeline-element-window-status
          nano-modeline-element-space))
    "Default format."
    :type 'nano-modeline-type
    :group 'nano-modeline-modes)

(defcustom nano-modeline-format-magit
  (cons '(nano-modeline-element-buffer-mode
	  nano-modeline-element-space
          nano-modeline-element-magit-repository)
        '(nano-modeline-element-buffer-vc-mode
	  nano-modeline-element-space))
    "Default format."
    :type 'nano-modeline-type
    :group 'nano-modeline-modes)

(defcustom nano-modeline-format-dired
  (cons '(nano-modeline-element-buffer-mode
	  nano-modeline-element-space
          nano-modeline-element-dired-buffer-name)
        '())
    "Default format."
    :type 'nano-modeline-type
    :group 'nano-modeline-modes)

(defcustom nano-modeline-format-terminal
  (cons '(nano-modeline-element-terminal-status
          nano-modeline-element-space
          nano-modeline-element-terminal-directory)
        '(nano-modeline-element-terminal-name
	  nano-modeline-element-space
	  nano-modeline-element-terminal-mode
          nano-modeline-element-window-status
          nano-modeline-element-space))
  "Modeline format for terminals."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defcustom nano-modeline-format-calendar
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-calendar-date)
        '(nano-modeline-element-window-status
          nano-modeline-element-space))
  "Modeline format for calendar."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defcustom nano-modeline-format-org-capture
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-buffer-name
          nano-modeline-element-space
          nano-modeline-element-org-capture-description)
        '(nano-modeline-button-org-capture-kill
          nano-modeline-element-half-space
          nano-modeline-button-org-capture-refile
          nano-modeline-element-half-space
          nano-modeline-button-org-capture-save
          nano-modeline-element-half-space))
  "Modeline format for org capture."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defcustom nano-modeline-format-org-lookup
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-buffer-name
          nano-modeline-element-space
          nano-modeline-element-buffer-mode)
        '(nano-modeline-button-window-close
          nano-modeline-element-half-space))
  "Modeline format for org lookup."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defcustom nano-modeline-format-nano-agenda
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-nano-agenda-date)
        '(nano-modeline-button-nano-agenda-prev-month
          nano-modeline-element-half-space
          nano-modeline-button-nano-agenda-prev-day
          nano-modeline-element-half-space
          nano-modeline-button-nano-agenda-today
          nano-modeline-element-half-space
          nano-modeline-button-nano-agenda-next-day
          nano-modeline-element-half-space
          nano-modeline-button-nano-agenda-next-month
          nano-modeline-element-half-space
          ))
    "NANO agenda format."
    :type 'nano-modeline-type
    :group 'nano-modeline-modes)

(defcustom nano-modeline-format-elfeed-search
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-elfeed-search-filter)
        '(nano-modeline-element-elfeed-search-count
          nano-modeline-element-space
          nano-modeline-button-elfeed-update
          nano-modeline-element-window-status
          nano-modeline-element-half-space))
  "Modeline format for elfeed search."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defcustom nano-modeline-format-elfeed-entry
  (cons '(nano-modeline-element-buffer-mode
          nano-modeline-element-space
          nano-modeline-element-elfeed-entry-feed)
        '(nano-modeline-element-elfeed-entry-count
          nano-modeline-element-window-status
          nano-modeline-element-space))
  "Modeline format for elfeed search."
  :type 'nano-modeline-type
  :group 'nano-modeline-modes)

(defun nano-modeline-align-to (direction what &optional char-size pixel-size)
  "This methods return a display space specification to align some text.
The text is aligned on the DIRECTION ('left or 'right)
of WHAT ('window, 'margin, 'fringe or 'text) plus CHAR-SIZE and PIXEL-SIZE."

  (let* ((char-size (or char-size 0))
         (pixel-size (or pixel-size 0)))
    (cond ((eq 'left direction)
           (cond ((eq what 'window) (if fringes-outside-margins
                                        `(space :align-to (+ left-fringe
                                                             (,pixel-size)
                                                             ,char-size))
                                      `(space :align-to (+ left-margin
                                                           (,pixel-size)
                                                           ,char-size))))
                 ((eq what 'fringe) `(space :align-to (+ left-fringe
                                                         (,pixel-size)
                                                         ,char-size)))
                 ((eq what 'margin) `(space :align-to (+ left-margin
                                                         (,pixel-size)
                                                         ,char-size)))
                 (t                 `(space :align-to (+ left
                                                         (,pixel-size)
                                                         ,char-size)))))
          ((eq 'right direction)
           (cond ((eq what 'window) `(space :align-to (+ scroll-bar
                                                  (1.0 . scroll-bar)
                                                  (,pixel-size)
                                                  ,char-size)))
          ((eq what 'fringe) `(space :align-to (+ right-fringe
                                                  (1.0 . right-fringe)
                                                  (,pixel-size)
                                                  ,char-size)))
          ((eq what 'margin) `(space :align-to (+ right-margin
                                                  (1.0 . right-margin)
                                                  (,pixel-size)
                                                  ,char-size)))
          (t                 `(space :align-to (+ right
                                                  (,pixel-size)
                                                  ,char-size))))))))

(defun nano-modeline-padding-to (&optional left right face)
  "Return the padding to precisely align the mode-line.
The mode-line (or header-line) can be aligned to
the window, margin, fringe or text extents,
depending on LEFT and RIGHT.  LEFT and RIGHT can be constant ('window,
'fringe, 'margin or 'text) or a cons specifying (what . (char-size
. pixel-size)).  It returns two strings that must be respectively
prepended and appended to the mode-line (or header-line).  An optional
FACE can be given to be used for the prefix and the suffix."

  (let* ((left (or left (car nano-modeline-alignment)))
         (left (if (not (consp left))
                   (cons left '(0 . 0))
                 left))
         (right (or right (cdr nano-modeline-alignment)))
         (right (if (not (consp right))
                    (cons right '(0 . 0))
                  right))
         (face (or face `(:foreground ,(face-foreground 'default)
                          :background ,(face-background 'default)
                          :underline nil :overline nil :inherit nil :box nil))))
    (cons (concat (propertize " " 'display (nano-modeline-align-to 'left 'window))
                  (propertize " " 'display (nano-modeline-align-to 'left (car left) (cadr left) (cddr left))
                                  'face face))
          (concat (propertize " " 'display (nano-modeline-align-to 'right (car right) (cadr right) (cddr right)))
                  (propertize " " 'display (nano-modeline-align-to 'right 'window) 'face face)))))

(defun nano-modeline--eval-element (element)
  "Evaluate an ELEMENT depending on its type."

  (cond ((stringp element)   element)
        ((functionp element) (funcall element))
        ((consp element)     (apply element))
        (t                   "(error)")))

(defun nano-modeline-make (format)
  "This function builds a modeline with elements provided in FORMAT.
It takes care of truncating first the left part and then the
right part if the combination of left and right doesn't fit the
modeline."

  (let* ((left (concat (when (car nano-modeline-borders)
                         (nano-modeline-element-border-left))
                  (mapconcat #'nano-modeline--eval-element (car format) "")))
         (right (concat (mapconcat #'nano-modeline--eval-element (cdr format) "")
                        (when (cdr nano-modeline-borders)
                          (nano-modeline-element-border-right))))
         (alignment nano-modeline-alignment)
         (padding (nano-modeline-padding-to (car alignment) (cdr alignment)))

         ;; Compute modeline width taking into account margin and alignment
         (width (+ (window-width)
                   (cond ((and fringes-outside-margins (eq 'fringe (car alignment)))
                          (or (car (window-margins)) 0))
                         ((and (not fringes-outside-margins) (eq 'margin (car alignment)))
                          (+ 1 (or (car (window-margins)) 0)))
                         (t 0))
                   (cond ((and fringes-outside-margins (eq 'fringe (cdr alignment)))
                          (or (cdr (window-margins)) 0))
                         ((and (not fringes-outside-margins) (eq 'margin (cdr alignment)))
                          (+ 1 (or (cdr (window-margins)) 0)))
                         (t 0))))

         ;; Truncate left member (first) if necessary, minimum size is 4
         ;; -> 7 corresponds to the size of border + 1
         (right-width (floor (/ (string-pixel-width right) (frame-char-width))))
         (max-width (max (- width right-width) 4))
         (left (truncate-string-to-width left max-width nil nil "…"))

         ;; Truncate right member (second) if necessary
         (right (if (> (+ right-width (length left)) width)
                    (truncate-string-to-width right (- width (length left)) nil nil "…")
                  right))
         (pixel-adjust (- (string-pixel-width right))))
    (concat (car padding)
            left
            (propertize " "
                        'display (nano-modeline-align-to
                                  'right 'fringe 0 pixel-adjust))
            right
            (cdr padding))))

(defun nano-modeline-symbol (name)
  "Retrieve symbol for NAME from the nano-modeline-symbols list."
  (or (alist-get name nano-modeline-symbol-list) "??"))

(defun nano-modeline-element-magit-repository ()
  "Return the name of the working repository for Magit buffers."
  (propertize (concat
	       " "
	       (replace-regexp-in-string "magit: " "" (buffer-name))
	       " ")
	      'face 'nano-modeline-face-primary))

(defun nano-modeline-element-dired-buffer-name ()
  "Return the cleaned-up name of the directory for Dired buffers."
  (propertize (concat
	       " "
	       (replace-regexp-in-string "<[^>]+>" "" (buffer-name))
	       " ")
	      'face 'nano-modeline-face-primary))

(defun nano-modeline-element-buffer-mode (&optional symbol face raise)
  "Return a prefix indicating if buffer is read-only, read-write or modified.
If SYMBOL is provided, it will be used instead of the default with FACE and RAISE."

  (let* ((raise (or raise nano-modeline-padding))
         (face  (or face 'nano-modeline-face-buffer-read-write))
	 (is-magit (or (eq major-mode 'magit-status-mode) (eq major-mode 'magit-diff-mode)))
	 (is-dired (eq major-mode 'dired-mode))
	 (symbol (or symbol (cond ((buffer-narrowed-p)  (nano-modeline-symbol 'buffer-narrow))
                                  ((buffer-base-buffer) (nano-modeline-symbol 'buffer-clone))
				  (is-magit             (nano-modeline-symbol 'mode-magit))
				  (is-dired             (nano-modeline-symbol 'mode-dired))
                                  (buffer-read-only     (nano-modeline-symbol 'buffer-read-only))
                                  (t                    (nerd-icons-icon-for-mode major-mode))))))
    (propertize (concat
                 (propertize "   " 'display `(raise ,(car raise)))
                 symbol
                 (propertize " " 'display `(raise ,(- (cdr raise))))))))

(defun nano-modeline-element-buffer-modified ()
  "Return a symbol if the buffer is modified."
  (when (buffer-modified-p)
	(propertize (nano-modeline-symbol 'buffer-modified)
		    'face `(:inherit nano-modeline-face-primary
			    :foreground ,(face-foreground 'flexoki-themes-red)))))

(defun nano-modeline-element-buffer-name ()
  "Return a string with the buffer name."

  (propertize
   (format-mode-line " %b ")
   'face 'nano-modeline-face-primary))

(defun nano-modeline-element-buffer-vc-mode ()
  "VC information as (branch)."

  (when vc-mode
      (when-let* ((file (buffer-file-name))
                  (branch (substring-no-properties vc-mode 5)))
        (propertize (format "%s %s" (nano-modeline-symbol 'vc-branch) branch)
                    'face 'nano-modeline-face-secondary))))

(defun nano-modeline-diagnostic-counter (type)
  "Compute number of diagnostics in buffer with TYPE's severity.
TYPE is usually keyword `:error', `:warning' or `:note'."
  (let ((count 0))
    (dolist (d (flymake-diagnostics))
      (when (= (flymake--severity type)
               (flymake--severity (flymake-diagnostic-type d)))
	(cl-incf count)))
    (if (cl-plusp count)
	(concat (number-to-string count) " ")
      "")))

(defun nano-modeline-element-diagnostics-unit (type indicator &optional face)
  "Diagnostic information for TYPE using FACE, prefixed by an INDICATOR."
  (let* ((face (or face 'nano-modeline-face-secondary))
	 (count (nano-modeline-diagnostic-counter type))
	 (indicator (if (string-empty-p count) "" indicator)))
    (propertize (format "%s%s" indicator count)
		'face face)))

(defun nano-modeline-element-diagnostics ()
  "Return a string with the flymake diagnostics."
  (let ((errors (nano-modeline-element-diagnostics-unit :error " " 'error))
	(warnings (nano-modeline-element-diagnostics-unit :warning " " 'warning))
	(notes (nano-modeline-element-diagnostics-unit :note " " 'citar)))
    (concat errors warnings notes " ")))

(defun nano-modeline-element-buffer-position ()
  "Return a string describing current position in buffer."
  (propertize (format-mode-line " %l:%C") 'face 'nano-modeline-face-secondary))

(defun nano-modeline-element-window-spacing ()
  "Return conditional spacing."
  '(:eval (let (mode-line-format)
            (let ((padding (nano-modeline-padding-to)))
              (concat (car padding)
                      (if (or (window-in-direction 'down)
                              isearch-mode)
                          (propertize " " 'face '(:height 80))
                        (propertize " " 'face '(:height 10)))
                      (cdr padding))))))

(defun nano-modeline-element-window-status ()
  "Return a string describing window status."

  (let* ((dedicated (nano-modeline-symbol 'window-dedicated))
         (inactive (nano-modeline-symbol 'window-inactive))
         (active (nano-modeline-symbol 'window-active))
         (status (cond ((minibuffer-window-active-p (minibuffer-window))
                        (if (eq (old-selected-window) (selected-window))
                            (if (window-dedicated-p)
                                (cons dedicated 'nano-modeline-face-primary)
                              (cons active 'nano-modeline-face-primary))
                          (if (window-dedicated-p)
                             (cons dedicated 'nano-modeline-face-secondary))))
                       ((and (not (one-window-p)) (mode-line-window-selected-p))
                        (if (window-dedicated-p)
                            (cons dedicated 'nano-modeline-face-primary)
                          (cons active 'nano-modeline-face-primary)))
                       ((window-dedicated-p)
                        (cons dedicated 'nano-modeline-face-secondary))
                       ((not (one-window-p))
                        (cons inactive 'nano-modeline-face-secondary)))))
    (when (and (consp status) (> (length (car status)) 0))
      (propertize (concat " " (car status)) 'face (cdr status)))))


(defun nano-modeline-element-space (&optional width)
  "Return a space string of given pixel WIDTH."

  (let ((width (or width (frame-char-width))))
    (propertize " " 'display `(space :width (,width)))))

(defun nano-modeline-element-half-space ()
  "Return half a space string."

  (nano-modeline-element-space (floor (/ (frame-char-width) 2))))

(defun nano-modeline-element-border-left (&optional width face raise)
  "Return a string for a left border with given WIDTH (pixel) and FACE with RAISE."

  (let* ((color nano-modeline-border-color)
         (face (or face `(:background ,color :underline ,color)))
        (width (or width 1))
        (raise (or raise 0)))
  (propertize " " 'display `((raise ,raise) (space :width (,width))) 'face face )))

(defun nano-modeline-element-border-right (&optional width face raise)
  "Return a string for a right border with given WIDTH (pixel) and FACE with RAISE."

  (let* ((color nano-modeline-border-color)
         (face (or face `(:background ,color :underline ,color)))
         (width (or width 1))
         (raise (or raise 0))
         (align (cdr nano-modeline-alignment)))
    (concat
     (propertize " " 'display `((raise ,raise) (space :width (,width))) 'face face))))


(defun nano-modeline--button (label face)
  "Make a text button from LABEL and FACE."

  (let* ((padding (if (consp label)
                      (cdr label)
                    (cons (floor (/ (frame-char-width) 2))
                          (- (frame-char-width)
                             (floor (/ (frame-char-width) 2))))))
         (color nano-modeline-border-color)
         (label (if (consp label)
                    (car label)
                  label)))
    (propertize (concat (propertize " "   'display `((raise 0.1) (space :width (,(car padding)))))
                        (propertize label 'display `((raise 0.1)))
                        (propertize " "   'display `((raise 0.1) (space :width (,(cdr padding))))))
                'face `( :inherit ,face
                         :height 0.75
                         :overline ,color
                         :underline ,(if (bound-and-true-p nano-box-state)
                                         (face-background 'default)
                                       color)
                         :box (:color ,(face-background 'header-line nil 'default)
                                      :line-width (0 . 4))))))

(defun nano-modeline-element-tags (tags &optional face)
  "Make a tags string from TAGS and FACE."

  (let ((face (or face 'nano-modeline-face-tag)))
    (mapconcat (lambda (tag)
                 (let ((tag (concat (car (nano-modeline-symbol 'mail-tag)) tag)))
                   (nano-modeline--button tag face)))
               tags
               (nano-modeline-element-half-space))))


(defun nano-modeline-button (label &optional action state help)
  "Make a text button from LABEL and STATE that triggers ACTION when pressed.
A HELP text can be provided as a tootlip."

  (let ((buffer (current-buffer)))
    (propertize (nano-modeline--button label
                                       (cond ((eq state 'active)    'nano-modeline-face-button-active)
                                             ((eq state 'disabled)  'nano-modeline-face-button-inactive)
                                             ((eq state 'dangerous) 'nano-modeline-face-button-progress)
                                             ((eq state 'progress)  'nano-modeline-face-button-progress)
                                             (t                     'nano-modeline-face-button-inactive)))
                'keymap (unless (or (eq state 'progress) (eq state 'disabled))
                          (let ((map (make-sparse-keymap)))
                            (define-key map (kbd "<header-line> <mouse-1>")
                                        `(lambda ()
                                           (interactive)
                                           (when (and (get-buffer-window ,buffer)
                                                      (functionp ',action))
                                             (with-current-buffer ,buffer
                                               (funcall ',action)))))
                            map))
                'pointer (unless (or (eq state 'progress) (eq state 'disabled))
                           'hand)
                'mouse-face (unless (or (eq state 'progress) (eq state 'disabled))
                              '(:inherit nano-modeline-face-button-highlight))
                'help-echo help)))


(defun nano-modeline-button-window-close ()
  "Return a string button that closes the window."

  (let ((buffer (current-buffer)))
    (nano-modeline-button (nano-modeline-symbol 'window-close)
                               `(lambda ()
                                  (when (get-buffer-window ,buffer)
                                    (delete-window (get-buffer-window ,buffer))))
                               'active)))

;; --- Terminal ---------------------------------------------------------------

(defun nano-modeline-element-terminal-status ()
  "Terminal status."
  (nano-modeline-element-buffer-mode (nano-modeline-symbol 'buffer-terminal)
                                       'nano-modeline-face-buffer-modified))

(defun nano-modeline-element-terminal-name ()
  "Terminal shell name."
  (propertize (format "%s" shell-file-name) 'face 'nano-modeline-face-default))

(defun nano-modeline-element-terminal-directory (&optional max-length)
  "Current working directory truncated to MAX-LENGTH."

  (let* ((max-length (or max-length 64))
         (dir default-directory)
         (path (reverse (split-string (abbreviate-file-name dir) "/")))
         (output ""))
    (when (and path (equal "" (car path)))
      (setq path (cdr path)))
    (while (and path (< (length output) (- max-length 0)))
      (setq output (concat (car path) "/" output))
      (setq path (cdr path)))
    (when path
      (setq output (concat "…/" output)))
    (propertize output 'face 'nano-modeline-face-primary)))

(defun nano-modeline-element-terminal-mode ()
  "Terminal mode."
  (let ((mode (cond ((derived-mode-p '(term-mode))
                     (cond ((term-in-char-mode) "char")
                           ((term-in-line-mode) "line")
                           (t                   "????")))
                    ((derived-mode-p '(eat-mode))
                     (cond (eat--semi-char-mode "semi-char")
                           (eat--char-mode "char")
                           (eat--line-mode "line")))
                    (t nil))))
    (when mode
      (propertize (format "(%s mode)" mode) 'face 'nano-modeline-face-secondary))))

;; --- Org capture ------------------------------------------------------------

(defun nano-modeline-element-org-capture-description ()
  "Org capture description."

  (let* ((header (nth 4 (org-heading-components)))
         (header (or header ""))
         (header (org-link-display-format header))
         (header (replace-regexp-in-string org-ts-regexp3 "" header))
         (header (string-trim header))
         (header (substring-no-properties header)))
    (propertize (format "(%s)" header)
                'face 'nano-modeline-face-secondary)))

(defun nano-modeline-button-org-capture-save ()
  "Finalize the capture process."

    (nano-modeline-button "SAVE"
                          #'org-capture-finalize
                          'active
                          "Finalize the capture process"))

(defun nano-modeline-button-org-capture-kill ()
  "Abort the current capture process."

    (nano-modeline-button "KILL"
                          #'org-capture-kill
                          'active
                          "Abort the current capture process"))

(defun nano-modeline-button-org-capture-refile ()
  "Abort the current capture process."

    (nano-modeline-button "REFILE"
                          #'org-capture-refile
                          'active
                          "Finalize the current capture and then refile the entry."))

;; --- Calendar ---------------------------------------------------------------
(defun nano-modeline-element-calendar-date (&optional format)
  "Calendar date FORMAT."

  (let* ((date (calendar-cursor-to-date))
         (date (when date
                 (encode-time 0 0 0 (nth 1 date) (nth 0 date) (nth 2 date))))
         (format (or format "%d %B %Y")))
    (propertize (format-time-string format date)
                'face 'nano-modeline-face-primary)))


;; --- Nano Agenda -----------------------------------------------------------

(defun nano-modeline-element-nano-agenda-date (&optional format)
  "Current date FORMAT."

  (let ((format (or format "%A %d %B %Y")))
    (propertize (format-time-string format nano-agenda-date)
                'face 'nano-modeline-face-primary)))

(defun nano-modeline-button-nano-agenda-prev-month ()
  "Go to previous month."

  (nano-modeline-button "<<"
                        #' nano-agenda-goto-prev-month
                        'active
                        "Go to previous month"))

(defun nano-modeline-button-nano-agenda-today ()
  "Go to today."

  (nano-modeline-button "TODAY"
                        #' nano-agenda-goto-today
                        'active
                        "Go to today"))

(defun nano-modeline-button-nano-agenda-prev-day ()
  "Go to previous day."

  (nano-modeline-button "<"
                        #' nano-agenda-goto-prev-day
                        'active
                        "Go to previous day"))

(defun nano-modeline-button-nano-agenda-next-day ()
  "Go to nextious day."

  (nano-modeline-button ">"
                        #' nano-agenda-goto-next-day
                        'active
                        "Go to next day"))

(defun nano-modeline-button-nano-agenda-next-month ()
  "Go to nextious month."

  (nano-modeline-button ">>"
                        #' nano-agenda-goto-next-month
                        'active
                        "Go to next month"))



;; --- Elfeed -----------------------------------------------------------------
(defun nano-modeline-element-elfeed-entry-feed ()
  "Elfeed entry status."

  (let* ((feed (elfeed-entry-feed elfeed-show-entry))
         (feed-title (plist-get (elfeed-feed-meta feed) :title)))
    (propertize feed-title 'face 'nano-modeline-face-primary)))

(defun nano-modeline-element-elfeed-entry-title ()
  "Elfeed entry title."

  (let* ((title (elfeed-entry-title elfeed-show-entry))
         (title (string-replace "%" "%%" title)))
    (propertize title 'face 'nano-modeline-face-default)))

(defun nano-modeline-element-elfeed-entry-count ()
  "Count the number of entries and feeds being currently displayed."

  (with-current-buffer "*elfeed-search*"
    (cond ((zerop (elfeed-db-last-update)) " ")
          ((> (elfeed-queue-count-total) 0) " ")
          (t  (propertize (if (and elfeed-search-filter-active elfeed-search-filter-overflowing)
                              "?/?"
                            (cl-loop with feeds = (make-hash-table :test 'equal)
                                     for entry in elfeed-search-entries
                                     for feed = (elfeed-entry-feed entry)
                                     for url = (elfeed-feed-url feed)
                                     count entry into entry-count
                                     count (elfeed-tagged-p 'unread entry) into unread-count
                                     do (puthash url t feeds)
                                     finally
                                     (cl-return
                                      (format "%s/%s" (+ 1 unread-count) entry-count))))
                          'face 'nano-modeline-face-secondary)))))

(defun nano-modeline-button-elfeed-update ()
  "Button to start an update."

  (with-current-buffer "*elfeed-search*"

    (if (or (zerop (elfeed-db-last-update))
            (= (elfeed-queue-count-total) 0))
        (nano-modeline-button (nano-modeline-symbol 'mail-update)
                              #'elfeed-update
                              'active)
      (let* (;; (total (length elfeed-feeds))
             (total (if elfeed-use-curl
                        elfeed-curl-max-connections
                      url-queue-parallel-processes n))
             (in-process (- total (elfeed-queue-count-active)))
             (label (format " %d/%d" in-process total)))
        (nano-modeline-button
         (cons (concat (car (nano-modeline-symbol 'mail-update)) label) '(4 . 4))
         nil 'progress)))))

(defun nano-modeline-element-elfeed-search-filter ()
  "Elfeed search filter."

  (propertize
   (if (and (not (zerop (elfeed-db-last-update)))
            (> (elfeed-queue-count-total) 0))
       (let ((total (elfeed-queue-count-total))
             (in-process (elfeed-queue-count-active)))
         (format "%d jobs pending, %d active"  (- total in-process) in-process))
     (cond (elfeed-search-filter-active "")
           ((string-match-p "[^ ]" elfeed-search-filter) elfeed-search-filter)
           (t "")))
   'face 'nano-modeline-face-primary))

(defun nano-modeline-element-elfeed-search-count ()
  "Elfeed search statistics."
  (propertize (or (cond ((zerop (elfeed-db-last-update)) " ")
                        ((> (elfeed-queue-count-total) 0) " ")
                        (t (elfeed-search--count-unread))) " ")
   'face 'nano-modeline-face-secondary))


(defun nano-modeline (&optional format position default)
  "Install a modeline described by FORMAT at the given POSITION.
If DEFAULT is true, this is made the default mode/header line."

  (interactive)
  (let* ((position (or position nano-modeline-position))
         (color nano-modeline-border-color)
         (format (or format nano-modeline-format-default))
	 (header-line-faces (if (and (facep 'header-line-active)
				     (facep 'header-line-inactive))
				'(header-line-active header-line-inactive)
			      '(header-line)))
	 (mode-line-faces (if (and (facep 'mode-line-active)
				     (facep 'mode-line-inactive))
				'(mode-line-active mode-line-inactive)
			      '(mode-line)))
	 (sep `(:overline nil
		:underline (:color ,(face-foreground 'flexoki-themes-lowlight))
		:height 0.1
		:background ,(face-background 'default)
		:foreground ,(face-background 'default)))
	 (face `(:box (:color ,color :line-width (1 . 2))
                 :overline nil
                 :underline nil
		 :foreground ,(face-foreground 'default)
                 :background "#e6e4d9"))
         (face-relative `(:box (:color ,color :line-width (0 . 1))
                          :overline nil
                          :underline nil
			  :foreground ,(face-foreground 'default)
			  :background "#e6e4d9")))

    (face-remap-reset-base 'header-line)
    (face-remap-reset-base 'mode-line)

    ;; Install specific faces
    (if (not (eq position 'footer))
        (if default
            (progn
	      (dolist (f mode-line-faces)
		(apply #'set-face-attribute f nil sep))
	      (dolist (f header-line-faces)
		(apply #'set-face-attribute f nil face)))
          (progn
	    (dolist (f mode-line-faces)
	      (face-remap-add-relative f sep))
            (dolist (f header-line-faces)
	      (face-remap-add-relative f face-relative))))
      (if default
          (progn
            (apply #'set-face-attribute 'mode-line-active nil face)
            (apply #'set-face-attribute 'mode-line-inactive nil face))
        (progn
          (face-remap-add-relative 'mode-line-active face-relative)
          (face-remap-add-relative 'mode-line-inactive  face-relative))))

    ;; Install modeline
    (if (not (eq position 'footer))
        (progn
          (setq header-line-format `(:eval (nano-modeline-make ',format)))
          (setq mode-line-format "")
          (when default
              (setq-default header-line-format `(:eval (nano-modeline-make ',format)))
              (setq-default mode-line-format "")))
      (progn
        (setq mode-line-format `(:eval (nano-modeline-make ',format)))
        (setq header-line-format nil)
        (when default
          (setq-default mode-line-format `(:eval (nano-modeline-make ',format)))
          (setq-default header-line-format nil))))))

(add-hook 'text-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-default)))
(add-hook 'prog-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-default)))
(add-hook 'dired-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-dired)))
(add-hook 'magit-status-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-magit)))
(add-hook 'magit-diff-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-magit)))
(add-hook 'eshell-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-terminal)))
(add-hook 'term-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-terminal)))
(add-hook 'calendar-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-calendar)))
(add-hook 'nano-calendar-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-calendar)))
(add-hook 'org-capture-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-org-capture)))
(add-hook 'nano-agenda-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-nano-agenda)))
(add-hook 'elfeed-search-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-elfeed-search)))
(add-hook 'elfeed-show-mode-hook
	  (lambda () (nano-modeline nano-modeline-format-elfeed-entry)))

(provide 'nano-modeline)
;;; nano-modeline.el ends here
