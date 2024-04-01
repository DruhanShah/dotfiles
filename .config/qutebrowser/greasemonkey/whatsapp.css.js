// ==UserScript==
// @name    Userstyle (whatsapp.css)
// @include    *web.whatsapp.com/*
// ==/UserScript==
GM_addStyle(`:root {
	--rosewater: #f5e0dc;
	--flamingo: #f2cdcd;
	--pink: #f5c2e7;
	--mauve: #cba6f7;
	--red: #f38ba8;
	--maroon: #eba0ac;
	--peach: #fab387;
	--yellow: #f9e2af;
	--green: #a6e3a1;
	--teal: #94e2d5;
	--sky: #89dceb;
	--sapphire: #74c7ec;
	--blue: #89b4fa;
	--lavender: #b4befe;
	--text: #cdd6f4;
	--subtext1: #bac2de;
	--subtext0: #a6adc8;
	--overlay2: #9399b2;
	--overlay1: #7f849c;
	--overlay0: #6c7086;
	--surface2: #585b70;
	--surface1: #45475a;
	--surface0: #313244;
	--base: #1e1e2e;
	--mantle: #181825;
	--crust: #11111b;
}

* {
	font-family: "JetBrains Mono" !important;
}


:root {
	.dark {
		.landing-wrapper-before {
			background-color: var(--green) !important;
		}

		/* STATUS PAGE */
		--status-background: var(--base) !important;
		.bfsx6evv {
			background-color: var(--mantle) !important;
		}

		--modal-backdrop-solid: var(--base) !important;

		/* join group pop up */
		--modal-background: var(--base) !important;

		/* startup progress */
		--progress-primary: var(--green) !important;
		--progress-background: var(--surface1) !important;
		--startup-background: var(--base) !important;
		--startup-background-rgb: var(--base);
		/* home page, no chat selected */
		--intro-background: var(--base) !important;
		--intro-border: var(--green) !important;
		/* general background */
		--app-background: var(--base) !important;

		/* CHAT LIST */
		/* chat list background */
		--background-default: var(--base) !important;
		/* chat list header */
		--panel-header-background: var(--mantle) !important;
		/* icons */
		--panel-header-icon: var(--text) !important;
		/* other warnings (notifications) */
		--butterbar-default-background: var(--mantle) !important;
		--butterbar-notification-icon: var(--sky) !important;
		/* loading messages warning */
		--butterbar-green-nux-background: var(--mantle) !important;
		/* update available warning */
		--butterbar-update-background: var(--mantle) !important;
		--butterbar-update-icon: var(--green) !important;
		/* chat list search bar */
		--search-container-background: var(--base) !important;
		--search-input-container-background: var(--base) !important;
		--search-input-background: var(--surface0) !important;
		--search-input-container-background-active: var(--mantle) !important;
		--icon-search-back: var(--green) !important;
		/* archive icon */
		--icon-bright-highlight: var(--green) !important;
		/* archived unread marker */
		--unread-marker-background: var(--green) !important;
		--unread-timestamp: var(--green) !important;
		/* archived chats header */
		--archived-chat-persistent-header-background: var(--crust) !important;
		/* unread voice message */
		--ptt-green: var(--green) !important;
		/* read voice message */
		--ptt-blue: var(--blue) !important;
		/* pinned chat icon */
		--icon-pinned: var(--green) !important;
		/* last message in selected chat */
		--secondary-stronger: var(--subtext1) !important;
		/* background for active and hover chats in chat list */
		--background-default-active: var(--surface1) !important;
		--background-default-hover: var(--surface0) !important;
		/* unread chats filter */
		--icon-high-emphasis: var(--green) !important;
		.p7idzaix {
			color: var(--crust) !important;
		}
		/* voice message playing */
		--ptt-ooc-background: var(--mantle) !important;

		/* CONVERSATION */
		/* chat background */
		--conversation-panel-background: var(--mantle) !important;
		/* MESSAGES */
		/* background for incoming and outgoing messages */
		& when (var(--lighterMessages=1)) {
			--incoming-background: var(--surface1) !important;
		}
		& when (var(--lighterMessages=0)) {
			--incoming-background: var(--base) !important;
		}
		--outgoing-background: var(--surface0) !important;
		/* read double tick */
		--icon-ack: var(--blue) !important;
		/* received double tick */
		--bubble-meta-icon: var(--subtext0) !important;
		/* message timestamp */
		--bubble-meta: var(--text) !important;
		--message-primary: var(--text) !important;
		/* POLL */
		/* creation */
		--poll-modal-background-color: var(--base) !important;
		--poll-modal-footer-background-color: var(--surface0) !important;
		/* votes */
		--poll-bar-fill-receiver: var(--green) !important;
		--poll-bar-fill-sender: var(--green) !important;
		--checkbox-mark: var(--crust) !important;

		/* audio duration */
		--audio-progress-metadata: var(--subtext0) !important;
		/* system messages (unread or day messages in chats) */
		--system-message-text: var(--text) !important;
		--system-message-background: var(--crust) !important;
		/* unread system message background */
		--unread-background: var(--crust) !important;
		--unread-bar-background: var(--surface1) !important;
		/* meta data for documents */
		--document-meta: var(--subtext1) !important;
		/* mentions, links and link previews */
		--mention-at-symbol: var(--sapphire) !important;
		--link: var(--sapphire) !important;
		--link-preview: var(--text) !important;
		--link-preview-lighter: var(--subtext1) !important;
		--link-preview-light: var(--subtext0) !important;
		/* arrow icon in messages */
		& when (var(--lighterMessages=1)) {
			--incoming-background-rgb: var(--surface1);
		}
		& when (var(--lighterMessages=0)) {
			--incoming-background-rgb: var(--base);
		}
		--outgoing-background-rgb: var(--surface0);
		/* QUOTED MESSAGES */
		/* quoted messages */
		--quoted-message-text: var(--text) !important;
		/* background for quoted incoming and outgoing messages */
		--outgoing-background-deeper: var(--surface1) !important;
		& when (var(--lighterMessages=1)) {
			--incoming-background-deeper: var(--surface2) !important;
		}
		& when (var(--lighterMessages=0)) {
			--incoming-background-deeper: var(--surface0) !important;
		}

		/* SEARCH IN CHAT HIGHLIGHT */
		--highlight: var(--teal) !important;

		/* quote colors */
		.bg-color-1 {
			background-color: var(--green) !important;
		}
		.color-1 {
			color: var(--green) !important;
		}
		.bg-color-2 {
			background-color: var(--blue) !important;
		}
		.color-2 {
			color: var(--blue) !important;
		}
		.bg-color-3 {
			background-color: var(--pink) !important;
		}
		.color-3 {
			color: var(--pink) !important;
		}
		.bg-color-4 {
			background-color: var(--sapphire) !important;
		}
		.color-4 {
			color: var(--sapphire) !important;
		}
		.bg-color-5 {
			background-color: var(--peach) !important;
		}
		.color-5 {
			color: var(--peach) !important;
		}
		.bg-color-6 {
			background-color: var(--sky) !important;
		}
		.color-6 {
			color: var(--sky) !important;
		}
		.bg-color-7 {
			background-color: var(--yellow) !important;
		}
		.color-7 {
			color: var(--yellow) !important;
		}
		.bg-color-8 {
			background-color: var(--teal) !important;
		}
		.color-8 {
			color: var(--teal) !important;
		}
		.bg-color-9 {
			background-color: var(--lavender) !important;
		}
		.color-9 {
			color: var(--lavender) !important;
		}
		.bg-color-10 {
			background-color: var(--red!important);
		}
		.color-10 {
			color: var(--red!important);
		}
		.bg-color-11 {
			background-color: var(--mauve) !important;
		}
		.color-11 {
			color: var(--mauve) !important;
		}
		.bg-color-12 {
			background-color: var(--flamingo) !important;
		}
		.color-12 {
			color: var(--flamingo) !important;
		}
		.bg-color-13 {
			background-color: var(--rosewater) !important;
		}
		.color-13 {
			color: var(--rosewater) !important;
		}
		.bg-color-14 {
			background-color: var(--pink) !important;
		}
		.color-14 {
			color: var(--pink) !important;
		}
		.bg-color-15 {
			background-color: var(--maroon) !important;
		}
		.color-15 {
			color: var(--maroon) !important;
		}
		.bg-color-16 {
			background-color: var(--teal) !important;
		}
		.color-16 {
			color: var(--teal) !important;
		}
		/* general text */
		--primary: var(--text) !important;
		--primary-strong: var(--text) !important;
		--primary-stronger: var(--text) !important;
		--primary-strongest: var(--text) !important;
		--secondary: var(--subtext0) !important;
		--secondary-strongest-rgb: var(--text);
		/* chat list typing message */
		--typing: var(--green) !important;
		/* background for video player and image viewer */
		--media-viewer-background: var(--mantle) !important;
		/* not loaded media */
		--media-gallery-thumb-background: var(--crust) !important;

		/* Group info/Contact info */
		--photopicker-overlay-background: fadeout(var(--mantle,) 0.8) !important;
		--photopicker-overlay-background-rgb: var(--base);
		--media-viewer-background-rgb: var(--base);
		--drawer-background-deep: var(--crust) !important;
		/* group info read more */
		--input-button-more: var(--sapphire) !important;
		/* Group info thumbnails border */
		--chat-info-drawer-thumb-background: var(--surface2) !important;
		/* Group admin badge background */
		--chat-marker-background: var(--mantle) !important;
		--chat-marker-border: var(--mantle) !important;
		/* Group admin badge foreground */
		--chat-marker: var(--subtext0) !important;
		/* Media gallery */
		--drawer-gallery-background: var(--crust) !important;
		/* mute toggle */
		--switch-button-checked-color: var(--green) !important;
		--switch-track-checked-color: var(--surface2) !important;
		--switch-track-color: var(--surface2) !important;
		--switch-button-color: var(--overlay1) !important;

		/* danger, block, exit and report buttons */
		--danger: var(--red!important);

		/* group added by someone not in contacts */
		--button-plain-background: var(--surface0) !important;
		--button-plain-background-hover: var(--surface1) !important;

		/* EMOJI AND STICKERS */
		--panel-input-background: var(--surface0) !important;
		--sticker-button-background: var(--surface1) !important;
		--active-tab-marker: var(--green) !important;

		/* REACTIONS */
		--reactions-panel-background-color: var(--surface0) !important;
		--reactions-tray-background: var(--surface0) !important;
		--reactions-details-background: var(--surface0) !important;
		--svg-gray-button: var(--surface0) !important;

		/* Forward message popup */
		--panel-background-colored-deeper: var(--crust) !important;
		--modal-backdrop: fadeout(var(--mantle,) 0.8) !important;

		/* MEDIA EDITOR */
		/* background for media editor */
		--panel-background-deeper: var(--mantle) !important;
		/* message box for media editor */
		--media-editor-image-caption-input-background: var(--surface0) !important;
		/* selected picture in media editor */
		--media-editor-thumb-border-active: var(--green) !important;
		/* send button in media editor */
		--button-round-background: var(--green) !important;

		/* COMPOSE BAR */
		/* type a message bar and background */
		--compose-input-background: var(--surface0) !important;
		--compose-input-border: var(--surface1) !important;
		--compose-panel-background: var(--mantle) !important;
		--rich-text-panel-background: var(--mantle) !important;
		/* select messages fixes */
		--panel-background: var(--mantle) !important;
		--panel-background-rgb: var(--mantle);
		--checkbox-background: var(--green) !important;
		/* quoted message in compose */
		--popup-panel-background: var(--surface0) !important;
		/* use Surface 0 for contrast, other colors don't pass AAA */
		/* mention list item background */
		--compose-panel-background-hover: var(--surface1) !important;
		/* compose bar icons */
		--icon: var(--green) !important;
		/* ATTACH ICONS */
		/* poll icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(6)
		> button
		> span
		> svg
		> circle {
			fill: var(--green) !important;
		}
		/* image icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(1)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(2) {
			fill: var(--pink) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(1)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(1) {
			fill: var(--pink) !important;
			filter: brightness(85%) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(1)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> rect {
			fill: var(--pink) !important;
			filter: brightness(70%) !important;
		}
		/* sticker icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(2)
		> button
		> span
		> svg
		> g
		> circle {
			fill: var(--blue) !important;
			filter: brightness(85%) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(2)
		> button
		> span
		> svg
		> g
		> path:nth-child(2) {
			fill: var(--blue) !important;
		}
		/* camera icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(3)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(1) {
			fill: var(--red!important);
			filter: brightness(85%) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(3)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(2) {
			fill: var(--red!important);
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(3)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> rect {
			fill: var(--red!important);
			filter: brightness(85%) !important;
		}
		/* document icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(4)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(1) {
			fill: var(--mauve) !important;
			filter: brightness(85%) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(4)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> path:nth-child(2) {
			fill: var(--mauve) !important;
		}
		/* contact icon */
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(5)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> g
		> path:nth-child(1) {
			fill: var(--sky) !important;
			filter: brightness(85%) !important;
		}
		div._1OT67
		> div
		> span
		> div
		> div
		> ul
		> li:nth-child(5)
		> button
		> span
		> svg
		> g:nth-child(1)
		> g
		> g
		> path:nth-child(2) {
			fill: var(--sky) !important;
		}
		/* VOICE MESSAGE SENDING */
		--ptt-draft-button-send: var(--green) !important;
		--ptt-draft-waveform-background: var(--base) !important;
		--ptt-draft-button-stop: var(--red) !important;
		--ptt-draft-button-stop-hover: var(--maroon) !important;

		/* GENERAL OPTIONS */
		/* dropdown menus */
		--dropdown-background: var(--surface0) !important;
		--dropdown-background-hover: var(--surface1) !important;

		/* OTHER SECTIONS */
		/* profile background */
		--drawer-background: var(--base) !important;
		/* communities, new chat, other panes */
		--panel-background-colored: var(--mantle) !important;
		--drawer-section-background: var(--base) !important;
		/* new chat icons */
		--round-icon-background: var(--green) !important;
		--inverse: var(--text) !important;
		/* title and icon for drawers */
		--drawer-header-title: var(--text) !important;
		/* buttons such as create community */
		--button-primary-background: var(--green) !important;
		--button-primary-background-hover: fadeout(var(--green), 0.8) !important;
		/* keyboard shortcuts background */
		--panel-background-lighter: var(--mantle) !important;
		/* active input in modals and drawers */
		--input-border-active: var(--green) !important;
	}

	/* Start page drawing */
	#app
	> div
	> div
	> div._2Ts6i._2xAQV
	> div
	> div
	> div.WM0_u
	> span
	> svg
	> path:nth-child(1) {
		fill: var(--surface2) !important;
	}

	/* Status unread dot */
	#df9d3429-f0ef-48b5-b5eb-f9d27b2deba6 > path:nth-child(2) {
		fill: var(--green) !important;
	}

	#side
	> div._3gYev
	> div
	> div
	> button
	> div._3xdht._1ZD3q
	> span
	> svg
	> path {
		fill: var(--green) !important;
	}
}

`)