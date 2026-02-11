(defvar elpaca-installer-version 0.11)
(defvar elpaca-directory (expand-file-name "elpaca/" user-emacs-directory))
(defvar elpaca-builds-directory (expand-file-name "builds/" elpaca-directory))
(defvar elpaca-repos-directory (expand-file-name "repos/" elpaca-directory))
(defvar elpaca-order
  '(elpaca :repo "https://github.com/progfolio/elpaca.git"
           :ref nil :depth 1 :inherit ignore
           :files (:defaults "elpaca-test.el" (:exclude "extensions"))
           :build (:not elpaca--activate-package)))
(let* ((repo  (expand-file-name "elpaca/" elpaca-repos-directory))
       (build (expand-file-name "elpaca/" elpaca-builds-directory))
       (order (cdr elpaca-order))
       (default-directory repo))
  (add-to-list 'load-path (if (file-exists-p build) build repo))
  (unless (file-exists-p repo)
    (make-directory repo t)
    (when (<= emacs-major-version 28) (require 'subr-x))
    (condition-case-unless-debug err
        (if-let* ((buffer (pop-to-buffer-same-window "*elpaca-bootstrap*"))
                  ((zerop
                    (apply #'call-process
                           `("git" nil ,buffer t "clone"
                             ,@(when-let* ((depth (plist-get order :depth)))
                                 (list
				  (format "--depth=%d" depth)
				  "--no-single-branch"))
                             ,(plist-get order :repo) ,repo))))
                  ((zerop (call-process "git" nil buffer t "checkout"
                                        (or (plist-get order :ref) "--"))))
                  (emacs (concat invocation-directory invocation-name))
                  ((zerop (call-process
                           emacs nil buffer nil "-Q" "-L" "." "--batch"
                           "--eval" "(byte-recompile-directory \".\" 0 'force)")))
                  ((require 'elpaca))
                  ((elpaca-generate-autoloads "elpaca" repo)))
            (progn (message "%s" (buffer-string)) (kill-buffer buffer))
          (error "%s" (with-current-buffer buffer (buffer-string))))
      ((error) (warn "%s" err) (delete-directory repo 'recursive))))
  (unless (require 'elpaca-autoloads nil t)
    (require 'elpaca)
    (elpaca-generate-autoloads "elpaca" repo)
    (load "./elpaca-autoloads")))
(add-hook 'after-init-hook #'elpaca-process-queues)
(elpaca `(,@elpaca-order))
(elpaca elpaca-use-package
  (elpaca-use-package-mode))

(setq gc-cons-threshold 63000000
      gc-cons-percentage 0.6)
(global-auto-revert-mode)

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

(set-display-table-slot standard-display-table
                        'truncation
			(make-glyph-code ?… 'font-lock-comment-face))
(set-display-table-slot standard-display-table
                        'wrap
			(make-glyph-code ?- 'font-lock-comment-face))

(use-package ef-themes
  :ensure t
  :init
  (modus-themes-include-derivatives-mode)
  :config
  (setq modus-themes-mixed-fonts t
	modus-themes-italic-constructs t
	modus-themes-bold-constructs t
	modus-themes-variable-pitch-ui t
	modus-themes-prompts '(extrabold)
	modus-themes-headings '((0 . (variable-pitch 1.5))
				(1 . (variable-pitch 1.2))
				(2 . (variable-pitch 1.2))
				(agenda-date . (1.3))
				(agenda-structure . (variable-pitch light 1.8))
				(t . (variable-pitch 1.2))))
  (modus-themes-load-theme 'ef-cyprus))

(add-hook 'enable-theme-functions
	  (lambda (theme)
	    (set-face-attribute 'vertical-border nil
				:foreground (face-background 'default))
	    (set-face-attribute 'window-divider nil
				:foreground (face-background 'default))
	    (set-face-attribute 'window-divider-last-pixel nil
				:foreground (face-background 'default))
	    (set-face-attribute 'window-divider-first-pixel nil
				:foreground (face-background 'default))))

(use-package spacious-padding
  :ensure t
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
  :ensure t
  :init
  (setq scroll-conservatively 3
	scroll-margin 0)
  :config
  (ultra-scroll-mode 1))

(use-package fontaine
  :ensure t
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
  :ensure t
  :config
  (ligature-set-ligatures
   'prog-mode '("<---" "<--"  "<<-" "<-" "->" "-->" "--->" "<->" "<-->" "<--->"
		"<---->" "<!--" "<==" "<===" "<=" "=>" "=>>" "==>" "===>" ">=" "<=>"
		"<==>" "<===>" "<====>" "<!---" "<~~" "<~" "~>" "~~>" "::" ":::"
		"==" "!=" "===" "!==" ":=" ":-" ":+" "<*" "<*>" "*>" "<|" "<|>" "|>"
		"+:" "-:" "=:" "<******>" "++" "+++"))
  (global-ligature-mode t))

(use-package nerd-icons
  :ensure t
  :if (display-graphic-p)
  :config
  (setq nerd-icons-font-family "Symbols Nerd Font"))

(use-package nerd-icons-dired
  :ensure t
  :after nerd-icons
  :hook (dired-mode . nerd-icons-dired-mode))

(use-package nerd-icons-ibuffer
  :ensure t
  :after nerd-icons
  :hook (ibuffer-mode . nerd-icons-ibuffer-mode)
  :config
  (setq nerd-icons-ibuffer-formats
	'(("  "
	   mark " "
	   (icon 2 2) " "
	   (name 24 24 :left :elide) "  "))))

(use-package nerd-icons-corfu
  :ensure t
  :after nerd-icons
  :after corfu
  :config (add-to-list 'corfu-margin-formatters #'nerd-icons-corfu-formatter))

(use-package nerd-icons-completion
  :ensure t
  :hook (marginalia-mode . nerd-icons-completion-marginalia-setup)
  :config
  (nerd-icons-completion-mode))

(use-package colorful-mode
  :ensure t
  :config
  (global-colorful-mode))

(elpaca-wait)

(use-package evil :ensure t
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

(use-package evil-collection :ensure t :after evil
  :init (evil-collection-init))

(use-package evil-god-state :ensure t :after evil
  :config
  (evil-define-key 'normal 'global "\\" 'evil-execute-in-god-state)
  (evil-define-key 'god 'global "escape" 'evil-god-state-bail))

(use-package evil-surround :ensure t :after evil
  :config (global-evil-surround-mode 1))

(use-package evil-commentary :ensure t :after evil
  :config (evil-commentary-mode))

(use-package evil-numbers :ensure t :after evil
  :config
  (evil-define-key '(normal visual) 'global
    (kbd "C-a") 'evil-numbers/inc-at-pt
    (kbd "C-x") 'evil-numbers/dec-at-pt
    (kbd "g C-a") 'evil-numbers/inc-at-pt-incremental
    (kbd "g C-x") 'evil-numbers/dec-at-pt-incremental))

(elpaca-wait)

(use-package transient
  :ensure t)
(use-package magit
  :ensure t)

(require 'dired)
(require 'dired-x)
(setq dired-listing-switches
      "-l --almost-all --human-readable --group-directories-first"
      dired-omit-files
      (concat dired-omit-files "\\|^\\..+$\\|^__pycache__$"))
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

(eval-after-load 'ibuffer
  '(progn
     (evil-set-initial-state 'ibuffer-mode 'normal)
     (evil-define-key 'normal ibuffer-mode-map
       (kbd "v") 'ibuffer-toggle-marks
       (kbd "l") 'ibuffer-visit-buffer)))

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
      ibuffer-use-header-line nil
      ibuffer-display-summary nil
      ibuffer-eliding-string "…"
      ibuffer-marked-char ?\
      ibuffer-modified-char ?\
      ibuffer-read-only-char ?\
      ibuffer-deletion-char ?\)

(defun ibuffer-advice (_format)
  (with-current-buffer "*Ibuffer*"
    (save-excursion
    (let ((inhibit-read-only t))

      ;; Remove header and insert ours
      (goto-char (point-min))
      (search-forward " \n" nil t)
      (search-forward " \n" nil t)
      (delete-region 1 (point))
      (goto-char (point-min))
      (insert (concat
               (propertize "\n" 'face '(:height 0.8))
               (propertize "Buffer List"
                           'face `(org-document-title variable-pitch))
               (propertize " "  'display `(raise -0.35))
               "\n"))
      (insert "")

      ;; Transform titles
      (goto-char (point-min))
      (while (re-search-forward "\\[ \\(.*\\) \\]" nil t)
        (let* ((title (match-string 0))
               (property (get-text-property 0 'ibuffer-filter-group-name title)))
          (replace-match "\n")
          (insert (concat
                   (propertize
                    (substring title 2 -2)
                    'ibuffer-filter-group-name property
		      'face '(org-level-2 variable-pitch))
                   "\n"))))))))

(defun ibuffer-setup ()
  (ibuffer-switch-to-saved-filter-groups "custom")
  (ibuffer-auto-mode 1))

(advice-add 'ibuffer-update-title-and-summary :after #'ibuffer-advice)
(add-hook 'ibuffer-mode-hook #'ibuffer-setup)
(define-key global-map (kbd "C-x C-b") 'ibuffer)



(which-key-mode 1)
(which-key-setup-side-window-bottom)
(which-key-enable-god-mode-support)

(require 're-builder)
(setq reb-re-syntax 'string)

(defvar drs/re-builder-positions nil
  "Store point and region bounds before calling `re-builder'.")
(advice-add 're-builder
	    :before
	    (defun my/re-builder-save-state (&rest _)
	      "Save into `my/re-builder-positions' the point and region
  positions before calling `re-builder'."
	      (setq my/re-builder-positions
		    (cons (point)
			  (when (region-active-p)
			    (list (region-beginning)
				  (region-end)))))))

(defun reb-replace-regexp (&optional delimited)
  "Run `query-replace-regexp' with the contents of `re-builder'.
With non-nil optional argument DELIMITED, only replace matches
surrounded by word boundaries."
  (interactive "P")
  (reb-update-regexp)
  (let* ((re (reb-target-value 'reb-regexp))
         (replacement (query-replace-read-to
		       re
		       (concat "Query replace"
			       (if current-prefix-arg
                                   (if (eq current-prefix-arg '-) " backward" " word")
                                 "")
			       " regexp"
			       (if (with-selected-window reb-target-window
                                     (region-active-p)) " in region" ""))
		       t))
         (pnt (car drs/re-builder-positions))
         (beg (cadr drs/re-builder-positions))
         (end (caddr drs/re-builder-positions)))
    (with-selected-window reb-target-window
      (goto-char pnt)
      (setq drs/re-builder-positions nil)
      (reb-quit)
      (query-replace-regexp re replacement delimited beg end))))


(define-key reb-mode-map (kbd "RET") #'reb-replace-regexp)
(define-key reb-lisp-mode-map (kbd "RET") #'reb-replace-regexp)
;; (define-key global-map (kbd "C-s") #'re-builder)

(use-package reader
  :ensure (:type git :host codeberg :repo "divyaranjan/emacs-reader"
	   :files ("*.el" "render-core.so")
	   :pre-build ("make" "all")))

(use-package corfu
  :ensure t
  :config
  (setq corfu-auto t)
  (global-corfu-mode))

(add-hook 'prog-mode-hook #'flymake-mode)
(evil-define-key 'normal flymake-mode-map
  "]d" 'flymake-goto-next-error
  "[d" 'flymake-goto-prev-error)
(setq flymake-start-on-flymake-mode t
      flymake-indicator-type 'fringes)

(use-package eat
  :ensure t)

(setq eshell-prompt-function
	  (lambda ()
	    (concat
	     (propertize "\n" 'face `(:foreground ,(face-background 'default)
				      :extend t
				      :underline ,(face-foreground 'default)))
	     (propertize " " 'face `(:height 1.6
				     :weight 'bold))
	     (propertize "" 'face `(:foreground "green"
				     :weight 'bold))
	     (propertize " " 'face `(:foreground ,(face-foreground 'default)
				     :extend t)))))

(define-key global-map (kbd "C-x C-s") 'eshell)

(use-package auctex
  :ensure (:repo "https://git.savannah.gnu.org/git/auctex.git"
	   :branch "main"
	   :pre-build (("make" "elpa"))
	   :build (:not elpaca--compile-info)
	   :files ("*.el" "doc/*.info*" "etc" "images" "latex" "style")
	   :version (lambda (_) (require 'auctex) AUCTeX-version))
  :config
  (setq TeX-view-program-selection
	'((output-dvi "xdvi") (output-pdf "Zathura") (output-html "xdg-open"))))

(use-package cdlatex
  :ensure t)

(cl-pushnew 'org elpaca-ignored-dependencies)

(use-package org
  :ensure nil
  :hook (org-mode . visual-line-mode)
  :hook (org-mode . mixed-pitch-mode)
  :hook (org-mode . org-display-inline-images)
  :hook (org-mode . org-cdlatex-mode)
  :hook (org-mode . org-indent-mode)
  :config
  (setq org-ellipsis " "
	org-fontify-quote-and-verse-blocks t
        org-hide-emphasis-markers t
        org-hide-leading-stars nil
	org-cycle-separator-lines 2
        org-pretty-entities t
        org-pretty-entities-include-sub-superscripts nil
        org-use-sub-superscripts t
        org-format-latex-options (plist-put org-format-latex-options :scale 0.75)
        org-latex-src-block-backend 'listings
	org-latex-packages-alist '(("" "amsmath" t)
				   ("" "amssymb" t)
				   ("" "amsfonts" t)
				   ("" "amsthm" t)
				   ("" "mathtools" t)
				   ("" "braket" t)
				   ("" "physics" t)
				   ("" "xcolor" t)
				   ("" "tikz" t)
				   ("" "tikz-cd" t))
	org-todo-keywords '((sequence "TODO" "DOING" "|" "DONE")
			    (sequence "HOLD" "|" "NOPE"))
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
     (latex . t)
     (python . t)))
  (setf (cdr (assoc 'file org-link-frame-setup)) 'find-file))

(use-package org-auto-tangle
  :ensure t
  :after org
  :hook (org-mode . org-auto-tangle-mode))

(use-package citar
  :ensure t
  :after nerd-icons org
  :custom
  (org-cite-global-bibliography '("~/research/bibliography/NLP-Stuff.bib"
				  "~/research/bibliography/Math-Stuff.bib"
				  "~/research/bibliography/Other-Fun-Stuff.bib"))
  (org-cite-insert-processor 'citar)
  (org-cite-follow-processor 'citar)
  (org-cite-activate-processor 'citar)
  (citar-bibliography org-cite-global-bibliography)
  :bind
  (:map org-mode-map :package org ("C-c i" . #'org-cite-insert))
  :config
  (defvar citar-indicator-notes-icons
    (citar-indicator-create
     :symbol (nerd-icons-mdicon
	      "nf-md-notebook"
	      :face 'nerd-icons-blue
	      :v-adjust -0.3)
     :function #'citar-has-notes
     :padding "  "
     :tag "has:notes"))

  (defvar citar-indicator-links-icons
    (citar-indicator-create
     :symbol (nerd-icons-octicon
              "nf-oct-link"
              :face 'nerd-icons-orange
              :v-adjust -0.1)
     :function #'citar-has-links
     :padding "  "
     :tag "has:links"))

  (defvar citar-indicator-files-icons
    (citar-indicator-create
     :symbol (nerd-icons-faicon
              "nf-fa-file"
              :face 'nerd-icons-green
              :v-adjust -0.1)
     :function #'citar-has-files
     :padding "  "
     :tag "has:files"))
  (setq citar-indicators
	(list citar-indicator-files-icons
	      citar-indicator-notes-icons
	      citar-indicator-links-icons)))

(use-package org-autolist
  :ensure t
  :after org
  :hook (org-mode . org-autolist-mode))

(use-package mixed-pitch
  :ensure t
  :hook (org-mode . mixed-pitch-mode))

(use-package org-modern
  :ensure t
  :after org
  :custom
  (org-modern-star nil)
  (org-modern-hide-stars t)
  (org-modern-timestamp '(" %^b %d " . " %H%M "))
  (org-modern-todo-faces `(("TODO" . (:foreground "#af3029"
				      :height 95
				      :box (1 . 2)
				      :overline "#cccccc"))
			   ("DOING" . (:foreground "#ad8301"
				       :height 95
				       :box (1 . 2)
				       :overline "#cccccc"))
			   ("DONE" . (:foreground "#66800b"
				      :height 95
				      :box (1 . 2)
				      :overline "#cccccc"))
			   ("HOLD" . (:foreground "#888888"
				      :height 95
				      :box (1 . 2)
				      :overline "#cccccc"))
			   ("NOPE" . (:foreground "#aaaaaa"
				      :height 95
				      :box (1 . 2)
				      :overline "#cccccc"))))
  :custom-face
  (org-modern-label
   ((t (:family "Iosevka"
	:height 95))))
  (org-modern-date-active
   ((t (:inherit (org-modern-label)
	:foreground "#cccccc"
	:background "#205ea6"
	:overline "#cccccc"
	:box (:color "#205ea6"
	      :line-width (1 . 2))))))
  (org-modern-time-active
   ((t (:inherit (org-modern-label)
	:foreground "#205ea6"
	:background "#cccccc"
	:overline "#cccccc"
	:box (:line-width (1 . 2))))))
  (org-modern-date-inactive
   ((t (:inherit (org-modern-label)
	:foreground "#cccccc"
	:background "#888888"
	:overline "#cccccc"
	:box (:color "#888888"
	      :line-width (1 . 2))))))
  (org-modern-time-inactive
   ((t (:inherit (org-modern-label)
	:foreground "#888888"
	:background "#cccccc"
	:overline "#cccccc"
	:box (:line-width (1 . 2))))))
  :config
  (global-org-modern-mode))

(use-package markdown-mode
  :ensure t)

(add-hook 'markdown-mode-hook #'mixed-pitch-mode)
(add-hook 'markdown-view-mode-hook #'mixed-pitch-mode)

(use-package org-contrib
  :ensure t
  :config
  (require 'ox-extra)
  (ox-extras-activate '(latex-header-blocks ignore-headlines)))

(use-package treesit-auto
  :ensure t
  :custom
  (treesit-auto-install 'prompt)
  :config
  (treesit-auto-add-to-auto-mode-alist 'all)
  (global-treesit-auto-mode))

(setq treesit-font-lock-level 4)

(use-package exec-path-from-shell
  :ensure t
  :config
  (exec-path-from-shell-initialize))

(evil-define-key 'normal eglot-mode-map
  (kbd "g Q") 'eglot-format-buffer
  (kbd "g R") 'eglot-rename
  (kbd "g C") 'eglot-code-actions)

(add-hook 'prog-mode-hook #'electric-pair-mode)

(use-package highlight-indent-guides
  :ensure t
  :hook (prog-mode . highlight-indent-guides-mode)
  :config
  (highlight-indent-guides-auto-set-faces)
  (setq highlight-indent-guides-method 'character
	highlight-indent-guides-auto-enabled t
	highlight-indent-guides-responsive 'top
	highlight-indent-guides-delay 0))

(use-package yasnippet
  :ensure t
  :config
  (yas-global-mode 1)
  (setq yas-snippet-dirs '(".config/emacs/snippets")))

(use-package vertico
  :ensure t
  :config
  (vertico-mode 1)
  (setq vertico-preselect 'first
	vertico-count 10
	vertico-resize nil))

(use-package marginalia
  :ensure t
  :config
  (marginalia-mode))

(use-package orderless
  :ensure t
  :custom
  (completion-styles '(orderless basic))
  (completion-category-overrides '((file (styles basic partial-completion)))))

(use-package consult
  :ensure t
  :bind (("C-x b" . consult-buffer)))

(defun drs/mode-line-faces ()
  "Apply custom modeline faces to THEME."
  (custom-set-faces
   `(header-line ((t ( :foreground ,(face-foreground 'default)
		       :background ,(face-background 'mode-line)
		       :inherit nil))))
   `(mode-line ((t ( :foreground ,(face-background 'mode-line)
		     :background ,(face-background 'default)
		     :underline t
		     :height 0.1))))
   `(mode-line-active ((t (:inherit mode-line))))
   `(mode-line-inactive ((t (:inherit mode-line))))))
(add-hook 'modus-themes-after-load-theme-hook #'drs/mode-line-faces)

(defun mode-line-component-nothing ()
  "Return literally nothing but a separator-like line."
  `(:eval (propertize "%-" 'face `( :foreground ,(face-background 'default)
				   :background ,(face-background 'default)
				   :height 0.1
				   :box nil
				   :underline ,(modus-themes-get-color-value 'border :overrides)))))


(defun mode-line-component-title ()
  "Return the title of the buffer."
  `(:eval (propertize "%b" 'face '(:inherit bold))))

(defun drs-mode-line-format-default ()
  "Default modeline format for `prog-mode' and `text-mode'."
  (list
   " "
   (mode-line-component-title)))

(defun drs-mode-line-format-line ()
  "Modeline format that just makes a line to separate the echo area."
  (list
   (mode-line-component-nothing)))

(setq-default header-line-format (drs-mode-line-format-default))
(setq-default mode-line-format (drs-mode-line-format-line))

(use-package ready-player
  :ensure t
  :after nerd-icons
  :custom-face
  (info-title-1 ((t (:inherit 'variable-pitch :weight bold :height 1.25))))
  (info-title-2 ((t (:inherit 'variable-pitch :weight bold :height 1.4))))
  :config
  (setq ready-player-my-media-collection-location "~/Music")
  (setq ready-player-open-externally-icon (nerd-icons-octicon "nf-oct-link_external")
	ready-player-open-my-media-collection-icon (nerd-icons-mdicon "nf-md-home")
	ready-player-shuffle-icon (nerd-icons-mdicon "nf-md-shuffle")
	ready-player-repeat-icon (nerd-icons-mdicon "nf-md-repeat")
	ready-player-autoplay-icon (nerd-icons-mdicon "nf-md-refresh_auto")
	ready-player-search-icon (nerd-icons-octicon "nf-oct-search")
	ready-player-help-icon (nerd-icons-mdicon "nf-md-help")
	ready-player-previous-icon (nerd-icons-mdicon "nf-md-skip_previous")
	ready-player-next-icon (nerd-icons-mdicon "nf-md-skip_next"))
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

(use-package nix-mode
  :ensure t
  :mode "\\.nix\\'")
