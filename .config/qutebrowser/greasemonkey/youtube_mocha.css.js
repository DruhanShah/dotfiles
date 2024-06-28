// ==UserScript==
// @name    Userstyle (youtube_mocha.css)
// @include    *youtube.com/*
// ==/UserScript==
GM_addStyle(`
:root[dark] {
    color: #cdd6f4;
    color-scheme: dark;
    /* Misc */
    /* Selected chapter */
    /* Ambient mode */
    /* Icons */
    /* Buttons */
    /* Search box */
    /* "Suggestion removed" */
    /* Video description */
    /* Thumbnails */
    /* Panels, popups, tooltips */
    /* Video player */
    /* Channel pages */
}
:root[dark] ::selection {
    background-color: rgba(243, 139, 168, 0.3);
}
:root[dark] input::placeholder,
:root[dark] textarea::placeholder {
    color: #a6adc8 !important;
}
:root[dark],
:root[dark] [dark],
:root[dark] [system-icons],
:root[dark] [darker-dark-theme],
:root[dark][dark],
:root[dark][system-icons],
:root[dark][darker-dark-theme] {
    --yt-spec-white-1: #cdd6f4 !important;
    --yt-spec-white-2: #a6adc8 !important;
    --yt-spec-white-3: #bac2de !important;
    --yt-spec-white-4: #a9b3d6 !important;
    --yt-spec-black-1: #7f849c !important;
    --yt-spec-black-2: #6c7086 !important;
    --yt-spec-black-3: #585b70 !important;
    --yt-spec-black-4: #45475a !important;
    --yt-spec-black-pure: #313244 !important;
    --yt-spec-grey-1: #cdd6f4 !important;
    --yt-spec-grey-2: #a6adc8 !important;
    --yt-spec-grey-3: #bac2de !important;
    --yt-spec-grey-4: #9399b2 !important;
    --yt-spec-grey-5: #7f849c !important;
    --yt-brand-youtube-red: #f38ba8 !important;
    --yt-brand-medium-red: #f38ba8 !important;
    --yt-brand-light-red: #f38ba8 !important;
    --yt-spec-red-30: #fab387 !important;
    --yt-spec-red-70: #f38ba8 !important;
    --yt-spec-pale-blue: #89dceb !important;
    --yt-spec-light-blue: #89dceb !important;
    --yt-spec-dark-blue: #74c7ec !important;
    --yt-spec-navy-blue: #94e2d5 !important;
    --yt-spec-light-green: #a6e3a1 !important;
    --yt-spec-dark-green: #a6e3a1 !important;
    --yt-spec-yellow: #fab387 !important;
    --yt-spec-black-pure-alpha-5: rgba(17, 17, 27, 0.9995) !important;
    --yt-spec-black-pure-alpha-10: rgba(17, 17, 27, 0.999) !important;
    --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.9985) !important;
    --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.997) !important;
    --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.994) !important;
    --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.992) !important;
    --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.9902) !important;
    --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.9905) !important;
    --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.999) !important;
    --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.998) !important;
    --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.9975) !important;
    --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.997) !important;
    --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.993) !important;
    --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.9905) !important;
    --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.9902) !important;
    --yt-brand-medium-red-alpha-90: rgba(243, 139, 168, 0.991) !important;
    --yt-brand-medium-red-alpha-30: rgba(243, 139, 168, 0.997) !important;
    --yt-brand-light-red-alpha-30: rgba(243, 139, 168, 0.997) !important;
    --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.997) !important;
    --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.997) !important;
    --yt-spec-base-background: #1e1e2e !important;
    --yt-spec-raised-background: #1e1e2e !important;
    --yt-spec-menu-background: #181825 !important;
    --yt-spec-inverted-background: #cdd6f4 !important;
    --yt-spec-additive-background: rgba(49, 50, 68, 0.999) !important;
    --yt-spec-outline: #313244 !important;
    --yt-spec-shadow: rgba(17, 17, 27, 0.9975) !important;
    --yt-spec-text-primary: #cdd6f4 !important;
    --yt-spec-text-secondary: #a6adc8 !important;
    --yt-spec-text-disabled: #bac2de !important;
    --yt-spec-text-primary-inverse: #11111b !important;
    --yt-spec-call-to-action: #f38ba8 !important;
    --yt-spec-call-to-action-inverse: #f38ba8 !important;
    --yt-spec-suggested-action: rgba(243, 139, 168, 0.2) !important;
    --yt-spec-suggested-action-inverse: #cdd6f4 !important;
    --yt-spec-icon-active-other: #cdd6f4 !important;
    --yt-spec-button-chip-background-hover: #45475a !important;
    --yt-spec-touch-response: #313244 !important;
    --yt-spec-touch-response-inverse: #f38ba8 !important;
    --yt-spec-brand-icon-active: #f38ba8 !important;
    --yt-spec-brand-button-background: #f38ba8 !important;
    --yt-spec-brand-link-text: #74c7ec !important;
    --yt-spec-wordmark-text: #cdd6f4 !important;
    --yt-spec-error-indicator: #f38ba8 !important;
    --yt-spec-themed-blue: #f38ba8 !important;
    --yt-spec-themed-green: #a6e3a1 !important;
    --yt-spec-ad-indicator: #94e2d5 !important;
    --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.992) !important;
    --yt-spec-commerce-badge-background: #a6e3a1 !important;
    --yt-spec-static-brand-red: #f38ba8 !important;
    --yt-spec-static-brand-white: #cdd6f4 !important;
    --yt-spec-static-brand-black: #1e1e2e !important;
    --yt-spec-static-clear-color: #11111b !important;
    --yt-spec-static-clear-black: #11111b !important;
    --yt-spec-static-ad-yellow: #fab387 !important;
    --yt-spec-static-grey: #a6adc8 !important;
    --yt-spec-static-overlay-background-solid: #11111b !important;
    --yt-spec-static-overlay-background-heavy: #313244;
    --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.994) !important;
    --yt-spec-static-overlay-background-medium-light: rgba(17, 17, 27, 0.997) !important;
    --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.999) !important;
    --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
    --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.993) !important;
    --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.997) !important;
    --yt-spec-static-overlay-call-to-action: #f38ba8 !important;
    --yt-spec-static-overlay-icon-active-other: #cdd6f4 !important;
    --yt-spec-static-overlay-icon-inactive: #45475a !important;
    --yt-spec-static-overlay-icon-disabled: #585b70 !important;
    --yt-spec-static-overlay-button-primary: #f38ba8 !important;
    --yt-spec-static-overlay-button-secondary: #313244 !important;
    --yt-spec-static-overlay-touch-response: #7f849c !important;
    --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
    --yt-spec-static-overlay-background-brand: #f38ba8 !important;
    --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
    --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
    --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
    --yt-spec-brand-background-solid: #1e1e2e !important;
    --yt-spec-brand-background-primary: #1e1e2e !important;
    --yt-spec-brand-background-secondary: #181825 !important;
    --yt-spec-general-background-a: #1e1e2e !important;
    --yt-spec-general-background-b: #1e1e2e !important;
    --yt-spec-general-background-c: #11111b !important;
    --yt-spec-error-background: #1e1e2e !important;
    --yt-spec-10-percent-layer: #313244 !important;
    --yt-spec-snackbar-background: #181825 !important;
    --yt-spec-snackbar-background-updated: #181825 !important;
    --yt-spec-badge-chip-background: #45475a !important;
    --yt-spec-verified-badge-background: #6c7086 !important;
    --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.997) !important;
    --yt-spec-call-to-action-hover: #f38ba8 !important;
    --yt-spec-brand-button-background-hover: #f38ba8 !important;
    --yt-spec-brand-link-text-fadeoutd: rgba(243, 139, 168, 0.997) !important;
    --yt-spec-filled-button-focus-outline: #313244 !important;
    --yt-spec-static-overlay-button-hover: #45475a !important;
    --yt-spec-mono-filled-hover: #45475a !important;
    --yt-spec-commerce-filled-hover: #f38ba8 !important;
    --yt-spec-mono-tonal-hover: #45475a !important;
    --yt-spec-commerce-tonal-hover: #585b70 !important;
    --yt-spec-static-overlay-filled-hover: #7f849c !important;
    --yt-spec-static-overlay-tonal-hover: #45475a !important;
    --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.997);
    --yt-spec-filled-button-text: #cdd6f4 !important;
    --yt-spec-selected-nav-text: #cdd6f4 !important;
    --iron-icon-fill-color: #cdd6f4 !important;
    /* Search bar */
    --ytd-searchbox-border-color: #313244 !important;
    --ytd-searchbox-legacy-border-color: #313244 !important;
    --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
    --ytd-searchbox-legacy-button-color: #181825 !important;
    --ytd-searchbox-legacy-button-border-color: #313244 !important;
    --ytd-searchbox-legacy-button-focus-color: #f38ba8 !important;
    --ytd-searchbox-legacy-button-hover-color: #181825 !important;
    --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
    --ytd-searchbox-legacy-button-icon-color: #f38ba8 !important;
    --ytd-searchbox-background: #1e1e2e !important;
    --ytd-searchbox-text-color: #cdd6f4 !important;
    /* System icons */
    --yt-spec-icon-inactive: #cdd6f4 !important;
    --yt-spec-icon-disabled: #7f849c !important;
    --yt-spec-brand-icon-inactive: #9399b2 !important;
    /* Yt video Page */
    --yt-live-chat-background-color: #1e1e2e !important;
    --yt-live-chat-action-panel-background-color: #1e1e2e !important;
    --yt-live-chat-secondary-background-color: #45475a;
    --yt-live-chat-toast-background-color: #585b70 !important;
    --yt-live-chat-mode-change-background-color: #1e1e2e !important;
    --yt-live-chat-secondary-text-color: #a6adc8 !important;
    --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.9946) !important;
    --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
    --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
    --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
    --yt-live-chat-disabled-icon-button-color: #bac2de !important;
    --yt-live-chat-picker-button-hover-color: #f38ba8 !important;
    --yt-live-chat-mention-background-color: #f38ba8 !important;
    --yt-live-chat-mention-text-color: #cdd6f4 !important;
    --yt-live-chat-deleted-message-color: #a6adc8;
    --yt-live-chat-deleted-message-bar-color: #bac2de !important;
    --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
    --yt-live-chat-disabled-button-background-color: #6c7086 !important;
    --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
    --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
    --yt-live-chat-moderator-color: #b4befe !important;
    --yt-live-chat-owner-color: #fab387 !important;
    --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
    --yt-live-chat-sponsor-color: #a6e3a1 !important;
    --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.995);
    --yt-live-chat-dialog-background-color: #1e1e2e !important;
    --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
    --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.997) !important;
    --yt-grey: #a6adc8 !important;
    --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
    --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
    --yt-emoji-picker-search-background-color: #313244 !important;
    --yt-emoji-picker-search-color: #cdd6f4 !important;
    --yt-emoji-picker-search-placeholder-color: #f38ba8 !important;
    --yt-live-chat-slider-active-color: #f38ba8 !important;
    --yt-live-chat-slider-container-color: #313244 !important;
    --yt-live-chat-slider-markers-color: #cdd6f4 !important;
    --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
    --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
    --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.995) !important;
    --yt-live-chat-automod-button-explanation-color: rgba(243, 139, 168, 0.993) !important;
    --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.996) !important;
    --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.999) 40%, rgba(30, 30, 46, 0.997) 50%, rgba(205, 214, 244, 0.999) 60%) !important;
    --yt-live-chat-vem-background-color: #181825 !important;
    --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.995) !important;
    --yt-live-chat-product-picker-hover-color: #6c7086 !important;
    --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.997) !important;
    --yt-live-chat-action-panel-background-color-transparent: (
    null
    ) !important;
    --paper-tooltip-background: #6c7086 !important;
    --paper-tooltip-text-color: #cdd6f4 !important;
    /* Links */
    --yt-endpoint-color: #f38ba8 !important;
    --yt-endpoint-visited-color: #f38ba8 !important;
    --yt-endpoint-hover-color: #f38ba8 !important;
    --sb-dark-red-outline: #f38ba8 !important;
    --sb-main-bg-color: #1e1e2e !important;
    --sb-main-fg-color: #cdd6f4 !important;
    --sb-grey-bg-color: #1e1e2e !important;
    --sb-grey-fg-color: #a6adc8 !important;
    --sb-red-bg-color: #f38ba8 !important;
}
:root[dark]:not(.style-scope) {
    --primary-text-color: #cdd6f4 !important;
    --primary-background-color: #1e1e2e !important;
    --secondary-text-color: #a6adc8 !important;
    --disabled-text-color: #bac2de !important;
    --divider-color: #6c7086 !important;
    --error-color: #f38ba8 !important;
    --primary-color: #f38ba8 !important;
    --light-primary-color: #f38ba8 !important;
    --dark-primary-color: #89b4fa !important;
    --accent-color: #f38ba8 !important;
    --light-accent-color: #f38ba8 !important;
    --dark-accent-color: #f38ba8 !important;
    --light-theme-background-color: #1e1e2e !important;
    --light-theme-base-color: #cdd6f4 !important;
    --light-theme-text-color: #cdd6f4 !important;
    --light-theme-secondary-color: #a6adc8 !important;
    --light-theme-disabled-color: #bac2de !important;
    --light-theme-divider-color: #6c7086 !important;
    --dark-theme-background-color: #1e1e2e !important;
    --dark-theme-base-color: #cdd6f4 !important;
    --dark-theme-text-color: #cdd6f4 !important;
    --dark-theme-secondary-color: #a6adc8 !important;
    --dark-theme-disabled-color: #bac2de !important;
    --dark-theme-divider-color: #6c7086 !important;
}
:root[dark] #channel-name.ytd-video-meta-block {
    --yt-endpoint-color: #f38ba8 !important;
    --yt-endpoint-visited-color: #f38ba8 !important;
    color: #f38ba8 !important;
}
:root[dark] ytd-macro-markers-list-item-renderer {
    --ytd-macro-markers-list-item-background-color: #313244 !important;
    --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
    --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
    --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root[dark] ytd-playlist-panel-video-renderer {
    --yt-lightsource-section2-color: #45475a !important;
    --yt-lightsource-section4-color: #585b70 !important;
    --yt-lightsource-primary-title-color: #cdd6f4 !important;
    --yt-lightsource-secondary-title-color: #cdd6f4 !important;
    --yt-active-playlist-panel-background-color: #313244 !important;
}
:root[dark] ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
    --iron-icon-fill-color: #cdd6f4 !important;
    background-color: #1e1e2e !important;
}
:root[dark] #container.ytd-masthead {
    --iron-icon-fill-color: #cdd6f4 !important;
}
:root[dark] ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
    --iron-icon-fill-color: #cdd6f4 !important;
    background-color: #1e1e2e !important;
}
:root[dark] #ytd-player #container {
    background: #11111b !important;
}
:root[dark] ytd-expandable-metadata-renderer {
    --yt-lightsource-section1-color: #1e1e2e !important;
    --yt-lightsource-section2-color: #313244 !important;
    --yt-lightsource-section3-color: #45475a !important;
    --yt-lightsource-section4-color: #585b70 !important;
    --yt-lightsource-primary-title-color: #cdd6f4 !important;
    --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root[dark] yt-live-chat-renderer {
    --yt-button-default-text-color: #cdd6f4 !important;
    --yt-button-default-background-color: #1e1e2e !important;
    --yt-button-dark-text-color: #1e1e2e !important;
    --yt-button-dark-background-color: #f38ba8 !important;
    --yt-button-payment-background-color: #f38ba8 !important;
}
:root[dark] ytd-author-comment-badge-renderer:not(
[style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
) {
    --yt-basic-background-color: #313244 !important;
    --yt-basic-foreground-title-color: #313244 !important;
    --ytd-author-comment-badge-background-color: #313244 !important;
    --ytd-author-comment-badge-name-color: #cdd6f4 !important;
    --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root[dark] #cinematics {
    mix-blend-mode: lighten;
}
:root[dark] .ytp-settings-button.ytp-hd-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-hdr-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-4k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-5k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-8k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-3d-badge-grey::after,
:root[dark] .ytp-settings-button.ytp-3d-badge::after {
    background-color: #f38ba8;
}
:root[dark] [fill="red"],
:root[dark] [fill="#F00"],
:root[dark] [fill="#FF0000"] {
    fill: #f38ba8 !important;
}
:root[dark] [fill="white"] {
    fill: #cdd6f4 !important;
}
:root[dark] yt-icon.ytd-logo [fill="white"] {
    fill: #11111b !important;
}
:root[dark] .yt-spec-icon-shape [fill="#FAFAFA"],
:root[dark] .yt-spec-icon-shape [fill="#000"],
:root[dark] .yt-spec-icon-shape [fill="#fff"],
:root[dark] .yt-spec-icon-shape [fill="#FFF"],
:root[dark] .yt-spec-icon-shape [fill="#FFFFFF"] {
    fill: #11111b !important;
}
:root[dark] .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root[dark] .yt-spec-icon-badge-shape {
    color: #cdd6f4;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    color: #cdd6f4;
    background-color: #45475a;
    /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
    fill: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
    stroke: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
    fill: #f38ba8 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
    stroke: #f38ba8 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
    background-color: #585b70;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
    color: #cdd6f4;
    border-color: #585b70;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
    background-color: #585b70;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: #cdd6f4;
    /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
    fill: #f38ba8;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
    color: #11111b;
    background-color: #f38ba8;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
    background-color: #f17497;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal,
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
    color: #cdd6f4;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
    color: #f38ba8;
    border-color: #585b70;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
    background-color: #f38ba8;
    color: #11111b;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
    color: #f38ba8;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
    background-color: rgba(243, 139, 168, 0.3);
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
    color: #11111b;
    background-color: #f38ba8;
}
:root[dark] .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
    color: #a6adc8;
    background-color: rgba(69, 71, 90, 0.7);
}
:root[dark] ytd-searchbox[has-focus] #container.ytd-searchbox {
    border-color: #f38ba8;
}
:root[dark] .sbsb_a {
    background: var(--yt-spec-raised-background);
}
:root[dark] .sbdd_b {
    border-color: var(--yt-spec-raised-background);
    background-color: var(--yt-spec-raised-background);
}
:root[dark] .sbpqs_a,
:root[dark] .gsfs {
    color: var(--yt-spec-text-primary);
}
:root[dark] .sbsb_i {
    color: var(--yt-spec-call-to-action);
}
:root[dark] .sbsb_d {
    background-color: var(--yt-spec-additive-background);
}
:root[dark] .sbdd_c {
    visibility: hidden;
}
:root[dark] .sbpqs_c {
    color: #7f849c;
}
:root[dark] .sbpqs_a::before,
:root[dark] .sbqs_c::before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E");
    background: none;
}
:root[dark] #description [style*="color: rgb(255, 255, 255);"],
:root[dark] #description [style*="color: rgb(19, 19, 19);"] {
    color: #cdd6f4 !important;
}
:root[dark] .yt-core-attributed-string__link--call-to-action-color {
    color: #f38ba8;
}
:root[dark] .YtwCourseProgressViewModelHostProgressTitle,
:root[dark] .YtwCourseProgressViewModelHostProgressSubtitle {
    color: #cdd6f4;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar {
    background-color: rgba(205, 214, 244, 0.2);
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
    background-color: #cdd6f4;
}
:root[dark] #time-status:has([aria-label="LIVE"]),
:root[dark] .badge[aria-label="LIVE"] {
    --yt-spec-static-overlay-text-primary: #11111b;
    --yt-spec-static-overlay-icon-active-other: #11111b;
}
:root[dark] #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root[dark] .YtInlinePlayerControlsTopRightControlsCircleButton,
:root[dark] .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root[dark] .branding-context-container-inner {
    background-color: #313244 !important;
    color: #cdd6f4;
}
:root[dark] .ytp-sb-unsubscribe {
    background-color: #585b70;
    color: #cdd6f4;
}
:root[dark] .ytp-sb-subscribe {
    background-color: #f38ba8;
    color: #11111b;
}
:root[dark] .ytp-tooltip-text {
    background: #313244 !important;
    color: #cdd6f4;
    text-shadow: none !important;
}
:root[dark] .ytp-popup {
    background: #313244 !important;
    text-shadow: none;
}
:root[dark] .ytp-panel-menu,
:root[dark] .ytp-panel-header,
:root[dark] .ytp-panel-footer,
:root[dark] .ytp-menuitem-label,
:root[dark] .ytp-premium-label,
:root[dark] .ytp-menuitem-content,
:root[dark] .ytp-menuitem-label-count,
:root[dark] .ytp-menu-label-secondary,
:root[dark] .ytd-menu-title-renderer {
    color: #cdd6f4;
}
:root[dark] .ytp-panel-header {
    border-bottom-color: #585b70;
}
:root[dark] .ytp-panel-footer-content-link {
    color: #f38ba8;
}
:root[dark] .ytp-panel-back-button {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E");
}
:root[dark] .ytp-menuitem-toggle-checkbox {
    background-color: #585b70;
}
:root[dark] .ytp-menuitem-toggle-checkbox::after {
    background-color: #a6adc8;
}
:root[dark] .ytp-menuitem:not([aria-disabled="true"]):hover {
    background-color: #45475a;
}
:root[dark] .ytp-menuitem svg > path:not([fill="none"]) {
    fill: #cdd6f4 !important;
}
:root[dark] .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E");
}
:root[dark] .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E");
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon use {
    fill: #1e1e2e;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon path {
    fill: #cdd6f4;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-box {
    background-color: #585b70;
    border-bottom-color: #585b70;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-text {
    color: #cdd6f4;
}
:root[dark] .html5-video-player {
    color: #cdd6f4;
}
:root[dark] .html5-video-player .ytp-swatch-background-color {
    background-color: #f38ba8 !important;
}
:root[dark] .html5-video-player .ytp-svg-fill,
:root[dark] .html5-video-player [fill="#fff"] {
    fill: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle,
:root[dark] .html5-video-player .ytp-volume-slider-handle::before {
    background-color: #cdd6f4;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle::after {
    background-color: rgba(205, 214, 244, 0.2);
}
:root[dark] .html5-video-player .ytp-time-current,
:root[dark] .html5-video-player .ytp-time-separator,
:root[dark] .html5-video-player .ytp-time-duration {
    color: #cdd6f4;
}
:root[dark] .html5-video-player .ytp-button[aria-pressed]::after,
:root[dark] .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
    background-color: #f38ba8;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2212%22%20fill%3D%22none%22%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22.7%2011c2.95%200%205.3-2.21%205.3-5s-2.35-5-5.3-5H7.3C4.35%201%202%203.21%202%206s2.35%205%205.3%205z%22%20fill%3D%22%23cdd6f4%22/%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.3%201C4.35%201%202%203.21%202%206s2.35%205%205.3%205h15.4A5.16%205.16%200%200%200%2028%206l-.03-.54A5.16%205.16%200%200%200%2022.7%201zm15.4%2011c3.45%200%206.3-2.6%206.3-6s-2.85-6-6.3-6H7.3C3.85%200%201%202.6%201%206s2.85%206%206.3%206z%22%20fill%3D%22%231e1e2e%22%20fill-opacity%3D%22.3%22/%3E%3C/svg%3E");
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.5%2016a7.5%207.5%200%201%200%200-15%207.5%207.5%200%200%200%200%2015%22%20fill%3D%22%23585b70%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17%208.5a8.5%208.5%200%201%201-17%200%208.5%208.5%200%200%201%2017%200m-1%200a7.5%207.5%200%201%201-15%200%207.5%207.5%200%200%201%2015%200%22%20fill%3D%22%231e1e2e%22%20fill-opacity%3D%22.15%22/%3E%3Cpath%20d%3D%22M5.5%2012h2V5h-2zm4-7v7h2V5z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E");
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2212%22%20fill%3D%22none%22%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22.7%2011c2.95%200%205.3-2.21%205.3-5s-2.35-5-5.3-5H7.3C4.35%201%202%203.21%202%206s2.35%205%205.3%205zm-2.7-.75v-8.5l6.7%204.26z%22%20fill%3D%22%23cdd6f4%22/%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.3%201C4.35%201%202%203.21%202%206s2.35%205%205.3%205h15.4A5.16%205.16%200%200%200%2028%206l-.03-.54A5.16%205.16%200%200%200%2022.7%201zm15.4%2011c3.45%200%206.3-2.6%206.3-6s-2.85-6-6.3-6H7.3C3.85%200%201%202.6%201%206s2.85%206%206.3%206z%22%20fill%3D%22%231e1e2e%22%20fill-opacity%3D%22.3%22/%3E%3C/svg%3E");
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17%208.5a8.5%208.5%200%201%201-17%200%208.5%208.5%200%200%201%2017%200m-5%200L6.5%205v7zm-1.86%200L7.5%206.82v3.36zM8.5%2016a7.5%207.5%200%201%200%200-15%207.5%207.5%200%200%200%200%2015%22%20fill%3D%22%231e1e2e%22%20fill-opacity%3D%22.15%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208.5a7.5%207.5%200%201%201-15%200%207.5%207.5%200%200%201%2015%200m-4%200L6.5%2012V5z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E");
}
:root[dark] #shorts-container {
    --yt-spec-static-overlay-text-primary: #cdd6f4;
    /* Buy super thanks button */
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
    color: #cdd6f4;
}
:root[dark] #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
    color: #bac2de;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
    background-color: #313244;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
    color: #cdd6f4;
}
:root[dark] .yt-tab-shape-wiz__tab {
    color: #bac2de;
}
:root[dark] .yt-tab-shape-wiz__tab--tab-selected {
    color: #cdd6f4;
}
:root[dark] .yt-tab-group-shape-wiz__slider {
    background-color: #cdd6f4;
}
:root[dark] .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
    background-color: #bac2de;
}
:root:not([dark]) {
    color: #4c4f69;
    color-scheme: dark;
    /* Misc */
    /* Selected chapter */
    /* Ambient mode */
    /* Icons */
    /* Buttons */
    /* Search box */
    /* "Suggestion removed" */
    /* Video description */
    /* Thumbnails */
    /* Panels, popups, tooltips */
    /* Video player */
    /* Channel pages */
}
:root:not([dark]) ::selection {
    background-color: rgba(210, 15, 57, 0.3);
}
:root:not([dark]) input::placeholder,
:root:not([dark]) textarea::placeholder {
    color: #6c6f85 !important;
}
:root:not([dark]),
:root:not([dark]) [dark],
:root:not([dark]) [system-icons],
:root:not([dark]) [darker-dark-theme],
:root:not([dark])[dark],
:root:not([dark])[system-icons],
:root:not([dark])[darker-dark-theme] {
    --yt-spec-white-1: #4c4f69 !important;
    --yt-spec-white-2: #6c6f85 !important;
    --yt-spec-white-3: #5c5f77 !important;
    --yt-spec-white-4: #515469 !important;
    --yt-spec-black-1: #8c8fa1 !important;
    --yt-spec-black-2: #9ca0b0 !important;
    --yt-spec-black-3: #acb0be !important;
    --yt-spec-black-4: #bcc0cc !important;
    --yt-spec-black-pure: #ccd0da !important;
    --yt-spec-grey-1: #4c4f69 !important;
    --yt-spec-grey-2: #6c6f85 !important;
    --yt-spec-grey-3: #5c5f77 !important;
    --yt-spec-grey-4: #7c7f93 !important;
    --yt-spec-grey-5: #8c8fa1 !important;
    --yt-brand-youtube-red: #d20f39 !important;
    --yt-brand-medium-red: #d20f39 !important;
    --yt-brand-light-red: #d20f39 !important;
    --yt-spec-red-30: #fe640b !important;
    --yt-spec-red-70: #d20f39 !important;
    --yt-spec-pale-blue: #04a5e5 !important;
    --yt-spec-light-blue: #04a5e5 !important;
    --yt-spec-dark-blue: #209fb5 !important;
    --yt-spec-navy-blue: #179299 !important;
    --yt-spec-light-green: #40a02b !important;
    --yt-spec-dark-green: #40a02b !important;
    --yt-spec-yellow: #fe640b !important;
    --yt-spec-black-pure-alpha-5: rgba(220, 224, 232, 0.9995) !important;
    --yt-spec-black-pure-alpha-10: rgba(220, 224, 232, 0.999) !important;
    --yt-spec-black-pure-alpha-15: rgba(220, 224, 232, 0.9985) !important;
    --yt-spec-black-pure-alpha-30: rgba(220, 224, 232, 0.997) !important;
    --yt-spec-black-pure-alpha-60: rgba(220, 224, 232, 0.994) !important;
    --yt-spec-black-pure-alpha-80: rgba(220, 224, 232, 0.992) !important;
    --yt-spec-black-1-alpha-98: rgba(220, 224, 232, 0.9902) !important;
    --yt-spec-black-1-alpha-95: rgba(220, 224, 232, 0.9905) !important;
    --yt-spec-white-1-alpha-10: rgba(76, 79, 105, 0.999) !important;
    --yt-spec-white-1-alpha-20: rgba(76, 79, 105, 0.998) !important;
    --yt-spec-white-1-alpha-25: rgba(76, 79, 105, 0.9975) !important;
    --yt-spec-white-1-alpha-30: rgba(76, 79, 105, 0.997) !important;
    --yt-spec-white-1-alpha-70: rgba(76, 79, 105, 0.993) !important;
    --yt-spec-white-1-alpha-95: rgba(76, 79, 105, 0.9905) !important;
    --yt-spec-white-1-alpha-98: rgba(76, 79, 105, 0.9902) !important;
    --yt-brand-medium-red-alpha-90: rgba(210, 15, 57, 0.991) !important;
    --yt-brand-medium-red-alpha-30: rgba(210, 15, 57, 0.997) !important;
    --yt-brand-light-red-alpha-30: rgba(210, 15, 57, 0.997) !important;
    --yt-spec-light-blue-alpha-30: rgba(32, 159, 181, 0.997) !important;
    --yt-spec-dark-blue-alpha-30: rgba(32, 159, 181, 0.997) !important;
    --yt-spec-base-background: #eff1f5 !important;
    --yt-spec-raised-background: #eff1f5 !important;
    --yt-spec-menu-background: #e6e9ef !important;
    --yt-spec-inverted-background: #4c4f69 !important;
    --yt-spec-additive-background: rgba(204, 208, 218, 0.999) !important;
    --yt-spec-outline: #ccd0da !important;
    --yt-spec-shadow: rgba(220, 224, 232, 0.9975) !important;
    --yt-spec-text-primary: #4c4f69 !important;
    --yt-spec-text-secondary: #6c6f85 !important;
    --yt-spec-text-disabled: #5c5f77 !important;
    --yt-spec-text-primary-inverse: #dce0e8 !important;
    --yt-spec-call-to-action: #d20f39 !important;
    --yt-spec-call-to-action-inverse: #d20f39 !important;
    --yt-spec-suggested-action: rgba(210, 15, 57, 0.2) !important;
    --yt-spec-suggested-action-inverse: #4c4f69 !important;
    --yt-spec-icon-active-other: #4c4f69 !important;
    --yt-spec-button-chip-background-hover: #bcc0cc !important;
    --yt-spec-touch-response: #ccd0da !important;
    --yt-spec-touch-response-inverse: #d20f39 !important;
    --yt-spec-brand-icon-active: #d20f39 !important;
    --yt-spec-brand-button-background: #d20f39 !important;
    --yt-spec-brand-link-text: #209fb5 !important;
    --yt-spec-wordmark-text: #4c4f69 !important;
    --yt-spec-error-indicator: #d20f39 !important;
    --yt-spec-themed-blue: #d20f39 !important;
    --yt-spec-themed-green: #40a02b !important;
    --yt-spec-ad-indicator: #179299 !important;
    --yt-spec-themed-overlay-background: rgba(220, 224, 232, 0.992) !important;
    --yt-spec-commerce-badge-background: #40a02b !important;
    --yt-spec-static-brand-red: #d20f39 !important;
    --yt-spec-static-brand-white: #4c4f69 !important;
    --yt-spec-static-brand-black: #eff1f5 !important;
    --yt-spec-static-clear-color: #dce0e8 !important;
    --yt-spec-static-clear-black: #dce0e8 !important;
    --yt-spec-static-ad-yellow: #fe640b !important;
    --yt-spec-static-grey: #6c6f85 !important;
    --yt-spec-static-overlay-background-solid: #dce0e8 !important;
    --yt-spec-static-overlay-background-heavy: #ccd0da;
    --yt-spec-static-overlay-background-medium: rgba(220, 224, 232, 0.994) !important;
    --yt-spec-static-overlay-background-medium-light: rgba(220, 224, 232, 0.997) !important;
    --yt-spec-static-overlay-background-light: rgba(220, 224, 232, 0.999) !important;
    --yt-spec-static-overlay-text-primary: #4c4f69 !important;
    --yt-spec-static-overlay-text-secondary: rgba(108, 111, 133, 0.993) !important;
    --yt-spec-static-overlay-text-disabled: rgba(108, 111, 133, 0.997) !important;
    --yt-spec-static-overlay-call-to-action: #d20f39 !important;
    --yt-spec-static-overlay-icon-active-other: #4c4f69 !important;
    --yt-spec-static-overlay-icon-inactive: #bcc0cc !important;
    --yt-spec-static-overlay-icon-disabled: #acb0be !important;
    --yt-spec-static-overlay-button-primary: #d20f39 !important;
    --yt-spec-static-overlay-button-secondary: #ccd0da !important;
    --yt-spec-static-overlay-touch-response: #8c8fa1 !important;
    --yt-spec-static-overlay-touch-response-inverse: #bcc0cc !important;
    --yt-spec-static-overlay-background-brand: #d20f39 !important;
    --yt-spec-assistive-feed-themed-gradient-1: #6c6f85 !important;
    --yt-spec-assistive-feed-themed-gradient-2: #7287fd !important;
    --yt-spec-assistive-feed-themed-gradient-3: #d20f39 !important;
    --yt-spec-brand-background-solid: #eff1f5 !important;
    --yt-spec-brand-background-primary: #eff1f5 !important;
    --yt-spec-brand-background-secondary: #e6e9ef !important;
    --yt-spec-general-background-a: #eff1f5 !important;
    --yt-spec-general-background-b: #eff1f5 !important;
    --yt-spec-general-background-c: #dce0e8 !important;
    --yt-spec-error-background: #eff1f5 !important;
    --yt-spec-10-percent-layer: #ccd0da !important;
    --yt-spec-snackbar-background: #e6e9ef !important;
    --yt-spec-snackbar-background-updated: #e6e9ef !important;
    --yt-spec-badge-chip-background: #bcc0cc !important;
    --yt-spec-verified-badge-background: #9ca0b0 !important;
    --yt-spec-call-to-action-fadeoutd: rgba(32, 159, 181, 0.997) !important;
    --yt-spec-call-to-action-hover: #d20f39 !important;
    --yt-spec-brand-button-background-hover: #d20f39 !important;
    --yt-spec-brand-link-text-fadeoutd: rgba(210, 15, 57, 0.997) !important;
    --yt-spec-filled-button-focus-outline: #ccd0da !important;
    --yt-spec-static-overlay-button-hover: #bcc0cc !important;
    --yt-spec-mono-filled-hover: #bcc0cc !important;
    --yt-spec-commerce-filled-hover: #d20f39 !important;
    --yt-spec-mono-tonal-hover: #bcc0cc !important;
    --yt-spec-commerce-tonal-hover: #acb0be !important;
    --yt-spec-static-overlay-filled-hover: #8c8fa1 !important;
    --yt-spec-static-overlay-tonal-hover: #bcc0cc !important;
    --yt-spec-paper-tab-ink: rgba(76, 79, 105, 0.997);
    --yt-spec-filled-button-text: #4c4f69 !important;
    --yt-spec-selected-nav-text: #4c4f69 !important;
    --iron-icon-fill-color: #4c4f69 !important;
    /* Search bar */
    --ytd-searchbox-border-color: #ccd0da !important;
    --ytd-searchbox-legacy-border-color: #ccd0da !important;
    --ytd-searchbox-legacy-border-shadow-color: #dce0e8 !important;
    --ytd-searchbox-legacy-button-color: #e6e9ef !important;
    --ytd-searchbox-legacy-button-border-color: #ccd0da !important;
    --ytd-searchbox-legacy-button-focus-color: #d20f39 !important;
    --ytd-searchbox-legacy-button-hover-color: #e6e9ef !important;
    --ytd-searchbox-legacy-button-hover-border-color: #ccd0da !important;
    --ytd-searchbox-legacy-button-icon-color: #d20f39 !important;
    --ytd-searchbox-background: #eff1f5 !important;
    --ytd-searchbox-text-color: #4c4f69 !important;
    /* System icons */
    --yt-spec-icon-inactive: #4c4f69 !important;
    --yt-spec-icon-disabled: #8c8fa1 !important;
    --yt-spec-brand-icon-inactive: #7c7f93 !important;
    /* Yt video Page */
    --yt-live-chat-background-color: #eff1f5 !important;
    --yt-live-chat-action-panel-background-color: #eff1f5 !important;
    --yt-live-chat-secondary-background-color: #bcc0cc;
    --yt-live-chat-toast-background-color: #acb0be !important;
    --yt-live-chat-mode-change-background-color: #eff1f5 !important;
    --yt-live-chat-secondary-text-color: #6c6f85 !important;
    --yt-live-chat-tertiary-text-color: rgba(76, 79, 105, 0.9946) !important;
    --yt-live-chat-text-input-field-inactive-underline-color: #6c6f85 !important;
    --yt-live-chat-text-input-field-placeholder-color: #6c6f85 !important;
    --yt-live-chat-enabled-send-button-color: #4c4f69 !important;
    --yt-live-chat-disabled-icon-button-color: #5c5f77 !important;
    --yt-live-chat-picker-button-hover-color: #d20f39 !important;
    --yt-live-chat-mention-background-color: #d20f39 !important;
    --yt-live-chat-mention-text-color: #4c4f69 !important;
    --yt-live-chat-deleted-message-color: #6c6f85;
    --yt-live-chat-deleted-message-bar-color: #5c5f77 !important;
    --yt-live-chat-reconnect-message-color: #4c4f69 !important;
    --yt-live-chat-disabled-button-background-color: #9ca0b0 !important;
    --yt-live-chat-sub-panel-background-color: #eff1f5 !important;
    --yt-live-chat-sub-panel-background-color-transparent: #e6e9ef !important;
    --yt-live-chat-moderator-color: #7287fd !important;
    --yt-live-chat-owner-color: #fe640b !important;
    --yt-live-chat-message-highlight-background-color: #eff1f5 !important;
    --yt-live-chat-sponsor-color: #40a02b !important;
    --yt-live-chat-overlay-color: rgba(230, 233, 239, 0.995);
    --yt-live-chat-dialog-background-color: #eff1f5 !important;
    --yt-emoji-picker-variant-selector-bg-color: #eff1f5 !important;
    --yt-live-chat-moderation-mode-hover-background-color: rgba(230, 233, 239, 0.997) !important;
    --yt-grey: #6c6f85 !important;
    --yt-live-chat-text-input-field-suggestion-background-color: #6c6f85 !important;
    --yt-live-chat-text-input-field-suggestion-background-color-hover: #5c5f77 !important;
    --yt-emoji-picker-search-background-color: #ccd0da !important;
    --yt-emoji-picker-search-color: #4c4f69 !important;
    --yt-emoji-picker-search-placeholder-color: #d20f39 !important;
    --yt-live-chat-slider-active-color: #d20f39 !important;
    --yt-live-chat-slider-container-color: #ccd0da !important;
    --yt-live-chat-slider-markers-color: #4c4f69 !important;
    --yt-live-chat-banner-gradient-scrim: linear-gradient(#e6e9ef, transparent) !important;
    --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #e6e9ef, transparent) !important;
    --yt-live-chat-automod-button-background-color-hover: rgba(220, 224, 232, 0.995) !important;
    --yt-live-chat-automod-button-explanation-color: rgba(210, 15, 57, 0.993) !important;
    --yt-live-chat-shimmer-background-color: rgba(220, 224, 232, 0.996) !important;
    --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(76, 79, 105, 0.999) 40%, rgba(239, 241, 245, 0.997) 50%, rgba(76, 79, 105, 0.999) 60%) !important;
    --yt-live-chat-vem-background-color: #e6e9ef !important;
    --yt-live-chat-product-picker-icon-color: rgba(76, 79, 105, 0.995) !important;
    --yt-live-chat-product-picker-hover-color: #9ca0b0 !important;
    --yt-live-chat-product-picker-disabled-icon-color: rgba(76, 79, 105, 0.997) !important;
    --yt-live-chat-action-panel-background-color-transparent: (
    null
    ) !important;
    --paper-tooltip-background: #9ca0b0 !important;
    --paper-tooltip-text-color: #4c4f69 !important;
    /* Links */
    --yt-endpoint-color: #d20f39 !important;
    --yt-endpoint-visited-color: #d20f39 !important;
    --yt-endpoint-hover-color: #d20f39 !important;
    --sb-dark-red-outline: #d20f39 !important;
    --sb-main-bg-color: #eff1f5 !important;
    --sb-main-fg-color: #4c4f69 !important;
    --sb-grey-bg-color: #eff1f5 !important;
    --sb-grey-fg-color: #6c6f85 !important;
    --sb-red-bg-color: #d20f39 !important;
}
:root:not([dark]):not(.style-scope) {
    --primary-text-color: #4c4f69 !important;
    --primary-background-color: #eff1f5 !important;
    --secondary-text-color: #6c6f85 !important;
    --disabled-text-color: #5c5f77 !important;
    --divider-color: #9ca0b0 !important;
    --error-color: #d20f39 !important;
    --primary-color: #d20f39 !important;
    --light-primary-color: #d20f39 !important;
    --dark-primary-color: #1e66f5 !important;
    --accent-color: #d20f39 !important;
    --light-accent-color: #d20f39 !important;
    --dark-accent-color: #d20f39 !important;
    --light-theme-background-color: #eff1f5 !important;
    --light-theme-base-color: #4c4f69 !important;
    --light-theme-text-color: #4c4f69 !important;
    --light-theme-secondary-color: #6c6f85 !important;
    --light-theme-disabled-color: #5c5f77 !important;
    --light-theme-divider-color: #9ca0b0 !important;
    --dark-theme-background-color: #eff1f5 !important;
    --dark-theme-base-color: #4c4f69 !important;
    --dark-theme-text-color: #4c4f69 !important;
    --dark-theme-secondary-color: #6c6f85 !important;
    --dark-theme-disabled-color: #5c5f77 !important;
    --dark-theme-divider-color: #9ca0b0 !important;
}
:root:not([dark]) #channel-name.ytd-video-meta-block {
    --yt-endpoint-color: #d20f39 !important;
    --yt-endpoint-visited-color: #d20f39 !important;
    color: #d20f39 !important;
}
:root:not([dark]) ytd-macro-markers-list-item-renderer {
    --ytd-macro-markers-list-item-background-color: #ccd0da !important;
    --ytd-macro-markers-list-item-title-color: #4c4f69 !important;
    --ytd-macro-markers-list-item-secondary-color: #5c5f77 !important;
    --ytd-macro-markers-list-item-timestamp-background-color: #bcc0cc !important;
}
:root:not([dark]) ytd-playlist-panel-video-renderer {
    --yt-lightsource-section2-color: #bcc0cc !important;
    --yt-lightsource-section4-color: #acb0be !important;
    --yt-lightsource-primary-title-color: #4c4f69 !important;
    --yt-lightsource-secondary-title-color: #4c4f69 !important;
    --yt-active-playlist-panel-background-color: #ccd0da !important;
}
:root:not([dark]) ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
    --iron-icon-fill-color: #4c4f69 !important;
    background-color: #eff1f5 !important;
}
:root:not([dark]) #container.ytd-masthead {
    --iron-icon-fill-color: #4c4f69 !important;
}
:root:not([dark]) ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
    --iron-icon-fill-color: #4c4f69 !important;
    background-color: #eff1f5 !important;
}
:root:not([dark]) #ytd-player #container {
    background: #dce0e8 !important;
}
:root:not([dark]) ytd-expandable-metadata-renderer {
    --yt-lightsource-section1-color: #eff1f5 !important;
    --yt-lightsource-section2-color: #ccd0da !important;
    --yt-lightsource-section3-color: #bcc0cc !important;
    --yt-lightsource-section4-color: #acb0be !important;
    --yt-lightsource-primary-title-color: #4c4f69 !important;
    --yt-lightsource-secondary-title-color: #6c6f85 !important;
}
:root:not([dark]) yt-live-chat-renderer {
    --yt-button-default-text-color: #4c4f69 !important;
    --yt-button-default-background-color: #eff1f5 !important;
    --yt-button-dark-text-color: #eff1f5 !important;
    --yt-button-dark-background-color: #d20f39 !important;
    --yt-button-payment-background-color: #d20f39 !important;
}
:root:not([dark]) ytd-author-comment-badge-renderer:not(
[style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
) {
    --yt-basic-background-color: #ccd0da !important;
    --yt-basic-foreground-title-color: #ccd0da !important;
    --ytd-author-comment-badge-background-color: #ccd0da !important;
    --ytd-author-comment-badge-name-color: #4c4f69 !important;
    --ytd-author-comment-badge-icon-color: #4c4f69 !important;
}
:root:not([dark]) #cinematics {
    mix-blend-mode: lighten;
}
:root:not([dark]) .ytp-settings-button.ytp-hd-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-hdr-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-4k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-5k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-8k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge-grey::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge::after {
    background-color: #d20f39;
}
:root:not([dark]) [fill="red"],
:root:not([dark]) [fill="#F00"],
:root:not([dark]) [fill="#FF0000"] {
    fill: #d20f39 !important;
}
:root:not([dark]) [fill="white"] {
    fill: #4c4f69 !important;
}
:root:not([dark]) yt-icon.ytd-logo [fill="white"] {
    fill: #dce0e8 !important;
}
:root:not([dark]) .yt-spec-icon-shape [fill="#FAFAFA"],
:root:not([dark]) .yt-spec-icon-shape [fill="#000"],
:root:not([dark]) .yt-spec-icon-shape [fill="#fff"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFF"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFFFFF"] {
    fill: #dce0e8 !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root:not([dark]) .yt-spec-icon-badge-shape {
    color: #4c4f69;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    color: #4c4f69;
    background-color: #bcc0cc;
    /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
    fill: #4c4f69 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
    stroke: #4c4f69 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
    fill: #d20f39 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
    stroke: #d20f39 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
    background-color: #acb0be;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
    color: #4c4f69;
    border-color: #acb0be;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
    background-color: #acb0be;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: #4c4f69;
    /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
    fill: #d20f39;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
    color: #dce0e8;
    background-color: #d20f39;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
    background-color: #ba0d33;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal,
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
    color: #4c4f69;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
    color: #d20f39;
    border-color: #acb0be;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
    background-color: #d20f39;
    color: #dce0e8;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
    color: #d20f39;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
    background-color: rgba(210, 15, 57, 0.3);
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
    color: #dce0e8;
    background-color: #d20f39;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
    color: #6c6f85;
    background-color: rgba(188, 192, 204, 0.7);
}
:root:not([dark]) ytd-searchbox[has-focus] #container.ytd-searchbox {
    border-color: #d20f39;
}
:root:not([dark]) .sbsb_a {
    background: var(--yt-spec-raised-background);
}
:root:not([dark]) .sbdd_b {
    border-color: var(--yt-spec-raised-background);
    background-color: var(--yt-spec-raised-background);
}
:root:not([dark]) .sbpqs_a,
:root:not([dark]) .gsfs {
    color: var(--yt-spec-text-primary);
}
:root:not([dark]) .sbsb_i {
    color: var(--yt-spec-call-to-action);
}
:root:not([dark]) .sbsb_d {
    background-color: var(--yt-spec-additive-background);
}
:root:not([dark]) .sbdd_c {
    visibility: hidden;
}
:root:not([dark]) .sbpqs_c {
    color: #8c8fa1;
}
:root:not([dark]) .sbpqs_a::before,
:root:not([dark]) .sbqs_c::before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E");
    background: none;
}
:root:not([dark]) #description [style*="color: rgb(255, 255, 255);"],
:root:not([dark]) #description [style*="color: rgb(19, 19, 19);"] {
    color: #4c4f69 !important;
}
:root:not([dark]) .yt-core-attributed-string__link--call-to-action-color {
    color: #d20f39;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressTitle,
:root:not([dark]) .YtwCourseProgressViewModelHostProgressSubtitle {
    color: #4c4f69;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar {
    background-color: rgba(76, 79, 105, 0.2);
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
    background-color: #4c4f69;
}
:root:not([dark]) #time-status:has([aria-label="LIVE"]),
:root:not([dark]) .badge[aria-label="LIVE"] {
    --yt-spec-static-overlay-text-primary: #dce0e8;
    --yt-spec-static-overlay-icon-active-other: #dce0e8;
}
:root:not([dark]) #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root:not([dark]) .YtInlinePlayerControlsTopRightControlsCircleButton,
:root:not([dark]) .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root:not([dark]) .branding-context-container-inner {
    background-color: #ccd0da !important;
    color: #4c4f69;
}
:root:not([dark]) .ytp-sb-unsubscribe {
    background-color: #acb0be;
    color: #4c4f69;
}
:root:not([dark]) .ytp-sb-subscribe {
    background-color: #d20f39;
    color: #dce0e8;
}
:root:not([dark]) .ytp-tooltip-text {
    background: #ccd0da !important;
    color: #4c4f69;
    text-shadow: none !important;
}
:root:not([dark]) .ytp-popup {
    background: #ccd0da !important;
    text-shadow: none;
}
:root:not([dark]) .ytp-panel-menu,
:root:not([dark]) .ytp-panel-header,
:root:not([dark]) .ytp-panel-footer,
:root:not([dark]) .ytp-menuitem-label,
:root:not([dark]) .ytp-premium-label,
:root:not([dark]) .ytp-menuitem-content,
:root:not([dark]) .ytp-menuitem-label-count,
:root:not([dark]) .ytp-menu-label-secondary,
:root:not([dark]) .ytd-menu-title-renderer {
    color: #4c4f69;
}
:root:not([dark]) .ytp-panel-header {
    border-bottom-color: #acb0be;
}
:root:not([dark]) .ytp-panel-footer-content-link {
    color: #d20f39;
}
:root:not([dark]) .ytp-panel-back-button {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root:not([dark]) .ytp-menuitem-toggle-checkbox {
    background-color: #acb0be;
}
:root:not([dark]) .ytp-menuitem-toggle-checkbox::after {
    background-color: #6c6f85;
}
:root:not([dark]) .ytp-menuitem:not([aria-disabled="true"]):hover {
    background-color: #bcc0cc;
}
:root:not([dark]) .ytp-menuitem svg > path:not([fill="none"]) {
    fill: #4c4f69 !important;
}
:root:not([dark]) .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root:not([dark]) .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon use {
    fill: #eff1f5;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon path {
    fill: #4c4f69;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-box {
    background-color: #acb0be;
    border-bottom-color: #acb0be;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-text {
    color: #4c4f69;
}
:root:not([dark]) .html5-video-player {
    color: #4c4f69;
}
:root:not([dark]) .html5-video-player .ytp-swatch-background-color {
    background-color: #d20f39 !important;
}
:root:not([dark]) .html5-video-player .ytp-svg-fill,
:root:not([dark]) .html5-video-player [fill="#fff"] {
    fill: #4c4f69 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle,
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::before {
    background-color: #4c4f69;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::after {
    background-color: rgba(76, 79, 105, 0.2);
}
:root:not([dark]) .html5-video-player .ytp-time-current,
:root:not([dark]) .html5-video-player .ytp-time-separator,
:root:not([dark]) .html5-video-player .ytp-time-duration {
    color: #4c4f69;
}
:root:not([dark]) .html5-video-player .ytp-button[aria-pressed]::after,
:root:not([dark]) .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
    background-color: #d20f39;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2212%22%20fill%3D%22none%22%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22.7%2011c2.95%200%205.3-2.21%205.3-5s-2.35-5-5.3-5H7.3C4.35%201%202%203.21%202%206s2.35%205%205.3%205z%22%20fill%3D%22%234c4f69%22/%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.3%201C4.35%201%202%203.21%202%206s2.35%205%205.3%205h15.4A5.16%205.16%200%200%200%2028%206l-.03-.54A5.16%205.16%200%200%200%2022.7%201zm15.4%2011c3.45%200%206.3-2.6%206.3-6s-2.85-6-6.3-6H7.3C3.85%200%201%202.6%201%206s2.85%206%206.3%206z%22%20fill%3D%22%23eff1f5%22%20fill-opacity%3D%22.3%22/%3E%3C/svg%3E");
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.5%2016a7.5%207.5%200%201%200%200-15%207.5%207.5%200%200%200%200%2015%22%20fill%3D%22%23acb0be%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17%208.5a8.5%208.5%200%201%201-17%200%208.5%208.5%200%200%201%2017%200m-1%200a7.5%207.5%200%201%201-15%200%207.5%207.5%200%200%201%2015%200%22%20fill%3D%22%23eff1f5%22%20fill-opacity%3D%22.15%22/%3E%3Cpath%20d%3D%22M5.5%2012h2V5h-2zm4-7v7h2V5z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2212%22%20fill%3D%22none%22%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22.7%2011c2.95%200%205.3-2.21%205.3-5s-2.35-5-5.3-5H7.3C4.35%201%202%203.21%202%206s2.35%205%205.3%205zm-2.7-.75v-8.5l6.7%204.26z%22%20fill%3D%22%234c4f69%22/%3E%3Cpath%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.3%201C4.35%201%202%203.21%202%206s2.35%205%205.3%205h15.4A5.16%205.16%200%200%200%2028%206l-.03-.54A5.16%205.16%200%200%200%2022.7%201zm15.4%2011c3.45%200%206.3-2.6%206.3-6s-2.85-6-6.3-6H7.3C3.85%200%201%202.6%201%206s2.85%206%206.3%206z%22%20fill%3D%22%23eff1f5%22%20fill-opacity%3D%22.3%22/%3E%3C/svg%3E");
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17%208.5a8.5%208.5%200%201%201-17%200%208.5%208.5%200%200%201%2017%200m-5%200L6.5%205v7zm-1.86%200L7.5%206.82v3.36zM8.5%2016a7.5%207.5%200%201%200%200-15%207.5%207.5%200%200%200%200%2015%22%20fill%3D%22%23eff1f5%22%20fill-opacity%3D%22.15%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208.5a7.5%207.5%200%201%201-15%200%207.5%207.5%200%200%201%2015%200m-4%200L6.5%2012V5z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root:not([dark]) #shorts-container {
    --yt-spec-static-overlay-text-primary: #4c4f69;
    /* Buy super thanks button */
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
    color: #4c4f69;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
    color: #5c5f77;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
    background-color: #ccd0da;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
    color: #4c4f69;
}
:root:not([dark]) .yt-tab-shape-wiz__tab {
    color: #5c5f77;
}
:root:not([dark]) .yt-tab-shape-wiz__tab--tab-selected {
    color: #4c4f69;
}
:root:not([dark]) .yt-tab-group-shape-wiz__slider {
    background-color: #4c4f69;
}
:root:not([dark]) .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
    background-color: #5c5f77;
}

`)