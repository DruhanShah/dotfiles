// ==UserScript==
// @name    Userstyle (wikipedia.css)
// @include    *wikipedia.org/*
// ==/UserScript==
GM_addStyle(`@import url("https://python.catppuccin.com/pygments/catppuccin-variables.important.css");

* {
    font-family: "Operator Mono SSm Medium" !important;
}

:root {
    --ctp-rosewater: #dc8a78;
    --ctp-flamingo: #dd7878;
    --ctp-pink: #ea76cb;
    --ctp-mauve: #8839ef;
    --ctp-red: #d20f39;
    --ctp-maroon: #e64553;
    --ctp-peach: #fe640b;
    --ctp-yellow: #df8e1d;
    --ctp-green: #40a02b;
    --ctp-teal: #179299;
    --ctp-sky: #04a5e5;
    --ctp-sapphire: #209fb5;
    --ctp-blue: #1e66f5;
    --ctp-lavender: #7287fd;
    --ctp-text: #4c4f69;
    --ctp-subtext1: #5c5f77;
    --ctp-subtext0: #6c6f85;
    --ctp-overlay2: #7c7f93;
    --ctp-overlay1: #8c8fa1;
    --ctp-overlay0: #9ca0b0;
    --ctp-surface2: #acb0be;
    --ctp-surface1: #bcc0cc;
    --ctp-surface0: #ccd0da;
    --ctp-base: #eff1f5;
    --ctp-mantle: #e6e9ef;
    --ctp-crust: #dce0e8;
    --background-color-base: #eff1f5;
    /* maths */
    /* Fundraising banner */
}
:root body,
:root .vector-feature-zebra-design-enabled .vector-header-container .mw-header,
:root .vector-feature-zebra-design-enabled .mw-page-container,
:root .vector-feature-zebra-design-enabled .vector-pinned-container,
:root .vector-feature-zebra-design-enabled .vector-dropdown .vector-dropdown-content,
:root .uls-lcd,
:root .uls-search,
:root .uls-filtersuggestion,
:root #uls-settings-block.uls-settings-block--vector-2022.uls-settings-block--with-add-languages,
:root .app-badges .footer-sidebar-content,
:root .pure-form input[type="search"],
:root .suggestions-dropdown,
:root .cdx-menu,
:root .vector-header-container .mw-header,
:root .mw-page-container,
:root .vector-pinned-container,
:root .vector-header-container .vector-sticky-header,
:root .mw-mmv-image,
:root .mw-body,
:root .frb-form-wrapper {
    background-color: #eff1f5;
}
:root body,
:root .mw-heading,
:root h1,
:root h2,
:root h3,
:root h4,
:root h5,
:root h6,
:root .vector-feature-zebra-design-enabled body,
:root .vector-feature-zebra-design-enabled .vector-toc .vector-toc-list-item-active > .vector-toc-link,
:root .vector-feature-zebra-design-enabled .vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-expanded) > .vector-toc-link,
:root .vector-feature-zebra-design-enabled .vector-toc .vector-toc-list-item-active.vector-toc-level-1-active > .vector-toc-link,
:root .vector-menu-tabs .mw-list-item.selected a,
:root .vector-menu-tabs .mw-list-item.selected a:visited,
:root .cdx-button:enabled,
:root .cdx-button.cdx-button--fake-button--enabled,
:root .mw-footer li,
:root .vector-feature-zebra-design-enabled .vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-active) > .vector-toc-link,
:root .central-featured-lang small,
:root .footer-sidebar-text,
:root .other-project-tagline,
:root .site-license,
:root .search-container .js-langpicker-label,
:root .langlist > ul > li,
:root .suggestion-title,
:root .cdx-menu-item--enabled .cdx-menu-item__content,
:root .mwe-popups .mwe-popups-extract,
:root .mw-body-content .mw-number-text h3,
:root .vector-pinnable-element .vector-menu-heading,
:root .vector-toc .vector-toc-list-item-active > .vector-toc-link,
:root .vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-expanded) > .vector-toc-link,
:root .vector-toc .vector-toc-list-item-active.vector-toc-level-1-active > .vector-toc-link,
:root .uls-empty-state .uls-empty-state__header,
:root .uls-empty-state .uls-empty-state__desc,
:root .uls-no-results-found-title,
:root .mw-mmv-post-image,
:root .mw-mmv-credit,
:root .frb-form-wrapper,
:root #contentSub:not(:empty) {
    color: #4c4f69;
}
:root .mw-parser-output .fmbox {
    border-color: #acb0be !important;
    background-color: #eff1f5 !important;
}
:root .cdx-thumbnail__image {
    border-color: #4c4f69;
}
:root .mwe-popups .mwe-popups-extract[dir="ltr"]::after {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #ccd0da 50%);
}
:root table {
    background: #acb0be !important;
}
:root tr {
    background-color: #ccd0da !important;
}
:root th {
    background: #9ca0b0 !important;
    color: #e6e9ef !important;
}
:root .quotebox,
:root div.thumbinner {
    background-color: #ccd0da !important;
    border-color: #acb0be !important;
}
:root .navbox-group,
:root .infobox-label {
    color: #4c4f69 !important;
}
:root .cdx-button:enabled,
:root .cdx-text-input__input:enabled {
    color: #4c4f69;
    background-color: #eff1f5;
    border-color: #acb0be;
}
:root .cdx-button:enabled:hover,
:root .cdx-text-input__input:enabled:hover {
    background-color: #e6e9ef;
    border-color: #4c4f69;
    color: #4c4f69;
}
:root .vector-dropdown .vector-dropdown-content,
:root .header-container.header-chrome {
    background-color: #e6e9ef;
}
:root .skin-vector .uls-search {
    border-bottom-color: #acb0be;
}
:root .wikitable {
    background-color: #ccd0da;
    color: #4c4f69;
    border-color: #acb0be !important;
}
:root .oo-ui-textInputWidget,
:root .oo-ui-inputWidget-input {
    color: #4c4f69 !important;
    background-color: #bcc0cc !important;
    border-color: #acb0be !important;
}
:root .oo-ui-tagItemWidget.oo-ui-widget-disabled {
    color: #4c4f69;
    background-color: #9ca0b0;
    text-shadow: 0 0 0 #4c4f69;
    border-color: #ccd0da;
}
:root .oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
:root .mw-mmv-credit,
:root .mw-mmv-options-dialog-header,
:root .mw-mmv-options-text-header {
    color: #4c4f69;
}
:root .mw-mmv-options-text-body {
    color: #6c6f85;
}
:root .mw-ui-input:not(:disabled) {
    background-color: #ccd0da;
    color: #4c4f69;
    border-color: #acb0be;
}
:root .mw-ui-button {
    color: #e6e9ef;
    background-color: #1e66f5;
    border-color: #1e66f5;
}
:root .imbox-delete {
    border-color: #d20f39 !important;
    background-color: #ccd0da !important;
}
:root .imbox {
    background-color: #9ca0b0 !important;
    border-color: #fe640b !important;
}
:root .talkheader-help {
    background-color: #bcc0cc !important;
    border-color: #40a02b !important;
}
:root .assess,
:root .assess-NA,
:root .navbox-subgroup {
    background: #ccd0da !important;
    border-color: #bcc0cc !important;
}
:root .documentation,
:root .documentation-container,
:root .documentation-metadata {
    background-color: rgba(64, 160, 43, 0.15) !important;
}
:root .ambox,
:root .portalborder {
    background-color: #bcc0cc !important;
    border-color: #acb0be !important;
}
:root .navbox-title {
    color: #4c4f69 !important;
}
:root .mw-highlight pre {
    background: #ccd0da !important;
    border-width: 0;
    color: #4c4f69;
}
:root .mw-content-ltr.mw-highlight-lines pre,
:root .mw-content-ltr.content .mw-highlight-lines pre {
    box-shadow: inset 2.75em 0 0 #bcc0cc;
}
:root .mw-redirect {
    color: #40a02b !important;
}
:root .mbox-text {
    color: #4c4f69 !important;
}
:root .sidebar-above,
:root .p,
:root .o {
    color: #4c4f69 !important;
}
:root .ni,
:root .mw-templatedata-doc-muted {
    color: #5c5f77 !important;
}
:root .nv,
:root .nn {
    color: #1e66f5 !important;
}
:root .sidebar-above a span {
    color: #4c4f69 !important;
}
:root .sidebar-title-with-pretitle span {
    color: #4c4f69 !important;
}
:root .nt {
    color: #40a02b !important;
}
:root .nl {
    color: #179299 !important;
}
:root .ambox-style {
    border-left-color: #df8e1d !important;
}
:root .hidden-title {
    background-color: #40a02b !important;
    color: #e6e9ef !important;
}
:root .mw-mmv-post-image,
:root .mw-mmv-options-dialog {
    background-color: #eff1f5;
    color: #4c4f69;
}
:root .mw-mmv-image-metadata {
    background-color: #eff1f5;
    border-color: #eff1f5;
}
:root .mw-mmv-dialog-down-arrow {
    background-color: #eff1f5 !important;
}
:root .oo-ui-tagItemWidget.oo-ui-widget-enabled {
    color: #4c4f69;
    background-color: #9ca0b0 !important;
    border-color: #ccd0da;
}
:root ol.references li:target {
    background-color: #acb0be;
}
:root .mw-body-content .error {
    color: #d20f39;
}
:root .divbox-gray,
:root .infobox-above {
    background-color: #acb0be !important;
    border-color: #9ca0b0 !important;
}
:root .biota > * > tr > th {
    background-color: #df8e1d !important;
    color: #e6e9ef !important;
}
:root .cmbox {
    background-color: #1e66f5 !important;
}
:root .wikitable > * > tr > th {
    background-color: #bcc0cc;
    border-color: #acb0be;
}
:root .mw-searchresults-has-iw .iw-result__header a {
    color: #4c4f69;
}
:root .mw-search-result-data {
    color: #6c6f85;
}
:root .wikitable > * > tr > td {
    border-color: #acb0be;
}
:root .navbox-abovebelow {
    background-color: #7c7f93 !important;
    border-color: #7c7f93 !important;
}
:root .vector-feature-zebra-design-enabled .vector-pinnable-element .vector-menu-heading {
    color: #4c4f69;
    border-bottom-color: #ccd0da;
}
:root .mwe-popups .mwe-popups-container {
    background-color: #ccd0da;
}
:root .vector-pinnable-header-toggle-button {
    background-color: #ccd0da;
    color: #4c4f69;
}
:root .vector-pinnable-header-toggle-button:hover {
    background-color: #eff1f5;
}
:root .mw-parser-output .navbox-list {
    border-color: #ccd0da;
}
:root .pure-button-primary-progressive,
:root .pure-button-primary-progressive:hover {
    background-color: #1e66f5;
    border-color: #1e66f5;
}
:root .suggestion-link {
    border-bottom-color: #ccd0da;
}
:root .cdx-menu,
:root .skin-vector .uls-menu,
:root .suggestiodns-dropdown,
:root .cdx-search-input--has-end-button,
:root .vector-sticky-header,
:root .vector-sticky-header-context-bar,
:root .mw-heading2 {
    border-color: #acb0be;
}
:root .suggestion-link.active {
    background-color: rgba(30, 102, 245, 0.2);
}
:root .suggestion-link.active .suggestion-title {
    color: #1e66f5;
}
:root .cdx-menu-item--enabled.cdx-menu-item--highlighted {
    background-color: rgba(30, 102, 245, 0.2);
}
:root .mw-mmv-post-image,
:root .cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-primary.cdx-button--action-progressive .cdx-button__icon {
    background-color: #dce0e8;
}
:root .cdx-text-input__input:enabled::placeholder,
:root .cdx-text-input__input:enabled ~ .cdx-text-input__icon-vue,
:root .skin-vector .uls-languagefilter,
:root .skin-vector .uls-lcd-region-title,
:root .suggestion-description,
:root .cdx-menu-item--enabled .cdx-menu-item__text__description,
:root .mw-number-text,
:root .boilerplate > div:nth-child(3) > span:nth-child(1),
:root .boilerplate > div:nth-child(4) > span:nth-child(2) {
    color: #6c6f85 !important;
}
:root input:hover + .cdx-button.cdx-button--action-progressive {
    background-color: rgba(30, 102, 245, 0.125);
}
:root #pt-notifications-alert .mw-echo-unseen-notifications::after {
    background-color: #d20f39 !important;
}
:root #pt-notifications-notice .mw-echo-unseen-notifications::after {
    background-color: #1e66f5 !important;
}
:root a,
:root .mw-parser-output a.external:visited {
    color: #1e66f5;
}
:root a:visited,
:root .mw-parser-output a.external:visited:visited {
    color: #8839ef;
}
:root a.new,
:root .mw-parser-output .cs1-visible-error,
:root .vector-menu-tabs .mw-list-item.new a,
:root .mw-plusminus-neg {
    color: #d20f39;
}
:root #searchInput {
    color: #4c4f69;
}
:root #searchInput:hover {
    border-color: #acb0be;
}
:root #searchInput:focus {
    border-color: #1e66f5;
}
:root .pure-form input[type="search"] {
    border-color: #acb0be;
    box-shadow: inset 0 0 0 1px #acb0be;
}
:root #pt-notifications-alert .mw-echo-notifications-badge::after,
:root #pt-notifications-notice .mw-echo-notifications-badge::after,
:root .mw-echo-notification-badge-nojs::after {
    border-color: #dce0e8;
    background-color: #1e66f5;
    color: #eff1f5;
}
:root h2 {
    border-bottom-color: #acb0be;
}
:root .mw-footer {
    border-top-color: #acb0be;
}
:root .bookshelf {
    border-top-color: #ccd0da;
    box-shadow: 0 -1px 0 #ccd0da;
}
:root body.ns-talk .mw-parser-output .mp-toolbox,
:root .mw-parser-output .tmbox,
:root #talkheader {
    border-color: rgba(223, 142, 29, 0.2) !important;
    background-color: rgba(223, 142, 29, 0.1) !important;
}
:root body.ns-talk .mw-parser-output .mp-toolbox-daily th {
    border-color: rgba(223, 142, 29, 0.8) !important;
    background-color: rgba(223, 142, 29, 0.2) !important;
}
:root .fn.org {
    color: #1e66f5;
}
:root .mw-parser-output .mp-toolbox-daily th,
:root .mw-parser-output td.mp-toolbox-tfl-not {
    background: rgba(223, 142, 29, 0.2) !important;
    border-color: rgba(223, 142, 29, 0.2) !important;
}
:root body.ns-talk .mw-parser-output .mp-toolbox-daily {
    border-color: rgba(223, 142, 29, 0.2) !important;
    background: none !important;
}
:root .mw-parser-output tr + tr > .navbox-list,
:root .mw-parser-output tr + tr > .navbox-group {
    border-top-color: #ccd0da;
}
:root .ext-phonos-PhonosButton.oo-ui-buttonElement-frameless.oo-ui-buttonWidget > .oo-ui-buttonElement-button:hover {
    background-color: rgba(30, 102, 245, 0.2);
}
:root .styled-select:hover {
    background-color: #ccd0da;
}
:root .lang-list-button,
:root .lang-list-button:hover {
    background-color: #eff1f5;
    border-color: #bcc0cc;
    outline-color: #eff1f5;
}
:root .cdx-typeahead-search__search-footer__icon.cdx-icon {
    color: #6c6f85;
}
:root .vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-active) > .vector-toc-link {
    color: #4c4f69;
}
:root .lang-list-active .lang-list-button {
    background-color: #eff1f5;
    border-color: #bcc0cc;
    outline-color: #eff1f5;
}
:root .lang-list-button:focus {
    box-shadow: inset 0 0 0 1px #1e66f5;
}
:root .lang-list-border {
    background-color: #bcc0cc;
}
:root .infobox-header {
    background-color: #bcc0cc !important;
    color: #4c4f69 !important;
}
:root .wikitable > * > tr > td,
:root .wikitable > * > tr > th {
    background-color: #ccd0da;
    color: #4c4f69;
    border-color: #acb0be;
}
:root td[style*="background-color"],
:root td[style*="background-color"] * {
    color: #dce0e8 !important;
}
:root #toc-Services > a:nth-child(1) > div:nth-child(1) {
    color: #4c4f69 !important;
}
:root .cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet.cdx-button--action-progressive,
:root .vector-menu-tabs .mw-list-item a,
:root .vector-feature-zebra-design-enabled .vector-toc .vector-toc-link,
:root .mw-parser-output a.extiw,
:root .mw-parser-output a.external,
:root .mw-collapsible-toggle-default .mw-collapsible-text,
:root .vector-feature-zebra-design-enabled .vector-pinnable-element .mw-list-item a,
:root .vector-feature-zebra-design-enabled .vector-dropdown-content .mw-list-item a,
:root .vector-feature-zebra-design-enabled .vector-pinnable-element .mw-list-item a:not(.mw-selflink):visited,
:root .vector-feature-zebra-design-enabled .vector-dropdown-content .mw-list-item a:not(.mw-selflink):visited,
:root .uls-language-block a,
:root .lang-list-button,
:root .fancycaptcha-reload,
:root #pt-userpage-2 a:not(.mw-selflink),
:root .vector-pinnable-element .mw-list-item a,
:root .vector-pinnable-element .mw-list-item a:not(.mw-selflink):visited,
:root .vector-toc .vector-toc-link,
:root .oo-ui-buttonElement-frameless.oo-ui-widget-enabled.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button,
:root .oo-ui-buttonElement-frameless.oo-ui-widget-enabled.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button:hover,
:root .vector-dropdown-content .mw-list-item a,
:root .vector-dropdown-content .mw-list-item a:not(.mw-selflink):visited {
    color: #1e66f5;
}
:root .cdx-button:enabled.cdx-button--weight-primary.cdx-button--action-progressive,
:root .cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-primary.cdx-button--action-progressive,
:root .mw-ui-button.mw-ui-progressive:not(:disabled),
:root .mw-ui-button.mw-ui-progressive:not(:disabled):hover {
    background-color: #1e66f5;
    border-color: #1e66f5;
    color: #eff1f5;
}
:root .mw-message-box-warning,
:root .boilerplate {
    border-color: #1e66f5 !important;
    background-color: rgba(30, 102, 245, 0.25) !important;
    color: #4c4f69;
}
:root .vector-feature-zebra-design-enabled .vector-sticky-pinned-container::after,
:root .vector-sticky-pinned-container::after {
    background: none;
}
:root .vector-feature-zebra-design-enabled .vector-pinnable-header-toggle-button {
    background-color: #ccd0da;
    color: #4c4f69;
}
:root .vector-feature-zebra-design-enabled .vector-pinnable-header-toggle-button:hover {
    background-color: #eff1f5;
}
:root .vector-feature-zebra-design-enabled .vector-pinnable-header,
:root .vector-pinnable-header,
:root .vector-pinnable-element .vector-menu-heading {
    border-bottom-color: #ccd0da;
}
:root hr {
    border-bottom-color: #acb0be;
}
:root .central-featured-lang strong:hover,
:root .link-box:hover,
:root .central-featured-lang :hover,
:root .other-project-link:hover,
:root .lang-list-container {
    background-color: #ccd0da;
}
:root .vector-page-toolbar-container {
    box-shadow: 0 1px #bcc0cc;
}
:root .mw-parser-output .navbox-even {
    background-color: #bcc0cc;
}
:root .vector-feature-zebra-design-enabled .vector-page-titlebar::after,
:root .mw-parser-output .wikipedia-languages-prettybars,
:root .vector-page-titlebar::after {
    background-color: #acb0be !important;
}
:root table.expanded:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) {
    background-color: rgba(30, 102, 245, 0.2) !important;
}
:root .client-js .mw-content-ltr .mw-editsection-bracket:first-of-type,
:root .client-js .mw-content-ltr .mw-editsection-bracket:not(:first-of-type),
:root .mw-collapsible-toggle-default::before,
:root .mw-collapsible-toggle-default::after {
    color: #5c5f77;
}
:root .infobox,
:root .mw-parser-output .navbox,
:root .catlinks,
:root .mw-parser-output #mp-topbanner,
:root .mw-parser-output .sidebar,
:root .fancycaptcha-captcha-container,
:root .fancycaptcha-captcha-and-reload,
:root .cdx-checkbox__icon,
:root .mw-message-box,
:root .uls-menu .uls-no-results-view .uls-no-found-more,
:root .client-js .vector-below-page-title .vector-page-titlebar-toc > label:nth-child(2),
:root .mw-parser-output .ombox,
:root code,
:root .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
:root .mw-mmv-label,
:root #page-secondary-actions > a,
:root .mw-parser-output .ambox,
:root td[class="sidebar-navbar"],
:root textarea,
:root .mw-parser-output .side-box {
    background-color: #ccd0da !important;
    color: #4c4f69 !important;
    border-color: #acb0be !important;
}
:root #pagehistory li.selected {
    background-color: #ccd0da !important;
    color: #4c4f69 !important;
    border-color: #acb0be !important;
    outline-color: #acb0be !important;
}
:root .cdx-checkbox__icon {
    border-color: #1e66f5 !important;
}
:root .fancycaptcha-captcha-container .mw-ui-inputو .mw-ui-input:not(:disabled) {
    background-color: #eff1f5 !important;
    color: #4c4f69 !important;
    border-color: #bcc0cc;
}
:root .mw-ui-input:not(:disabled),
:root .mw-ui-button:not(:disabled) {
    background-color: #eff1f5 !important;
    color: #4c4f69 !important;
    border-color: #bcc0cc !important;
}
:root .mw-parser-output .module-shortcutboxplain {
    background-color: #eff1f5 !important;
    color: #4c4f69 !important;
    border-color: #acb0be;
}
:root .sidebar-pretitle,
:root .sidebar-title-with-pretitle,
:root .sidebar-list-title {
    background-color: rgba(30, 102, 245, 0.2) !important;
}
:root .mw-parser-output #mp-bottom,
:root .mw-parser-output .sidebar-collapse .sidebar-below {
    border-color: #acb0be;
}
:root .lang-list-content,
:root .bookshelf .text {
    background-color: #ccd0da;
}
:root .mw-parser-output #mp-bottom .mp-h2,
:root .uls-language-block > ul > li:hover {
    background: #ccd0da;
    border-color: #acb0be;
}
:root figure[typeof~="mw:File/Thumb"] {
    background-color: #e6e9ef !important;
    color: #4c4f69 !important;
    border-top-color: #acb0be;
    border-left-color: #acb0be;
    border-right-color: #acb0be;
}
:root figure[typeof~="mw:File/Thumb"] > figcaption {
    background-color: #e6e9ef !important;
    color: #4c4f69 !important;
    border-bottom-color: #acb0be;
    border-left-color: #acb0be;
    border-right-color: #acb0be;
}
:root figure[typeof~="mw:File/Thumb"] > :not(figcaption) .mw-file-element {
    color: #acb0be !important;
    border-color: #acb0be;
}
:root .mw-parser-output #mp-left,
:root .mw-parser-output #mp-left .mp-h2,
:root th[class="sidebar-title"] {
    background-color: rgba(64, 160, 43, 0.1) !important;
    border-color: rgba(64, 160, 43, 0.2) !important;
}
:root .mw-plusminus-pos {
    color: #40a02b !important;
}
:root .mw-parser-output #mp-right,
:root .mw-parser-output #mp-right .mp-h2 {
    background-color: rgba(30, 102, 245, 0.1) !important;
    border-color: rgba(30, 102, 245, 0.2) !important;
}
:root .mw-parser-output #mp-lower,
:root .mw-parser-output #mp-lower .mp-h2 {
    background-color: rgba(136, 57, 239, 0.1) !important;
    border-color: rgba(136, 57, 239, 0.2) !important;
}
:root .mw-collapsible-toggle-default:active .mw-collapsible-text {
    color: #fe640b;
}
:root .mw-parser-output #mp-middle,
:root .mw-parser-output #mp-middle .mp-h2 {
    background-color: rgba(234, 118, 203, 0.1) !important;
    border-color: rgba(234, 118, 203, 0.2) !important;
}
:root .mw-parser-output .navbox-title,
:root .summary,
:root .infobox > tbody:nth-child(1) > tr:nth-child(4) > th:nth-child(1),
:root .infobox > tbody:nth-child(1) > tr:nth-child(6) > th:nth-child(1) {
    background-color: rgba(30, 102, 245, 0.2) !important;
}
:root .infobox > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) {
    background-color: #bcc0cc !important;
}
:root .mw-parser-output .navbox-group,
:root table.expanded:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3),
:root table.expanded:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1),
:root table.expanded:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1),
:root table.nowraplinks:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1),
:root table.nowraplinks:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1),
:root table.nowraplinks:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1),
:root .navbox-abovebelow {
    background-color: #bcc0cc !important;
}
:root .mw-content-ltr > table:nth-child(20) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) {
    border-color: #acb0be !important;
    background-color: #ccd0da !important;
}
:root [style="color:#02a64f;line-height:initial"] {
    color: #40a02b !important;
}
:root [style="color:#f78e1e;line-height:initial"] {
    color: #fe640b !important;
}
:root [style="color:#77278b;line-height:initial"] {
    color: #8839ef !important;
}
:root [style="color:#87746a;line-height:initial"] {
    color: #e64553 !important;
}
:root [style="color:#009aC8;line-height:initial"] {
    color: #04a5e5 !important;
}
:root [style="color:#ffd520;line-height:initial"] {
    color: #df8e1d !important;
}
:root [style="color:#0060a9;line-height:initial"] {
    color: #1e66f5 !important;
}
:root table.nowraplinks:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1),
:root .navbox-list-with-group.navbox-list.navbox-odd {
    background-color: #ccd0da !important;
}
:root .mw-parser-output tr + tr > .navbox-abovebelow {
    border-color: #eff1f5;
}
:root .catlinks li {
    border-left-color: #acb0be;
}
:root .frb-btn,
:root .frb-label {
    color: #4c4f69;
    background-color: #eff1f5;
    border-color: #9ca0b0;
}
:root input[type="radio"]:checked + .frb-btn,
:root input[type="radio"]:checked + .frb-label,
:root .frb-btn:hover,
:root .frb-label:hover {
    color: #eff1f5;
    background-color: #1e66f5;
    border-color: #1e66f5;
}
:root #frb-main {
    --wmui-base100: #eff1f5;
    --wmui-base0: #4c4f69;
    --frb-body: #4c4f69;
    --frb-muted: #6c6f85;
    --frb-link: #6c6f85;
    --frb-link-hover: #4c4f69;
    --frb-error: #d20f39;
    --frb-submit: #1e66f5;
    --frb-submit-hover: #0a4ed6;
}
:root #frb-main svg.frb-message-icon > g circle {
    fill: #df8e1d;
}
:root #frb-main svg.frb-message-icon > g path {
    fill: #eff1f5;
}
:root #frb-main .frb-message {
    background-color: #40a02b;
    border-color: #40a02b;
}
:root #frb-main .frb-message::after {
    border-left-color: #40a02b;
}
:root #frb-inline {
    --wmui-base100: #eff1f5;
    --frb-primary: #d20f39;
    --frb-link: #1e66f5;
    --frb-muted: #6c6f85;
    --frb-muted-hover: #4c4f69;
    --frb-body: #4c4f69;
    --frb-error: #d20f39;
    --wmui-red-dark: #d20f39;
    --wmui-red-light: #d20f39;
    --wmui-green-dark: #40a02b;
    --wmui-green-light: #40a02b;
    --frb-submit: #1e66f5;
    --frb-submit-hover: #0a4ed6;
}
:root #frb-inline .frb-inline-topbar {
    color: #4c4f69;
}
:root #frb-inline .frb-inline-topbar svg circle {
    fill: #df8e1d;
}
:root #frb-inline .frb-inline-topbar svg path {
    fill: #eff1f5;
}
:root #frb-inline .frb-btn-cta {
    background-color: #1e66f5 !important;
    border-color: #1e66f5 !important;
    color: #eff1f5 !important;
}
:root #frb-inline .frb-btn-simple {
    color: #1e66f5 !important;
}
:root #frb-inline .frb-monthly-pitch {
    color: #1e66f5;
}
:root #frb-inline .frb-optin-no-prompt {
    color: #eff1f5;
}
:root #frb-inline .frb-cta-hiddenmessage {
    background-color: #d20f39;
    color: #eff1f5;
}
:root #frb-nag {
    --frb-primary-light: #eff1f5;
    --frb-body: #4c4f69;
    --wmui-accent-dark: #6c6f85;
    --frb-link-hover: #4c4f69;
}
:root #frb-nag span.frb-donate-button {
    color: #eff1f5;
    background-color: #d20f39;
}
:root #frb-nag span.frb-donate-button:hover {
    color: #eff1f5;
    background-color: #a20c2c;
}
:root #frb-nag svg.frb-icon-close > g {
    stroke: #6c6f85;
}
:root #frb-nag svg.frb-icon-close > g:hover {
    stroke: #4c4f69;
}
:root .frb-nag:not(#frb-nag) {
    --frb-message-background: #eff1f5;
    --frb-message-border: #d20f39;
    --frb-message: #4c4f69;
    border-color: #ccd0da;
    background: #eff1f5;
    box-shadow: none;
}
:root .frb-nag:not(#frb-nag) #nag-rml-btn {
    background-color: transparent;
    border-color: transparent;
    color: #6c6f85;
}
:root .frb-nag:not(#frb-nag) #nag-yes-btn {
    background-color: #1e66f5;
    border-color: #1e66f5;
    color: #eff1f5;
}
:root .frb-btn-cta-label::after {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%206.7%2012%22%3E%3Cpath%20d%3D%22M.9%200%200%20.9%205.1%206%200%2011.1l.9.9%205.5-5.5c.3-.3.3-.7%200-.9z%22%20fill%3D%22%23eff1f5%22/%3E%3C/svg%3E") !important;
}
:root .frb-back {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2016%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%281%201%29%22%3E%3Cpath%20stroke%3D%22%236c6f85%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.778%22%20d%3D%22M7.181%2013.285.753%207%207.181.715%22/%3E%3Crect%20fill%3D%22%236c6f85%22%20width%3D%2218.182%22%20height%3D%221.778%22%20x%3D%22.818%22%20y%3D%226.111%22%20rx%3D%22.889%22/%3E%3C/g%3E%3C/svg%3E") !important;
}
:root .frb-close {
    background-image: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2010%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke%3D%22%236c6f85%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M1%201%20l8%208%20M9%201%20l-8%208%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;
}
:root .sprite {
    background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg%20width%3D%22176%22%20height%3D%22811%22%20viewBox%3D%220%200%20176%20811%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Csvg%20width%3D%2247%22%20height%3D%2247%22%20viewBox%3D%22-306%20-517%20612%20822%22%20id%3D%22Commons-logo_sister%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22aa%22%3E%3Ccircle%20r%3D%22298%22/%3E%3C/clipPath%3E%3C/defs%3E%3Ccircle%20r%3D%22100%22%20fill%3D%22%23900%22/%3E%3Cg%20fill%3D%22%23069%22%3E%3Cg%20id%3D%22ab%22%20clip-path%3D%22url%28%23aa%29%22%3E%3Cpath%20d%3D%22M-11%20180v118h22V180%22/%3E%3Cpath%20d%3D%22m-43%20185%2043-75%2043%2075%22/%3E%3C/g%3E%3Cg%20id%3D%22ac%22%3E%3Cuse%20xlink%3Ahref%3D%22%23ab%22%20transform%3D%22rotate%2845%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23ab%22%20transform%3D%22rotate%2890%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23ab%22%20transform%3D%22rotate%28135%29%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23ac%22%20transform%3D%22scale%28-1%201%29%22/%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23069%22%20stroke-width%3D%2284%22%20d%3D%22M-181.02-181.02a256%20256%200%201%200%20362.04%200c-70.71-70.71-177.49-34.65-198.7-190.21%22/%3E%3Cpath%20d%3D%22M-23-515s-36%20135-80%20185%20116-62%20170-5-90-180-90-180%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20version%3D%221.1%22%20id%3D%22MediaWiki-logo_sister%22%20viewBox%3D%22-1%20-1%2042%2042%22%20y%3D%2247%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%20id%3D%22bdefs11%22%3E%3ClinearGradient%20id%3D%22bgradient%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20x2%3D%22100%22%20y1%3D%22100%22%20y2%3D%220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a00b2%22%20id%3D%22bstop2%22/%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22red%22%20id%3D%22bstop4%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fffc00%22%20id%3D%22bstop6%22/%3E%3C/linearGradient%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient923%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient925%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient927%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient929%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient931%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient933%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient935%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient937%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient939%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient941%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient943%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient945%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient947%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient949%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient951%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient953%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient955%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient957%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient959%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient961%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient963%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient965%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient967%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient969%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23bgradient%22%20id%3D%22blinearGradient971%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%22%20y1%3D%22100%22%20x2%3D%22100%22%20y2%3D%220%22/%3E%3Cstyle%20id%3D%22bstyle9%22%3E.bpetal%7Bopacity%3A.65%7D%3C/style%3E%3C/defs%3E%3Cg%20id%3D%22bpetals%22%20transform%3D%22matrix%28.4%200%200%20.4%200%20.106%29%22%20fill%3D%22url%28%23blinearGradient971%29%22%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M33.6%2014.8a16.94%2016.94%200%200%200%203.116%2011.142%2011.46%2011.46%200%200%200%206.858%204.3%203.03%203.03%200%200%200%202.385-.713%2011.92%2011.92%200%200%200%203.634-10.837c-1.257-7.54-6.19-12.43-12.4-17A32.5%2032.5%200%200%200%2033.6%2014.8%22%20id%3D%22bpath13%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient923%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M25.117%2020.232a16.94%2016.94%200%200%200%205.893%209.956%2011.46%2011.46%200%200%200%207.738%202.381%203.03%203.03%200%200%200%202.119-1.306%2011.92%2011.92%200%200%200%20.705-11.409C38.406%2012.9%2032.376%209.449%2025.2%206.642a32.5%2032.5%200%200%200-.083%2013.59%22%20id%3D%22bpath15%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient925%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M18.329%2027.677a16.94%2016.94%200%200%200%208.271%208.092%2011.46%2011.46%200%200%200%208.09.3%203.03%203.03%200%200%200%201.709-1.81%2011.92%2011.92%200%200%200-2.271-11.2c-4.859-5.9-11.576-7.67-19.237-8.523a32.5%2032.5%200%200%200%203.438%2013.141%22%20id%3D%22bpath17%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient927%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M13.7%2036.626A16.94%2016.94%200%200%200%2023.781%2042.3a11.46%2011.46%200%200%200%207.891-1.807%203.03%203.03%200%200%200%201.182-2.193%2011.92%2011.92%200%200%200-5.093-10.233c-6.221-4.443-13.167-4.412-20.787-3.254A32.5%2032.5%200%200%200%2013.7%2036.626%22%20id%3D%22bpath19%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient929%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M11.543%2046.468a16.94%2016.94%200%200%200%2011.208%202.873%2011.46%2011.46%200%200%200%207.155-3.788%203.03%203.03%200%200%200%20.575-2.422%2011.92%2011.92%200%200%200-7.568-8.566c-7.16-2.681-13.861-.854-20.923%202.235a32.5%2032.5%200%200%200%209.553%209.668%22%20id%3D%22bpath21%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient931%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M12.008%2056.532a16.94%2016.94%200%200%200%2011.569-.126%2011.46%2011.46%200%200%200%205.931-5.51%203.03%203.03%200%200%200-.072-2.488%2011.92%2011.92%200%200%200-9.527-6.315C12.3%2041.356%206.3%2044.855.279%2049.669a32.5%2032.5%200%200%200%2011.729%206.863%22%20id%3D%22bpath23%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient933%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M15.062%2066.134A16.94%2016.94%200%200%200%2026.2%2063.018a11.46%2011.46%200%200%200%204.3-6.858%203.03%203.03%200%200%200-.713-2.385%2011.92%2011.92%200%200%200-10.837-3.634c-7.54%201.257-12.43%206.19-17%2012.4a32.5%2032.5%200%200%200%2013.112%203.593%22%20id%3D%22bpath25%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient935%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M20.5%2074.618a16.94%2016.94%200%200%200%209.956-5.893%2011.46%2011.46%200%200%200%202.381-7.738%203.03%203.03%200%200%200-1.306-2.119%2011.93%2011.93%200%200%200-11.409-.705c-6.958%203.166-10.4%209.2-13.212%2016.376a32.5%2032.5%200%200%200%2013.59.079%22%20id%3D%22bpath27%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient937%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M27.943%2081.406a16.94%2016.94%200%200%200%208.092-8.269%2011.46%2011.46%200%200%200%20.3-8.09%203.03%203.03%200%200%200-1.81-1.709%2011.92%2011.92%200%200%200-11.2%202.271c-5.9%204.859-7.67%2011.576-8.523%2019.237a32.5%2032.5%200%200%200%2013.141-3.44%22%20id%3D%22bpath29%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient939%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M36.891%2086.035a16.94%2016.94%200%200%200%205.676-10.082%2011.46%2011.46%200%200%200-1.807-7.891%203.03%203.03%200%200%200-2.191-1.182%2011.92%2011.92%200%200%200-10.233%205.094c-4.443%206.221-4.412%2013.167-3.254%2020.787a32.5%2032.5%200%200%200%2011.809-6.726%22%20id%3D%22bpath31%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient941%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M46.733%2088.191a16.94%2016.94%200%200%200%202.873-11.207%2011.46%2011.46%200%200%200-3.788-7.155%203.03%203.03%200%200%200-2.422-.575%2011.92%2011.92%200%200%200-8.566%207.568c-2.681%207.159-.854%2013.86%202.237%2020.921a32.5%2032.5%200%200%200%209.666-9.552%22%20id%3D%22bpath33%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient943%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M56.8%2087.726a16.94%2016.94%200%200%200-.125-11.569%2011.46%2011.46%200%200%200-5.511-5.931%203.03%203.03%200%200%200-2.488.072%2011.92%2011.92%200%200%200-6.315%209.528c-.737%207.609%202.762%2013.609%207.576%2019.629A32.5%2032.5%200%200%200%2056.8%2087.726%22%20id%3D%22bpath35%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient945%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M66.4%2084.672a16.94%2016.94%200%200%200-3.116-11.142%2011.46%2011.46%200%200%200-6.858-4.3%203.03%203.03%200%200%200-2.385.713%2011.92%2011.92%200%200%200-3.634%2010.837c1.257%207.54%206.19%2012.43%2012.4%2017A32.5%2032.5%200%200%200%2066.4%2084.672%22%20id%3D%22bpath37%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient947%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M74.883%2079.237a16.94%2016.94%200%200%200-5.893-9.956%2011.46%2011.46%200%200%200-7.738-2.381%203.03%203.03%200%200%200-2.119%201.306%2011.92%2011.92%200%200%200-.705%2011.409c3.166%206.958%209.2%2010.4%2016.375%2013.212a32.5%2032.5%200%200%200%20.08-13.59%22%20id%3D%22bpath39%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient949%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M81.671%2071.792A16.94%2016.94%200%200%200%2073.4%2063.7a11.46%2011.46%200%200%200-8.09-.3%203.03%203.03%200%200%200-1.708%201.81%2011.92%2011.92%200%200%200%202.271%2011.2c4.859%205.9%2011.576%207.67%2019.237%208.523a32.5%2032.5%200%200%200-3.439-13.141%22%20id%3D%22bpath41%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient951%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M86.3%2062.843a16.94%2016.94%200%200%200-10.082-5.676%2011.46%2011.46%200%200%200-7.891%201.807%203.03%203.03%200%200%200-1.182%202.191A11.92%2011.92%200%200%200%2072.239%2071.4c6.221%204.443%2013.167%204.412%2020.787%203.254A32.5%2032.5%200%200%200%2086.3%2062.843%22%20id%3D%22bpath43%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient953%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M88.457%2053a16.94%2016.94%200%200%200-11.207-2.873%2011.46%2011.46%200%200%200-7.155%203.788%203.03%203.03%200%200%200-.574%202.422%2011.93%2011.93%200%200%200%207.567%208.563c7.158%202.681%2013.86.854%2020.921-2.237A32.5%2032.5%200%200%200%2088.457%2053%22%20id%3D%22bpath45%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient955%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M87.992%2042.936a16.94%2016.94%200%200%200-11.569.126%2011.46%2011.46%200%200%200-5.931%205.511%203.03%203.03%200%200%200%20.072%202.488%2011.92%2011.92%200%200%200%209.527%206.315c7.609.737%2013.609-2.762%2019.63-7.576a32.5%2032.5%200%200%200-11.729-6.864%22%20id%3D%22bpath47%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient957%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M84.938%2033.335A16.94%2016.94%200%200%200%2073.8%2036.451a11.46%2011.46%200%200%200-4.3%206.858%203.03%203.03%200%200%200%20.714%202.385%2011.92%2011.92%200%200%200%2010.837%203.634c7.54-1.257%2012.43-6.19%2017-12.4a32.5%2032.5%200%200%200-13.113-3.593%22%20id%3D%22bpath49%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient959%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M79.5%2024.851a16.94%2016.94%200%200%200-9.956%205.893%2011.46%2011.46%200%200%200-2.381%207.738%203.03%203.03%200%200%200%201.309%202.118%2011.92%2011.92%200%200%200%2011.409.705c6.958-3.166%2010.4-9.2%2013.212-16.375a32.5%2032.5%200%200%200-13.593-.079%22%20id%3D%22bpath51%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient961%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M72.057%2018.063a16.94%2016.94%200%200%200-8.092%208.269%2011.46%2011.46%200%200%200-.3%208.09%203.03%203.03%200%200%200%201.81%201.709%2011.92%2011.92%200%200%200%2011.2-2.271c5.9-4.859%207.67-11.576%208.523-19.237a32.5%2032.5%200%200%200-13.141%203.44%22%20id%3D%22bpath53%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient963%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M63.109%2013.434a16.94%2016.94%200%200%200-5.676%2010.082%2011.46%2011.46%200%200%200%201.807%207.891%203.03%203.03%200%200%200%202.191%201.182A11.92%2011.92%200%200%200%2071.664%2027.5c4.443-6.221%204.412-13.167%203.254-20.787a32.5%2032.5%200%200%200-11.809%206.721%22%20id%3D%22bpath55%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient965%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M53.267%2011.278a16.94%2016.94%200%200%200-2.873%2011.207%2011.46%2011.46%200%200%200%203.788%207.155%203.03%203.03%200%200%200%202.422.575%2011.92%2011.92%200%200%200%208.566-7.568c2.681-7.159.854-13.86-2.237-20.921a32.5%2032.5%200%200%200-9.666%209.552%22%20id%3D%22bpath57%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient967%29%22/%3E%3Cpath%20class%3D%22bpetal%22%20d%3D%22M43.2%2011.743a16.94%2016.94%200%200%200%20.126%2011.569%2011.46%2011.46%200%200%200%205.511%205.931%203.03%203.03%200%200%200%202.488-.072%2011.92%2011.92%200%200%200%206.315-9.528c.739-7.609-2.76-13.609-7.574-19.629A32.5%2032.5%200%200%200%2043.2%2011.743%22%20id%3D%22bpath59%22%20opacity%3D%22.65%22%20fill%3D%22url%28%23blinearGradient969%29%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%2237%22%20height%3D%2237%22%20viewBox%3D%22-1%20-1%20902%20902%22%20id%3D%22Meta-Wiki-logo_sister%22%20y%3D%2289%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23396%22%20d%3D%22M316.6%20181.29a298.2%20298.2%200%200%200-84.9%2062.92c11.84.23%2023.75-.3%2035.67-1.64a324%20324%200%200%201%2049.24-61.28zm28.16-12.21c25.37-1.2%2050.57.53%2075.13%205.15a273%20273%200%200%200%2023.77-24.2%20298.2%20298.2%200%200%200-98.9%2019.05m-15.58%2027.53a303.4%20303.4%200%200%200-35.33%2041.7%20275.4%20275.4%200%200%200%2047.07-14.63zm18.37-7.9%2011.62%2026.78a274%20274%200%200%200%2040.07-24.47%20303.6%20303.6%200%200%200-51.69-2.31m121.5-38.12a293.5%20293.5%200%200%201-25.66%2028.98%20323.1%20323.1%200%200%201%20123.72%2063.92%20429%20429%200%200%200%2036.36-51.27%20301.65%20301.65%200%200%200-134.42-41.63M215.02%20263.43a301.5%20301.5%200%200%200-59.17%20127.59%20428.5%20428.5%200%200%200%2063.1%207.44%20323%20323%200%200%201%2036.4-134.74c-13.5.84-26.99.72-40.33-.29m210.67-67.8a292.5%20292.5%200%200%201-58.6%2038.15l53.6%20123.56a426.7%20426.7%200%200%200%20133.39-98.8%20302.9%20302.9%200%200%200-128.4-62.92zM279.2%20261.2a302.6%20302.6%200%200%200-40.38%20137.63%20427.1%20427.1%200%200%200%20163.6-33.37l-53.54-123.45a293.5%20293.5%200%200%201-69.68%2019.2zm341.09-58.16a449%20449%200%200%201-38.22%2053.7%20316.7%20316.7%200%200%201%2072.95%20104.27c3.64%208.38%206.9%2016.83%209.76%2025.33a594.5%20594.5%200%200%200%2055.62-66.22%20298.1%20298.1%200%200%200-100.11-117.08M152.54%20410.7a298.2%20298.2%200%200%200%2019.74%20152.77%20595%20595%200%200%200%2086.35%203.21%20320%20320%200%200%201-13.7-27.78%20316.7%20316.7%200%200%201-26.21-120.45%20449%20449%200%200%201-66.18-7.75m416.42-138.93a446.2%20446.2%200%200%201-140.3%20103.9l59%20136.01a594.5%20594.5%200%200%200%20161.17-109.5%20301%20301%200%200%200-12.16-33.2%20297.6%20297.6%200%200%200-67.71-97.22zm-330.42%20147c.83%2037.6%208.83%2075.62%2024.69%20112.2a301%20301%200%200%200%2017.69%2034.49%20595.4%20595.4%200%200%200%20188.46-45.64l-59-136.01a446.5%20446.5%200%200%201-171.84%2034.96m490.98-77.6a614.4%20614.4%200%200%201-58.28%2066.97%20317.6%20317.6%200%200%201-.26%20159.46%20737%20737%200%200%200%2073.57-60.8%20298.3%20298.3%200%200%200-15.03-165.64zM181.8%20584.47A298.36%20298.36%200%200%200%20294.65%20706.6a736%20736%200%200%200%2092.83-13.43%20317.8%20317.8%200%200%201-117.15-107.03%20614%20614%200%200%201-88.53-1.66zm472.75-160.3A614.1%20614.1%200%200%201%20495.64%20530.1l48.33%20111.4a745%20745%200%200%200%20100.95-55.77c0-.03.02-.06.03-.08a298.9%20298.9%200%200%200%209.6-161.47zM293.27%20584.5a299.2%20299.2%200%200%200%20124.77%20101.55%20746.6%20746.6%200%200%200%20107.63-36.47l-48.33-111.4a615.2%20615.2%200%200%201-184.07%2046.32m442.24-42.63a756%20756%200%200%201-74.23%2056.92%20324.85%20324.85%200%200%201-78.13%20120.01c75.09-37.13%20128.26-102.14%20152.36-176.93m-408.99%20181.5c70.12%2031.63%20152.1%2036.35%20228.88%207.47a324.65%20324.65%200%200%201-138.66-23.92%20757%20757%200%200%201-90.22%2016.44zm305.27-105.72a766%20766%200%200%201-79.84%2042.26l18.8%2043.35a303.9%20303.9%200%200%200%2061.04-85.6zm-181.73%2080.33a303.9%20303.9%200%200%200%20102.37%2013.3l-18.8-43.35a768%20768%200%200%201-83.57%2030.05%22/%3E%3Cpath%20fill%3D%22%23900%22%20d%3D%22M450%200C296.44%200%20160.78%2077.05%2079.56%20194.56l87%2050.25C230.2%20157.11%20333.44%20100%20450%20100s219.81%2057.1%20283.44%20144.81l87-50.25C739.22%2077.05%20603.56%200%20450%200%22/%3E%3Cpath%20fill%3D%22%23069%22%20d%3D%22M32.19%20282.75A448.3%20448.3%200%200%200%200%20450c0%20231.5%20175.1%20422.36%20400%20447.25V796.37C230.47%20772.08%20100%20626.23%20100%20450a349%20349%200%200%201%2019.94-116.63zm835.62%200-87.75%2050.63A349.1%20349.1%200%200%201%20800%20450c0%20176.22-130.47%20322.08-300%20346.38v100.87C724.9%20872.35%20900%20681.5%20900%20450c0-59.1-11.45-115.53-32.19-167.25%22/%3E%3C/svg%3E%3Csvg%20width%3D%2237%22%20height%3D%2237%22%20viewBox%3D%22-1%20-1%20302%20302%22%20id%3D%22Wikibooks-logo_sister%22%20y%3D%22126%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23fdfcf8%22%20fill-rule%3D%22evenodd%22%20d%3D%22M141.66%20103.54c5.27%2066.02%2016.8%20129.94%2051.2%20191.49l13%20.1%2082.3-73.42-78.44-198.2-56.54%2054z%22/%3E%3Cpath%20fill%3D%22%23f4eed7%22%20fill-rule%3D%22evenodd%22%20d%3D%22M75.84%20103.6c5.28%2066.03%2018.78%20130.8%2053.18%20192.34l20.34.18%2061.96-77.72-67.41-194.83-56.54%2054.01-11.53%2026.03z%22/%3E%3Cpath%20fill%3D%22%23e9ddaf%22%20fill-rule%3D%22evenodd%22%20d%3D%22M.22%20102.2c5.38%2069.28%2027.01%20131.33%2052.46%20191.7l26.8-.33%2070.4-80.04-81.6-191.37-56.54%2054.01L.22%20102.19z%22/%3E%3Cpath%20fill%3D%22%235f96d3%22%20d%3D%22M213.33%204.06c-27.19%2026.3-54.07%2052.38-54.07%2052.38l9.66%2019.65c13.1-12.98%2026.26-24.4%2038.81-37.09%2026.44%2058.04%2044.45%20104.81%2066.6%20166.65%207.26%2020.08%205.78%2020.98-11.56%2031.84-27.86%2013.85-36.67%2022.94-69.87%2058.26h22.72c27.75-25.1%2038.05-33.95%2072.8-52.26%2012.3-7.1%2013.99-16.06%208.94-30-16.26-45.2-51.49-142.6-84.03-209.43%22/%3E%3Cpath%20fill%3D%22%232a62a1%22%20fill-rule%3D%22evenodd%22%20d%3D%22M142.45%204.69C122.57%2018.1%20107.22%2037.43%2089.92%2054l7.1%2022.63c13.54-10.67%2025.32-23.54%2037.5-35.72l65.65%20164.69c3.79%2011.15-2.17%2021.07-14.15%2031.87-14.35%2011.53-43.9%2038.42-57.29%2058.9h20.38c21.38-21.96%2025.24-24.94%2049.6-46.03%2016.34-16.68%2031.1-25.22%2023.4-46.6L142.45%204.7z%22/%3E%3Cpath%20fill%3D%22%2315304f%22%20fill-rule%3D%22evenodd%22%20d%3D%22M75.33%203.63c-5.3%201.78-9.71%205.2-13.85%208.8C5.4%2066.42%203.14%2068.7%203.14%2068.7.19%2071.43-.06%2075.44-.02%2079.47l.24%2022.72s25.9-25.18%2064.57-62.4C85.61%2094.01%20107.34%20147.96%20128.73%20202c2.93%208.16-4.08%2014.85-12.96%2023.78-12.28%2011.97-37.95%2036.62-64.22%2069.53h26.34l63.31-69.43c6.02-8.28%2013.5-16.37%2010.35-23.88L75.33%203.62z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2249%22%20height%3D%2249%22%20viewBox%3D%22-1%20-1%201052%20592%22%20id%3D%22Wikidata-logo_sister%22%20y%3D%22163%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23900%22%20d%3D%22M120%20545h30V45h-30zm60%200h90V45h-90zM300%2045v500h90V45z%22/%3E%3Cpath%20fill%3D%22%23396%22%20d%3D%22M840%20545h30V45h-30zm60-500v500h30V45zM420%20545h30V45h-30zm60-500v500h30V45z%22/%3E%3Cpath%20fill%3D%22%23069%22%20d%3D%22M540%20545h90V45h-90zm120%200h30V45h-30zm60-500v500h90V45z%22/%3E%3C/svg%3E%3Csvg%20id%3D%22Wikifunctions-logo_sister%22%20data-name%3D%22Layer%201%22%20version%3D%221.1%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%22-1%20-1%2050%2050%22%20y%3D%22212%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%20id%3D%22fdefs11%22%3E%3Cstyle%20id%3D%22fstyle9%22%3E.fcls-1,.fcls-4%7Bfill%3A%23069%7D.fcls-1%7Bfill-rule%3Aevenodd%7D.fcls-2%7Bfill%3A%23396%7D.fcls-3%7Bfill%3A%23900%7D%3C/style%3E%3C/defs%3E%3Cg%20id%3D%22fLayer_2%22%20data-name%3D%22Layer%202%22%20transform%3D%22translate%283.95%203.959%29scale%28.1742%29%22%3E%3Cg%20id%3D%22fLayer_1-2%22%20data-name%3D%22Layer%201-2%22%3E%3Cpath%20class%3D%22fcls-1%22%20d%3D%22M180.84%2081.24q-2.85%200-6.43.35a56%2056%200%200%201-6.07.37c-1.66%200-3.73-.12-6.19-.37-2.67-.23-5-.34-6.9-.35-.72%200-1.07.55-1.07%201.67s.23%201.66.71%201.66c5.32.25%208%202.3%208%206.2a14.3%2014.3%200%200%201-1.19%205.35l-16.25%2037.79%202.64%205.93%2019.2-43.25c2-4.52%203.9-7.59%205.77-9.19a12.5%2012.5%200%200%201%207.2-2.83%201.25%201.25%200%200%200%201-.59%202.17%202.17%200%200%200%20.45-1.32c-.03-.95-.31-1.42-.87-1.42%22%20id%3D%22fpath13%22/%3E%3Cpath%20class%3D%22fcls-1%22%20d%3D%22M123%2084.57q8%20.38%208%205.83a12.9%2012.9%200%200%201-1.79%205.72l-.33.61%202.65%205.93%203.28-6.07q4.22-7.38%207-9.46a15.17%2015.17%200%200%201%207.47-2.56c.87%200%201.31-.64%201.31-1.91%200-1-.24-1.42-.71-1.42-2%200-4.55.14-7.56.41-2.38.2-4.19.31-5.41.31q-2.57%200-6.55-.37c-2.78-.23-5.11-.34-7-.35-.23%200-.47.18-.71.54a2%202%200%200%200-.36%201.13c-.02%201.09.22%201.66.71%201.66%22%20id%3D%22fpath15%22/%3E%3Cpath%20class%3D%22fcls-1%22%20d%3D%22M92.63%20133.78%2075.32%2094.69a9.3%209.3%200%200%201-1-3.57%205.42%205.42%200%200%201%202.3-4.53%2011.83%2011.83%200%200%201%206.28-2c.39%200%20.59-.55.59-1.66s-.32-1.67-1-1.67c-2.65%200-5.71.12-9.16.35-3.29.25-6.15.38-8.58.37s-5-.13-7.61-.37c-2.9-.23-5.68-.34-8.34-.35-.63%200-1%20.55-1%201.67a1.7%201.7%200%200%200%20.42%201.15%201.18%201.18%200%200%200%20.9.51%2016.2%2016.2%200%200%201%208.62%203.13q3.1%202.52%205.89%208.89l21.92%2050.27z%22%20id%3D%22fpath17%22/%3E%3Cpath%20class%3D%22fcls-2%22%20d%3D%22M137.51%20164.71a1.58%201.58%200%200%200%201.44%201H152a1.54%201.54%200%200%200%201.54-1.54%201.6%201.6%200%200%200-.14-.64L121.52%2092a19.2%2019.2%200%200%200-4.11-5.83%2016.2%2016.2%200%200%200-6.33-3.61A34%2034%200%200%200%20101%2081.3%2041.2%2041.2%200%200%200%2089.23%2083a1.55%201.55%200%200%200-1.06%201.73L90%2095.81a1.52%201.52%200%200%200%201.5%201.29%201.7%201.7%200%200%200%20.5-.1%2020%2020%200%200%201%206.42-1%2014.8%2014.8%200%200%201%204.76.64%207.8%207.8%200%200%201%203.08%201.86%2010.1%2010.1%200%200%201%202%203c.55%201.17%201.13%202.53%201.74%204l1.29%203.27-29.11%2054.83a1.56%201.56%200%200%200%20.93%202%201.5%201.5%200%200%200%20.52.09h15.42a1.52%201.52%200%200%200%201.41-.92l.09-.17%2019.6-36.22z%22%20id%3D%22fpath19%22/%3E%3Cpath%20class%3D%22fcls-3%22%20d%3D%22M43.07%2059.93a90.23%2090.23%200%200%201%20143.14-.43l20.32-13.65a114.68%20114.68%200%200%200-184%20.74z%22%20id%3D%22fpath21%22/%3E%3Cpath%20class%3D%22fcls-4%22%20d%3D%22M198.47%2080.68a89.9%2089.9%200%200%201%206.71%2034.12c0%2049.84-40.54%2090.94-90.38%2090.94s-90.37-41.1-90.37-90.94a89.7%2089.7%200%200%201%206.51-33.62L10.13%2067.67A114%20114%200%200%200%200%20114.8c0%2063.31%2051.5%20115.37%20114.8%20115.37s114.81-52.06%20114.81-115.37a114.2%20114.2%200%200%200-10.52-48z%22%20id%3D%22fpath23%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%3Csvg%20fill%3D%22%234c4f69%22%20width%3D%2242%22%20height%3D%2242%22%20viewBox%3D%22-1%20-1%201026%201026%22%20id%3D%22Wikimedia-logo_black%22%20y%3D%22262%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3CclipPath%20id%3D%22ga%22%3E%3Cpath%20d%3D%22m0-33%20471%20471v363h82V438l471-471v1057H0%22/%3E%3C/clipPath%3E%3Cg%20clip-path%3D%22url%28%23ga%29%22%3E%3Cpath%20d%3D%22M511%20224a288%20288%200%201%200%202%200%22/%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%234c4f69%22%20stroke-width%3D%22116%22%20d%3D%22M511%20102a410%20410%200%201%200%202%200%22/%3E%3C/g%3E%3Cpath%20d%3D%22M511%2028a158%20158%200%201%200%202%200z%22/%3E%3C/svg%3E%3Csvg%20width%3D%22176%22%20height%3D%2232%22%20viewBox%3D%22-1%20-1%20502%2087%22%20id%3D%22Wikipedia_wordmark%22%20fill%3D%22%234c4f69%22%20y%3D%22304%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M55.27%2022.07%2053.3%2018.1c-3.33-6.62-3.26-6.97-6.63-7.4-.94-.14-1.43-.26-1.43-.72v-2.1l.28-.2h19.65l.52.16v2.1c0%20.46-.35.7-1.04.7l-1.43.2c-3.6.3-3%201.76-.62%206.53l22.72%2046.46.78.2%2020.16-47.83c.7-1.93.6-3.3-.3-4.1s-1.55-1.25-3.9-1.35l-1.88-.1c-.23%200-.45-.08-.66-.23a.72.72%200%200%201-.32-.58v-2l.3-.2h22.77l.23.2v2c0%20.54-.3.8-.92.8-2.98.14-5.2.8-6.63%201.94a11.43%2011.43%200%200%200-3.36%204.86s-18.55%2042.43-24.9%2056.54c-2.42%204.62-4.8%204.2-6.9-.14C75.35%2064.7%2062.86%2037%2062.86%2037l-7.6-14.93z%22/%3E%3Cpath%20d%3D%22M91.66%207.65s-12.8-.04-18.52%200l-.28.2v2q0%20.345.3.57c.22.16.44.24.67.24l.92.1c2.33.1%203.4.7%203.72%201.1.56.67.83%201.4-.52%204.34L54.03%2063.9l-.62-.15s-17.13-36.13-22.1-48.2a8.6%208.6%200%200%201-.73-2.76c0-1.24%201.1-1.9%203.32-2l2.57-.1c.7%200%201.04-.27%201.04-.82V7.9l-.23-.2s-20.52-.03-24.76%200l-.22.2v2.08c0%20.38.48.6%201.43.72%202.62.14%204.33.55%205.15%201.24.82.7%201.7%202.47%202.84%205.23%206.22%2014.96%2019.45%2041.65%2025.9%2056.86%201.85%204.15%204.2%204.8%207.02-.13%204.9-9.1%2018.2-36.87%2018.2-36.87l10.47-19.6c1.2-2.05%202.4-3.9%202.98-4.76%201.1-1.57%201.7-1.87%204.7-2%20.6%200%20.9-.28.9-.83V7.86l-.22-.2zm38.94%2061.93c0%202.3%201.05%203.64%204.38%203.95l2.2.2c.3%200%20.6.22.6.63v2.2l-.1.2s-7.9-.2-11.12-.2c-2.9%200-11.03.2-11.03.2l-.2-.2v-2.2c0-.4.3-.62.72-.62l2.08-.2c3.44-.32%204.48-1.98%204.48-3.96V34.95c0-2.3-1.25-2.92-4.47-3.22l-2.08-.22c-.4%200-.72-.08-.72-.4v-2.4l.1-.2s8.22.2%2011.44.2a726%20726%200%200%200%2010.82-.2l.1.2V31c0%20.3-.22.5-.63.5l-2.2.22c-3.2.3-4.36%201.14-4.36%203.23v34.63zm30.7%200c0%202.3%201.36%203.43%204.37%203.95l1.15.2c.3.1.62.22.62.63v2.2l-.1.2s-6.55-.2-9.67-.2c-2.92%200-11.44.2-11.44.2l-.2-.2v-2.2c0-.4.3-.62.72-.62l2.08-.2c3.12-.32%204.47-1.98%204.47-3.96V34.95c0-2.3-1.15-2.92-4.47-3.22l-2.08-.22c-.42%200-.73-.08-.73-.4v-2.4l.1-.2s8.53.2%2011.75.2c2.92%200%209.47-.2%209.47-.2l.1.2V31c0%20.3-.2.4-.62.5l-1.15.22c-3.22.62-4.36%201.14-4.36%203.23v15.7c3.44%200%205.4-1.76%2010-6.65%204.15-4.58%207.37-8.42%207.37-10.4%200-.84-.93-1.77-3-2.1-.43-.1-.64-.2-.64-.5v-2.4l.1-.1s8.43.2%2011.45.2c2.7%200%207.28-.2%207.28-.2l.3.1V31c0%20.3-.3.5-.82.5-4.06.32-6.87.53-10.6%204.8l-8.95%2010.3c-1.78%201.86-2.4%203-2.4%203.84%200%20.62.4%201.14.93%201.76l15.7%2018.93c1.25%201.45%203.75%202.08%205.83%202.5l.52.1c.3.1.73.3.73.62v2.18l-.3.1s-5.52-.1-8.43-.1c-2.6%200-6.34.1-6.34.1l-.1-.1v-1.25c0-1.35-.1-2.5-1.57-4.15l-11.54-14.36c-1.56-2.08-3.23-2.6-5.5-2.6v15.4zm56.07%200c0%202.3%201.04%203.64%204.37%203.95l2.2.2c.3%200%20.6.22.6.63v2.2l-.1.2s-7.9-.2-11.12-.2c-2.9%200-11.03.2-11.03.2l-.2-.2v-2.2c0-.4.3-.62.7-.62l2.1-.2c3.43-.32%204.47-1.98%204.47-3.96V34.95c0-2.3-1.25-2.92-4.48-3.22l-2.1-.22c-.4%200-.7-.08-.7-.4v-2.4l.1-.2s8.2.2%2011.43.2a726%20726%200%200%200%2010.82-.2l.1.2V31c0%20.3-.2.5-.62.5l-2.2.22c-3.2.3-4.36%201.14-4.36%203.23v34.63zm22.48-34.43c0-3.22-1.36-3.33-6.24-3.64-.62%200-.72-.3-.72-.5v-2.4l.2-.1c1.57%200%207.7.2%2010.72.2%202.9%200%207.07-.2%2010.92-.2%2014.76%200%2017.46%207.27%2017.46%2012.7%200%206.23-3%2016-17.77%2016-2.6%200-4.67-.2-6.55-1.04V70.1c0%202.28%201.25%202.8%204.58%203.32l2.08.3c.43.12.74.22.74.64v2.18l-.1.2s-8.32-.2-11.54-.2c-2.9%200-10.7.2-10.7.2l-.12-.2v-2.18c0-.42.2-.52.63-.63l2.2-.3c3.2-.43%204.25-1.36%204.25-3.34V35.14zm8%2018.1c2.08.84%204.68.94%206.76.94%206.26%200%209.26-3.76%209.26-11.76%200-8.95-4.05-10.92-9.77-10.92-5%200-6.25.93-6.25%203.64zm42.25%2023.3c-3.13%200-10.3.2-10.3.2l-.1-.2v-2.3c0-.2.1-.5.62-.5l2.4-.22c3.22-.3%204.16-2.4%204.16-4.47V34.74c0-2.4-1.25-2.8-4.17-3l-2.38-.23c-.63-.08-.63-.3-.63-.4v-2.4l.1-.2s8.1.2%2011.23.2h15.3c3.1%200%2010.5-.2%2010.5-.2l.2.2c.1%204.47.84%208.54%201.57%2012.48l-2.6.42c-1.14-3.85-3.1-9.36-9.77-9.36h-8.32c-1.97%200-3%20.73-3%202.5V49.8h7.8c2.9%200%203.63-1.25%204.05-3.33l.62-2.2c0-.3.2-.52.62-.52h1.76c.2%200%20.2.1.2.3-.2%202.3-.6%205.22-.6%207.7%200%202.6.4%204.8.6%207.2l-.2.2H308c-.52%200-.74-.2-.74-.52l-.52-2.3c-.4-2.07-1.35-3.22-4.06-3.22h-7.8v15.92c0%201.97%201.14%203.95%203.02%203.95h9.88c5.3%200%208.22-3.32%209.47-8.73l2.6.3-2.1%2011.97-.2.2s-6.14-.2-9.26-.2h-18.2zm39.1-2.81%202.4-.2c3.12-.32%204.16-1.26%204.16-4.48V34.74c0-2.7-.73-2.7-4.16-3l-2.28-.23c-.42%200-.74-.2-.74-.5v-2.3l.1-.2s9.16.2%2011.03.2c1.98%200%2011.04-.2%2013.74-.2%2017.37%200%2025.9%2010.8%2025.9%2024.64%200%2018.2-12.9%2023.6-24.44%2023.6-8.32%200-11.95-.2-15.18-.2-3.12%200-11.03.2-11.03.2l-.1-.2v-2.18c-.02-.3.2-.62.6-.62zm23.2%200c11.44%200%2017.9-4.26%2017.9-18.82%200-10.82-2.4-23.4-19.87-23.4-4.06%200-6.66.62-6.66%203.22v34.32c0%202.9.72%204.68%208.63%204.68m51.5-4.16c0%202.3%201.03%203.64%204.36%203.95l2.2.2c.3%200%20.6.22.6.63v2.2l-.1.2s-7.9-.2-11.12-.2c-2.9%200-11.02.2-11.02.2l-.2-.2v-2.2c0-.4.3-.62.7-.62l2.1-.2c3.43-.32%204.47-1.98%204.47-3.96V34.95c0-2.3-1.26-2.92-4.48-3.22l-2.1-.22c-.4%200-.7-.08-.7-.4v-2.4l.1-.2s8.2.2%2011.42.2a726%20726%200%200%200%2010.82-.2l.1.2V31c0%20.3-.2.5-.62.5l-2.2.22c-3.2.3-4.35%201.14-4.35%203.23v34.63zm32.03%203.95%203.02.2c.42%200%20.83.33.83.84v1.98l-.2.2s-11.34-.2-13.84-.2c-2.7%200-9.36.2-9.36.2l-.2-.2v-1.98c0-.5.3-.83.82-.83%204.58-.3%207.17-1.14%2010.1-7.8l23.07-54.08c1.14-2.7%201.98-3.75%203.54-3.75%201.46%200%202%201.05%202.8%203.13l21.33%2056.37c1.46%204.06%203.54%205.62%207.7%206.03l1.15.1c.52%200%201.04.3%201.04.84v1.97l-.3.2s-8.02-.2-12.08-.2c-3.64%200-13.83.2-13.83.2l-.1-.2v-1.97c0-.53.2-.84.74-.84l2.9-.2c3.96-.3%205.43-1.57%204.38-4.48l-6.34-17.58h-21.63c-2.5%200-3.12.42-3.64%201.77l-6.03%2015.08c-1.04%202.6.32%204.9%204.16%205.2zM461.4%2047.1l-10.07-27.76h-.2l-10.4%2026.42c-.43%201.04.3%201.35%202.58%201.35h18.1z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20viewBox%3D%22-65.5%20-178.5%20302%20357%22%20id%3D%22Wikiquote-logo_sister%22%20y%3D%22336%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22ia%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%2259.1%22%20cx%3D%220%22%20cy%3D%220%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2300003b%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23002f64%22/%3E%3C/radialGradient%3E%3CclipPath%20id%3D%22ib%22%3E%3Cpath%20d%3D%22m-25%200%20300%20300L575%200%20275-300z%22/%3E%3C/clipPath%3E%3C/defs%3E%3Ccircle%20r%3D%2259.1%22%20fill%3D%22url%28%23ia%29%22/%3E%3Cg%20clip-path%3D%22url%28%23ib%29%22%20fill%3D%22none%22%3E%3Ccircle%20r%3D%22101%22%20stroke%3D%22%23003b6f%22%20stroke-width%3D%2229%22/%3E%3Ccircle%20r%3D%22156.5%22%20stroke%3D%22%233b6fa0%22%20stroke-width%3D%2230.4%22/%3E%3Ccircle%20r%3D%22215.7%22%20stroke%3D%22%236fa0d0%22%20stroke-width%3D%2231.4%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%2239%22%20height%3D%2239%22%20viewBox%3D%22-1%20-1%20412%20432%22%20id%3D%22Wikisource-logo_sister%22%20y%3D%22378%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22%23608ab4%22%20d%3D%22M203.7%200C135.42.46%2075%2035.98%2038.06%2090.23h333.88C334.76%2035.63%20273.84%200%20205.02%200z%22/%3E%3Cpath%20fill%3D%22%23375493%22%20d%3D%22M26.2%20109.84A222%20222%200%200%200%200%20214.99C0%20333.67%2091.86%20430%20205.02%20430S410%20333.67%20410%20214.99c0-38.2-9.5-74.05-26.18-105.15H26.21z%22/%3E%3Cpath%20fill%3D%22%23d6dde3%22%20d%3D%22M38.06%2090.23a217%20217%200%200%200-11.85%2019.6h357.61a217%20217%200%200%200-11.88-19.6z%22/%3E%3Cpath%20fill%3D%22%237bbce5%22%20d%3D%22M292.56%2024.1c-.85.02-1.76.21-2.73.5-9.13%2014.58-9.1%2062.88-8.98%2073.33h.06c13.52%203%2031.42-.45%2032.02-13.39%201.03-17.05%202.06-33.58-6.98-44.2-8.26%203.76-6.7-11.5-10.05-14.92-.84-.96-2-1.34-3.33-1.31z%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M289.83%2024.6c-4.81%201.48-10.68%205.85-13.57%207.26-2.52.27-7.2.08-10.69.97-7.5%201.93-14.32%206.5-18.26%2013.7-5.08-14.77-16%203.39-28.94%2013.85-7.17-5.4-21.6-16.17-34.85-23.1-10.65%205.39-21.8%2023.62-28.44%2025.16-6.89%201.29-16.6.53-20.64%205.4-6.72%206.95-8.8%2014.9-10.09%2022.36%2015.76%205.57%2032.29%205.74%2048.05%203.6%208.95-2.14%2015.33.87%2024.54.53%2027.97%201.2%2058.26-2.21%2083.9%203.6-.11-10.45-.14-58.75%209-73.32z%22/%3E%3Cpath%20fill%3D%22%237bbce5%22%20d%3D%22M196.43%2053.7c3.36%2010.12%206.28%2020.23%205.16%2030.34-1.2%206.25%201.47%205.82%206.46%203.34%204.91-2.66%207.5-5.57%2014.73-7.97%205.6-1.54%201.63-5.65-1.04-8.48-7.98-7.56-16.66-12.33-25.31-17.22z%22/%3E%3Cpath%20fill%3D%22%23294584%22%20d%3D%22M225.13%20109.84c5.88%2077.83%2058.43%2087.4%2091.5%2071.66-16.53-16.27-10.53-49.44%207.1-49.8%2032.64-.8%2023.35%2059.85%2023.36%2089.29%2017.84-3.61%2016.67-70.78%2012.88-111.15z%22/%3E%3Cpath%20fill%3D%22%23e0e9ea%22%20d%3D%22m56.13%20109.84%201.91%2020.1c4.32%207.87%207.53%2015.71%206.63%2023.58%208.53-2.1%2013.61-3.19%2018.2%205.5%2020.06%2012.43%2039.12%2013.9%2057.88%2012.07%203.82%2045.16%202.7%2081.49%201.1%20135.47%2011.4%2018.84%2022.8%2036.7%2034.2%2055.53%206.53%2011.45%2018.01%2015.07%2027.02%201.53l23.13-10.4v11.5c11.85%202.97%2023.57%207.48%2018.2%2019.76-4.1%207.93-1.8%2011.46%209.86%206.16%2010.3-5%2016.65%202.75%2022.03%204.12-7.66-8.12-1.07-24.1-.83-40.6%2011-1%2023.55-10.92%2034.55-11.92%2022.6-21.83%2026.5-29.96%2026.46-58.16%202.27-7.31%205.53-9.24%203.86-21.94%201.3-7.87%203.09-18.15%204.37-26.02l2.58-15.16-.2.03c0-29.44%209.3-90.08-23.34-89.3-17.64.37-23.64%2033.54-7.1%2049.81a66.5%2066.5%200%200%201-12.2%204.41c1.35%207.68-4.23%2015.55-11.53%2015.88-7.28-.64-18%206.55-24.79%2023.05-10.86%2022.78-20.74%202.96-24.7-3.16-5.09-6.72%201.16-12.97-12.79-8.91-9.2%202.83-20.87%204.7-23.66-9.13-11.76-11.89-23.03-22.32-34.79-34.2-4.7-5.57-.79-10.14-.75-12.1v-.2l-.04-.09a1%201%200%200%200-.09-.22l-.03-.06-.03-.03-.1-.1-.12-.09-.07-.03c-.05-.03-.12-.04-.18-.06-4.59-2.88-10.15.59-16.22%203.1-15.83%202.89-22.01.1-23.72-8.23.09-13.76-7.69-12.32-20.4-10.41-36.63%205.2-42.55-7.7-53.23-31.08z%22/%3E%3Cpath%20fill%3D%22%234d8ac0%22%20d%3D%22M57.2%20109.84c10.67%2023.37%2016.6%2036.27%2053.23%2031.08%2012.7-1.92%2020.48-3.35%2020.4%2010.4%201.7%208.34%207.89%2011.12%2023.72%208.23%206.06-2.5%2011.62-5.97%2016.21-3.1l.2.07.05.03.13.1.1.09.02.03.04.06a1%201%200%200%201%20.1.22l.02.1v.18c-.03%201.96-3.94%206.54.76%2012.1%2011.76%2011.89%2023.02%2022.32%2034.79%2034.2%202.8%2013.84%2014.46%2011.97%2023.66%209.14%2013.95-4.06%207.7%202.19%2012.79%208.9%203.96%206.13%2013.84%2025.95%2024.7%203.17%206.8-16.5%2017.5-23.7%2024.8-23.05%207.3-.33%2012.87-8.2%2011.53-15.88-32.45%208.21-74.12-7.26-79.32-76.07z%22/%3E%3Cpath%20fill%3D%22%23d6dde3%22%20d%3D%22M166.93%20199.26c-10.56.68-5.05%2035.8-3.9%2052.43%201.57%2016.37%205.23%2012.52%2016.72%205.38%205.28%2010.66%202.07%2016.61-5.4%2023.51-5.57%205.23-8.76%2013.05-3.93%2022.04%201.47%202.45%202.71%203.5%204.43%207.35%201.15%202.29%202.27%204.6%203.42%206.88%201.33%205.06-.17%208.2-2.39%2010.91-2.05%202.93-2.45%205.88.22%2013.98%201.46%204.7-2.53%2010.32%203.65%2015.26a37.3%2037.3%200%200%200%208.17%204.87c-2.38-6.9-2.45-16.86-1.29-25.42.79-8.07%201.34-13.08%208.74-18.57%206.46-3.29%204.66-20.67%205.21-31.01l.22.15v-.15c13.82-2.9%206.13-13.9%201.89-24.45l-33.78-62.9a6.1%206.1%200%200%200-1.86-.26z%22/%3E%3Cpath%20fill%3D%22%23608ab4%22%20d%3D%22m168.91%20199.5%2033.78%2062.92c4.24%2010.55%2011.93%2021.54-1.89%2024.45%201.23%207.36%2010.4%2013.77%2020.56%2012.9%2010.57-.67%2018.26%207.2%2021.74%2015.14.46-8.76%201.54-17.45%203.68-26.04%201.36-4.25%209.1-8.01%202.67-13.67-26.04-28.53-51.15-50.95-79.32-75.25a9%209%200%200%200-1.22-.44z%22/%3E%3Cpath%20fill%3D%22%23236798%22%20d%3D%22M200.59%20286.87c-.55%2010.34%201.24%2027.72-5.22%2031.01-7.4%205.49-7.95%2010.5-8.74%2018.57-1.16%208.57-1.1%2018.55%201.3%2025.45a33.3%2033.3%200%200%200%207.6%202.2c4.47.4%207.28%201.5%2016.71-.23%208.26-.94%2013.22-4.96%2022.66-6.37%205.15-1.01%208.64-2.97%208.36-10.8-.4-10.68-.7-21.28-.16-31.79-3.48-7.94-11.17-15.8-21.74-15.13-10.05.85-19.12-5.4-20.52-12.66v-.06c-.08-.07-.18-.12-.25-.2z%22/%3E%3Cpath%20fill%3D%22%23608ab4%22%20d%3D%22M339.42%20276.45c-.87%202.4-2%204.53-2.95%207.63.04%2028.2-3.86%2036.33-26.46%2058.16-.2.05-6.67%2015.13-12.16%2019.07-9.27%206.81-8.7%2013-12.13%2020.45-2.5%203.76-5.94%204.37-8.43%203.69-1.55-1.23-3.12-1.8-4.68-3.66-.1%203.04.12%205.82.91%208.25l.1.22v.03c.43.88.84%201.78%201.25%202.66l.07.1v.02c.37.58.8%201.14%201.28%201.66l-.44-.12c9.5%2015.1%2022.9%2019.82%2040.1%2013.88a90.7%2090.7%200%200%200%2020.43-12.04c5-4.72%2010.95-13.58%201.57-14.16-1.34-.35-2.08-.7-2.45-1.07l-.06-.06c-.04-.04-.07-.11-.1-.16a1%201%200%200%201-.1-.21l-.02-.07v-.18c.02-1.35%202.59-3.27.62-7.16-1.34-5.96%204.37-11.6%208.46-13.1l-8.46-18.36c.2-4.01%208.14-6.13%206.85-13.63%202.3-18.85%205.4-46.84-3.2-51.84%22/%3E%3Cpath%20fill%3D%22%23236798%22%20d%3D%22M288.7%20202.2c-6.8%201.82-15.01%209.1-20.58%2022.63-2.55%205.34-5.05%208.34-7.42%209.73.24%2023.26%205.8%2039.82%2017.28%2048.9-3.4%2013.45-6.8%2032-.62%2043.24-10.44-3.29-6.19%2017.6-9.27%2026.39-5.22%2014.62-9.81%2013.98-14.71%2015.25%204.47%205.09%2010.23%2010.49%2018.85%2013.67v.06a1%201%200%200%200%20.13.25c.64.97%203.53%202.03%204.93%203.13%202.5.68%205.93.07%208.42-3.7%203.45-7.44%202.87-13.62%2012.13-20.44%205.37-3.85%2011.68-18.35%2012.16-19.07-18.33-10.26-27-29.8-24.04-48.62.86-5.2%204.27-11.02-.3-19.39-5.49-23-2-49.77%203.04-72.04z%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20height%3D%2242%22%20width%3D%2242%22%20viewBox%3D%22-1%20-1%20943%201105%22%20id%3D%22Wikispecies-logo_sister%22%20y%3D%22417%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22ka%22%3E%3Cstop%20stop-color%3D%22%2300090e%22%20offset%3D%220%22/%3E%3Cstop%20stop-color%3D%22%23082e45%22%20offset%3D%22.1%22/%3E%3Cstop%20stop-color%3D%22%230a6997%22%20offset%3D%22.5%22/%3E%3Cstop%20stop-color%3D%22%23082e45%22%20offset%3D%22.9%22/%3E%3Cstop%20stop-color%3D%22%2300090e%22%20offset%3D%221%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22kg%22%3E%3Cstop%20stop-color%3D%22%23375d72%22%20offset%3D%220%22/%3E%3Cstop%20stop-color%3D%22%23407b9b%22%20offset%3D%22.1%22/%3E%3Cstop%20stop-color%3D%22%23a0c0cf%22%20offset%3D%22.5%22/%3E%3Cstop%20stop-color%3D%22%23407b9b%22%20offset%3D%22.9%22/%3E%3Cstop%20stop-color%3D%22%23375d72%22%20offset%3D%221%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22kc%22%3E%3Cstop%20stop-color%3D%22%230f3119%22%20offset%3D%220%22/%3E%3Cstop%20stop-color%3D%22%2301703b%22%20offset%3D%22.1%22/%3E%3Cstop%20stop-color%3D%22%2389c4ae%22%20offset%3D%22.5%22/%3E%3Cstop%20stop-color%3D%22%2301703b%22%20offset%3D%22.9%22/%3E%3Cstop%20stop-color%3D%22%230f3119%22%20offset%3D%221%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22ke%22%3E%3Cstop%20stop-color%3D%22%23476c5a%22%20offset%3D%220%22/%3E%3Cstop%20stop-color%3D%22%2352a27d%22%20offset%3D%22.1%22/%3E%3Cstop%20stop-color%3D%22%23a7d2be%22%20offset%3D%22.5%22/%3E%3Cstop%20stop-color%3D%22%2352a27d%22%20offset%3D%22.9%22/%3E%3Cstop%20stop-color%3D%22%23476c5a%22%20offset%3D%221%22/%3E%3C/linearGradient%3E%3CradialGradient%20id%3D%22kj%22%20gradientUnits%3D%22userSpaceOnUse%22%20cx%3D%22510%22%20r%3D%22210%22%20cy%3D%22110%22%3E%3Cstop%20stop-color%3D%22%23d8aba5%22%20offset%3D%22.04%22/%3E%3Cstop%20stop-color%3D%22%23ad604e%22%20offset%3D%22.4%22/%3E%3Cstop%20stop-color%3D%22%239c4029%22%20offset%3D%22.6%22/%3E%3Cstop%20stop-color%3D%22%2392331f%22%20offset%3D%22.7%22/%3E%3Cstop%20stop-color%3D%22%2343180f%22%20offset%3D%221%22/%3E%3C/radialGradient%3E%3CradialGradient%20id%3D%22ki%22%20gradientUnits%3D%22userSpaceOnUse%22%20cx%3D%22470.5%22%20r%3D%22430%22%20cy%3D%22650%22%3E%3Cstop%20stop-color%3D%22%234f8fb3%22%20offset%3D%22.8%22/%3E%3Cstop%20stop-color%3D%22%230c5178%22%20offset%3D%22.95%22/%3E%3Cstop%20stop-color%3D%22%23002d4a%22%20offset%3D%221%22/%3E%3C/radialGradient%3E%3CclipPath%20id%3D%22kh%22%3E%3Cpath%20d%3D%22m0%20199%20470.5%20428L941%20199v904H0z%22/%3E%3C/clipPath%3E%3C/defs%3E%3Cg%20stroke-width%3D%220%22%3E%3Cg%20fill%3D%22url%28%23ka%29%22%3E%3Cpath%20id%3D%22kf%22%20d%3D%22M213%20218c39%20137%20436%20101%20436%20202v90c0-111-404.5-64.7-436-200%22/%3E%3C/g%3E%3Cg%20fill%3D%22url%28%23ka%29%22%3E%3Cpath%20id%3D%22kd%22%20d%3D%22M649%20800c0-94.5-411-72.4-411-192v90c0%20112.5%20411%2089.5%20411%20192%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23kb%22%20transform%3D%22matrix%28-1%200%200%201%20941%200%29%22%20fill%3D%22url%28%23kc%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23kd%22%20transform%3D%22matrix%28-1%200%200%201%20941%200%29%22%20fill%3D%22url%28%23ke%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23kf%22%20transform%3D%22matrix%28-1%200%200%201%20941%200%29%22%20fill%3D%22url%28%23ke%29%22/%3E%3Cg%20fill%3D%22url%28%23kg%29%22%3E%3Cpath%20id%3D%22kb%22%20d%3D%22M649%20420c0%2099.7-411%2081-411%20188v90c0-103.7%20411-91.8%20411-188%22/%3E%3C/g%3E%3C/g%3E%3Ccircle%20stroke-width%3D%22100%22%20clip-path%3D%22url%28%23kh%29%22%20stroke%3D%22url%28%23ki%29%22%20cy%3D%22628%22%20cx%3D%22470.5%22%20r%3D%22388.5%22%20fill%3D%22none%22/%3E%3Ccircle%20stroke%3D%22%23555%22%20cy%3D%22161%22%20cx%3D%22470.5%22%20r%3D%22125%22%20fill%3D%22url%28%23kj%29%22/%3E%3C/svg%3E%3Csvg%20width%3D%2243%22%20height%3D%2237%22%20viewBox%3D%22-1%20-1%2043%2037%22%20id%3D%22Wikiversity-logo_sister%22%20y%3D%22459%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23006499%22%20d%3D%22M20.36.06c-.47.08-.97.42-1.45%201.07-.4.55-.8%201.3-1.14%202.23h5.16a9.4%209.4%200%200%200-1.15-2.25c-.48-.63-.97-.97-1.4-1.04zm1.6.14c.14.15.28.3.4.47.5.7.96%201.6%201.35%202.7h3.6A9.8%209.8%200%200%200%2021.96.2m-3.24%200c-2%20.4-3.82%201.53-5.3%203.16h3.56A9.9%209.9%200%200%201%2018.72.19zm-2.65.16c-1.9.62-3.64%201.65-5.1%203h1.48a11.5%2011.5%200%200%201%203.62-3m12.2%203h1.5A13.8%2013.8%200%200%200%2024.68.4c1.34.7%202.54%201.7%203.56%202.96zM10.2%204.1a13.8%2013.8%200%200%200-2.6%204.04h2.3a14.8%2014.8%200%200%201%202-4.04zm.47%204.04h5.2c.2-1.5.5-2.86.86-4.04H12.8a14.6%2014.6%200%200%200-2.13%204.04M17.5%204.1a27%2027%200%200%200-.88%204.04h7.46a25.4%2025.4%200%200%200-.9-4.04zm6.46%200c.36%201.18.66%202.54.87%204.04h5.2A13.7%2013.7%200%200%200%2027.9%204.1zm4.86%200c.83%201.2%201.5%202.55%202%204.04h2.3a13.5%2013.5%200%200%200-2.63-4.04H28.8zM7.3%208.87a14.1%2014.1%200%200%200-.82%204.73h2.57c0-1.65.22-3.24.62-4.73zm3.14%200a17.3%2017.3%200%200%200-.65%204.73h5.72c0-1.67.1-3.26.26-4.73h-5.34zm6.08%200a41%2041%200%200%200-.26%204.73h8.2c0-1.67-.1-3.26-.28-4.73zm8.4%200c.18%201.48.27%203.06.27%204.73h5.72c0-1.66-.23-3.25-.65-4.73zm6.12%200c.4%201.5.62%203.08.62%204.73h2.57c0-1.6-.28-3.2-.83-4.73zM0%2015v1.42h41V15zm1.4%202.9v14.02h5.44v-14H1.4zm10.83%200v14.02h5.43v-14h-5.43zm10.82%200v14.02h5.43v-14h-5.43zm10.82%200v14.02h5.44v-14h-5.43zM0%2034.48h41v-1.4H0z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%22-1%20-1%20194.5%20194.5%22%20id%3D%22Wikivoyage-logo_sister%22%20y%3D%22496%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23396%22%20d%3D%22m91.48%20116.65%2047.92%2072.57%205.2-86.8a55%2055%200%200%201-53.12%2014.23%22/%3E%3Cpath%20fill%3D%22%23900%22%20d%3D%22m150.33%2081.06%2038.89-77.78-77.78%2038.89a55%2055%200%200%201%2038.89%2038.9z%22/%3E%3Cpath%20fill%3D%22%23069%22%20d%3D%22M90.09%2047.9%203.28%2053.1l72.57%2047.92a55%2055%200%200%201%2014.24-53.13z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2237%22%20height%3D%2237%22%20viewBox%3D%22-1%20-1%20352%20352%22%20id%3D%22Wiktionary-logo_sister%22%20y%3D%22532%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22na%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23f4e3ca%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e9cc9d%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22nb%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%230036d4%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23010057%22/%3E%3C/linearGradient%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23na%22%20id%3D%22nc%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate%28-2383.4%20667%29scale%283.053%29%22%20x1%3D%22870.86%22%20y1%3D%22-140.09%22%20x2%3D%22795.29%22%20y2%3D%22-169.78%22/%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23nb%22%20id%3D%22nd%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22matrix%282.04906%20-.50644%20.57986%202.07962%20-647.13%20-304.35%29%22%20x1%3D%22370.37%22%20y1%3D%22344.23%22%20x2%3D%22283.23%22%20y2%3D%22259.18%22/%3E%3C/defs%3E%3Cg%20transform%3D%22translate%28-17.7%20-6.6%29scale%281.03655%29%22%20stroke%3D%22%23000%22%3E%3Crect%20transform%3D%22matrix%28.9871%20-.1602%20.1692%20.98558%200%200%29%22%20y%3D%2275.56%22%20x%3D%2213.21%22%20ry%3D%2237.49%22%20rx%3D%2227.96%22%20height%3D%22273.34%22%20width%3D%22274.39%22%20fill%3D%22%23e7c78d%22%20stroke-width%3D%223.31%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Crect%20transform%3D%22matrix%28.9871%20-.1602%20.1692%20.98558%200%200%29%22%20y%3D%2256.55%22%20x%3D%2219.58%22%20ry%3D%2237.49%22%20rx%3D%2227.96%22%20height%3D%22273.34%22%20width%3D%22274.39%22%20fill%3D%22url%28%23nc%29%22%20stroke-width%3D%223.31%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20fill%3D%22url%28%23nd%29%22%20stroke-width%3D%222.49%22%20d%3D%22m294.4%2064.78.72%204.93c-4.48.65-7.98%202.02-10.52%204.11-2.54%202.1-4.73%205.64-6.58%2010.62-1.23%203.36-2.8%2011.16-4.7%2023.42l-26.34%20152.62-5.07.73-56.24-109.85-21.81%20121.19-4.56.66-73.26-142.64c-5.46-10.65-8.85-16.91-10.16-18.81a17.4%2017.4%200%200%200-8.02-6.53c-3.16-1.22-7.23-1.47-12.21-.74l-.73-4.93%2063.6-9.24.73%204.93-3.04.44c-4.47.65-7.74%202.22-9.79%204.7a10.12%2010.12%200%200%200-2.4%208.24c.46%203.1%203.37%209.99%208.75%2020.64l48.83%2096.5%2015.75-90.36-7.31-14.45-5.85-11.54c-2.43-4.19-5-7.8-7.69-10.86a16.1%2016.1%200%200%200-4.69-3.68%2022.7%2022.7%200%200%200-6.84-2.55c-1.69-.3-4.26-.2-7.72.3l-.73-4.92%2066.9-9.72.73%204.93-4.56.67c-4.73.68-8.04%202.25-9.92%204.7-1.88%202.46-2.55%205.5-2.02%209.14.67%204.53%203.74%2012.17%209.21%2022.9l47.48%2093.43%2017.96-104.3q3.135-17.325%202.19-23.73c-.3-2.04-1.2-3.86-2.69-5.46a9.95%209.95%200%200%200-5.18-3.06c-3.39-.78-7.66-.8-12.82-.05l-.73-4.93%2051.32-7.45z%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%22-1%20-1%2012%208%22%20id%3D%22arrow-down%22%20y%3D%22569%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%234c4f69%22%20stroke-width%3D%221.11%22%20d%3D%22M.56.55%205%204.9%209.44.54%22/%3E%3C/svg%3E%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%22-1%20-1%2014%2014%22%20id%3D%22arrow-down-blue%22%20y%3D%22577%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%231e66f5%22%20d%3D%22M10.085%202.943%206.05%206.803l-3.947-3.86L1.05%203.996l5%205%205-5z%22/%3E%3C/svg%3E%3Csvg%20width%3D%22124%22%20height%3D%2238%22%20viewBox%3D%22-1%20-1%20124%2038%22%20id%3D%22badge_google_play_store%22%20y%3D%22591%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22qa%22%20x1%3D%2261.125%25%22%20x2%3D%2226.309%25%22%20y1%3D%224.948%25%22%20y2%3D%2271.907%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2300A0FF%22/%3E%3Cstop%20offset%3D%221%25%22%20stop-color%3D%22%2300A1FF%22/%3E%3Cstop%20offset%3D%2226%25%22%20stop-color%3D%22%2300BEFF%22/%3E%3Cstop%20offset%3D%2251%25%22%20stop-color%3D%22%2300D2FF%22/%3E%3Cstop%20offset%3D%2276%25%22%20stop-color%3D%22%2300DFFF%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2300E3FF%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22qb%22%20x1%3D%22107.685%25%22%20x2%3D%22-130.64%25%22%20y1%3D%2250%25%22%20y2%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFE000%22/%3E%3Cstop%20offset%3D%2241%25%22%20stop-color%3D%22%23FFBD00%22/%3E%3Cstop%20offset%3D%2278%25%22%20stop-color%3D%22orange%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23FF9C00%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22qc%22%20x1%3D%2286.219%25%22%20x2%3D%22-50.15%25%22%20y1%3D%2231.067%25%22%20y2%3D%22135.284%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FF3A44%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23C31162%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id%3D%22qd%22%20x1%3D%22-18.754%25%22%20x2%3D%2242.121%25%22%20y1%3D%22-11.326%25%22%20y2%3D%2235.217%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2332A071%22/%3E%3Cstop%20offset%3D%227%25%22%20stop-color%3D%22%232DA771%22/%3E%3Cstop%20offset%3D%2248%25%22%20stop-color%3D%22%2315CF74%22/%3E%3Cstop%20offset%3D%2280%25%22%20stop-color%3D%22%2306E775%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2300F076%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%20fill%3D%22none%22%3E%3Crect%20width%3D%22122%22%20height%3D%2236%22%20fill%3D%22%23000%22%20rx%3D%224.5%22/%3E%3Cpath%20fill%3D%22%23A6A6A6%22%20d%3D%22M117.481.72a3.79%203.79%200%200%201%203.796%203.78v27c0%202.088-1.7%203.78-3.796%203.78H4.52A3.79%203.79%200%200%201%20.723%2031.5v-27c0-2.088%201.7-3.78%203.796-3.78zm0-.72H4.52C2.023%200%200%202.015%200%204.5v27C0%2033.985%202.023%2036%204.519%2036H117.48c2.496%200%204.519-2.015%204.519-4.5v-27c0-2.485-2.023-4.5-4.519-4.5z%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M61.578%2019.575a3.833%203.833%200%200%200-3.822%203.837%203.833%203.833%200%200%200%203.846%203.813%203.833%203.833%200%200%200%203.835-3.825%203.76%203.76%200%200%200-1.115-2.727%203.8%203.8%200%200%200-2.744-1.098m0%206.147a2.33%202.33%200%200%201-2.266-1.315%202.315%202.315%200%200%201%20.397-2.583%202.34%202.34%200%200%201%202.557-.58%202.32%202.32%200%200%201%201.481%202.156c.03.596-.184%201.18-.592%201.617a2.23%202.23%200%200%201-1.577.705m-8.413-6.147a3.833%203.833%200%200%200-3.832%203.831%203.833%203.833%200%200%200%203.844%203.819%203.833%203.833%200%200%200%203.838-3.825%203.76%203.76%200%200%200-1.115-2.727%203.8%203.8%200%200%200-2.744-1.098zm0%206.147a2.33%202.33%200%200%201-2.273-1.309%202.315%202.315%200%200%201%20.39-2.585%202.34%202.34%200%200%201%202.56-.585%202.32%202.32%200%200%201%201.483%202.157%202.2%202.2%200%200%201-.593%201.617%202.23%202.23%200%200%201-1.576.705zm-10.022-4.968v1.62h3.904a3.4%203.4%200%200%201-.904%202.043%204%204%200%200%201-3.01%201.188c-2.395%200-4.337-1.934-4.337-4.32s1.942-4.32%204.338-4.32c1.1-.018%202.163.4%202.955%201.161l1.148-1.143a5.7%205.7%200%200%200-4.094-1.683%205.98%205.98%200%200%200-5.367%202.903%205.93%205.93%200%200%200%200%206.083%205.98%205.98%200%200%200%205.367%202.903%205.43%205.43%200%200%200%204.166-1.665%205.4%205.4%200%200%200%201.41-3.798%205.3%205.3%200%200%200-.09-1.017zm40.947%201.26a3.61%203.61%200%200%200-3.29-2.439%203.62%203.62%200%200%200-2.64%201.133%203.6%203.6%200%200%200-.975%202.692%203.74%203.74%200%200%200%201.091%202.72A3.77%203.77%200%200%200%2081%2027.224a3.83%203.83%200%200%200%203.2-1.692l-1.311-.9A2.2%202.2%200%200%201%2081%2025.694c-.801.03-1.54-.43-1.862-1.161l5.142-2.115-.19-.405zm-5.242%201.278a2.1%202.1%200%200%201%20.532-1.536%202.1%202.1%200%200%201%201.474-.696c.596-.04%201.158.28%201.428.81zM74.673%2027h1.69V15.75h-1.69zm-2.765-6.57h-.064a2.72%202.72%200%200%200-2.024-.9%203.84%203.84%200%200%200-3.663%203.83%203.84%203.84%200%200%200%203.663%203.829%202.63%202.63%200%200%200%202.024-.9h.055v.549c0%201.467-.787%202.25-2.052%202.25a2.12%202.12%200%200%201-1.934-1.359l-1.473.612a3.66%203.66%200%200%200%203.407%202.26c1.98%200%203.615-1.162%203.615-3.988V19.8h-1.554zm-1.934%205.292a2.335%202.335%200%200%201-2.135-2.322c0-1.208.926-2.216%202.135-2.322.584.03%201.13.293%201.517.73.386.438.579%201.011.534%201.592a2.14%202.14%200%200%201-.531%201.6c-.39.439-.942.7-1.53.722zm22.032-9.972h-4.04V27h1.69v-4.266h2.36a3.52%203.52%200%200%200%203.253-1.67%203.49%203.49%200%200%200%200-3.644%203.52%203.52%200%200%200-3.254-1.67zm0%205.4h-2.359v-3.834h2.395c1.07%200%201.939.864%201.939%201.93a1.935%201.935%200%200%201-1.939%201.931zm10.42-1.62a3.17%203.17%200%200%200-3.01%201.719l1.5.621c.303-.555.905-.88%201.537-.828.433-.05.869.075%201.209.347.34.273.555.67.598%201.102v.117a3.75%203.75%200%200%200-1.762-.432c-1.618%200-3.253.9-3.253%202.529.032.702.348%201.36.876%201.827.527.466%201.222.7%201.925.648a2.38%202.38%200%200%200%202.17-1.08h.053v.9h1.627v-4.329c0-1.971-1.5-3.114-3.425-3.114zm-.208%206.165c-.551%200-1.32-.279-1.32-.954%200-.9.958-1.197%201.808-1.197a3%203%200%200%201%201.536.378%202.04%202.04%200%200%201-1.979%201.8zm9.606-5.895-1.934%204.878h-.054L107.83%2019.8h-1.807l3.009%206.822-1.717%203.789h1.762l4.627-10.611zM96.633%2027h1.69V15.75h-1.69z%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20stroke%3D%22%23FFF%22%20stroke-width%3D%22.563%22%20d%3D%22M42.854%209.216a2.43%202.43%200%200%201-.678%201.8%202.64%202.64%200%200%201-1.988.801%202.85%202.85%200%200%201-2.61-1.756%202.83%202.83%200%200%201%20.613-3.077%202.72%202.72%200%200%201%201.997-.81c.382-.001.76.075%201.111.225.327.131.618.338.85.603l-.48.477a1.81%201.81%200%200%200-1.481-.639%202.1%202.1%200%200%200-1.515.634A2.08%202.08%200%200%200%2038.083%209a2.12%202.12%200%200%200%201.285%201.98c.79.34%201.71.173%202.329-.423.278-.3.438-.69.452-1.098h-1.961v-.648h2.63q.036.202.036.405zm4.139-2.25h-2.44v1.71h2.223v.648h-2.223v1.71h2.44v.666H43.83V6.3h3.163zm2.964%204.734h-.696V6.966h-1.518V6.3h3.768v.666h-1.554zm4.211%200V6.3h.696v5.4zm3.787%200h-.696V6.966H55.74V6.3h3.724v.666h-1.51zm8.567-.702a2.83%202.83%200%200%201-3.977%200%202.907%202.907%200%200%201%200-4.005%202.807%202.807%200%200%201%203.977%200%202.9%202.9%200%200%201%200%204.005zm-3.462-.45a2.094%202.094%200%200%200%202.947%200c.8-.878.8-2.218%200-3.096a2.094%202.094%200%200%200-2.947%200c-.8.878-.8%202.218%200%203.096zm5.242%201.152V6.3h.85l2.638%204.203V6.3h.696v5.4h-.723l-2.756-4.401V11.7z%22/%3E%3Cpath%20fill%3D%22url%28%23qa%29%22%20d%3D%22M1.301.486a1.8%201.8%200%200%200-.415%201.26v19.908c-.028.457.12.908.415%201.26l.064.063L12.56%2011.835v-.261L1.365.423z%22%20transform%3D%22translate%288.133%206.3%29%22/%3E%3Cpath%20fill%3D%22url%28%23qb%29%22%20d%3D%22m16.267%2015.552-3.706-3.717v-.261l3.706-3.726.081.045%204.437%202.511c1.265.711%201.265%201.881%200%202.601l-4.419%202.502-.1.045z%22%20transform%3D%22translate%288.133%206.3%29%22/%3E%3Cpath%20fill%3D%22url%28%23qc%29%22%20d%3D%22M16.375%2015.498%2012.561%2011.7%201.301%2022.914a1.48%201.48%200%200%200%201.88.054l13.203-7.47%22%20transform%3D%22translate%288.133%206.3%29%22/%3E%3Cpath%20fill%3D%22url%28%23qd%29%22%20d%3D%22M16.375%207.902%203.172.432a1.48%201.48%200%200%200-1.88.054L12.562%2011.7z%22%20transform%3D%22translate%288.133%206.3%29%22/%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22m24.4%2021.717-13.095%207.425a1.51%201.51%200%200%201-1.807%200l-.063.063.063.063a1.505%201.505%200%200%200%201.807%200l13.203-7.47z%22%20opacity%3D%22.2%22/%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M9.435%2029.088a1.8%201.8%200%200%201-.416-1.26v.135c-.028.457.121.908.416%201.26l.063-.063zm19.484-9.918L24.4%2021.717l.081.081%204.438-2.502c.512-.24.857-.734.903-1.296-.103.508-.437.94-.903%201.17%22%20opacity%3D%22.12%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M11.305%206.858%2028.92%2016.83c.466.23.8.662.903%201.17a1.58%201.58%200%200%200-.903-1.296L11.305%206.732C10.04%206.021%209.01%206.615%209.01%208.055v.135c.027-1.449%201.04-2.043%202.295-1.332%22%20opacity%3D%22.25%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%22110%22%20height%3D%2238%22%20viewBox%3D%22-1%20-1%20110%2038%22%20id%3D%22badge_ios_app_store%22%20y%3D%22629%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M99.12%200H7.6l-.83.01c-.6.01-1.2.06-1.8.16a5.8%205.8%200%200%200-4.8%204.8c-.1.6-.15%201.2-.16%201.8L0%207.6v20.8l.01.83c.01.6.06%201.2.16%201.8A6%206%200%200%200%201.8%2034.2c.42.43.91.79%201.45%201.06a6%206%200%200%200%201.71.57c.6.1%201.2.15%201.8.16h94.17c.6-.01%201.2-.06%201.8-.16a6.1%206.1%200%200%200%201.71-.57%205.7%205.7%200%200%200%201.46-1.06%205.8%205.8%200%200%200%201.06-1.45c.28-.54.46-1.12.56-1.72s.16-1.2.17-1.8V6.77a12%2012%200%200%200-.17-1.8%206%206%200%200%200-.56-1.71%205.82%205.82%200%200%200-2.52-2.52%206.1%206.1%200%200%200-1.71-.57%2012%2012%200%200%200-1.8-.16h-.83z%22%20fill%3D%22%23a6a6a6%22/%3E%3Cpath%20d%3D%22M7.6%2035.21h-.81a11.4%2011.4%200%200%201-1.69-.15%205.3%205.3%200%200%201-1.49-.5%204.9%204.9%200%200%201-1.25-.91%204.8%204.8%200%200%201-.92-1.26%205.2%205.2%200%200%201-.49-1.49%2011%2011%200%200%201-.15-1.69l-.01-.82V7.6l.01-.8c0-.57.06-1.13.15-1.69a5.2%205.2%200%200%201%20.49-1.5A5%205%200%200%201%205.1.95C5.66.85%206.22.8%206.8.8l.8-.01h93.31c.56.02%201.12.07%201.68.16.52.09%201.03.25%201.5.49a5.03%205.03%200%200%201%202.17%202.18c.24.46.4.96.49%201.48a11.7%2011.7%200%200%201%20.15%202.5l.01.98V28.4l-.01.83c-.01.56-.06%201.12-.15%201.67a5.2%205.2%200%200%201-.49%201.5%205%205%200%200%201-.91%201.25%204.9%204.9%200%200%201-1.26.92c-.48.24-.98.4-1.5.5-.56.09-1.12.14-1.69.14l-.8.01H7.6z%22%20fill%3D%22%23000%22/%3E%3Cpath%20d%3D%22M38.07%2024.43h-4.26l-1.02%203.02h-1.8l4.03-11.18h1.87l4.04%2011.18h-1.84zm-3.82-1.4h3.38l-1.67-4.9h-.04zm15.4.34c0%202.53-1.36%204.16-3.4%204.16a2.76%202.76%200%200%201-2.57-1.42h-.04v4.03h-1.67V19.3h1.62v1.35h.03a2.89%202.89%200%200%201%202.6-1.44c2.06%200%203.42%201.64%203.42%204.16zm-1.72%200c0-1.65-.86-2.73-2.16-2.73-1.28%200-2.14%201.1-2.14%202.73%200%201.64.86%202.74%202.14%202.74%201.3%200%202.15-1.07%202.15-2.74zm10.68%200c0%202.53-1.35%204.16-3.4%204.16a2.76%202.76%200%200%201-2.56-1.42h-.04v4.03h-1.67V19.3h1.62v1.35h.03a2.89%202.89%200%200%201%202.6-1.44c2.06%200%203.42%201.64%203.42%204.16m-1.72%200c0-1.65-.85-2.73-2.15-2.73-1.28%200-2.14%201.1-2.14%202.73%200%201.64.86%202.74%202.14%202.74%201.3%200%202.15-1.07%202.15-2.74m7.65.96c.12%201.11%201.2%201.84%202.67%201.84%201.41%200%202.43-.73%202.43-1.73%200-.87-.62-1.39-2.06-1.74l-1.45-.35c-2.06-.5-3-1.46-3-3.01%200-1.93%201.67-3.26%204.06-3.26%202.36%200%203.98%201.33%204.03%203.26h-1.68c-.1-1.12-1.03-1.8-2.38-1.8-1.34%200-2.27.69-2.27%201.68%200%20.8.6%201.26%202.03%201.61l1.24.3c2.29.55%203.24%201.47%203.24%203.1%200%202.1-1.66%203.4-4.31%203.4-2.48%200-4.16-1.28-4.26-3.3zM75%2017.37v1.93h1.55v1.32H75v4.5c0%20.7.31%201.02%201%201.02.18%200%20.36-.02.54-.04v1.32a4.6%204.6%200%200%201-.93.07c-1.65%200-2.29-.62-2.29-2.2v-4.67h-1.18V19.3h1.18v-1.93zm2.45%206c0-2.56%201.5-4.17%203.86-4.17%202.37%200%203.87%201.6%203.87%204.17s-1.5%204.18-3.87%204.18-3.86-1.6-3.86-4.18m6.02%200c0-1.76-.8-2.8-2.16-2.8s-2.16%201.05-2.16%202.8c0%201.77.8%202.8%202.16%202.8s2.16-1.03%202.16-2.8m3.09-4.07h1.6v1.39h.03a1.94%201.94%200%200%201%201.96-1.48c.2%200%20.39.02.57.07v1.56a2.3%202.3%200%200%200-.75-.1%201.69%201.69%200%200%200-1.74%201.87v4.84h-1.67zm11.88%205.75c-.23%201.48-1.67%202.5-3.51%202.5-2.37%200-3.84-1.6-3.84-4.14%200-2.55%201.48-4.21%203.77-4.21%202.25%200%203.67%201.55%203.67%204.02v.57h-5.76v.1a2.12%202.12%200%200%200%202.2%202.3%201.84%201.84%200%200%200%201.88-1.14zm-5.66-2.43h4.08a1.96%201.96%200%200%200-2-2.07%202.06%202.06%200%200%200-2.08%202.07M34.04%207.86a2.38%202.38%200%200%201%202.53%202.67c0%201.71-.93%202.7-2.53%202.7H32.1V7.86zm-1.1%204.6h1.01a1.69%201.69%200%200%200%201.77-1.92%201.7%201.7%200%200%200-1.77-1.92h-1.01v3.85zm4.57-1.26a1.92%201.92%200%201%201%203.83%200%201.92%201.92%200%201%201-3.83%200m3%200c0-.88-.4-1.4-1.08-1.4-.7%200-1.1.52-1.1%201.4%200%20.89.4%201.4%201.1%201.4.69%200%201.08-.52%201.08-1.4m5.9%202.03h-.82l-.84-2.99h-.06l-.84%202.99h-.82l-1.12-4.05h.81l.73%203.09h.06l.83-3.1h.77l.83%203.1h.07l.72-3.1h.8zm2.06-4.05h.77v.64h.06a1.21%201.21%200%200%201%201.2-.72%201.32%201.32%200%200%201%201.41%201.5v2.63h-.8V10.8c0-.66-.28-.98-.87-.98a.93.93%200%200%200-.97%201.03v2.37h-.8zm4.71-1.59h.8v5.64h-.8zm1.92%203.61a1.92%201.92%200%201%201%203.82%200%201.92%201.92%200%201%201-3.82%200m3%200c0-.88-.4-1.4-1.1-1.4-.69%200-1.08.52-1.08%201.4%200%20.89.4%201.4%201.09%201.4.7%200%201.09-.52%201.09-1.4m1.66.88c0-.73.54-1.15%201.5-1.2l1.1-.07v-.35c0-.43-.28-.67-.82-.67-.45%200-.76.16-.85.45h-.77c.08-.7.73-1.14%201.65-1.14%201.02%200%201.6.5%201.6%201.36v2.77h-.78v-.57h-.06a1.36%201.36%200%200%201-1.22.64%201.22%201.22%200%200%201-1.35-1.22m2.6-.34v-.34l-.98.06c-.56.04-.81.23-.81.59s.31.57.75.57a.95.95%200%200%200%201.05-.88zm1.85-.54c0-1.28.66-2.1%201.69-2.1a1.34%201.34%200%200%201%201.24.72h.06V7.59h.8v5.64h-.77v-.64h-.06a1.4%201.4%200%200%201-1.27.7c-1.03%200-1.69-.8-1.69-2.09m.83%200c0%20.86.4%201.38%201.08%201.38s1.1-.53%201.1-1.38c0-.84-.43-1.37-1.1-1.37s-1.08.52-1.08%201.37m6.27%200a1.92%201.92%200%201%201%203.82%200%201.92%201.92%200%201%201-3.82%200m3%200c0-.88-.4-1.4-1.1-1.4-.69%200-1.08.52-1.08%201.4%200%20.89.4%201.4%201.09%201.4.7%200%201.09-.52%201.09-1.4m1.9-2.02h.76v.64h.06a1.21%201.21%200%200%201%201.21-.72%201.32%201.32%200%200%201%201.4%201.5v2.63h-.8V10.8c0-.66-.28-.98-.87-.98a.93.93%200%200%200-.97%201.03v2.37h-.8V9.18zm7.95-1.01v1.02h.88v.68h-.88v2.08c0%20.43.18.61.58.61.1%200%20.2%200%20.3-.02v.67c-.14.03-.29.04-.43.04-.9%200-1.25-.31-1.25-1.1V9.88h-.64V9.2h.64V8.17zm1.97-.58h.8v2.24h.06a1.25%201.25%200%200%201%201.24-.73%201.33%201.33%200%200%201%201.4%201.51v2.62h-.8V10.8c0-.65-.31-.98-.88-.98a.95.95%200%200%200-1.02%201.03v2.37h-.8zm8.16%204.54a1.65%201.65%200%200%201-1.76%201.18%201.84%201.84%200%200%201-1.87-2.1%201.87%201.87%200%200%201%201.87-2.11c1.12%200%201.8.77%201.8%202.04v.28h-2.86v.04a1.07%201.07%200%200%200%201.08%201.16.97.97%200%200%200%20.96-.49h.77zm-2.82-1.3h2.05a.98.98%200%200%200-1-1.05%201.04%201.04%200%200%200-1.05%201.05M22.3%2018.27a4.45%204.45%200%200%201%202.12-3.74%204.56%204.56%200%200%200-3.59-1.94c-1.51-.16-2.98.9-3.75.9-.78%200-1.97-.88-3.24-.86A4.78%204.78%200%200%200%209.8%2015.1c-1.74%203.01-.44%207.44%201.22%209.88.84%201.19%201.81%202.52%203.09%202.48%201.25-.06%201.71-.8%203.22-.8%201.5%200%201.93.8%203.23.77%201.34-.03%202.19-1.2%203-2.4a9.9%209.9%200%200%200%201.36-2.79%204.3%204.3%200%200%201-2.63-3.96zm-2.46-7.28a4.38%204.38%200%200%200%201-3.14%204.46%204.46%200%200%200-2.88%201.5%204.17%204.17%200%200%200-1.03%203.02%203.69%203.69%200%200%200%202.91-1.38%22%20fill%3D%22%23fff%22/%3E%3C/g%3E%3C/svg%3E%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%22-1%20-1%2022%2022%22%20id%3D%22language-icon%22%20y%3D%22667%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%231e66f5%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2018h-1.44a.6.6%200%200%201-.4-.12.8.8%200%200%201-.23-.31L17%2015h-5l-1%202.54a.8.8%200%200%201-.22.3.6.6%200%200%201-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89%209.5a12%2012%200%200%201-.39-1.24q-.09.37-.19.69l-.19.56-1.58%204.19zm-6.3-1.58a13.4%2013.4%200%200%201-2.91-1.41%2011.46%2011.46%200%200%200%202.81-5.37H12V4H7.31a4%204%200%200%200-.2-.56C6.87%202.79%206.6%202%206.6%202l-1.47.5s.4.89.6%201.5H0v1.33h2.15A11.23%2011.23%200%200%200%205%2010.7a17.2%2017.2%200%200%201-5%202.1q.56.82.87%201.38a23.3%2023.3%200%200%200%205.22-2.51%2015.6%2015.6%200%200%200%203.56%201.77zM3.63%205.33h4.91a8.1%208.1%200%200%201-2.45%204.45%209.1%209.1%200%200%201-2.46-4.45%22/%3E%3C/svg%3E%3Csvg%20width%3D%2258%22%20height%3D%2258%22%20viewBox%3D%22-1%20-1%2058%2058%22%20id%3D%22noimage%22%20y%3D%22689%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23eaecf0%22%20d%3D%22M0%200h56v56H0z%22/%3E%3Cpath%20fill%3D%22%2372777d%22%20d%3D%22M36.4%2013.5H17.8v24.9c0%201.4.9%202.3%202.3%202.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2M30.2%2017h5.1v6.4h-5.1zm-8.8%200h6v1.8h-6zm0%204.6h6v1.8h-6zm0%2015.5v-1.8h13.8v1.8zm13.8-4.5H21.4v-1.8h13.8zm0-4.7H21.4v-1.8h13.8z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%22-1%20-1%2022%2022%22%20id%3D%22search-icon%22%20y%3D%22747%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23eff1f5%22%20d%3D%22M7.5%2013c3.04%200%205.5-2.46%205.5-5.5S10.54%202%207.5%202%202%204.46%202%207.5%204.46%2013%207.5%2013m4.55.46A7.43%207.43%200%200%201%207.5%2015C3.36%2015%200%2011.64%200%207.5S3.36%200%207.5%200%2015%203.36%2015%207.5c0%201.71-.57%203.29-1.54%204.55l6.49%206.49-1.41%201.41z%22/%3E%3C/svg%3E%3Csvg%20width%3D%2242%22%20height%3D%2242%22%20viewBox%3D%22-1%20-1%2086%2086%22%20id%3D%22wikipedia_app_tile%22%20y%3D%22769%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22none%22%20opacity%3D%22.2%22%20d%3D%22M0%200h84v84H0z%22/%3E%3Cpath%20opacity%3D%22.2%22%20d%3D%22M2%2012a8%208%200%200%201%208-8h64a8%208%200%200%201%208%208v64a8%208%200%200%201-8%208H10a8%208%200%200%201-8-8z%22/%3E%3Crect%20x%3D%222.83%22%20y%3D%222.83%22%20width%3D%2278.33%22%20height%3D%2278.33%22%20rx%3D%227.17%22%20ry%3D%227.17%22%20fill%3D%22%23fff%22/%3E%3Cpath%20fill%3D%22%23eaecf0%22%20d%3D%22M74%203.67A6.34%206.34%200%200%201%2080.33%2010v64A6.34%206.34%200%200%201%2074%2080.33H10A6.34%206.34%200%200%201%203.67%2074V10A6.34%206.34%200%200%201%2010%203.67zM74%202H10a8%208%200%200%200-8%208v64a8%208%200%200%200%208%208h64a8%208%200%200%200%208-8V10a8%208%200%200%200-8-8%22/%3E%3Cpath%20fill%3D%22%23000222%22%20fill-rule%3D%22evenodd%22%20d%3D%22M69.73%2026.61a5.25%205.25%200%200%200-3.05%201.22%2011.5%2011.5%200%200%200-2.45%204L51.37%2061.42q-.13.41-.71.41a.79.79%200%200%201-.71-.41L42.74%2046l-8.3%2015.41a.79.79%200%200%201-.71.41.71.71%200%200%201-.73-.41l-12.63-29.6A10.35%2010.35%200%200%200%2017.88%2028a6.74%206.74%200%200%200-3.66-1.35.49.49%200%200%201-.38-.22.78.78%200%200%201-.18-.5q0-.72.4-.72%201.69%200%203.53.15t3.23.15q1.54%200%203.63-.15t3.88-.15q.4%200%20.4.72t-.25.72a4.9%204.9%200%200%200-2.66.88%202.35%202.35%200%200%200-1%202%204.1%204.1%200%200%200%20.4%201.55l10.49%2024%205.93-11.44-5.53-11.83a15.3%2015.3%200%200%200-2.45-4.08%204.84%204.84%200%200%200-2.9-1.12.45.45%200%200%201-.34-.22.82.82%200%200%201-.16-.5q0-.72.35-.72a29%2029%200%200%201%203.1.15%2026%2026%200%200%200%202.9.15q1.51%200%203.2-.15t3.43-.15q.4%200%20.4.72t-.25.72q-3.38.23-3.38%202A6.4%206.4%200%200%200%2040.8%2031l3.66%207.58%203.63-6.93a5.7%205.7%200%200%200%20.76-2.47q0-2.37-3.38-2.53-.3%200-.3-.72a.9.9%200%200%201%20.15-.49q.15-.23.3-.23%201.21%200%203%20.15t2.77.15q.78%200%202.29-.13%201.92-.18%203.2-.18.3%200%20.3.62%200%20.82-.55.82a6.25%206.25%200%200%200-3.16%201.11%2014.2%2014.2%200%200%200-3%204.1L45.62%2041l6.56%2013.66%209.68-23a6.3%206.3%200%200%200%20.5-2.32q0-2.53-3.38-2.68-.3%200-.3-.72t.45-.72q1.24%200%202.93.15t2.62.15a25%2025%200%200%200%202.57-.15%2027%2027%200%200%201%202.75-.2q.35%200%20.35.62a.94.94%200%200%201-.19.57.53.53%200%200%201-.43.25%22/%3E%3C/svg%3E%3C/svg%3E");
}
:root .mw-logo-wordmark {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%2018%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20fill-rule%3D%22nonzero%22%20d%3D%22m18.339%200%20.199.001h.375l.174.001h.315l.138.001.323.001h.171l.058.053v.5q0%20.208-.231.208c-.753.035-.908.11-1.184.507-.15.216-.447.68-.755%201.204L15.28%207.419l-.074.154%203.23%206.611.196.054L23.72%202.162q.265-.73-.078-1.035c-.228-.197-.389-.315-.978-.34l-.477-.023a.28.28%200%200%201-.168-.061.17.17%200%200%201-.08-.147V.054l.073-.052h5.749l.058.052v.502q0%20.204-.231.205-1.129.051-1.673.489c-.362.294-.645.698-.848%201.225%200%200-1.53%203.5-3.137%207.159l-.268.61c-1.12%202.55-2.24%205.09-2.876%206.501-.613%201.17-1.22%201.06-1.745-.033-.411-.847-1.1-2.33-1.8-3.86l-.469-1.024c-.273-.6-.54-1.19-.786-1.727-1.08%202.23-2.56%205.26-3.3%206.624-.715%201.24-1.3%201.08-1.771.032-1.63-3.84-4.97-10.6-6.539-14.35-.29-.697-.51-1.14-.716-1.32Q1.347.827.36.774.002.734%200%20.593V.067L.058.016.592.014H1.6l.969-.001h.253l1.734.001h.225l.95.001h.577l.058.052v.5q0%20.207-.26.206L5.454.8q-.84.036-.84.5c0%20.145.06.38.19.696%201.25%203.05%205.58%2012.2%205.576%2012.169l.158.04%202.787-5.56c-.34-.751-.558-1.23-.558-1.234l-1.916-3.765s-.37-.753-.497-1.004C9.512.972%209.53.882%208.68.772c-.238-.031-.361-.061-.362-.18V.065L8.39.013h.702L10.58.01h2.77l.131.043V.58q0%20.181-.26.182l-.36.052c-.909.07-.76.442-.156%201.644l1.838%203.76%202.034-4.055c.318-.693.278-.9.157-1.064l-.027-.035c-.081-.096-.351-.251-.94-.275l-.231-.025a.28.28%200%200%201-.167-.06.17.17%200%200%201-.079-.147v-.5l.072-.052L16.24%200zm10.464%205.318h.118c.71%200%202.73-.053%202.73-.053l.027.053v.577c0%20.08-.053.131-.158.132l-.551.053c-.814.078-1.1.29-1.103.815v8.74c0%20.578.262.92%201.103.998l.551.054c.079%200%20.157.051.158.156v.552l-.027.053s-1.99-.053-2.808-.053c-.735%200-2.78.053-2.783.053l-.052-.053v-.552c0-.105.078-.156.184-.156l.525-.054c.866-.078%201.13-.499%201.128-.997V6.895c0-.575-.316-.736-1.128-.813l-.525-.054c-.105%200-.184-.024-.184-.105v-.605l.026-.053s1.89.048%202.769.053m8.81%2010.318c0%20.577.341.866%201.103.997l.288.054c.079.025.157.051.158.156v.551l-.027.054s-1.65-.054-2.44-.054c-.736%200-2.89.054-2.888.054l-.053-.054v-.55c0-.106.08-.157.184-.157l.525-.054c.787-.079%201.13-.499%201.129-.997V6.895c0-.575-.29-.736-1.129-.813l-.525-.055c-.105%200-.184-.024-.184-.105v-.604l.027-.053s2.15.053%202.966.053c.736%200%202.39-.053%202.389-.053l.026.053v.577c0%20.079-.053.105-.158.131l-.288.054c-.814.156-1.1.289-1.103.815v3.964c.866%200%201.36-.444%202.52-1.68%201.05-1.16%201.86-2.12%201.864-2.626%200-.21-.236-.445-.762-.526-.105-.024-.157-.052-.157-.13V5.29l.026-.024s2.13.053%202.888.053c.682%200%201.84-.053%201.837-.053l.079.024v.606c0%20.079-.079.131-.21.131-1.02.08-1.73.131-2.678%201.208l-2.257%202.597c-.446.475-.604.76-.604.972%200%20.157.105.288.237.445l3.963%204.778c.315.366.945.525%201.47.628l.131.026c.08.025.184.077.184.156v.551l-.079.027s-1.39-.026-2.126-.027c-.656%200-1.6.027-1.6.027l-.027-.027v-.315c0-.342-.026-.629-.394-1.049l-2.914-3.623c-.394-.526-.814-.655-1.39-.655v3.89zm14.151%200c0%20.577.262.919%201.102.997l.552.054c.078%200%20.157.051.157.156v.551l-.026.054s-1.99-.054-2.809-.054c-.735%200-2.78.054-2.782.054l-.053-.054v-.55c0-.106.08-.157.184-.157l.525-.054c.866-.079%201.13-.499%201.129-.997V6.895c0-.575-.315-.736-1.129-.813l-.525-.055c-.105%200-.184-.024-.184-.105v-.604l.027-.053s2.07.053%202.887.053c.709%200%202.73-.053%202.73-.053l.026.053v.577c0%20.079-.052.131-.157.131l-.552.054c-.814.078-1.1.289-1.102.815zm5.672-8.69c0-.814-.341-.84-1.575-.919-.157%200-.184-.077-.184-.13v-.605l.053-.026c.394%200%201.94.053%202.703.053.735%200%201.78-.053%202.757-.053%203.73%200%204.41%201.84%204.407%203.203%200%201.58-.76%204.04-4.486%204.043-.656%200-1.18-.054-1.655-.263v3.516c0%20.576.315.71%201.156.84l.526.079c.105.025.185.053.185.156v.551l-.024.054s-2.1-.054-2.915-.054c-.735%200-2.7.054-2.704.054l-.026-.054v-.551c0-.105.053-.131.158-.156l.55-.08c.815-.104%201.08-.34%201.077-.84zm2.021%204.568c.525.211%201.18.236%201.706.237%201.58%200%202.33-.947%202.335-2.967%200-2.26-1.02-2.76-2.466-2.756-1.26%200-1.58.236-1.576.919zm10.661%205.88c-.787%200-2.6.054-2.598.054l-.027-.054v-.577c0-.052.027-.13.158-.13l.605-.054c.815-.079%201.05-.604%201.051-1.128V6.843c0-.606-.315-.71-1.05-.761l-.606-.055c-.157-.024-.157-.077-.158-.105v-.604l.027-.053s2.05.053%202.834.053h3.859c.787%200%202.65-.053%202.652-.053l.055.053c.024%201.13.208%202.15.393%203.15l-.654.105c-.288-.972-.786-2.36-2.466-2.362h-2.1c-.5%200-.761.184-.761.63v3.806h1.967c.736%200%20.92-.315%201.025-.84l.157-.55c0-.08.053-.133.157-.133h.444c.055%200%20.055.027.055.079-.055.576-.157%201.31-.158%201.943%200%20.655.105%201.21.158%201.811l-.055.054h-.444c-.13%200-.186-.054-.186-.133l-.13-.576c-.106-.526-.342-.815-1.028-.815h-1.966v4.017c0%20.497.286.995.76.996h2.495c1.34%200%202.08-.84%202.388-2.207l.654.079-.526%203.017-.052.053s-1.55-.053-2.336-.053zm9.872-.707.604-.054c.788-.079%201.05-.315%201.05-1.128V6.843c0-.685-.185-.685-1.05-.761l-.576-.055c-.105%200-.186-.052-.186-.13v-.578l.026-.053s2.31.053%202.784.053c.497%200%202.78-.053%203.465-.053%204.38%200%206.54%202.73%206.537%206.221%200%204.59-3.26%205.96-6.167%205.958-2.1%200-3.02-.054-3.832-.054-.788%200-2.78.054-2.784.054l-.026-.054v-.55a.147.147%200%200%201%20.155-.154m5.855%200c2.89%200%204.52-1.07%204.515-4.752%200-2.73-.605-5.91-5.014-5.908-1.02%200-1.68.157-1.68.816v8.662c0%20.733.183%201.18%202.179%201.182m12.996-1.051c0%20.577.262.919%201.102.997l.551.054c.079%200%20.157.051.158.156v.551l-.027.054s-1.99-.054-2.807-.054c-.736%200-2.78.054-2.783.054l-.053-.054v-.55c0-.106.079-.157.184-.157l.526-.054c.865-.079%201.13-.499%201.128-.997V6.895c0-.575-.316-.736-1.128-.813l-.526-.055c-.105%200-.184-.024-.184-.105v-.604l.026-.053s2.07.053%202.886.053c.708%200%202.73-.053%202.73-.053l.025.053v.577c0%20.079-.055.131-.158.131l-.551.054c-.815.078-1.1.289-1.103.815zm8.086.997.762.054c.105%200%20.21.078.21.209v.498l-.053.054s-2.86-.054-3.491-.054c-.683%200-2.36.054-2.364.054l-.053-.054v-.498c0-.13.079-.21.21-.21%201.16-.078%201.81-.29%202.546-1.97l5.826-13.65c.288-.682.5-.946.895-.946.365%200%20.498.264.707.788l5.38%2014.227c.37%201.02.895%201.42%201.945%201.523l.288.025c.132%200%20.264.078.263.211v.497l-.078.053s-2.02-.053-3.046-.053c-.92%200-3.49.053-3.492.053l-.025-.053v-.497c0-.133.053-.21.187-.21l.735-.054c.996-.078%201.37-.395%201.103-1.128l-1.602-4.438h-5.461c-.63%200-.787.105-.918.444l-1.524%203.807c-.262.66.079%201.24%201.05%201.318m6.431-6.67-2.546-7.007h-.052l-2.625%206.667c-.105.265.078.341.655.342h4.568v-.001z%22/%3E%3C/svg%3E");
}
:root .mw-logo-tagline {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20117%2013%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22M89.777%203.326c.104%200%20.17.039.17.092%200%200-.055.363-.055.832%200%20.093.076.081.117.039.584-.594%201.3-.921%201.781-.921%201.33%200%202.3%201.27%202.301%202.651%200%201.05-.352%201.86-.963%202.457-.533.509-1.18.729-1.91.729-.41%200-.812-.072-1.131-.201-.133-.055-.182-.071-.182.098v1.403c0%201.08.143%201.13%201.064%201.185.078.077.078.352%200%20.428-.558-.011-.96-.025-1.572-.025-.572%200-.91.014-1.455.025-.078-.078-.078-.353%200-.431.793-.038.936-.104.936-1.184V4.951c0-.74-.143-.818-.846-.885-.025-.078-.053-.285-.025-.363.896-.116%201.4-.233%201.77-.377m-17.266.144c.078.078.078.353%200%20.431-.479.039-.869.455-1.053.832-.688%201.46-1.26%202.8-2.301%205.305-.16.385-.33.757-.533%201.117-.467.834-.989.938-1.26.938-.352%200-.611-.209-.611-.48%200-.17.195-.561.572-.561.143%200%20.193.039.377.039.324%200%20.506-.116.648-.377.195-.402.354-.762.508-1.195.131-.363-.068-.961-.182-1.223l-1.473-3.419c-.354-.828-.459-.923-1.023-.976-.078-.078-.078-.353%200-.431q.388.023%201.053.024c.469%200%20.988-.012%201.469-.024.078.078.078.353%200%20.431-.797.062-.66.297-.426.846l1.152%202.703c.109.259.221.224.311.014l1.291-2.977c.203-.473-.215-.547-.625-.586-.078-.078-.078-.353%200-.431.48.015.729.024%201.184.024.363%200%20.6-.012.922-.024M105.829.002c.117%200%20.17.039.17.13%200%200-.046.448-.052%201.189l-.001%206.065c0%20.639.117.885.949.949.078.078.078.273%200%20.352-.793.092-1.38.285-1.664.521a.5.5%200%200%201-.299%200s.014-.639.014-.768c0-.092-.094-.067-.156-.019-.637.526-1.12.785-1.625.785-1.4%200-2.21-1.17-2.211-2.771%200-.963.338-1.73.898-2.286.52-.494%201.09-.781%201.949-.781.43%200%20.963.222%201.014.222.092%200%20.117-.026.117-.117V1.809c0-1.09-.156-1.03-.832-1.065-.078-.076-.104-.284-.078-.391.52-.039%201.48-.221%201.807-.351m7.457%203.372c.949%200%201.96.352%201.965%202.197v1.938c0%20.6.014%201.1.52%201.105.273%200%20.328-.209.404-.209.051%200%20.168.131.168.222%200%20.063-.467.585-1.104.585-.694%200-.924-.48-1.002-.754h-.024l-.001-.005-.258.206c-.572.441-.82.547-1.418.547-.91%200-1.64-.377-1.639-1.404%200-.884.898-1.57%202.146-1.885l1.115-.273c.039-.013.078-.064.078-.154%200-1.47-.609-1.69-1.055-1.689-.492%200-1.08.145-1.078.546%200%20.146.014.224.025.263a.6.6%200%200%201%20.039.231c0%20.169-.195.429-.572.429-.299%200-.455-.143-.455-.455%200-.699%201.08-1.44%202.146-1.441m-15.579.018c1.81%200%202.2%201.17%202.197%202.265%200%20.143-.09.221-.246.221l-3.459-.025c0%20.754.154%201.35.416%201.78.402.663.949.937%201.418.937.754%200%201.13-.207%201.609-.701.156.011.234.078.273.206-.52.676-1.22%201.13-2.211%201.131-.936%200-1.55-.312-1.988-.832-.43-.494-.609-1.2-.609-1.924%200-1.98%201.47-3.06%202.6-3.058m-13.081-.024c2.02%200%202.73%201.57%202.73%202.926%200%201.3-.818%202.91-2.756%202.912-1.83%200-2.73-1.47-2.73-2.795%200-1.65%201-3.04%202.756-3.043m-49.254.024c1.81%200%202.2%201.17%202.197%202.265%200%20.143-.091.221-.247.221l-3.458-.025c0%20.754.156%201.35.416%201.78.403.663.949.937%201.417.937.754%200%201.13-.207%201.612-.701.156.011.234.078.273.206-.52.676-1.22%201.13-2.21%201.131-.936%200-1.55-.312-1.989-.832-.429-.494-.611-1.2-.611-1.924%200-1.98%201.47-3.06%202.6-3.058m5.85%200c1.81%200%202.2%201.17%202.197%202.265%200%20.143-.091.221-.247.221l-3.458-.025c0%20.754.156%201.35.416%201.78.403.663.949.937%201.417.937.754%200%201.13-.207%201.612-.701.156.011.234.078.273.206-.52.676-1.22%201.13-2.21%201.131-.936%200-1.55-.312-1.989-.832-.429-.494-.611-1.2-.611-1.924%200-1.98%201.47-3.06%202.6-3.058m-25.009%200c1.81%200%202.2%201.17%202.197%202.265%200%20.143-.091.221-.247.221l-3.458-.025c0%20.754.156%201.35.416%201.78.403.663.949.937%201.417.937.754%200%201.13-.207%201.612-.701.156.011.234.078.273.206-.52.676-1.22%201.13-2.21%201.131-.936%200-1.55-.312-1.989-.832-.429-.494-.611-1.2-.611-1.924%200-1.98%201.47-3.06%202.6-3.058m47.407-.024c1.25%200%201.99.521%201.988%201.234%200%20.402-.363.571-.637.571s-.453-.117-.494-.468c-.053-.455-.156-.91-.924-.91-.857%200-1.48.857-1.482%202.288%200%201.52.795%202.48%201.742%202.481.561%200%201.12-.285%201.561-.856.117.013.221.063.273.183-.65%201.07-1.34%201.32-2.119%201.315-1.64%200-2.57-1.16-2.574-2.834%200-1.85%201.38-3%202.666-3.004m12.037%200c1.25%200%201.99.521%201.988%201.234%200%20.402-.363.571-.637.571-.271%200-.453-.117-.494-.468-.051-.455-.154-.91-.922-.91-.859%200-1.48.857-1.482%202.288%200%201.52.793%202.48%201.742%202.481.559%200%201.12-.285%201.561-.856.117.013.221.063.271.183-.648%201.07-1.34%201.32-2.119%201.315-1.64%200-2.57-1.16-2.572-2.834%200-1.85%201.38-3%202.664-3.004m-45.836-.035c.104%200%20.169.038.169.091%200%200-.065.624-.065%201.04%200%20.063.039.13.117-.015.299-.506.832-1.08%201.443-1.078.546%200%20.78.375.78.623%200%20.326-.299.649-.611.649-.273%200-.403-.247-.533-.377-.078-.077-.182-.091-.273-.091-.156%200-.455.43-.598.637-.156.234-.312.533-.312.871v1.809c0%201.08.156%201.12%201.066%201.184.078.078.078.354%200%20.43a61%2061%200%200%200-1.573-.025c-.52%200-.936.014-1.482.025-.078-.076-.078-.352%200-.43.806-.053.962-.104.962-1.184V4.958c0-.719-.143-.822-.845-.886-.052-.078-.052-.285-.026-.362.897-.117%201.42-.234%201.781-.377M80.104.002c.115%200%20.168.039.168.13%200%200-.046.448-.052%201.189l-.001%206.168c0%201.08.145%201.14.938%201.184.078.078.078.352%200%20.43-.561-.014-.885-.025-1.443-.025-.572%200-.91.014-1.457.025-.078-.078-.078-.352%200-.43.793-.039.938-.104.938-1.184l-.001-5.68c0-1.09-.156-1.03-.832-1.065-.078-.076-.105-.284-.078-.391.52-.039%201.49-.221%201.82-.351M52.231.633c.039%200%20.052.013.052.039.026.104.221%201.35.286%201.885a.7.7%200%200%201-.429.065c-.286-.897-.494-1.42-1.469-1.417h-1.365c-.312%200-.468.26-.468.571v2.601h1.183c1.1.006%201.14-.163%201.183-.878.078-.078.351-.078.429%200-.013.39-.026.676-.026%201.117s.013.688.026%201.145c-.078.078-.351.078-.429%200-.039-.585-.078-.884-1.183-.884h-1.183V8.01c0%20.353.182.56.468.56h1.768c.988%200%201.44-.768%201.703-1.703a.6.6%200%200%201%20.455.064%2021%2021%200%200%201-.481%202.172s-.914-.022-1.543-.025h-2.963c-.21.003-1.09.015-1.643.025-.078-.078-.078-.352%200-.43.91-.039%201.13-.104%201.131-1.184V2.276c0-1.08-.221-1.15-1.131-1.185-.078-.078-.078-.353%200-.431.65.015%201.68.025%201.677.025h3.315c.312%200%20.416-.013.637-.052m56.966%202.696c.104%200%20.168.039.168.092%200%200-.051.832-.051%201.479v2.592c-.001%201.08.142%201.13.935%201.181.078.078.078.352%200%20.43-.559-.014-.885-.025-1.443-.025-.57%200-.908.014-1.457.025-.074-.078-.074-.352%200-.43.793-.064.938-.104.938-1.184V4.954c0-.74-.137-.816-.846-.883-.025-.078-.054-.287-.025-.364.896-.117%201.41-.234%201.781-.378M27.199.633c.031%200%20.046.009.052.039.018.099.214%201.35.282%201.885l-.403.065c-.286-.897-.494-1.42-1.469-1.417h-1.365c-.312%200-.468.13-.468.442v2.729h1.209c1.1%200%201.14-.169%201.183-.885.078-.077.351-.077.429%200-.013.391-.026.677-.026%201.119%200%20.439.013.688.026%201.144-.078.078-.351.078-.429%200-.039-.585-.078-.884-1.183-.884h-1.209v2.619c0%201.08.221%201.14%201.131%201.184.078.078.078.352%200%20.43-.65-.014-1.03-.025-1.677-.025-.663%200-1.05.014-1.69.025-.078-.078-.078-.352%200-.43.91-.039%201.13-.104%201.131-1.184V2.276c0-1.08-.221-1.15-1.131-1.185-.078-.078-.078-.353%200-.431.65.015%201.68.025%201.677.025h3.319c.308%200%20.384-.008.611-.052M8.398%200c.104%200%20.156.039.156.13%200%200-.037.455-.039%201.3l-.009%202.992c0%20.183.083.048.127%200%20.793-.884%201.42-1.05%202.054-1.054.455%200%20.861.156%201.079.44.303.396.351%201.03.351%201.742v1.938c0%201.06.143%201.12.871%201.184.065.078.065.352%200%20.43-.559-.014-.845-.025-1.378-.025-.52%200-.78.014-1.326.025-.065-.078-.065-.352%200-.43.676-.064.806-.117.806-1.184V5.51c0-.39-.026-.743-.156-1.001-.151-.298-.424-.468-.689-.468-.512%200-1.01.28-1.508.767a.76.76%200%200%200-.221.549v2.131c0%201.08.117%201.13.777%201.184.078.078.078.352%200%20.43-.547-.014-.777-.025-1.285-.025-.559%200-.892.014-1.427.025-.078-.078-.078-.352%200-.43.754-.053.907-.104.907-1.184V1.805c0-.299%200-.598-.91-.598H4.927c-.468%200-.598.233-.598.676v5.604c0%201.08.221%201.14%201.261%201.184.078.078.078.352%200%20.43-.65-.014-1.1-.025-1.807-.025-.715%200-1.18.014-1.82.025-.078-.078-.078-.352%200-.43%201.04-.039%201.26-.104%201.261-1.184V1.843c0-.401-.13-.637-.598-.637H1.534C.819%201.206.65%201.361.39%202.4L0%202.337C.156%201.649.234.977.286.335l.351.052c0%20.078%200%20.301.273.301h5.174c1.1%200%201.26-.099%202.314-.688m47.33%203.328c.104%200%20.156.039.156.104%200%200-.065.6-.065.988%200%20.183.091.052.13%200%20.792-.882%201.42-1.05%202.054-1.052.455%200%20.857.156%201.078.44.301.403.352%201.03.352%201.742v1.938c0%201.06.145%201.12.871%201.184.064.078.064.352%200%20.43-.559-.014-.846-.025-1.377-.025-.521%200-.779.014-1.327.025-.065-.078-.065-.352%200-.43.676-.064.806-.117.806-1.184V5.51c0-.39-.026-.74-.156-1.001-.156-.299-.429-.468-.689-.468-.507%200-1.01.284-1.508.767a.77.77%200%200%200-.221.549v2.131c0%201.06.117%201.12.78%201.184.078.078.078.352%200%20.43-.546-.014-.78-.025-1.287-.025-.559%200-.897.014-1.43.025-.078-.078-.078-.352%200-.43.78-.064.91-.117.91-1.184V4.953c0-.754-.143-.818-.845-.883-.026-.078-.052-.287-.026-.364.897-.117%201.43-.234%201.794-.378m28.755.473c-1.09-.003-1.49%201.18-1.494%202.312%200%201%20.494%202.67%201.846%202.666.611%200%201.4-.353%201.404-2.066%200-1.91-.637-2.91-1.756-2.912m6.942.163c-.379%200-.91.338-1.312.754-.167.175-.208.303-.208.575v2.418c0%20.47.051.545.311.778.234.209.689.273.924.273%201.46%200%201.83-1.33%201.832-2.395%200-1.47-.715-2.4-1.547-2.403m22.819%202.084-1.032.274c-.959.254-1.23.846-1.234%201.431%200%20.401.285.923.938.923.363%200%20.809-.286%201.146-.561.104-.078.182-.168.182-.338zm-10.588-2.225c-.26%200-.809.039-1.209.648-.193.271-.377.793-.377%201.729%200%201.62.729%202.39%201.432%202.393.322%200%20.738-.208%201.223-.624.184-.158.207-.26.207-.507V4.993c0-.402-.039-.493-.221-.701-.262-.299-.586-.469-1.055-.469m-68.284%200c-.312%200-1.22.117-1.469%201.586l2.353-.039c.143-.002.195-.064.195-.183%200-1.09-.585-1.36-1.079-1.364m-19.159%200c-.312%200-1.22.117-1.469%201.586l2.353-.039c.143-.002.195-.064.195-.183%200-1.09-.585-1.36-1.079-1.364m25.009%200c-.312%200-1.22.117-1.469%201.586l2.353-.039c.143-.002.195-.064.195-.183%200-1.09-.585-1.36-1.079-1.364m56.482%200c-.311%200-1.22.117-1.469%201.586l2.354-.039c.145-.002.195-.064.195-.183%200-1.09-.586-1.36-1.08-1.364M108.805.665c.352%200%20.623.363.623.676%200%20.273-.312.624-.676.624-.312%200-.623-.338-.623-.677.001-.311.364-.623.676-.623%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-menu {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M1%203v2h18V3zm0%208h18V9H1zm0%206h18v-2H1z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-ellipsis {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%2217%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-feature-zebra-design-enabled .vector-dropdown .vector-dropdown-label:not(.cdx-button--icon-only)::after,
:root .vector-icon.mw-ui-icon-wikimedia-expand {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22m11.05%203.996-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205z%22/%3E%3C/svg%3E") !important;
}
:root .cdx-checkbox__input:checked:not(:indeterminate) + .cdx-checkbox__icon::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22M7%2014.17%202.83%2010l-1.41%201.41L7%2017%2019%205l-1.41-1.42z%22/%3E%3C/svg%3E") !important;
}
:root .vector-page-titlebar .mw-portlet-lang .vector-dropdown-label.cdx-button--action-progressive.cdx-button--weight-quiet::after {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%231e66f5%22%20d%3D%22m11.05%203.996-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205z%22/%3E%3C/svg%3E") !important;
}
:root .vector-dropdown .vector-dropdown-label:not(.cdx-button--icon-only)::after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22m11.05%203.996-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205z%22/%3E%3C/svg%3E") !important;
}
:root .vector-icon.mw-ui-icon-wikimedia-language-progressive {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M20%2018h-1.44a.6.6%200%200%201-.4-.12.8.8%200%200%201-.23-.31L17%2015h-5l-1%202.54a.8.8%200%200%201-.22.3.6.6%200%200%201-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89%209.5a12%2012%200%200%201-.39-1.24q-.09.37-.19.69l-.19.56-1.58%204.19zm-6.3-1.58a13.4%2013.4%200%200%201-2.91-1.41%2011.46%2011.46%200%200%200%202.81-5.37H12V4H7.31a4%204%200%200%200-.2-.56C6.87%202.79%206.6%202%206.6%202l-1.47.5s.4.89.6%201.5H0v1.33h2.15A11.23%2011.23%200%200%200%205%2010.7a17.2%2017.2%200%200%201-5%202.1q.56.82.87%201.38a23.3%2023.3%200%200%200%205.22-2.51%2015.6%2015.6%200%200%200%203.56%201.77zM3.63%205.33h4.91a8.1%208.1%200%200%201-2.45%204.45%209.1%209.1%200%200%201-2.46-4.45%22%20fill%3D%22%231e66f5%22/%3E%3C/svg%3E") !important;
}
:root .vector-icon.mw-ui-icon-wikimedia-language {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M20%2018h-1.44a.6.6%200%200%201-.4-.12.8.8%200%200%201-.23-.31L17%2015h-5l-1%202.54a.8.8%200%200%201-.22.3.6.6%200%200%201-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89%209.5a12%2012%200%200%201-.39-1.24q-.09.37-.19.69l-.19.56-1.58%204.19zm-6.3-1.58a13.4%2013.4%200%200%201-2.91-1.41%2011.46%2011.46%200%200%200%202.81-5.37H12V4H7.31a4%204%200%200%200-.2-.56C6.87%202.79%206.6%202%206.6%202l-1.47.5s.4.89.6%201.5H0v1.33h2.15A11.23%2011.23%200%200%200%205%2010.7a17.2%2017.2%200%200%201-5%202.1q.56.82.87%201.38a23.3%2023.3%200%200%200%205.22-2.51%2015.6%2015.6%200%200%200%203.56%201.77zM3.63%205.33h4.91a8.1%208.1%200%200%201-2.45%204.45%209.1%209.1%200%200%201-2.46-4.45%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E") !important;
}
:root .mw-parser-output a.external[class="external text"][rel="nofollow"] {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%231e66f5%22%20d%3D%22M6%201h5v5L8.86%203.85%204.7%208%204%207.3l4.15-4.16zM2%203h2v1H2v6h6V8h1v2a1%201%200%200%201-1%201H2a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1%22/%3E%3C/svg%3E") !important;
}
:root #mw-indicator-mw-helplink a {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22M10%200a10%2010%200%201%200%2010%2010A10%2010%200%200%200%2010%200m1%2016H9v-2h2zm2.71-7.6a2.6%202.6%200%200%201-.33.74%203.2%203.2%200%200%201-.48.55l-.54.48c-.21.18-.41.35-.58.52a2.5%202.5%200%200%200-.47.56A2.3%202.3%200%200%200%2011%2012a3.8%203.8%200%200%200-.11%201H9.08a9%209%200%200%201%20.07-1.25%203.3%203.3%200%200%201%20.25-.9%202.8%202.8%200%200%201%20.41-.67%204%204%200%200%201%20.58-.58c.17-.16.34-.3.51-.44a3%203%200%200%200%20.43-.44%201.8%201.8%200%200%200%20.3-.55%202%202%200%200%200%20.11-.72%202.1%202.1%200%200%200-.17-.86%201.7%201.7%200%200%200-1-.9%201.7%201.7%200%200%200-.5-.1%201.77%201.77%200%200%200-1.53.68%203%203%200%200%200-.5%201.82H6.16a4.7%204.7%200%200%201%20.28-1.68%203.6%203.6%200%200%201%20.8-1.29%203.9%203.9%200%200%201%201.28-.83A4.6%204.6%200%200%201%2010.18%204a4.4%204.4%200%200%201%201.44.23%203.5%203.5%200%200%201%201.15.65%203.1%203.1%200%200%201%20.78%201.06%203.5%203.5%200%200%201%20.29%201.45%203.4%203.4%200%200%201-.13%201.01%22/%3E%3C/svg%3E") !important;
}
:root [alt="Edit this at Wikidata"] {
    content: url("data:image/svg+xml,%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210.000000pt%22%20height%3D%2210.000000pt%22%20viewBox%3D%220%200%2010.000000%2010.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%3Cpath%20d%3D%22M7%202c0%20.5.5%201%201.1%201%20.5%200%20.7-.5.4-1-.3-.6-.8-1-1.1-1-.2%200-.4.4-.4%201M3%205.5c-3.2%203.4-1.6%204.6%201.6%201.3C6%205.4%206.8%204%206.2%203.7c-.5-.4-2%20.5-3.2%201.8%22%20fill%3D%22%231e66f5%22%20stroke%3D%22none%22/%3E%3C/svg%3E") !important;
}
:root .cdx-search-input .cdx-text-input__icon.cdx-text-input__start-icon {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236c6f85%22%3E%3Cpath%20d%3D%22M12.2%2013.6a7%207%200%201%201%201.4-1.4l5.4%205.4-1.4%201.4zM3%208a5%205%200%201%200%2010%200A5%205%200%200%200%203%208%22/%3E%3C/svg%3E") !important;
}
:root .vector-icon.mw-ui-icon-wikimedia-listBullet {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M7%2015h12v2H7zm0-6h12v2H7zm0-6h12v2H7z%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%224%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%2216%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E") !important;
}
:root ul {
    list-style-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%225%22%20height%3D%2213%22%3E%3Ccircle%20cx%3D%222.5%22%20cy%3D%229%22%20r%3D%222.5%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .oo-ui-icon-volumeUp,
:root .mw-ui-icon-volumeUp::before {
    background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%234c4f69%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M4%206v8l5.2%203.9c.3.3.8%200%20.8-.5V2.6c0-.5-.5-.8-.8-.5zm0%208H1a1%201%200%200%201-1-1V7a1%201%200%200%201%201-1h3m12.4%2011.4a1%201%200%200%201-.7-1.7%208%208%200%200%200%200-11.4A1%201%200%200%201%2017%203a10%2010%200%200%201%200%2014.2%201%201%200%200%201-.7.3z%22/%3E%3Cpath%20d%3D%22M13.5%2014.5a1%201%200%200%201-.7-.3%201%201%200%200%201%200-1.4%204%204%200%200%200%200-5.6%201%201%200%200%201%201.4-1.4%206%206%200%200%201%200%208.4%201%201%200%200%201-.7.3%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-fullScreen {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M1%201v6h2V3h4V1zm2%2012H1v6h6v-2H3zm14%204h-4v2h6v-6h-2zm0-16h-4v2h4v4h2V1z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .fancycaptcha-reload {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%231e66f5%22%20d%3D%22M15.65%204.35A8%208%200%201%200%2017.4%2013h-2.22a6%206%200%201%201-1-7.22L11%209h7V2z%22/%3E%3C/svg%3E");
}
:root .popups-icon--settings {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%234c4f69%22%3E%3Cg%20transform%3D%22translate%2810%2010%29%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M1.5-10h-3l-1%206.5h5m0%207h-5l1%206.5h3%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2845%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2890%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%28135%29%22/%3E%3C/g%3E%3Cpath%20d%3D%22M10%202.5a7.5%207.5%200%200%200%200%2015%207.5%207.5%200%200%200%200-15v4a3.5%203.5%200%200%201%200%207%203.5%203.5%200%200%201%200-7%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-userAvatar {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M10%2011c-5.92%200-8%203-8%205v3h16v-3c0-2-2.08-5-8-5%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%225.5%22%20r%3D%224.5%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-watchlist {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M1%203h16v2H1Zm0%206h6v2H1Zm0%206h8v2H1Zm8-4.24h3.85L14.5%207l1.65%203.76H20l-3%203.17.9%204.05-3.4-2.14L11.1%2018l.9-4.05Z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-tray {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M3%201a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V3a2%202%200%200%200-2-2zm14%2012h-4l-1%202H8l-1-2H3V3h14z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-bell {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M16%207a5.38%205.38%200%200%200-4.46-4.85C11.6%201.46%2011.53%200%2010%200S8.4%201.46%208.46%202.15A5.38%205.38%200%200%200%204%207v6l-2%202v1h16v-1l-2-2zm-6%2013a3%203%200%200%200%203-3H7a3%203%200%200%200%203%203%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-user-menu-logged-in .vector-dropdown-label::after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22m11.05%203.996-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205z%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-star {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M20%207h-7L10%20.5%207%207H0l5.46%205.47-1.64%207%206.18-3.7%206.18%203.73-1.63-7zm-10%206.9-3.76%202.27%201-4.28L3.5%208.5h4.61L10%204.6l1.9%203.9h4.6l-3.73%203.4%201%204.28z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-userTalk {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M18%200H2a2%202%200%200%200-2%202v18l4-4h14a2%202%200%200%200%202-2V2a2%202%200%200%200-2-2m-4%204a1.5%201.5%200%201%201-1.5%201.5A1.5%201.5%200%200%201%2014%204M6%204a1.5%201.5%200%201%201-1.5%201.5A1.5%201.5%200%200%201%206%204m4%208c-2.61%200-4.83-.67-5.65-3h11.3c-.82%202.33-3.04%203-5.65%203%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-sandbox {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M8%2012V9l6-6%203%203-6%206zm10-7-3-3%202-2%203%203zM8%202h2v2H8zM4%202h2v2H4zM0%203a1%201%200%200%201%201-1h1v2H0zm0%203h2v2H0zm0%204h2v2H0zm0%204h2v2H0zm0%204h2v2H1a1%201%200%200%201-1-1zm4%200h2v2H4zm4%200h2v2H8zm4%200h2v1a1%201%200%200%201-1%201h-1zm0-4h2v2h-2z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-settings {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cg%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20transform%3D%22translate%2810%2010%29%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M1.5-10h-3l-1%206.5h5m0%207h-5l1%206.5h3%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2845%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2890%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%28135%29%22/%3E%3C/g%3E%3Cpath%20d%3D%22M10%202.5a7.5%207.5%200%200%200%200%2015%207.5%207.5%200%200%200%200-15v4a3.5%203.5%200%200%201%200%207%203.5%203.5%200%200%201%200-7%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .oo-ui-image-progressive.oo-ui-icon-settings {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%231e66f5%22%3E%3Cg%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20transform%3D%22translate%2810%2010%29%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M1.5-10h-3l-1%206.5h5m0%207h-5l1%206.5h3%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2845%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%2890%29%22/%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%20transform%3D%22rotate%28135%29%22/%3E%3C/g%3E%3Cpath%20d%3D%22M10%202.5a7.5%207.5%200%200%200%200%2015%207.5%207.5%200%200%200%200-15v4a3.5%203.5%200%200%201%200%207%203.5%203.5%200%200%201%200-7%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-labFlask {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M13%207.61V3h1V1H6v2h1v4.61l-5.86%209.88A1%201%200%200%200%202%2019h16a1%201%200%200%200%20.86-1.51zm-4.2.88a1%201%200%200%200%20.2-.6V3h2v4.89a1%201%200%200%200%20.14.51l2.14%203.6H6.72z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .mw-ui-icon-vector-gadget-pt-darkmode {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%234c4f69%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M17.39%2015.14A7.33%207.33%200%200%201%2011.75%201.6c.23-.11.56-.23.79-.34a8.2%208.2%200%200%200-5.41.45%209%209%200%201%200%207%2016.58%208.42%208.42%200%200%200%204.29-3.84%205.3%205.3%200%200%201-1.03.69%22/%3E%3C/svg%3E");
}
:root .client-dark-mode .mw-ui-icon-vector-gadget-pt-darkmode {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%234c4f69%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M17.07%207.07V2.93h-4.14L10%200%207.07%202.93H2.93v4.14L0%2010l2.93%202.93v4.14h4.14L10%2020l2.93-2.93h4.14v-4.14L20%2010zM10%2016a6%206%200%201%201%206-6%206%206%200%200%201-6%206%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%224.5%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-userContributions {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Ccircle%20cx%3D%2215.5%22%20cy%3D%2210.5%22%20r%3D%222.5%22/%3E%3Cpath%20d%3D%22M1%2015h8v2H1Zm0-6h10v2H1Zm0-6h16v2H1Zm14.5%2010.6c-3.3%200-4.5%201.6-4.5%202.7V18h9v-1.7c0-1-1.2-2.7-4.5-2.7%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-logOut {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M3%203h8V1H3a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h8v-2H3z%22/%3E%3Cpath%20d%3D%22M13%205v4H5v2h8v4l6-5z%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .uls-search-label,
:root .vector-icon.mw-ui-icon-wikimedia-search {
    background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%234c4f69%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M12.2%2013.6a7%207%200%201%201%201.4-1.4l5.4%205.4-1.4%201.4zM13%208A5%205%200%201%201%203%208a5%205%200%200%201%2010%200%22/%3E%3C/svg%3E");
}
:root .mw-ui-icon-vector-gadget-pt-darkmode-sticky-header {
    background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%234c4f69%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M17.39%2015.14A7.33%207.33%200%200%201%2011.75%201.6c.23-.11.56-.23.79-.34a8.2%208.2%200%200%200-5.41.45%209%209%200%201%200%207%2016.58%208.42%208.42%200%200%200%204.29-3.84%205.3%205.3%200%200%201-1.03.69%22/%3E%3C/svg%3E");
}
:root .cdx-message .cdx-message__icon {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M10%200C4.477%200%200%204.477%200%2010s4.477%2010%2010%2010%2010-4.477%2010-10S15.523%200%2010%200M9%205h2v2H9zm0%204h2v6H9z%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-edit {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22m16.77%208%201.94-2a1%201%200%200%200%200-1.41l-3.34-3.3a1%201%200%200%200-1.41%200L12%203.23zM1%2014.25V19h4.75l9.96-9.96-4.75-4.75z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-history {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M9%206v5h.06l2.48%202.47%201.41-1.41L11%2010.11V6z%22/%3E%3Cpath%20d%3D%22M10%201a9%209%200%200%200-7.85%2013.35L.5%2016H6v-5.5l-2.38%202.38A7%207%200%201%201%2010%2017v2a9%209%200%200%200%200-18%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-speechBubbles {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%234c4f69%22%3E%3Cpath%20d%3D%22M17%204v7a2%202%200%200%201-2%202H4v1a2%202%200%200%200%202%202h10l4%204V6a2%202%200%200%200-2-2zM6%2010H0v6z%22/%3E%3Crect%20width%3D%2216%22%20height%3D%2212%22%20rx%3D%222%22/%3E%3C/g%3E%3C/svg%3E");
}
:root .vector-icon.mw-ui-icon-wikimedia-editLock {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M12%2012a2%202%200%200%201-2-2V5.25l-9%209V19h4.75l7-7zm7-8h-.5V2.5a2.5%202.5%200%200%200-5%200V4H13a1%201%200%200%200-1%201v4a1%201%200%200%200%201%201h6a1%201%200%200%200%201-1V5a1%201%200%200%200-1-1m-3%204a1%201%200%201%201%201-1%201%201%200%200%201-1%201m1.5-4h-3V2.75C14.5%202%2014.5%201%2016%201s1.5%201%201.5%201.75z%22%20fill%3D%22%234c4f69%22/%3E%3C/svg%3E");
}
:root .branding-box > a:nth-child(1) > span:nth-child(1) > img:nth-child(1) {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%2018%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20fill-rule%3D%22nonzero%22%20d%3D%22m18.339%200%20.199.001h.375l.174.001h.315l.138.001.323.001h.171l.058.053v.5q0%20.208-.231.208c-.753.035-.908.11-1.184.507-.15.216-.447.68-.755%201.204L15.28%207.419l-.074.154%203.23%206.611.196.054L23.72%202.162q.265-.73-.078-1.035c-.228-.197-.389-.315-.978-.34l-.477-.023a.28.28%200%200%201-.168-.061.17.17%200%200%201-.08-.147V.054l.073-.052h5.749l.058.052v.502q0%20.204-.231.205-1.129.051-1.673.489c-.362.294-.645.698-.848%201.225%200%200-1.53%203.5-3.137%207.159l-.268.61c-1.12%202.55-2.24%205.09-2.876%206.501-.613%201.17-1.22%201.06-1.745-.033-.411-.847-1.1-2.33-1.8-3.86l-.469-1.024c-.273-.6-.54-1.19-.786-1.727-1.08%202.23-2.56%205.26-3.3%206.624-.715%201.24-1.3%201.08-1.771.032-1.63-3.84-4.97-10.6-6.539-14.35-.29-.697-.51-1.14-.716-1.32Q1.347.827.36.774.002.734%200%20.593V.067L.058.016.592.014H1.6l.969-.001h.253l1.734.001h.225l.95.001h.577l.058.052v.5q0%20.207-.26.206L5.454.8q-.84.036-.84.5c0%20.145.06.38.19.696%201.25%203.05%205.58%2012.2%205.576%2012.169l.158.04%202.787-5.56c-.34-.751-.558-1.23-.558-1.234l-1.916-3.765s-.37-.753-.497-1.004C9.512.972%209.53.882%208.68.772c-.238-.031-.361-.061-.362-.18V.065L8.39.013h.702L10.58.01h2.77l.131.043V.58q0%20.181-.26.182l-.36.052c-.909.07-.76.442-.156%201.644l1.838%203.76%202.034-4.055c.318-.693.278-.9.157-1.064l-.027-.035c-.081-.096-.351-.251-.94-.275l-.231-.025a.28.28%200%200%201-.167-.06.17.17%200%200%201-.079-.147v-.5l.072-.052L16.24%200zm10.464%205.318h.118c.71%200%202.73-.053%202.73-.053l.027.053v.577c0%20.08-.053.131-.158.132l-.551.053c-.814.078-1.1.29-1.103.815v8.74c0%20.578.262.92%201.103.998l.551.054c.079%200%20.157.051.158.156v.552l-.027.053s-1.99-.053-2.808-.053c-.735%200-2.78.053-2.783.053l-.052-.053v-.552c0-.105.078-.156.184-.156l.525-.054c.866-.078%201.13-.499%201.128-.997V6.895c0-.575-.316-.736-1.128-.813l-.525-.054c-.105%200-.184-.024-.184-.105v-.605l.026-.053s1.89.048%202.769.053m8.81%2010.318c0%20.577.341.866%201.103.997l.288.054c.079.025.157.051.158.156v.551l-.027.054s-1.65-.054-2.44-.054c-.736%200-2.89.054-2.888.054l-.053-.054v-.55c0-.106.08-.157.184-.157l.525-.054c.787-.079%201.13-.499%201.129-.997V6.895c0-.575-.29-.736-1.129-.813l-.525-.055c-.105%200-.184-.024-.184-.105v-.604l.027-.053s2.15.053%202.966.053c.736%200%202.39-.053%202.389-.053l.026.053v.577c0%20.079-.053.105-.158.131l-.288.054c-.814.156-1.1.289-1.103.815v3.964c.866%200%201.36-.444%202.52-1.68%201.05-1.16%201.86-2.12%201.864-2.626%200-.21-.236-.445-.762-.526-.105-.024-.157-.052-.157-.13V5.29l.026-.024s2.13.053%202.888.053c.682%200%201.84-.053%201.837-.053l.079.024v.606c0%20.079-.079.131-.21.131-1.02.08-1.73.131-2.678%201.208l-2.257%202.597c-.446.475-.604.76-.604.972%200%20.157.105.288.237.445l3.963%204.778c.315.366.945.525%201.47.628l.131.026c.08.025.184.077.184.156v.551l-.079.027s-1.39-.026-2.126-.027c-.656%200-1.6.027-1.6.027l-.027-.027v-.315c0-.342-.026-.629-.394-1.049l-2.914-3.623c-.394-.526-.814-.655-1.39-.655v3.89zm14.151%200c0%20.577.262.919%201.102.997l.552.054c.078%200%20.157.051.157.156v.551l-.026.054s-1.99-.054-2.809-.054c-.735%200-2.78.054-2.782.054l-.053-.054v-.55c0-.106.08-.157.184-.157l.525-.054c.866-.079%201.13-.499%201.129-.997V6.895c0-.575-.315-.736-1.129-.813l-.525-.055c-.105%200-.184-.024-.184-.105v-.604l.027-.053s2.07.053%202.887.053c.709%200%202.73-.053%202.73-.053l.026.053v.577c0%20.079-.052.131-.157.131l-.552.054c-.814.078-1.1.289-1.102.815zm5.672-8.69c0-.814-.341-.84-1.575-.919-.157%200-.184-.077-.184-.13v-.605l.053-.026c.394%200%201.94.053%202.703.053.735%200%201.78-.053%202.757-.053%203.73%200%204.41%201.84%204.407%203.203%200%201.58-.76%204.04-4.486%204.043-.656%200-1.18-.054-1.655-.263v3.516c0%20.576.315.71%201.156.84l.526.079c.105.025.185.053.185.156v.551l-.024.054s-2.1-.054-2.915-.054c-.735%200-2.7.054-2.704.054l-.026-.054v-.551c0-.105.053-.131.158-.156l.55-.08c.815-.104%201.08-.34%201.077-.84zm2.021%204.568c.525.211%201.18.236%201.706.237%201.58%200%202.33-.947%202.335-2.967%200-2.26-1.02-2.76-2.466-2.756-1.26%200-1.58.236-1.576.919zm10.661%205.88c-.787%200-2.6.054-2.598.054l-.027-.054v-.577c0-.052.027-.13.158-.13l.605-.054c.815-.079%201.05-.604%201.051-1.128V6.843c0-.606-.315-.71-1.05-.761l-.606-.055c-.157-.024-.157-.077-.158-.105v-.604l.027-.053s2.05.053%202.834.053h3.859c.787%200%202.65-.053%202.652-.053l.055.053c.024%201.13.208%202.15.393%203.15l-.654.105c-.288-.972-.786-2.36-2.466-2.362h-2.1c-.5%200-.761.184-.761.63v3.806h1.967c.736%200%20.92-.315%201.025-.84l.157-.55c0-.08.053-.133.157-.133h.444c.055%200%20.055.027.055.079-.055.576-.157%201.31-.158%201.943%200%20.655.105%201.21.158%201.811l-.055.054h-.444c-.13%200-.186-.054-.186-.133l-.13-.576c-.106-.526-.342-.815-1.028-.815h-1.966v4.017c0%20.497.286.995.76.996h2.495c1.34%200%202.08-.84%202.388-2.207l.654.079-.526%203.017-.052.053s-1.55-.053-2.336-.053zm9.872-.707.604-.054c.788-.079%201.05-.315%201.05-1.128V6.843c0-.685-.185-.685-1.05-.761l-.576-.055c-.105%200-.186-.052-.186-.13v-.578l.026-.053s2.31.053%202.784.053c.497%200%202.78-.053%203.465-.053%204.38%200%206.54%202.73%206.537%206.221%200%204.59-3.26%205.96-6.167%205.958-2.1%200-3.02-.054-3.832-.054-.788%200-2.78.054-2.784.054l-.026-.054v-.55a.147.147%200%200%201%20.155-.154m5.855%200c2.89%200%204.52-1.07%204.515-4.752%200-2.73-.605-5.91-5.014-5.908-1.02%200-1.68.157-1.68.816v8.662c0%20.733.183%201.18%202.179%201.182m12.996-1.051c0%20.577.262.919%201.102.997l.551.054c.079%200%20.157.051.158.156v.551l-.027.054s-1.99-.054-2.807-.054c-.736%200-2.78.054-2.783.054l-.053-.054v-.55c0-.106.079-.157.184-.157l.526-.054c.865-.079%201.13-.499%201.128-.997V6.895c0-.575-.316-.736-1.128-.813l-.526-.055c-.105%200-.184-.024-.184-.105v-.604l.026-.053s2.07.053%202.886.053c.708%200%202.73-.053%202.73-.053l.025.053v.577c0%20.079-.055.131-.158.131l-.551.054c-.815.078-1.1.289-1.103.815zm8.086.997.762.054c.105%200%20.21.078.21.209v.498l-.053.054s-2.86-.054-3.491-.054c-.683%200-2.36.054-2.364.054l-.053-.054v-.498c0-.13.079-.21.21-.21%201.16-.078%201.81-.29%202.546-1.97l5.826-13.65c.288-.682.5-.946.895-.946.365%200%20.498.264.707.788l5.38%2014.227c.37%201.02.895%201.42%201.945%201.523l.288.025c.132%200%20.264.078.263.211v.497l-.078.053s-2.02-.053-3.046-.053c-.92%200-3.49.053-3.492.053l-.025-.053v-.497c0-.133.053-.21.187-.21l.735-.054c.996-.078%201.37-.395%201.103-1.128l-1.602-4.438h-5.461c-.63%200-.787.105-.918.444l-1.524%203.807c-.262.66.079%201.24%201.05%201.318m6.431-6.67-2.546-7.007h-.052l-2.625%206.667c-.105.265.078.341.655.342h4.568v-.001z%22/%3E%3C/svg%3E");
}

`)