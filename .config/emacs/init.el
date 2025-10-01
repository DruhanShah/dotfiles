;; ---------------------------------------------
;;              EMACS INIT FILE
;; 
;; This is where all of my configuration for
;; GNU Emacs resides. Please read README.org for
;; more detailed information about the config.
;; ---------------------------------------------

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
(add-to-list 'load-path "~/.config/emacs/nano")

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
               '(internal-border-width . 20)
               '(left-fringe . 16)
               '(right-fringe . 0)
               '(undecorated-round . t) ;; emacs-plu@29 only
               '(scroll-bar-mode . -1)
               '(tool-bar-lines . 0)
	       '(tool-bar-position . left)
               '(menu-bar-lines . 0))))

(setq tool-bar-style 'image)

(setq window-divider-default-right-width 20)
(setq window-divider-default-places 'right-only)
(window-divider-mode 1)

(setq make-backup-files nil)

(set-display-table-slot standard-display-table
                        'truncation
			(make-glyph-code ?… 'font-lock-comment-face))
(set-display-table-slot standard-display-table
                        'wrap
			(make-glyph-code ?- 'font-lock-comment-face))

(use-package ultra-scroll
  :ensure t
  :init
  (setq scroll-conservatively 3
	scroll-margin 0)
  :config
  (ultra-scroll-mode 1))

(defun drs/catppuccin-override ()
  "Override Catppuccin theme for specific faces."
  (interactive)
  (set-face-attribute 'org-document-title nil
		      :foreground (catppuccin-color 'text)
		      :weight 'bold
		      :height 1.6)
  (set-face-attribute 'org-level-1 nil
		      :foreground (catppuccin-color 'text)
		      :weight 'bold
		      :height 1.4)
  (set-face-attribute 'org-level-2 nil
		      :foreground (catppuccin-color 'text)
		      :weight 'bold
		      :height 1.2)
  (set-face-attribute 'org-level-3 nil
		      :foreground (catppuccin-color 'text)
		      :weight 'bold
		      :height 1.1)
  (set-face-attribute 'org-level-4 nil
		      :foreground (catppuccin-color 'text)
		      :weight 'bold)
  (set-face-attribute 'org-block-begin-line nil
		      :box `(:line-width 8
		      :color ,(catppuccin-color 'mantle)))
  (set-face-attribute 'vertical-border nil
		      :foreground (catppuccin-color 'base))
  (set-face-attribute 'window-divider nil
		      :foreground (catppuccin-color 'base))
  (set-face-attribute 'window-divider-first-pixel nil
		      :foreground (catppuccin-color 'base))
  (set-face-attribute 'window-divider-last-pixel nil
		      :foreground (catppuccin-color 'base))
  (catppuccin-reload))

(add-hook 'elpaca-after-init-hook #'drs/catppuccin-override)

(use-package catppuccin-theme
  :ensure t
  :config
  (setq catppuccin-flavor 'latte)
  (load-theme 'catppuccin t))

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

	   :default-height 120
	   :line-spacing 0.15)))
  (fontaine-set-preset 'default))

(defun drs/nerd-fonts ()
  "Set up Nerd Fonts for specific codepoints."
  (interactive)
  (set-fontset-font t '(#x23fb . #x23fe) "Symbols Nerd Font")
  (set-fontset-font t '(#x2500 . #x259f) "Symbols Nerd Font")
  (set-fontset-font t '(#x276c . #x2771) "Symbols Nerd Font")
  (set-fontset-font t '(#xe000 . #xe00a) "Symbols Nerd Font")
  (set-fontset-font t '(#xe0a0 . #xe0a3) "Symbols Nerd Font")
  (set-fontset-font t '(#xe0b0 . #xe0d7) "Symbols Nerd Font")
  (set-fontset-font t '(#xe200 . #xe2a9) "Symbols Nerd Font")
  (set-fontset-font t '(#xe300 . #xe3e3) "Symbols Nerd Font")
  (set-fontset-font t '(#xe5fa . #xe6b7) "Symbols Nerd Font")
  (set-fontset-font t '(#xe700 . #xe8ef) "Symbols Nerd Font")
  (set-fontset-font t '(#xea60 . #xec1e) "Symbols Nerd Font")
  (set-fontset-font t '(#xed00 . #xf2ff) "Symbols Nerd Font")
  (set-fontset-font t '(#xee00 . #xee0b) "Symbols Nerd Font")
  (set-fontset-font t '(#xf300 . #xf381) "Symbols Nerd Font")
  (set-fontset-font t '(#xf400 . #xf533) "Symbols Nerd Font")
  (set-fontset-font t '(#xf0001 . #xf1af0) "Symbols Nerd Font"))

(add-hook 'server-after-make-frame-hook #'drs/nerd-fonts)

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

(use-package copilot
  :vc (:url "https://github.com/copilot-emacs/copilot.el"
	    :rev :newest
	    :branch "main")
  :ensure t
  :hook (prog-mode . (lambda ()
		       (unless (file-remote-p default-directory)
			 copilot-mode)))
  :config
  (define-key copilot-completion-map (kbd "<tab>") 'copilot-accept-completion))

(setq gemini-api-key (with-temp-buffer
		       (insert-file-contents ".config/emacs/.gemini")
		       (buffer-string)))

(use-package gptel
  :ensure t
  :config
  (setq gptel-backend
	(gptel-make-gemini "Gemini"
			   :key gemini-api-key
			   :stream t)
	gptel-default-mode 'org-mode))

(require 'dired)
(require 'dired-x)
(setq dired-listing-switches
      "-l --almost-all --human-readable --group-directories-first"
	dired-omit-files
      (concat dired-omit-files "\\|^\\..+$\\|^__pycache__$"))
(put 'dired-find-alternate-file 'disabled nil)
(add-hook 'dired-mode-hook 'dired-hide-details-mode)
(add-hook 'dired-mode-hook 'dired-omit-mode)

(define-key global-map (kbd "C-x C-d") (lambda () (interactive) (dired ".")))
(evil-define-key 'normal dired-mode-map
  "g." 'dired-omit-mode
  "h" (lambda () (interactive) (find-file ".."))
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

(use-package dired-preview
  :ensure t
  :config
  (setq dired-preview-delay 0.1)
  (dired-preview-global-mode 1))

(eval-after-load 'ibuffer
  '(progn
     (evil-set-initial-state 'ibuffer-mode 'normal)
     (evil-define-key 'normal ibuffer-mode-map
       (kbd "v") 'ibuffer-toggle-marks
       (kbd "l") 'ibuffer-visit-buffer)))

(setq ibuffer-saved-filter-groups
      '(("custom"
	 ("Emacs config" (filename . ".config/emacs"))
	 ("QTile config" (filename . ".config/qtile"))
	 ("Org files" (mode . org-mode))
	 ("Code" (derived-mode . prog-mode))
	 ("Shell scripts" (mode . sh-mode))
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

(use-package pdf-tools
  :ensure t
  :init
  (pdf-tools-install)
  :hook (pdf-view-mode . (lambda () (pdf-view-themed-minor-mode 1))))

(use-package nov
  :ensure t)

(use-package corfu
  :ensure t
  :config
  (setq corfu-auto t)
  (global-corfu-mode))

(add-hook 'prog-mode-hook #'flymake-mode)
(evil-define-key 'normal flymake-mode-map "]d" 'flymake-goto-next-error)
(evil-define-key 'normal flymake-mode-map "[d" 'flymake-goto-prev-error)
(setq flymake-start-on-flymake-mode t
      flymake-indicator-type 'fringes)

(use-package eat
  :ensure t)

(setq eshell-prompt-function
	  (lambda ()
	    (concat
	     (propertize "\n" 'face `(:foreground ,(catppuccin-color 'text)
				      :extend t
				      :underline ,(catppuccin-color 'subtext0)))
	     (propertize " " 'face `(:foreground ,(catppuccin-color 'text)
				     :height 1.6
				     :weight 'bold))
	     (propertize "" 'face `(:foreground ,(catppuccin-color 'mauve)
				     :weight 'bold))
	     (propertize " " 'face `(:foreground ,(catppuccin-color 'text)
				     :extend t)))))

(define-key global-map (kbd "C-x C-s") 'eshell)

(use-package auctex
  :ensure (:repo "https://git.savannah.gnu.org/git/auctex.git"
           :branch "main"
	   :pre-build (("make" "elpa"))
	   :build (:not elpaca--compile-info)
	   :files ("*.el" "doc/*.info*" "etc" "images" "latex" "style")
           :version (lambda (_) (require 'auctex) AUCTeX-version)))

(use-package cdlatex
  :ensure t)

(cl-pushnew 'org elpaca-ignored-dependencies)

(use-package org
  :ensure nil
  :hook (org-mode . visual-line-mode)
  :hook (org-mode . mixed-pitch-mode)
  :hook (org-mode . org-display-inline-images)
  :hook (org-mode . turn-on-org-cdlatex)
  :config
  (setq org-ellipsis "..."
	org-fontify-quote-and-verse-blocks t
        org-hide-emphasis-markers t
        org-hide-leading-stars nil
	org-cycle-separator-lines 2
        org-pretty-entities t
        org-use-sub-superscripts t
        org-format-latex-options (plist-put org-format-latex-options :scale 1.25)
        org-latex-src-block-backend 'listings
	org-latex-packages-alist '(("" "amsmath" t)
				   ("" "amssymb" t)
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
	org-agenda-files '("~/Notes/agenda.org")
	org-hidden-keywords '(title author date)
	org-src-window-setup 'current-window
        org-capture-templates
        '(("t" "Todo" entry
   	   (file+headline "~/Notes/Productivity/refile.org" "Tasks to refile")
           "* TODO %?\n  %i\n  %a")))
  (org-babel-do-load-languages
   'org-babel-load-languages
   '((emacs-lisp . t)
     (latex . t)
     (python . t)))
  (setf (cdr (assoc 'file org-link-frame-setup)) 'find-file))

(use-package org-roam
  :ensure t
  :config
  (setq org-roam-directory "~/Notes")
  (org-roam-db-autosync-mode)
  :bind (("C-c n f" . 'org-roam-node-find)
	 ("C-c n i" . 'org-roam-node-insert)
	 ("C-c n g" . 'org-roam-graph)
	   ("C-c n c" . 'org-roam-capture)))

(use-package ob-ipython
    :ensure t
    :after org
    :config
    (add-to-list 'org-babel-load-languages '(ipython . t))
    (org-babel-do-load-languages 'org-babel-load-languages org-babel-load-languages))

  (use-package jupyter
    :ensure t
    :after org
    :config
    (add-to-list 'org-babel-load-languages '(jupyter . t))
    (org-babel-do-load-languages 'org-babel-load-languages org-babel-load-languages))

(use-package ox-ipynb
  :ensure (ox-ipynb :host github :repo "jkitchin/ox-ipynb")
  :after org)

(use-package org-auto-tangle
  :ensure t
  :after org
  :hook (org-mode . org-auto-tangle-mode))

(use-package citar
  :ensure t
  :custom
  (org-cite-global-bibliography '("~/Research/Bibliography/NLP-Stuff.bib"
				  "~/Research/Bibliography/Math-Stuff.bib"
				  "~/Research/Bibliography/Other-Fun-Stuff.bib"))
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
  :after org
  :hook (org-mode . mixed-pitch-mode))

(add-hook 'markdown-mode-hook #'mixed-pitch-mode)
(add-hook 'markdown-view-mode-hook #'mixed-pitch-mode)

(defun drs/toggle-view ()
  "Toggle markdown view mode."
  (interactive)
  (if (eq major-mode 'markdown-mode)
      (markdown-view-mode)
    (markdown-mode)))
(add-hook 'markdown-mode-hook (lambda ()
				(define-key markdown-mode-map (kbd "C-c m")
					    'drs/toggle-view)))

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

(use-package yasnippet
  :ensure t
  :config
  (yas-global-mode 1)
  (setq yas-snippet-dirs '(".config/emacs/snippets")))

(use-package vertico
  :ensure t
  :config
  (setq vertico-preselect 'first
	  vertico-count 10)
  (vertico-mode 1)
  (vertico-buffer-mode))

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
  :config
  (setq completion-in-region-function 'consult-completion-in-region))

(use-package stripes :ensure t)
(use-package elfeed :ensure t)
(use-package elfeed-org :ensure t :after elfeed :config (elfeed-org))

(add-hook 'elpaca-after-init-hook
          (lambda ()
            (progn
              (require 'nano-modeline)
              (nano-modeline nil nil t)
              (require 'nano-vertico)
              (nano-vertico-mode)

              (require 'nano-splash)
              (require 'nano-calendar)
              (require 'nano-agenda)

              (require 'nano-read)
	      (require 'nano-sidebar)

              (require 'nano-org)

              ;; (require 'nano-elfeed)
              (require 'nano-kill)
              (require 'nano-block))))
