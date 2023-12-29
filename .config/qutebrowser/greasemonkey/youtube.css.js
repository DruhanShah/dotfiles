// ==UserScript==
// @name    Userstyle (youtube.css)
// @include    *youtube.com/*
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

	--accent-Color: var(--red);
}


ytd-topbar-logo-renderer.style-scope a svg > g,
svg.ytd-consent-bump-v2-lightbox > g:nth-child(1) {
	path[fill="#FF0000"] {
		fill: var(--accent-Color) !important;
	}
	path[fill="white"] {
		fill: var(--base) !important;
	}
}

/* apply everywhere */
[dark],
html,
html[system-icons][dark],
html[system-icons] [dark],
html[darker-dark-theme][dark],
[darker-dark-theme] [dark] {
	--yt-spec-white-1: var(--text) !important;
	--yt-spec-white-2: var(--subtext0) !important;
	--yt-spec-white-3: var(--subtext1) !important;
	--yt-spec-white-4: darken(var(--subtext1), 5%) !important;
	--yt-spec-black-1: var(--overlay1) !important;
	--yt-spec-black-2: var(--overlay0) !important;
	--yt-spec-black-3: var(--surface2) !important;
	--yt-spec-black-4: var(--surface1) !important;
	--yt-spec-black-pure: var(--surface0) !important;
	--yt-spec-grey-1: var(--text) !important;
	--yt-spec-grey-2: var(--subtext0) !important;
	--yt-spec-grey-3: var(--subtext1) !important;
	--yt-spec-grey-4: var(--overlay2) !important;
	--yt-spec-grey-5: var(--overlay1) !important;
	--yt-brand-youtube-red: var(--accent-Color) !important;
	--yt-brand-medium-red: var(--accent-Color) !important;
	--yt-brand-light-red: var(--accent-Color) !important;
	--yt-spec-red-30: var(--peach) !important;
	--yt-spec-red-70: var(--red) !important;
	--yt-spec-pale-blue: var(--sky) !important;
	--yt-spec-light-blue: var(--sky) !important;
	--yt-spec-dark-blue: var(--sapphire) !important;
	--yt-spec-navy-blue: var(--teal) !important;
	--yt-spec-light-green: var(--green) !important;
	--yt-spec-dark-green: var(--green) !important;
	--yt-spec-yellow: var(--peach) !important;
	--yt-spec-black-pure-alpha-5: fadeout(var(--crust), 0.05) !important;
	--yt-spec-black-pure-alpha-10: fadeout(var(--crust), 0.1) !important;
	--yt-spec-black-pure-alpha-15: fadeout(var(--crust), 0.15) !important;
	--yt-spec-black-pure-alpha-30: fadeout(var(--crust), 0.3) !important;
	--yt-spec-black-pure-alpha-60: fadeout(var(--crust), 0.6) !important;
	--yt-spec-black-pure-alpha-80: fadeout(var(--crust), 0.8) !important;
	--yt-spec-black-1-alpha-98: fadeout(var(--crust), 0.98) !important;
	--yt-spec-black-1-alpha-95: fadeout(var(--crust), 0.95) !important;
	--yt-spec-white-1-alpha-10: fadeout(var(--text), 0.1) !important;
	--yt-spec-white-1-alpha-20: fadeout(var(--text), 0.2) !important;
	--yt-spec-white-1-alpha-25: fadeout(var(--text), 0.25) !important;
	--yt-spec-white-1-alpha-30: fadeout(var(--text), 0.3) !important;
	--yt-spec-white-1-alpha-70: fadeout(var(--text), 0.7) !important;
	--yt-spec-white-1-alpha-95: fadeout(var(--text), 0.95) !important;
	--yt-spec-white-1-alpha-98: fadeout(var(--text), 0.98) !important;
	--yt-brand-medium-red-alpha-90: fadeout(var(--accent-Color), 0.9) !important;
	--yt-brand-medium-red-alpha-30: fadeout(var(--accent-Color), 0.3) !important;
	--yt-brand-light-red-alpha-30: fadeout(var(--accent-Color), 0.3) !important;
	--yt-spec-light-blue-alpha-30: fadeout(var(--sapphire), 0.3) !important;
	--yt-spec-dark-blue-alpha-30: fadeout(var(--sapphire), 0.3) !important;

	--yt-spec-base-background: var(--base) !important;
	--yt-spec-raised-background: var(--mantle) !important;
	--yt-spec-menu-background: var(--mantle) !important;
	--yt-spec-inverted-background: var(--text) !important;
	--yt-spec-additive-background: fadeout(var(--surface0), 0.1) !important;
	--yt-spec-outline: var(--surface0) !important;
	--yt-spec-shadow: fadeout(var(--crust), 0.25) !important;
	--yt-spec-text-primary: var(--text) !important;
	--yt-spec-text-secondary: var(--subtext0) !important;
	--yt-spec-text-disabled: var(--subtext1) !important;
	--yt-spec-text-primary-inverse: var(--crust) !important;
	--yt-spec-call-to-action: var(--accent-Color) !important;
	--yt-spec-call-to-action-inverse: var(--accent-Color) !important;
	--yt-spec-suggested-action: var(--surface1) !important;
	--yt-spec-suggested-action-inverse: var(--text) !important;
	--yt-spec-icon-active-other: var(--overlay0) !important;
	--yt-spec-icon-inactive: var(--overlay1) !important;
	--yt-spec-icon-disabled: var(--overlay2) !important;
	--yt-spec-button-chip-background-hover: var(--surface1) !important;
	--yt-spec-touch-response: var(--surface0) !important;

	--yt-spec-touch-response-inverse: var(--accent-Color) !important;
	--yt-spec-brand-icon-active: var(--accent-Color) !important;
	--yt-spec-brand-icon-inactive: var(--overlay1) !important;
	--yt-spec-brand-button-background: var(--accent-Color) !important;
	--yt-spec-brand-link-text: var(--sapphire) !important;
	--yt-spec-wordmark-text: var(--text) !important;
	--yt-spec-error-indicator: var(--red) !important;
	--yt-spec-themed-blue: var(--sky) !important;
	--yt-spec-themed-green: var(--green) !important;
	--yt-spec-ad-indicator: var(--teal) !important;
	--yt-spec-themed-overlay-background: fadeout(var(--crust), 0.8) !important;
	--yt-spec-commerce-badge-background: var(--green) !important;
	--yt-spec-static-brand-red: var(--accent-Color) !important;
	--yt-spec-static-brand-white: var(--text) !important;
	--yt-spec-static-brand-black: var(--base) !important;
	--yt-spec-static-clear-color: fadeout(var(--crust), 0) !important;
	--yt-spec-static-clear-black: fadeout(var(--crust), 0) !important;
	--yt-spec-static-ad-yellow: var(--peach) !important;
	--yt-spec-static-grey: var(--subtext0) !important;
	--yt-spec-static-overlay-background-solid: var(--crust) !important;
	--yt-spec-static-overlay-background-heavy: var(--surface0) !important;
	--yt-spec-static-overlay-background-medium: fadeout(
	var(--crust),
	0.6
	) !important;
	--yt-spec-static-overlay-background-medium-light: fadeout(
	var(--crust),
	0.3
	) !important;
	--yt-spec-static-overlay-background-light: fadeout(
	var(--crust),
	0.1
	) !important;
	--yt-spec-static-overlay-text-primary: var(--text) !important;
	--yt-spec-static-overlay-text-secondary: fadeout(
	var(--subtext0),
	0.7
	) !important;
	--yt-spec-static-overlay-text-disabled: fadeout(
	var(--subtext0),
	0.3
	) !important;
	--yt-spec-static-overlay-call-to-action: var(--accent-Color) !important;
	--yt-spec-static-overlay-icon-active-other: var(--text) !important;
	--yt-spec-static-overlay-icon-inactive: var(--surface1) !important;
	--yt-spec-static-overlay-icon-disabled: var(--surface2) !important;
	--yt-spec-static-overlay-button-primary: var(--accent-Color) !important;
	--yt-spec-static-overlay-button-secondary: var(--surface0) !important;
	--yt-spec-static-overlay-touch-response: var(--overlay1) !important;
	--yt-spec-static-overlay-touch-response-inverse: var(--surface1) !important;
	--yt-spec-static-overlay-background-brand: var(--accent-Color) !important;
	--yt-spec-assistive-feed-themed-gradient-1: var(--subtext0) !important;
	--yt-spec-assistive-feed-themed-gradient-2: var(--lavender) !important;
	--yt-spec-assistive-feed-themed-gradient-3: var(--red) !important;
	--yt-spec-brand-background-solid: var(--base) !important;
	--yt-spec-brand-background-primary: var(--surface0) !important;
	--yt-spec-brand-background-secondary: var(--mantle) !important;
	--yt-spec-general-background-a: var(--base) !important;
	--yt-spec-general-background-b: var(--mantle) !important;
	--yt-spec-general-background-c: var(--crust) !important;
	--yt-spec-error-background: var(--base) !important;
	--yt-spec-10-percent-layer: var(--surface0) !important;
	--yt-spec-snackbar-background: var(--mantle) !important;
	--yt-spec-snackbar-background-updated: var(--mantle) !important;
	--yt-spec-badge-chip-background: var(--surface0) !important;
	--yt-spec-verified-badge-background: var(--overlay0) !important;
	--yt-spec-call-to-action-fadeoutd: fadeout(var(--sapphire), 0.3) !important;
	--yt-spec-call-to-action-hover: var(--accent-Color) !importantr;
	--yt-spec-brand-button-background-hover: var(--accent-Color) !important;
	--yt-spec-brand-link-text-fadeoutd: fadeout(
	var(--accent-Color),
	0.3
	) !important;
	--yt-spec-filled-button-focus-outline: var(--surface0) !important;
	--yt-spec-static-overlay-button-hover: var(--surface1) !important;
	--yt-spec-mono-filled-hover: var(--surface1) !important;
	--yt-spec-commerce-filled-hover: var(--accent-Color) !important;
	--yt-spec-mono-tonal-hover: var(--surface1) !important;
	--yt-spec-commerce-tonal-hover: var(--surface2) !important;
	--yt-spec-static-overlay-filled-hover: var(--overlay1) !important;
	--yt-spec-static-overlay-tonal-hover: var(--surface1) !important;
	--yt-spec-paper-tab-ink: fadeout(var(--text), 0.3);
	--yt-spec-filled-button-text: var(--text) !important;
	--yt-spec-selected-nav-text: var(--text) !important;
	--iron-icon-fill-color: var(--text) !important;

	/* Search bar */
	--ytd-searchbox-border-color: var(--surface0) !important;
	--ytd-searchbox-legacy-border-color: var(--surface0) !important;
	--ytd-searchbox-legacy-border-shadow-color: fadeout(var(--crust), 0) !important;
	--ytd-searchbox-legacy-button-color: var(--mantle) !important;
	--ytd-searchbox-legacy-button-border-color: var(--surface0) !important;
	--ytd-searchbox-legacy-button-focus-color: var(--accent-Color) !important;
	--ytd-searchbox-legacy-button-hover-color: var(--mantle) !important;
	--ytd-searchbox-legacy-button-hover-border-color: var(--surface0) !important;
	--ytd-searchbox-legacy-button-icon-color: var(--accent-Color) !important;
	--ytd-searchbox-background: var(--base) !important;
	--ytd-searchbox-text-color: var(--text) !important;

	/* System icons */
	--yt-spec-icon-inactive: var(--overlay0) !important;
	--yt-spec-icon-disabled: var(--overlay1) !important;
	--yt-spec-brand-icon-inactive: var(--overlay2) !important;

	/* Yt video Page */
	--yt-live-chat-background-color: var(--base) !important;
	--yt-live-chat-action-panel-background-color: var(--base) !important;
	--yt-live-chat-action-panel-background-color-transparent: var(--base) !important;
	--yt-live-chat-secondary-background-color: var(--surface1);
	--yt-live-chat-banner-gradient-scrim: linear-gradient(
	var(--mantle),
	transparent
	) !important;
	--yt-live-chat-toast-background-color: var(--surface2) !important;
	--yt-live-chat-mode-change-background-color: var(--base) !important;
	--yt-live-chat-secondary-text-color: var(--subtext0) !important;
	--yt-live-chat-tertiary-text-color: fadeout(var(--text), 0.54) !important;
	--yt-live-chat-text-input-field-inactive-underline-color: var(--subtext0) !important;
	--yt-live-chat-text-input-field-placeholder-color: var(--subtext0) !important;
	--yt-live-chat-enabled-send-button-color: var(--text) !important;
	--yt-live-chat-disabled-icon-button-color: var(--subtext1) !important;
	--yt-live-chat-picker-button-hover-color: var(--accent-Color) !important;
	--yt-live-chat-mention-background-color: var(--accent-Color) !important;
	--yt-live-chat-mention-text-color: var(--text) !important;
	--yt-live-chat-deleted-message-color: var(--subtext0);
	--yt-live-chat-deleted-message-bar-color: var(--subtext1) !important;
	--yt-live-chat-reconnect-message-color: var(--text) !important;
	--yt-live-chat-disabled-button-background-color: var(--overlay0) !important;
	--yt-live-chat-sub-panel-background-color: var(--base) !important;
	--yt-live-chat-sub-panel-background-color-transparent: var(--mantle) !important;
	--yt-live-chat-moderator-color: var(--lavender) !important;
	--yt-live-chat-owner-color: var(--peach) !important;
	--yt-live-chat-message-highlight-background-color: var(--base) !important;
	--yt-live-chat-sponsor-color: var(--green) !important;
	--yt-live-chat-overlay-color: fadeout(var(--mantle), 0.5);
	--yt-live-chat-dialog-background-color: var(--base) !important;
	--yt-emoji-picker-variant-selector-bg-color: var(--base) !important;
	--yt-live-chat-moderation-mode-hover-background-color: fadeout(
	var(--mantle),
	0.3
	) !important;
	--yt-grey: var(--subtext0) !important;
	--yt-live-chat-text-input-field-suggestion-background-color: var(--subtext0) !important;
	--yt-live-chat-text-input-field-suggestion-background-color-hover: var(--subtext1) !important;
	--yt-emoji-picker-search-background-color: var(--surface0) !important;
	--yt-emoji-picker-search-color: var(--text) !important;
	--yt-emoji-picker-search-placeholder-color: var(--accent-Color) !important;
	--yt-live-chat-slider-active-color: var(--accent-Color) !important;
	--yt-live-chat-slider-container-color: var(--surface0) !important;
	--yt-live-chat-slider-markers-color: var(--text) !important;
	--yt-live-chat-banner-gradient-scrim: linear-gradient(
	var(--mantle),
	transparent
	) !important;
	--yt-live-chat-action-panel-gradient-scrim: linear-gradient(
	to top,
	var(--mantle),
	transparent
	) !important;
	--yt-live-chat-automod-button-background-color-hover: fadeout(
	var(--crust),
	0.5
	) !important;
	--yt-live-chat-automod-button-explanation-color: fadeout(
	var(--accent-Color),
	0.7
	) !important;
	--yt-live-chat-shimmer-background-color: fadeout(var(--crust), 0.4) !important;
	--yt-live-chat-shimmer-linear-gradient: linear-gradient(
	0deg,
	fadeout(var(--text), 0.1) 40%,
	fadeout(var(--base), 0.3) 50%,
	fadeout(var(--text), 0.1) 60%
	) !important;
	--yt-live-chat-vem-background-color: var(--mantle) !important;
	--yt-live-chat-product-picker-icon-color: fadeout(var(--text), 0.5) !important;
	--yt-live-chat-product-picker-hover-color: var(--overlay0) !important;
	--yt-live-chat-product-picker-disabled-icon-color: fadeout(
	var(--text),
	0.3
	) !important;
	--yt-live-chat-action-panel-background-color-transparent: (
	null
	) !important;

	/* Tooltip */
	--paper-tooltip-background: var(--overlay0) !important;
	--paper-tooltip-text-color: var(--text) !important;

	/* links */
	--yt-endpoint-color: var(--accent-Color) !important;
	--yt-endpoint-visited-color: var(--accent-Color) !important;
	--yt-endpoint-hover-color: var(--accent-Color) !important;

	--sb-dark-red-outline: var(--accent-Color) !important;
	--sb-main-bg-color: var(--base) !important;
	--sb-main-fg-color: var(--text) !important;
	--sb-grey-bg-color: var(--base) !important;
	--sb-grey-fg-color: var(--subtext0) !important;
	--sb-red-bg-color: var(--accent-Color) !important;
}

