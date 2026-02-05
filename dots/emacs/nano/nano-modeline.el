;;; nano-modeline.el --- N Λ N O modeline -*- lexical-binding: t -*-
;;; Code:
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
	  (choice
	   (choice :tag "→ Border"
		   (const :tag "Left" nano-modeline-element-border-left)
		   (const :tag "Right" nano-modeline-element-border-right))
	   (choice :tag "→ Space"
		   (const :tag "Full" nano-modeline-element-space)
		   (const :tag "Half" nano-modeline-element-half-space)
		   (list  :tag "Custom"
			  (const :tag "" nano-modeline-element-space)
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
		   (const :tag "Directory" nano-modeline-element-terminal-directory))
	   (choice :tag "→ Org capture"
		   (const :tag "Description"  nano-modeline-element-org-capture-desc)
		   (const :tag "Save (button)" nano-modeline-button-org-capture-save)
		   (const :tag "Kill (button)" nano-modeline-button-org-capture-kill)
		   (const :tag "Refile (button)" nano-modeline-button-org-capture-refile))
	   (choice :tag "→ Window"
		   (const :tag "Status" nano-modeline-element-window-status))
	   (list :tag "Button"
		 (const :tag "" nano-modeline-button)
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
  '((buffer-ro        . "󰌾")
    (buffer-modified  . "󰆓")
    (buffer-terminal  . "")
    (buffer-clone     . "")
    (buffer-narrow    . "")
    (mode-magit       . "")
    (mode-dired       . "")
    (mode-music       . "")
    (window-close     . "")
    (window-active    . "●")
    (window-inactive  . "")
    (window-dedicated . "󰐃")
    (vc-branch        . "󰘬"))
  "Various symbols used in the modeline.
It is possible to add padding to left and right for
symbols that do not align perfectly."
  :type '(alist :key-type symbol
                :value-type (string :tag "Label"))
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

(defface nano-modeline-face-buffer-modified
  `((t (:foreground ,(face-background 'default)
        :background "#af3029"
        :weight ,(face-attribute 'bold :weight))))
  "Face for modified buffer."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-tag
  `((t ( :foreground ,(face-background 'default)
         :background "#205ea6"
         :weight ,(face-attribute 'bold :weight))))
  "Face for tags."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-default
  `((t (:foreground "#444444")))
  "Default face for modeline."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-primary
  `((t (:foreground "#444444"
        :weight ,(face-attribute 'bold :weight))))
  "Face for primary information."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-secondary
  `((t (:foreground "#888888")))
  "Face for secondary information."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-active
  `((t (:foreground ,(face-background 'default)
        :background "#66800b"
        :weight ,(face-attribute 'bold :weight))))
  "Active button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-progress
  `((t (:foreground ,(face-background 'default)
        :background "#ad8301"
        :weight ,(face-attribute 'bold :weight))))
  "Progress button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-dangerous
  `((t (:foreground ,(face-background 'default)
        :background "#af3029"
        :weight ,(face-attribute 'bold :weight))))
  "Dangerous button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-inactive
  `((t (:foreground "#aaaaaa"
        :background ,(face-background 'default))))
  "Inactive button face."
  :group 'nano-modeline-faces)

(defface nano-modeline-face-button-highlight
  `((t (:foreground ,(face-background 'default)
        :background "#5e409d"
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
    "Modeline format for Magit buffers."
    :type 'nano-modeline-type
    :group 'nano-modeline-modes)

(defcustom nano-modeline-format-dired
  (cons '(nano-modeline-element-buffer-mode
	  nano-modeline-element-space
          nano-modeline-element-dired-buffer-name)
        '())
    "Modeline format for Dired buffers."
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
          nano-modeline-element-org-capture-desc)
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
        '())
  "Modeline format for org lookup."
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
  (propertize (concat " "
		      (replace-regexp-in-string "magit: " "" (buffer-name)) " ")
	      'face 'nano-modeline-face-primary))

(defun nano-modeline-element-dired-buffer-name ()
  "Return the cleaned-up name of the directory for Dired buffers."
  (propertize (concat " "
		      (replace-regexp-in-string "<[^>]+>" "" (buffer-name)) " ")
	      'face 'nano-modeline-face-primary))

(defun nano-modeline-element-buffer-mode (&optional symbol face raise)
  "Return a prefix indicating if buffer is read-only, read-write or modified.
If SYMBOL is provided, it will be used instead of the default with FACE and RAISE."

  (let* ((raise (or raise nano-modeline-padding))
         (face  (or face 'nano-modeline-face-buffer-read-write))
	 (is-magit (or (eq major-mode 'magit-status-mode)
		       (eq major-mode 'magit-diff-mode)))
	 (is-dired (eq major-mode 'dired-mode))
	 (symbol (or symbol
		     (cond ((buffer-narrowed-p) (nano-modeline-symbol 'buffer-narrow))
			   ((buffer-base-buffer) (nano-modeline-symbol 'buffer-clone))
			   (is-magit (nano-modeline-symbol 'mode-magit))
			   (is-dired (nano-modeline-symbol 'mode-dired))
			   (buffer-read-only (nano-modeline-symbol 'buffer-ro))
			   (t (nerd-icons-icon-for-mode major-mode))))))
    (propertize (concat
                 (propertize "   " 'display `(raise ,(car raise)))
                 symbol
                 (propertize " " 'display `(raise ,(- (cdr raise))))))))

(defun nano-modeline-element-buffer-modified ()
  "Return a symbol if the buffer is modified."
  (when (buffer-modified-p)
	(propertize (nano-modeline-symbol 'buffer-modified)
		    'face `(:inherit nano-modeline-face-primary
			    :foreground "#af3029"))))

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



(defun nano-modeline (&optional format position default)
  "Install a modeline described by FORMAT at the given POSITION.
If DEFAULT is true, this is made the default mode/header line."

  (interactive)
  (let* ((color nano-modeline-border-color)
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
		:underline (:color "#999999")
		:height 0.1
		:box nil
		:background ,(face-background 'default)
		:foreground ,(face-background 'default)))
	 (face `(:box (:color "#cccccc"
		       :line-width (1 . 2))
                 :overline nil
                 :underline nil
		 :foreground ,(face-foreground 'default)
                 :background "#bbbbbb"))
         (face-relative `(:box (:color "#cccccc"
				:line-width (0 . 1))
                          :overline nil
                          :underline nil
			  :foreground ,(face-foreground 'default)
			  :background "#bbbbbb")))

    (face-remap-reset-base 'header-line)
    (face-remap-reset-base 'mode-line)

    ;; Install specific faces
    (if default
	(progn
	  (dolist (f mode-line-faces) (apply #'set-face-attribute f nil sep))
	  (dolist (f header-line-faces) (apply #'set-face-attribute f nil face)))
      (progn
	(dolist (f mode-line-faces) (face-remap-add-relative f sep))
	(dolist (f header-line-faces) (face-remap-add-relative f face-relative))))

    (progn
      (setq header-line-format `(:eval (nano-modeline-make ',format)))
      (setq mode-line-format "")
      (when default
	(setq-default header-line-format `(:eval (nano-modeline-make ',format)))
	(setq-default mode-line-format "")))))

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

(provide 'nano-modeline)
;;; nano-modeline.el ends here
