// ==UserScript==
// @name    Userstyle (chess.css)
// @include    *chess.com/*
// ==/UserScript==
GM_addStyle(`:root {
	--rosewater: #d8dee9;
	--flamingo: #d8dee9;
	--pink: #b48ead;
	--mauve: #b48ead;
	--red: #bf616a;
	--maroon: #bf616a;
	--peach: #d08770;
	--yellow: #ebcb8b;
	--green: #a3be8c;
	--teal: #8fbcbb;
	--sky: #88c0d0;
	--sapphire: #81a1c1;
	--blue: #5e81ac;
	--lavender: #b48ead;
	--text: #eceff4;
	--subtext1: #e5e9f0;
	--subtext0: #e5e9f0;
	--overlay2: #4c566a;
	--overlay1: #4c566a;
	--overlay0: #434c5e;
	--surface2: #434c5e;
	--surface1: #3b4252;
	--surface0: #3b4252;
	--base: #2e3440;
	--mantle: #2e3440;
	--crust: #2e3440;

	--bb: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/bb.png");
	--bk: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/bk.png");
	--bn: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/bn.png");
	--bp: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/bp.png");
	--bq: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/bq.png");
	--br: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/b/br.png");
	--wb: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wb.png");
	--wk: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wk.png");
	--wn: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wn.png");
	--wp: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wp.png");
	--wq: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wq.png");
	--wr: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/w/wr.png");
}

body {
	background: var(--base) !important;
	--globalBackground: var(--mantle) !important;
	--globalBackgroundOpaque: var(--mantle) !important;
	--globalSecondaryBackground: var(--crust) !important;
	--globalTertiaryBackground: var(--surface0) !important;
	--globalAccentBackground: var(--accent-color) !important;
	--globalSecondaryAccentBackground: darken(var(--accent-color), 20%) !important;
	--globalSiteBackground: var(--base) !important;
	--subtleButtonBackground: hsla(0, 0%, 100%, 0.16);
	--globalBorder: var(--surface0) !important;
	--globalGray: hsla(0, 0%, 100%, 0.08);
	--globalGraySoft: hsla(0, 0%, 100%, 0.08);
	--globalColorThemeFull: var(--text) !important;
	--globalColorThemeHigh: var(--text);
	--globalColorThemeMid: var(--overlay2) !important;
	--globalColorThemeLow: var(--overlay0) !important;
	--globalColorThemeLower: var(--base) !important;
	--globalColorThemeLink: var(--sapphire) !important;
	--globalColorThemeBlueToWhite: #fff;
	--globalColorThemeBlueToMid: hsla(0, 0%, 100%, 0.72);
	--globalColorThemeBlueToMidHover: hsla(0, 0%, 100%, 0.85);
	--globalColorThemeBlueToHigh: hsla(0, 0%, 100%, 0.85);
	--globalColorThemeBlueToHighHover: #fff;
	--globalColorThemeHighToMid: hsla(0, 0%, 100%, 0.72);
	--globalColorThemeFullToMid: hsla(0, 0%, 100%, 0.72);
	--globalColorNeutral50: rgba(0, 0, 0, 0.1);
	--globalColorNeutral100: rgba(0, 0, 0, 0.2);
	--globalColorNeutral200: rgba(0, 0, 0, 0.4);
	--globalOverlayBackground: var(--base) !important;
	--globalColorWin: var(--green) !important;
	--globalColorDraw: var(--accent-color) !important;
	--globalColorLoss: var(--red) !important;
}

/* index page */
.promo-title,
.index-title {
	color: var(--text) !important;
}

.play-quick-links-title,
.promo-rank,
.v5-header-name,
.promo-subtitle,
#tb .toolbar-action-icon {
	color: var(--text);
}

.home-username-link {
	color: var(--accent-color);
}

.index-info-item-counter {
	color: var(--text) !important;
}

.index-info-item {
	color: var(--subtext0) !important;
}

.index-quote-author .index-chess-title {
	background: var(--accent-color) !important;
	color: var(--crust) !important;
}

.authentication-intro-levels {
	--labelBackground: var(--surface0) !important;
	--labelBackgroundHover: var(--surface1) !important;

	.authentication-intro-level-v5.authentication-intro-selected {
		border-color: var(--accent-color) !important;
	}
}

/* ui */
.user-username-component {
	color: var(--text);
}

.user-tagline-rating.user-tagline-white {
	color: var(--overlay1);
}

.nav-link-text {
	color: var(--text) !important;
}
.nav-menu-area:last-of-type .icon-font-chess {
	color: var(--mantle) !important;
}
#sb .nav-popover.dark .btn-link {
	color: var(--text);
}
#sb .nav-menu-area:last-of-type .icon-font-chess {
	color: var(--text) !important;
}
.nav-link-main-design:hover,
.nav-link-main-link:hover {
	color: darken(var(--text), 20%) !important;
}
.nav-link-main-design,
.nav-link-main-link {
	color: var(--text) !important;
}
.ui_v5-button-component {
	--boxShadow: none;
	--boxShadowHover: none;

	box-shadow: none;

	&.ui_v5-button-basic {
		--basicColor: var(--text) !important;
		--basicHoverColor: var(--text) !important;
		--basicBgColor: var(--surface1) !important;
		--basicBghover: var(--surface2) !important;
		--borderColor: var(--surface0) !important;
	}

	&.ui_v5-button-primary {
		color: var(--crust) !important;
		background-color: var(--accent-color) !important;
		--borderColor: darken(var(--accent-color), 20%) !important;

		&:hover {
			--secondaryBorderColor: fadeout(var(--accent-color), 20%) !important;
			box-shadow: none;
		}
	}
}

.ui_v5-select-component {
	&:not(.ui_v5-select-light),
	&.ui_v5-select-dark {
		background: var(--base);
	}
}

.ui_v5-input-component {
	background: var(--base);
}

.ui_v5-input-dark {
	--secondaryTextColor: var(--subtext0);
}

.ui_v5-switch-checkbox:not(.ui_v5-switch-readonly):checked
+ .ui_v5-switch-label {
	background: var(--green);
}

.nav-panel-shade {
	background: var(--mantle);
}

.nav-popover.dark {
	background: var(--mantle);
}

.nav-section-header-component {
	background: var(--base);
}

#sb .nav-action.has-popover + .nav-popover {
	background: var(--mantle);
}

.popover-friends-header {
	background: var(--mantle);
}

.popover-friends-content {
	background: var(--mantle);
}

.popover-messages-header {
	background: var(--mantle);
}

.popover-messages-content {
	background: var(--mantle);
}

.popover-settings-header {
	background: var(--mantle);
}

.popover-settings-content {
	background: var(--mantle);
}

.selector-button-button {
	background: var(--surface0);

	&:hover {
		background: var(--surface1);
	}
}

.time-selector-button-button {
	background: var(--surface0);

	&:hover {
		background: var(--surface1);
	}
}

.clock-component.clock-black {
	background: var(--surface0);
}

.clock-component.clock-white {
	background: var(--text);
}

.highlight {
	background: var(--peach) !important;
}

.hint {
	background-color: var(--overlay1);
	filter: drop-shadow(0px 0px 1px var(--crust));
}

.capture-hint {
	background-color: var(--overlay1);
	filter: drop-shadow(0px 0px 1px var(--crust));
	z-index: -1;
}

.modal-game-over-header-grey {
	background-color: var(--base);
}

.modal-content-component.modal-content-light {
	background-color: var(--base);
}

.modal-game-over-user-winner-active {
	border-color: var(--lavender);
}

.modal-game-over-user-crown {
	background: var(--lavender);
}

.placeholder-ad-upgrade {
	background-color: var(--accent-color);
}

.placeholder-ad-link {
	color: var(--crust);
}

div.mode-selection-button-selected > .mode-selection-button-description {
	color: var(--surface1);
}

div.mode-selection-button-selected > .mode-selection-button-mode {
	color: var(--mantle);
}

/* crowns */
img.crowns-full-crown {
	/* this selects the crown, but tbh its not easy to rotate-hue an svg to an exact color. we might make more svgs for the crowns? */
}

/* Board */
.board {
	background-image: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/lavender.png") !important;
}

.game-preview-legacy-component {
	background-image: url("https://media.githubusercontent.com/media/catppuccin/userstyles/main/styles/chess.com/assets/mocha/lavender.png") !important;
}

/* Black Pieces */
.piece.bp {
	background-image: var(--bp) !important;
}

.piece.bn {
	background-image: var(--bn) !important;
}

.piece.bb {
	background-image: var(--bb) !important;
}

.piece.br {
	background-image: var(--br) !important;
}

.piece.bk {
	background-image: var(--bk) !important;
}

.piece.bq {
	background-image: var(--bq) !important;
}

/* -- Previews */
.game-preview-legacy-piece[alt="bb"] {
	content: var(--bb) !important;
}

.game-preview-legacy-piece[alt="bk"] {
	content: var(--bk) !important;
}

.game-preview-legacy-piece[alt="bn"] {
	content: var(--bn) !important;
}

.game-preview-legacy-piece[alt="bp"] {
	content: var(--bp) !important;
}

.game-preview-legacy-piece[alt="bq"] {
	content: var(--bq) !important;
}

.game-preview-legacy-piece[alt="br"] {
	content: var(--br) !important;
}

.game-preview-legacy-piece[alt="wb"] {
	content: var(--wb) !important;
}

.game-preview-legacy-piece[alt="wk"] {
	content: var(--wk) !important;
}

.game-preview-legacy-piece[alt="wn"] {
	content: var(--wn) !important;
}

.game-preview-legacy-piece[alt="wp"] {
	content: var(--wp) !important;
}

.game-preview-legacy-piece[alt="wq"] {
	content: var(--wq) !important;
}

.game-preview-legacy-piece[alt="wr"] {
	content: var(--wr) !important;
}

/* White Pieces */
.piece.wp {
	background-image: var(--wp) !important;
}

.piece.wn {
	background-image: var(--wn) !important;
}

.piece.wb {
	background-image: var(--wb) !important;
}

.piece.wr {
	background-image: var(--wr) !important;
}

.piece.wk {
	background-image: var(--wk) !important;
}

.piece.wq {
	background-image: var(--wq) !important;
}
`)