/* general colors */
&:not(.style-scope) {
	--primary-text-color: var(--text) !important;
	--primary-background-color: var(--base) !important;
	--secondary-text-color: var(--subtext0) !important;
	--disabled-text-color: var(--subtext1) !important;
	--divider-color: var(--overlay0) !important;
	--error-color: var(--red) !important;
	--primary-color: var(--accent-Color) !important;
	--light-primary-color: var(--accent-Color) !important;
	--dark-primary-color: var(--blue) !important;
	--accent-color: var(--accent-Color) !important;
	--light-accent-color: var(--accent-Color) !important;
	--dark-accent-color: var(--accent-Color) !important;
	--light-theme-background-color: var(--base) !important;
	--light-theme-base-color: var(--text) !important;
	--light-theme-text-color: var(--text) !important;
	--light-theme-secondary-color: var(--subtext0) !important;
	--light-theme-disabled-color: var(--subtext1) !important;
	--light-theme-divider-color: var(--overlay0) !important;
	--dark-theme-background-color: var(--base) !important;
	--dark-theme-base-color: var(--text) !important;
	--dark-theme-text-color: var(--text) !important;
	--dark-theme-secondary-color: var(--subtext0) !important;
	--dark-theme-disabled-color: var(--subtext1) !important;
	--dark-theme-divider-color: var(--overlay0) !important;
}

