(setq gc-cons-threshold 63000000
      gc-cons-percentage 0.6)

(setq inhibit-startup-screen t)
(setq inhibit-startup-message t)
(setq inhibit-startup-echo-area-message t)
(setq initial-scratch-message nil)
(setq initial-buffer-choice nil)

(setq frame-title-format nil)
(setq use-file-dialog nil)
(setq use-dialog-box nil)
(setq pop-up-windows nil)
(setq indicate-empty-lines nil)
(setq cursor-in-non-selected-windows nil)

(setq initial-major-mode 'text-mode)
(setq default-major-mode 'text-mode)
(setq font-lock-maximum-decoration t)
(setq auto-fill-mode nil)
(setq fill-column 80)

(setq-default cursor-type '(hbar .  2))
(setq-default cursor-in-non-selected-windows nil)
(setq blink-cursor-mode nil)

(setq default-frame-alist
      (append (list
               '(vertical-scroll-bars . nil)
               '(scroll-bar-mode . -1)
               '(tool-bar-lines . 0)
	       '(tool-bar-position . left)
               '(menu-bar-lines . 0))))

(setq make-backup-files nil)

(set-display-table-slot standard-display-table 'truncation
			(make-glyph-code ?… 'font-lock-comment-face))
(set-display-table-slot standard-display-table 'wrap
			(make-glyph-code ?- 'font-lock-comment-face))

(setq custom-safe-themes t)
(setq use-short-answers t)
(setq read-answer-short t)

(global-auto-revert-mode)

(define-key global-map (kbd "C-h C-f") 'describe-function)
(define-key global-map (kbd "C-h C-v") 'describe-variable)
(define-key global-map (kbd "C-h C-S-f") 'describe-face)
(define-key global-map (kbd "C-h C-e") 'view-echo-area-messages)

(use-package evil
  :init
  (setq evil-want-keybinding nil
        evil-undo-system 'undo-redo
        evil-default-state 'normal
        evil-want-C-i-jump t
        evil-want-C-w-delete t
        evil-want-Y-yank-to-eol t
        evil-want-C-u-scroll t
        evil-want-C-d-scroll t)
  :config (evil-mode 1))

(use-package evil-collection
  :after evil
  :config (evil-collection-init))

(use-package evil-surround
  :after evil
  :config (global-evil-surround-mode 1))

(use-package evil-commentary
  :after evil
  :config (evil-commentary-mode))

(use-package evil-numbers
  :after evil
  :config
  (evil-define-key '(normal visual) 'global
    (kbd "C-a") 'evil-numbers/inc-at-pt
    (kbd "C-x") 'evil-numbers/dec-at-pt
    (kbd "g C-a") 'evil-numbers/inc-at-pt-incremental
    (kbd "g C-x") 'evil-numbers/dec-at-pt-incremental))

(use-package evil-god-state
  :after evil
  :config
  (evil-define-key 'normal global-map "\\" 'evil-execute-in-god-state)
  (evil-define-key 'god global-map [escape] 'evil-god-state-bail))

(add-to-list 'custom-theme-load-path (locate-user-emacs-file "themes/"))

(use-package doom-themes
  :custom
  (doom-themes-enable-bold t)
  (doom-themes-enable-italic t)
  (doom-everforest-background "hard")
  :config
  (load-theme 'doom-flexoki-light t))

(use-package spacious-padding
  :config
  (setq spacious-padding-widths
	'( :internal-border-width 20
	   :header-line-width 6
	   :mode-line-width 0
	   :custom-button-width 3
	   :right-divider-width 20
	   :scroll-bar-width 0
	   :fringe-width 0))
  (spacious-padding-mode 1))

(use-package ultra-scroll
  :init
  (setq scroll-conservatively 3
	scroll-margin 0)
  :config
  (ultra-scroll-mode 1))

(use-package fontaine
  :config
  (setq fontaine-presets
	'((default
	   :default-family "Iosevka"
	   :fixed-pitch-family "Iosevka"
	   :variable-pitch-family "Inter"
	   :mode-line-active-family "Inter"
	   :mode-line-inactive-family "Inter"
	   :header-line-family "Inter"

	   :default-weight regular
	   :bold-weight semi-bold
	   :italic-slant italic

	   :default-height 108
	   :line-spacing 0.1)))
  (fontaine-set-preset 'default))

(use-package ligature
  :config
  (ligature-set-ligatures
   'prog-mode '("<---" "<--"  "<<-" "<-" "->" "-->" "--->" "<->" "<-->" "<--->"
		"<---->" "<!--" "<==" "<===" "<=" "=>" "=>>" "==>" "===>" ">=" "<=>"
		"<==>" "<===>" "<====>" "<!---" "<~~" "<~" "~>" "~~>" "::" ":::"
		"==" "!=" "===" "!==" ":=" ":-" ":+" "<*" "<*>" "*>" "<|" "<|>" "|>"
		"+:" "-:" "=:" "<******>" "++" "+++"))
  (global-ligature-mode t))

(use-package nerd-icons
  :if (display-graphic-p)
  :config
  (setq nerd-icons-font-family "Symbols Nerd Font"))

(use-package nerd-icons-dired
  :after nerd-icons
  :hook (dired-mode . nerd-icons-dired-mode))

(use-package nerd-icons-ibuffer
  :after nerd-icons
  :hook (ibuffer-mode . nerd-icons-ibuffer-mode)
  :config
  (setq nerd-icons-ibuffer-formats
	'(("  "
	   mark " "
	   (icon 2 2) " "
	   (name 24 24 :left :elide) "  "))))

(use-package nerd-icons-corfu
  :after nerd-icons
  :after corfu
  :config (add-to-list 'corfu-margin-formatters #'nerd-icons-corfu-formatter))

(use-package nerd-icons-completion
  :hook (marginalia-mode . nerd-icons-completion-marginalia-setup)
  :config
  (nerd-icons-completion-mode))

(use-package rainbow-mode)

(use-package transient)
(use-package magit)

(use-package copilot
  :vc (:url "https://github.com/copilot-emacs/copilot.el"
       :rev :newest
       :branch "main")
  :hook (prog-mode . copilot-mode)
  :config
  (define-key copilot-completion-map (kbd "<tab>") 'copilot-accept-completion))

(require 'dired)
(require 'dired-x)
(setq dired-listing-switches
      "-aghol --almost-all --human-readable --group-directories-first"
      dired-omit-files
      (concat dired-omit-files "\\|^\\..+$\\|^__pycache__$"))
(setq dired-auto-revert-buffer #'dired-directory-changed-p)
(setq image-dired-cmd-create-thumbnail-program "/run/current-system/sw/bin/magick")
(put 'dired-find-alternate-file 'disabled nil)
(add-hook 'dired-mode-hook 'dired-hide-details-mode)
(add-hook 'dired-mode-hook 'dired-omit-mode)

(define-key global-map (kbd "C-x C-d") 'dired-jump)
(evil-define-key 'normal dired-mode-map
  "g." 'dired-omit-mode
  "h" 'dired-jump
  "l" 'dired-find-file
  "L" (lambda () (interactive)
	(start-process "xdg" nil "xdg-open" (dired-get-file-for-visit)))
  "n" 'evil-search-next
  "N" 'evil-search-previous
  "o" 'dired-sort-toggle-or-edit
  "v" 'dired-toggle-marks
  "m" 'dired-mark
  "u" 'dired-unmark
  "c" 'dired-create-directory
  "t" 'dired-create-empty-file)

(evil-set-initial-state 'ibuffer-mode 'normal)
(evil-define-key 'normal ibuffer-mode-map
  "v" 'ibuffer-toggle-marks
  "l" 'ibuffer-visit-buffer)
(setq ibuffer-saved-filter-groups
      '(("custom"
	 ("Dotfiles" (filename . "dotfiles/"))
	 ("Org files" (mode . org-mode))
	 ("Code" (derived-mode . prog-mode))
	 ("Text files" (and (mode . text-mode)
			    (not (starred-name))))
	 ("Dired" (mode . dired-mode))
	 ("Magit" (name . "\*magit"))
	 ("Auxiliary buffers" (starred-name)))))
(setq ibuffer-show-empty-filter-groups nil
      ibuffer-use-header-line t
      ibuffer-display-summary nil
      ibuffer-eliding-string "…"
      ibuffer-marked-char ?\
      ibuffer-modified-char ?\
      ibuffer-read-only-char ?\
      ibuffer-deletion-char ?\)
(define-key global-map (kbd "C-x C-b") 'ibuffer)

(which-key-mode 1)
(which-key-setup-side-window-bottom)
(which-key-enable-god-mode-support)

(require 're-builder)
(setq reb-re-syntax 'rx)

(use-package vertico
  :config
  (vertico-mode 1)
  (setq vertico-preselect 'first
	vertico-count 10
	vertico-resize nil))

(use-package marginalia
  :config
  (marginalia-mode))

(use-package orderless
  :custom
  (completion-styles '(orderless basic))
  (completion-category-overrides '((file (styles partial-completion))))
  (completion-pcm-leading-wildcard t))

(use-package consult
  :bind (("C-x b" . consult-buffer)))

(use-package eat)

(setq eshell-prompt-function
	  (lambda ()
	    (concat
	     (propertize "\n" 'face `(:foreground ,(face-background 'default)
				      :extend t
				      :underline ,(face-foreground 'default)))
	     (propertize " " 'face `(:height 1.6
				     :weight 'bold))
	     (propertize " " 'face `(:foreground ,(face-foreground 'default)
				     :extend t)))))

(define-key global-map (kbd "C-x C-s") 'eshell)

(use-package reader)

(use-package auctex
  :hook (LaTeX-mode . visual-line-mode)
  :hook (LaTeX-mode . cdlatex-mode)
  :hook (LaTeX-mode . TeX-fold-mode)
  :hook (LaTeX-mode . reftex-mode)
  :config
  (setq TeX-view-program-selection '((output-dvi "xdvi")
				     (output-pdf "Zathura")
				     (output-html "xdg-open"))
	TeX-command-default "LaTeXMk"
	preview-default-option-list '("displaymath" "floats" "textmath" "graphics")
	TeX-parse-self t
	TeX-auto-save t)
  (setq-default TeX-master nil))

(add-hook 'LaTeX-mode-hook
          (defun preview-larger-previews ()
            (setq preview-scale-function
                  (lambda () (* 0.75
				(funcall (preview-scale-from-face)))))))

(use-package cdlatex
  :config
  (add-to-list 'cdlatex-math-symbol-alist '(?. "\\cdot"    "\\dots"))
  (add-to-list 'cdlatex-math-symbol-alist '(?| "\\mapsto"  "\\longmapsto"  "\\:\\mid\\:"))
  (add-to-list 'cdlatex-math-symbol-alist '(?{ "\\subset"  "\\subseteq"))
  (add-to-list 'cdlatex-math-symbol-alist '(?} "\\supset"  "\\supseteq"))
  (add-to-list 'cdlatex-math-modify-alist '(?B "\\mathbb" nil t t nil))
  (add-to-list 'cdlatex-command-alist '("int"
					"Insert \\int_{}^{}"
					"\\int_{?}^{}"
					cdlatex-position-cursor
					nil nil t))
  (add-to-list 'cdlatex-command-alist '("sum"
					"Insert \\sum_{}^{}"
					"\\sum_{?}^{}"
					cdlatex-position-cursor
					nil nil t)))

(use-package evil-tex
  :after evil
  :after auctex
  :hook (LaTeX-mode . evil-tex-mode))

(use-package org
  :ensure nil
  :hook (org-mode . visual-line-mode)
  :hook (org-mode . org-display-inline-images)
  :hook (org-mode . org-cdlatex-mode)
  :hook (org-mode . org-indent-mode)
  :config
  (setq org-ellipsis " "
	org-fontify-quote-and-verse-blocks t
        org-hide-emphasis-markers t
        org-hide-leading-stars nil
	org-cycle-separator-lines 2
	org-tags-column 0
        org-pretty-entities t
        org-pretty-entities-include-sub-superscripts nil
        org-use-sub-superscripts t
	org-todo-keywords '((sequence "TODO" "HOLD" "DOING" "|" "NOPE" "DONE"))
	org-priority-highest 0
        org-priority-lowest 9
	org-priority-default 5
	org-agenda-files '("~/notes/agenda/habits.org"
			   "~/notes/agenda/leisure.org"
			   "~/notes/agenda/refile.org"
			   "~/notes/agenda/work.org")
	org-hidden-keywords '(title subtitle author date)
	org-src-window-setup 'current-window)
  (org-babel-do-load-languages
   'org-babel-load-languages
   '((emacs-lisp . t)
     (python . t)))
  (setf (cdr (assoc 'file org-link-frame-setup)) 'find-file)
  (evil-define-key 'normal org-mode-map
    "gk" 'evil-previous-visual-line
    "gj" 'evil-next-visual-line))

(use-package org-autolist
  :after org
  :hook (org-mode . org-autolist-mode))

(use-package mixed-pitch
  :hook (org-mode . mixed-pitch-mode)
  :hook (LaTeX-mode . mixed-pitch-mode))

(use-package org-modern
  :after org doom-themes
  :custom
  (org-modern-star 'fold)
  (org-modern-hide-stars t)
  (org-modern-timestamp '(" %^b %d " . " %H%M "))
  (org-modern-todo-faces `(("TODO" . ( :foreground ,(doom-color 'red)
				       :height 95
				       :box (1 . 2)
				       :overline ,(doom-color 'bg)))
			   ("DOING" . ( :foreground ,(doom-color 'yellow)
				        :height 95
				        :box (1 . 2)
				        :overline ,(doom-color 'bg)))
			   ("DONE" . ( :foreground ,(doom-color 'green)
				       :height 95
				       :box (1 . 2)
				       :overline ,(doom-color 'bg)))
			   ("HOLD" . ( :foreground ,(doom-color 'fg)
				       :height 95
				       :box (1 . 2)
				       :overline ,(doom-color 'bg)))
			   ("NOPE" . ( :foreground ,(doom-color 'base4)
				       :height 95
				       :box (1 . 2)
				       :overline ,(doom-color 'bg)))))
  :custom-face
  (org-modern-label
   ((t ( :family "Iosevka"
	 :height 95
	 :foreground ,(doom-color 'bg)
	 :box t))))
  (org-modern-tag
   ((t ( :foreground ,(doom-color 'bg)
	 :inherit (secondary-selection org-modern-label)))))
  (org-modern-date-active
   ((t ( :inherit (org-modern-label)
	 :foreground ,(doom-color 'bg)
	 :background ,(doom-color 'blue)
	 :overline ,(doom-color 'bg)
	 :box (:color ,(doom-color 'blue)
	      :line-width (1 . 2))))))
  (org-modern-time-active
   ((t ( :inherit (org-modern-label)
	 :foreground ,(doom-color 'blue)
	 :background ,(doom-color 'bg)
	 :overline ,(doom-color 'bg)
	 :box (:line-width (1 . 2))))))
  (org-modern-date-inactive
   ((t ( :inherit (org-modern-label)
	 :foreground ,(doom-color 'bg)
	 :background ,(doom-color 'fg)
	 :overline ,(doom-color 'bg)
	 :box (:color ,(doom-color 'fg)
	      :line-width (1 . 2))))))
  (org-modern-time-inactive
   ((t ( :inherit (org-modern-label)
	 :foreground ,(doom-color 'fg)
	 :background ,(doom-color 'bg)
	 :overline ,(doom-color 'bg)
	 :box (:line-width (1 . 2))))))
  :config
  (global-org-modern-mode))

(use-package markdown-mode)

(add-hook 'markdown-mode-hook #'mixed-pitch-mode)
(add-hook 'markdown-view-mode-hook #'mixed-pitch-mode)

(use-package treesit-auto
  :custom
  (treesit-auto-install 'prompt)
  :config
  (treesit-auto-add-to-auto-mode-alist 'all)
  (global-treesit-auto-mode))

(setq treesit-font-lock-level 4)

(use-package exec-path-from-shell
  :config
  (exec-path-from-shell-initialize))

(evil-define-key 'normal eglot-mode-map
  (kbd "g Q") 'eglot-format-buffer
  (kbd "g R") 'eglot-rename
  (kbd "g C") 'eglot-code-actions)

(use-package direnv :config (direnv-mode))

(add-hook 'prog-mode-hook #'electric-pair-local-mode)

(use-package highlight-indent-guides
  :hook (prog-mode . highlight-indent-guides-mode)
  :config
  (highlight-indent-guides-auto-set-faces)
  (setq highlight-indent-guides-method 'character
	highlight-indent-guides-auto-enabled t
	highlight-indent-guides-responsive 'top
	highlight-indent-guides-delay 0))

(use-package corfu
  :config
  (setq corfu-auto t)
  (global-corfu-mode))

(add-hook 'prog-mode-hook #'flymake-mode)
(evil-define-key 'normal flymake-mode-map
  "]d" 'flymake-goto-next-error
  "[d" 'flymake-goto-prev-error)
(setq flymake-start-on-flymake-mode t
      flymake-indicator-type 'fringes)

(use-package yasnippet
  :config
  (yas-global-mode 1)
  (setq yas-snippet-dirs '(".config/emacs/snippets")))

(use-package ready-player
  :after nerd-icons
  :custom-face
  (info-title-1 ((t (:inherit 'variable-pitch :weight bold :height 1.25))))
  (info-title-2 ((t (:inherit 'variable-pitch :weight bold :height 1.4))))
  :config
  (setq ready-player-my-media-collection-location "~/Music")
  (setq ready-player-open-externally-icon (propertize
					   (nerd-icons-octicon "nf-oct-link_external")
					   'face '( :box t
						    :family "Symbols Nerd Font"))
	ready-player-open-my-media-collection-icon (nerd-icons-mdicon "nf-md-home")
	ready-player-shuffle-icon (nerd-icons-mdicon "nf-md-shuffle")
	ready-player-repeat-icon (nerd-icons-mdicon "nf-md-repeat")
	ready-player-autoplay-icon (nerd-icons-mdicon "nf-md-refresh_auto")
	ready-player-search-icon (nerd-icons-octicon "nf-oct-search")
	ready-player-help-icon (nerd-icons-mdicon "nf-md-help")
	ready-player-previous-icon (propertize
				    (nerd-icons-mdicon "nf-md-skip_previous")
				    'face '( :box t
					     :family "Symbols Nerd Font"))
	ready-player-next-icon (propertize
				(nerd-icons-mdicon "nf-md-skip_next")
				'face ' ( :box t
					  :family "Symbols Nerd Font")))

  ;; Redefining a function cos the message exceeds the echo area
  (defun ready-player--make-time-progress-bar (progress total)
    "Make a progress bar with PROGRESS out of TOTAL, aligned with frame width.
For example:
00:00 ------ 00:30 ------ 01:00"
    (setq progress (round progress))
    (setq total (round total))
    (let* ((start-label "00:00")
           (label (ready-player--format-time progress))
           (total-label (ready-player--format-time total))
           (reserved-width (+ (length start-label) 1   ; "00:00 " start
                              1 (length label) 1       ; " 00:30 " current
                              1 (length total-label) 1)) ; " 01:00" end
           (bar-width (- (frame-width) reserved-width))
           (percentage (/ (* progress 1.0) total))
           (left-bars (round (* percentage bar-width)))
           (right-bars (- bar-width left-bars)))
      (concat start-label " "
              (make-string left-bars ?┄)
              " " label " "
              (make-string right-bars ?┄)
              " " total-label)))

  (ready-player-mode +1))

(define-key global-map (kbd "<AudioPause>") (kbd "C-c m SPC"))

(defun mode-line-padding ()
  "Return a double-spaced padding."
  ;; Double-spaced because we're using a proportional font
  "  ")

(defun mode-line-component-title ()
  "Return the title of the buffer."
  (let* ((filename (buffer-name))
	 (filename (cond
		    (ready-player-mode (replace-regexp-in-string
					"ready-player: \\(.*\\).\\(?:flac\\|mp3\\)"
					"\\1"
					filename))
		    (t filename)))
	 (icon (cond
		((eq major-mode 'ready-player-major-mode) (nerd-icons-mdicon "nf-md-music_note"))
		((eq major-mode 'dired-mode) (nerd-icons-mdicon "nf-md-folder"))
		(t (nerd-icons-icon-for-file filename))))
	 (modified (cond
		    ((buffer-modified-p) (concat "  " (nerd-icons-faicon "nf-fa-floppy_disk")))
		    (t ""))))
    (concat
     icon
     "  "
     (propertize filename 'face '(:inherit bold))
     modified)))


(defun mode-line-component-directory ()
  "Return the directory of the buffer."
  (let* ((max-length 64)
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
    (propertize (concat (nerd-icons-faicon "nf-fa-terminal")
			"  "
			output)
		'face '(:inherit 'bold))))

(defun mode-line-component-shell ()
  "Return the shell name if in a shell buffer."
  (propertize (if eshell-mode "Eshell"
                shell-file-name)
	      'face `(:foreground ,(face-foreground 'default))))


(defun diagnostic-counter (type)
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

(defun mode-line-component-diagnostics ()
  "Return a string with the flymake diagnostics."
  (let ((err-count (diagnostic-counter :error))
	(warn-count (diagnostic-counter :warning))
	(note-count (diagnostic-counter :note)))
    (concat
     (if (string-empty-p err-count) ""
       (propertize (concat (nerd-icons-codicon "nf-cod-error") " " err-count)
		   'face 'error))
     (if (string-empty-p warn-count) ""
       (propertize (concat (nerd-icons-codicon "nf-cod-warning") " " warn-count)
		   'face 'warning))
     (if (string-empty-p note-count) ""
       (propertize (concat (nerd-icons-codicon "nf-cod-info") " " note-count)
		   'face 'success))
     " ")))

(defun mode-line-component-position ()
  "Return position in line:column format."
  (propertize (format-mode-line "%l:%C")
	      'face `(:foreground ,(face-foreground 'shadow))))

(defun mode-line-render (left right)
  "Return a string of `window-width' length.
Containing LEFT, and RIGHT aligned respectively."
  (let ((available-width
         (- (window-width)
            (+ (length (format-mode-line left))
               (length (format-mode-line right))))))
    (append
     left
     (list (propertize
	    " "
	    'display `(space :align-to (- right-margin
					  ,(length (format-mode-line right))))))
     right)))

(defun drs-mode-line-format-default ()
  "Default modeline format for `prog-mode' and `text-mode'."
  (mode-line-render
	    (list (mode-line-padding)
		  (mode-line-component-title))
	    (list (mode-line-component-diagnostics)
		  (mode-line-padding)
		  (mode-line-component-position))))

(defun drs-mode-line-format-terminal ()
  "Modeline format for `eshell' and other terminal modes."
  (mode-line-render
	    (list (mode-line-padding)
		  (mode-line-component-directory))
	    (list (mode-line-component-shell)
		  (mode-line-padding))))

(defun drs-mode-line-format-nothing ()
  "Modeline format to display nothing (should look like a simple line to separate the echo area)."
  "")

(defun drs-header-line-format ()
  "Determine header line format based on major mode."
  '((:eval (cond
	    ((derived-mode-p 'term-mode) (drs-mode-line-format-terminal))
	    ((derived-mode-p 'eshell-mode) (drs-mode-line-format-terminal))
	    (t (drs-mode-line-format-default))))))

(defun drs-mode-line-format ()
  "Determine mode line format (literally nothing)."
  '((:eval (drs-mode-line-format-nothing))))

(setq-default header-line-format (drs-header-line-format))
(setq-default mode-line-format (drs-mode-line-format))

(use-package nix-mode :mode "\\.nix\\'")
(use-package qml-mode :mode "\\.qml\\'")
