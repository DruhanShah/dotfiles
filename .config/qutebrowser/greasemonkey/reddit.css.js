// ==UserScript==
// @name    Userstyle (reddit.css)
// @include    *reddit.com/*
// ==/UserScript==
GM_addStyle(`:root {
	--rosewater: #f5e0dc;
	--flamingo : #f2cdcd;
	--pink     : #f5c2e7;
	--mauve    : #cba6f7;
	--red      : #f38ba8;
	--maroon   : #eba0ac;
	--peach    : #fab387;
	--yellow   : #f9e2af;
	--green    : #a6e3a1;
	--teal     : #94e2d5;
	--sky      : #89dceb;
	--sapphire : #74c7ec;
	--blue     : #89b4fa;
	--lavender : #b4befe;
	--text     : #cdd6f4;
	--subtext1 : #bac2de;
	--subtext0 : #a6adc8;
	--overlay2 : #9399b2;
	--overlay1 : #7f849c;
	--overlay0 : #6c7086;
	--surface2 : #585b70;
	--surface1 : #45475a;
	--surface0 : #313244;
	--base     : #1e1e2e;
	--mantle   : #181825;
	--crust    : #11111b;

	/* non-standard colors */
	--surface1Transparent: #45475abd;
	--mist: #11111bbd;


	--accent: var(--blue);
}


/* REDDIT COLOR VARIABLES */


div[class^=subredditvars], :root {
	--color-online: var(--green) !important;
	--newCommunityTheme-actionIcon: var(--subtext0) !important;
	--newCommunityTheme-actionIconAlpha20: var(--mist) !important;
	--newCommunityTheme-actionIconAlpha50: var(--mist) !important;
	--newCommunityTheme-actionIconShaded80: var(--subtext0) !important;
	--newCommunityTheme-actionIconTinted80: var(--subtext1) !important;
	--newCommunityTheme-active: var(--accent) !important;
	--newCommunityTheme-activeAlpha10: var(--mist) !important;
	--newCommunityTheme-activeAlpha20: var(--mist) !important;
	--newCommunityTheme-activeAlpha50: var(--mist) !important;
	--newCommunityTheme-activeLight60: var(--accent) !important;
	--newCommunityTheme-activeShaded80: var(--accent) !important;
	--newCommunityTheme-activeShaded90: var(--accent) !important;
	--newCommunityTheme-activeTinted05: var(--text) !important;
	--newCommunityTheme-banner-backgroundColor: var(--accent) !important;
	--newCommunityTheme-banner-iconColor: var(--accent) !important;
	--newCommunityTheme-body: var(--mantle) !important;
	--newCommunityTheme-bodyAlpha50: var(--surface0) !important;
	--newCommunityTheme-bodyAlpha70: var(--surface1) !important;
	--newCommunityTheme-bodyAlpha80: var(--surface2) !important;
	--newCommunityTheme-bodyFade: var(--subtext0) !important;
	--newCommunityTheme-bodyShaded80: var(--mantle) !important;
	--newCommunityTheme-bodyText: var(--text) !important;
	--newCommunityTheme-bodyTextAlpha03: var(--mantle) !important;
	--newCommunityTheme-bodyTextAlpha20: var(--surface1) !important;
	--newCommunityTheme-bodyTextShaded20: var(--surface0) !important;
	--newCommunityTheme-bodyTextTinted20: var(--subtext0) !important;
	--newCommunityTheme-bodyTinted50: var(--overlay1) !important;
	--newCommunityTheme-bodyTinted80: var(--overlay0) !important;
	--newCommunityTheme-button: var(--text) !important;
	--newCommunityTheme-buttonAlpha05: var(--mist) !important;
	--newCommunityTheme-buttonAlpha10: var(--mist)  !important;
	--newCommunityTheme-buttonAlpha20: var(--mist) !important;
	--newCommunityTheme-buttonAlpha40: var(--subtext0) !important;
	--newCommunityTheme-buttonAlpha50: var(--subtext1) !important;
	--newCommunityTheme-buttonAlpha80: var(--subtext1) !important;
	--newCommunityTheme-buttonShaded80: var(--overlay0) !important;
	--newCommunityTheme-buttonTinted20: var(--accent) !important;
	--newCommunityTheme-buttonTinted50: var(--accent) !important;
	--newCommunityTheme-buttonTinted80: var(--accent) !important;
	--newCommunityTheme-canvas: var(--crust) !important;
	--newCommunityTheme-checkbox: var(--text) !important;
	--newCommunityTheme-errorText: var(--red) !important;
	--newCommunityTheme-field: var(--surface0) !important;
	--newCommunityTheme-fieldFade: var(--surface1Transparent) !important;
	--newCommunityTheme-flair: var(--accent) !important;
	--newCommunityTheme-highlight: var(--base) !important;
	--newCommunityTheme-inactive: var(--subtext0) !important;
	--newCommunityTheme-lightText: var(--text) !important;
	--newCommunityTheme-lightTextAlpha75: var(--subtext1) !important;
	--newCommunityTheme-line: var(--surface1Transparent) !important;
	--newCommunityTheme-lineShaded80: var(--surface1Transparent) !important;
	--newCommunityTheme-lineShaded90: var(--surface1Transparent) !important;
	--newCommunityTheme-lineShadedNinety: var(--surface1Transparent) !important;
	--newCommunityTheme-linkText: var(--accent) !important;
	--newCommunityTheme-linkTextAlpha80: var(--accent) !important;
	--newCommunityTheme-linkTextShaded80: var(--accent) !important;
	--newCommunityTheme-linkTextTinted80: var(--accent) !important;
	--newCommunityTheme-linkTextWithBody: var(--accent) !important;
	--newCommunityTheme-menu: var(--mantle) !important;
	--newCommunityTheme-menuActiveText: var(--text) !important;
	--newCommunityTheme-menuButtonBackground-active: var(--base) !important;
	--newCommunityTheme-menuButtonBackground-focus: var(--base) !important;
	--newCommunityTheme-menuButtonBackground-hover: var(--base) !important;
	--newCommunityTheme-menuInactiveText: var(--text) !important;
	--newCommunityTheme-metaText: var(--subtext0) !important;
	--newCommunityTheme-metaTextAlpha50: var(--subtext0) !important;
	--newCommunityTheme-metaTextShaded80: var(--subtext0) !important;
	--newCommunityTheme-monospaceColor: var(--accent) !important;
	--newCommunityTheme-navBar-activeLink: var(--text) !important;
	--newCommunityTheme-navBar-activeSubmenuCaret: var(--text) !important;
	--newCommunityTheme-navBar-activeSubmenuLink: var(--text) !important;
	--newCommunityTheme-navBar-backgroundColor: var(--mantle) !important;
	--newCommunityTheme-navBar-hoverLink: var(--text) !important;
	--newCommunityTheme-navBar-inactiveLink: var(--text) !important;
	--newCommunityTheme-navBar-inactiveSubmenuCaret: var(--text) !important;
	--newCommunityTheme-navBar-inactiveSubmenuLink: var(--text) !important;
	--newCommunityTheme-navBar-submenuBackgroundColor: var(--mantle) !important;
	--newCommunityTheme-navIcon: var(--text) !important;

	/* upvote/downvote focus */
	--newCommunityTheme-navIconFaded10: var(--mist) !important;

	--newCommunityTheme-nsfw: var(--red) !important;
	--newCommunityTheme-nsfwBlocking-bgcolor: var(--crust) !important;
	--newCommunityTheme-nsfwBlocking-color: var(--text) !important;
	--newCommunityTheme-nsfwBlocking-contentTitleBgColor: var(--base) !important;
	--newCommunityTheme-nsfwBlocking-mainCtaBgColor: var(--mantle) !important;
	--newCommunityTheme-pageHeader: var(--surface2) !important;
	--newCommunityTheme-placeholder: var(--surface0) !important;
	--newCommunityTheme-post: var(--mantle) !important;
	--newCommunityTheme-postError: var(--red) !important;
	--newCommunityTheme-postFlairText: var(--text) !important;
	--newCommunityTheme-postIcon: var(--accent) !important;
	--newCommunityTheme-postLine: var(--surface1Transparent) !important;
	--newCommunityTheme-postLineShaded80: var(--surface1Transparent) !important;
	--newCommunityTheme-postLineShaded90: var(--surface1Transparent) !important;
	--newCommunityTheme-postTinted20: var(--base) !important;
	--newCommunityTheme-postTransparent20: var(--base) !important;
	--newCommunityTheme-primaryButtonShadedEighty: var(--overlay1) !important;
	--newCommunityTheme-primaryButtonTintedEighty: var(--overlay1) !important;
	--newCommunityTheme-primaryButtonTintedFifty: var(--overlay0) !important;
	--newCommunityTheme-primaryButtonTintedSixty: var(--overlay0) !important;
	--newCommunityTheme-quarantine: var(--yellow) !important;
	--newCommunityTheme-report: var(--surface1) !important;
	--newCommunityTheme-search-syntaxHighlightBackgroundColor: var(--accent) !important;
	--newCommunityTheme-search-syntaxHighlightColor: var(--base) !important;
	--newCommunityTheme-titleText: var(--text) !important;
	--newCommunityTheme-upsell-appleIcon: var(--subtext1) !important;
	--newCommunityTheme-upsell-ssoButtonBorderColor: var(--surface1Transparent) !important;
	--newCommunityTheme-upsell-ssoButtonTextColor: var(--text) !important;
	--newCommunityTheme-voteText-base: var(--subtext0) !important;
	--newCommunityTheme-voteText-downvote: var(--blue) !important;
	--newCommunityTheme-voteText-downvoteShaded80: var(--blue) !important;
	--newCommunityTheme-voteText-downvoteTinted80: var(--blue) !important;
	--newCommunityTheme-voteText-upvote: var(--red) !important;
	--newCommunityTheme-voteText-upvoteShaded80: var(--red) !important;
	--newCommunityTheme-voteText-upvoteTinted80: var(--red) !important;
	--newCommunityTheme-widgetColors-appleIcon: var(--overlay0) !important;
	--newCommunityTheme-widgetColors-lineColor: var(--surface1Transparent) !important;

	/* sidebar widgets */
	--newCommunityTheme-widgetColors-sidebarWidgetBackgroundColor: var(--mantle) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetBorderColor: var(--surface1Transparent) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetHeaderColor: var(--crust) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: var(--mantle) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetTextColor: var(--text) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetTextColorShaded80: var(--subtext1) !important;
	--newCommunityTheme-widgetColors-sidebarWidgetTitleColor: var(--text) !important;

	--newRedditTheme-actionIcon: var(--subtext0) !important;
	--newRedditTheme-actionIconAlpha20: var(--mist) !important;
	--newRedditTheme-actionIconAlpha50: var(--mist) !important;
	--newRedditTheme-actionIconShaded80: var(--subtext0) !important;
	--newRedditTheme-actionIconTinted80: var(--subtext1) !important;
	--newRedditTheme-active: var(--accent) !important;
	--newRedditTheme-activeAlpha10: var(--mist) !important;
	--newRedditTheme-activeAlpha20: var(--mist) !important;
	--newRedditTheme-activeAlpha50: var(--mist) !important;
	--newRedditTheme-activeLight60: var(--accent) !important;
	--newRedditTheme-activeShaded80: var(--accent) !important;
	--newRedditTheme-activeShaded90: var(--accent) !important;
	--newRedditTheme-activeTinted05: var(--text) !important;
	--newRedditTheme-banner-backgroundColor: var(--accent) !important;
	--newRedditTheme-banner-iconColor: var(--accent) !important;
	--newRedditTheme-body: var(--mantle) !important;
	--newRedditTheme-bodyAlpha50: var(--surface0) !important;
	--newRedditTheme-bodyAlpha70: var(--surface1) !important;
	--newRedditTheme-bodyAlpha80: var(--surface2) !important;
	--newRedditTheme-bodyFade: var(--mist) !important;
	--newRedditTheme-bodyShaded80: var(--mantle) !important;
	--newRedditTheme-bodyText: var(--text) !important;
	--newRedditTheme-bodyTextAlpha03: var(--mist) !important;
	--newRedditTheme-bodyTextAlpha20: var(--surface1) !important;
	--newRedditTheme-bodyTextShaded20: var(--surface0) !important;
	--newRedditTheme-bodyTextTinted20: var(--subtext1) !important;
	--newRedditTheme-bodyTinted50: var(--overlay0) !important;
	--newRedditTheme-bodyTinted80: var(--overlay1) !important;
	--newRedditTheme-button: var(--text) !important;
	--newRedditTheme-buttonAlpha05: var(--mist) !important;
	--newRedditTheme-buttonAlpha10: var(--mist) !important;
	--newRedditTheme-buttonAlpha20: var(--mist) !important;
	--newRedditTheme-buttonAlpha40: var(--subtext0) !important;
	--newRedditTheme-buttonAlpha50: var(--subtext1) !important;
	--newRedditTheme-buttonAlpha80: var(--subtext1) !important;
	--newRedditTheme-buttonShaded80: var(--overlay0) !important;
	--newRedditTheme-buttonTinted20: var(--accent) !important;
	--newRedditTheme-buttonTinted50: var(--accent) !important;
	--newRedditTheme-buttonTinted80: var(--accent) !important;
	--newRedditTheme-canvas: var(--crust) !important;
	--newRedditTheme-checkbox: var(--text) !important;
	--newRedditTheme-errorText: var(--red) !important;
	--newRedditTheme-field: var(--base) !important;
	--newRedditTheme-fieldFade: var(--mantle) !important;
	--newRedditTheme-flair: var(--accent) !important;

	/* controls menu, link, and other similar highlights. very important */
	--newRedditTheme-highlight: var(--base) !important;

	--newRedditTheme-inactive: var(--surface0) !important;
	--newRedditTheme-lightText: var(--text) !important;
	--newRedditTheme-lightTextAlpha75: var(--subtext1) !important;
	--newRedditTheme-line: var(--surface1Transparent) !important;
	--newRedditTheme-lineShaded80: var(--surface1Transparent) !important;
	--newRedditTheme-lineShaded90: var(--surface1Transparent) !important;
	--newRedditTheme-lineShadedNinety: var(--surface1Transparent) !important;

	/* links */
	--newRedditTheme-linkText: var(--accent) !important;
	--newRedditTheme-linkTextAlpha80: var(--accent) !important;
	--newRedditTheme-linkTextShaded80: var(--accent) !important;
	--newRedditTheme-linkTextTinted80: var(--accent) !important;
	--newRedditTheme-linkTextWithBody: var(--accent) !important;

	/* menus */
	--newRedditTheme-menu: var(--mantle) !important;
	--newRedditTheme-menuActiveText: var(--text) !important;
	--newRedditTheme-menuButtonBackground-active: var(--accent) !important;
	--newRedditTheme-menuButtonBackground-focus: var(--base) !important;
	--newRedditTheme-menuButtonBackground-hover: var(--base) !important;
	--newRedditTheme-menuInactiveText: var(--text) !important;

	--newRedditTheme-metaText: var(--subtext0) !important;
	--newRedditTheme-metaTextAlpha50: var(--mist) !important;
	--newRedditTheme-metaTextShaded80: var(--subtext1) !important;
	--newRedditTheme-monospaceColor: var(--accent) !important;
	--newRedditTheme-navBar-activeLink: var(--text) !important;
	--newRedditTheme-navBar-activeSubmenuCaret: var(--text) !important;
	--newRedditTheme-navBar-activeSubmenuLink: var(--text) !important;
	--newRedditTheme-navBar-backgroundColor: var(--mantle) !important;
	--newRedditTheme-navBar-hoverLink: var(--text) !important;
	--newRedditTheme-navBar-inactiveLink: var(--text) !important;
	--newRedditTheme-navBar-inactiveSubmenuCaret: var(--text) !important;
	--newRedditTheme-navBar-inactiveSubmenuLink: var(--text) !important;
	--newRedditTheme-navBar-submenuBackgroundColor: var(--mantle) !important;
	--newRedditTheme-navIcon: var(--text) !important;
	--newRedditTheme-navIconFaded10: var(--mist) !important;
	--newRedditTheme-nsfw: var(--red) !important;
	--newRedditTheme-nsfwBlocking-bgcolor: var(--crust) !important;
	--newRedditTheme-nsfwBlocking-color: var(--text) !important;
	--newRedditTheme-nsfwBlocking-contentTitleBgColor: var(--base) !important;
	--newRedditTheme-nsfwBlocking-mainCtaBgColor: var(--mantle) !important;
	--newRedditTheme-pageHeader: var(--surface0) !important;
	--newRedditTheme-placeholder: var(--surface1) !important;
	--newRedditTheme-post: var(--mantle) !important;
	--newRedditTheme-postError: var(--red) !important;
	--newRedditTheme-postFlairText: var(--text) !important;
	--newRedditTheme-postIcon: var(--accent) !important;
	--newRedditTheme-postLine: var(--surface1Transparent) !important;
	--newRedditTheme-postLineShaded80: var(--surface1Transparent) !important;
	--newRedditTheme-postLineShaded90: var(--surface1Transparent) !important;
	--newRedditTheme-postTinted20: var(--base) !important;
	--newRedditTheme-postTransparent20: var(--mist) !important;
	--newRedditTheme-primaryButtonShadedEighty: var(--surface1) !important;
	--newRedditTheme-primaryButtonTintedEighty: var(--surface2) !important;
	--newRedditTheme-primaryButtonTintedFifty: var(--surface1) !important;
	--newRedditTheme-primaryButtonTintedSixty: var(--surface1) !important;
	--newRedditTheme-quarantine: var(--yellow) !important;
	--newRedditTheme-report: var(--base) !important;
	--newRedditTheme-search-syntaxHighlightBackgroundColor: var(--accent) !important;
	--newRedditTheme-search-syntaxHighlightColor: var(--base) !important;
	--newRedditTheme-titleText: var(--text) !important;
	--newRedditTheme-upsell-appleIcon: var(--overlay0) !important;
	--newRedditTheme-upsell-ssoButtonBorderColor: var(--text) !important;
	--newRedditTheme-upsell-ssoButtonTextColor: var(--text) !important;
	--newRedditTheme-voteText-base: var(--subtext1) !important;
	--newRedditTheme-voteText-downvote: var(--blue) !important;
	--newRedditTheme-voteText-downvoteShaded80: var(--blue) !important;
	--newRedditTheme-voteText-downvoteTinted80: var(--blue) !important;
	--newRedditTheme-voteText-upvote: var(--red) !important;
	--newRedditTheme-voteText-upvoteShaded80: var(--red) !important;
	--newRedditTheme-voteText-upvoteTinted80: var(--red) !important;
	--newRedditTheme-widgetColors-appleIcon: var(--overlay0) !important;
	--newRedditTheme-widgetColors-lineColor: var(--surface1Transparent) !important;
	--newRedditTheme-widgetColors-sidebarWidgetBackgroundColor: var(--mantle) !important;
	--newRedditTheme-widgetColors-sidebarWidgetBorderColor: var(--surface1Transparent) !important;
	--newRedditTheme-widgetColors-sidebarWidgetHeaderColor: var(--crust) !important;
	--newRedditTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: var(--mist) !important;
	--newRedditTheme-widgetColors-sidebarWidgetTextColor: var(--text) !important;
	--newRedditTheme-widgetColors-sidebarWidgetTextColorShaded80: var(--subtext1) !important;
	--newRedditTheme-widgetColors-sidebarWidgetTitleColor: var(--text) !important;
	--tw-bg-opacity: var(--crust) !important;
	--vds-video-bg-color: var(--crust) !important;
}

/* reddit chat variables */
:root {
	--activity-button-chatFilterColor: var(--surface0) !important;
	--activity-button-newChatFilter-activeBg: var(--accent) !important;
	--activity-button-newChatFilter-activeText: var(--base) !important;
	--activity-button-newChatFilter-defaultBorder: var(--surface1) !important;
	--activity-button-newChatFilter-defaultText: var(--text) !important;
	--activity-button-primary: var(--accent) !important;
	--activity-button-secondary: var(--text) !important;
	--activity-buttonPrimary-color: var(--accent) !important;
	--activity-buttonSecondary-active: var(--accent) !important;
	--activity-checkbox-checked: var(--accent) !important;
	--activity-checkbox-checkmark: var(--text) !important;
	--activity-checkbox-unchecked: var(--base) !important;
	--activity-checkbox-uncheckedBorder: var(--surface1) !important;
	--activity-icon-active: var(--accent) !important;
	--activity-icon-contrast: var(--surface1) !important;
	--activity-icon-default: var(--subtext0) !important;
	--activity-icon-disable: var(--surface2) !important;
	--activity-icon-hover: var(--surface2) !important;
	--activity-icon-nsfw-bg: var(--base) !important;
	--activity-icon-nsfw-text: var(--text) !important;
	--activity-icon-subIcon-backgroundColor: var(--text) !important;
	--activity-icon-toaster: var(--crust) !important;
	--activity-input-background: var(--mist) !important;
	--activity-input-border: var(--surface1) !important;
	--activity-input-channelRename: var(--subtext0) !important;
	--activity-input-color: var(--subtext1) !important;
	--activity-input-error: var(--red) !important;
	--activity-input-focusBg: var(--green) !important;
	--activity-input-focusColor: var(--text) !important;
	--activity-input-ownerBg: var(--surface0) !important;
	--activity-link-hoverText: var(--red) !important;
	--activity-link-staticText: var(--accent) !important;
	--activity-link-staticUnderline: var(--accent) !important;
	--activity-minimizedPortal-backgroundColor-unreadFinal: var(--mantle) !important;
	--activity-minimizedPortal-backgroundColor-unreadInitial: var(--accent) !important;
	--activity-minimizedPortal-color-unreadFinal: var(--text) !important;
	--activity-minimizedPortal-color-unreadInitial: var(--text) !important;
	--activity-send-disable: var(--surface0) !important;
	--activity-send-hover: var(--accent) !important;
	--activity-text-active: var(--accent) !important;
	--activity-text-fade: var(--subtext0) !important;
	--activity-text-highlight: var(--text) !important;
	--activity-text-light: var(--subtext0) !important;
	--activity-text-meta: var(--subtext0) !important;
	--activity-text-regular: var(--text) !important;
	--activity-text-success: var(--green) !important;
	--activity-text-tutorial: var(--rosewater) !important;
	--activity-text-warning: var(--red) !important;
	--addReaction-backgroundColor: var(--surface0) !important;
	--addReaction-iconFill: var(--surface1) !important;
	--boxShadow: var(--mist) !important;
	--bubble-border: var(--surface1Transparent) !important;
	--bubble-channelsFilter-background: var(--crust) !important;
	--bubble-channelsFilter-selected: var(--overlay0) !important;
	--bubble-color: var(--text) !important;
	--bubble-link-color: var(--accent) !important;
	--bubbleActions-hover: var(--surface0) !important;
	--editName: var(--surface1) !important;
	--layout-body: var(--mantle) !important;
	--layout-colsBorder: var(--surface1Transparent) !important;
	--layout-controlsBorder: var(--surface1Transparent) !important;
	--layout-dropdown-border: var(--surface1Transparent) !important;
	--layout-header-counterBg: var(--red) !important;
	--layout-header-counterText: var(--text) !important;
	--layout-overlayBackground: var(--mist) !important;
	--layout-overlayReportFlow: var(--mist) !important;
	--layout-scrollbar: var(--text) !important;
	--layout-scrollbarHover: var(--accent) !important;
	--layout-timeStamp-tooltip-background: var(--surface0) !important;
	--message-list-item-button: var(--surface1) !important;
	--message-list-item-onlineIndicator: var(--green) !important;
	--message-list-item-ownerBg: var(--surface1) !important;
	--message-list-item-richItem: var(--overlay0) !important;
	--message-list-item-richItemBorder: var(--surface1Transparent) !important;
	--message-list-item-white: var(--text) !important;
	--modal-buttonsBackground: var(--text) !important;
	--modal-primaryButtonWarning: var(--red) !important;
	--modal-secondaryButton: var(--text) !important;
	--newChat-inviteLink-borderColor: var(--surface1Transparent) !important;
	--overlay-backgroundColor: var(--mantle) !important;
	--overlay-headerColor: var(--text) !important;
	--overlay-inputBackground: var(--crust) !important;
	--overlay-searchBarBackground: var(--mantle) !important;
	--prompt-tooltip-background: var(--accent) !important;
	--searchBar-backgroundColor: var(--mantle) !important;
	--settings-color: var(--subtext0) !important;
	--settings-dropdownItemHoverBackground: var(--crust) !important;
	--settings-panelBackground: var(--crust) !important;
	--settings-panelItemHoverBackground: var(--surface0) !important;
	--settings-panelItemSelectedBackground: var(--surface1) !important;
	--sidebar-background: var(--surface1Transparent) !important;
	--sidebar-basic-background-active: var(--accent) !important;
	--sidebar-basic-background-hover: var(--mantle) !important;
	--sidebar-footer-background: var(--crust) !important;
	--sidebar-item-active: var(--surface1) !important;
	--sidebar-item-hover: var(--surface0) !important;
	--sidebar-item-selected: var(--surface2) !important;
	--sidebar-item-text-active: var(--text) !important;
	--sidebar-subreddit-background-active: var(--accent) !important;
	--sidebar-subreddit-background-hover: var(--surface1) !important;
	--sidebar-text-divider: var(--surface1) !important;
	--skeleton-field: var(--surface2) !important;
	--skeleton-inactive: var(--surface0) !important;
	--subreddit-iconBg: var(--accent) !important;
	--toast-error: var(--red) !important;
	--toast-pending: var(--crust) !important;
	--toast-success: var(--green) !important;
	--uploads-progress-background: var(--subtext0) !important;
	--uploads-progress-bar: var(--accent) !important;
	--videoModal-button-background: var(--text) !important;
	--videoModal-button-color: var(--mantle) !important;
}

::placeholder {
	color: var(--subtext0) !important;
}

/* site background */
div.ListingLayout-backgroundContainer::before {
	background: var(--base) !important;
}


/* PROFILE MENU */


/* karma count */
span#email-collection-tooltip-id > :nth-child(2) > :nth-child(2) > span {
	color: var(--subtext0) !important;
}

/* profile button karma icon */
i.icon-karma_fill {
	color: var(--red) !important;
}

/* menu headers */
div[role=menu] > div > div > span > span {
	color: var(--subtext0) !important;
}

/* switches, should also apply sitewide */
button[role=switch][aria-checked=false] {
	background: var(--surface0) !important;
}

button[role=switch] > div {
	background: var(--text) !important;
}

/* online status */
._2dn5Ncenn0BSD4tCSmxQhA {
	fill: var(--green) !important;
}

._3SlBAJb2MbUHwgBZFH8eL7 {
	fill: var(--base) !important;
}


/* PROFILE PAGE */


/* create avatar button */
button._3F1tNW0P4Ff182mO_CefIg {
	background: linear-gradient(90deg, var(--red), var(--peach)) !important;
	color: var(--base) !important;
}

button._3F1tNW0P4Ff182mO_CefIg > i {
	color: var(--base) !important;
}

/* cake day and followers icon */
i.icon-cake_fill, i.icon-user_fill {
	color: var(--accent) !important;
}

/* add social links button readability tweak */
div._3hew1NnzwygOKDNQDKp6R4, div._3hew1NnzwygOKDNQDKp6R4 > i, li._3hew1NnzwygOKDNQDKp6R4 {
	color: var(--base) !important
}

/* profile moderation and user settings page */
div._1VP69d9lk-Wk9zokOaylL {
	--background: var(--base) !important;
	--canvas: var(--base) !important;
}

/* Beta Badge */ 
span._2KFJx8Dhh1o1u0Xb8e7NuD {
	color: var(--accent) !important;
}

/* Delete Account */
button.EBd2MhBQlQeZ13YeP0K8a {
	color: var(--accent) !important;
}

/* Delete Account Icon */
svg._1Fa4RPHlhrfUZuNaXK2-eP > path {
	fill: var(--accent) !important;
}

/* blocked, muted input */
input._1Vnaj3fBuYrmHKEPQD_zWW {
	background-color: var(--base) !important;
}

/* fixes profile posts not being themed */
div.scrollerItem > div, div[data-testid=post-container], div[style="background:#1A1A1B"], div._2otRz3OtuWajw1RleFDJ5P {
	background: var(--mantle) !important;
}


/* NFT AVATAR VIEWER */


/* modal background */
div._productDetails_7kbcu_53 {
	background: var(--mantle) !important;
	color: var(--text) !important;
}

/* mint status */
div._mintStatus_7kbcu_264 {
	color: var(--accent) !important;
}

/* carousel background */
div._carousel_7kbcu_45 {
	background: linear-gradient(243.37deg, var(--base) 16.42%, var(--blue) 100%);
}

/* nft card back */
div._card_1ooes_1 {
	background: var(--blue) !important;
}

ol._container_1t62i_1 {
	border-color: var(--base) !important;
}

ol._container_1t62i_1 > li {
	border-color: var(--base) !important;
}

ol._container_1t62i_1 > li > div {
	color: var(--base) !important;
}

div.MuiMobileStepper-dot {
	background: var(--surface0) !important;
}

div.MuiMobileStepper-dotActive {
	background: var(--accent) !important;
}

div._scrollContainer_7kbcu_104 > div > h3, div._cardAuthor_7kbcu_79 {
	color: var(--subtext0) !important
}

div._container_oikih_1 {
	background: var(--crust) !important;
	border-color: var(--surface1) !important;
}

/* external links */
a._pill_7kbcu_280 {
	background: var(--crust) !important;
	color: var(--text) !important;
}

/* shop for avatars button */
button._shopForMoreButton_7kbcu_125 {
	background: linear-gradient(90deg, var(--red), var(--peach)) !important;
	color: var(--base) !important;
}


/* AVATAR CREATOR */
div._wrapper_1upjl_7 {
	background: var(--base) !important;
	color: var(--text) !important;
}


/* SITE HEADER*/


/* reddit logo */
a[aria-label=Home] > svg > g > circle {
	fill: var(--accent) !important;
}

a[aria-label=Home] > svg:first-child > g > path {
	fill: var(--base) !important;
}

a[aria-label=Home] > svg:nth-child(2) > g > path {
	fill: var(--text) !important;
}

/* notification icon */
button[aria-label="Open notifications inbox"] > div > span {
	background: var(--accent) !important;
	color: var(--mantle) !important;
}

/* advertise button */
#change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a {
	background: var(--surface0) !important;
	color: var(--text) !important;
}

#change-username-tooltip-id > span._2I12Htze2UzJmmfnrgYJOn > a > i {
	color: var(--text) !important;
}

/* reddit now notification */
a[href="/now"] > div {
	background: var(--accent) !important;
}

/* search scope pill text */
div[data-testid="search-scope-pill-text"] {
	color: var(--text) !important;
}

/* search popup title */
div[class*="_2SdHzo12ISmrC8H86TgSCp"][class*="_1QVrieUoti9cxiQSRw314E"][class*="uWdXen_41bh0iwLrgzFkc"] {
	--posttitletextcolor: var(--text) !important;
}

/* safe search toggle */
button#safe-search-toggle[aria-checked=true] {
	background: var(--accent) !important;
}


/* NAVIGATION SIDEBAR */


/* close icon */
i.icon-close {
	color: var(--subtext0) !important;
}

/* item color */
a[role=menuitem] {
	color: var(--text) !important;
}

/* navigation sidebar header color */
div[role=menu] > div[role=heading] {
	color: var(--subtext0) !important;
}

a[role=menuitem]:hover {
	background: var(--surface0) !important;
}

/* favorites */
i.icon-star_fill {
	color: var(--accent) !important;
}

i.icon-star {
	color: var(--subtext0) !important;
}


/* RIGHT FRONTPAGE SIDEBAR */


/* reddit premium icon */
i.icon-premium_fill {
	color: var(--accent) !important;
}

/* reddit premium try now button */
button._10BQ7pjWbeYP63SAPNS8Ts.q_unSaY23rpdd3lDvGZ- {
	background: var(--accent) !important;
	color: var(--base) !important;
}

/* recent posts thumbnail borders */
div._3fWuhJ6bVet7XJT5A0mZM2 > div > div > div {
	border-color: var(--subtext0) !important;
}


/* POSTS */


/* post background for card style */
div[data-adclicklocation=background] {
	background: var(--base) !important;
}

/* post options (save, comment, etc.) */
div._3-miAEojrCvx_4FQ8x3P-s, i.icon-comment, i.icon-share, i.icon-save, i.icon-expand, i.icon-collapse, i.icon-text_post, i.icon-image_post, i.icon-media_gallery, i.icon-video_post, i.icon-gif_post, i.icon-embed, i.icon-external_link, i.icon-poll_post {
	color: var(--subtext0) !important;
}

/* post title color */
div[data-adclicklocation=title] > div > a > div > h3, div[data-adclicklocation=title] > div:first-child > div:first-child > h1:first-child {
	color: var(--text) !important;
}

/* 
 *  post op color and
 *  post date color
 */
div[data-adclicklocation=top_bar] > span, a[data-testid=post_author_link] {
	color: var(--subtext0) !important;
}

/* nsfw flair */
span._1wzhGvvafQFOWAyA157okr {
	border-color: var(--red) !important;
	color: var(--red) !important;
}

/* pinned post icon */
i.icon-pin_fill {
	color: var(--green) !important;
}

/* give award icon */
i.icon-award {
	color: var(--subtext0) !important;
}

/* locked post icon */
i.icon-archived_fill, i.icon-lock_fill {
	color: var(--yellow) !important;
}

/* post button divider */
div[data-click-id=body] > div:nth-child(3) > div:nth-child(3) { 
	border-color: var(--surface1) !important;
}


/* UPVOTES/DOWNVOTES */


/* upvote/downvote background */
div.Post, div[data-click-id=media] {
	background: var(--mantle) !important;
	fill: var(--mantle) !important;
}

/* inactive vote text color */
div[id^=vote-arrows] > div {
	color: var(--subtext0) !important;
}

/* active upvote color */
i.icon-upvote_fill {
	color: var(--red) !important;
}

button[aria-label=upvote][aria-pressed=false] > span:hover > i {
	color: var(--red) !important;
}

/* active upvote text color */
button[aria-label=upvote][aria-pressed=true] ~ div {
	color: var(--red) !important;
}

/* hover background for both upvotes and downvotes */
button[aria-label=upvote][aria-label=downvote] > span:hover {
	background: var(--surface0) !important;
}

/* active downvote color */
.icon-downvote_fill {
	color: var(--blue) !important;
}

/* active downvote text color */
button[aria-label=downvote][aria-pressed=true] ~ div {
	color: var(--blue) !important;
}

button[aria-label=downvote][aria-pressed=false] > span:hover > i {
	color: var(--blue) !important;
}


/* REPORT MODAL */


a.o1ov2mzLxTFAFP-O4Uv8I {
	color: var(--accent) !important;
}

button._1lDGFVGU9k2mi-4kjU95Rp {
	color: var(--base) !important;
}


/* SUBREDDIT PAGES */


a[role=button][target="_blank"] {
	background: var(--text) !important;
	color: var(--base) !important;
}

/* radio buttons (flair selector, etc.) */
div[role=radio]:hover, div[role=radio]:focus {
	background: var(--accent) !important;
}

div[role=radio] > svg, div[role=radio] > svg:active {
	fill: var(--text) !important;
}

/* checkboxes */
button[role=checkbox] {
	fill: var(--accent) !important;
}


/* SUBREDDIT RIGHT SIDEBAR (some styles carry over from the homepage right sidebar section) */


/* header background */
._ZhON3a3vplThB8NFwuJn {
	background: var(--crust) !important;
	color: var(--text) !important;
}

/* subreddit image background */
img[alt="Subreddit Icon"][role="presentation"] {
	background: var(--accent) !important;
}

/* default subreddit icon */
i.icon-community_fill {
	color: var(--accent) !important;
}

/* online users */
div._21RLQh5PvUhC6vOKoFeHUP:before {
	color: var(--green) !important;
}


/* POST VIEWER */


/* spoiler tags */
._2v4IIjPhKL0PDaWaWtjJ1E {
	background: var(--surface0) !important;
}

/* mod comment tag */
span[id^=CommentTopMeta--Mod] {
	color: var(--green) !important;
}

/* op comment tag */
span[id^=CommentTopMeta--OP] {
	color: var(--blue) !important;
}

/* post overlay if you have "open in new tab" disabled */
div#overlayScrollContainer > div {
	background: var(--crust) !important;
}

/* fixes comment section background not working when "open in new tab is disabled" */
div._2M2wOqmeoPVvcSsJ6Po9-V._3287nL7j7epK9JmDC3N1VR {
	background: var(--mantle) !important;
}

/* shade applied to background when clicking on a post with "open in new tab" disabled */
div._2DJXORCrmcNpPTSq0LqL6i, div._1DK52RbaamLOWw5UPaht_S {
	background: var(--mist) !important;
}

/* gold award gradient */
div.TmlaIdEplCzZ0F1aRGYQh[role=presentation] {
	background: linear-gradient(188deg, #f9e2af1f 1.7%, #f9e2af00 46%, rgba(0, 0, 0, 0)) !important;
}

/* image gallery next/previous buttons */
a[title=Next] > i, a[title=Previous] > i {
	background: var(--surface0) !important;
}

/* image gallery image count */
div._61i6grM3um1yuw4GrN97P {
	background: var(--mist) !important;
	color: var(--text) !important;
}

/* comment search bar */
input#comment_search-bar {
	background: var(--base) !important;
}


/* MULTIREDDITS/CUSTOM FEEDS */


/* delete custom feed button */
.bX6SqXfzfxpv4GQbuIYVZ {
	color: var(--red) !important;
}


/* TOOLTIPS */


div.HQ2VJViRjokXpRbJzPvvc {
	background: var(--mantle) !important;
	color: var(--text) !important;
}

div.HQ2VJViRjokXpRbJzPvvc::after {
	border-top-color: var(--mantle) !important;
}

`)