#channel-name.ytd-video-meta-block {
	--yt-endpoint-color: var(--accent-Color) !important;
	--yt-endpoint-visited-color: var(--accent-Color) !important;
	color: var(--accent-Color) !important;
}

/* selected chapter */
ytd-macro-markers-list-item-renderer {
	--ytd-macro-markers-list-item-background-color: var(--surface0) !important;
	--ytd-macro-markers-list-item-title-color: var(--text) !important;
	--ytd-macro-markers-list-item-secondary-color: var(--subtext1) !important;
	--ytd-macro-markers-list-item-timestamp-background-color: var(--surface1) !important;
}

/* playlist selector */
ytd-playlist-panel-video-renderer {
	--yt-lightsource-section2-color: var(--surface1) !important;
	--yt-lightsource-section4-color: var(--surface2) !important;
	--yt-lightsource-primary-title-color: var(--text) !important;
	--yt-lightsource-secondary-title-color: var(--text) !important;
	--yt-active-playlist-panel-background-color: var(--surface0) !important;
}

ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette]
.header.ytd-playlist-panel-renderer {
	--iron-icon-fill-color: var(--text) !important;
	background-color: var(--base) !important;
}

/* explandable meta */
ytd-expandable-metadata-renderer {
	--yt-lightsource-section1-color: var(--base) !important;
	--yt-lightsource-section2-color: var(--surface0) !important;
	--yt-lightsource-section3-color: var(--surface1) !important;
	--yt-lightsource-section4-color: var(--surface2) !important;
	--yt-lightsource-primary-title-color: var(--text) !important;
	--yt-lightsource-secondary-title-color: var(--subtext0) !important;
}

