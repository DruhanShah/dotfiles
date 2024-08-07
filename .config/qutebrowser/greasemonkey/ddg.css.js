// ==UserScript==
// @name    Userstyle (ddg.css)
// @include    *duckduckgo.com/*
// ==/UserScript==
GM_addStyle(`:root:not(.dark-bg) {
    color-scheme: dark;
    --sds-color-text-02: #4c4f69 !important;
    --theme-col-txt-page-separator: #4c4f69!important;
    --theme-col-page-separator: #4c4f69 !important;
    --theme-col-txt-url: #4c4f69 !important;
    --theme-col-txt-title-visited: #8839ef !important;
    --theme-col-txt-snippet: #4c4f69 !important;
    --theme-col-txt-card-title: #4c4f69;
    --theme-col-txt-url-domain: #5c5f77 !important;
    --theme-col-txt-title: #1e66f5 !important;
    --theme-col-bg-card: #ccd0da !important;
    --theme-col-about-link: #1e66f5;
    --theme-col-border-ui: #bcc0cc !important;
    --theme-col-bg-expandcollapse: #ccd0da !important;
    --sds-color-palette-gray-60: #1e66f5 !important;
    --theme-col-txt-msg: #4c4f69 !important;
    --theme-col-txt-url-path: #6c6f85 !important;
    --theme-col-border-expandcollapse: #bcc0cc;
    --col-blue-50: #209fb5 !important;
    --col-blue-60: #1e66f5 !important;
    --theme-col-bg-page: #eff1f5 !important;
    --sds-color-text-01: #4c4f69 !important;
    --sds-color-text-on-color: #eff1f5 !important;
    --theme-spp-high-contrast-text-secondary: #1e66f5 !important;
    --theme-spp-high-contrast-card-indicator-color: #ccd0da !important;
    --theme-spp-high-contrast-title-span-text: #4c4f69 !important;
    --theme-spp-high-contrast-bg: #ccd0da !important;
    --sds-color-palette-yellow-50: #df8e1d !important;
    --sds-color-text-04: #5c5f77 !important;
    --theme-col-txt-card-body: #4c4f69 !important;
    --theme-col-txt-qna-details: #6c6f85 !important;
    --theme-col-txt-card: #4c4f69 !important;
    --sds-color-text-03: #6c6f85 !important;
    --col-slate-light: #6c6f85;
    --col-silver-dark: #8c8fa1;
    --theme-col-txt-button-secondary: #1e66f5 !important;
    --theme-bg-legacy-home: #eff1f5 !important;
    --theme-bg-cta-cards: #ccd0da !important;
    --theme-button-primary-bg: #1e66f5 !important;
    --theme-button-primary-bg--hover: #1e66f5 !important;
    --theme-button-primary-bg--active: #1e66f5 !important;
    --theme-button-primary-text: #dce0e8 !important;
    --theme-badge-fg--green: #dce0e8 !important;
    --theme-browser-comparison-table-check-bg: #40a02b !important;
    --theme-browser-comparison-table-cross-bg: #d20f39 !important;
    --theme-searchbox-bg: #ccd0da !important;
    --theme-searchbox-bg--hover: #ccd0da !important;
    --theme-searchbox-bg--active: #ccd0da !important;
    --theme-searchbox-bg--focused: #ccd0da !important;
    --theme-border-color-legacy-home-searchbox: #acb0be !important;
    --theme-button-link-text: #1e66f5 !important;
    --theme-browser-comparison-table-badge-text: #4c4f69 !important;
    --theme-badge-bg--green: #40a02b !important;
    --theme-badge-bg--yellow: #df8e1d !important;
    --theme-atb-button-bg: #1e66f5;
    --theme-atb-button-bg--hover: #1e66f5;
    --theme-atb-button-bg--active: #1e66f5;
    --col-silver-light: #bcc0cc !important;
    --theme-col-card-inner-border: #acb0be !important;
    --sds-color-text-link-02: #4c4f69 !important;
    --sds-color-text-link-02--hover: #5c5f77 !important;
    --theme-text-legacy-home: #4c4f69 !important;
    --theme-browser-comparison-table-row-bg: #ccd0da !important;
    --theme-browser-comparison-table-row-alt-bg: #bcc0cc !important;
    --theme-bg-home-bottom: #eff1f5 !important;
    --theme-atb-card-back-bg: #ccd0da !important;
    --theme-atb-card-front-bg: #bcc0cc !important;
    --theme-text-bg: #4c4f69 !important;
    --theme-accordion-background--expanded: #ccd0da !important;
    --theme-accordion-background: #bcc0cc !important;
    --theme-footer-link-text: #1e66f5 !important;
    --theme-sidemenu-bg: #ccd0da !important;
    --theme-col-txt-button-tertiary: #4c4f69 !important;
    --theme-bg-legacy-home-searchbox: #ccd0da !important;
    --theme-bg-info-snippet: #acb0be !important;
    --theme-button-tertiary-txt: #4c4f69 !important;
    --theme-browser-comparison-table-icon-bg: #e6e9ef !important;
    --theme-col-bg-ui: #e6e9ef !important;
    --theme-col-bg-header-modal: #ccd0da !important;
    --theme-col-bg-button-primary: #1e66f5 !important;
    /* ai chat */
    --theme-dc-color-background-dark: #eff1f5 !important;
    --theme-dc-color-gpt-main: #8839ef !important;
    --theme-dc-color-gpt-bg: #8839ef !important;
    --theme-dc-color-claude-main: #40a02b !important;
    --theme-dc-color-claude-bg: #40a02b !important;
    --sds-color-background-destructive: #d20f39 !important;
    --sds-color-text-on-dark-01: #4c4f69 !important;
    --theme-dc-color-fire-button: rgba(210, 15, 57, 0.4) !important;
    --sds-color-background-destructive-state-01: #d20f39 !important;
    --sds-color-background-destructive-state-02: #d20f39 !important;
    --sds-color-text-destructive: #d20f39 !important;
    --sds-color-text-success: #40a02b !important;
    --sds-color-text-link-01: #1e66f5 !important;
    --sds-color-background-container-01: #ccd0da !important;
    --sds-color-border-accent-01: #1e66f5 !important;
    --theme-dc-color-container-message: #ccd0da !important;
    --sds-color-palette-gray-85: #bcc0cc !important;
    --sds-color-palette-white: #dce0e8 !important;
    --sds-color-background-accent-01: #1e66f5 !important;
    --theme-col-txt-card-body-light: #4c4f69 !important;
    --theme-col-bg-page-alt-2: #ccd0da !important;
    --theme-dc-color-llama-main: #ea76cb !important;
    --theme-dc-color-mixtral-main: #fe640b !important;
    --theme-dc-color-anchor-sleep: #6c6f85 !important;
    /* privacy reminders */
    /* stopwatch */
    /* html chars */
    /* cal */
    /* button on hover */
    /* stocks infobox */
    /* color box */
    /* ai chat >:( */
    /* lyrics box */
}
:root:not(.dark-bg) ::selection {
    background-color: rgba(30, 102, 245, 0.3);
}
:root:not(.dark-bg) input::placeholder,
:root:not(.dark-bg) textarea::placeholder {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .featureCards_root__brAX3 {
    --feature-card-background-color: #ccd0da !important;
}
:root:not(.dark-bg) .footer,
:root:not(.dark-bg) .footer--mobile,
:root:not(.dark-bg) .modal--dropdown--settings,
:root:not(.dark-bg) .settings-dropdown--section,
:root:not(.dark-bg) .frm__field,
:root:not(.dark-bg) .frm__switch,
:root:not(.dark-bg) .tileview .metabar--fixed,
:root:not(.dark-bg) body,
:root:not(.dark-bg) .zci,
:root:not(.dark-bg) html,
:root:not(.dark-bg) .body--home,
:root:not(.dark-bg) html.displayable-atb-banner .body--home,
:root:not(.dark-bg) .site-wrapper,
:root:not(.dark-bg) .region__body,
:root:not(.dark-bg) .badge-link,
:root:not(.dark-bg) .module--carousel__image-wrapper,
:root:not(.dark-bg) .result__image,
:root:not(.dark-bg) .vertical--map__sidebar,
:root:not(.dark-bg) .vertical--map__sidebar__header,
:root:not(.dark-bg) .page-chrome_newtab,
:root:not(.dark-bg) .js-carousel-module-more,
:root:not(.dark-bg) .zci--type--tiles:not(.is-fallback).is-full-page.is-expanded,
:root:not(.dark-bg) .zci--type--tiles:not(.is-fallback).is-full-page.is-expanded .metabar:not(.is-stuck) {
    background-color: #eff1f5 !important;
}
:root:not(.dark-bg) .wXKLp5dS9jGvo097pfaG {
    color: #40a02b !important;
}
:root:not(.dark-bg) .IuA6a2PUTR9Lck6m0WlP {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208A8%208%200%201%201%200%208a8%208%200%200%201%2016%200m-4.572-1.562a.675.675%200%201%200-1.006-.9L7.123%209.224%205.597%207.36a.675.675%200%200%200-1.044.855l2.025%202.475a.675.675%200%200%200%201.025.023z%22%20fill%3D%22%2340a02b%22/%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .XxDCpwElzOhQaLmCxJ8z {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.452.99a3%203%200%200%201%20.655-.482c.242-.13.563-.259.894-.258.329%200%20.65.128.891.258.251.135.488.311.659.485.683.696%201.162.933%201.836%201.142.645.2%201.409.242%202.45.11a2.03%202.03%200%200%201%201.471.378c.42.315.686.794.69%201.324.034%203.86-.53%206.343-1.723%208.126-1.26%201.886-3.14%202.838-5.113%203.838l-.238.12a2.06%202.06%200%200%201-1.848%200l-.176-.089-.062-.031c-1.973-1-3.852-1.952-5.113-3.838C.532%2010.29-.032%207.807%200%203.947c.005-.53.271-1.008.69-1.323.416-.313.95-.445%201.469-.38%201.049.133%201.816.082%202.46-.124.677-.216%201.159-.452%201.832-1.13m5.03%205.419a.686.686%200%200%200-1.021-.915L7.108%209.24%205.56%207.346a.686.686%200%200%200-1.061.868l2.057%202.515a.686.686%200%200%200%201.042.023z%22%20fill%3D%22%2340a02b%22/%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .privacy-reminder__icon-check {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.375%205.484a.675.675%200%200%201%20.053.954l-3.825%204.275a.675.675%200%200%201-1.025-.023L4.553%208.215a.675.675%200%201%201%201.044-.855l1.526%201.865%203.299-3.688a.675.675%200%200%201%20.953-.053%22%20fill%3D%22%23dce0e8%22/%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .privacy-reminder__modal-hide,
:root:not(.dark-bg) .privacy-reminder__modal-link {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .zci--stopwatch .time {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .label {
    color: #4c4f69;
    background-color: #dce0e8;
}
:root:not(.dark-bg) .stopwatch__btn.start {
    border-color: #40a02b !important;
    background-color: #40a02b;
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .stopwatch__btn[disabled] {
    color: #4c4f69 !important;
    background-color: #ccd0da !important;
    border-color: #ccd0da;
}
:root:not(.dark-bg) .stopwatch__btn.stop {
    color: #e6e9ef;
    background-color: #d20f39 !important;
    border-color: #d20f39 !important;
}
:root:not(.dark-bg) .stopwatch__btn {
    background-color: #acb0be;
    border-color: #acb0be;
    color: #4c4f69;
}
:root:not(.dark-bg) .zci--stopwatch td {
    color: #4c4f69;
}
:root:not(.dark-bg) .record__body,
:root:not(.dark-bg) .chomp--link__mr,
:root:not(.dark-bg) .tx-clr--lt2 {
    color: #4c4f69;
}
:root:not(.dark-bg) .c-list__item {
    border-color: #e6e9ef;
}
:root:not(.dark-bg) .chomp--link__icn::before {
    color: #4c4f69;
}
:root:not(.dark-bg) .calendar .t_right,
:root:not(.dark-bg) .calendar .t_left {
    background-color: #acb0be;
}
:root:not(.dark-bg) .calendar__header {
    color: #4c4f69;
}
:root:not(.dark-bg) table.calendar tr {
    color: #4c4f69;
}
:root:not(.dark-bg) .calendar__today {
    color: #e6e9ef;
    background-color: #1e66f5;
}
:root:not(.dark-bg) .zci.is-active {
    border-color: #ccd0da;
}
:root:not(.dark-bg) .module__toggle--more::after {
    background: linear-gradient(rgba(40, 40, 40, 0), #ccd0da);
}
:root:not(.dark-bg) .btn:hover:not(.is-disabled) {
    background-color: #e6e9ef;
    color: #1e66f5;
    border-color: #e6e9ef;
}
:root:not(.dark-bg) .stocks-module__currentPrice,
:root:not(.dark-bg) .stocks-module__exchange,
:root:not(.dark-bg) .stocks-module__currency,
:root:not(.dark-bg) .stocks-module__stats {
    color: #4c4f69;
}
:root:not(.dark-bg) .stocks-module__timePeriod {
    background-color: #acb0be;
    color: #4c4f69;
}
:root:not(.dark-bg) .stocks-module__latestUpdate,
:root:not(.dark-bg) .ia-module--stocks a.stocks-module__attribution,
:root:not(.dark-bg) .stocks-module__footer {
    color: #5c5f77;
}
:root:not(.dark-bg) .stocks-module__timePeriod.selected {
    color: #e6e9ef;
    background-color: #1e66f5;
}
:root:not(.dark-bg) .ia-module--stocks.increase .color-coded {
    color: #40a02b !important;
}
:root:not(.dark-bg) .stocks-module__hover-label[style*="color: rgb(222, 88, 51);"] {
    color: #d20f39 !important;
}
:root:not(.dark-bg) .stocks-module__hover-label[style*="color: rgb(91, 158, 77);"] {
    color: #40a02b !important;
}
:root:not(.dark-bg) .ia-module--stocks.increase .color-coded path {
    stroke: #40a02b;
    fill: #40a02b;
}
:root:not(.dark-bg) .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#de5833"] {
    stroke: #d20f39 !important;
}
:root:not(.dark-bg) .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [fill="#de5833"] {
    fill: #d20f39 !important;
}
:root:not(.dark-bg) .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#5b9e4d"] {
    stroke: #40a02b !important;
}
:root:not(.dark-bg) .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#5b9e4d"] [fill="#5b9e4d"] {
    fill: #40a02b !important;
}
:root:not(.dark-bg) .ia-module--stocks.decrease .color-coded {
    color: #d20f39;
}
:root:not(.dark-bg) .ia-module--stocks.decrease .color-coded path {
    stroke: #d20f39;
    fill: #d20f39;
}
:root:not(.dark-bg) .ia-module--stocks .stocks-module__stats-wrapper .stocks-module__stats .stocks-module__stat-col .stocks-module__stat {
    border-bottom-color: #9ca0b0;
}
:root:not(.dark-bg) .stocks-module__chart .horizontal-line,
:root:not(.dark-bg) .stocks-module__chart .vertical-line,
:root:not(.dark-bg) .stocks-module__chart .prev-close-line {
    stroke: #acb0be;
}
:root:not(.dark-bg) .tx-clr--lt {
    color: #4c4f69;
}
:root:not(.dark-bg) .tx-clr--dk2 {
    color: #6c6f85;
}
:root:not(.dark-bg) .feedback-external__link {
    color: #1e66f5;
}
:root:not(.dark-bg) .feedback-duckchat-modal__disclaimer {
    color: #4c4f69;
}
:root:not(.dark-bg) .feedback-modal__radio {
    color: #4c4f69;
}
:root:not(.dark-bg) .modal__close {
    color: #4c4f69;
}
:root:not(.dark-bg) .js-lyrics-module {
    color: #5c5f77 !important;
}
:root:not(.dark-bg) .module--lyrics__subtitle-box {
    border-color: #acb0be;
}
:root:not(.dark-bg) .module__inner-toggle--chevron {
    color: #1e66f5 !important;
    background-color: #bcc0cc !important;
    border-color: #acb0be;
}
:root:not(.dark-bg) .module__inner-toggle::before,
:root:not(.dark-bg) .module__inner-toggle::after {
    background-color: #acb0be !important;
}
:root:not(.dark-bg) .module--translations .dropdown--translation-select,
:root:not(.dark-bg) .module--translations-translatedtext {
    background: #ccd0da !important;
    border-color: #ccd0da;
}
:root:not(.dark-bg) .module--translations .module--translations-translatedtext.is-placeholder {
    color: #6c6f85;
}
:root:not(.dark-bg) .module--translations-swap-svg {
    fill: #4c4f69 !important;
}
:root:not(.dark-bg) .module--translations-original textarea,
:root:not(.dark-bg) .module--translations-translatedtext,
:root:not(.dark-bg) .module--translations-footer a {
    color: #4c4f69;
}
:root:not(.dark-bg) .module--translations-clear,
:root:not(.dark-bg) .module--translations-copy {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .modal__list__filter input {
    background: #e6e9ef;
}
:root:not(.dark-bg) .module:not(
.module--carousel,
.module--placeholder,
.module--images,
.module--translations,
.module__chromeless
) {
    background: #ccd0da !important;
    border-color: #bcc0cc !important;
}
:root:not(.dark-bg) .module__toggle,
:root:not(.dark-bg) .tile__expand {
    background-color: #ccd0da !important;
    border-color: #bcc0cc !important;
}
:root:not(.dark-bg) .module__title__link,
:root:not(.dark-bg) .module__text,
:root:not(.dark-bg) .pln,
:root:not(.dark-bg) .pun,
:root:not(.dark-bg) code,
:root:not(.dark-bg) .module__more-at-bottom {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) code {
    background-color: #eff1f5 !important;
}
:root:not(.dark-bg) .lit {
    color: #fe640b !important;
}
:root:not(.dark-bg) .com {
    color: #5c5f77 !important;
}
:root:not(.dark-bg) .str {
    color: #40a02b !important;
}
:root:not(.dark-bg) .atv {
    color: #179299 !important;
}
:root:not(.dark-bg) .module__title__sub {
    color: #6c6f85;
}
:root:not(.dark-bg) .prettyprint {
    background-color: #e6e9ef;
}
:root:not(.dark-bg) .is-link-style-exp .btn--primary:not(.is-disabled) {
    background-color: #1e66f5 !important;
    border-color: #1e66f5 !important;
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .featureCards_dark__5Xbsn {
    background: linear-gradient(180deg, #df8e1d, #1e66f5);
}
:root:not(.dark-bg) .modal__box.modal__box--feedback.modal__box--headed .modal__box__header {
    background-color: #ccd0da !important;
}
:root:not(.dark-bg) .module--definitions__pronunciation {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .module--definitions__group ol li::before {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .module--definitions__usage {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .module__title,
:root:not(.dark-bg) .module--definitions__definition {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .play-btn__icn_hollow {
    fill: #1e66f5 !important;
}
:root:not(.dark-bg) .module__toggle {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .forecast-wrapper .module__weather-warning--red,
:root:not(.dark-bg) .module__weather-warning--red:hover,
:root:not(.dark-bg) .module__weather-warning--red:focus,
:root:not(.dark-bg) .module__weather-warning--red:visited {
    color: #d20f39 !important;
}
:root:not(.dark-bg) .module__weather-warning {
    color: #df8e1d !important;
}
:root:not(.dark-bg) .text--primary,
:root:not(.dark-bg) .tx-clr--dk,
:root:not(.dark-bg) .tx-clr--slate,
:root:not(.dark-bg) .module__temperature-unit:not(.module__temperature-unit--on) {
    color: #5c5f77 !important;
}
:root:not(.dark-bg) .module__temperature-unit,
:root:not(.dark-bg) .module__temperature-unit:hover {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .module__detail__precip-label,
:root:not(.dark-bg) .module__items-precip-label,
:root:not(.dark-bg) .ia-module--module--definitions__reference,
:root:not(.dark-bg) .js-definitions-internal {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .module__detail__hour-label {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .module__items-item {
    background: #ccd0da !important;
    border-color: #acb0be !important;
}
:root:not(.dark-bg) .module__weatherkit-logo {
    fill: #1e66f5;
}
:root:not(.dark-bg) .module__warnings,
:root:not(.dark-bg) .module__temperature-unit--on {
    border-color: #acb0be !important;
}
:root:not(.dark-bg) .module__detail__precip-label__icon,
:root:not(.dark-bg) .module__items-precip-label__icon {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M8.339%204.317%205.487%200%202.65%204.307a3.67%203.67%200%200%200%20.533%204.784%203.434%203.434%200%200%200%204.645.01%203.66%203.66%200%200%200%20.513-4.78z%22%20fill%3D%22%231e66f5%22/%3E%3C/svg%3E");
}
:root:not(.dark-bg) .tile__ctrl__btn,
:root:not(.dark-bg) .tile__history,
:root:not(.dark-bg) .tile__past-calc {
    background-color: #ccd0da !important;
    border-color: #acb0be !important;
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .tile__tab__sci .tile__ctrl__btn,
:root:not(.dark-bg) .tile__ctrl__toggle {
    background-color: #acb0be !important;
    color: #4c4f69 !important;
    border-color: #9ca0b0 !important;
}
:root:not(.dark-bg) .tile__display__main,
:root:not(.dark-bg) .tile__past-result {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .tile__display {
    box-shadow: inset -1px -1px 0 #9ca0b0, inset 1px 1px 0 #9ca0b0 !important;
    background-color: #eff1f5 !important;
    border-color: #acb0be !important;
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .tile__display.selected {
    box-shadow: inset -1px -1px 0 #1e66f5, inset 1px 1px 0 #1e66f5 !important;
}
:root:not(.dark-bg) .tile__ctrl--important {
    background-color: #df8e1d !important;
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .tile__display__aside,
:root:not(.dark-bg) .tile__past-formula {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .bg-delayed-color {
    background-color: #d20f39;
}
:root:not(.dark-bg) #error_homepage {
    background-color: #dc8a78 !important;
    color: #d20f39 !important;
}
:root:not(.dark-bg) .search--adv {
    background-color: #ccd0da !important;
    border-color: #ccd0da !important;
}
:root:not(.dark-bg) .open-in-app__deep-link {
    color: #e6e9ef;
}
:root:not(.dark-bg) .modal__header__clear,
:root:not(.dark-bg) .sep--before,
:root:not(.dark-bg) .js-region-filter-clear,
:root:not(.dark-bg) .result__a,
:root:not(.dark-bg) .module--carousel__body__title,
:root:not(.dark-bg) .js-carousel-module-more,
:root:not(.dark-bg) .js-no-results-web,
:root:not(.dark-bg) .bing .tile__title--pr a,
:root:not(.dark-bg) .sidebar-filter__show-more,
:root:not(.dark-bg) .module__footer,
:root:not(.dark-bg) .js-settings-dropdown-reset-appearance,
:root:not(.dark-bg) .modal--dropdown--settings .settings-dropdown--button,
:root:not(.dark-bg) .settings-page-wrapper a:not(.btn, .set-tab),
:root:not(.dark-bg) .module__link--blue,
:root:not(.dark-bg) .place-list-item__cta-item__text {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .tile__title a:visited {
    color: #8839ef;
}
:root:not(.dark-bg) .place-detail__status--off {
    color: #d20f39;
}
:root:not(.dark-bg) .place-detail__status--on {
    color: #40a02b;
}
:root:not(.dark-bg) .result__a:visited {
    color: #8839ef !important;
}
:root:not(.dark-bg) .bg-clr--green {
    background-color: #40a02b;
}
:root:not(.dark-bg) .tile__status,
:root:not(.dark-bg) .osGBsMSM4O7_HVv5OcxQ,
:root:not(.dark-bg) .C68Y1fiPXCZijXmzVAbe {
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .modal__header,
:root:not(.dark-bg) .modal__footer,
:root:not(.dark-bg) .modal__box,
:root:not(.dark-bg) .tile,
:root:not(.dark-bg) .related-searches__item,
:root:not(.dark-bg) .bg-clr--white,
:root:not(.dark-bg) .tile__media__free-shipping-label,
:root:not(.dark-bg) .sidebar-filter__options,
:root:not(.dark-bg) .sidebar-filter__option.is-size,
:root:not(.dark-bg) .module__footer,
:root:not(.dark-bg) .frm__select,
:root:not(.dark-bg) .set-bookmarklet,
:root:not(.dark-bg) .set-reset,
:root:not(.dark-bg) .search__autocomplete,
:root:not(.dark-bg) .frm__input,
:root:not(.dark-bg) .frm__color__swatch {
    border-color: #ccd0da !important;
    background-color: #dce0e8 !important;
}
:root:not(.dark-bg) .sep--before::before,
:root:not(.dark-bg) .sep {
    border-left-color: #acb0be;
}
:root:not(.dark-bg) .header-wrap {
    box-shadow: none !important;
}
:root:not(.dark-bg) .header-wrap,
:root:not(.dark-bg) .module--carousel__left,
:root:not(.dark-bg) .module--carousel__right,
:root:not(.dark-bg) .detail,
:root:not(.dark-bg) .btn {
    background-color: #e6e9ef;
}
:root:not(.dark-bg) .set-header--fixed .tileview--grid .metabar--fixed,
:root:not(.dark-bg) .tileview--grid .metabar--fixed.is-stuck {
    background-color: #ccd0da;
    border-top-color: #ccd0da;
}
:root:not(.dark-bg) .modal--dropdown--region.modal--popout .frm__input,
:root:not(.dark-bg) .js-region-filter-list,
:root:not(.dark-bg) .tile__body,
:root:not(.dark-bg) .bg-clr--white,
:root:not(.dark-bg) .acp-wrap,
:root:not(.dark-bg) .tile__media__free-shipping-label,
:root:not(.dark-bg) .tile__media--pr,
:root:not(.dark-bg) .modal__box,
:root:not(.dark-bg) .nav-menu__list,
:root:not(.dark-bg) .set-tab.is-active,
:root:not(.dark-bg) .frm__select select,
:root:not(.dark-bg) .cloudsave,
:root:not(.dark-bg) .feedback-btn__send,
:root:not(.dark-bg) .set-bookmarklet__input,
:root:not(.dark-bg) .howItWorksSection_downloadsCard__U3Ph9,
:root:not(.dark-bg) .metabar__grid-btn,
:root:not(.dark-bg) .feedback-btn__icon-wrap .set-bookmarklet__input .btn,
:root:not(.dark-bg) .btn.btn--secondary,
:root:not(.dark-bg) .btn.is-disabled,
:root:not(.dark-bg) input,
:root:not(.dark-bg) textarea,
:root:not(.dark-bg) .frm__input,
:root:not(.dark-bg) .frm__text,
:root:not(.dark-bg) .detail--xd .c-detail__btn,
:root:not(.dark-bg) .set-bookmarklet,
:root:not(.dark-bg) .set-reset,
:root:not(.dark-bg) .zci--json_validator textarea,
:root:not(.dark-bg) .colorpicker,
:root:not(.dark-bg) .feedback-modal__submit.is-disabled,
:root:not(.dark-bg) .feedback-modal__submit.is-disabled:active,
:root:not(.dark-bg) .feedback-modal__submit.is-disabled:focus,
:root:not(.dark-bg) .module__section,
:root:not(.dark-bg) .module--carousel__item,
:root:not(.dark-bg) .is-related-search-exp.dark-bg,
:root:not(.dark-bg) .related-searches__item,
:root:not(.dark-bg) .detail--xd .tile-nav--sm,
:root:not(.dark-bg) .set-bookmarklet__detail,
:root:not(.dark-bg) .set-reset__detail,
:root:not(.dark-bg) .module__footer,
:root:not(.dark-bg) .js-definitions-internal {
    background-color: #ccd0da !important;
}
:root:not(.dark-bg) .module--carousel__item {
    border-color: #bcc0cc !important;
}
:root:not(.dark-bg) .btn.is-disabled:hover,
:root:not(.dark-bg) .frm__switch__label:hover,
:root:not(.dark-bg) .feedback-modal__submit.is-disabled:hover,
:root:not(.dark-bg) .btn.btn--skeleton:hover,
:root:not(.dark-bg) .module__footer-carousel__label:hover {
    background-color: #acb0be !important;
    border-color: #acb0be !important;
}
:root:not(.dark-bg) .is-checked .frm__switch__label.btn {
    background-color: #1e66f5 !important;
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .js-set-exit {
    background-color: #1e66f5 !important;
    border-color: #1e66f5 !important;
    color: #eff1f5 !important;
}
:root:not(.dark-bg) .js-set-exit:hover {
    background-color: rgba(30, 102, 245, 0.8) !important;
    border-color: rgba(30, 102, 245, 0.8) !important;
    color: #eff1f5 !important;
}
:root:not(.dark-bg) .set-bookmarklet__data {
    background-color: #acb0be;
    color: #4c4f69;
}
:root:not(.dark-bg) .modal__list__link.is-highlighted,
:root:not(.dark-bg) .modal__list li:hover {
    background-color: #8c8fa1;
}
:root:not(.dark-bg) .metabar__dropdowns-wrap::before {
    background-image: linear-gradient(90deg, #eff1f5, rgba(255, 255, 255, 0));
}
:root:not(.dark-bg) .metabar__dropdowns-wrap::after {
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), #eff1f5);
}
:root:not(.dark-bg) .nav-menu__item__badge {
    background-color: #df8e1d;
    color: #e6e9ef;
}
:root:not(.dark-bg) .settings-dropdown--section,
:root:not(.dark-bg) .set-head,
:root:not(.dark-bg) .frm__hr {
    border-bottom-color: #acb0be;
}
:root:not(.dark-bg) .zcm--right-fade::before {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), #e6e9ef);
}
:root:not(.dark-bg) .search-filters-wrap::before {
    background: linear-gradient(90deg, #eff1f5, rgba(255, 255, 255, 0));
}
:root:not(.dark-bg) .search-filters-wrap::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), #eff1f5);
}
:root:not(.dark-bg) .footer,
:root:not(.dark-bg) .footer--mobile {
    border-top-color: #ccd0da;
}
:root:not(.dark-bg) .is-vertical-tabs-exp,
:root:not(.dark-bg) #duckbar,
:root:not(.dark-bg) .zcm__link:not(.dropdown__button).is-active,
:root:not(.dark-bg) .set-main-footer {
    border-color: #1e66f5 !important;
}
:root:not(.dark-bg) #more-results {
    background-color: #ccd0da !important;
}
:root:not(.dark-bg) input,
:root:not(.dark-bg) select,
:root:not(.dark-bg) h1,
:root:not(.dark-bg) h2,
:root:not(.dark-bg) h4,
:root:not(.dark-bg) h5,
:root:not(.dark-bg) h6,
:root:not(.dark-bg) ul,
:root:not(.dark-bg) ol,
:root:not(.dark-bg) blockquote,
:root:not(.dark-bg) p,
:root:not(.dark-bg) body,
:root:not(.dark-bg) .module--carousel__footer,
:root:not(.dark-bg) .set-tab.is-active,
:root:not(.dark-bg) .zcm__link,
:root:not(.dark-bg) .feedback-prompt__link,
:root:not(.dark-bg) .feedback-btn__send,
:root:not(.dark-bg) .tile--img__sub,
:root:not(.dark-bg) .result__snippet,
:root:not(.dark-bg) .result__snippet b,
:root:not(.dark-bg) .modal__list__link,
:root:not(.dark-bg) .acp,
:root:not(.dark-bg) .header_headerButton__cLYU3,
:root:not(.dark-bg) .is-vertical-tabs-exp,
:root:not(.dark-bg) .module.module--images,
:root:not(.dark-bg) .module__header.module__header--link,
:root:not(.dark-bg) .text--title,
:root:not(.dark-bg) .text--airline-flight,
:root:not(.dark-bg) .timing,
:root:not(.dark-bg) .flight-details__values,
:root:not(.dark-bg) .airlines-footer,
:root:not(.dark-bg) .tx-clr--slate,
:root:not(.dark-bg) .nav-menu__heading,
:root:not(.dark-bg) .zci,
:root:not(.dark-bg) .metabar__grid-btn,
:root:not(.dark-bg) .module--carousel__left,
:root:not(.dark-bg) .module--carousel__right,
:root:not(.dark-bg) .c-detail__title__sub,
:root:not(.dark-bg) .c-detail__desc,
:root:not(.dark-bg) .c-detail__filemeta,
:root:not(.dark-bg) .c-detail__more,
:root:not(.dark-bg) .frm__label,
:root:not(.dark-bg) .js-cloudsave-new-suggestion,
:root:not(.dark-bg) .zci__body,
:root:not(.dark-bg) .zci__body a {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .zci--airlines .text--title svg path {
    fill: #4c4f69;
}
:root:not(.dark-bg) .star {
    color: #7c7f93;
}
:root:not(.dark-bg) .set-tab,
:root:not(.dark-bg) .set-tab:visited,
:root:not(.dark-bg) .tile-nav.can-scroll {
    background-color: #e6e9ef;
    color: #8c8fa1;
}
:root:not(.dark-bg) .js-cloudsave-save-btn,
:root:not(.dark-bg) .js-cloudsave-load-btn {
    background-color: #acb0be;
    border-color: #9ca0b0;
    color: #4c4f69;
}
:root:not(.dark-bg) .video-source,
:root:not(.dark-bg) .tile__count,
:root:not(.dark-bg) .result__url,
:root:not(.dark-bg) .tile__time,
:root:not(.dark-bg) .feedback-prompt,
:root:not(.dark-bg) .footer__text,
:root:not(.dark-bg) .vertical--news .result__url,
:root:not(.dark-bg) .result__timestamp,
:root:not(.dark-bg) .js-metabar-secondary,
:root:not(.dark-bg) .sidebar-filters,
:root:not(.dark-bg) .tile--pr__original-price,
:root:not(.dark-bg) .nav-menu__item a,
:root:not(.dark-bg) .nav-menu__close,
:root:not(.dark-bg) .frm__desc,
:root:not(.dark-bg) .dropdown__button,
:root:not(.dark-bg) .tx-clr--slate-light,
:root:not(.dark-bg) .flight-details__labels,
:root:not(.dark-bg) .scheduled-time,
:root:not(.dark-bg) .source-link,
:root:not(.dark-bg) .tile__source,
:root:not(.dark-bg) .zci__more-at,
:root:not(.dark-bg) .cloudsave__close,
:root:not(.dark-bg) .module--definitions__attribution-text,
:root:not(.dark-bg) .module__attribution,
:root:not(.dark-bg) .module__attribution-link {
    color: #6c6f85 !important;
}
:root:not(.dark-bg) .dropdown--region.has-inactive-region .dropdown__button::after,
:root:not(.dark-bg) .modal--dropdown--region.modal--popout .modal__header::before,
:root:not(.dark-bg) .js-carousel-module-title,
:root:not(.dark-bg) .tile--pr__brand,
:root:not(.dark-bg) .frm__select,
:root:not(.dark-bg) .star::after,
:root:not(.dark-bg) .feedback-btn__icon,
:root:not(.dark-bg) .detail--xd .tile-nav--sm,
:root:not(.dark-bg) .detail__close,
:root:not(.dark-bg) .module--definitions__collapsed-group ol li::before {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .search__button:hover,
:root:not(.dark-bg) .search--header.has-text.search--hover .search__button {
    background-color: #1e66f5 !important;
    color: #eff1f5 !important;
}
:root:not(.dark-bg) .settings-page-wrapper.is-checked {
    border-color: #1e66f5;
    background-color: #209fb5 !important;
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .modal--dropdown--settings .settings-dropdown--section .settings-dropdown--header .settings-dropdown--header--link,
:root:not(.dark-bg) .modal--dropdown--settings .settings-dropdown--section .settings-dropdown--header .settings-dropdown--header--label {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .ddgsi-check::before {
    color: #e6e9ef !important;
}
:root:not(.dark-bg) .set-bookmarklet__title,
:root:not(.dark-bg) .set-reset__title {
    color: #4c4f69 !important;
}
:root:not(.dark-bg) .frm__select::after {
    color: #1e66f5 !important;
}
:root:not(.dark-bg) .switch,
:root:not(.dark-bg) .frm__switch__label {
    background-color: #dce0e8 !important;
}
:root:not(.dark-bg) .frm__switch__label::after {
    background: #7c7f93 !important;
}
:root:not(.dark-bg) .is-checked .frm__switch__label::after {
    background: #eff1f5 !important;
}
:root:not(.dark-bg) .switch__knob {
    background: #7c7f93 !important;
}
:root:not(.dark-bg) .is-on .switch__knob {
    background: #eff1f5 !important;
}
:root:not(.dark-bg) .switch.is-on {
    background-color: #1e66f5 !important;
}
:root:not(.dark-bg) .dropdown__switch.is-on::before {
    color: #eff1f5 !important;
}
:root:not(.dark-bg) .search--header {
    background-color: #ccd0da;
    border-color: #ccd0da;
}
:root:not(.dark-bg) .acp--highlight,
:root:not(.dark-bg) .bg-clr--platinum-light {
    background-color: #9ca0b0;
}
:root:not(.dark-bg) .review__rating-stars,
:root:not(.dark-bg) .place-list-item__rating__image {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20height%3D%2212%22%20viewBox%3D%220%200%2064%2012%22%20width%3D%2264%22%3E%3Cpath%20d%3D%22M12%206A6%206%200%201%201%200%206a6%206%200%200%201%2012%200m13%200a6%206%200%201%201-12%200%206%206%200%200%201%2012%200m7%206a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m13%200a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m4.5-6a4.5%204.5%200%200%201-4.5%204.5v-9A4.5%204.5%200%200%201%2049.5%206m8.5%206a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m0-1.5a4.5%204.5%200%201%200%200-9%204.5%204.5%200%200%200%200%209%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%2340a02b%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E");
}
:root:not(.dark-bg) .header__logo,
:root:not(.dark-bg) .js-logo-ddg {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cg%20clip-path%3D%22url%28%23logo_header_v109_svg__a%29%22%3E%3Cpath%20fill%3D%22%23fe640b%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20120.373c33.24%200%2060.187-26.947%2060.187-60.187S93.426%200%2060.186%200%200%2026.946%200%2060.186s26.946%2060.187%2060.186%2060.187%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23DDD%22%20fill-rule%3D%22evenodd%22%20d%3D%22M68.65%20105.091c0-.47.115-.578-1.38-3.557-3.972-7.954-7.964-19.17-6.148-26.402.33-1.314-3.742-48.66-6.62-50.185-3.2-1.705-7.138-4.41-10.739-5.012-1.827-.292-4.223-.154-6.096.098-.332.045-.346.643-.028.751%201.23.417%202.722%201.14%203.602%202.233.167.207-.057.533-.322.543-.83.03-2.334.378-4.32%202.064-.229.195-.038.557.257.499%204.267-.844%208.623-.428%2011.191%201.906.167.151.08.423-.137.482-22.283%206.055-17.872%2025.438-11.94%2049.224%205.284%2021.188%207.272%2028.017%207.899%2030.097a.67.67%200%200%200%20.398.439c7.67%203.055%2024.383%203.19%2024.383-2.005z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M71.706%20109.558c-2.703%201.058-7.993%201.528-11.05%201.528-4.48%200-10.932-.705-13.283-1.763-1.452-4.469-5.797-18.32-10.088-35.91l-.42-1.718-.004-.014c-5.101-20.836-9.267-37.854%2013.568-43.2.208-.05.31-.3.172-.463-2.62-3.108-7.528-4.127-13.734-1.986-.255.088-.476-.169-.318-.387%201.217-1.677%203.596-2.967%204.77-3.532.242-.117.228-.473-.03-.553a26%2026%200%200%200-3.546-.846c-.348-.056-.38-.652-.03-.7%208.798-1.183%2017.986%201.459%2022.596%207.266a.3.3%200%200%200%20.175.108c16.883%203.625%2018.092%2030.314%2016.147%2031.53-.384.239-1.612.102-3.233-.08-6.57-.735-19.578-2.19-8.842%2017.818.106.198-.034.46-.256.494-6.054.941%201.704%2019.912%207.406%2032.408%22/%3E%3Cpath%20fill%3D%22%233CA82B%22%20d%3D%22M79.258%2085.293c-1.285-.595-6.227%202.949-9.507%205.67-.686-.97-1.978-1.675-4.894-1.168-2.551.443-3.96%201.058-4.589%202.12-4.027-1.528-10.803-3.884-12.44-1.608-1.79%202.487.447%2014.257%202.824%2015.785%201.24.798%207.175-3.017%2010.275-5.648.5.705%201.305%201.108%202.96%201.069%202.503-.058%206.563-.64%207.193-1.806a1.3%201.3%200%200%200%20.099-.25c3.186%201.191%208.792%202.451%2010.045%202.263%203.264-.49-.455-15.726-1.966-16.427%22/%3E%3Cpath%20fill%3D%22%2340a02b%22%20d%3D%22M70.051%2091.31c.135.242.244.496.337.754.454%201.27%201.194%205.31.634%206.309-.56.998-4.194%201.48-6.436%201.519s-2.746-.782-3.2-2.052c-.364-1.016-.542-3.405-.538-4.773-.092-2.028.65-2.742%204.076-3.296%202.535-.41%203.876.067%204.65.883%203.6-2.686%209.606-6.478%2010.192-5.785%202.92%203.455%203.29%2011.68%202.657%2014.99-.207%201.082-9.879-1.072-9.879-2.239%200-4.844-1.257-6.174-2.493-6.31m-21.187-1.512c.792-1.254%207.216.305%2010.743%201.874%200%200-.725%203.284.429%207.151.337%201.132-8.113%206.167-9.216%205.301-1.275-1.001-3.621-11.691-1.956-14.326%22/%3E%3Cpath%20fill%3D%22%23df8e1d%22%20fill-rule%3D%22evenodd%22%20d%3D%22M51.975%2064.33c.52-2.26%202.941-6.519%2011.587-6.415%204.371-.018%209.801-.002%2013.4-.411a48.2%2048.2%200%200%200%2011.969-2.91c3.742-1.428%205.07-1.11%205.536-.256.512.939-.091%202.56-1.399%204.052-2.498%202.85-6.989%205.06-14.92%205.715-7.93.655-13.185-1.472-15.446%201.991-.976%201.494-.222%205.015%207.448%206.124%2010.364%201.496%2018.876-1.803%2019.928.19%201.052%201.991-5.007%206.044-15.388%206.129s-16.865-3.635-19.164-5.484c-2.918-2.346-4.223-5.766-3.55-8.725Z%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%231e66f5%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M65.196%2039.617c.579-.948%201.863-1.68%203.964-1.68s3.09.836%203.774%201.768c.14.19-.071.413-.287.32l-.158-.069c-.769-.336-1.712-.748-3.329-.77-1.729-.025-2.819.408-3.505.781-.232.126-.596-.125-.46-.35ZM41.539%2040.83c2.04-.853%203.644-.743%204.777-.474.24.056.405-.2.214-.355-.88-.71-2.85-1.59-5.418-.633-2.29.854-3.37%202.63-3.377%203.796-.002.276.564.299.71.066.396-.63%201.053-1.547%203.094-2.4%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M70.945%2052.588a3.263%203.263%200%200%201-3.267-3.255%203.263%203.263%200%200%201%203.267-3.255%203.26%203.26%200%200%201%203.267%203.255%203.26%203.26%200%200%201-3.267%203.255m2.301-4.334a.845.845%200%200%200-1.692%200%20.845.845%200%200%200%201.692%200M49.3%2051.585a3.8%203.8%200%200%201-3.809%203.796c-2.1%200-3.808-1.7-3.808-3.796a3.804%203.804%200%200%201%203.808-3.796c2.1%200%203.809%201.7%203.809%203.796m-1.123-1.258a.987.987%200%200%200-1.972%200c0%20.54.44.982.986.982a.985.985%200%200%200%20.986-.982%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20110.733c27.917%200%2050.548-22.63%2050.548-50.547S88.103%209.639%2060.186%209.639C32.27%209.64%209.64%2032.27%209.64%2060.186c0%2027.917%2022.631%2050.547%2050.547%2050.547Zm0%204.702c30.514%200%2055.25-24.735%2055.25-55.249%200-30.513-24.736-55.249-55.25-55.249S4.937%2029.673%204.937%2060.187s24.736%2055.248%2055.25%2055.248Z%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .yhccgqM_FdvJ79N6Jm6c {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cg%20clip-path%3D%22url%28%23logo_header_v109_svg__a%29%22%3E%3Cpath%20fill%3D%22%23fe640b%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20120.373c33.24%200%2060.187-26.947%2060.187-60.187S93.426%200%2060.186%200%200%2026.946%200%2060.186s26.946%2060.187%2060.186%2060.187%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23DDD%22%20fill-rule%3D%22evenodd%22%20d%3D%22M68.65%20105.091c0-.47.115-.578-1.38-3.557-3.972-7.954-7.964-19.17-6.148-26.402.33-1.314-3.742-48.66-6.62-50.185-3.2-1.705-7.138-4.41-10.739-5.012-1.827-.292-4.223-.154-6.096.098-.332.045-.346.643-.028.751%201.23.417%202.722%201.14%203.602%202.233.167.207-.057.533-.322.543-.83.03-2.334.378-4.32%202.064-.229.195-.038.557.257.499%204.267-.844%208.623-.428%2011.191%201.906.167.151.08.423-.137.482-22.283%206.055-17.872%2025.438-11.94%2049.224%205.284%2021.188%207.272%2028.017%207.899%2030.097a.67.67%200%200%200%20.398.439c7.67%203.055%2024.383%203.19%2024.383-2.005z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M71.706%20109.558c-2.703%201.058-7.993%201.528-11.05%201.528-4.48%200-10.932-.705-13.283-1.763-1.452-4.469-5.797-18.32-10.088-35.91l-.42-1.718-.004-.014c-5.101-20.836-9.267-37.854%2013.568-43.2.208-.05.31-.3.172-.463-2.62-3.108-7.528-4.127-13.734-1.986-.255.088-.476-.169-.318-.387%201.217-1.677%203.596-2.967%204.77-3.532.242-.117.228-.473-.03-.553a26%2026%200%200%200-3.546-.846c-.348-.056-.38-.652-.03-.7%208.798-1.183%2017.986%201.459%2022.596%207.266a.3.3%200%200%200%20.175.108c16.883%203.625%2018.092%2030.314%2016.147%2031.53-.384.239-1.612.102-3.233-.08-6.57-.735-19.578-2.19-8.842%2017.818.106.198-.034.46-.256.494-6.054.941%201.704%2019.912%207.406%2032.408%22/%3E%3Cpath%20fill%3D%22%233CA82B%22%20d%3D%22M79.258%2085.293c-1.285-.595-6.227%202.949-9.507%205.67-.686-.97-1.978-1.675-4.894-1.168-2.551.443-3.96%201.058-4.589%202.12-4.027-1.528-10.803-3.884-12.44-1.608-1.79%202.487.447%2014.257%202.824%2015.785%201.24.798%207.175-3.017%2010.275-5.648.5.705%201.305%201.108%202.96%201.069%202.503-.058%206.563-.64%207.193-1.806a1.3%201.3%200%200%200%20.099-.25c3.186%201.191%208.792%202.451%2010.045%202.263%203.264-.49-.455-15.726-1.966-16.427%22/%3E%3Cpath%20fill%3D%22%2340a02b%22%20d%3D%22M70.051%2091.31c.135.242.244.496.337.754.454%201.27%201.194%205.31.634%206.309-.56.998-4.194%201.48-6.436%201.519s-2.746-.782-3.2-2.052c-.364-1.016-.542-3.405-.538-4.773-.092-2.028.65-2.742%204.076-3.296%202.535-.41%203.876.067%204.65.883%203.6-2.686%209.606-6.478%2010.192-5.785%202.92%203.455%203.29%2011.68%202.657%2014.99-.207%201.082-9.879-1.072-9.879-2.239%200-4.844-1.257-6.174-2.493-6.31m-21.187-1.512c.792-1.254%207.216.305%2010.743%201.874%200%200-.725%203.284.429%207.151.337%201.132-8.113%206.167-9.216%205.301-1.275-1.001-3.621-11.691-1.956-14.326%22/%3E%3Cpath%20fill%3D%22%23df8e1d%22%20fill-rule%3D%22evenodd%22%20d%3D%22M51.975%2064.33c.52-2.26%202.941-6.519%2011.587-6.415%204.371-.018%209.801-.002%2013.4-.411a48.2%2048.2%200%200%200%2011.969-2.91c3.742-1.428%205.07-1.11%205.536-.256.512.939-.091%202.56-1.399%204.052-2.498%202.85-6.989%205.06-14.92%205.715-7.93.655-13.185-1.472-15.446%201.991-.976%201.494-.222%205.015%207.448%206.124%2010.364%201.496%2018.876-1.803%2019.928.19%201.052%201.991-5.007%206.044-15.388%206.129s-16.865-3.635-19.164-5.484c-2.918-2.346-4.223-5.766-3.55-8.725Z%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%231e66f5%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M65.196%2039.617c.579-.948%201.863-1.68%203.964-1.68s3.09.836%203.774%201.768c.14.19-.071.413-.287.32l-.158-.069c-.769-.336-1.712-.748-3.329-.77-1.729-.025-2.819.408-3.505.781-.232.126-.596-.125-.46-.35ZM41.539%2040.83c2.04-.853%203.644-.743%204.777-.474.24.056.405-.2.214-.355-.88-.71-2.85-1.59-5.418-.633-2.29.854-3.37%202.63-3.377%203.796-.002.276.564.299.71.066.396-.63%201.053-1.547%203.094-2.4%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M70.945%2052.588a3.263%203.263%200%200%201-3.267-3.255%203.263%203.263%200%200%201%203.267-3.255%203.26%203.26%200%200%201%203.267%203.255%203.26%203.26%200%200%201-3.267%203.255m2.301-4.334a.845.845%200%200%200-1.692%200%20.845.845%200%200%200%201.692%200M49.3%2051.585a3.8%203.8%200%200%201-3.809%203.796c-2.1%200-3.808-1.7-3.808-3.796a3.804%203.804%200%200%201%203.808-3.796c2.1%200%203.809%201.7%203.809%203.796m-1.123-1.258a.987.987%200%200%200-1.972%200c0%20.54.44.982.986.982a.985.985%200%200%200%20.986-.982%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20110.733c27.917%200%2050.548-22.63%2050.548-50.547S88.103%209.639%2060.186%209.639C32.27%209.64%209.64%2032.27%209.64%2060.186c0%2027.917%2022.631%2050.547%2050.547%2050.547Zm0%204.702c30.514%200%2055.25-24.735%2055.25-55.249%200-30.513-24.736-55.249-55.25-55.249S4.937%2029.673%204.937%2060.187s24.736%2055.248%2055.25%2055.248Z%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3C/svg%3E");
}
:root:not(.dark-bg) .logo_homepage {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22206%22%20height%3D%22165%22%20viewBox%3D%220%200%20206%20165%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M103%20120c33.137%200%2060-26.863%2060-60S136.137%200%20103%200%2043%2026.863%2043%2060s26.863%2060%2060%2060%22%20fill%3D%22%23d20f39%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M111.438%20104.766c0-.469.115-.576-1.375-3.546-3.96-7.93-7.94-19.11-6.13-26.32.33-1.31-3.73-48.51-6.6-50.03-3.19-1.7-7.115-4.397-10.705-4.997-1.822-.291-4.21-.153-6.077.098-.332.045-.346.641-.029.749%201.226.415%202.715%201.136%203.592%202.226.166.206-.057.531-.322.54-.827.031-2.326.378-4.305%202.059-.23.194-.04.555.255.497%204.253-.841%208.597-.427%2011.156%201.9.167.15.08.422-.137.48-22.213%206.037-17.816%2025.36-11.902%2049.073%205.248%2021.047%207.235%2027.881%207.867%2029.981a.72.72%200%200%200%20.424.468c7.656%203.037%2024.288%203.168%2024.288-2.006z%22%20fill%3D%22%23ccd0da%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.078%2060c0%2030.419-24.659%2055.078-55.078%2055.078S47.922%2090.418%2047.922%2060%2072.582%204.922%20103%204.922%20158.078%2029.582%20158.078%2060m-67.932%2048.736c-1.522-4.701-5.775-18.329-9.977-35.55l-.419-1.713-.003-.014c-5.085-20.772-9.239-37.737%2013.525-43.067.209-.049.31-.297.172-.46-2.611-3.1-7.504-4.115-13.691-1.98-.254.087-.474-.169-.317-.386%201.213-1.672%203.584-2.958%204.755-3.522.242-.116.227-.47-.03-.55a26%2026%200%200%200-3.535-.844c-.347-.056-.378-.65-.03-.697%208.771-1.18%2017.93%201.453%2022.527%207.243a.3.3%200%200%200%20.174.107c16.83%203.614%2018.035%2030.22%2016.097%2031.432-.383.239-1.608.102-3.224-.079-6.548-.733-19.516-2.184-8.814%2017.763.106.197-.034.458-.255.492-6.015.936%201.646%2019.72%207.324%2032.179%2022.327-5.176%2038.966-25.19%2038.966-49.09%200-27.83-22.561-50.39-50.391-50.39S52.61%2032.17%2052.61%2060c0%2023.388%2015.932%2043.054%2037.536%2048.736%22%20fill%3D%22%234c4f69%22/%3E%3Cpath%20d%3D%22M122.013%2085.03c-1.282-.594-6.208%202.939-9.478%205.65-.684-.966-1.972-1.669-4.879-1.163-2.543.442-3.948%201.055-4.574%202.113-4.016-1.523-10.77-3.872-12.402-1.603-1.784%202.48.445%2014.213%202.815%2015.736%201.237.796%207.153-3.007%2010.243-5.63.499.702%201.301%201.104%202.951%201.066%202.495-.058%206.542-.638%207.17-1.8a1.2%201.2%200%200%200%20.099-.25c3.176%201.187%208.765%202.444%2010.014%202.256%203.254-.489-.453-15.678-1.959-16.376%22%20fill%3D%22%2340a02b%22/%3E%3Cpath%20d%3D%22M112.835%2091.028c.135.24.243.494.335.751.453%201.266%201.19%205.294.633%206.29-.558.994-4.181%201.475-6.416%201.513-2.235.039-2.738-.778-3.191-2.045-.362-1.013-.54-3.394-.536-4.758-.092-2.022.647-2.733%204.063-3.286%202.528-.41%203.864.067%204.636.88%203.588-2.678%209.576-6.457%2010.16-5.767%202.912%203.445%203.28%2011.645%202.649%2014.944-.206%201.078-9.848-1.069-9.848-2.232%200-4.83-1.253-6.154-2.485-6.29M91.713%2089.52c.79-1.25%207.194.304%2010.709%201.869%200%200-.722%203.273.428%207.128.337%201.128-8.088%206.148-9.187%205.285-1.271-.999-3.61-11.655-1.95-14.282%22%20fill%3D%22%234CBA3C%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M94.815%2064.131c.518-2.253%202.931-6.499%2011.551-6.396%204.357-.018%209.77-.002%2013.358-.41a48%2048%200%200%200%2011.931-2.9c3.731-1.424%205.055-1.107%205.52-.255.51.936-.091%202.552-1.395%204.04-2.49%202.84-6.967%205.043-14.873%205.696-7.907.654-13.145-1.467-15.4%201.986-.972%201.489-.22%204.999%207.426%206.104%2010.332%201.491%2018.818-1.797%2019.866.19%201.048%201.985-4.991%206.025-15.34%206.11s-16.813-3.624-19.105-5.467c-2.909-2.338-4.21-5.749-3.54-8.698%22%20fill%3D%22%235c5f77%22/%3E%3Cg%20opacity%3D%220.8%22%3E%3Cpath%20d%3D%22M107.994%2039.494c.577-.945%201.857-1.675%203.952-1.675s3.081.834%203.763%201.763c.139.19-.072.412-.287.319l-.157-.069c-.767-.334-1.707-.745-3.319-.768-1.723-.025-2.81.407-3.495.78-.23.125-.594-.126-.457-.35M84.41%2040.703c2.034-.85%203.633-.74%204.763-.472.238.056.403-.2.213-.354-.877-.707-2.84-1.586-5.4-.63-2.285.85-3.362%202.62-3.368%203.784-.001.274.563.297.709.065.394-.627%201.05-1.543%203.083-2.393%22%20fill%3D%22%23e6e9ef%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M113.726%2052.425a3.25%203.25%200%200%201-3.257-3.245%203.25%203.25%200%200%201%203.257-3.245%203.25%203.25%200%200%201%203.256%203.245%203.25%203.25%200%200%201-3.256%203.245m2.293-4.32a.842.842%200%200%200-1.686%200%20.843.843%200%200%200%201.686%200m-23.872%203.321a3.79%203.79%200%200%201-3.796%203.784%203.79%203.79%200%200%201-3.797-3.784%203.79%203.79%200%200%201%203.797-3.785%203.79%203.79%200%200%201%203.796%203.785m-1.119-1.255a.984.984%200%200%200-1.966%200%20.982.982%200%200%200%201.966-.001%22%20fill%3D%22%231e66f5%22/%3E%3C/g%3E%3Cpath%20d%3D%22M78.35%20144.8h-3.9l-7.1%207.3v-14.6h-3v24.9h3v-8.2l8.1%208.1.1.1h3.6v-.3l-9.1-9z%22%20fill%3D%22%23bcc0cc%22/%3E%3Cpath%20d%3D%22M59.15%20158.1c-1.1%201.1-2.7%201.7-4.5%201.7-3.1%200-6.2-1.9-6.2-6.3%200-3.7%202.6-6.3%206.2-6.3%201.6%200%203.1.6%204.3%201.7l.1.1%201.9-2-.1-.1c-1.8-1.7-3.9-2.5-6.3-2.5-5.5%200-9.2%203.7-9.2%209.1%200%206.3%204.6%209.1%209.2%209.1h.1c2.4%200%204.7-.9%206.3-2.6l.1-.1-2-2zm-20.3-3.9c0%203.2-2.2%205.6-5.3%205.7-3.3%200-5.3-2-5.3-5.4v-9.7h-3v9.7c0%205%203%208.2%207.7%208.2h.1c2.3%200%204.4-1.1%205.8-2.8l.1-.2.1%202.7h2.8v-17.6h-3z%22%20fill%3D%22%23333333%22/%3E%3Cpath%20d%3D%22M9.35%20137.4H.25v25h9.1c8.7%200%2012.5-6.4%2012.5-12.7%200-5.9-3.9-12.3-12.5-12.3m9.4%2012.2c0%204.8-2.9%209.6-9.3%209.6h-6v-18.7h5.9c6.4%200%209.4%204.7%209.4%209.1%22%20fill%3D%22%23bcc0cc%22/%3E%3Cpath%20d%3D%22M173.65%20151.5h7.7v5.8c-1.9%201.6-4.2%202.5-6.7%202.5-6.8%200-9.9-4.9-9.9-9.7%200-4.9%203.1-10.2%209.8-10.2%202.7%200%205.2%201%207.2%202.8l.1.1%201.8-2.1-.1-.1c-2.4-2.4-5.6-3.6-9.1-3.6-3.8%200-7%201.2-9.3%203.6-2.4%202.4-3.7%205.8-3.6%209.6%200%205.9%203.4%2012.7%2013%2012.7h.2c3.6%200%207-1.5%209.4-4.2v-9.9h-10.6v2.7z%22%20fill%3D%22%23ccd0da%22/%3E%3Cpath%20d%3D%22M91.05%20137.4h-9.1v25h9.1c8.7%200%2012.5-6.4%2012.5-12.7%200-5.9-3.9-12.3-12.5-12.3m9.4%2012.2c0%204.8-2.9%209.6-9.3%209.6h-5.9v-18.7h5.9c6.3%200%209.3%204.7%209.3%209.1m95.9-5.2c-5.3%200-9.1%203.9-9.1%209.2s3.8%209.1%209.1%209.1%209.2-3.8%209.2-9.1c0-5.4-3.8-9.2-9.2-9.2m6.2%209.2c0%203.7-2.6%206.3-6.2%206.3-3.5%200-6.1-2.6-6.1-6.3%200-3.8%202.5-6.5%206.2-6.5%203.5.1%206.1%202.8%206.1%206.5m-82%20.6c0%203.2-2.2%205.6-5.3%205.7-3.3%200-5.3-2-5.3-5.4v-9.7h-3v9.7c0%205%203%208.2%207.6%208.2h.1c2.3%200%204.4-1.1%205.8-2.8l.1-.2.1%202.7h2.8v-17.6h-3v9.4z%22%20fill%3D%22%23bcc0cc%22/%3E%3Cpath%20d%3D%22M140.85%20158.1c-1.1%201.1-2.7%201.7-4.5%201.7-3.1%200-6.2-1.9-6.2-6.3%200-3.7%202.6-6.3%206.2-6.3%201.6%200%203.1.6%204.3%201.7l.1.1%201.9-2-.1-.1c-1.8-1.7-3.9-2.5-6.3-2.5-5.5%200-9.2%203.7-9.2%209.1%200%206.3%204.6%209.1%209.2%209.1h.1c2.4%200%204.7-.9%206.3-2.6l.1-.1-2-2z%22%20fill%3D%22%234c4f69%22/%3E%3Cpath%20d%3D%22M160.05%20144.8h-3.9l-7.1%207.3v-14.6h-3v24.9h3v-8.2l8.1%208.1.1.1h3.6v-.3l-9.1-9z%22%20fill%3D%22%23333333%22/%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .related-searches__item-text::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2219%22%20height%3D%2221%22%20viewBox%3D%220%200%2019%2021%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.343%2014.642a8%208%200%201%201%2011.99-.767l3.164%203.165a1.738%201.738%200%200%201-2.457%202.457l-3.39-3.39a8.005%208.005%200%200%201-9.307-1.465m1.414-9.885a6%206%200%201%200%208.486%208.486%206%206%200%200%200-8.486-8.486%22%20fill%3D%22%234c4f69%22%20opacity%3D%220.6%22/%3E%3C/svg%3E") !important;
}
:root:not(.dark-bg) .header_logoImg__PFezv {
    content: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20viewBox%3D%220%200%20189%2053%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22M110.045%2024.224h-2.405l-4.378%204.502v-9.003h-1.85v15.354h1.85v-5.056l4.995%204.994.061.062h2.22v-.185l-5.611-5.55zm-11.898%208.223c-.679.678-1.666%201.048-2.775%201.048-1.912%200-3.824-1.172-3.824-3.885%200-2.281%201.604-3.885%203.824-3.885.986%200%201.911.37%202.651%201.049l.062.061%201.171-1.233-.061-.062C98.085%2024.492%2096.79%2024%2095.31%2024c-3.392%200-5.673%202.281-5.673%205.611%200%203.885%202.836%205.612%205.673%205.612h.062c1.48%200%202.898-.555%203.884-1.604l.062-.061-1.233-1.234zm-12.581-2.404c0%201.973-1.356%203.453-3.268%203.515-2.035%200-3.268-1.233-3.268-3.33v-5.981h-1.85v5.981c0%203.083%201.85%205.057%204.748%205.057h.062c1.418%200%202.713-.679%203.576-1.727l.062-.123.062%201.665h1.726V24.247h-1.85zM67.298%2019.66h-5.612v15.417h5.612c5.365%200%207.708-3.947%207.708-7.832%200-3.638-2.405-7.585-7.708-7.585m5.796%207.524c0%202.96-1.788%205.92-5.735%205.92h-3.7V21.571h3.639c3.946%200%205.796%202.898%205.796%205.612zm96.018%201.17h4.748v3.577c-1.171.986-2.59%201.541-4.131%201.541-4.193%200-6.105-3.021-6.105-5.981%200-3.022%201.912-6.29%206.043-6.29%201.665%200%203.207.617%204.44%201.727l.062.061%201.11-1.295-.062-.061c-1.48-1.48-3.453-2.22-5.611-2.22-2.344%200-4.317.74-5.735%202.22-1.48%201.48-2.282%203.576-2.22%205.92%200%203.638%202.096%207.831%208.016%207.831h.124a7.72%207.72%200%200%200%205.796-2.59V26.69h-6.536v1.665zm-51.181-8.694h-5.612v15.417h5.612c5.365%200%207.708-3.947%207.708-7.832%200-3.638-2.405-7.584-7.708-7.584zm5.796%207.524c0%202.96-1.788%205.92-5.735%205.92h-3.638V21.572h3.638c3.885%200%205.735%202.898%205.735%205.612m59.463-3.185c-3.269%200-5.612%202.405-5.612%205.673s2.343%205.611%205.612%205.611c3.268%200%205.673-2.343%205.673-5.611%200-3.33-2.343-5.673-5.673-5.673m3.823%205.673c0%202.282-1.603%203.885-3.823%203.885-2.159%200-3.762-1.603-3.762-3.885%200-2.343%201.542-4.008%203.823-4.008%202.159.061%203.762%201.726%203.762%204.008m-50.814.371c0%201.973-1.356%203.453-3.268%203.515-2.035%200-3.268-1.233-3.268-3.33v-5.981h-1.85v5.981c0%203.083%201.85%205.057%204.686%205.057h.062c1.418%200%202.713-.679%203.576-1.727l.062-.123.062%201.665h1.726V24.247h-1.85v5.796zm12.58%202.404c-.678.678-1.665%201.048-2.775%201.048-1.911%200-3.823-1.172-3.823-3.885%200-2.281%201.603-3.885%203.823-3.885.987%200%201.912.37%202.652%201.049l.062.061%201.171-1.233-.061-.062c-1.11-1.048-2.405-1.541-3.885-1.541-3.392%200-5.673%202.281-5.673%205.611%200%203.885%202.836%205.612%205.673%205.612h.061c1.48%200%202.899-.555%203.885-1.604l.062-.061-1.233-1.234zm11.899-8.223h-2.405l-4.378%204.502v-9.003h-1.85v15.354h1.85v-5.056l4.994%204.994.062.062h2.22v-.185l-5.611-5.55z%22/%3E%3Cpath%20fill%3D%22%23d20f39%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.5%2053C41.136%2053%2053%2041.136%2053%2026.5S41.136%200%2026.5%200%200%2011.864%200%2026.5%2011.864%2053%2026.5%2053%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%237c7f93%22%20fill-rule%3D%22evenodd%22%20d%3D%22M30.227%2046.272c0-.207.05-.255-.608-1.566-1.749-3.503-3.507-8.44-2.707-11.625.146-.579-1.648-21.425-2.915-22.097-1.41-.75-3.143-1.942-4.728-2.207-.805-.128-1.86-.067-2.684.044-.147.02-.153.283-.013.33.542.184%201.2.502%201.587.984.073.09-.026.234-.142.239-.366.013-1.028.166-1.902.908-.101.086-.017.246.113.22%201.878-.372%203.797-.189%204.927.84.073.066.035.185-.06.211-9.811%202.667-7.87%2011.2-5.257%2021.674%202.213%208.875%203.113%2012.028%203.433%2013.103a.6.6%200%200%200%20.366.398c3.438%201.29%2010.59%201.316%2010.59-.939z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M31.572%2048.238c-1.19.466-3.52.673-4.865.673-1.973%200-4.814-.31-5.849-.776-.639-1.968-2.552-8.066-4.442-15.811l-.185-.757-.001-.006c-2.246-9.174-4.08-16.667%205.974-19.021.091-.022.136-.131.076-.204-1.154-1.368-3.315-1.817-6.048-.874-.112.039-.209-.074-.14-.17.536-.739%201.584-1.307%202.1-1.556.107-.051.101-.208-.012-.243a11.5%2011.5%200%200%200-1.562-.372c-.153-.025-.167-.288-.013-.309%203.874-.52%207.92.642%209.95%203.2q.029.036.076.047c7.434%201.596%207.966%2013.347%207.11%2013.882-.17.106-.71.045-1.424-.035-2.893-.323-8.62-.964-3.893%207.846.047.087-.015.202-.113.217-2.665.415.75%208.767%203.261%2014.27z%22/%3E%3Cpath%20fill%3D%22%233ca82b%22%20d%3D%22M34.897%2037.555c-.566-.263-2.742%201.298-4.186%202.496-.302-.427-.87-.738-2.154-.515-1.124.196-1.744.467-2.021.934-1.773-.672-4.757-1.71-5.478-.708-.787%201.095.197%206.277%201.244%206.95.546.351%203.16-1.328%204.524-2.487.22.31.575.488%201.303.471%201.102-.025%202.89-.282%203.167-.795a.6.6%200%200%200%20.044-.11c1.403.524%203.871%201.08%204.423.996%201.437-.216-.2-6.924-.866-7.232%22/%3E%3Cpath%20fill%3D%22%2340a02b%22%20d%3D%22M30.844%2040.204q.088.16.148.332c.2.56.525%202.338.28%202.778-.247.439-1.847.651-2.835.668s-1.209-.344-1.409-.903c-.16-.447-.238-1.5-.237-2.101-.04-.894.286-1.208%201.795-1.452%201.116-.18%201.707.03%202.047.39%201.585-1.184%204.23-2.853%204.488-2.548%201.286%201.521%201.448%205.143%201.17%206.6-.091.476-4.35-.472-4.35-.986%200-2.133-.553-2.718-1.097-2.778m-9.329-.666c.349-.552%203.177.135%204.73.825%200%200-.32%201.446.189%203.149.148.498-3.572%202.715-4.058%202.334-.561-.441-1.594-5.148-.861-6.308%22/%3E%3Cpath%20fill%3D%22%23df8e1d%22%20fill-rule%3D%22evenodd%22%20d%3D%22M22.885%2028.325c.228-.995%201.295-2.87%205.101-2.825%201.925-.008%204.315-.001%205.9-.181a21.2%2021.2%200%200%200%205.27-1.282c1.648-.628%202.233-.488%202.438-.112.225.413-.04%201.127-.616%201.784-1.1%201.255-3.077%202.228-6.57%202.516s-5.805-.648-6.8.877c-.43.658-.098%202.208%203.279%202.696%204.563.659%208.311-.793%208.774.084s-2.204%202.661-6.775%202.698c-4.57.038-7.426-1.6-8.438-2.414-1.285-1.033-1.86-2.539-1.563-3.841%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%23dce0e8%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M28.706%2017.443c.255-.417.82-.74%201.745-.74s1.36.369%201.662.78c.061.083-.032.181-.127.14l-.07-.03c-.338-.148-.753-.33-1.465-.34-.761-.01-1.241.18-1.544.344-.101.056-.262-.055-.201-.154m-10.416.534c.898-.375%201.604-.327%202.103-.208.105.024.178-.089.094-.156-.387-.313-1.254-.7-2.385-.28-1.01.377-1.485%201.159-1.487%201.672-.001.122.248.132.312.03.174-.278.464-.682%201.362-1.058z%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M31.237%2023.154c-.794%200-1.438-.642-1.438-1.433s.644-1.433%201.438-1.433%201.438.642%201.438%201.433-.644%201.433-1.438%201.433m1.013-1.908a.372.372%200%200%200-.745%200%20.372.372%200%200%200%20.745%200m-10.544%201.467c0%20.923-.75%201.671-1.676%201.671a1.675%201.675%200%200%201-1.677-1.67c0-.924.752-1.672%201.677-1.672.924%200%201.676.748%201.676%201.671m-.494-.554a.434.434%200%201%200-.867.002.434.434%200%200%200%20.867-.002%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%234c4f69%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.5%2048.756c12.292%200%2022.256-9.964%2022.256-22.256S38.792%204.244%2026.5%204.244%204.244%2014.208%204.244%2026.5%2014.208%2048.756%2026.5%2048.756m0%202.07c13.435%200%2024.326-10.891%2024.326-24.326S39.935%202.174%2026.5%202.174%202.174%2013.065%202.174%2026.5%2013.065%2050.826%2026.5%2050.826%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.497%2048.438c12.118%200%2021.941-9.823%2021.941-21.94S38.615%204.555%2026.498%204.555%204.555%2014.38%204.555%2026.497s9.824%2021.941%2021.941%2021.941zm24.292-21.94c0%2013.415-10.876%2024.29-24.292%2024.29S2.206%2039.914%202.206%2026.499%2013.08%202.205%2026.497%202.205%2050.79%2013.08%2050.79%2026.497z%22%20clip-rule%3D%22evenodd%22/%3E%3C/svg%3E");
}
:root.dark-bg {
    color-scheme: dark;
    --sds-color-text-02: #cdd6f4 !important;
    --theme-col-txt-page-separator: #cdd6f4!important;
    --theme-col-page-separator: #cdd6f4 !important;
    --theme-col-txt-url: #cdd6f4 !important;
    --theme-col-txt-title-visited: #cba6f7 !important;
    --theme-col-txt-snippet: #cdd6f4 !important;
    --theme-col-txt-card-title: #cdd6f4;
    --theme-col-txt-url-domain: #bac2de !important;
    --theme-col-txt-title: #89b4fa !important;
    --theme-col-bg-card: #313244 !important;
    --theme-col-about-link: #89b4fa;
    --theme-col-border-ui: #45475a !important;
    --theme-col-bg-expandcollapse: #313244 !important;
    --sds-color-palette-gray-60: #89b4fa !important;
    --theme-col-txt-msg: #cdd6f4 !important;
    --theme-col-txt-url-path: #a6adc8 !important;
    --theme-col-border-expandcollapse: #45475a;
    --col-blue-50: #74c7ec !important;
    --col-blue-60: #89b4fa !important;
    --theme-col-bg-page: #1e1e2e !important;
    --sds-color-text-01: #cdd6f4 !important;
    --sds-color-text-on-color: #1e1e2e !important;
    --theme-spp-high-contrast-text-secondary: #89b4fa !important;
    --theme-spp-high-contrast-card-indicator-color: #313244 !important;
    --theme-spp-high-contrast-title-span-text: #cdd6f4 !important;
    --theme-spp-high-contrast-bg: #313244 !important;
    --sds-color-palette-yellow-50: #f9e2af !important;
    --sds-color-text-04: #bac2de !important;
    --theme-col-txt-card-body: #cdd6f4 !important;
    --theme-col-txt-qna-details: #a6adc8 !important;
    --theme-col-txt-card: #cdd6f4 !important;
    --sds-color-text-03: #a6adc8 !important;
    --col-slate-light: #a6adc8;
    --col-silver-dark: #7f849c;
    --theme-col-txt-button-secondary: #89b4fa !important;
    --theme-bg-legacy-home: #1e1e2e !important;
    --theme-bg-cta-cards: #313244 !important;
    --theme-button-primary-bg: #89b4fa !important;
    --theme-button-primary-bg--hover: #89b4fa !important;
    --theme-button-primary-bg--active: #89b4fa !important;
    --theme-button-primary-text: #11111b !important;
    --theme-badge-fg--green: #11111b !important;
    --theme-browser-comparison-table-check-bg: #a6e3a1 !important;
    --theme-browser-comparison-table-cross-bg: #f38ba8 !important;
    --theme-searchbox-bg: #313244 !important;
    --theme-searchbox-bg--hover: #313244 !important;
    --theme-searchbox-bg--active: #313244 !important;
    --theme-searchbox-bg--focused: #313244 !important;
    --theme-border-color-legacy-home-searchbox: #585b70 !important;
    --theme-button-link-text: #89b4fa !important;
    --theme-browser-comparison-table-badge-text: #cdd6f4 !important;
    --theme-badge-bg--green: #a6e3a1 !important;
    --theme-badge-bg--yellow: #f9e2af !important;
    --theme-atb-button-bg: #89b4fa;
    --theme-atb-button-bg--hover: #89b4fa;
    --theme-atb-button-bg--active: #89b4fa;
    --col-silver-light: #45475a !important;
    --theme-col-card-inner-border: #585b70 !important;
    --sds-color-text-link-02: #cdd6f4 !important;
    --sds-color-text-link-02--hover: #bac2de !important;
    --theme-text-legacy-home: #cdd6f4 !important;
    --theme-browser-comparison-table-row-bg: #313244 !important;
    --theme-browser-comparison-table-row-alt-bg: #45475a !important;
    --theme-bg-home-bottom: #1e1e2e !important;
    --theme-atb-card-back-bg: #313244 !important;
    --theme-atb-card-front-bg: #45475a !important;
    --theme-text-bg: #cdd6f4 !important;
    --theme-accordion-background--expanded: #313244 !important;
    --theme-accordion-background: #45475a !important;
    --theme-footer-link-text: #89b4fa !important;
    --theme-sidemenu-bg: #313244 !important;
    --theme-col-txt-button-tertiary: #cdd6f4 !important;
    --theme-bg-legacy-home-searchbox: #313244 !important;
    --theme-bg-info-snippet: #585b70 !important;
    --theme-button-tertiary-txt: #cdd6f4 !important;
    --theme-browser-comparison-table-icon-bg: #181825 !important;
    --theme-col-bg-ui: #181825 !important;
    --theme-col-bg-header-modal: #313244 !important;
    --theme-col-bg-button-primary: #89b4fa !important;
    /* ai chat */
    --theme-dc-color-background-dark: #1e1e2e !important;
    --theme-dc-color-gpt-main: #cba6f7 !important;
    --theme-dc-color-gpt-bg: #cba6f7 !important;
    --theme-dc-color-claude-main: #a6e3a1 !important;
    --theme-dc-color-claude-bg: #a6e3a1 !important;
    --sds-color-background-destructive: #f38ba8 !important;
    --sds-color-text-on-dark-01: #cdd6f4 !important;
    --theme-dc-color-fire-button: rgba(243, 139, 168, 0.4) !important;
    --sds-color-background-destructive-state-01: #f38ba8 !important;
    --sds-color-background-destructive-state-02: #f38ba8 !important;
    --sds-color-text-destructive: #f38ba8 !important;
    --sds-color-text-success: #a6e3a1 !important;
    --sds-color-text-link-01: #89b4fa !important;
    --sds-color-background-container-01: #313244 !important;
    --sds-color-border-accent-01: #89b4fa !important;
    --theme-dc-color-container-message: #313244 !important;
    --sds-color-palette-gray-85: #45475a !important;
    --sds-color-palette-white: #11111b !important;
    --sds-color-background-accent-01: #89b4fa !important;
    --theme-col-txt-card-body-light: #cdd6f4 !important;
    --theme-col-bg-page-alt-2: #313244 !important;
    --theme-dc-color-llama-main: #f5c2e7 !important;
    --theme-dc-color-mixtral-main: #fab387 !important;
    --theme-dc-color-anchor-sleep: #a6adc8 !important;
    /* privacy reminders */
    /* stopwatch */
    /* html chars */
    /* cal */
    /* button on hover */
    /* stocks infobox */
    /* color box */
    /* ai chat >:( */
    /* lyrics box */
}
:root.dark-bg ::selection {
    background-color: rgba(137, 180, 250, 0.3);
}
:root.dark-bg input::placeholder,
:root.dark-bg textarea::placeholder {
    color: #a6adc8 !important;
}
:root.dark-bg .featureCards_root__brAX3 {
    --feature-card-background-color: #313244 !important;
}
:root.dark-bg .footer,
:root.dark-bg .footer--mobile,
:root.dark-bg .modal--dropdown--settings,
:root.dark-bg .settings-dropdown--section,
:root.dark-bg .frm__field,
:root.dark-bg .frm__switch,
:root.dark-bg .tileview .metabar--fixed,
:root.dark-bg body,
:root.dark-bg .zci,
:root.dark-bg html,
:root.dark-bg .body--home,
:root.dark-bg html.displayable-atb-banner .body--home,
:root.dark-bg .site-wrapper,
:root.dark-bg .region__body,
:root.dark-bg .badge-link,
:root.dark-bg .module--carousel__image-wrapper,
:root.dark-bg .result__image,
:root.dark-bg .vertical--map__sidebar,
:root.dark-bg .vertical--map__sidebar__header,
:root.dark-bg .page-chrome_newtab,
:root.dark-bg .js-carousel-module-more,
:root.dark-bg .zci--type--tiles:not(.is-fallback).is-full-page.is-expanded,
:root.dark-bg .zci--type--tiles:not(.is-fallback).is-full-page.is-expanded .metabar:not(.is-stuck) {
    background-color: #1e1e2e !important;
}
:root.dark-bg .wXKLp5dS9jGvo097pfaG {
    color: #a6e3a1 !important;
}
:root.dark-bg .IuA6a2PUTR9Lck6m0WlP {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208A8%208%200%201%201%200%208a8%208%200%200%201%2016%200m-4.572-1.562a.675.675%200%201%200-1.006-.9L7.123%209.224%205.597%207.36a.675.675%200%200%200-1.044.855l2.025%202.475a.675.675%200%200%200%201.025.023z%22%20fill%3D%22%23a6e3a1%22/%3E%3C/svg%3E") !important;
}
:root.dark-bg .XxDCpwElzOhQaLmCxJ8z {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.452.99a3%203%200%200%201%20.655-.482c.242-.13.563-.259.894-.258.329%200%20.65.128.891.258.251.135.488.311.659.485.683.696%201.162.933%201.836%201.142.645.2%201.409.242%202.45.11a2.03%202.03%200%200%201%201.471.378c.42.315.686.794.69%201.324.034%203.86-.53%206.343-1.723%208.126-1.26%201.886-3.14%202.838-5.113%203.838l-.238.12a2.06%202.06%200%200%201-1.848%200l-.176-.089-.062-.031c-1.973-1-3.852-1.952-5.113-3.838C.532%2010.29-.032%207.807%200%203.947c.005-.53.271-1.008.69-1.323.416-.313.95-.445%201.469-.38%201.049.133%201.816.082%202.46-.124.677-.216%201.159-.452%201.832-1.13m5.03%205.419a.686.686%200%200%200-1.021-.915L7.108%209.24%205.56%207.346a.686.686%200%200%200-1.061.868l2.057%202.515a.686.686%200%200%200%201.042.023z%22%20fill%3D%22%23a6e3a1%22/%3E%3C/svg%3E") !important;
}
:root.dark-bg .privacy-reminder__icon-check {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.375%205.484a.675.675%200%200%201%20.053.954l-3.825%204.275a.675.675%200%200%201-1.025-.023L4.553%208.215a.675.675%200%201%201%201.044-.855l1.526%201.865%203.299-3.688a.675.675%200%200%201%20.953-.053%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E") !important;
}
:root.dark-bg .privacy-reminder__modal-hide,
:root.dark-bg .privacy-reminder__modal-link {
    color: #cdd6f4 !important;
}
:root.dark-bg .zci--stopwatch .time {
    color: #cdd6f4 !important;
}
:root.dark-bg .label {
    color: #cdd6f4;
    background-color: #11111b;
}
:root.dark-bg .stopwatch__btn.start {
    border-color: #a6e3a1 !important;
    background-color: #a6e3a1;
    color: #181825 !important;
}
:root.dark-bg .stopwatch__btn[disabled] {
    color: #cdd6f4 !important;
    background-color: #313244 !important;
    border-color: #313244;
}
:root.dark-bg .stopwatch__btn.stop {
    color: #181825;
    background-color: #f38ba8 !important;
    border-color: #f38ba8 !important;
}
:root.dark-bg .stopwatch__btn {
    background-color: #585b70;
    border-color: #585b70;
    color: #cdd6f4;
}
:root.dark-bg .zci--stopwatch td {
    color: #cdd6f4;
}
:root.dark-bg .record__body,
:root.dark-bg .chomp--link__mr,
:root.dark-bg .tx-clr--lt2 {
    color: #cdd6f4;
}
:root.dark-bg .c-list__item {
    border-color: #181825;
}
:root.dark-bg .chomp--link__icn::before {
    color: #cdd6f4;
}
:root.dark-bg .calendar .t_right,
:root.dark-bg .calendar .t_left {
    background-color: #585b70;
}
:root.dark-bg .calendar__header {
    color: #cdd6f4;
}
:root.dark-bg table.calendar tr {
    color: #cdd6f4;
}
:root.dark-bg .calendar__today {
    color: #181825;
    background-color: #89b4fa;
}
:root.dark-bg .zci.is-active {
    border-color: #313244;
}
:root.dark-bg .module__toggle--more::after {
    background: linear-gradient(rgba(40, 40, 40, 0), #313244);
}
:root.dark-bg .btn:hover:not(.is-disabled) {
    background-color: #181825;
    color: #89b4fa;
    border-color: #181825;
}
:root.dark-bg .stocks-module__currentPrice,
:root.dark-bg .stocks-module__exchange,
:root.dark-bg .stocks-module__currency,
:root.dark-bg .stocks-module__stats {
    color: #cdd6f4;
}
:root.dark-bg .stocks-module__timePeriod {
    background-color: #585b70;
    color: #cdd6f4;
}
:root.dark-bg .stocks-module__latestUpdate,
:root.dark-bg .ia-module--stocks a.stocks-module__attribution,
:root.dark-bg .stocks-module__footer {
    color: #bac2de;
}
:root.dark-bg .stocks-module__timePeriod.selected {
    color: #181825;
    background-color: #89b4fa;
}
:root.dark-bg .ia-module--stocks.increase .color-coded {
    color: #a6e3a1 !important;
}
:root.dark-bg .stocks-module__hover-label[style*="color: rgb(222, 88, 51);"] {
    color: #f38ba8 !important;
}
:root.dark-bg .stocks-module__hover-label[style*="color: rgb(91, 158, 77);"] {
    color: #a6e3a1 !important;
}
:root.dark-bg .ia-module--stocks.increase .color-coded path {
    stroke: #a6e3a1;
    fill: #a6e3a1;
}
:root.dark-bg .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#de5833"] {
    stroke: #f38ba8 !important;
}
:root.dark-bg .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [fill="#de5833"] {
    fill: #f38ba8 !important;
}
:root.dark-bg .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#5b9e4d"] {
    stroke: #a6e3a1 !important;
}
:root.dark-bg .ia-module--stocks .stocks-module__chart-area-row .stocks-module__chart svg [stroke="#5b9e4d"] [fill="#5b9e4d"] {
    fill: #a6e3a1 !important;
}
:root.dark-bg .ia-module--stocks.decrease .color-coded {
    color: #f38ba8;
}
:root.dark-bg .ia-module--stocks.decrease .color-coded path {
    stroke: #f38ba8;
    fill: #f38ba8;
}
:root.dark-bg .ia-module--stocks .stocks-module__stats-wrapper .stocks-module__stats .stocks-module__stat-col .stocks-module__stat {
    border-bottom-color: #6c7086;
}
:root.dark-bg .stocks-module__chart .horizontal-line,
:root.dark-bg .stocks-module__chart .vertical-line,
:root.dark-bg .stocks-module__chart .prev-close-line {
    stroke: #585b70;
}
:root.dark-bg .tx-clr--lt {
    color: #cdd6f4;
}
:root.dark-bg .tx-clr--dk2 {
    color: #a6adc8;
}
:root.dark-bg .feedback-external__link {
    color: #89b4fa;
}
:root.dark-bg .feedback-duckchat-modal__disclaimer {
    color: #cdd6f4;
}
:root.dark-bg .feedback-modal__radio {
    color: #cdd6f4;
}
:root.dark-bg .modal__close {
    color: #cdd6f4;
}
:root.dark-bg .js-lyrics-module {
    color: #bac2de !important;
}
:root.dark-bg .module--lyrics__subtitle-box {
    border-color: #585b70;
}
:root.dark-bg .module__inner-toggle--chevron {
    color: #89b4fa !important;
    background-color: #45475a !important;
    border-color: #585b70;
}
:root.dark-bg .module__inner-toggle::before,
:root.dark-bg .module__inner-toggle::after {
    background-color: #585b70 !important;
}
:root.dark-bg .module--translations .dropdown--translation-select,
:root.dark-bg .module--translations-translatedtext {
    background: #313244 !important;
    border-color: #313244;
}
:root.dark-bg .module--translations .module--translations-translatedtext.is-placeholder {
    color: #a6adc8;
}
:root.dark-bg .module--translations-swap-svg {
    fill: #cdd6f4 !important;
}
:root.dark-bg .module--translations-original textarea,
:root.dark-bg .module--translations-translatedtext,
:root.dark-bg .module--translations-footer a {
    color: #cdd6f4;
}
:root.dark-bg .module--translations-clear,
:root.dark-bg .module--translations-copy {
    color: #a6adc8 !important;
}
:root.dark-bg .modal__list__filter input {
    background: #181825;
}
:root.dark-bg .module:not(
.module--carousel,
.module--placeholder,
.module--images,
.module--translations,
.module__chromeless
) {
    background: #313244 !important;
    border-color: #45475a !important;
}
:root.dark-bg .module__toggle,
:root.dark-bg .tile__expand {
    background-color: #313244 !important;
    border-color: #45475a !important;
}
:root.dark-bg .module__title__link,
:root.dark-bg .module__text,
:root.dark-bg .pln,
:root.dark-bg .pun,
:root.dark-bg code,
:root.dark-bg .module__more-at-bottom {
    color: #cdd6f4 !important;
}
:root.dark-bg code {
    background-color: #1e1e2e !important;
}
:root.dark-bg .lit {
    color: #fab387 !important;
}
:root.dark-bg .com {
    color: #bac2de !important;
}
:root.dark-bg .str {
    color: #a6e3a1 !important;
}
:root.dark-bg .atv {
    color: #94e2d5 !important;
}
:root.dark-bg .module__title__sub {
    color: #a6adc8;
}
:root.dark-bg .prettyprint {
    background-color: #181825;
}
:root.dark-bg .is-link-style-exp .btn--primary:not(.is-disabled) {
    background-color: #89b4fa !important;
    border-color: #89b4fa !important;
    color: #181825 !important;
}
:root.dark-bg .featureCards_dark__5Xbsn {
    background: linear-gradient(180deg, #f9e2af, #89b4fa);
}
:root.dark-bg .modal__box.modal__box--feedback.modal__box--headed .modal__box__header {
    background-color: #313244 !important;
}
:root.dark-bg .module--definitions__pronunciation {
    color: #a6adc8 !important;
}
:root.dark-bg .module--definitions__group ol li::before {
    color: #89b4fa !important;
}
:root.dark-bg .module--definitions__usage {
    color: #a6adc8 !important;
}
:root.dark-bg .module__title,
:root.dark-bg .module--definitions__definition {
    color: #cdd6f4 !important;
}
:root.dark-bg .play-btn__icn_hollow {
    fill: #89b4fa !important;
}
:root.dark-bg .module__toggle {
    color: #89b4fa !important;
}
:root.dark-bg .forecast-wrapper .module__weather-warning--red,
:root.dark-bg .module__weather-warning--red:hover,
:root.dark-bg .module__weather-warning--red:focus,
:root.dark-bg .module__weather-warning--red:visited {
    color: #f38ba8 !important;
}
:root.dark-bg .module__weather-warning {
    color: #f9e2af !important;
}
:root.dark-bg .text--primary,
:root.dark-bg .tx-clr--dk,
:root.dark-bg .tx-clr--slate,
:root.dark-bg .module__temperature-unit:not(.module__temperature-unit--on) {
    color: #bac2de !important;
}
:root.dark-bg .module__temperature-unit,
:root.dark-bg .module__temperature-unit:hover {
    color: #89b4fa !important;
}
:root.dark-bg .module__detail__precip-label,
:root.dark-bg .module__items-precip-label,
:root.dark-bg .ia-module--module--definitions__reference,
:root.dark-bg .js-definitions-internal {
    color: #89b4fa !important;
}
:root.dark-bg .module__detail__hour-label {
    color: #cdd6f4 !important;
}
:root.dark-bg .module__items-item {
    background: #313244 !important;
    border-color: #585b70 !important;
}
:root.dark-bg .module__weatherkit-logo {
    fill: #89b4fa;
}
:root.dark-bg .module__warnings,
:root.dark-bg .module__temperature-unit--on {
    border-color: #585b70 !important;
}
:root.dark-bg .module__detail__precip-label__icon,
:root.dark-bg .module__items-precip-label__icon {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M8.339%204.317%205.487%200%202.65%204.307a3.67%203.67%200%200%200%20.533%204.784%203.434%203.434%200%200%200%204.645.01%203.66%203.66%200%200%200%20.513-4.78z%22%20fill%3D%22%2389b4fa%22/%3E%3C/svg%3E");
}
:root.dark-bg .tile__ctrl__btn,
:root.dark-bg .tile__history,
:root.dark-bg .tile__past-calc {
    background-color: #313244 !important;
    border-color: #585b70 !important;
    color: #cdd6f4 !important;
}
:root.dark-bg .tile__tab__sci .tile__ctrl__btn,
:root.dark-bg .tile__ctrl__toggle {
    background-color: #585b70 !important;
    color: #cdd6f4 !important;
    border-color: #6c7086 !important;
}
:root.dark-bg .tile__display__main,
:root.dark-bg .tile__past-result {
    color: #cdd6f4 !important;
}
:root.dark-bg .tile__display {
    box-shadow: inset -1px -1px 0 #6c7086, inset 1px 1px 0 #6c7086 !important;
    background-color: #1e1e2e !important;
    border-color: #585b70 !important;
    color: #cdd6f4 !important;
}
:root.dark-bg .tile__display.selected {
    box-shadow: inset -1px -1px 0 #89b4fa, inset 1px 1px 0 #89b4fa !important;
}
:root.dark-bg .tile__ctrl--important {
    background-color: #f9e2af !important;
    color: #181825 !important;
}
:root.dark-bg .tile__display__aside,
:root.dark-bg .tile__past-formula {
    color: #a6adc8 !important;
}
:root.dark-bg .bg-delayed-color {
    background-color: #f38ba8;
}
:root.dark-bg #error_homepage {
    background-color: #f5e0dc !important;
    color: #f38ba8 !important;
}
:root.dark-bg .search--adv {
    background-color: #313244 !important;
    border-color: #313244 !important;
}
:root.dark-bg .open-in-app__deep-link {
    color: #181825;
}
:root.dark-bg .modal__header__clear,
:root.dark-bg .sep--before,
:root.dark-bg .js-region-filter-clear,
:root.dark-bg .result__a,
:root.dark-bg .module--carousel__body__title,
:root.dark-bg .js-carousel-module-more,
:root.dark-bg .js-no-results-web,
:root.dark-bg .bing .tile__title--pr a,
:root.dark-bg .sidebar-filter__show-more,
:root.dark-bg .module__footer,
:root.dark-bg .js-settings-dropdown-reset-appearance,
:root.dark-bg .modal--dropdown--settings .settings-dropdown--button,
:root.dark-bg .settings-page-wrapper a:not(.btn, .set-tab),
:root.dark-bg .module__link--blue,
:root.dark-bg .place-list-item__cta-item__text {
    color: #89b4fa !important;
}
:root.dark-bg .tile__title a:visited {
    color: #cba6f7;
}
:root.dark-bg .place-detail__status--off {
    color: #f38ba8;
}
:root.dark-bg .place-detail__status--on {
    color: #a6e3a1;
}
:root.dark-bg .result__a:visited {
    color: #cba6f7 !important;
}
:root.dark-bg .bg-clr--green {
    background-color: #a6e3a1;
}
:root.dark-bg .tile__status,
:root.dark-bg .osGBsMSM4O7_HVv5OcxQ,
:root.dark-bg .C68Y1fiPXCZijXmzVAbe {
    color: #181825 !important;
}
:root.dark-bg .modal__header,
:root.dark-bg .modal__footer,
:root.dark-bg .modal__box,
:root.dark-bg .tile,
:root.dark-bg .related-searches__item,
:root.dark-bg .bg-clr--white,
:root.dark-bg .tile__media__free-shipping-label,
:root.dark-bg .sidebar-filter__options,
:root.dark-bg .sidebar-filter__option.is-size,
:root.dark-bg .module__footer,
:root.dark-bg .frm__select,
:root.dark-bg .set-bookmarklet,
:root.dark-bg .set-reset,
:root.dark-bg .search__autocomplete,
:root.dark-bg .frm__input,
:root.dark-bg .frm__color__swatch {
    border-color: #313244 !important;
    background-color: #11111b !important;
}
:root.dark-bg .sep--before::before,
:root.dark-bg .sep {
    border-left-color: #585b70;
}
:root.dark-bg .header-wrap {
    box-shadow: none !important;
}
:root.dark-bg .header-wrap,
:root.dark-bg .module--carousel__left,
:root.dark-bg .module--carousel__right,
:root.dark-bg .detail,
:root.dark-bg .btn {
    background-color: #181825;
}
:root.dark-bg .set-header--fixed .tileview--grid .metabar--fixed,
:root.dark-bg .tileview--grid .metabar--fixed.is-stuck {
    background-color: #313244;
    border-top-color: #313244;
}
:root.dark-bg .modal--dropdown--region.modal--popout .frm__input,
:root.dark-bg .js-region-filter-list,
:root.dark-bg .tile__body,
:root.dark-bg .bg-clr--white,
:root.dark-bg .acp-wrap,
:root.dark-bg .tile__media__free-shipping-label,
:root.dark-bg .tile__media--pr,
:root.dark-bg .modal__box,
:root.dark-bg .nav-menu__list,
:root.dark-bg .set-tab.is-active,
:root.dark-bg .frm__select select,
:root.dark-bg .cloudsave,
:root.dark-bg .feedback-btn__send,
:root.dark-bg .set-bookmarklet__input,
:root.dark-bg .howItWorksSection_downloadsCard__U3Ph9,
:root.dark-bg .metabar__grid-btn,
:root.dark-bg .feedback-btn__icon-wrap .set-bookmarklet__input .btn,
:root.dark-bg .btn.btn--secondary,
:root.dark-bg .btn.is-disabled,
:root.dark-bg input,
:root.dark-bg textarea,
:root.dark-bg .frm__input,
:root.dark-bg .frm__text,
:root.dark-bg .detail--xd .c-detail__btn,
:root.dark-bg .set-bookmarklet,
:root.dark-bg .set-reset,
:root.dark-bg .zci--json_validator textarea,
:root.dark-bg .colorpicker,
:root.dark-bg .feedback-modal__submit.is-disabled,
:root.dark-bg .feedback-modal__submit.is-disabled:active,
:root.dark-bg .feedback-modal__submit.is-disabled:focus,
:root.dark-bg .module__section,
:root.dark-bg .module--carousel__item,
:root.dark-bg .is-related-search-exp.dark-bg,
:root.dark-bg .related-searches__item,
:root.dark-bg .detail--xd .tile-nav--sm,
:root.dark-bg .set-bookmarklet__detail,
:root.dark-bg .set-reset__detail,
:root.dark-bg .module__footer,
:root.dark-bg .js-definitions-internal {
    background-color: #313244 !important;
}
:root.dark-bg .module--carousel__item {
    border-color: #45475a !important;
}
:root.dark-bg .btn.is-disabled:hover,
:root.dark-bg .frm__switch__label:hover,
:root.dark-bg .feedback-modal__submit.is-disabled:hover,
:root.dark-bg .btn.btn--skeleton:hover,
:root.dark-bg .module__footer-carousel__label:hover {
    background-color: #585b70 !important;
    border-color: #585b70 !important;
}
:root.dark-bg .is-checked .frm__switch__label.btn {
    background-color: #89b4fa !important;
    color: #181825 !important;
}
:root.dark-bg .js-set-exit {
    background-color: #89b4fa !important;
    border-color: #89b4fa !important;
    color: #1e1e2e !important;
}
:root.dark-bg .js-set-exit:hover {
    background-color: rgba(137, 180, 250, 0.8) !important;
    border-color: rgba(137, 180, 250, 0.8) !important;
    color: #1e1e2e !important;
}
:root.dark-bg .set-bookmarklet__data {
    background-color: #585b70;
    color: #cdd6f4;
}
:root.dark-bg .modal__list__link.is-highlighted,
:root.dark-bg .modal__list li:hover {
    background-color: #7f849c;
}
:root.dark-bg .metabar__dropdowns-wrap::before {
    background-image: linear-gradient(90deg, #1e1e2e, rgba(255, 255, 255, 0));
}
:root.dark-bg .metabar__dropdowns-wrap::after {
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), #1e1e2e);
}
:root.dark-bg .nav-menu__item__badge {
    background-color: #f9e2af;
    color: #181825;
}
:root.dark-bg .settings-dropdown--section,
:root.dark-bg .set-head,
:root.dark-bg .frm__hr {
    border-bottom-color: #585b70;
}
:root.dark-bg .zcm--right-fade::before {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), #181825);
}
:root.dark-bg .search-filters-wrap::before {
    background: linear-gradient(90deg, #1e1e2e, rgba(255, 255, 255, 0));
}
:root.dark-bg .search-filters-wrap::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), #1e1e2e);
}
:root.dark-bg .footer,
:root.dark-bg .footer--mobile {
    border-top-color: #313244;
}
:root.dark-bg .is-vertical-tabs-exp,
:root.dark-bg #duckbar,
:root.dark-bg .zcm__link:not(.dropdown__button).is-active,
:root.dark-bg .set-main-footer {
    border-color: #89b4fa !important;
}
:root.dark-bg #more-results {
    background-color: #313244 !important;
}
:root.dark-bg input,
:root.dark-bg select,
:root.dark-bg h1,
:root.dark-bg h2,
:root.dark-bg h4,
:root.dark-bg h5,
:root.dark-bg h6,
:root.dark-bg ul,
:root.dark-bg ol,
:root.dark-bg blockquote,
:root.dark-bg p,
:root.dark-bg body,
:root.dark-bg .module--carousel__footer,
:root.dark-bg .set-tab.is-active,
:root.dark-bg .zcm__link,
:root.dark-bg .feedback-prompt__link,
:root.dark-bg .feedback-btn__send,
:root.dark-bg .tile--img__sub,
:root.dark-bg .result__snippet,
:root.dark-bg .result__snippet b,
:root.dark-bg .modal__list__link,
:root.dark-bg .acp,
:root.dark-bg .header_headerButton__cLYU3,
:root.dark-bg .is-vertical-tabs-exp,
:root.dark-bg .module.module--images,
:root.dark-bg .module__header.module__header--link,
:root.dark-bg .text--title,
:root.dark-bg .text--airline-flight,
:root.dark-bg .timing,
:root.dark-bg .flight-details__values,
:root.dark-bg .airlines-footer,
:root.dark-bg .tx-clr--slate,
:root.dark-bg .nav-menu__heading,
:root.dark-bg .zci,
:root.dark-bg .metabar__grid-btn,
:root.dark-bg .module--carousel__left,
:root.dark-bg .module--carousel__right,
:root.dark-bg .c-detail__title__sub,
:root.dark-bg .c-detail__desc,
:root.dark-bg .c-detail__filemeta,
:root.dark-bg .c-detail__more,
:root.dark-bg .frm__label,
:root.dark-bg .js-cloudsave-new-suggestion,
:root.dark-bg .zci__body,
:root.dark-bg .zci__body a {
    color: #cdd6f4 !important;
}
:root.dark-bg .zci--airlines .text--title svg path {
    fill: #cdd6f4;
}
:root.dark-bg .star {
    color: #9399b2;
}
:root.dark-bg .set-tab,
:root.dark-bg .set-tab:visited,
:root.dark-bg .tile-nav.can-scroll {
    background-color: #181825;
    color: #7f849c;
}
:root.dark-bg .js-cloudsave-save-btn,
:root.dark-bg .js-cloudsave-load-btn {
    background-color: #585b70;
    border-color: #6c7086;
    color: #cdd6f4;
}
:root.dark-bg .video-source,
:root.dark-bg .tile__count,
:root.dark-bg .result__url,
:root.dark-bg .tile__time,
:root.dark-bg .feedback-prompt,
:root.dark-bg .footer__text,
:root.dark-bg .vertical--news .result__url,
:root.dark-bg .result__timestamp,
:root.dark-bg .js-metabar-secondary,
:root.dark-bg .sidebar-filters,
:root.dark-bg .tile--pr__original-price,
:root.dark-bg .nav-menu__item a,
:root.dark-bg .nav-menu__close,
:root.dark-bg .frm__desc,
:root.dark-bg .dropdown__button,
:root.dark-bg .tx-clr--slate-light,
:root.dark-bg .flight-details__labels,
:root.dark-bg .scheduled-time,
:root.dark-bg .source-link,
:root.dark-bg .tile__source,
:root.dark-bg .zci__more-at,
:root.dark-bg .cloudsave__close,
:root.dark-bg .module--definitions__attribution-text,
:root.dark-bg .module__attribution,
:root.dark-bg .module__attribution-link {
    color: #a6adc8 !important;
}
:root.dark-bg .dropdown--region.has-inactive-region .dropdown__button::after,
:root.dark-bg .modal--dropdown--region.modal--popout .modal__header::before,
:root.dark-bg .js-carousel-module-title,
:root.dark-bg .tile--pr__brand,
:root.dark-bg .frm__select,
:root.dark-bg .star::after,
:root.dark-bg .feedback-btn__icon,
:root.dark-bg .detail--xd .tile-nav--sm,
:root.dark-bg .detail__close,
:root.dark-bg .module--definitions__collapsed-group ol li::before {
    color: #89b4fa !important;
}
:root.dark-bg .search__button:hover,
:root.dark-bg .search--header.has-text.search--hover .search__button {
    background-color: #89b4fa !important;
    color: #1e1e2e !important;
}
:root.dark-bg .settings-page-wrapper.is-checked {
    border-color: #89b4fa;
    background-color: #74c7ec !important;
    color: #181825 !important;
}
:root.dark-bg .modal--dropdown--settings .settings-dropdown--section .settings-dropdown--header .settings-dropdown--header--link,
:root.dark-bg .modal--dropdown--settings .settings-dropdown--section .settings-dropdown--header .settings-dropdown--header--label {
    color: #cdd6f4 !important;
}
:root.dark-bg .ddgsi-check::before {
    color: #181825 !important;
}
:root.dark-bg .set-bookmarklet__title,
:root.dark-bg .set-reset__title {
    color: #cdd6f4 !important;
}
:root.dark-bg .frm__select::after {
    color: #89b4fa !important;
}
:root.dark-bg .switch,
:root.dark-bg .frm__switch__label {
    background-color: #11111b !important;
}
:root.dark-bg .frm__switch__label::after {
    background: #9399b2 !important;
}
:root.dark-bg .is-checked .frm__switch__label::after {
    background: #1e1e2e !important;
}
:root.dark-bg .switch__knob {
    background: #9399b2 !important;
}
:root.dark-bg .is-on .switch__knob {
    background: #1e1e2e !important;
}
:root.dark-bg .switch.is-on {
    background-color: #89b4fa !important;
}
:root.dark-bg .dropdown__switch.is-on::before {
    color: #1e1e2e !important;
}
:root.dark-bg .search--header {
    background-color: #313244;
    border-color: #313244;
}
:root.dark-bg .acp--highlight,
:root.dark-bg .bg-clr--platinum-light {
    background-color: #6c7086;
}
:root.dark-bg .review__rating-stars,
:root.dark-bg .place-list-item__rating__image {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20height%3D%2212%22%20viewBox%3D%220%200%2064%2012%22%20width%3D%2264%22%3E%3Cpath%20d%3D%22M12%206A6%206%200%201%201%200%206a6%206%200%200%201%2012%200m13%200a6%206%200%201%201-12%200%206%206%200%200%201%2012%200m7%206a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m13%200a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m4.5-6a4.5%204.5%200%200%201-4.5%204.5v-9A4.5%204.5%200%200%201%2049.5%206m8.5%206a6%206%200%201%200%200-12%206%206%200%200%200%200%2012m0-1.5a4.5%204.5%200%201%200%200-9%204.5%204.5%200%200%200%200%209%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23a6e3a1%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E");
}
:root.dark-bg .header__logo,
:root.dark-bg .js-logo-ddg {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cg%20clip-path%3D%22url%28%23logo_header_v109_svg__a%29%22%3E%3Cpath%20fill%3D%22%23fab387%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20120.373c33.24%200%2060.187-26.947%2060.187-60.187S93.426%200%2060.186%200%200%2026.946%200%2060.186s26.946%2060.187%2060.186%2060.187%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23DDD%22%20fill-rule%3D%22evenodd%22%20d%3D%22M68.65%20105.091c0-.47.115-.578-1.38-3.557-3.972-7.954-7.964-19.17-6.148-26.402.33-1.314-3.742-48.66-6.62-50.185-3.2-1.705-7.138-4.41-10.739-5.012-1.827-.292-4.223-.154-6.096.098-.332.045-.346.643-.028.751%201.23.417%202.722%201.14%203.602%202.233.167.207-.057.533-.322.543-.83.03-2.334.378-4.32%202.064-.229.195-.038.557.257.499%204.267-.844%208.623-.428%2011.191%201.906.167.151.08.423-.137.482-22.283%206.055-17.872%2025.438-11.94%2049.224%205.284%2021.188%207.272%2028.017%207.899%2030.097a.67.67%200%200%200%20.398.439c7.67%203.055%2024.383%203.19%2024.383-2.005z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M71.706%20109.558c-2.703%201.058-7.993%201.528-11.05%201.528-4.48%200-10.932-.705-13.283-1.763-1.452-4.469-5.797-18.32-10.088-35.91l-.42-1.718-.004-.014c-5.101-20.836-9.267-37.854%2013.568-43.2.208-.05.31-.3.172-.463-2.62-3.108-7.528-4.127-13.734-1.986-.255.088-.476-.169-.318-.387%201.217-1.677%203.596-2.967%204.77-3.532.242-.117.228-.473-.03-.553a26%2026%200%200%200-3.546-.846c-.348-.056-.38-.652-.03-.7%208.798-1.183%2017.986%201.459%2022.596%207.266a.3.3%200%200%200%20.175.108c16.883%203.625%2018.092%2030.314%2016.147%2031.53-.384.239-1.612.102-3.233-.08-6.57-.735-19.578-2.19-8.842%2017.818.106.198-.034.46-.256.494-6.054.941%201.704%2019.912%207.406%2032.408%22/%3E%3Cpath%20fill%3D%22%233CA82B%22%20d%3D%22M79.258%2085.293c-1.285-.595-6.227%202.949-9.507%205.67-.686-.97-1.978-1.675-4.894-1.168-2.551.443-3.96%201.058-4.589%202.12-4.027-1.528-10.803-3.884-12.44-1.608-1.79%202.487.447%2014.257%202.824%2015.785%201.24.798%207.175-3.017%2010.275-5.648.5.705%201.305%201.108%202.96%201.069%202.503-.058%206.563-.64%207.193-1.806a1.3%201.3%200%200%200%20.099-.25c3.186%201.191%208.792%202.451%2010.045%202.263%203.264-.49-.455-15.726-1.966-16.427%22/%3E%3Cpath%20fill%3D%22%23a6e3a1%22%20d%3D%22M70.051%2091.31c.135.242.244.496.337.754.454%201.27%201.194%205.31.634%206.309-.56.998-4.194%201.48-6.436%201.519s-2.746-.782-3.2-2.052c-.364-1.016-.542-3.405-.538-4.773-.092-2.028.65-2.742%204.076-3.296%202.535-.41%203.876.067%204.65.883%203.6-2.686%209.606-6.478%2010.192-5.785%202.92%203.455%203.29%2011.68%202.657%2014.99-.207%201.082-9.879-1.072-9.879-2.239%200-4.844-1.257-6.174-2.493-6.31m-21.187-1.512c.792-1.254%207.216.305%2010.743%201.874%200%200-.725%203.284.429%207.151.337%201.132-8.113%206.167-9.216%205.301-1.275-1.001-3.621-11.691-1.956-14.326%22/%3E%3Cpath%20fill%3D%22%23f9e2af%22%20fill-rule%3D%22evenodd%22%20d%3D%22M51.975%2064.33c.52-2.26%202.941-6.519%2011.587-6.415%204.371-.018%209.801-.002%2013.4-.411a48.2%2048.2%200%200%200%2011.969-2.91c3.742-1.428%205.07-1.11%205.536-.256.512.939-.091%202.56-1.399%204.052-2.498%202.85-6.989%205.06-14.92%205.715-7.93.655-13.185-1.472-15.446%201.991-.976%201.494-.222%205.015%207.448%206.124%2010.364%201.496%2018.876-1.803%2019.928.19%201.052%201.991-5.007%206.044-15.388%206.129s-16.865-3.635-19.164-5.484c-2.918-2.346-4.223-5.766-3.55-8.725Z%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%2389b4fa%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M65.196%2039.617c.579-.948%201.863-1.68%203.964-1.68s3.09.836%203.774%201.768c.14.19-.071.413-.287.32l-.158-.069c-.769-.336-1.712-.748-3.329-.77-1.729-.025-2.819.408-3.505.781-.232.126-.596-.125-.46-.35ZM41.539%2040.83c2.04-.853%203.644-.743%204.777-.474.24.056.405-.2.214-.355-.88-.71-2.85-1.59-5.418-.633-2.29.854-3.37%202.63-3.377%203.796-.002.276.564.299.71.066.396-.63%201.053-1.547%203.094-2.4%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M70.945%2052.588a3.263%203.263%200%200%201-3.267-3.255%203.263%203.263%200%200%201%203.267-3.255%203.26%203.26%200%200%201%203.267%203.255%203.26%203.26%200%200%201-3.267%203.255m2.301-4.334a.845.845%200%200%200-1.692%200%20.845.845%200%200%200%201.692%200M49.3%2051.585a3.8%203.8%200%200%201-3.809%203.796c-2.1%200-3.808-1.7-3.808-3.796a3.804%203.804%200%200%201%203.808-3.796c2.1%200%203.809%201.7%203.809%203.796m-1.123-1.258a.987.987%200%200%200-1.972%200c0%20.54.44.982.986.982a.985.985%200%200%200%20.986-.982%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20110.733c27.917%200%2050.548-22.63%2050.548-50.547S88.103%209.639%2060.186%209.639C32.27%209.64%209.64%2032.27%209.64%2060.186c0%2027.917%2022.631%2050.547%2050.547%2050.547Zm0%204.702c30.514%200%2055.25-24.735%2055.25-55.249%200-30.513-24.736-55.249-55.25-55.249S4.937%2029.673%204.937%2060.187s24.736%2055.248%2055.25%2055.248Z%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3C/svg%3E") !important;
}
:root.dark-bg .yhccgqM_FdvJ79N6Jm6c {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cg%20clip-path%3D%22url%28%23logo_header_v109_svg__a%29%22%3E%3Cpath%20fill%3D%22%23fab387%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20120.373c33.24%200%2060.187-26.947%2060.187-60.187S93.426%200%2060.186%200%200%2026.946%200%2060.186s26.946%2060.187%2060.186%2060.187%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23DDD%22%20fill-rule%3D%22evenodd%22%20d%3D%22M68.65%20105.091c0-.47.115-.578-1.38-3.557-3.972-7.954-7.964-19.17-6.148-26.402.33-1.314-3.742-48.66-6.62-50.185-3.2-1.705-7.138-4.41-10.739-5.012-1.827-.292-4.223-.154-6.096.098-.332.045-.346.643-.028.751%201.23.417%202.722%201.14%203.602%202.233.167.207-.057.533-.322.543-.83.03-2.334.378-4.32%202.064-.229.195-.038.557.257.499%204.267-.844%208.623-.428%2011.191%201.906.167.151.08.423-.137.482-22.283%206.055-17.872%2025.438-11.94%2049.224%205.284%2021.188%207.272%2028.017%207.899%2030.097a.67.67%200%200%200%20.398.439c7.67%203.055%2024.383%203.19%2024.383-2.005z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M71.706%20109.558c-2.703%201.058-7.993%201.528-11.05%201.528-4.48%200-10.932-.705-13.283-1.763-1.452-4.469-5.797-18.32-10.088-35.91l-.42-1.718-.004-.014c-5.101-20.836-9.267-37.854%2013.568-43.2.208-.05.31-.3.172-.463-2.62-3.108-7.528-4.127-13.734-1.986-.255.088-.476-.169-.318-.387%201.217-1.677%203.596-2.967%204.77-3.532.242-.117.228-.473-.03-.553a26%2026%200%200%200-3.546-.846c-.348-.056-.38-.652-.03-.7%208.798-1.183%2017.986%201.459%2022.596%207.266a.3.3%200%200%200%20.175.108c16.883%203.625%2018.092%2030.314%2016.147%2031.53-.384.239-1.612.102-3.233-.08-6.57-.735-19.578-2.19-8.842%2017.818.106.198-.034.46-.256.494-6.054.941%201.704%2019.912%207.406%2032.408%22/%3E%3Cpath%20fill%3D%22%233CA82B%22%20d%3D%22M79.258%2085.293c-1.285-.595-6.227%202.949-9.507%205.67-.686-.97-1.978-1.675-4.894-1.168-2.551.443-3.96%201.058-4.589%202.12-4.027-1.528-10.803-3.884-12.44-1.608-1.79%202.487.447%2014.257%202.824%2015.785%201.24.798%207.175-3.017%2010.275-5.648.5.705%201.305%201.108%202.96%201.069%202.503-.058%206.563-.64%207.193-1.806a1.3%201.3%200%200%200%20.099-.25c3.186%201.191%208.792%202.451%2010.045%202.263%203.264-.49-.455-15.726-1.966-16.427%22/%3E%3Cpath%20fill%3D%22%23a6e3a1%22%20d%3D%22M70.051%2091.31c.135.242.244.496.337.754.454%201.27%201.194%205.31.634%206.309-.56.998-4.194%201.48-6.436%201.519s-2.746-.782-3.2-2.052c-.364-1.016-.542-3.405-.538-4.773-.092-2.028.65-2.742%204.076-3.296%202.535-.41%203.876.067%204.65.883%203.6-2.686%209.606-6.478%2010.192-5.785%202.92%203.455%203.29%2011.68%202.657%2014.99-.207%201.082-9.879-1.072-9.879-2.239%200-4.844-1.257-6.174-2.493-6.31m-21.187-1.512c.792-1.254%207.216.305%2010.743%201.874%200%200-.725%203.284.429%207.151.337%201.132-8.113%206.167-9.216%205.301-1.275-1.001-3.621-11.691-1.956-14.326%22/%3E%3Cpath%20fill%3D%22%23f9e2af%22%20fill-rule%3D%22evenodd%22%20d%3D%22M51.975%2064.33c.52-2.26%202.941-6.519%2011.587-6.415%204.371-.018%209.801-.002%2013.4-.411a48.2%2048.2%200%200%200%2011.969-2.91c3.742-1.428%205.07-1.11%205.536-.256.512.939-.091%202.56-1.399%204.052-2.498%202.85-6.989%205.06-14.92%205.715-7.93.655-13.185-1.472-15.446%201.991-.976%201.494-.222%205.015%207.448%206.124%2010.364%201.496%2018.876-1.803%2019.928.19%201.052%201.991-5.007%206.044-15.388%206.129s-16.865-3.635-19.164-5.484c-2.918-2.346-4.223-5.766-3.55-8.725Z%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%2389b4fa%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M65.196%2039.617c.579-.948%201.863-1.68%203.964-1.68s3.09.836%203.774%201.768c.14.19-.071.413-.287.32l-.158-.069c-.769-.336-1.712-.748-3.329-.77-1.729-.025-2.819.408-3.505.781-.232.126-.596-.125-.46-.35ZM41.539%2040.83c2.04-.853%203.644-.743%204.777-.474.24.056.405-.2.214-.355-.88-.71-2.85-1.59-5.418-.633-2.29.854-3.37%202.63-3.377%203.796-.002.276.564.299.71.066.396-.63%201.053-1.547%203.094-2.4%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M70.945%2052.588a3.263%203.263%200%200%201-3.267-3.255%203.263%203.263%200%200%201%203.267-3.255%203.26%203.26%200%200%201%203.267%203.255%203.26%203.26%200%200%201-3.267%203.255m2.301-4.334a.845.845%200%200%200-1.692%200%20.845.845%200%200%200%201.692%200M49.3%2051.585a3.8%203.8%200%200%201-3.809%203.796c-2.1%200-3.808-1.7-3.808-3.796a3.804%203.804%200%200%201%203.808-3.796c2.1%200%203.809%201.7%203.809%203.796m-1.123-1.258a.987.987%200%200%200-1.972%200c0%20.54.44.982.986.982a.985.985%200%200%200%20.986-.982%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M60.186%20110.733c27.917%200%2050.548-22.63%2050.548-50.547S88.103%209.639%2060.186%209.639C32.27%209.64%209.64%2032.27%209.64%2060.186c0%2027.917%2022.631%2050.547%2050.547%2050.547Zm0%204.702c30.514%200%2055.25-24.735%2055.25-55.249%200-30.513-24.736-55.249-55.25-55.249S4.937%2029.673%204.937%2060.187s24.736%2055.248%2055.25%2055.248Z%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3C/svg%3E");
}
:root.dark-bg .logo_homepage {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22206%22%20height%3D%22165%22%20viewBox%3D%220%200%20206%20165%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M103%20120c33.137%200%2060-26.863%2060-60S136.137%200%20103%200%2043%2026.863%2043%2060s26.863%2060%2060%2060%22%20fill%3D%22%23f38ba8%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M111.438%20104.766c0-.469.115-.576-1.375-3.546-3.96-7.93-7.94-19.11-6.13-26.32.33-1.31-3.73-48.51-6.6-50.03-3.19-1.7-7.115-4.397-10.705-4.997-1.822-.291-4.21-.153-6.077.098-.332.045-.346.641-.029.749%201.226.415%202.715%201.136%203.592%202.226.166.206-.057.531-.322.54-.827.031-2.326.378-4.305%202.059-.23.194-.04.555.255.497%204.253-.841%208.597-.427%2011.156%201.9.167.15.08.422-.137.48-22.213%206.037-17.816%2025.36-11.902%2049.073%205.248%2021.047%207.235%2027.881%207.867%2029.981a.72.72%200%200%200%20.424.468c7.656%203.037%2024.288%203.168%2024.288-2.006z%22%20fill%3D%22%23313244%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.078%2060c0%2030.419-24.659%2055.078-55.078%2055.078S47.922%2090.418%2047.922%2060%2072.582%204.922%20103%204.922%20158.078%2029.582%20158.078%2060m-67.932%2048.736c-1.522-4.701-5.775-18.329-9.977-35.55l-.419-1.713-.003-.014c-5.085-20.772-9.239-37.737%2013.525-43.067.209-.049.31-.297.172-.46-2.611-3.1-7.504-4.115-13.691-1.98-.254.087-.474-.169-.317-.386%201.213-1.672%203.584-2.958%204.755-3.522.242-.116.227-.47-.03-.55a26%2026%200%200%200-3.535-.844c-.347-.056-.378-.65-.03-.697%208.771-1.18%2017.93%201.453%2022.527%207.243a.3.3%200%200%200%20.174.107c16.83%203.614%2018.035%2030.22%2016.097%2031.432-.383.239-1.608.102-3.224-.079-6.548-.733-19.516-2.184-8.814%2017.763.106.197-.034.458-.255.492-6.015.936%201.646%2019.72%207.324%2032.179%2022.327-5.176%2038.966-25.19%2038.966-49.09%200-27.83-22.561-50.39-50.391-50.39S52.61%2032.17%2052.61%2060c0%2023.388%2015.932%2043.054%2037.536%2048.736%22%20fill%3D%22%23cdd6f4%22/%3E%3Cpath%20d%3D%22M122.013%2085.03c-1.282-.594-6.208%202.939-9.478%205.65-.684-.966-1.972-1.669-4.879-1.163-2.543.442-3.948%201.055-4.574%202.113-4.016-1.523-10.77-3.872-12.402-1.603-1.784%202.48.445%2014.213%202.815%2015.736%201.237.796%207.153-3.007%2010.243-5.63.499.702%201.301%201.104%202.951%201.066%202.495-.058%206.542-.638%207.17-1.8a1.2%201.2%200%200%200%20.099-.25c3.176%201.187%208.765%202.444%2010.014%202.256%203.254-.489-.453-15.678-1.959-16.376%22%20fill%3D%22%23a6e3a1%22/%3E%3Cpath%20d%3D%22M112.835%2091.028c.135.24.243.494.335.751.453%201.266%201.19%205.294.633%206.29-.558.994-4.181%201.475-6.416%201.513-2.235.039-2.738-.778-3.191-2.045-.362-1.013-.54-3.394-.536-4.758-.092-2.022.647-2.733%204.063-3.286%202.528-.41%203.864.067%204.636.88%203.588-2.678%209.576-6.457%2010.16-5.767%202.912%203.445%203.28%2011.645%202.649%2014.944-.206%201.078-9.848-1.069-9.848-2.232%200-4.83-1.253-6.154-2.485-6.29M91.713%2089.52c.79-1.25%207.194.304%2010.709%201.869%200%200-.722%203.273.428%207.128.337%201.128-8.088%206.148-9.187%205.285-1.271-.999-3.61-11.655-1.95-14.282%22%20fill%3D%22%234CBA3C%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M94.815%2064.131c.518-2.253%202.931-6.499%2011.551-6.396%204.357-.018%209.77-.002%2013.358-.41a48%2048%200%200%200%2011.931-2.9c3.731-1.424%205.055-1.107%205.52-.255.51.936-.091%202.552-1.395%204.04-2.49%202.84-6.967%205.043-14.873%205.696-7.907.654-13.145-1.467-15.4%201.986-.972%201.489-.22%204.999%207.426%206.104%2010.332%201.491%2018.818-1.797%2019.866.19%201.048%201.985-4.991%206.025-15.34%206.11s-16.813-3.624-19.105-5.467c-2.909-2.338-4.21-5.749-3.54-8.698%22%20fill%3D%22%23bac2de%22/%3E%3Cg%20opacity%3D%220.8%22%3E%3Cpath%20d%3D%22M107.994%2039.494c.577-.945%201.857-1.675%203.952-1.675s3.081.834%203.763%201.763c.139.19-.072.412-.287.319l-.157-.069c-.767-.334-1.707-.745-3.319-.768-1.723-.025-2.81.407-3.495.78-.23.125-.594-.126-.457-.35M84.41%2040.703c2.034-.85%203.633-.74%204.763-.472.238.056.403-.2.213-.354-.877-.707-2.84-1.586-5.4-.63-2.285.85-3.362%202.62-3.368%203.784-.001.274.563.297.709.065.394-.627%201.05-1.543%203.083-2.393%22%20fill%3D%22%23181825%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M113.726%2052.425a3.25%203.25%200%200%201-3.257-3.245%203.25%203.25%200%200%201%203.257-3.245%203.25%203.25%200%200%201%203.256%203.245%203.25%203.25%200%200%201-3.256%203.245m2.293-4.32a.842.842%200%200%200-1.686%200%20.843.843%200%200%200%201.686%200m-23.872%203.321a3.79%203.79%200%200%201-3.796%203.784%203.79%203.79%200%200%201-3.797-3.784%203.79%203.79%200%200%201%203.797-3.785%203.79%203.79%200%200%201%203.796%203.785m-1.119-1.255a.984.984%200%200%200-1.966%200%20.982.982%200%200%200%201.966-.001%22%20fill%3D%22%2389b4fa%22/%3E%3C/g%3E%3Cpath%20d%3D%22M78.35%20144.8h-3.9l-7.1%207.3v-14.6h-3v24.9h3v-8.2l8.1%208.1.1.1h3.6v-.3l-9.1-9z%22%20fill%3D%22%2345475a%22/%3E%3Cpath%20d%3D%22M59.15%20158.1c-1.1%201.1-2.7%201.7-4.5%201.7-3.1%200-6.2-1.9-6.2-6.3%200-3.7%202.6-6.3%206.2-6.3%201.6%200%203.1.6%204.3%201.7l.1.1%201.9-2-.1-.1c-1.8-1.7-3.9-2.5-6.3-2.5-5.5%200-9.2%203.7-9.2%209.1%200%206.3%204.6%209.1%209.2%209.1h.1c2.4%200%204.7-.9%206.3-2.6l.1-.1-2-2zm-20.3-3.9c0%203.2-2.2%205.6-5.3%205.7-3.3%200-5.3-2-5.3-5.4v-9.7h-3v9.7c0%205%203%208.2%207.7%208.2h.1c2.3%200%204.4-1.1%205.8-2.8l.1-.2.1%202.7h2.8v-17.6h-3z%22%20fill%3D%22%23333333%22/%3E%3Cpath%20d%3D%22M9.35%20137.4H.25v25h9.1c8.7%200%2012.5-6.4%2012.5-12.7%200-5.9-3.9-12.3-12.5-12.3m9.4%2012.2c0%204.8-2.9%209.6-9.3%209.6h-6v-18.7h5.9c6.4%200%209.4%204.7%209.4%209.1%22%20fill%3D%22%2345475a%22/%3E%3Cpath%20d%3D%22M173.65%20151.5h7.7v5.8c-1.9%201.6-4.2%202.5-6.7%202.5-6.8%200-9.9-4.9-9.9-9.7%200-4.9%203.1-10.2%209.8-10.2%202.7%200%205.2%201%207.2%202.8l.1.1%201.8-2.1-.1-.1c-2.4-2.4-5.6-3.6-9.1-3.6-3.8%200-7%201.2-9.3%203.6-2.4%202.4-3.7%205.8-3.6%209.6%200%205.9%203.4%2012.7%2013%2012.7h.2c3.6%200%207-1.5%209.4-4.2v-9.9h-10.6v2.7z%22%20fill%3D%22%23313244%22/%3E%3Cpath%20d%3D%22M91.05%20137.4h-9.1v25h9.1c8.7%200%2012.5-6.4%2012.5-12.7%200-5.9-3.9-12.3-12.5-12.3m9.4%2012.2c0%204.8-2.9%209.6-9.3%209.6h-5.9v-18.7h5.9c6.3%200%209.3%204.7%209.3%209.1m95.9-5.2c-5.3%200-9.1%203.9-9.1%209.2s3.8%209.1%209.1%209.1%209.2-3.8%209.2-9.1c0-5.4-3.8-9.2-9.2-9.2m6.2%209.2c0%203.7-2.6%206.3-6.2%206.3-3.5%200-6.1-2.6-6.1-6.3%200-3.8%202.5-6.5%206.2-6.5%203.5.1%206.1%202.8%206.1%206.5m-82%20.6c0%203.2-2.2%205.6-5.3%205.7-3.3%200-5.3-2-5.3-5.4v-9.7h-3v9.7c0%205%203%208.2%207.6%208.2h.1c2.3%200%204.4-1.1%205.8-2.8l.1-.2.1%202.7h2.8v-17.6h-3v9.4z%22%20fill%3D%22%2345475a%22/%3E%3Cpath%20d%3D%22M140.85%20158.1c-1.1%201.1-2.7%201.7-4.5%201.7-3.1%200-6.2-1.9-6.2-6.3%200-3.7%202.6-6.3%206.2-6.3%201.6%200%203.1.6%204.3%201.7l.1.1%201.9-2-.1-.1c-1.8-1.7-3.9-2.5-6.3-2.5-5.5%200-9.2%203.7-9.2%209.1%200%206.3%204.6%209.1%209.2%209.1h.1c2.4%200%204.7-.9%206.3-2.6l.1-.1-2-2z%22%20fill%3D%22%23cdd6f4%22/%3E%3Cpath%20d%3D%22M160.05%20144.8h-3.9l-7.1%207.3v-14.6h-3v24.9h3v-8.2l8.1%208.1.1.1h3.6v-.3l-9.1-9z%22%20fill%3D%22%23333333%22/%3E%3C/svg%3E") !important;
}
:root.dark-bg .related-searches__item-text::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2219%22%20height%3D%2221%22%20viewBox%3D%220%200%2019%2021%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.343%2014.642a8%208%200%201%201%2011.99-.767l3.164%203.165a1.738%201.738%200%200%201-2.457%202.457l-3.39-3.39a8.005%208.005%200%200%201-9.307-1.465m1.414-9.885a6%206%200%201%200%208.486%208.486%206%206%200%200%200-8.486-8.486%22%20fill%3D%22%23cdd6f4%22%20opacity%3D%220.6%22/%3E%3C/svg%3E") !important;
}
:root.dark-bg .header_logoImg__PFezv {
    content: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20viewBox%3D%220%200%20189%2053%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M110.045%2024.224h-2.405l-4.378%204.502v-9.003h-1.85v15.354h1.85v-5.056l4.995%204.994.061.062h2.22v-.185l-5.611-5.55zm-11.898%208.223c-.679.678-1.666%201.048-2.775%201.048-1.912%200-3.824-1.172-3.824-3.885%200-2.281%201.604-3.885%203.824-3.885.986%200%201.911.37%202.651%201.049l.062.061%201.171-1.233-.061-.062C98.085%2024.492%2096.79%2024%2095.31%2024c-3.392%200-5.673%202.281-5.673%205.611%200%203.885%202.836%205.612%205.673%205.612h.062c1.48%200%202.898-.555%203.884-1.604l.062-.061-1.233-1.234zm-12.581-2.404c0%201.973-1.356%203.453-3.268%203.515-2.035%200-3.268-1.233-3.268-3.33v-5.981h-1.85v5.981c0%203.083%201.85%205.057%204.748%205.057h.062c1.418%200%202.713-.679%203.576-1.727l.062-.123.062%201.665h1.726V24.247h-1.85zM67.298%2019.66h-5.612v15.417h5.612c5.365%200%207.708-3.947%207.708-7.832%200-3.638-2.405-7.585-7.708-7.585m5.796%207.524c0%202.96-1.788%205.92-5.735%205.92h-3.7V21.571h3.639c3.946%200%205.796%202.898%205.796%205.612zm96.018%201.17h4.748v3.577c-1.171.986-2.59%201.541-4.131%201.541-4.193%200-6.105-3.021-6.105-5.981%200-3.022%201.912-6.29%206.043-6.29%201.665%200%203.207.617%204.44%201.727l.062.061%201.11-1.295-.062-.061c-1.48-1.48-3.453-2.22-5.611-2.22-2.344%200-4.317.74-5.735%202.22-1.48%201.48-2.282%203.576-2.22%205.92%200%203.638%202.096%207.831%208.016%207.831h.124a7.72%207.72%200%200%200%205.796-2.59V26.69h-6.536v1.665zm-51.181-8.694h-5.612v15.417h5.612c5.365%200%207.708-3.947%207.708-7.832%200-3.638-2.405-7.584-7.708-7.584zm5.796%207.524c0%202.96-1.788%205.92-5.735%205.92h-3.638V21.572h3.638c3.885%200%205.735%202.898%205.735%205.612m59.463-3.185c-3.269%200-5.612%202.405-5.612%205.673s2.343%205.611%205.612%205.611c3.268%200%205.673-2.343%205.673-5.611%200-3.33-2.343-5.673-5.673-5.673m3.823%205.673c0%202.282-1.603%203.885-3.823%203.885-2.159%200-3.762-1.603-3.762-3.885%200-2.343%201.542-4.008%203.823-4.008%202.159.061%203.762%201.726%203.762%204.008m-50.814.371c0%201.973-1.356%203.453-3.268%203.515-2.035%200-3.268-1.233-3.268-3.33v-5.981h-1.85v5.981c0%203.083%201.85%205.057%204.686%205.057h.062c1.418%200%202.713-.679%203.576-1.727l.062-.123.062%201.665h1.726V24.247h-1.85v5.796zm12.58%202.404c-.678.678-1.665%201.048-2.775%201.048-1.911%200-3.823-1.172-3.823-3.885%200-2.281%201.603-3.885%203.823-3.885.987%200%201.912.37%202.652%201.049l.062.061%201.171-1.233-.061-.062c-1.11-1.048-2.405-1.541-3.885-1.541-3.392%200-5.673%202.281-5.673%205.611%200%203.885%202.836%205.612%205.673%205.612h.061c1.48%200%202.899-.555%203.885-1.604l.062-.061-1.233-1.234zm11.899-8.223h-2.405l-4.378%204.502v-9.003h-1.85v15.354h1.85v-5.056l4.994%204.994.062.062h2.22v-.185l-5.611-5.55z%22/%3E%3Cpath%20fill%3D%22%23f38ba8%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.5%2053C41.136%2053%2053%2041.136%2053%2026.5S41.136%200%2026.5%200%200%2011.864%200%2026.5%2011.864%2053%2026.5%2053%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%239399b2%22%20fill-rule%3D%22evenodd%22%20d%3D%22M30.227%2046.272c0-.207.05-.255-.608-1.566-1.749-3.503-3.507-8.44-2.707-11.625.146-.579-1.648-21.425-2.915-22.097-1.41-.75-3.143-1.942-4.728-2.207-.805-.128-1.86-.067-2.684.044-.147.02-.153.283-.013.33.542.184%201.2.502%201.587.984.073.09-.026.234-.142.239-.366.013-1.028.166-1.902.908-.101.086-.017.246.113.22%201.878-.372%203.797-.189%204.927.84.073.066.035.185-.06.211-9.811%202.667-7.87%2011.2-5.257%2021.674%202.213%208.875%203.113%2012.028%203.433%2013.103a.6.6%200%200%200%20.366.398c3.438%201.29%2010.59%201.316%2010.59-.939z%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M31.572%2048.238c-1.19.466-3.52.673-4.865.673-1.973%200-4.814-.31-5.849-.776-.639-1.968-2.552-8.066-4.442-15.811l-.185-.757-.001-.006c-2.246-9.174-4.08-16.667%205.974-19.021.091-.022.136-.131.076-.204-1.154-1.368-3.315-1.817-6.048-.874-.112.039-.209-.074-.14-.17.536-.739%201.584-1.307%202.1-1.556.107-.051.101-.208-.012-.243a11.5%2011.5%200%200%200-1.562-.372c-.153-.025-.167-.288-.013-.309%203.874-.52%207.92.642%209.95%203.2q.029.036.076.047c7.434%201.596%207.966%2013.347%207.11%2013.882-.17.106-.71.045-1.424-.035-2.893-.323-8.62-.964-3.893%207.846.047.087-.015.202-.113.217-2.665.415.75%208.767%203.261%2014.27z%22/%3E%3Cpath%20fill%3D%22%233ca82b%22%20d%3D%22M34.897%2037.555c-.566-.263-2.742%201.298-4.186%202.496-.302-.427-.87-.738-2.154-.515-1.124.196-1.744.467-2.021.934-1.773-.672-4.757-1.71-5.478-.708-.787%201.095.197%206.277%201.244%206.95.546.351%203.16-1.328%204.524-2.487.22.31.575.488%201.303.471%201.102-.025%202.89-.282%203.167-.795a.6.6%200%200%200%20.044-.11c1.403.524%203.871%201.08%204.423.996%201.437-.216-.2-6.924-.866-7.232%22/%3E%3Cpath%20fill%3D%22%23a6e3a1%22%20d%3D%22M30.844%2040.204q.088.16.148.332c.2.56.525%202.338.28%202.778-.247.439-1.847.651-2.835.668s-1.209-.344-1.409-.903c-.16-.447-.238-1.5-.237-2.101-.04-.894.286-1.208%201.795-1.452%201.116-.18%201.707.03%202.047.39%201.585-1.184%204.23-2.853%204.488-2.548%201.286%201.521%201.448%205.143%201.17%206.6-.091.476-4.35-.472-4.35-.986%200-2.133-.553-2.718-1.097-2.778m-9.329-.666c.349-.552%203.177.135%204.73.825%200%200-.32%201.446.189%203.149.148.498-3.572%202.715-4.058%202.334-.561-.441-1.594-5.148-.861-6.308%22/%3E%3Cpath%20fill%3D%22%23f9e2af%22%20fill-rule%3D%22evenodd%22%20d%3D%22M22.885%2028.325c.228-.995%201.295-2.87%205.101-2.825%201.925-.008%204.315-.001%205.9-.181a21.2%2021.2%200%200%200%205.27-1.282c1.648-.628%202.233-.488%202.438-.112.225.413-.04%201.127-.616%201.784-1.1%201.255-3.077%202.228-6.57%202.516s-5.805-.648-6.8.877c-.43.658-.098%202.208%203.279%202.696%204.563.659%208.311-.793%208.774.084s-2.204%202.661-6.775%202.698c-4.57.038-7.426-1.6-8.438-2.414-1.285-1.033-1.86-2.539-1.563-3.841%22%20clip-rule%3D%22evenodd%22/%3E%3Cg%20fill%3D%22%2311111b%22%20opacity%3D%22.8%22%3E%3Cpath%20d%3D%22M28.706%2017.443c.255-.417.82-.74%201.745-.74s1.36.369%201.662.78c.061.083-.032.181-.127.14l-.07-.03c-.338-.148-.753-.33-1.465-.34-.761-.01-1.241.18-1.544.344-.101.056-.262-.055-.201-.154m-10.416.534c.898-.375%201.604-.327%202.103-.208.105.024.178-.089.094-.156-.387-.313-1.254-.7-2.385-.28-1.01.377-1.485%201.159-1.487%201.672-.001.122.248.132.312.03.174-.278.464-.682%201.362-1.058z%22/%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M31.237%2023.154c-.794%200-1.438-.642-1.438-1.433s.644-1.433%201.438-1.433%201.438.642%201.438%201.433-.644%201.433-1.438%201.433m1.013-1.908a.372.372%200%200%200-.745%200%20.372.372%200%200%200%20.745%200m-10.544%201.467c0%20.923-.75%201.671-1.676%201.671a1.675%201.675%200%200%201-1.677-1.67c0-.924.752-1.672%201.677-1.672.924%200%201.676.748%201.676%201.671m-.494-.554a.434.434%200%201%200-.867.002.434.434%200%200%200%20.867-.002%22%20clip-rule%3D%22evenodd%22/%3E%3C/g%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.5%2048.756c12.292%200%2022.256-9.964%2022.256-22.256S38.792%204.244%2026.5%204.244%204.244%2014.208%204.244%2026.5%2014.208%2048.756%2026.5%2048.756m0%202.07c13.435%200%2024.326-10.891%2024.326-24.326S39.935%202.174%2026.5%202.174%202.174%2013.065%202.174%2026.5%2013.065%2050.826%2026.5%2050.826%22%20clip-rule%3D%22evenodd%22/%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M26.497%2048.438c12.118%200%2021.941-9.823%2021.941-21.94S38.615%204.555%2026.498%204.555%204.555%2014.38%204.555%2026.497s9.824%2021.941%2021.941%2021.941zm24.292-21.94c0%2013.415-10.876%2024.29-24.292%2024.29S2.206%2039.914%202.206%2026.499%2013.08%202.205%2026.497%202.205%2050.79%2013.08%2050.79%2026.497z%22%20clip-rule%3D%22evenodd%22/%3E%3C/svg%3E");
}

/* prettier-ignore */
`)