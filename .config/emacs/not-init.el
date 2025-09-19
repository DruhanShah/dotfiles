;; Spellchecking not set up yet.

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