yt-live-chat-renderer {
	--yt-emoji-picker-renderer-height: 180px;
	--yt-button-default-text-color: var(--text) !important;
	--yt-button-default-background-color: var(--base) !important;
	--yt-button-dark-text-color: var(--base) !important;
	--yt-button-dark-background-color: var(--accent-Color) !important;
	--yt-button-payment-background-color: var(--accent-Color) !important;
}

yt-icon.ytd-pinned-comment-badge-renderer * {
	fill: var(--text) !important;
}

.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after {
	background: var(--overlay0) !important;
}

.html5-ypc-purchase {
	background: var(--accent-Color) !important;
	&:hover {
		background: ligten(var(--accent-Color), 10%) !important;
	}
}

yt-notification-action-renderer[darker-dark-theme]
tp-yt-paper-toast.yt-notification-action-renderer {
	background: var(--overlay0) !important;
}

/* volume bar */
.ytp-volume-slider-handle {
	background: var(--accent-Color) !important;
	&::before {
		background: var(--accent-Color) !important;
	}
	&::after {
		z-index: -1;
	}
}

/* new videos dot */
#newness-dot {
	background-color: var(--accent-Color) !important;
}

/* subtitle */
.ytp-chrome-controls .ytp-button[aria-pressed]:after {
	background-color: var(--accent-Color) !important;
}

