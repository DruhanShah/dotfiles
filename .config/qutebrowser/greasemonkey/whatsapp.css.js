// ==UserScript==
// @name    Userstyle (whatsapp.css)
// @include    *web.whatsapp.com/*
// ==/UserScript==
GM_addStyle(`* {
    font-family: "Operator Mono SSm Medium" !important;
}

body {
    /* STATUS PAGE */
    --status-background: #eff1f5 !important;
    --modal-backdrop-solid: #eff1f5 !important;
    /* join group pop up */
    --modal-background: #eff1f5 !important;
    /* startup progress */
    --progress-primary: #1e66f5 !important;
    --progress-background: #bcc0cc !important;
    --startup-background: #eff1f5 !important;
    --startup-background-rgb: 239 241 245;
    /* home page, no chat selected */
    --intro-background: #eff1f5 !important;
    --intro-border: #1e66f5 !important;
    /* general background */
    --app-background: #eff1f5 !important;
    /* CHAT LIST */
    /* chat list background */
    --background-default: #eff1f5 !important;
    /* chat list header */
    --panel-header-background: #e6e9ef !important;
    /* icons */
    --panel-header-icon: #4c4f69 !important;
    /* other warnings (notifications) */
    --butterbar-default-background: #e6e9ef !important;
    --butterbar-notification-icon: #04a5e5 !important;
    /* loading messages warning */
    --butterbar-green-nux-background: #e6e9ef !important;
    /* update available warning */
    --butterbar-update-background: #e6e9ef !important;
    --butterbar-update-icon: #1e66f5 !important;
    /* chat list search bar */
    --search-container-background: #eff1f5 !important;
    --search-input-container-background: #eff1f5 !important;
    --search-input-background: #ccd0da !important;
    --search-input-container-background-active: #e6e9ef !important;
    --icon-search-back: #1e66f5 !important;
    /* archive icon */
    --icon-bright-highlight: #1e66f5 !important;
    /* archived unread marker */
    --unread-marker-background: #1e66f5 !important;
    --unread-timestamp: #1e66f5 !important;
    /* archived chats header */
    --archived-chat-persistent-header-background: #dce0e8 !important;
    /* unread voice message */
    --ptt-green: #40a02b !important;
    /* read voice message */
    --ptt-blue: #1e66f5 !important;
    /* pinned chat icon */
    --icon-pinned: #1e66f5 !important;
    /* last message in selected chat */
    --secondary-stronger: #5c5f77 !important;
    /* background for active and hover chats in chat list */
    --background-default-active: #bcc0cc !important;
    --background-default-hover: #ccd0da !important;
    /* unread chats filter */
    --icon-high-emphasis: #40a02b !important;
    /* voice message playing */
    --ptt-ooc-background: #e6e9ef !important;
    /* CONVERSATION */
    /* chat background */
    --conversation-panel-background: #e6e9ef !important;
    /* MESSAGES */
    /* background for incoming and outgoing messages */
    --incoming-background: #bcc0cc !important;
    --incoming-background-deeper: #acb0be !important;
    /* arrow icon in messages */
    --incoming-background-rgb: 188 192 204;
    --outgoing-background: #ccd0da !important;
    /* read double tick */
    --icon-ack: #1e66f5 !important;
    /* received double tick */
    --bubble-meta-icon: #6c6f85 !important;
    /* message timestamp */
    --bubble-meta: #4c4f69 !important;
    --message-primary: #4c4f69 !important;
    /* POLL */
    /* creation */
    --poll-modal-background-color: #eff1f5 !important;
    --poll-modal-footer-background-color: #ccd0da !important;
    /* votes */
    --poll-bar-fill-receiver: #40a02b !important;
    --poll-bar-fill-sender: #40a02b !important;
    --checkbox-mark: #dce0e8 !important;
    /* audio duration */
    --audio-progress-metadata: #6c6f85 !important;
    /* system messages (unread or day messages in chats) */
    --system-message-text: #4c4f69 !important;
    --system-message-background: #dce0e8 !important;
    /* unread system message background */
    --unread-background: #dce0e8 !important;
    --unread-bar-background: #bcc0cc !important;
    /* meta data for documents */
    --document-meta: #5c5f77 !important;
    /* mentions, links and link previews */
    --mention-at-symbol: #209fb5 !important;
    --link: #209fb5 !important;
    --link-preview: #4c4f69 !important;
    --link-preview-lighter: #5c5f77 !important;
    --link-preview-light: #6c6f85 !important;
    --outgoing-background-rgb: 204 208 218;
    /* QUOTED MESSAGES */
    /* quoted messages */
    --quoted-message-text: #4c4f69 !important;
    /* background for quoted incoming and outgoing messages */
    --outgoing-background-deeper: #bcc0cc !important;
    /* SEARCH IN CHAT HIGHLIGHT */
    --highlight: #179299 !important;
    /* quote colors */
    /* general text */
    --primary: #4c4f69 !important;
    --primary-strong: #4c4f69 !important;
    --primary-stronger: #4c4f69 !important;
    --primary-strongest: #4c4f69 !important;
    --secondary: #6c6f85 !important;
    --secondary-strongest-rgb: 76 79 105;
    --inline-code-text: #1e66f5 !important;
    /* chat list typing message */
    --typing: #40a02b !important;
    /* background for video player and image viewer */
    --media-viewer-background: #e6e9ef !important;
    /* not loaded media */
    --media-gallery-thumb-background: #dce0e8 !important;
    /* Group info/Contact info */
    --photopicker-overlay-background: rgba(230, 233, 239, 0.992) !important;
    --photopicker-overlay-background-rgb: 239 241 245;
    --media-viewer-background-rgb: 239 241 245;
    --drawer-background-deep: #dce0e8 !important;
    /* group info read more */
    --input-button-more: #209fb5 !important;
    /* Group info thumbnails border */
    --chat-info-drawer-thumb-background: #acb0be !important;
    /* Group admin badge background */
    --chat-marker-background: #e6e9ef !important;
    --chat-marker-border: #e6e9ef !important;
    /* Group admin badge foreground */
    --chat-marker: #6c6f85 !important;
    /* Media gallery */
    --drawer-gallery-background: #dce0e8 !important;
    /* mute toggle */
    --switch-button-checked-color: #1e66f5 !important;
    --switch-track-checked-color: #acb0be !important;
    --switch-track-color: #acb0be !important;
    --switch-button-color: #8c8fa1 !important;
    /* danger, block, exit and report buttons */
    --danger: #d20f39!important;
    /* group added by someone not in contacts */
    --button-plain-background: #ccd0da !important;
    --button-plain-background-hover: #bcc0cc !important;
    /* EMOJI AND STICKERS */
    --panel-input-background: #ccd0da !important;
    --sticker-button-background: #bcc0cc !important;
    --active-tab-marker: #1e66f5 !important;
    /* REACTIONS */
    --reactions-panel-background-color: #ccd0da !important;
    --reactions-tray-background: #ccd0da !important;
    --reactions-details-background: #ccd0da !important;
    --svg-gray-button: #ccd0da !important;
    /* Forward message popup */
    --panel-background-colored-deeper: #dce0e8 !important;
    --modal-backdrop: rgba(230, 233, 239, 0.992) !important;
    /* Forward media caption */
    --forward-caption-preview-background: #e6e9ef !important;
    --forward-caption-preview-content: #dce0e8 !important;
    /* MEDIA EDITOR */
    /* background for media editor */
    --panel-background-deeper: #e6e9ef !important;
    /* message box for media editor */
    --media-editor-image-caption-input-background: #ccd0da !important;
    /* selected picture in media editor */
    --media-editor-thumb-border-active: #1e66f5 !important;
    /* send button in media editor */
    --button-round-background: #1e66f5 !important;
    /* COMPOSE BAR */
    /* type a message bar and background */
    --compose-input-background: #ccd0da !important;
    --compose-input-border: #bcc0cc !important;
    --compose-panel-background: #e6e9ef !important;
    --rich-text-panel-background: #e6e9ef !important;
    /* select messages fixes */
    --panel-background: #e6e9ef !important;
    --panel-background-rgb: 230 233 239;
    --checkbox-background: #1e66f5 !important;
    /* quoted message in compose */
    --popup-panel-background: #ccd0da !important;
    /* use Surface 0 for contrast, other colors don't pass AAA */
    /* mention list item background */
    --compose-panel-background-hover: #bcc0cc !important;
    /* compose bar icons */
    --icon: #1e66f5 !important;
    /* ATTACH ICONS */
    /* poll icon */
    /* image icon */
    /* sticker icon */
    /* camera icon */
    /* document icon */
    /* contact icon */
    /* VOICE MESSAGE SENDING */
    --ptt-draft-button-send: #1e66f5 !important;
    --ptt-draft-waveform-background: #eff1f5 !important;
    --ptt-draft-button-stop: #d20f39 !important;
    --ptt-draft-button-stop-hover: #e64553 !important;
    /* GENERAL OPTIONS */
    /* dropdown menus */
    --dropdown-background: #ccd0da !important;
    --dropdown-background-hover: #bcc0cc !important;
    /* OTHER SECTIONS */
    /* profile background */
    --drawer-background: #eff1f5 !important;
    /* communities, new chat, other panes */
    --panel-background-colored: #e6e9ef !important;
    --drawer-section-background: #eff1f5 !important;
    /* new chat icons */
    --round-icon-background: #40a02b !important;
    --inverse: #4c4f69 !important;
    /* title and icon for drawers */
    --drawer-header-title: #4c4f69 !important;
    /* buttons such as create community */
    --button-primary-background: #1e66f5 !important;
    --button-primary-background-hover: rgba(30, 102, 245, 0.992) !important;
    /* keyboard shortcuts background */
    --panel-background-lighter: #e6e9ef !important;
    /* active input in modals and drawers */
    --input-border-active: #1e66f5 !important;
    /* Start page drawing */
    /* Status unread dot */
}
body .landing-wrapper-before {
    background-color: #1e66f5 !important;
}
body .bfsx6evv {
    background-color: #e6e9ef !important;
}
body .p7idzaix {
    color: #dce0e8 !important;
}
body .bg-color-1 {
    background-color: #40a02b !important;
}
body .color-1 {
    color: #40a02b !important;
}
body .bg-color-2 {
    background-color: #1e66f5 !important;
}
body .color-2 {
    color: #1e66f5 !important;
}
body .bg-color-3 {
    background-color: #ea76cb !important;
}
body .color-3 {
    color: #ea76cb !important;
}
body .bg-color-4 {
    background-color: #209fb5 !important;
}
body .color-4 {
    color: #209fb5 !important;
}
body .bg-color-5 {
    background-color: #fe640b !important;
}
body .color-5 {
    color: #fe640b !important;
}
body .bg-color-6 {
    background-color: #04a5e5 !important;
}
body .color-6 {
    color: #04a5e5 !important;
}
body .bg-color-7 {
    background-color: #df8e1d !important;
}
body .color-7 {
    color: #df8e1d !important;
}
body .bg-color-8 {
    background-color: #179299 !important;
}
body .color-8 {
    color: #179299 !important;
}
body .bg-color-9 {
    background-color: #7287fd !important;
}
body .color-9 {
    color: #7287fd !important;
}
body .bg-color-10 {
    background-color: #d20f39 !important;
}
body .color-10 {
    color: #d20f39 !important;
}
body .bg-color-11 {
    background-color: #8839ef !important;
}
body .color-11 {
    color: #8839ef !important;
}
body .bg-color-12 {
    background-color: #dd7878 !important;
}
body .color-12 {
    color: #dd7878 !important;
}
body .bg-color-13 {
    background-color: #dc8a78 !important;
}
body .color-13 {
    color: #dc8a78 !important;
}
body .bg-color-14 {
    background-color: #ea76cb !important;
}
body .color-14 {
    color: #ea76cb !important;
}
body .bg-color-15 {
    background-color: #e64553 !important;
}
body .color-15 {
    color: #e64553 !important;
}
body .bg-color-16 {
    background-color: #179299 !important;
}
body .color-16 {
    color: #179299 !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(6) > button > span > svg > circle {
    fill: #40a02b !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #ea76cb !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #ea76cb !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > rect {
    fill: #ea76cb !important;
    filter: brightness(70%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(2) > button > span > svg > g > circle {
    fill: #1e66f5 !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(2) > button > span > svg > g > path:nth-child(2) {
    fill: #1e66f5 !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #d20f39 !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #d20f39 !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > rect {
    fill: #d20f39 !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(4) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #8839ef !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(4) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #8839ef !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(5) > button > span > svg > g:nth-child(1) > g > g > path:nth-child(1) {
    fill: #04a5e5 !important;
    filter: brightness(85%) !important;
}
body div._1OT67 > div > span > div > div > ul > li:nth-child(5) > button > span > svg > g:nth-child(1) > g > g > path:nth-child(2) {
    fill: #04a5e5 !important;
}
body #app > div > div > div._2Ts6i._2xAQV > div > div > div.WM0_u > span > svg > path:nth-child(1) {
    fill: #acb0be !important;
}
body #df9d3429-f0ef-48b5-b5eb-f9d27b2deba6 > path:nth-child(2) {
    fill: #1e66f5 !important;
}
body #side > div._3gYev > div > div > button > div._3xdht._1ZD3q > span > svg > path {
    fill: #1e66f5 !important;
}
body.dark {
    /* STATUS PAGE */
    --status-background: #1e1e2e !important;
    --modal-backdrop-solid: #1e1e2e !important;
    /* join group pop up */
    --modal-background: #1e1e2e !important;
    /* startup progress */
    --progress-primary: #89b4fa !important;
    --progress-background: #45475a !important;
    --startup-background: #1e1e2e !important;
    --startup-background-rgb: 30 30 46;
    /* home page, no chat selected */
    --intro-background: #1e1e2e !important;
    --intro-border: #89b4fa !important;
    /* general background */
    --app-background: #1e1e2e !important;
    /* CHAT LIST */
    /* chat list background */
    --background-default: #1e1e2e !important;
    /* chat list header */
    --panel-header-background: #181825 !important;
    /* icons */
    --panel-header-icon: #cdd6f4 !important;
    /* other warnings (notifications) */
    --butterbar-default-background: #181825 !important;
    --butterbar-notification-icon: #89dceb !important;
    /* loading messages warning */
    --butterbar-green-nux-background: #181825 !important;
    /* update available warning */
    --butterbar-update-background: #181825 !important;
    --butterbar-update-icon: #89b4fa !important;
    /* chat list search bar */
    --search-container-background: #1e1e2e !important;
    --search-input-container-background: #1e1e2e !important;
    --search-input-background: #313244 !important;
    --search-input-container-background-active: #181825 !important;
    --icon-search-back: #89b4fa !important;
    /* archive icon */
    --icon-bright-highlight: #89b4fa !important;
    /* archived unread marker */
    --unread-marker-background: #89b4fa !important;
    --unread-timestamp: #89b4fa !important;
    /* archived chats header */
    --archived-chat-persistent-header-background: #11111b !important;
    /* unread voice message */
    --ptt-green: #a6e3a1 !important;
    /* read voice message */
    --ptt-blue: #89b4fa !important;
    /* pinned chat icon */
    --icon-pinned: #89b4fa !important;
    /* last message in selected chat */
    --secondary-stronger: #bac2de !important;
    /* background for active and hover chats in chat list */
    --background-default-active: #45475a !important;
    --background-default-hover: #313244 !important;
    /* unread chats filter */
    --icon-high-emphasis: #a6e3a1 !important;
    /* voice message playing */
    --ptt-ooc-background: #181825 !important;
    /* CONVERSATION */
    /* chat background */
    --conversation-panel-background: #181825 !important;
    /* MESSAGES */
    /* background for incoming and outgoing messages */
    --incoming-background: #45475a !important;
    --incoming-background-deeper: #585b70 !important;
    /* arrow icon in messages */
    --incoming-background-rgb: 69 71 90;
    --outgoing-background: #313244 !important;
    /* read double tick */
    --icon-ack: #89b4fa !important;
    /* received double tick */
    --bubble-meta-icon: #a6adc8 !important;
    /* message timestamp */
    --bubble-meta: #cdd6f4 !important;
    --message-primary: #cdd6f4 !important;
    /* POLL */
    /* creation */
    --poll-modal-background-color: #1e1e2e !important;
    --poll-modal-footer-background-color: #313244 !important;
    /* votes */
    --poll-bar-fill-receiver: #a6e3a1 !important;
    --poll-bar-fill-sender: #a6e3a1 !important;
    --checkbox-mark: #11111b !important;
    /* audio duration */
    --audio-progress-metadata: #a6adc8 !important;
    /* system messages (unread or day messages in chats) */
    --system-message-text: #cdd6f4 !important;
    --system-message-background: #11111b !important;
    /* unread system message background */
    --unread-background: #11111b !important;
    --unread-bar-background: #45475a !important;
    /* meta data for documents */
    --document-meta: #bac2de !important;
    /* mentions, links and link previews */
    --mention-at-symbol: #74c7ec !important;
    --link: #74c7ec !important;
    --link-preview: #cdd6f4 !important;
    --link-preview-lighter: #bac2de !important;
    --link-preview-light: #a6adc8 !important;
    --outgoing-background-rgb: 49 50 68;
    /* QUOTED MESSAGES */
    /* quoted messages */
    --quoted-message-text: #cdd6f4 !important;
    /* background for quoted incoming and outgoing messages */
    --outgoing-background-deeper: #45475a !important;
    /* SEARCH IN CHAT HIGHLIGHT */
    --highlight: #94e2d5 !important;
    /* quote colors */
    /* general text */
    --primary: #cdd6f4 !important;
    --primary-strong: #cdd6f4 !important;
    --primary-stronger: #cdd6f4 !important;
    --primary-strongest: #cdd6f4 !important;
    --secondary: #a6adc8 !important;
    --secondary-strongest-rgb: 205 214 244;
    --inline-code-text: #89b4fa !important;
    /* chat list typing message */
    --typing: #a6e3a1 !important;
    /* background for video player and image viewer */
    --media-viewer-background: #181825 !important;
    /* not loaded media */
    --media-gallery-thumb-background: #11111b !important;
    /* Group info/Contact info */
    --photopicker-overlay-background: rgba(24, 24, 37, 0.992) !important;
    --photopicker-overlay-background-rgb: 30 30 46;
    --media-viewer-background-rgb: 30 30 46;
    --drawer-background-deep: #11111b !important;
    /* group info read more */
    --input-button-more: #74c7ec !important;
    /* Group info thumbnails border */
    --chat-info-drawer-thumb-background: #585b70 !important;
    /* Group admin badge background */
    --chat-marker-background: #181825 !important;
    --chat-marker-border: #181825 !important;
    /* Group admin badge foreground */
    --chat-marker: #a6adc8 !important;
    /* Media gallery */
    --drawer-gallery-background: #11111b !important;
    /* mute toggle */
    --switch-button-checked-color: #89b4fa !important;
    --switch-track-checked-color: #585b70 !important;
    --switch-track-color: #585b70 !important;
    --switch-button-color: #7f849c !important;
    /* danger, block, exit and report buttons */
    --danger: #f38ba8!important;
    /* group added by someone not in contacts */
    --button-plain-background: #313244 !important;
    --button-plain-background-hover: #45475a !important;
    /* EMOJI AND STICKERS */
    --panel-input-background: #313244 !important;
    --sticker-button-background: #45475a !important;
    --active-tab-marker: #89b4fa !important;
    /* REACTIONS */
    --reactions-panel-background-color: #313244 !important;
    --reactions-tray-background: #313244 !important;
    --reactions-details-background: #313244 !important;
    --svg-gray-button: #313244 !important;
    /* Forward message popup */
    --panel-background-colored-deeper: #11111b !important;
    --modal-backdrop: rgba(24, 24, 37, 0.992) !important;
    /* Forward media caption */
    --forward-caption-preview-background: #181825 !important;
    --forward-caption-preview-content: #11111b !important;
    /* MEDIA EDITOR */
    /* background for media editor */
    --panel-background-deeper: #181825 !important;
    /* message box for media editor */
    --media-editor-image-caption-input-background: #313244 !important;
    /* selected picture in media editor */
    --media-editor-thumb-border-active: #89b4fa !important;
    /* send button in media editor */
    --button-round-background: #89b4fa !important;
    /* COMPOSE BAR */
    /* type a message bar and background */
    --compose-input-background: #313244 !important;
    --compose-input-border: #45475a !important;
    --compose-panel-background: #181825 !important;
    --rich-text-panel-background: #181825 !important;
    /* select messages fixes */
    --panel-background: #181825 !important;
    --panel-background-rgb: 24 24 37;
    --checkbox-background: #89b4fa !important;
    /* quoted message in compose */
    --popup-panel-background: #313244 !important;
    /* use Surface 0 for contrast, other colors don't pass AAA */
    /* mention list item background */
    --compose-panel-background-hover: #45475a !important;
    /* compose bar icons */
    --icon: #89b4fa !important;
    /* ATTACH ICONS */
    /* poll icon */
    /* image icon */
    /* sticker icon */
    /* camera icon */
    /* document icon */
    /* contact icon */
    /* VOICE MESSAGE SENDING */
    --ptt-draft-button-send: #89b4fa !important;
    --ptt-draft-waveform-background: #1e1e2e !important;
    --ptt-draft-button-stop: #f38ba8 !important;
    --ptt-draft-button-stop-hover: #eba0ac !important;
    /* GENERAL OPTIONS */
    /* dropdown menus */
    --dropdown-background: #313244 !important;
    --dropdown-background-hover: #45475a !important;
    /* OTHER SECTIONS */
    /* profile background */
    --drawer-background: #1e1e2e !important;
    /* communities, new chat, other panes */
    --panel-background-colored: #181825 !important;
    --drawer-section-background: #1e1e2e !important;
    /* new chat icons */
    --round-icon-background: #a6e3a1 !important;
    --inverse: #cdd6f4 !important;
    /* title and icon for drawers */
    --drawer-header-title: #cdd6f4 !important;
    /* buttons such as create community */
    --button-primary-background: #89b4fa !important;
    --button-primary-background-hover: rgba(137, 180, 250, 0.992) !important;
    /* keyboard shortcuts background */
    --panel-background-lighter: #181825 !important;
    /* active input in modals and drawers */
    --input-border-active: #89b4fa !important;
    /* Start page drawing */
    /* Status unread dot */
}
body.dark .landing-wrapper-before {
    background-color: #89b4fa !important;
}
body.dark .bfsx6evv {
    background-color: #181825 !important;
}
body.dark .p7idzaix {
    color: #11111b !important;
}
body.dark .bg-color-1 {
    background-color: #a6e3a1 !important;
}
body.dark .color-1 {
    color: #a6e3a1 !important;
}
body.dark .bg-color-2 {
    background-color: #89b4fa !important;
}
body.dark .color-2 {
    color: #89b4fa !important;
}
body.dark .bg-color-3 {
    background-color: #f5c2e7 !important;
}
body.dark .color-3 {
    color: #f5c2e7 !important;
}
body.dark .bg-color-4 {
    background-color: #74c7ec !important;
}
body.dark .color-4 {
    color: #74c7ec !important;
}
body.dark .bg-color-5 {
    background-color: #fab387 !important;
}
body.dark .color-5 {
    color: #fab387 !important;
}
body.dark .bg-color-6 {
    background-color: #89dceb !important;
}
body.dark .color-6 {
    color: #89dceb !important;
}
body.dark .bg-color-7 {
    background-color: #f9e2af !important;
}
body.dark .color-7 {
    color: #f9e2af !important;
}
body.dark .bg-color-8 {
    background-color: #94e2d5 !important;
}
body.dark .color-8 {
    color: #94e2d5 !important;
}
body.dark .bg-color-9 {
    background-color: #b4befe !important;
}
body.dark .color-9 {
    color: #b4befe !important;
}
body.dark .bg-color-10 {
    background-color: #f38ba8 !important;
}
body.dark .color-10 {
    color: #f38ba8 !important;
}
body.dark .bg-color-11 {
    background-color: #cba6f7 !important;
}
body.dark .color-11 {
    color: #cba6f7 !important;
}
body.dark .bg-color-12 {
    background-color: #f2cdcd !important;
}
body.dark .color-12 {
    color: #f2cdcd !important;
}
body.dark .bg-color-13 {
    background-color: #f5e0dc !important;
}
body.dark .color-13 {
    color: #f5e0dc !important;
}
body.dark .bg-color-14 {
    background-color: #f5c2e7 !important;
}
body.dark .color-14 {
    color: #f5c2e7 !important;
}
body.dark .bg-color-15 {
    background-color: #eba0ac !important;
}
body.dark .color-15 {
    color: #eba0ac !important;
}
body.dark .bg-color-16 {
    background-color: #94e2d5 !important;
}
body.dark .color-16 {
    color: #94e2d5 !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(6) > button > span > svg > circle {
    fill: #a6e3a1 !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #f5c2e7 !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #f5c2e7 !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > span > svg > g:nth-child(1) > g > rect {
    fill: #f5c2e7 !important;
    filter: brightness(70%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(2) > button > span > svg > g > circle {
    fill: #89b4fa !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(2) > button > span > svg > g > path:nth-child(2) {
    fill: #89b4fa !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #f38ba8 !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #f38ba8 !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(3) > button > span > svg > g:nth-child(1) > g > rect {
    fill: #f38ba8 !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(4) > button > span > svg > g:nth-child(1) > g > path:nth-child(1) {
    fill: #cba6f7 !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(4) > button > span > svg > g:nth-child(1) > g > path:nth-child(2) {
    fill: #cba6f7 !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(5) > button > span > svg > g:nth-child(1) > g > g > path:nth-child(1) {
    fill: #89dceb !important;
    filter: brightness(85%) !important;
}
body.dark div._1OT67 > div > span > div > div > ul > li:nth-child(5) > button > span > svg > g:nth-child(1) > g > g > path:nth-child(2) {
    fill: #89dceb !important;
}
body.dark #app > div > div > div._2Ts6i._2xAQV > div > div > div.WM0_u > span > svg > path:nth-child(1) {
    fill: #585b70 !important;
}
body.dark #df9d3429-f0ef-48b5-b5eb-f9d27b2deba6 > path:nth-child(2) {
    fill: #89b4fa !important;
}
body.dark #side > div._3gYev > div > div > button > div._3xdht._1ZD3q > span > svg > path {
    fill: #89b4fa !important;
}

`)