// ==UserScript==
// @name    Userstyle (lichess.css)
// @include    *lichess.org*
// ==/UserScript==
GM_addStyle(`:root:has(body[data-theme="light"]) {
    color-scheme: dark;
    /* Button */
    /* Game selection menus */
    /* Topbar */
    /* Popup skining */
    /* Text */
    /* Links */
    /* Homepage cards */
    /* Non-main page sidebar nav colors */
    /* Blog cards */
    /* Learn tab */
    /* Chess Game */
    /* Game Cards */
    /* Messages */
    /* User dropdown */
    /* User Page */
    /* Stats */
    /* Analysis page */
    /* Openings */
    /* Puzzles */
    /* Teams */
    /* Settings */
}
:root:has(body[data-theme="light"]) ::selection {
    background-color: rgba(30, 102, 245, 0.3);
}
:root:has(body[data-theme="light"]) input::placeholder,
:root:has(body[data-theme="light"]) textarea::placeholder {
    color: #6c6f85 !important;
}
:root:has(body[data-theme="light"]) html,
:root:has(body[data-theme="light"]) body {
    background: #eff1f5 linear-gradient(to bottom, #dce0e8, #eff1f5 116px) no-repeat;
    color: #4c4f69 !important;
}
:root:has(body[data-theme="light"]) .site-title a {
    color: #1e66f5;
}
:root:has(body[data-theme="light"]) .site-title span {
    color: #4c4f69;
}
:root:has(body[data-theme="light"]) .hooks__list td {
    background-color: rgba(156, 160, 176, 0.5);
}
:root:has(body[data-theme="light"]) .hooks__list tr.join:hover td {
    background-color: rgba(30, 102, 245, 0.5);
}
:root:has(body[data-theme="light"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="light"]) #topnav section:active > a,
:root:has(body[data-theme="light"]) #topnav div,
:root:has(body[data-theme="light"]) .site-buttons .shown .toggle,
:root:has(body[data-theme="light"]) .site-buttons .dropdown {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) #topnav section > a {
    color: #6c6f85;
}
:root:has(body[data-theme="light"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="light"]) #topnav section:active > a,
:root:has(body[data-theme="light"]) #topnav div a,
:root:has(body[data-theme="light"]) #dasher_app .selector button,
:root:has(body[data-theme="light"]) #dasher_app .head,
:root:has(body[data-theme="light"]) #dasher_app .piece .no-square,
:root:has(body[data-theme="light"]) #dasher_app .theme .list button,
:root:has(body[data-theme="light"]) #dasher_app .links a,
:root:has(body[data-theme="light"]) #dasher_app .links button,
:root:has(body[data-theme="light"]) #dasher_app .subs .sub,
:root:has(body[data-theme="light"]) .site-buttons .dropdown a,
:root:has(body[data-theme="light"]) .site-buttons .dropdown button {
    color: #4c4f69;
}
:root:has(body[data-theme="light"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="light"]) #topnav section:active > a,
:root:has(body[data-theme="light"]) #topnav div {
    border-left-color: #1e66f5;
}
:root:has(body[data-theme="light"]) signal > i {
    background-color: #40a02b;
}
:root:has(body[data-theme="light"]) #dasher_app .sub::before,
:root:has(body[data-theme="light"]) .is-green::before {
    color: #40a02b;
}
:root:has(body[data-theme="light"]) #challenge-app .empty {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) dialog {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .game-setup .optional-config,
:root:has(body[data-theme="light"]) .game-setup .ratings {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .game-setup .radio input:checked + label {
    background: #40a02b;
}
:root:has(body[data-theme="light"]) .site-buttons .link,
:root:has(body[data-theme="light"]) .button,
:root:has(body[data-theme="light"]) .input,
:root:has(body[data-theme="light"]) .optgroup,
:root:has(body[data-theme="light"]) .select,
:root:has(body[data-theme="light"]) .textarea,
:root:has(body[data-theme="light"]) .lobby__box td.name a,
:root:has(body[data-theme="light"]) .lobby__box__top .title,
:root:has(body[data-theme="light"]) .lobby__box .user-link,
:root:has(body[data-theme="light"]) .mini-game,
:root:has(body[data-theme="light"]) .mini-game:hover,
:root:has(body[data-theme="light"]) .text,
:root:has(body[data-theme="light"]) .ublog-post-card__title,
:root:has(body[data-theme="light"]) .lobby__counters a,
:root:has(body[data-theme="light"]) .lobby__streams .stream,
:root:has(body[data-theme="light"]) .lobby__timeline .entry a,
:root:has(body[data-theme="light"]) .lobby__about a,
:root:has(body[data-theme="light"]) .lobby__timeline,
:root:has(body[data-theme="light"]) .lobby__counters,
:root:has(body[data-theme="light"]) .tabs-horiz,
:root:has(body[data-theme="light"]) .lobby__streams .more,
:root:has(body[data-theme="light"]) .lobby__timeline .more,
:root:has(body[data-theme="light"]) .dialog-content,
:root:has(body[data-theme="light"]) button,
:root:has(body[data-theme="light"]) input,
:root:has(body[data-theme="light"]) optgroup,
:root:has(body[data-theme="light"]) select,
:root:has(body[data-theme="light"]) textarea {
    color: #6c6f85;
}
:root:has(body[data-theme="light"]) .site-buttons .link:hover,
:root:has(body[data-theme="light"]) .button.button-metal:hover,
:root:has(body[data-theme="light"]) .radio input:checked + label {
    color: #4c4f69;
}
:root:has(body[data-theme="light"]) .site-title-nav__donate,
:root:has(body[data-theme="light"]) .lobby__streams .stream.highlight strong,
:root:has(body[data-theme="light"]) .utitle,
:root:has(body[data-theme="light"]) .lobby__support__text,
:root:has(body[data-theme="light"]) .lobby__support i::before {
    color: #fe640b;
}
:root:has(body[data-theme="light"]) .mini-game__clock.clock--run,
:root:has(body[data-theme="light"]) .tabs-horiz span.active {
    color: #d20f39;
}
:root:has(body[data-theme="light"]) .tabs-horiz span.active,
:root:has(body[data-theme="light"]) .tabs-horiz span:hover {
    border-color: #d20f39;
}
:root:has(body[data-theme="light"]) a {
    color: #1e66f5;
}
:root:has(body[data-theme="light"]) .lobby__timeline .entry:hover a,
:root:has(body[data-theme="light"]) a:hover,
:root:has(body[data-theme="light"]) a:active,
:root:has(body[data-theme="light"]) a:focus {
    color: #1e66f5;
}
:root:has(body[data-theme="light"]) .lobby__app__content,
:root:has(body[data-theme="light"]) .box {
    background-color: #e6e9ef;
}
:root:has(body[data-theme="light"]) .lpools > div {
    background: rgba(220, 224, 232, 0.2);
    border-color: #ccd0da;
}
:root:has(body[data-theme="light"]) .lpools > div:hover {
    background-color: rgba(30, 102, 245, 0.2);
}
:root:has(body[data-theme="light"]) .hook__filters {
    background-color: rgba(230, 233, 239, 0.5);
}
:root:has(body[data-theme="light"]) .lobby__support a {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .lobby__support a:hover {
    background: #fe640b;
}
:root:has(body[data-theme="light"]) .lobby__support a:hover i::before,
:root:has(body[data-theme="light"]) .lobby__support a:hover .lobby__support__text {
    color: #e6e9ef;
}
:root:has(body[data-theme="light"]) .lobby__box__top,
:root:has(body[data-theme="light"]) #hook .opponent,
:root:has(body[data-theme="light"]) .lobby__box__content,
:root:has(body[data-theme="light"]) .ublog-post-card,
:root:has(body[data-theme="light"]) .button,
:root:has(body[data-theme="light"]) .tour-spotlight {
    background: #e6e9ef !important;
}
:root:has(body[data-theme="light"]) .unread {
    background: #d20f39;
}
:root:has(body[data-theme="light"]) .lobby__box tr:nth-child(even) {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .subnav a.active {
    color: #d20f39;
}
:root:has(body[data-theme="light"]) .subnav a.active::after,
:root:has(body[data-theme="light"]) .subnav a:hover::after {
    background: #d20f39;
}
:root:has(body[data-theme="light"]) .blog-cards > a {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .learn-stages .stage.done {
    background: #40a02b;
}
:root:has(body[data-theme="light"]) .learn-stages .stage.ongoing,
:root:has(body[data-theme="light"]) .learn__side-home {
    background: #1e66f5;
}
:root:has(body[data-theme="light"]) .learn-stages .stage.future {
    background: #d20f39;
}
:root:has(body[data-theme="light"]) .brown .is2d cg-board {
    background-image: url("data:image/svg+xml,%3Csvg%20shape-rendering%3D%22crispEdges%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22f%22%3E%3Cg%20id%3D%22e%22%3E%3Cg%20id%3D%22d%22%3E%3Cg%20id%3D%22c%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22%236c6f85%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23a%22%20y%3D%221%22/%3E%3Cpath%20id%3D%22b%22%20d%3D%22M0%201h1v1H0z%22%20fill%3D%22%23dce0e8%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23b%22%20y%3D%22-1%22/%3E%3C/g%3E%3Cuse%20x%3D%222%22%20xlink%3Ahref%3D%22%23c%22/%3E%3C/g%3E%3Cuse%20x%3D%224%22%20xlink%3Ahref%3D%22%23d%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%20y%3D%222%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%20y%3D%224%22/%3E%3C/svg%3E") !important;
}
:root:has(body[data-theme="light"]) .orientation-white .files coord:nth-child(2n + 1),
:root:has(body[data-theme="light"]) .orientation-white .ranks coord:nth-child(2n),
:root:has(body[data-theme="light"]) .orientation-black .files coord:nth-child(2n),
:root:has(body[data-theme="light"]) .orientation-black .ranks coord:nth-child(2n + 1) {
    color: #eff1f5;
}
:root:has(body[data-theme="light"]) .orientation-white .files coord:nth-child(2n),
:root:has(body[data-theme="light"]) .orientation-white .ranks coord:nth-child(2n + 1),
:root:has(body[data-theme="light"]) .orientation-black .files coord:nth-child(2n + 1),
:root:has(body[data-theme="light"]) .orientation-black .ranks coord:nth-child(2n) {
    color: #dce0e8;
}
:root:has(body[data-theme="light"]) square.move-dest {
    background: radial-gradient(rgba(30, 102, 245, 0.5) 19%, rgba(0, 0, 0, 0) 20%);
}
:root:has(body[data-theme="light"]) square.selected {
    background: rgba(30, 102, 245, 0.5);
}
:root:has(body[data-theme="light"]) square.last-move {
    background: rgba(30, 102, 245, 0.4);
}
:root:has(body[data-theme="light"]) .rclock .time {
    background: #e6e9ef;
    color: #4c4f69;
}
:root:has(body[data-theme="light"]) .rclock.running .time {
    background: #384722;
    /* putting it back to default so that the time on the clock is readable */
}
:root:has(body[data-theme="light"]) .rclock .bar {
    background: #1e66f5;
}
:root:has(body[data-theme="light"]) .game__meta,
:root:has(body[data-theme="light"]) .round__app__table {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) rm6 {
    background: #e6e9ef;
}
:root:has(body[data-theme="light"]) rm6 .buttons,
:root:has(body[data-theme="light"]) rm6 i5z {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .msg-app__convo__head,
:root:has(body[data-theme="light"]) .msg-app__side__search,
:root:has(body[data-theme="light"]) .msg-app__convo__reply {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .msg-app__side {
    background: #e6e9ef;
}
:root:has(body[data-theme="light"]) .msg-app__side__search input,
:root:has(body[data-theme="light"]) .msg-app__convo__post__text {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .msg-app__side__contact__name {
    color: #4c4f69;
}
:root:has(body[data-theme="light"]) .msg-app__side__contact__msg,
:root:has(body[data-theme="light"]) .msg-app__side__contact__date time {
    color: #6c6f85;
}
:root:has(body[data-theme="light"]) #powerTip,
:root:has(body[data-theme="light"]) #miniGame,
:root:has(body[data-theme="light"]) #miniBoard {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .btn-rack__btn,
:root:has(body[data-theme="light"]) .btn-rack form,
:root:has(body[data-theme="light"]) #friend_box .friend_box_title,
:root:has(body[data-theme="light"]) .button.button-metal,
:root:has(body[data-theme="light"]) .button.button-empty:not(.disabled):hover,
:root:has(body[data-theme="light"]) .button.button-empty.button-green:not(.disabled):hover,
:root:has(body[data-theme="light"]) .button.button-empty.button-red:not(.disabled):hover {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .user-show__header,
:root:has(body[data-theme="light"]) .user-show__social,
:root:has(body[data-theme="light"]) .user-show .angles,
:root:has(body[data-theme="light"]) .cmn-toggle:hover:not(:disabled) + label::after,
:root:has(body[data-theme="light"]) .cmn-toggle + label::after,
:root:has(body[data-theme="light"]) .crosstable povs:hover,
:root:has(body[data-theme="light"]) .crosstable__users,
:root:has(body[data-theme="light"]) .crosstable__score,
:root:has(body[data-theme="light"]) .game-row:nth-child(odd),
:root:has(body[data-theme="light"]) .number-menu--tabs .nm-item.active {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .number-menu--tabs .nm-item.active,
:root:has(body[data-theme="light"]) .user-show .number-menu .to-games.active,
:root:has(body[data-theme="light"]) .user-show #games.number-menu {
    background: #e6e9ef !important;
}
:root:has(body[data-theme="light"]) .perf-stat .counter tr.full td:last-child {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .sub-ratings a.active {
    background: #e6e9ef;
}
:root:has(body[data-theme="light"]) .sub-ratings a[href]:hover {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .analyse__clock,
:root:has(body[data-theme="light"]) #analyse-cm .title,
:root:has(body[data-theme="light"]) .explorer__config .choices button,
:root:has(body[data-theme="light"]) .mselect__label,
:root:has(body[data-theme="light"]) .cmn-toggle:hover:not(:disabled) + label::after,
:root:has(body[data-theme="light"]) .cmn-toggle + label::after,
:root:has(body[data-theme="light"]) .crosstable povs:hover,
:root:has(body[data-theme="light"]) .crosstable__users,
:root:has(body[data-theme="light"]) .crosstable__score,
:root:has(body[data-theme="light"]) .mselect__list,
:root:has(body[data-theme="light"]) .analyse__tools .comp-off__hint,
:root:has(body[data-theme="light"]) .ceval,
:root:has(body[data-theme="light"]) .explorer-box tr:nth-child(even),
:root:has(body[data-theme="light"]) .board-editor__tools .metadata,
:root:has(body[data-theme="light"]) .mchat__content,
:root:has(body[data-theme="light"]) .mchat__tab-active,
:root:has(body[data-theme="light"]) .crosstable fill {
    background: #dce0e8 !important;
}
:root:has(body[data-theme="light"]) .analyse__tools,
:root:has(body[data-theme="light"]) .copyable,
:root:has(body[data-theme="light"]) .pv_box,
:root:has(body[data-theme="light"]) #ceval-settings {
    background: #e6e9ef;
}
:root:has(body[data-theme="light"]) .ceval .settings-gear.active {
    background-color: #1e66f5;
}
:root:has(body[data-theme="light"]) #ceval-settings {
    border-top-color: #1e66f5;
}
:root:has(body[data-theme="light"]) .mchat__tab:hover {
    background: rgba(30, 102, 245, 0.5);
}
:root:has(body[data-theme="light"]) .opening__config,
:root:has(body[data-theme="light"]) .opening__next {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .opening__next {
    outline-color: #eff1f5;
}
:root:has(body[data-theme="light"]) .opening__next:hover {
    outline-color: #1e66f5;
}
:root:has(body[data-theme="light"]) .opening__next__popularity span {
    background: #1e66f5;
}
:root:has(body[data-theme="light"]) .opening__next__title {
    color: #1e66f5;
}
:root:has(body[data-theme="light"]) .tview2-column > index {
    background: #eff1f5;
    color: #6c6f85 !important;
}
:root:has(body[data-theme="light"]) .puzzle__feedback {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .puzzle__tools,
:root:has(body[data-theme="light"]) .puzzle__side__metas,
:root:has(body[data-theme="light"]) .puzzle__side__user,
:root:has(body[data-theme="light"]) .puzzle__side__config,
:root:has(body[data-theme="light"]) .puzzle__side__theme {
    background: #e6e9ef;
}
:root:has(body[data-theme="light"]) input,
:root:has(body[data-theme="light"]) textarea,
:root:has(body[data-theme="light"]) select {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .cmn-toggle:checked + label {
    background-color: #40a02b;
}
:root:has(body[data-theme="light"]) .cmn-toggle:checked + label::before {
    color: #40a02b;
}
:root:has(body[data-theme="light"]) .slist tbody tr:nth-child(even),
:root:has(body[data-theme="light"]) .team-show__desc,
:root:has(body[data-theme="light"]) .team-show__forum__post:nth-child(odd) {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .account .radio input:checked + label,
:root:has(body[data-theme="light"]) .account table.allows tr:nth-child(odd) td {
    background: #dce0e8;
}
:root:has(body[data-theme="light"]) .radio label {
    background: #eff1f5;
}
:root:has(body[data-theme="light"]) .flash-warning {
    background: #fe640b;
}
:root:has(body[data-theme="light"]) .form-control:invalid {
    border-color: #d20f39;
}
:root:has(body[data-theme="dark"]) {
    color-scheme: dark;
    /* Button */
    /* Game selection menus */
    /* Topbar */
    /* Popup skining */
    /* Text */
    /* Links */
    /* Homepage cards */
    /* Non-main page sidebar nav colors */
    /* Blog cards */
    /* Learn tab */
    /* Chess Game */
    /* Game Cards */
    /* Messages */
    /* User dropdown */
    /* User Page */
    /* Stats */
    /* Analysis page */
    /* Openings */
    /* Puzzles */
    /* Teams */
    /* Settings */
}
:root:has(body[data-theme="dark"]) ::selection {
    background-color: rgba(137, 180, 250, 0.3);
}
:root:has(body[data-theme="dark"]) input::placeholder,
:root:has(body[data-theme="dark"]) textarea::placeholder {
    color: #a6adc8 !important;
}
:root:has(body[data-theme="dark"]) html,
:root:has(body[data-theme="dark"]) body {
    background: #1e1e2e linear-gradient(to bottom, #11111b, #1e1e2e 116px) no-repeat;
    color: #cdd6f4 !important;
}
:root:has(body[data-theme="dark"]) .site-title a {
    color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .site-title span {
    color: #cdd6f4;
}
:root:has(body[data-theme="dark"]) .hooks__list td {
    background-color: rgba(108, 112, 134, 0.5);
}
:root:has(body[data-theme="dark"]) .hooks__list tr.join:hover td {
    background-color: rgba(137, 180, 250, 0.5);
}
:root:has(body[data-theme="dark"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="dark"]) #topnav section:active > a,
:root:has(body[data-theme="dark"]) #topnav div,
:root:has(body[data-theme="dark"]) .site-buttons .shown .toggle,
:root:has(body[data-theme="dark"]) .site-buttons .dropdown {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) #topnav section > a {
    color: #a6adc8;
}
:root:has(body[data-theme="dark"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="dark"]) #topnav section:active > a,
:root:has(body[data-theme="dark"]) #topnav div a,
:root:has(body[data-theme="dark"]) #dasher_app .selector button,
:root:has(body[data-theme="dark"]) #dasher_app .head,
:root:has(body[data-theme="dark"]) #dasher_app .piece .no-square,
:root:has(body[data-theme="dark"]) #dasher_app .theme .list button,
:root:has(body[data-theme="dark"]) #dasher_app .links a,
:root:has(body[data-theme="dark"]) #dasher_app .links button,
:root:has(body[data-theme="dark"]) #dasher_app .subs .sub,
:root:has(body[data-theme="dark"]) .site-buttons .dropdown a,
:root:has(body[data-theme="dark"]) .site-buttons .dropdown button {
    color: #cdd6f4;
}
:root:has(body[data-theme="dark"]) #topnav.hover section:hover > a,
:root:has(body[data-theme="dark"]) #topnav section:active > a,
:root:has(body[data-theme="dark"]) #topnav div {
    border-left-color: #89b4fa;
}
:root:has(body[data-theme="dark"]) signal > i {
    background-color: #a6e3a1;
}
:root:has(body[data-theme="dark"]) #dasher_app .sub::before,
:root:has(body[data-theme="dark"]) .is-green::before {
    color: #a6e3a1;
}
:root:has(body[data-theme="dark"]) #challenge-app .empty {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) dialog {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .game-setup .optional-config,
:root:has(body[data-theme="dark"]) .game-setup .ratings {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .game-setup .radio input:checked + label {
    background: #a6e3a1;
}
:root:has(body[data-theme="dark"]) .site-buttons .link,
:root:has(body[data-theme="dark"]) .button,
:root:has(body[data-theme="dark"]) .input,
:root:has(body[data-theme="dark"]) .optgroup,
:root:has(body[data-theme="dark"]) .select,
:root:has(body[data-theme="dark"]) .textarea,
:root:has(body[data-theme="dark"]) .lobby__box td.name a,
:root:has(body[data-theme="dark"]) .lobby__box__top .title,
:root:has(body[data-theme="dark"]) .lobby__box .user-link,
:root:has(body[data-theme="dark"]) .mini-game,
:root:has(body[data-theme="dark"]) .mini-game:hover,
:root:has(body[data-theme="dark"]) .text,
:root:has(body[data-theme="dark"]) .ublog-post-card__title,
:root:has(body[data-theme="dark"]) .lobby__counters a,
:root:has(body[data-theme="dark"]) .lobby__streams .stream,
:root:has(body[data-theme="dark"]) .lobby__timeline .entry a,
:root:has(body[data-theme="dark"]) .lobby__about a,
:root:has(body[data-theme="dark"]) .lobby__timeline,
:root:has(body[data-theme="dark"]) .lobby__counters,
:root:has(body[data-theme="dark"]) .tabs-horiz,
:root:has(body[data-theme="dark"]) .lobby__streams .more,
:root:has(body[data-theme="dark"]) .lobby__timeline .more,
:root:has(body[data-theme="dark"]) .dialog-content,
:root:has(body[data-theme="dark"]) button,
:root:has(body[data-theme="dark"]) input,
:root:has(body[data-theme="dark"]) optgroup,
:root:has(body[data-theme="dark"]) select,
:root:has(body[data-theme="dark"]) textarea {
    color: #a6adc8;
}
:root:has(body[data-theme="dark"]) .site-buttons .link:hover,
:root:has(body[data-theme="dark"]) .button.button-metal:hover,
:root:has(body[data-theme="dark"]) .radio input:checked + label {
    color: #cdd6f4;
}
:root:has(body[data-theme="dark"]) .site-title-nav__donate,
:root:has(body[data-theme="dark"]) .lobby__streams .stream.highlight strong,
:root:has(body[data-theme="dark"]) .utitle,
:root:has(body[data-theme="dark"]) .lobby__support__text,
:root:has(body[data-theme="dark"]) .lobby__support i::before {
    color: #fab387;
}
:root:has(body[data-theme="dark"]) .mini-game__clock.clock--run,
:root:has(body[data-theme="dark"]) .tabs-horiz span.active {
    color: #f38ba8;
}
:root:has(body[data-theme="dark"]) .tabs-horiz span.active,
:root:has(body[data-theme="dark"]) .tabs-horiz span:hover {
    border-color: #f38ba8;
}
:root:has(body[data-theme="dark"]) a {
    color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .lobby__timeline .entry:hover a,
:root:has(body[data-theme="dark"]) a:hover,
:root:has(body[data-theme="dark"]) a:active,
:root:has(body[data-theme="dark"]) a:focus {
    color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .lobby__app__content,
:root:has(body[data-theme="dark"]) .box {
    background-color: #181825;
}
:root:has(body[data-theme="dark"]) .lpools > div {
    background: rgba(17, 17, 27, 0.2);
    border-color: #313244;
}
:root:has(body[data-theme="dark"]) .lpools > div:hover {
    background-color: rgba(137, 180, 250, 0.2);
}
:root:has(body[data-theme="dark"]) .hook__filters {
    background-color: rgba(24, 24, 37, 0.5);
}
:root:has(body[data-theme="dark"]) .lobby__support a {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .lobby__support a:hover {
    background: #fab387;
}
:root:has(body[data-theme="dark"]) .lobby__support a:hover i::before,
:root:has(body[data-theme="dark"]) .lobby__support a:hover .lobby__support__text {
    color: #181825;
}
:root:has(body[data-theme="dark"]) .lobby__box__top,
:root:has(body[data-theme="dark"]) #hook .opponent,
:root:has(body[data-theme="dark"]) .lobby__box__content,
:root:has(body[data-theme="dark"]) .ublog-post-card,
:root:has(body[data-theme="dark"]) .button,
:root:has(body[data-theme="dark"]) .tour-spotlight {
    background: #181825 !important;
}
:root:has(body[data-theme="dark"]) .unread {
    background: #f38ba8;
}
:root:has(body[data-theme="dark"]) .lobby__box tr:nth-child(even) {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .subnav a.active {
    color: #f38ba8;
}
:root:has(body[data-theme="dark"]) .subnav a.active::after,
:root:has(body[data-theme="dark"]) .subnav a:hover::after {
    background: #f38ba8;
}
:root:has(body[data-theme="dark"]) .blog-cards > a {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .learn-stages .stage.done {
    background: #a6e3a1;
}
:root:has(body[data-theme="dark"]) .learn-stages .stage.ongoing,
:root:has(body[data-theme="dark"]) .learn__side-home {
    background: #89b4fa;
}
:root:has(body[data-theme="dark"]) .learn-stages .stage.future {
    background: #f38ba8;
}
:root:has(body[data-theme="dark"]) .brown .is2d cg-board {
    background-image: url("data:image/svg+xml,%3Csvg%20shape-rendering%3D%22crispEdges%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22f%22%3E%3Cg%20id%3D%22e%22%3E%3Cg%20id%3D%22d%22%3E%3Cg%20id%3D%22c%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22%23a6adc8%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23a%22%20y%3D%221%22/%3E%3Cpath%20id%3D%22b%22%20d%3D%22M0%201h1v1H0z%22%20fill%3D%22%2311111b%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23b%22%20y%3D%22-1%22/%3E%3C/g%3E%3Cuse%20x%3D%222%22%20xlink%3Ahref%3D%22%23c%22/%3E%3C/g%3E%3Cuse%20x%3D%224%22%20xlink%3Ahref%3D%22%23d%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%20y%3D%222%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%20y%3D%224%22/%3E%3C/svg%3E") !important;
}
:root:has(body[data-theme="dark"]) .orientation-white .files coord:nth-child(2n + 1),
:root:has(body[data-theme="dark"]) .orientation-white .ranks coord:nth-child(2n),
:root:has(body[data-theme="dark"]) .orientation-black .files coord:nth-child(2n),
:root:has(body[data-theme="dark"]) .orientation-black .ranks coord:nth-child(2n + 1) {
    color: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .orientation-white .files coord:nth-child(2n),
:root:has(body[data-theme="dark"]) .orientation-white .ranks coord:nth-child(2n + 1),
:root:has(body[data-theme="dark"]) .orientation-black .files coord:nth-child(2n + 1),
:root:has(body[data-theme="dark"]) .orientation-black .ranks coord:nth-child(2n) {
    color: #11111b;
}
:root:has(body[data-theme="dark"]) square.move-dest {
    background: radial-gradient(rgba(137, 180, 250, 0.5) 19%, rgba(0, 0, 0, 0) 20%);
}
:root:has(body[data-theme="dark"]) square.selected {
    background: rgba(137, 180, 250, 0.5);
}
:root:has(body[data-theme="dark"]) square.last-move {
    background: rgba(137, 180, 250, 0.4);
}
:root:has(body[data-theme="dark"]) .rclock .time {
    background: #181825;
    color: #cdd6f4;
}
:root:has(body[data-theme="dark"]) .rclock.running .time {
    background: #384722;
    /* putting it back to default so that the time on the clock is readable */
}
:root:has(body[data-theme="dark"]) .rclock .bar {
    background: #89b4fa;
}
:root:has(body[data-theme="dark"]) .game__meta,
:root:has(body[data-theme="dark"]) .round__app__table {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) rm6 {
    background: #181825;
}
:root:has(body[data-theme="dark"]) rm6 .buttons,
:root:has(body[data-theme="dark"]) rm6 i5z {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .msg-app__convo__head,
:root:has(body[data-theme="dark"]) .msg-app__side__search,
:root:has(body[data-theme="dark"]) .msg-app__convo__reply {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .msg-app__side {
    background: #181825;
}
:root:has(body[data-theme="dark"]) .msg-app__side__search input,
:root:has(body[data-theme="dark"]) .msg-app__convo__post__text {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .msg-app__side__contact__name {
    color: #cdd6f4;
}
:root:has(body[data-theme="dark"]) .msg-app__side__contact__msg,
:root:has(body[data-theme="dark"]) .msg-app__side__contact__date time {
    color: #a6adc8;
}
:root:has(body[data-theme="dark"]) #powerTip,
:root:has(body[data-theme="dark"]) #miniGame,
:root:has(body[data-theme="dark"]) #miniBoard {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .btn-rack__btn,
:root:has(body[data-theme="dark"]) .btn-rack form,
:root:has(body[data-theme="dark"]) #friend_box .friend_box_title,
:root:has(body[data-theme="dark"]) .button.button-metal,
:root:has(body[data-theme="dark"]) .button.button-empty:not(.disabled):hover,
:root:has(body[data-theme="dark"]) .button.button-empty.button-green:not(.disabled):hover,
:root:has(body[data-theme="dark"]) .button.button-empty.button-red:not(.disabled):hover {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .user-show__header,
:root:has(body[data-theme="dark"]) .user-show__social,
:root:has(body[data-theme="dark"]) .user-show .angles,
:root:has(body[data-theme="dark"]) .cmn-toggle:hover:not(:disabled) + label::after,
:root:has(body[data-theme="dark"]) .cmn-toggle + label::after,
:root:has(body[data-theme="dark"]) .crosstable povs:hover,
:root:has(body[data-theme="dark"]) .crosstable__users,
:root:has(body[data-theme="dark"]) .crosstable__score,
:root:has(body[data-theme="dark"]) .game-row:nth-child(odd),
:root:has(body[data-theme="dark"]) .number-menu--tabs .nm-item.active {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .number-menu--tabs .nm-item.active,
:root:has(body[data-theme="dark"]) .user-show .number-menu .to-games.active,
:root:has(body[data-theme="dark"]) .user-show #games.number-menu {
    background: #181825 !important;
}
:root:has(body[data-theme="dark"]) .perf-stat .counter tr.full td:last-child {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .sub-ratings a.active {
    background: #181825;
}
:root:has(body[data-theme="dark"]) .sub-ratings a[href]:hover {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .analyse__clock,
:root:has(body[data-theme="dark"]) #analyse-cm .title,
:root:has(body[data-theme="dark"]) .explorer__config .choices button,
:root:has(body[data-theme="dark"]) .mselect__label,
:root:has(body[data-theme="dark"]) .cmn-toggle:hover:not(:disabled) + label::after,
:root:has(body[data-theme="dark"]) .cmn-toggle + label::after,
:root:has(body[data-theme="dark"]) .crosstable povs:hover,
:root:has(body[data-theme="dark"]) .crosstable__users,
:root:has(body[data-theme="dark"]) .crosstable__score,
:root:has(body[data-theme="dark"]) .mselect__list,
:root:has(body[data-theme="dark"]) .analyse__tools .comp-off__hint,
:root:has(body[data-theme="dark"]) .ceval,
:root:has(body[data-theme="dark"]) .explorer-box tr:nth-child(even),
:root:has(body[data-theme="dark"]) .board-editor__tools .metadata,
:root:has(body[data-theme="dark"]) .mchat__content,
:root:has(body[data-theme="dark"]) .mchat__tab-active,
:root:has(body[data-theme="dark"]) .crosstable fill {
    background: #11111b !important;
}
:root:has(body[data-theme="dark"]) .analyse__tools,
:root:has(body[data-theme="dark"]) .copyable,
:root:has(body[data-theme="dark"]) .pv_box,
:root:has(body[data-theme="dark"]) #ceval-settings {
    background: #181825;
}
:root:has(body[data-theme="dark"]) .ceval .settings-gear.active {
    background-color: #89b4fa;
}
:root:has(body[data-theme="dark"]) #ceval-settings {
    border-top-color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .mchat__tab:hover {
    background: rgba(137, 180, 250, 0.5);
}
:root:has(body[data-theme="dark"]) .opening__config,
:root:has(body[data-theme="dark"]) .opening__next {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .opening__next {
    outline-color: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .opening__next:hover {
    outline-color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .opening__next__popularity span {
    background: #89b4fa;
}
:root:has(body[data-theme="dark"]) .opening__next__title {
    color: #89b4fa;
}
:root:has(body[data-theme="dark"]) .tview2-column > index {
    background: #1e1e2e;
    color: #a6adc8 !important;
}
:root:has(body[data-theme="dark"]) .puzzle__feedback {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .puzzle__tools,
:root:has(body[data-theme="dark"]) .puzzle__side__metas,
:root:has(body[data-theme="dark"]) .puzzle__side__user,
:root:has(body[data-theme="dark"]) .puzzle__side__config,
:root:has(body[data-theme="dark"]) .puzzle__side__theme {
    background: #181825;
}
:root:has(body[data-theme="dark"]) input,
:root:has(body[data-theme="dark"]) textarea,
:root:has(body[data-theme="dark"]) select {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .cmn-toggle:checked + label {
    background-color: #a6e3a1;
}
:root:has(body[data-theme="dark"]) .cmn-toggle:checked + label::before {
    color: #a6e3a1;
}
:root:has(body[data-theme="dark"]) .slist tbody tr:nth-child(even),
:root:has(body[data-theme="dark"]) .team-show__desc,
:root:has(body[data-theme="dark"]) .team-show__forum__post:nth-child(odd) {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .account .radio input:checked + label,
:root:has(body[data-theme="dark"]) .account table.allows tr:nth-child(odd) td {
    background: #11111b;
}
:root:has(body[data-theme="dark"]) .radio label {
    background: #1e1e2e;
}
:root:has(body[data-theme="dark"]) .flash-warning {
    background: #fab387;
}
:root:has(body[data-theme="dark"]) .form-control:invalid {
    border-color: #f38ba8;
}
@media (prefers-color-scheme: light) {
    :root:has(body[data-theme="system"]) {
        color-scheme: dark;
        /* Button */
        /* Game selection menus */
        /* Topbar */
        /* Popup skining */
        /* Text */
        /* Links */
        /* Homepage cards */
        /* Non-main page sidebar nav colors */
        /* Blog cards */
        /* Learn tab */
        /* Chess Game */
        /* Game Cards */
        /* Messages */
        /* User dropdown */
        /* User Page */
        /* Stats */
        /* Analysis page */
        /* Openings */
        /* Puzzles */
        /* Teams */
        /* Settings */
    }
    :root:has(body[data-theme="system"]) ::selection {
        background-color: rgba(30, 102, 245, 0.3);
    }
    :root:has(body[data-theme="system"]) input::placeholder,
    :root:has(body[data-theme="system"]) textarea::placeholder {
        color: #6c6f85 !important;
    }
    :root:has(body[data-theme="system"]) html,
    :root:has(body[data-theme="system"]) body {
        background: #eff1f5 linear-gradient(to bottom, #dce0e8, #eff1f5 116px) no-repeat;
        color: #4c4f69 !important;
    }
    :root:has(body[data-theme="system"]) .site-title a {
        color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .site-title span {
        color: #4c4f69;
    }
    :root:has(body[data-theme="system"]) .hooks__list td {
        background-color: rgba(156, 160, 176, 0.5);
    }
    :root:has(body[data-theme="system"]) .hooks__list tr.join:hover td {
        background-color: rgba(30, 102, 245, 0.5);
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div,
    :root:has(body[data-theme="system"]) .site-buttons .shown .toggle,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) #topnav section > a {
        color: #6c6f85;
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div a,
    :root:has(body[data-theme="system"]) #dasher_app .selector button,
    :root:has(body[data-theme="system"]) #dasher_app .head,
    :root:has(body[data-theme="system"]) #dasher_app .piece .no-square,
    :root:has(body[data-theme="system"]) #dasher_app .theme .list button,
    :root:has(body[data-theme="system"]) #dasher_app .links a,
    :root:has(body[data-theme="system"]) #dasher_app .links button,
    :root:has(body[data-theme="system"]) #dasher_app .subs .sub,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown a,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown button {
        color: #4c4f69;
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div {
        border-left-color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) signal > i {
        background-color: #40a02b;
    }
    :root:has(body[data-theme="system"]) #dasher_app .sub::before,
    :root:has(body[data-theme="system"]) .is-green::before {
        color: #40a02b;
    }
    :root:has(body[data-theme="system"]) #challenge-app .empty {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) dialog {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .game-setup .optional-config,
    :root:has(body[data-theme="system"]) .game-setup .ratings {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .game-setup .radio input:checked + label {
        background: #40a02b;
    }
    :root:has(body[data-theme="system"]) .site-buttons .link,
    :root:has(body[data-theme="system"]) .button,
    :root:has(body[data-theme="system"]) .input,
    :root:has(body[data-theme="system"]) .optgroup,
    :root:has(body[data-theme="system"]) .select,
    :root:has(body[data-theme="system"]) .textarea,
    :root:has(body[data-theme="system"]) .lobby__box td.name a,
    :root:has(body[data-theme="system"]) .lobby__box__top .title,
    :root:has(body[data-theme="system"]) .lobby__box .user-link,
    :root:has(body[data-theme="system"]) .mini-game,
    :root:has(body[data-theme="system"]) .mini-game:hover,
    :root:has(body[data-theme="system"]) .text,
    :root:has(body[data-theme="system"]) .ublog-post-card__title,
    :root:has(body[data-theme="system"]) .lobby__counters a,
    :root:has(body[data-theme="system"]) .lobby__streams .stream,
    :root:has(body[data-theme="system"]) .lobby__timeline .entry a,
    :root:has(body[data-theme="system"]) .lobby__about a,
    :root:has(body[data-theme="system"]) .lobby__timeline,
    :root:has(body[data-theme="system"]) .lobby__counters,
    :root:has(body[data-theme="system"]) .tabs-horiz,
    :root:has(body[data-theme="system"]) .lobby__streams .more,
    :root:has(body[data-theme="system"]) .lobby__timeline .more,
    :root:has(body[data-theme="system"]) .dialog-content,
    :root:has(body[data-theme="system"]) button,
    :root:has(body[data-theme="system"]) input,
    :root:has(body[data-theme="system"]) optgroup,
    :root:has(body[data-theme="system"]) select,
    :root:has(body[data-theme="system"]) textarea {
        color: #6c6f85;
    }
    :root:has(body[data-theme="system"]) .site-buttons .link:hover,
    :root:has(body[data-theme="system"]) .button.button-metal:hover,
    :root:has(body[data-theme="system"]) .radio input:checked + label {
        color: #4c4f69;
    }
    :root:has(body[data-theme="system"]) .site-title-nav__donate,
    :root:has(body[data-theme="system"]) .lobby__streams .stream.highlight strong,
    :root:has(body[data-theme="system"]) .utitle,
    :root:has(body[data-theme="system"]) .lobby__support__text,
    :root:has(body[data-theme="system"]) .lobby__support i::before {
        color: #fe640b;
    }
    :root:has(body[data-theme="system"]) .mini-game__clock.clock--run,
    :root:has(body[data-theme="system"]) .tabs-horiz span.active {
        color: #d20f39;
    }
    :root:has(body[data-theme="system"]) .tabs-horiz span.active,
    :root:has(body[data-theme="system"]) .tabs-horiz span:hover {
        border-color: #d20f39;
    }
    :root:has(body[data-theme="system"]) a {
        color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .lobby__timeline .entry:hover a,
    :root:has(body[data-theme="system"]) a:hover,
    :root:has(body[data-theme="system"]) a:active,
    :root:has(body[data-theme="system"]) a:focus {
        color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .lobby__app__content,
    :root:has(body[data-theme="system"]) .box {
        background-color: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) .lpools > div {
        background: rgba(220, 224, 232, 0.2);
        border-color: #ccd0da;
    }
    :root:has(body[data-theme="system"]) .lpools > div:hover {
        background-color: rgba(30, 102, 245, 0.2);
    }
    :root:has(body[data-theme="system"]) .hook__filters {
        background-color: rgba(230, 233, 239, 0.5);
    }
    :root:has(body[data-theme="system"]) .lobby__support a {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .lobby__support a:hover {
        background: #fe640b;
    }
    :root:has(body[data-theme="system"]) .lobby__support a:hover i::before,
    :root:has(body[data-theme="system"]) .lobby__support a:hover .lobby__support__text {
        color: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) .lobby__box__top,
    :root:has(body[data-theme="system"]) #hook .opponent,
    :root:has(body[data-theme="system"]) .lobby__box__content,
    :root:has(body[data-theme="system"]) .ublog-post-card,
    :root:has(body[data-theme="system"]) .button,
    :root:has(body[data-theme="system"]) .tour-spotlight {
        background: #e6e9ef !important;
    }
    :root:has(body[data-theme="system"]) .unread {
        background: #d20f39;
    }
    :root:has(body[data-theme="system"]) .lobby__box tr:nth-child(even) {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .subnav a.active {
        color: #d20f39;
    }
    :root:has(body[data-theme="system"]) .subnav a.active::after,
    :root:has(body[data-theme="system"]) .subnav a:hover::after {
        background: #d20f39;
    }
    :root:has(body[data-theme="system"]) .blog-cards > a {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.done {
        background: #40a02b;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.ongoing,
    :root:has(body[data-theme="system"]) .learn__side-home {
        background: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.future {
        background: #d20f39;
    }
    :root:has(body[data-theme="system"]) .brown .is2d cg-board {
        background-image: url("data:image/svg+xml,%3Csvg%20shape-rendering%3D%22crispEdges%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22f%22%3E%3Cg%20id%3D%22e%22%3E%3Cg%20id%3D%22d%22%3E%3Cg%20id%3D%22c%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22%236c6f85%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23a%22%20y%3D%221%22/%3E%3Cpath%20id%3D%22b%22%20d%3D%22M0%201h1v1H0z%22%20fill%3D%22%23dce0e8%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23b%22%20y%3D%22-1%22/%3E%3C/g%3E%3Cuse%20x%3D%222%22%20xlink%3Ahref%3D%22%23c%22/%3E%3C/g%3E%3Cuse%20x%3D%224%22%20xlink%3Ahref%3D%22%23d%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%20y%3D%222%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%20y%3D%224%22/%3E%3C/svg%3E") !important;
    }
    :root:has(body[data-theme="system"]) .orientation-white .files coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-white .ranks coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-black .files coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-black .ranks coord:nth-child(2n + 1) {
        color: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .orientation-white .files coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-white .ranks coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-black .files coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-black .ranks coord:nth-child(2n) {
        color: #dce0e8;
    }
    :root:has(body[data-theme="system"]) square.move-dest {
        background: radial-gradient(rgba(30, 102, 245, 0.5) 19%, rgba(0, 0, 0, 0) 20%);
    }
    :root:has(body[data-theme="system"]) square.selected {
        background: rgba(30, 102, 245, 0.5);
    }
    :root:has(body[data-theme="system"]) square.last-move {
        background: rgba(30, 102, 245, 0.4);
    }
    :root:has(body[data-theme="system"]) .rclock .time {
        background: #e6e9ef;
        color: #4c4f69;
    }
    :root:has(body[data-theme="system"]) .rclock.running .time {
        background: #384722;
        /* putting it back to default so that the time on the clock is readable */
    }
    :root:has(body[data-theme="system"]) .rclock .bar {
        background: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .game__meta,
    :root:has(body[data-theme="system"]) .round__app__table {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) rm6 {
        background: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) rm6 .buttons,
    :root:has(body[data-theme="system"]) rm6 i5z {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .msg-app__convo__head,
    :root:has(body[data-theme="system"]) .msg-app__side__search,
    :root:has(body[data-theme="system"]) .msg-app__convo__reply {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .msg-app__side {
        background: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__search input,
    :root:has(body[data-theme="system"]) .msg-app__convo__post__text {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__contact__name {
        color: #4c4f69;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__contact__msg,
    :root:has(body[data-theme="system"]) .msg-app__side__contact__date time {
        color: #6c6f85;
    }
    :root:has(body[data-theme="system"]) #powerTip,
    :root:has(body[data-theme="system"]) #miniGame,
    :root:has(body[data-theme="system"]) #miniBoard {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .btn-rack__btn,
    :root:has(body[data-theme="system"]) .btn-rack form,
    :root:has(body[data-theme="system"]) #friend_box .friend_box_title,
    :root:has(body[data-theme="system"]) .button.button-metal,
    :root:has(body[data-theme="system"]) .button.button-empty:not(.disabled):hover,
    :root:has(body[data-theme="system"]) .button.button-empty.button-green:not(.disabled):hover,
    :root:has(body[data-theme="system"]) .button.button-empty.button-red:not(.disabled):hover {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .user-show__header,
    :root:has(body[data-theme="system"]) .user-show__social,
    :root:has(body[data-theme="system"]) .user-show .angles,
    :root:has(body[data-theme="system"]) .cmn-toggle:hover:not(:disabled) + label::after,
    :root:has(body[data-theme="system"]) .cmn-toggle + label::after,
    :root:has(body[data-theme="system"]) .crosstable povs:hover,
    :root:has(body[data-theme="system"]) .crosstable__users,
    :root:has(body[data-theme="system"]) .crosstable__score,
    :root:has(body[data-theme="system"]) .game-row:nth-child(odd),
    :root:has(body[data-theme="system"]) .number-menu--tabs .nm-item.active {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .number-menu--tabs .nm-item.active,
    :root:has(body[data-theme="system"]) .user-show .number-menu .to-games.active,
    :root:has(body[data-theme="system"]) .user-show #games.number-menu {
        background: #e6e9ef !important;
    }
    :root:has(body[data-theme="system"]) .perf-stat .counter tr.full td:last-child {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .sub-ratings a.active {
        background: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) .sub-ratings a[href]:hover {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .analyse__clock,
    :root:has(body[data-theme="system"]) #analyse-cm .title,
    :root:has(body[data-theme="system"]) .explorer__config .choices button,
    :root:has(body[data-theme="system"]) .mselect__label,
    :root:has(body[data-theme="system"]) .cmn-toggle:hover:not(:disabled) + label::after,
    :root:has(body[data-theme="system"]) .cmn-toggle + label::after,
    :root:has(body[data-theme="system"]) .crosstable povs:hover,
    :root:has(body[data-theme="system"]) .crosstable__users,
    :root:has(body[data-theme="system"]) .crosstable__score,
    :root:has(body[data-theme="system"]) .mselect__list,
    :root:has(body[data-theme="system"]) .analyse__tools .comp-off__hint,
    :root:has(body[data-theme="system"]) .ceval,
    :root:has(body[data-theme="system"]) .explorer-box tr:nth-child(even),
    :root:has(body[data-theme="system"]) .board-editor__tools .metadata,
    :root:has(body[data-theme="system"]) .mchat__content,
    :root:has(body[data-theme="system"]) .mchat__tab-active,
    :root:has(body[data-theme="system"]) .crosstable fill {
        background: #dce0e8 !important;
    }
    :root:has(body[data-theme="system"]) .analyse__tools,
    :root:has(body[data-theme="system"]) .copyable,
    :root:has(body[data-theme="system"]) .pv_box,
    :root:has(body[data-theme="system"]) #ceval-settings {
        background: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) .ceval .settings-gear.active {
        background-color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) #ceval-settings {
        border-top-color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .mchat__tab:hover {
        background: rgba(30, 102, 245, 0.5);
    }
    :root:has(body[data-theme="system"]) .opening__config,
    :root:has(body[data-theme="system"]) .opening__next {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .opening__next {
        outline-color: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .opening__next:hover {
        outline-color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .opening__next__popularity span {
        background: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .opening__next__title {
        color: #1e66f5;
    }
    :root:has(body[data-theme="system"]) .tview2-column > index {
        background: #eff1f5;
        color: #6c6f85 !important;
    }
    :root:has(body[data-theme="system"]) .puzzle__feedback {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .puzzle__tools,
    :root:has(body[data-theme="system"]) .puzzle__side__metas,
    :root:has(body[data-theme="system"]) .puzzle__side__user,
    :root:has(body[data-theme="system"]) .puzzle__side__config,
    :root:has(body[data-theme="system"]) .puzzle__side__theme {
        background: #e6e9ef;
    }
    :root:has(body[data-theme="system"]) input,
    :root:has(body[data-theme="system"]) textarea,
    :root:has(body[data-theme="system"]) select {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .cmn-toggle:checked + label {
        background-color: #40a02b;
    }
    :root:has(body[data-theme="system"]) .cmn-toggle:checked + label::before {
        color: #40a02b;
    }
    :root:has(body[data-theme="system"]) .slist tbody tr:nth-child(even),
    :root:has(body[data-theme="system"]) .team-show__desc,
    :root:has(body[data-theme="system"]) .team-show__forum__post:nth-child(odd) {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .account .radio input:checked + label,
    :root:has(body[data-theme="system"]) .account table.allows tr:nth-child(odd) td {
        background: #dce0e8;
    }
    :root:has(body[data-theme="system"]) .radio label {
        background: #eff1f5;
    }
    :root:has(body[data-theme="system"]) .flash-warning {
        background: #fe640b;
    }
    :root:has(body[data-theme="system"]) .form-control:invalid {
        border-color: #d20f39;
    }
}
@media (prefers-color-scheme: dark) {
    :root:has(body[data-theme="system"]) {
        color-scheme: dark;
        /* Button */
        /* Game selection menus */
        /* Topbar */
        /* Popup skining */
        /* Text */
        /* Links */
        /* Homepage cards */
        /* Non-main page sidebar nav colors */
        /* Blog cards */
        /* Learn tab */
        /* Chess Game */
        /* Game Cards */
        /* Messages */
        /* User dropdown */
        /* User Page */
        /* Stats */
        /* Analysis page */
        /* Openings */
        /* Puzzles */
        /* Teams */
        /* Settings */
    }
    :root:has(body[data-theme="system"]) ::selection {
        background-color: rgba(137, 180, 250, 0.3);
    }
    :root:has(body[data-theme="system"]) input::placeholder,
    :root:has(body[data-theme="system"]) textarea::placeholder {
        color: #a6adc8 !important;
    }
    :root:has(body[data-theme="system"]) html,
    :root:has(body[data-theme="system"]) body {
        background: #1e1e2e linear-gradient(to bottom, #11111b, #1e1e2e 116px) no-repeat;
        color: #cdd6f4 !important;
    }
    :root:has(body[data-theme="system"]) .site-title a {
        color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .site-title span {
        color: #cdd6f4;
    }
    :root:has(body[data-theme="system"]) .hooks__list td {
        background-color: rgba(108, 112, 134, 0.5);
    }
    :root:has(body[data-theme="system"]) .hooks__list tr.join:hover td {
        background-color: rgba(137, 180, 250, 0.5);
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div,
    :root:has(body[data-theme="system"]) .site-buttons .shown .toggle,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) #topnav section > a {
        color: #a6adc8;
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div a,
    :root:has(body[data-theme="system"]) #dasher_app .selector button,
    :root:has(body[data-theme="system"]) #dasher_app .head,
    :root:has(body[data-theme="system"]) #dasher_app .piece .no-square,
    :root:has(body[data-theme="system"]) #dasher_app .theme .list button,
    :root:has(body[data-theme="system"]) #dasher_app .links a,
    :root:has(body[data-theme="system"]) #dasher_app .links button,
    :root:has(body[data-theme="system"]) #dasher_app .subs .sub,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown a,
    :root:has(body[data-theme="system"]) .site-buttons .dropdown button {
        color: #cdd6f4;
    }
    :root:has(body[data-theme="system"]) #topnav.hover section:hover > a,
    :root:has(body[data-theme="system"]) #topnav section:active > a,
    :root:has(body[data-theme="system"]) #topnav div {
        border-left-color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) signal > i {
        background-color: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) #dasher_app .sub::before,
    :root:has(body[data-theme="system"]) .is-green::before {
        color: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) #challenge-app .empty {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) dialog {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .game-setup .optional-config,
    :root:has(body[data-theme="system"]) .game-setup .ratings {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .game-setup .radio input:checked + label {
        background: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) .site-buttons .link,
    :root:has(body[data-theme="system"]) .button,
    :root:has(body[data-theme="system"]) .input,
    :root:has(body[data-theme="system"]) .optgroup,
    :root:has(body[data-theme="system"]) .select,
    :root:has(body[data-theme="system"]) .textarea,
    :root:has(body[data-theme="system"]) .lobby__box td.name a,
    :root:has(body[data-theme="system"]) .lobby__box__top .title,
    :root:has(body[data-theme="system"]) .lobby__box .user-link,
    :root:has(body[data-theme="system"]) .mini-game,
    :root:has(body[data-theme="system"]) .mini-game:hover,
    :root:has(body[data-theme="system"]) .text,
    :root:has(body[data-theme="system"]) .ublog-post-card__title,
    :root:has(body[data-theme="system"]) .lobby__counters a,
    :root:has(body[data-theme="system"]) .lobby__streams .stream,
    :root:has(body[data-theme="system"]) .lobby__timeline .entry a,
    :root:has(body[data-theme="system"]) .lobby__about a,
    :root:has(body[data-theme="system"]) .lobby__timeline,
    :root:has(body[data-theme="system"]) .lobby__counters,
    :root:has(body[data-theme="system"]) .tabs-horiz,
    :root:has(body[data-theme="system"]) .lobby__streams .more,
    :root:has(body[data-theme="system"]) .lobby__timeline .more,
    :root:has(body[data-theme="system"]) .dialog-content,
    :root:has(body[data-theme="system"]) button,
    :root:has(body[data-theme="system"]) input,
    :root:has(body[data-theme="system"]) optgroup,
    :root:has(body[data-theme="system"]) select,
    :root:has(body[data-theme="system"]) textarea {
        color: #a6adc8;
    }
    :root:has(body[data-theme="system"]) .site-buttons .link:hover,
    :root:has(body[data-theme="system"]) .button.button-metal:hover,
    :root:has(body[data-theme="system"]) .radio input:checked + label {
        color: #cdd6f4;
    }
    :root:has(body[data-theme="system"]) .site-title-nav__donate,
    :root:has(body[data-theme="system"]) .lobby__streams .stream.highlight strong,
    :root:has(body[data-theme="system"]) .utitle,
    :root:has(body[data-theme="system"]) .lobby__support__text,
    :root:has(body[data-theme="system"]) .lobby__support i::before {
        color: #fab387;
    }
    :root:has(body[data-theme="system"]) .mini-game__clock.clock--run,
    :root:has(body[data-theme="system"]) .tabs-horiz span.active {
        color: #f38ba8;
    }
    :root:has(body[data-theme="system"]) .tabs-horiz span.active,
    :root:has(body[data-theme="system"]) .tabs-horiz span:hover {
        border-color: #f38ba8;
    }
    :root:has(body[data-theme="system"]) a {
        color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .lobby__timeline .entry:hover a,
    :root:has(body[data-theme="system"]) a:hover,
    :root:has(body[data-theme="system"]) a:active,
    :root:has(body[data-theme="system"]) a:focus {
        color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .lobby__app__content,
    :root:has(body[data-theme="system"]) .box {
        background-color: #181825;
    }
    :root:has(body[data-theme="system"]) .lpools > div {
        background: rgba(17, 17, 27, 0.2);
        border-color: #313244;
    }
    :root:has(body[data-theme="system"]) .lpools > div:hover {
        background-color: rgba(137, 180, 250, 0.2);
    }
    :root:has(body[data-theme="system"]) .hook__filters {
        background-color: rgba(24, 24, 37, 0.5);
    }
    :root:has(body[data-theme="system"]) .lobby__support a {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .lobby__support a:hover {
        background: #fab387;
    }
    :root:has(body[data-theme="system"]) .lobby__support a:hover i::before,
    :root:has(body[data-theme="system"]) .lobby__support a:hover .lobby__support__text {
        color: #181825;
    }
    :root:has(body[data-theme="system"]) .lobby__box__top,
    :root:has(body[data-theme="system"]) #hook .opponent,
    :root:has(body[data-theme="system"]) .lobby__box__content,
    :root:has(body[data-theme="system"]) .ublog-post-card,
    :root:has(body[data-theme="system"]) .button,
    :root:has(body[data-theme="system"]) .tour-spotlight {
        background: #181825 !important;
    }
    :root:has(body[data-theme="system"]) .unread {
        background: #f38ba8;
    }
    :root:has(body[data-theme="system"]) .lobby__box tr:nth-child(even) {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .subnav a.active {
        color: #f38ba8;
    }
    :root:has(body[data-theme="system"]) .subnav a.active::after,
    :root:has(body[data-theme="system"]) .subnav a:hover::after {
        background: #f38ba8;
    }
    :root:has(body[data-theme="system"]) .blog-cards > a {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.done {
        background: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.ongoing,
    :root:has(body[data-theme="system"]) .learn__side-home {
        background: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .learn-stages .stage.future {
        background: #f38ba8;
    }
    :root:has(body[data-theme="system"]) .brown .is2d cg-board {
        background-image: url("data:image/svg+xml,%3Csvg%20shape-rendering%3D%22crispEdges%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cg%20id%3D%22f%22%3E%3Cg%20id%3D%22e%22%3E%3Cg%20id%3D%22d%22%3E%3Cg%20id%3D%22c%22%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h1v1H0z%22%20fill%3D%22%23a6adc8%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23a%22%20y%3D%221%22/%3E%3Cpath%20id%3D%22b%22%20d%3D%22M0%201h1v1H0z%22%20fill%3D%22%2311111b%22/%3E%3Cuse%20x%3D%221%22%20xlink%3Ahref%3D%22%23b%22%20y%3D%22-1%22/%3E%3C/g%3E%3Cuse%20x%3D%222%22%20xlink%3Ahref%3D%22%23c%22/%3E%3C/g%3E%3Cuse%20x%3D%224%22%20xlink%3Ahref%3D%22%23d%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23e%22%20y%3D%222%22/%3E%3C/g%3E%3Cuse%20xlink%3Ahref%3D%22%23f%22%20y%3D%224%22/%3E%3C/svg%3E") !important;
    }
    :root:has(body[data-theme="system"]) .orientation-white .files coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-white .ranks coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-black .files coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-black .ranks coord:nth-child(2n + 1) {
        color: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .orientation-white .files coord:nth-child(2n),
    :root:has(body[data-theme="system"]) .orientation-white .ranks coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-black .files coord:nth-child(2n + 1),
    :root:has(body[data-theme="system"]) .orientation-black .ranks coord:nth-child(2n) {
        color: #11111b;
    }
    :root:has(body[data-theme="system"]) square.move-dest {
        background: radial-gradient(rgba(137, 180, 250, 0.5) 19%, rgba(0, 0, 0, 0) 20%);
    }
    :root:has(body[data-theme="system"]) square.selected {
        background: rgba(137, 180, 250, 0.5);
    }
    :root:has(body[data-theme="system"]) square.last-move {
        background: rgba(137, 180, 250, 0.4);
    }
    :root:has(body[data-theme="system"]) .rclock .time {
        background: #181825;
        color: #cdd6f4;
    }
    :root:has(body[data-theme="system"]) .rclock.running .time {
        background: #384722;
        /* putting it back to default so that the time on the clock is readable */
    }
    :root:has(body[data-theme="system"]) .rclock .bar {
        background: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .game__meta,
    :root:has(body[data-theme="system"]) .round__app__table {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) rm6 {
        background: #181825;
    }
    :root:has(body[data-theme="system"]) rm6 .buttons,
    :root:has(body[data-theme="system"]) rm6 i5z {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .msg-app__convo__head,
    :root:has(body[data-theme="system"]) .msg-app__side__search,
    :root:has(body[data-theme="system"]) .msg-app__convo__reply {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .msg-app__side {
        background: #181825;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__search input,
    :root:has(body[data-theme="system"]) .msg-app__convo__post__text {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__contact__name {
        color: #cdd6f4;
    }
    :root:has(body[data-theme="system"]) .msg-app__side__contact__msg,
    :root:has(body[data-theme="system"]) .msg-app__side__contact__date time {
        color: #a6adc8;
    }
    :root:has(body[data-theme="system"]) #powerTip,
    :root:has(body[data-theme="system"]) #miniGame,
    :root:has(body[data-theme="system"]) #miniBoard {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .btn-rack__btn,
    :root:has(body[data-theme="system"]) .btn-rack form,
    :root:has(body[data-theme="system"]) #friend_box .friend_box_title,
    :root:has(body[data-theme="system"]) .button.button-metal,
    :root:has(body[data-theme="system"]) .button.button-empty:not(.disabled):hover,
    :root:has(body[data-theme="system"]) .button.button-empty.button-green:not(.disabled):hover,
    :root:has(body[data-theme="system"]) .button.button-empty.button-red:not(.disabled):hover {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .user-show__header,
    :root:has(body[data-theme="system"]) .user-show__social,
    :root:has(body[data-theme="system"]) .user-show .angles,
    :root:has(body[data-theme="system"]) .cmn-toggle:hover:not(:disabled) + label::after,
    :root:has(body[data-theme="system"]) .cmn-toggle + label::after,
    :root:has(body[data-theme="system"]) .crosstable povs:hover,
    :root:has(body[data-theme="system"]) .crosstable__users,
    :root:has(body[data-theme="system"]) .crosstable__score,
    :root:has(body[data-theme="system"]) .game-row:nth-child(odd),
    :root:has(body[data-theme="system"]) .number-menu--tabs .nm-item.active {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .number-menu--tabs .nm-item.active,
    :root:has(body[data-theme="system"]) .user-show .number-menu .to-games.active,
    :root:has(body[data-theme="system"]) .user-show #games.number-menu {
        background: #181825 !important;
    }
    :root:has(body[data-theme="system"]) .perf-stat .counter tr.full td:last-child {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .sub-ratings a.active {
        background: #181825;
    }
    :root:has(body[data-theme="system"]) .sub-ratings a[href]:hover {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .analyse__clock,
    :root:has(body[data-theme="system"]) #analyse-cm .title,
    :root:has(body[data-theme="system"]) .explorer__config .choices button,
    :root:has(body[data-theme="system"]) .mselect__label,
    :root:has(body[data-theme="system"]) .cmn-toggle:hover:not(:disabled) + label::after,
    :root:has(body[data-theme="system"]) .cmn-toggle + label::after,
    :root:has(body[data-theme="system"]) .crosstable povs:hover,
    :root:has(body[data-theme="system"]) .crosstable__users,
    :root:has(body[data-theme="system"]) .crosstable__score,
    :root:has(body[data-theme="system"]) .mselect__list,
    :root:has(body[data-theme="system"]) .analyse__tools .comp-off__hint,
    :root:has(body[data-theme="system"]) .ceval,
    :root:has(body[data-theme="system"]) .explorer-box tr:nth-child(even),
    :root:has(body[data-theme="system"]) .board-editor__tools .metadata,
    :root:has(body[data-theme="system"]) .mchat__content,
    :root:has(body[data-theme="system"]) .mchat__tab-active,
    :root:has(body[data-theme="system"]) .crosstable fill {
        background: #11111b !important;
    }
    :root:has(body[data-theme="system"]) .analyse__tools,
    :root:has(body[data-theme="system"]) .copyable,
    :root:has(body[data-theme="system"]) .pv_box,
    :root:has(body[data-theme="system"]) #ceval-settings {
        background: #181825;
    }
    :root:has(body[data-theme="system"]) .ceval .settings-gear.active {
        background-color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) #ceval-settings {
        border-top-color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .mchat__tab:hover {
        background: rgba(137, 180, 250, 0.5);
    }
    :root:has(body[data-theme="system"]) .opening__config,
    :root:has(body[data-theme="system"]) .opening__next {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .opening__next {
        outline-color: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .opening__next:hover {
        outline-color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .opening__next__popularity span {
        background: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .opening__next__title {
        color: #89b4fa;
    }
    :root:has(body[data-theme="system"]) .tview2-column > index {
        background: #1e1e2e;
        color: #a6adc8 !important;
    }
    :root:has(body[data-theme="system"]) .puzzle__feedback {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .puzzle__tools,
    :root:has(body[data-theme="system"]) .puzzle__side__metas,
    :root:has(body[data-theme="system"]) .puzzle__side__user,
    :root:has(body[data-theme="system"]) .puzzle__side__config,
    :root:has(body[data-theme="system"]) .puzzle__side__theme {
        background: #181825;
    }
    :root:has(body[data-theme="system"]) input,
    :root:has(body[data-theme="system"]) textarea,
    :root:has(body[data-theme="system"]) select {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .cmn-toggle:checked + label {
        background-color: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) .cmn-toggle:checked + label::before {
        color: #a6e3a1;
    }
    :root:has(body[data-theme="system"]) .slist tbody tr:nth-child(even),
    :root:has(body[data-theme="system"]) .team-show__desc,
    :root:has(body[data-theme="system"]) .team-show__forum__post:nth-child(odd) {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .account .radio input:checked + label,
    :root:has(body[data-theme="system"]) .account table.allows tr:nth-child(odd) td {
        background: #11111b;
    }
    :root:has(body[data-theme="system"]) .radio label {
        background: #1e1e2e;
    }
    :root:has(body[data-theme="system"]) .flash-warning {
        background: #fab387;
    }
    :root:has(body[data-theme="system"]) .form-control:invalid {
        border-color: #f38ba8;
    }
}

/* prettier-ignore */
`)