/* menu items */
/* checkbox subitem */
.ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
	background: var(--accent-Color) !important;
	&::after {
		background: var(--overlay1) !important;
	}
}
.ytp-menuitem:not([aria-disabled="true"]):hover {
	background: var(--surface1) !important;
}
.ytp-settings-button.ytp-hd-quality-badge,
.ytp-settings-button.ytp-4k-quality-badge,
.ytp-settings-button.ytp-5k-quality-badge,
.ytp-settings-button.ytp-8k-quality-badge,
.ytp-settings-button.ytp-3d-badge {
	&::after {
		background-color: var(--accent-Color) !important;
	}
}

.ytp-panel-menu {
	color: var(--text);

	& .ytp-menuitem:not(:last-child) svg > path {
		fill: var(--text);
	}

	& .ytp-menuitem:last-child svg:last-child {
		fill: var(--text);
	}
}

.ytp-svg-fill {
	fill: var(--text);
}

.ytp-right-controls {
	svg path {
		fill: var(--text) !important;
	}
}

.ytp-time-current,
.ytp-time-separator,
.ytp-time-duration,
.ytp-menu-label-secondary,
.ytp-menuitem-label-count {
	color: var(--subtext0);
}

.style-scope.ytd-thumbnail-overlay-toggle-button-renderer:hover {
	fill: var(--accent-Color) !important;
}

.yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled,
.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
	background-color: var(--accent-Color) !important;
	.yt-spec-button-shape-next__icon yt-icon svg g path {
		fill: var(--base) !important;
	}
}

/* link */
.yt-core-attributed-string__link--call-to-action-color {
	color: var(--sapphire) !important;
	&:hover {
		color: var(--teal) !important;
	}
}

/* search results */
.sbpqs_a:before,
.sbqs_c:before {
	filter: invert(1);
}

/* Results backgrounds */
.sbsb_a,
.sbdd_b {
	background: var(--mantle) !important;
	border: none !important;
}

/* text color */
.gsfs {
	color: var(--text) !important;
}

/* Hover and keyboard select background */
.sbsb_c.gsfs:hover,
.sbsb_d {
	background-color: var(--surface0) !important;
}

.sbfl_b {
	background-color: var(--mantle) !important;
	&:hover {
		background-color: var(--surface0) !important;
		color: var(--accent-Color) !important;
	}
}

.sbpqs_a {
	color: var(--accent-Color) !important;
}

.sbfl_a {
	color: var(--subtext0) !important;
}

.sbsb_i {
	color: var(--subtext0);
}

/* Keyboard select text color and hover text color */
.sbsb_c:hover .sbqs_c,
.sbsb_c.gsfs.sbsb_d .sbqs_c {
	color: var(--accent-Color) !important;
}

.ytp-swatch-background-color {
	background-color: var(--accent-Color) !important;
}

/* exmplation box */
.explanation-box[correct] * {
	color: var(--crust) !important;
}

/* custom likes + anims */
yt-animated-icon[animated-icon-type="LIKE"]
> ytd-lottie-player
> lottie-component
> svg
> g:nth-child(2)
> g:nth-child(2) {
	/* not liked */
	> g:nth-child(2),
	> g:nth-child(4) {
		> path:nth-child(1) {
			stroke: var(--text) !important;
		}
	}
	/* liked */
	> g:nth-child(1),
	> g:nth-child(3) {
		> path:nth-child(1) {
			fill: var(--accent-Color) !important;
		}
		> path:nth-child(2) {
			stroke: var(--accent-Color) !important;
		}
	}
}

/* iv branding */
/* Popup for when you hover over the channel avatar in the video */
.iv-branding .branding-context-container-inner {
	background-color: var(--base) !important;
}

.iv-branding .iv-branding-context-name {
	color: var(--text) !important;
	text-shadow: none !important;
}

/* Popup for when you hover over the channel avatar in the video */
.iv-branding .branding-context-container-inner {
	background-color: var(--base) !important;
}

/* Cards */
.iv-drawer-content {
	background-color: fadeout(var(--mantle), 5%) !important;
}

.iv-drawer-header-text {
	color: var(--text) !important;
}

