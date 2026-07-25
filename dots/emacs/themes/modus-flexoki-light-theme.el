;;; modus-flexoki-light.el --- Flexoki light theme on modus-operandi -*- lexical-binding: t -*-

;; Based on: https://stephango.com/flexoki

;;; Commentary:
;;; Code:

(defconst modus-flexoki-light-palette
  (modus-themes-generate-palette
   '((bg-main      "#FFFCF0")
     (bg-dim       "#F2F0E5")
     (bg-active    "#DAD8CE")
     (bg-inactive  "#E6E4D9")

     (fg-main      "#100F0F")
     (fg-dim       "#6F6E69")
     (fg-alt       "#B7B5AC")

     (border       "#E6E4D9")
     (fringe       "#F2F0E5")

     (red          "#AF3029")
     (red-warmer   "#BC5215")
     (red-cooler   "#A02F6F")
     (red-faint    "#D14D41")
     (red-intense  "#942822")

     (green        "#66800B")
     (green-warmer "#8E6B01")
     (green-cooler "#24837B")
     (green-faint  "#879A39")
     (green-intense "#536907")

     (yellow        "#AD8301")
     (yellow-warmer "#BC5215")
     (yellow-cooler "#A0AF54")
     (yellow-faint  "#D0A215")
     (yellow-intense "#8E6B01")

     (blue         "#205EA6")
     (blue-warmer  "#5E409D")
     (blue-cooler  "#3AA99F")
     (blue-faint   "#4385BE")
     (blue-intense "#1A4F8C")

     (magenta         "#A02F6F")
     (magenta-warmer  "#E8705F")
     (magenta-cooler  "#5E409D")
     (magenta-faint   "#CE5D97")
     (magenta-intense "#87285E")

     (cyan         "#24837B")
     (cyan-warmer  "#768D21")
     (cyan-cooler  "#205EA6")
     (cyan-faint   "#3AA99F")
     (cyan-intense "#1C6C66")

     (rust   "#71320D")
     (gold   "#DFB431")
     (olive  "#3D4C07")
     (slate  "#133051")
     (indigo "#4F3685")
     (maroon "#6C201C")
     (pink   "#E47DA8")

     (bg-red-intense      "#FDB2A2")
     (bg-green-intense    "#CDD597")
     (bg-yellow-intense   "#F1D67E")
     (bg-blue-intense     "#ABCFE2")
     (bg-magenta-intense  "#D3CAE6")
     (bg-cyan-intense     "#A2DECE")

     (bg-red-subtle       "#FFE1D5")
     (bg-green-subtle     "#EDEECF")
     (bg-yellow-subtle    "#FAEEC6")
     (bg-blue-subtle      "#E1ECEB")
     (bg-magenta-subtle   "#FEE4E5")
     (bg-cyan-subtle      "#DDF1E4")

     (bg-red-nuanced      "#FFCABB")
     (bg-green-nuanced    "#DDE2B2")
     (bg-yellow-nuanced   "#F6E2A0")
     (bg-blue-nuanced     "#C6DDE8")
     (bg-magenta-nuanced  "#FCCFDA")
     (bg-cyan-nuanced     "#BFE8D9")

     (bg-mode-line-active       "#F2F0E5")
     (fg-mode-line-active       "#100F0F")
     (border-mode-line-active   "#FFFCF0")
     (bg-mode-line-inactive     "#FFFCF0")
     (fg-mode-line-inactive     "#6F6E69")
     (border-mode-line-inactive "#FFFCF0")

     (bg-tab-bar     "#E6E4D9")
     (bg-tab-current "#FFFCF0")
     (bg-tab-other   "#DAD8CE")

     (fg-line-number-inactive "#B7B5AC")
     (fg-line-number-active   "#6F6E69")
     (bg-line-number-inactive "#F2F0E5")
     (bg-line-number-active   "#E6E4D9")

     (bg-region    "#DAD8CE")
     (fg-region    "#100F0F")
     (bg-hl-line   "#F2F0E5")

     (bg-completion      "#E6E4D9")
     (bg-hover           "#DAD8CE")
     (bg-hover-secondary "#F2F0E5")

     (bg-paren-match "#5ABDAC")
     (fg-paren-match "#100F0F")

     (bg-added         "#DDE2B2")
     (bg-added-faint   "#EDEECF")
     (bg-added-refine  "#CDD597")
     (bg-added-fringe  "#879A39")
     (fg-added         "#66800B")
     (fg-added-intense "#536907")

     (bg-removed         "#FFCABB")
     (bg-removed-faint   "#FFE1D5")
     (bg-removed-refine  "#FDB2A2")
     (bg-removed-fringe  "#D14D41")
     (fg-removed         "#AF3029")
     (fg-removed-intense "#942822")

     (bg-changed         "#F6E2A0")
     (bg-changed-faint   "#FAEEC6")
     (bg-changed-refine  "#F1D67E")
     (bg-changed-fringe  "#D0A215")
     (fg-changed         "#AD8301")
     (fg-changed-intense "#8E6B01")

     (bg-diff-context "#F2F0E5")

     (bg-search-current   "#F1D67E")
     (bg-search-lazy      "#A2DECE")
     (bg-search-replace   "#FDB2A2")
     (bg-search-rx-group-0 "#ABCFE2")
     (bg-search-rx-group-1 "#CDD597")
     (bg-search-rx-group-2 "#FFE1D5")
     (bg-search-rx-group-3 "#FEE4E5")

     (bg-prose-block-delimiter "#F2F0E5")
     (fg-prose-block-delimiter "#B7B5AC")
     (bg-prose-block-contents  "#F2F0E5")

     (cursor "#100F0F")))
  "Full palette for `modus-flexoki-light'.")

(defvar modus-flexoki-light-palette-overrides
  '((prose-done olive)
    (prose-todo rust)
    (prose-table fg-main)
    (fg-heading-0 fg-main)
    (fg-heading-1 fg-main)
    (fg-heading-2 fg-main)
    (fg-heading-3 fg-main)
    (fg-heading-4 fg-main))
  "Overrides for `modus-flexoki-light'.")

(defvar modus-flexoki-light-faces
  '(`(mode-line ((t :background ,bg-main
		    :foreground ,bg-main
		    :height 0.1)))
    `(mode-line-active ((t :background ,bg-main
			   :foreground ,bg-main
			   :height 0.1)))
    `(mode-line-inactive ((t :background ,bg-main
			     :foreground ,bg-main
			     :height 0.1)))
    `(mode-line-highlight ((t :background ,bg-main
			      :foreground ,bg-main
			      :height 0.1
			      :box nil)))
    `(header-line ((t :background ,bg-mode-line-active
		      :foreground ,fg-mode-line-active)))
    `(header-line-highlight ((t :background ,bg-mode-line-active
				:foreground ,fg-mode-line-active)))
    `(header-line-inactive ((t :background ,bg-mode-line-inactive
			       :foreground ,fg-mode-line-inactive))))
  "Face overrides for `modus-flexoki-light'.")

(modus-themes-theme
 'modus-flexoki-light
 'modus-themes
 "Flexoki light palette on modus-operandi."
 'light
 'modus-operandi-palette
 'modus-flexoki-light-palette
 'modus-flexoki-light-palette-overrides
 'modus-flexoki-light-faces)

;;; modus-flexoki-light-theme.el ends here
