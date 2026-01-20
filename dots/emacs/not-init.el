(use-package copilot
  :vc (:url "https://github.com/copilot-emacs/copilot.el"
       :rev :newest
       :branch "main")
  :ensure t
  :hook (prog-mode . copilot-mode)
  :config
  (define-key copilot-completion-map (kbd "<tab>") 'copilot-accept-completion))

(setq gemini-api-key (with-temp-buffer
		       (insert-file-contents "~/.config/emacs/.gemini")
		       (buffer-string)))

(use-package gptel
  :ensure t
  :config
  (setq gptel-backend
	(gptel-make-gemini "Gemini"
			   :key gemini-api-key
			   :stream t)
	gptel-default-mode 'org-mode))

(use-package shell-maker
  :ensure t)
(use-package acp
  :ensure (:host github :repo "xenodium/acp.el"))

(use-package agent-shell
  :ensure (:host github :repo "xenodium/agent-shell")
  :config
  (setq agent-shell-google-key gemini-api-key))

(use-package dirvish
  :ensure t
  :config
  (setq dirvish-attributes '(nerd-icons file-size)))

(use-package eglot-ltex-plus
  :ensure (:host github :repo "emacs-langtool/eglot-ltex-plus")
  :hook
  ((text-mode markdown-mode org-mode) . (lambda ()
					  (require 'eglot-ltex-plus)
					  (eglot-ensure)))
  :init
  (setq eglot-ltex-server-path "~/.config/emacs/ltex/ltex-ls-plus-18.5.1"
	eglot-ltex-communication-channel 'stdio))
