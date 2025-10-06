(use-package shell-maker
  :ensure t)
(use-package acp
  :ensure (:host github :repo "xenodium/acp.el"))

(use-package agent-shell
  :ensure (:host github :repo "xenodium/agent-shell")
  :config
  (setq agent-shell-google-key gemini-api-key))

(use-package eglot-ltex-plus
  :ensure (:host github :repo "emacs-langtool/eglot-ltex-plus")
  :hook
  ((text-mode markdown-mode org-mode) . (lambda ()
					  (require 'eglot-ltex-plus)
					  (eglot-ensure)))
  :init
  (setq eglot-ltex-server-path "~/.config/emacs/ltex/ltex-ls-plus-18.5.1"
	eglot-ltex-communication-channel 'stdio))

(use-package dyalog-mode
  :ensure t
  :config
  (defun org-babel-execute:dyalog (body params)
    (org-babel-execute:jupyter-apl body params))

  (defun org-babel-dyalog-initiate-session (&optional arg1 arg2)
    (org-babel-jupyter-apl-initiate-session &optional arg1 arg2))

  (setq org-babel-default-header-args:jupyter-apl '((:kernel . "dyalog_apl")
                                                    (:session . "*new*")
                                                    (:exports . "both")
                                                    (:eval . "never-export"))

        org-babel-default-header-args:dyalog '((:kernel . "dyalog_apl")
                                               (:session . "*new*")
                                               (:exports . "both")
                                               (:eval . "never-export"))))
