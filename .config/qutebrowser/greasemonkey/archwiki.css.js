// ==UserScript==
// @name    Userstyle (archwiki.css)
// @include    *wiki.archlinux.org/*
// ==/UserScript==
GM_addStyle(`@media (prefers-color-scheme: dark) {
    :root {
        color-scheme: dark;
    }
    :root ::selection {
        background-color: rgba(137, 180, 250, 0.3);
    }
    :root input::placeholder,
    :root textarea::placeholder {
        color: #a6adc8 !important;
    }
    :root #content table,
    :root #content h1,
    :root #content h2,
    :root #content h3,
    :root #content h4,
    :root #content h5,
    :root #content pre,
    :root #content code,
    :root #content tt {
        color: #cdd6f4 !important;
    }
    :root #archnavbar {
        background-color: #181825 !important;
        border-bottom-color: #89b4fa !important;
    }
    :root .mw-parser-output {
        background-color: #1e1e2e !important;
    }
    :root .mw-page-container {
        background-color: #181825 !important;
    }
    :root .vector-header-container {
        background-color: #1e1e2e !important;
    }
    :root #content a:not([role="button"], .new),
    :root header.mw-header li:not(.new) a:not([role="button"], .new),
    :root #mw-panel-toc a:not([role="button"], .new),
    :root #mw-navigation li:not(.new) a:not([role="button"], .new),
    :root #mw-panel li:not(.new) a:not([role="button"], .new),
    :root #column-one li:not(.new) a:not([role="button"], .new),
    :root #footer a:not([role="button"], .new) {
        color: #89b4fa !important;
    }
    :root .vector-feature-zebra-design-disabled,
    :root body {
        background-color: #1e1e2e;
    }
    :root #archnavbarlogo {
        background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20version%3D%221%22%20width%3D%22600%22%20height%3D%22126%22%3E%3Cpath%20d%3D%22M159.568%2034.427c-8.89-.014-16.267%201.809-19.12%202.803l-2.937%2015.857c-.007.058%2014.617-3.9%2021.059-3.667%2010.665.383%2011.646%204.076%2011.46%209.06.182.292-2.752-4.503-11.979-4.664-11.64-.2-28.069%204.122-28.046%2021.692-.314%2019.765%2014.764%2025.579%2025.032%2025.686%209.232-.168%2013.563-3.496%2015.934-5.28%203.115-3.257%206.679-6.532%2010.078-10.462-3.216%205.844-6.005%209.884-8.907%2012.977v2.611l14.033-2.361.096-38.144c-.143-5.399%203.096-26.057-26.703-26.108m-2.016%2033.21c5.817.08%2012.488%202.948%2012.497%209.849.03%206.277-7.863%209.651-12.996%209.598-5.135-.053-11.949-4.036-11.979-10.155.099-5.47%206.426-9.432%2012.478-9.291zm37.972-29.685-.095%2063.166%2016.348-3.15.027-35.814c.004-5.333%207.62-11.564%2017.178-11.464%202.028-3.67%205.84-13.05%206.77-15.183-21.351-.051-21.623%206.137-25.336%209.18-.04-5.806-.013-9.292-.013-9.292zm92.002%208.292c-.158-.074-8.526-9.788-25.35-9.864-15.758-.262-33.433%205.847-33.716%2032.27.138%2023.232%2016.979%2032.311%2033.805%2032.488%2018.007.187%2025.172-11.26%2025.602-11.543-2.149-1.863-10.196-9.837-10.196-9.837s-5.027%207.157-14.779%207.248c-9.755.093-18.234-7.54-18.354-18.189-.125-10.65%207.795-16.419%2018.427-16.885%209.205-.002%2014.516%205.943%2014.516%205.943zm20.606-30.399-15.434%203.628.115%2082.277%2015.204-2.745.172-38.72c.033-4.06%205.874-10.295%2015.626-10.097%209.325.097%2011.41%206.215%2011.384%206.988l.269%2044.824%2014.993-2.65.057-47.53c.099-4.574-10.018-14.233-26.28-14.302-7.729.012-12.009%201.762-14.187%203.052-3.726%202.879-7.985%205.637-12.17%209.157%203.869-4.97%207.117-8.407%2010.29-10.961z%22%20fill%3D%22%23cdd6f4%22%20fill-rule%3D%22evenodd%22/%3E%3Cpath%20d%3D%22m360.136%2017.218%206.962-1.742.33%2082.95-7.074%201.204zm18.928%2024.757%206.101-2.716.052%2059.478-5.892%201.217zm-1.45-21.448%204.92-4.015%204.086%204.547-4.921%204.121zm19.024%2020.365%206.962-1.421.033%2012.434c.001.534%203.823-13.89%2022.258-13.57%2017.9.1%2020.827%2013.957%2020.73%2017.064l.221%2043.725-6.102%201.324-.035-43.189c.07-1.261-2.79-11.927-15.439-11.966-12.646-.037-21.409%209.186-21.393%2015.078l.1%2038.047-7.07%201.847zm110.954%2058.546-6.962%201.42-.033-12.433c-.001-.534-3.825%2013.89-22.258%2013.57-17.9-.1-20.827-13.957-20.73-17.064l-.221-43.725%207.397-1.494.114%2043.19c.003%201.18%201.416%2012.096%2014.065%2012.135%2012.646.037%2021.506-7.616%2021.569-19.139l-.09-34.076%206.885-1.757zm13.645-59.037-4.882%203.82%2018.717%2024.494-19.963%2028.3%205.179%203.843%2018.766-26.28%2019.368%2026.902%204.791-3.82-20.757-28.765%2016.56-23.262-5.092-4.305-15.085%2021.525zM61.88%201.778c-5.385%2013.203-8.633%2021.839-14.629%2034.649%203.676%203.896%208.188%208.434%2015.516%2013.559-7.878-3.242-13.252-6.497-17.267-9.874-7.673%2016.011-19.695%2038.818-44.09%2082.65%2019.174-11.068%2034.037-17.893%2047.889-20.497a35%2035%200%200%201-.91-8.213l.023-.614c.304-12.284%206.694-21.73%2014.264-21.09%207.57.642%2013.454%2011.126%2013.15%2023.41-.058%202.312-.319%204.536-.774%206.598%2013.701%202.68%2028.405%209.487%2047.32%2020.407-3.73-6.866-7.059-13.056-10.238-18.95-5.007-3.882-10.23-8.933-20.884-14.402%207.323%201.903%2012.566%204.099%2016.653%206.552C75.58%2035.786%2072.963%2027.79%2061.88%201.778%22%20fill%3D%22%2389b4fa%22%20fill-rule%3D%22evenodd%22/%3E%3Cpath%20d%3D%22M576.771%2093.265V80.603h-4.73v-1.695h11.38v1.695h-4.75v12.662zm8.629%200V78.908h2.859l3.398%2010.166q.47%201.42.686%202.125.245-.784.764-2.301l3.437-9.99h2.556v14.357h-1.831V81.25l-4.172%2012.016h-1.714l-4.152-12.222v12.222h-1.832%22%20font-weight%3D%22400%22%20font-size%3D%228.441%22%20font-family%3D%22DejaVu%20Sans%20Mono%22%20fill%3D%22%23bac2de%22/%3E%3C/svg%3E") !important;
        background-size: 190px 40px !important;
    }
    :root .cdx-text-input__input:enabled:focus {
        border-color: #89b4fa;
        box-shadow: #89b4fa !important;
    }
    :root .archwiki-template-box-tip {
        background-color: hsla(90, 90%, 65%, 0.2) !important;
        border-color: hsla(90, 90%, 75%, 0.2);
        color: #bac2de;
    }
    :root .archwiki-template-box-note {
        background-color: hsla(208, 100%, 61%, 0.25) !important;
        border-color: hsla(208, 100%, 81%, 0.25) !important;
        color: #bac2de;
    }
    :root .archwiki-template-box-warning {
        background-color: hsla(7, 99%, 60%, 0.25) !important;
        border-color: hsla(7, 99%, 80%, 0.25) !important;
        color: #bac2de;
    }
    :root .firstHeading {
        color: #89b4fa !important;
    }
    :root #content {
        border-color: #6c7086;
    }
    :root #content pre:not([class*="CodeMirror"]),
    :root #content code,
    :root #content tt {
        background-color: #313244;
        color: #cdd6f4;
        border-color: #6c7086;
    }
    :root .vector-pinned-container {
        border-color: #6c7086 !important;
    }
    :root .vector-pinnable-header-label {
        color: #cdd6f4;
    }
    :root .vector-pinnable-header-toggle-button,
    :root .vector-pinnable-header-unpin-button {
        color: #89b4fa;
    }
    :root .wikitable {
        background-color: #1e1e2e;
    }
    :root .wikitable > tr > th,
    :root .wikitable > tr > td,
    :root .wikitable > * > tr > th,
    :root .wikitable > * > tr > td {
        color: #cdd6f4;
        border-color: #11111b;
    }
    :root .wikitable > tr > th,
    :root .wikitable > * > tr > th {
        background-color: #181825;
        color: #cdd6f4;
    }
    :root .pre {
        color: #181825;
    }
    :root .mw-headline {
        color: #cdd6f4;
    }
    :root .plainlinks,
    :root .archwiki-template-man,
    :root .external text {
        color: #2e3c53;
    }
    :root .cdx-button:enabled.cdx-button--weight-quiet,
    :root .cdx-button.cdx-button--fake-button--enabled,
    :root .cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet,
    :root .diff-context,
    :root .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle,
    :root .oo-ui-checkboxInputWidget [type="checkbox"] + span {
        background-color: #313244;
        color: #cdd6f4;
        border-color: #585b70;
    }
    :root .vector-feature-zebra-design-disabled,
    :root #contentSub:not(:empty) {
        color: #313244 !important;
    }
    :root .mw-editfont-monospace {
        background-color: #313244;
        color: #cdd6f4;
        border-color: #45475a;
    }
    :root .diff-deletedline,
    :root .mw-message-box-warning {
        background-color: #f9e2af;
        color: #181825;
    }
    :root .diff-addedline {
        background-color: #89dceb;
        color: #181825;
    }
    :root .mw-message-box-error {
        background-color: #f2cdcd;
        border-color: #f38ba8;
        color: #1e1e2e;
    }
    :root .mw-number-text {
        color: #cdd6f4;
    }
    :root .cdx-checkbox__icon {
        background-color: #313244;
    }
    :root .oo-ui-checkboxInputWidget.oo-ui-widget-enabled [type="checkbox"]:checked + span,
    :root .cdx-checkbox__input:enabled:checked + .cdx-checkbox__icon,
    :root .cdx-button:enabled.cdx-button--weight-primary.cdx-button--action-progressive {
        background-color: #89b4fa;
        border-color: #74c7ec;
        color: #181825 !important;
    }
    :root .vector-feature-zebra-design-disabled,
    :root #vector-toc-pinned-container,
    :root .vector-toc::after {
        background: linear-gradient(rgba(255, 255, 255, 0), #1e1e2e) !important;
    }
    :root #archnavbar ul li.anb-selected a {
        color: #89b4fa !important;
    }
    :root .archwiki-template-message {
        background-color: #1e1e2e;
    }
    :root .catlinks {
        background-color: #181825;
    }
    :root .mw-parser-output p {
        color: #cdd6f4 !important;
    }
    :root .archwiki-template-meta-related-articles {
        background-color: #313244;
    }
    :root .archwiki-template-meta-related-articles p {
        color: #cdd6f4;
        border-bottom-color: #89b4fa;
    }
    :root .archwiki-template-meta-related-articles ul li a {
        color: #89b4fa important;
    }
    :root .mw-plusminus-neg,
    :root a.new {
        color: #f38ba8 !important;
    }
    :root .mw-plusminus-pos {
        color: #a6e3a1;
    }
    :root .mw-plusminus-null {
        color: #a6adc8;
    }
    :root .oo-ui-textInputWidget .oo-ui-inputWidget-input,
    :root .mw-widget-dateInputWidget-handle,
    :root .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
    :root #pagehistory li.selected {
        background-color: #313244 !important;
        color: #cdd6f4 !important;
        border-color: #585b70 !important;
    }
    :root .oo-ui-menuSelectWidget {
        background-color: #313244;
        border-color: #585b70;
    }
    :root .oo-ui-OptionWidget-highlighted {
        background-color: #6c7086 !important;
    }
    :root .oo-ui-menuOptionWidget.oo-ui-widget-enabled.oo-ui-optionWidget,
    :root .minoredit,
    :root .comment {
        color: #cdd6f4;
    }
    :root .mw-footer-container {
        color: #cdd6f4 !important;
    }
    :root #archnavbarlist li a {
        color: #89b4fa !important;
    }
    :root .anb-selected {
        color: #bac2de !important;
    }
    :root .mw-footer li {
        color: #cdd6f4;
    }
    :root .vector-main-menu,
    :root .vector-pinnable-element {
        background-color: #1e1e2e !important;
    }
    :root #p-navigation ul li a {
        color: #89b4fa !important;
    }
    :root .archwiki-template-box-note a {
        color: #89b4fa !important;
    }
    :root .archwiki-template-box-note a:visited {
        color: #cba6f7 !important;
    }
    :root .mw-page-title-main {
        color: #cdd6f4;
    }
    :root .vector-tab-noicon mw-list-item a {
        color: #89b4fa;
    }
    :root .mw-footer li a {
        color: #89b4fa;
    }
    :root .mw-body {
        background-color: #1e1e2e !important;
        color: #cdd6f4;
    }
    :root .cdx-text-input__input:enabled {
        background-color: #313244 !important;
        color: #cdd6f4 !important;
        border-color: #45475a;
    }
    :root .cdx-button:enabled,
    :root .cdx-button.cdxbutton--fake-button--enabled {
        color: #181825;
        background-color: #89b4fa;
        border-color: #1e1e2e;
    }
    :root .cdx-menu {
        background-color: #313244;
    }
    :root .cdx-menu:hover {
        background-color: #1e1e2e !important;
    }
    :root .anb-home {
        color: #cdd6f4 !important;
    }
    :root .vector-dropdown-content {
        background-color: #1e1e2e !important;
    }
    :root .mw-headline::before {
        color: #89b4fa !important;
    }
}
@media (prefers-color-scheme: dark) and screen {
    :root html.client-darkmode {
        background-color: #1e1e2e;
    }
}
@media (prefers-color-scheme: light) {
    :root {
        color-scheme: dark;
    }
    :root ::selection {
        background-color: rgba(30, 102, 245, 0.3);
    }
    :root input::placeholder,
    :root textarea::placeholder {
        color: #6c6f85 !important;
    }
    :root #content table,
    :root #content h1,
    :root #content h2,
    :root #content h3,
    :root #content h4,
    :root #content h5,
    :root #content pre,
    :root #content code,
    :root #content tt {
        color: #4c4f69 !important;
    }
    :root #archnavbar {
        background-color: #e6e9ef !important;
        border-bottom-color: #1e66f5 !important;
    }
    :root .mw-parser-output {
        background-color: #eff1f5 !important;
    }
    :root .mw-page-container {
        background-color: #e6e9ef !important;
    }
    :root .vector-header-container {
        background-color: #eff1f5 !important;
    }
    :root #content a:not([role="button"], .new),
    :root header.mw-header li:not(.new) a:not([role="button"], .new),
    :root #mw-panel-toc a:not([role="button"], .new),
    :root #mw-navigation li:not(.new) a:not([role="button"], .new),
    :root #mw-panel li:not(.new) a:not([role="button"], .new),
    :root #column-one li:not(.new) a:not([role="button"], .new),
    :root #footer a:not([role="button"], .new) {
        color: #1e66f5 !important;
    }
    :root .vector-feature-zebra-design-disabled,
    :root body {
        background-color: #eff1f5;
    }
    :root #archnavbarlogo {
        background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20version%3D%221%22%20width%3D%22600%22%20height%3D%22126%22%3E%3Cpath%20d%3D%22M159.568%2034.427c-8.89-.014-16.267%201.809-19.12%202.803l-2.937%2015.857c-.007.058%2014.617-3.9%2021.059-3.667%2010.665.383%2011.646%204.076%2011.46%209.06.182.292-2.752-4.503-11.979-4.664-11.64-.2-28.069%204.122-28.046%2021.692-.314%2019.765%2014.764%2025.579%2025.032%2025.686%209.232-.168%2013.563-3.496%2015.934-5.28%203.115-3.257%206.679-6.532%2010.078-10.462-3.216%205.844-6.005%209.884-8.907%2012.977v2.611l14.033-2.361.096-38.144c-.143-5.399%203.096-26.057-26.703-26.108m-2.016%2033.21c5.817.08%2012.488%202.948%2012.497%209.849.03%206.277-7.863%209.651-12.996%209.598-5.135-.053-11.949-4.036-11.979-10.155.099-5.47%206.426-9.432%2012.478-9.291zm37.972-29.685-.095%2063.166%2016.348-3.15.027-35.814c.004-5.333%207.62-11.564%2017.178-11.464%202.028-3.67%205.84-13.05%206.77-15.183-21.351-.051-21.623%206.137-25.336%209.18-.04-5.806-.013-9.292-.013-9.292zm92.002%208.292c-.158-.074-8.526-9.788-25.35-9.864-15.758-.262-33.433%205.847-33.716%2032.27.138%2023.232%2016.979%2032.311%2033.805%2032.488%2018.007.187%2025.172-11.26%2025.602-11.543-2.149-1.863-10.196-9.837-10.196-9.837s-5.027%207.157-14.779%207.248c-9.755.093-18.234-7.54-18.354-18.189-.125-10.65%207.795-16.419%2018.427-16.885%209.205-.002%2014.516%205.943%2014.516%205.943zm20.606-30.399-15.434%203.628.115%2082.277%2015.204-2.745.172-38.72c.033-4.06%205.874-10.295%2015.626-10.097%209.325.097%2011.41%206.215%2011.384%206.988l.269%2044.824%2014.993-2.65.057-47.53c.099-4.574-10.018-14.233-26.28-14.302-7.729.012-12.009%201.762-14.187%203.052-3.726%202.879-7.985%205.637-12.17%209.157%203.869-4.97%207.117-8.407%2010.29-10.961z%22%20fill%3D%22%234c4f69%22%20fill-rule%3D%22evenodd%22/%3E%3Cpath%20d%3D%22m360.136%2017.218%206.962-1.742.33%2082.95-7.074%201.204zm18.928%2024.757%206.101-2.716.052%2059.478-5.892%201.217zm-1.45-21.448%204.92-4.015%204.086%204.547-4.921%204.121zm19.024%2020.365%206.962-1.421.033%2012.434c.001.534%203.823-13.89%2022.258-13.57%2017.9.1%2020.827%2013.957%2020.73%2017.064l.221%2043.725-6.102%201.324-.035-43.189c.07-1.261-2.79-11.927-15.439-11.966-12.646-.037-21.409%209.186-21.393%2015.078l.1%2038.047-7.07%201.847zm110.954%2058.546-6.962%201.42-.033-12.433c-.001-.534-3.825%2013.89-22.258%2013.57-17.9-.1-20.827-13.957-20.73-17.064l-.221-43.725%207.397-1.494.114%2043.19c.003%201.18%201.416%2012.096%2014.065%2012.135%2012.646.037%2021.506-7.616%2021.569-19.139l-.09-34.076%206.885-1.757zm13.645-59.037-4.882%203.82%2018.717%2024.494-19.963%2028.3%205.179%203.843%2018.766-26.28%2019.368%2026.902%204.791-3.82-20.757-28.765%2016.56-23.262-5.092-4.305-15.085%2021.525zM61.88%201.778c-5.385%2013.203-8.633%2021.839-14.629%2034.649%203.676%203.896%208.188%208.434%2015.516%2013.559-7.878-3.242-13.252-6.497-17.267-9.874-7.673%2016.011-19.695%2038.818-44.09%2082.65%2019.174-11.068%2034.037-17.893%2047.889-20.497a35%2035%200%200%201-.91-8.213l.023-.614c.304-12.284%206.694-21.73%2014.264-21.09%207.57.642%2013.454%2011.126%2013.15%2023.41-.058%202.312-.319%204.536-.774%206.598%2013.701%202.68%2028.405%209.487%2047.32%2020.407-3.73-6.866-7.059-13.056-10.238-18.95-5.007-3.882-10.23-8.933-20.884-14.402%207.323%201.903%2012.566%204.099%2016.653%206.552C75.58%2035.786%2072.963%2027.79%2061.88%201.778%22%20fill%3D%22%231e66f5%22%20fill-rule%3D%22evenodd%22/%3E%3Cpath%20d%3D%22M576.771%2093.265V80.603h-4.73v-1.695h11.38v1.695h-4.75v12.662zm8.629%200V78.908h2.859l3.398%2010.166q.47%201.42.686%202.125.245-.784.764-2.301l3.437-9.99h2.556v14.357h-1.831V81.25l-4.172%2012.016h-1.714l-4.152-12.222v12.222h-1.832%22%20font-weight%3D%22400%22%20font-size%3D%228.441%22%20font-family%3D%22DejaVu%20Sans%20Mono%22%20fill%3D%22%235c5f77%22/%3E%3C/svg%3E") !important;
        background-size: 190px 40px !important;
    }
    :root .cdx-text-input__input:enabled:focus {
        border-color: #1e66f5;
        box-shadow: #1e66f5 !important;
    }
    :root .archwiki-template-box-tip {
        background-color: hsla(90, 90%, 65%, 0.2) !important;
        border-color: hsla(90, 90%, 75%, 0.2);
        color: #5c5f77;
    }
    :root .archwiki-template-box-note {
        background-color: hsla(208, 100%, 61%, 0.25) !important;
        border-color: hsla(208, 100%, 81%, 0.25) !important;
        color: #5c5f77;
    }
    :root .archwiki-template-box-warning {
        background-color: hsla(7, 99%, 60%, 0.25) !important;
        border-color: hsla(7, 99%, 80%, 0.25) !important;
        color: #5c5f77;
    }
    :root .firstHeading {
        color: #1e66f5 !important;
    }
    :root #content {
        border-color: #9ca0b0;
    }
    :root #content pre:not([class*="CodeMirror"]),
    :root #content code,
    :root #content tt {
        background-color: #ccd0da;
        color: #4c4f69;
        border-color: #9ca0b0;
    }
    :root .vector-pinned-container {
        border-color: #9ca0b0 !important;
    }
    :root .vector-pinnable-header-label {
        color: #4c4f69;
    }
    :root .vector-pinnable-header-toggle-button,
    :root .vector-pinnable-header-unpin-button {
        color: #1e66f5;
    }
    :root .wikitable {
        background-color: #eff1f5;
    }
    :root .wikitable > tr > th,
    :root .wikitable > tr > td,
    :root .wikitable > * > tr > th,
    :root .wikitable > * > tr > td {
        color: #4c4f69;
        border-color: #dce0e8;
    }
    :root .wikitable > tr > th,
    :root .wikitable > * > tr > th {
        background-color: #e6e9ef;
        color: #4c4f69;
    }
    :root .pre {
        color: #e6e9ef;
    }
    :root .mw-headline {
        color: #4c4f69;
    }
    :root .plainlinks,
    :root .archwiki-template-man,
    :root .external text {
        color: #0a2252;
    }
    :root .cdx-button:enabled.cdx-button--weight-quiet,
    :root .cdx-button.cdx-button--fake-button--enabled,
    :root .cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet,
    :root .diff-context,
    :root .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle,
    :root .oo-ui-checkboxInputWidget [type="checkbox"] + span {
        background-color: #ccd0da;
        color: #4c4f69;
        border-color: #acb0be;
    }
    :root .vector-feature-zebra-design-disabled,
    :root #contentSub:not(:empty) {
        color: #ccd0da !important;
    }
    :root .mw-editfont-monospace {
        background-color: #ccd0da;
        color: #4c4f69;
        border-color: #bcc0cc;
    }
    :root .diff-deletedline,
    :root .mw-message-box-warning {
        background-color: #df8e1d;
        color: #e6e9ef;
    }
    :root .diff-addedline {
        background-color: #04a5e5;
        color: #e6e9ef;
    }
    :root .mw-message-box-error {
        background-color: #dd7878;
        border-color: #d20f39;
        color: #eff1f5;
    }
    :root .mw-number-text {
        color: #4c4f69;
    }
    :root .cdx-checkbox__icon {
        background-color: #ccd0da;
    }
    :root .oo-ui-checkboxInputWidget.oo-ui-widget-enabled [type="checkbox"]:checked + span,
    :root .cdx-checkbox__input:enabled:checked + .cdx-checkbox__icon,
    :root .cdx-button:enabled.cdx-button--weight-primary.cdx-button--action-progressive {
        background-color: #1e66f5;
        border-color: #209fb5;
        color: #e6e9ef !important;
    }
    :root .vector-feature-zebra-design-disabled,
    :root #vector-toc-pinned-container,
    :root .vector-toc::after {
        background: linear-gradient(rgba(255, 255, 255, 0), #eff1f5) !important;
    }
    :root #archnavbar ul li.anb-selected a {
        color: #1e66f5 !important;
    }
    :root .archwiki-template-message {
        background-color: #eff1f5;
    }
    :root .catlinks {
        background-color: #e6e9ef;
    }
    :root .mw-parser-output p {
        color: #4c4f69 !important;
    }
    :root .archwiki-template-meta-related-articles {
        background-color: #ccd0da;
    }
    :root .archwiki-template-meta-related-articles p {
        color: #4c4f69;
        border-bottom-color: #1e66f5;
    }
    :root .archwiki-template-meta-related-articles ul li a {
        color: #1e66f5 important;
    }
    :root .mw-plusminus-neg,
    :root a.new {
        color: #d20f39 !important;
    }
    :root .mw-plusminus-pos {
        color: #40a02b;
    }
    :root .mw-plusminus-null {
        color: #6c6f85;
    }
    :root .oo-ui-textInputWidget .oo-ui-inputWidget-input,
    :root .mw-widget-dateInputWidget-handle,
    :root .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
    :root #pagehistory li.selected {
        background-color: #ccd0da !important;
        color: #4c4f69 !important;
        border-color: #acb0be !important;
    }
    :root .oo-ui-menuSelectWidget {
        background-color: #ccd0da;
        border-color: #acb0be;
    }
    :root .oo-ui-OptionWidget-highlighted {
        background-color: #9ca0b0 !important;
    }
    :root .oo-ui-menuOptionWidget.oo-ui-widget-enabled.oo-ui-optionWidget,
    :root .minoredit,
    :root .comment {
        color: #4c4f69;
    }
    :root .mw-footer-container {
        color: #4c4f69 !important;
    }
    :root #archnavbarlist li a {
        color: #1e66f5 !important;
    }
    :root .anb-selected {
        color: #5c5f77 !important;
    }
    :root .mw-footer li {
        color: #4c4f69;
    }
    :root .vector-main-menu,
    :root .vector-pinnable-element {
        background-color: #eff1f5 !important;
    }
    :root #p-navigation ul li a {
        color: #1e66f5 !important;
    }
    :root .archwiki-template-box-note a {
        color: #1e66f5 !important;
    }
    :root .archwiki-template-box-note a:visited {
        color: #8839ef !important;
    }
    :root .mw-page-title-main {
        color: #4c4f69;
    }
    :root .vector-tab-noicon mw-list-item a {
        color: #1e66f5;
    }
    :root .mw-footer li a {
        color: #1e66f5;
    }
    :root .mw-body {
        background-color: #eff1f5 !important;
        color: #4c4f69;
    }
    :root .cdx-text-input__input:enabled {
        background-color: #ccd0da !important;
        color: #4c4f69 !important;
        border-color: #bcc0cc;
    }
    :root .cdx-button:enabled,
    :root .cdx-button.cdxbutton--fake-button--enabled {
        color: #e6e9ef;
        background-color: #1e66f5;
        border-color: #eff1f5;
    }
    :root .cdx-menu {
        background-color: #ccd0da;
    }
    :root .cdx-menu:hover {
        background-color: #eff1f5 !important;
    }
    :root .anb-home {
        color: #4c4f69 !important;
    }
    :root .vector-dropdown-content {
        background-color: #eff1f5 !important;
    }
    :root .mw-headline::before {
        color: #1e66f5 !important;
    }
}
@media (prefers-color-scheme: light) and screen {
    :root html.client-darkmode {
        background-color: #eff1f5;
    }
}

/* prettier-ignore */
`)