.iv-card-content,
.ytp-ce-expanding-overlay-background,
.ytp-cards-teaser .ytp-cards-teaser-text,
.ytp-cards-teaser .ytp-cards-teaser-box {
	background-color: var(--base) !important;
}

.ytp-cards-teaser .ytp-cards-teaser-box,
.iv-card-image {
	border: 0px !important;
}

.iv-card-content > :first-child,
.html5-video-player a,
.iv-card h2,
.ytp-cards-teaser .ytp-cards-teaser-text {
	color: var(--text) !important;
}

/*Player tooltip background*/
.ytp-tooltip-text {
	background: var(--surface0) !important;
}

.iv-card:hover .iv-card-primary-link,
.ytp-ce-website-title {
	color: var(--accent-Color) !important;
}

.ytp-popup {
	background: var(--surface0) !important;
}

tp-yt-paper-dialog {
	background-color: var(--base) !important;
}

/* Temporary fix */
.yt-core-attributed-string--link-inherit-color {
	color: var(--text) !important;
	/*&:hover {
	 * color: var(--teal) !important;
 }*/
}

/* live badges */
.badge-style-type-live-now-alternate,
ytd-thumbnail-overlay-time-status-renderer[overlay-style="LIVE"] {
	color: var(--crust) !important;
	yt-icon svg {
		g path,
		path {
			fill: var(--crust) !important;
		}
	}
}
.ytp-live-badge {
	&:before {
		background: var(--subtext1) !important;
	}
	&[disabled]:before {
		background: var(--accent-Color) !important;
	}
}

/* notification idicator */
.yt-spec-icon-badge-shape--type-notification
.yt-spec-icon-badge-shape__badge {
	background-color: var(--accent-Color) !important;
	color: var(--crust) !important;
}
.yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
	color: var(--text) !important;
}

/* creator badges */
ytd-author-comment-badge-renderer {
	--yt-basic-background-color: var(--surface0) !important;
	--yt-basic-foreground-title-color: var(--surface0) !important;
	--ytd-author-comment-badge-background-color: var(--surface0) !important;
	--ytd-author-comment-badge-name-color: var(--text) !important;
	--ytd-author-comment-badge-icon-color: var(--text) !important;
	padding-right: 6px;
	padding-left: 8px;
}

/* disable ambient mode */
#cinematics > div > canvas {
	visibility: hidden;
}

/* badges e.g. popular */
yt-chip-cloud-chip-renderer[chip-style="STYLE_DEFAULT"][selected],
yt-chip-cloud-chip-renderer[chip-style="STYLE_HOME_FILTER"][selected] {
	background: var(--surface0) !important;
	border: 1px solid var(--accent-Color) !important;
	color: var(--text) !important;
}

/* Search border */
ytd-searchbox[has-focus] #container.ytd-searchbox {
	border-color: var(--accent-Color) !important;
}

/* Error page */
#error-page {
	background-color: var(--base) !important;
}

#error-page-content {
	color: var(--text) !important;
	text-shadow: none;
	background-color: var(--base) !important;
	> p {
		color: var(--text) !important;
		text-shadow: none;
	}
	#masthead-search-terms.masthead-search-terms-border {
		border: 1px solid var(--accent-Color) !important;
		box-shadow: none !important;
	}
	#yt-masthead {
		color: var(--text) !important;
		text-shadow: none;
		#logo-container {
			.logo {
				filter: invert(1) grayscale(1);
			}
			.content-region {
				color: var(--text) !important;
				text-shadow: none;
			}
		}
		#masthead-search #masthead-search-terms-border {
			input[type="text"] {
				color: var(--text) !important;
				&:focus {
					color: var(--accent-Color) !important;
				}
			}
		}
		.search-button {
			background-color: var(--mantle) !important;
		}
	}
}

/* Scrollbar */
::-webkit-scrollbar-thumb {
	background: var(--accent-Color) !important;
}

::-webkit-scrollbar {
	width: 8px !important;
}

::-webkit-scrollbar-track {
	background: var(--base) !important;
}

::-webkit-scrollbar-thumb {
	background: var(--accent-Color) !important;
}

/* text highlight */
::selection {
	background: fadeout(var(--accent-Color), 80%) !important;
	color: var(--text) !important;
}

::-moz-selection {
	background: fadeout(var(--accent-Color), 80%) !important;
	color: var(--text) !important;
}


`)