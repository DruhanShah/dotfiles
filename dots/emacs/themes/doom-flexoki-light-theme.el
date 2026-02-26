;;; doom-flexoki-light-theme.el --- Based on Stephen Ango's Flexoki -*- lexical-binding: t; no-byte-compile: t; -*-
;;
;; Added: Nil
;; Author: stephango <https://stephango.com>
;; Maintainer: Druhan Shah <https://github.com/DruhanShah>
;; Source: https://stephango.com/flexoki
;;
;;; Commentary:
;;; Code:

(require 'doom-themes)


;;
;;; Variables

(defgroup doom-flexoki-light-theme nil
  "Options for the `doom-flexoki-light' theme."
  :group 'doom-themes)

(defcustom doom-flexoki-light-brighter-modeline t
  "If non-nil, more vivid colors will be used to style the mode-line."
  :group 'doom-flexoki-light-theme
  :type 'boolean)

(defcustom doom-flexoki-light-brighter-comments nil
  "If non-nil, comments will be highlighted in more vivid colors."
  :group 'doom-flexoki-light-theme
  :type 'boolean)


;;
;;; Theme definition

(def-doom-theme doom-flexoki-light
  "A light theme based on Steph Ango's Flexoki."
  :family 'doom-flexoki
  :background-mode 'light

  ;; name        default   256       16
  ((bg         '("#fffcf0" "white"   "white"        ))
   (fg         '("#100f0f" "#424242" "black"        ))

   ;; These are off-color variants of bg/fg, used primarily for `solaire-mode',
   ;; but can also be useful as a basis for subtle highlights (e.g. for hl-line
   ;; or region), especially when paired with the `doom-darken', `doom-lighten',
   ;; and `doom-blend' helper functions.
   (bg-alt     '("#f2f0e5" "white"   "white"        ))
   (fg-alt     '("#6f6e69" "#c7c7c7" "brightblack"  ))

   ;; These should represent a spectrum from bg to fg, where base0 is a starker
   ;; bg and base8 is a starker fg. For example, if bg is light grey and fg is
   ;; dark grey, base0 should be white and base8 should be black.
   (base0      '("#fffefa" "#f0f0f0" "white"        ))
   (base1      '("#fffcf0" "#e7e7e7" "brightblack"  ))
   (base2      '("#e6e4d9" "#dfdfdf" "brightblack"  ))
   (base3      '("#b7b5ac" "#c6c7c7" "brightblack"  ))
   (base4      '("#6f6e69" "#9ca0a4" "brightblack"  ))
   (base5      '("#403e3c" "#424242" "brightblack"  ))
   (base6      '("#282726" "#2e2e2e" "brightblack"  ))
   (base7      '("#100f0f" "#1e1e1e" "brightblack"  ))
   (base8      '("#000000" "black"   "black"        ))

   (grey       base4)
   (red        '("#AF3029" "#e45649" "red"          ))
   (orange     '("#66800B" "#dd8844" "brightred"    ))
   (green      '("#50a14f" "#50a14f" "green"        ))
   (teal       '("#24837B" "#44b9b1" "brightgreen"  ))
   (yellow     '("#AD8301" "#986801" "yellow"       ))
   (blue       '("#205EA6" "#4078f2" "brightblue"   ))
   (dark-blue  '("#4385BE" "#a0bcf8" "blue"         ))
   (magenta    '("#A02F6F" "#a626a4" "magenta"      ))
   (violet     '("#CE5D97" "#b751b6" "brightmagenta"))
   (cyan       '("#4385BE" "#0184bc" "brightcyan"   ))
   (dark-cyan  '("#1A4F8C" "#005478" "cyan"         ))

   ;; These are the "universal syntax classes" that doom-themes establishes.
   ;; These *must* be included in every doom themes, or your theme will throw an
   ;; error, as they are used in the base theme defined in doom-themes-base.
   (highlight      blue)
   (vertical-bar   (doom-darken base2 0.1))
   (selection      dark-blue)
   (builtin        magenta)
   (comments       (if doom-flexoki-light-brighter-comments cyan base4))
   (doc-comments   (doom-darken comments 0.15))
   (constants      violet)
   (functions      magenta)
   (keywords       red)
   (methods        cyan)
   (operators      blue)
   (type           yellow)
   (strings        green)
   (variables      (doom-darken magenta 0.36))
   (numbers        orange)
   (region         `(,(doom-darken (car bg-alt) 0.1) ,@(doom-darken (cdr base0) 0.3)))
   (error          red)
   (warning        yellow)
   (success        green)
   (vc-modified    orange)
   (vc-added       green)
   (vc-deleted     red)

   ;; These are extra color variables used only in this theme; i.e. they aren't
   ;; mandatory for derived themes.
   (modeline-fg              fg)
   (modeline-fg-alt          (doom-blend
                              violet base4
                              (if doom-flexoki-light-brighter-modeline 0.5 0.2)))
   (modeline-bg              (if doom-flexoki-light-brighter-modeline
                                 (doom-darken base2 0.05)
                               base1))
   (modeline-bg-alt          (if doom-flexoki-light-brighter-modeline
                                 (doom-darken base2 0.1)
                               base2))
   (modeline-bg-inactive     (doom-darken bg 0.1))
   (modeline-bg-alt-inactive `(,(doom-darken (car bg-alt) 0.05) ,@(cdr base1)))

   (-modeline-pad 0))

  ;;;; Base theme face overrides
  (((font-lock-comment-face &override)
    :background (if doom-flexoki-light-brighter-comments base0 'unspecified))
   ((font-lock-doc-face &override) :slant 'italic)
   ((line-number &override) :foreground (doom-lighten base4 0.15))
   ((line-number-current-line &override) :foreground base8)
   (header-line
    :background modeline-bg :foreground modeline-fg
    :inherit nil)
   (mode-line
    :background bg :foreground bg
    :underline fg :height 0.1)
   (mode-line-inactive
    :background bg :foreground bg
    :underline fg :height 0.1)
   (mode-line-emphasis
    :background bg :foreground bg
    :underline fg :height 0.1)
   (shadow :foreground base4)
   (tooltip :background base1 :foreground fg)

   ;;;; centaur-tabs
   (centaur-tabs-unselected :background bg-alt :foreground base4)
   ;;;; css-mode <built-in> / scss-mode
   (css-proprietary-property :foreground orange)
   (css-property             :foreground green)
   (css-selector             :foreground blue)
   ;;;; doom-modeline
   (doom-modeline-bar :background (if doom-flexoki-light-brighter-modeline modeline-bg highlight))
   ;;;; ediff <built-in>
   (ediff-current-diff-A        :foreground red   :background (doom-lighten red 0.8))
   (ediff-current-diff-B        :foreground green :background (doom-lighten green 0.8))
   (ediff-current-diff-C        :foreground blue  :background (doom-lighten blue 0.8))
   (ediff-current-diff-Ancestor :foreground teal  :background (doom-lighten teal 0.8))
   ;;;; helm
   (helm-candidate-number :background blue :foreground bg)
   ;;;; lsp-mode
   (lsp-ui-doc-background      :background base0)
   ;;;; magit
   (magit-blame-heading     :foreground orange :background bg-alt)
   (magit-diff-removed :foreground (doom-darken red 0.2) :background (doom-blend red bg 0.1))
   (magit-diff-removed-highlight :foreground red :background (doom-blend red bg 0.2) :bold bold)
   ;;;; markdown-mode
   (markdown-markup-face     :foreground base5)
   (markdown-header-face     :inherit 'bold :foreground red)
   ((markdown-code-face &override)       :background base1)
   (mmm-default-submode-face :background base1)
   ;;;; outline <built-in>
   ((outline-1 &override) :foreground red)
   ((outline-2 &override) :foreground orange)
   ;;;; org <built-in>
   ((org-block &override) :background base1)
   ((org-block-begin-line &override) :foreground fg :slant 'italic)
   (org-ellipsis :underline nil :background bg     :foreground red)
   ((org-quote &override) :background base1)
   ;;;; posframe
   (ivy-posframe               :background base0)
   ;;;; selectrum
   (selectrum-current-candidate :background base2)
   ;;;; vertico
   (vertico-current :background base2)
   ;;;; solaire-mode
   (solaire-mode-line-face
    :inherit 'mode-line
    :background modeline-bg-alt
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg-alt)))
   (solaire-mode-line-inactive-face
    :inherit 'mode-line-inactive
    :background modeline-bg-alt-inactive
    :box (if -modeline-pad `(:line-width ,-modeline-pad :color ,modeline-bg-alt-inactive)))
   ;;;; web-mode
   (web-mode-current-element-highlight-face :background dark-blue :foreground bg)
   ;;;; wgrep <built-in>
   (wgrep-face :background base1)
   ;;;; whitespace
   ((whitespace-tab &override)         :background (if (not (default-value 'indent-tabs-mode)) base0 'unspecified))
   ((whitespace-indentation &override) :background (if (default-value 'indent-tabs-mode) base0 'unspecified)))

  ;;;; Base theme variable overrides-
  ()
  )

;;; doom-flexoki-light-theme.el ends here
