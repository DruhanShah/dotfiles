// ==UserScript==
// @name    Userstyle (github.css)
// @include    *github.com/*
// ==/UserScript==
GM_addStyle(`@media (prefers-color-scheme: light) {
    [data-color-mode="auto"][data-light-theme="light"] {
        color-scheme: dark;
        accent-color: #1e66f5;
        color: #4c4f69;
        --color-social-reaction-bg-reacted-hover: rgba(30, 102, 245, 0.3);
        --color-notifications-button-hover-bg: rgba(30, 102, 245, 0.6);
        --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
        --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
        --color-calendar-halloween-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-halloween-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-halloween-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-halloween-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-winter-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-winter-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-winter-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-winter-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-graph-day-bg: #ccd0da !important;
        --color-calendar-graph-day-border: transparent !important;
        --color-calendar-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-graph-day-L2-border: transparent !important;
        --color-calendar-graph-day-L3-border: transparent !important;
        --color-calendar-graph-day-L4-border: transparent !important;
        --color-user-mention-fg: #1e66f5;
        --color-user-mention-bg: rgba(30, 102, 245, 0.3);
        --color-dashboard-feed-bg: var(--color-scale-gray-9);
        --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
        --color-marketing-icon-secondary: var(--color-scale-blue-5);
        --color-project-header-bg: var(--color-scale-gray-9);
        --color-project-sidebar-bg: var(--color-scale-gray-8);
        --color-project-gradient-in: var(--color-scale-gray-8);
        --color-project-gradient-out: rgba(22, 27, 34, 0);
        --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
        --topicTag-borderColor: #0000;
        --highlight-neutral-bgColor: rgba(223, 142, 29, 0.3);
        --page-header-bgColor: #dce0e8;
        --diffBlob-addition-fgColor-text: #4c4f69;
        --diffBlob-addition-fgColor-num: #4c4f69;
        --diffBlob-addition-bgColor-num: rgba(64, 160, 43, 0.3);
        --diffBlob-addition-bgColor-line: rgba(64, 160, 43, 0.15);
        --diffBlob-addition-bgColor-word: rgba(64, 160, 43, 0.3);
        --diffBlob-deletion-fgColor-text: #4c4f69;
        --diffBlob-deletion-fgColor-num: #4c4f69;
        --diffBlob-deletion-bgColor-num: rgba(210, 15, 57, 0.3);
        --diffBlob-deletion-bgColor-line: rgba(210, 15, 57, 0.15);
        --diffBlob-deletion-bgColor-word: rgba(210, 15, 57, 0.3);
        --diffBlob-hunk-bgColor-num: rgba(30, 102, 245, 0.4);
        --diffBlob-expander-iconColor: #848d97;
        --codeMirror-fgColor: #4c4f69;
        --codeMirror-bgColor: #eff1f5;
        --codeMirror-gutters-bgColor: #eff1f5;
        --codeMirror-gutterMarker-fgColor-default: #eff1f5;
        --codeMirror-gutterMarker-fgColor-muted: #9ca0b0;
        --codeMirror-lineNumber-fgColor: #5c5f77;
        --codeMirror-cursor-fgColor: #4c4f69;
        --codeMirror-selection-bgColor: #388bfd66;
        --codeMirror-activeline-bgColor: #6e768166;
        --codeMirror-matchingBracket-fgColor: #4c4f69;
        --codeMirror-lines-bgColor: #eff1f5;
        --codeMirror-syntax-fgColor-comment: #9ca0b0;
        --codeMirror-syntax-fgColor-constant: #1e66f5;
        --codeMirror-syntax-fgColor-entity: #1e66f5;
        --codeMirror-syntax-fgColor-keyword: #ea76cb;
        --codeMirror-syntax-fgColor-storage: #fe640b;
        --codeMirror-syntax-fgColor-string: #40a02b;
        --codeMirror-syntax-fgColor-support: #79c0ff;
        --codeMirror-syntax-fgColor-variable: #fe640b;
        --header-fgColor-default: #4c4f69;
        --header-fgColor-logo: #4c4f69;
        --header-bgColor: #dce0e8;
        --header-borderColor-divider: #8b949e;
        --headerSearch-bgColor: #e6e9ef;
        --headerSearch-borderColor: #ccd0da;
        --avatar-bgColor: rgba(76, 79, 105, 0.26);
        --avatar-borderColor: #ccd0da;
        --avatar-shadow: 0px 0px 0px 2px #0d1117;
        --avatarStack-fade-bgColor-default: #bcc0cc;
        --avatarStack-fade-bgColor-muted: #21262d;
        --control-bgColor-rest: #d20f39;
        --control-bgColor-hover: #292e36;
        --control-bgColor-active: #bcc0cc;
        --control-bgColor-disabled: rgba(230, 233, 239, 0.6);
        --control-bgColor-selected: #161b22;
        --control-fgColor-rest: #4c4f69;
        --control-fgColor-placeholder: #484f58;
        --control-fgColor-disabled: rgba(108, 111, 133, 0.7);
        --control-borderColor-rest: #bcc0cc;
        --control-borderColor-emphasis: #666e79;
        --control-borderColor-disabled: rgba(188, 192, 204, 0.75);
        --control-borderColor-selected: #f0f6fc;
        --control-borderColor-success: #40a02b;
        --control-borderColor-danger: #d20f39;
        --control-borderColor-warning: #df8e1d;
        --control-iconColor-rest: #848d97;
        --control-transparent-bgColor-rest: #0000;
        --control-transparent-bgColor-hover: rgba(172, 176, 190, 0.2);
        --control-transparent-bgColor-active: rgba(156, 160, 176, 0.5);
        --control-transparent-bgColor-disabled: #21262db3;
        --control-transparent-bgColor-selected: #b1bac414;
        --control-transparent-borderColor-rest: #0000;
        --control-transparent-borderColor-hover: #0000;
        --control-transparent-borderColor-active: #0000;
        --control-danger-fgColor-rest: #d20f39;
        --control-danger-fgColor-hover: #dce0e8;
        --control-danger-bgColor-hover: rgba(210, 15, 57, 0.8);
        --control-danger-bgColor-active: #d20f39;
        --control-checked-bgColor-rest: #1e66f5;
        --control-checked-bgColor-hover: #3677f6;
        --control-checked-bgColor-active: #3677f6;
        --control-checked-bgColor-disabled: #6e7681;
        --control-checked-fgColor-rest: #dce0e8;
        --control-checked-fgColor-disabled: #010409;
        --control-checked-borderColor-rest: #1e66f5;
        --control-checked-borderColor-hover: #1e66f5;
        --control-checked-borderColor-active: #1e66f5;
        --control-checked-borderColor-disabled: #ccd0da;
        --controlTrack-bgColor-rest: #ccd0da;
        --controlTrack-bgColor-hover: #bcc0cc;
        --controlTrack-bgColor-active: #acb0be;
        --controlTrack-bgColor-disabled: #6e7681;
        --controlTrack-fgColor-rest: #848d97;
        --controlTrack-fgColor-disabled: #4c4f69;
        --controlTrack-borderColor-rest: #0000;
        --controlTrack-borderColor-disabled: #6e7681;
        --controlKnob-bgColor-rest: #eff1f5;
        --controlKnob-bgColor-disabled: #21262db3;
        --controlKnob-bgColor-checked: #4c4f69;
        --controlKnob-borderColor-rest: #acb0be;
        --controlKnob-borderColor-disabled: #21262db3;
        --controlKnob-borderColor-checked: #1e66f5;
        --button-default-fgColor-rest: #4c4f69;
        --button-default-bgColor-rest: #ccd0da;
        --button-default-bgColor-hover: #bcc0cc;
        --button-default-bgColor-active: #acb0be;
        --button-default-bgColor-selected: #acb0be;
        --button-default-bgColor-disabled: rgba(204, 208, 218, 0.7);
        --button-default-borderColor-rest: #bcc0cc;
        --button-default-borderColor-hover: #bcc0cc;
        --button-default-borderColor-active: #bcc0cc;
        --button-default-borderColor-disabled: rgba(204, 208, 218, 0.7);
        --button-default-shadow-resting: 0px 0px 0px 0px #000;
        --button-primary-fgColor-rest: #eff1f5;
        --button-primary-fgColor-disabled: rgba(239, 241, 245, 0.6);
        --button-primary-iconColor-rest: #eff1f5;
        --button-primary-bgColor-rest: #40a02b;
        --button-primary-bgColor-hover: #48b430;
        --button-primary-bgColor-active: #3da526;
        --button-primary-bgColor-disabled: rgba(64, 160, 43, 0.7);
        --button-primary-borderColor-rest: #40a02b;
        --button-primary-borderColor-hover: #40a02b;
        --button-primary-borderColor-active: #40a02b;
        --button-primary-borderColor-disabled: rgba(64, 160, 43, 0.7);
        --button-primary-shadow-selected: 0px 0px 0px 0px #000;
        --button-invisible-fgColor-rest: #1e66f5;
        --button-invisible-fgColor-hover: #4f87f7;
        --button-invisible-fgColor-disabled: #6e7681;
        --button-invisible-iconColor-rest: #7c7f93;
        --button-invisible-iconColor-hover: #e6edf3;
        --button-invisible-iconColor-disabled: #6e7681;
        --button-invisible-bgColor-rest: #0000;
        --button-invisible-bgColor-hover: #b1bac41f;
        --button-invisible-bgColor-active: #b1bac433;
        --button-invisible-bgColor-disabled: rgba(188, 192, 204, 0.7);
        --button-invisible-borderColor-rest: #0000;
        --button-invisible-borderColor-hover: #0000;
        --button-invisible-borderColor-disabled: rgba(188, 192, 204, 0.7);
        --button-outline-fgColor-rest: #388bfd;
        --button-outline-fgColor-hover: #58a6ff;
        --button-outline-fgColor-active: #4c4f69;
        --button-outline-fgColor-disabled: #4493f880;
        --button-outline-bgColor-rest: #f0f6fc;
        --button-outline-bgColor-hover: #bcc0cc;
        --button-outline-bgColor-active: #0d419d;
        --button-outline-bgColor-disabled: #0d1117;
        --button-outline-borderColor-hover: #f0f6fc1a;
        --button-outline-borderColor-selected: #f0f6fc1a;
        --button-outline-shadow-selected: 0px 0px 0px 0px #000;
        --button-danger-fgColor-rest: #d20f39;
        --button-danger-fgColor-hover: #eff1f5;
        --button-danger-fgColor-active: #eff1f5;
        --button-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
        --button-danger-iconColor-rest: #d20f39;
        --button-danger-iconColor-hover: #dce0e8;
        --button-danger-bgColor-rest: #ccd0da;
        --button-danger-bgColor-hover: #d20f39;
        --button-danger-bgColor-active: #ba0d33;
        --button-danger-bgColor-disabled: #eff1f5;
        --button-danger-borderColor-rest: #bcc0cc;
        --button-danger-borderColor-hover: #d20f39;
        --button-danger-borderColor-active: #ba0d33;
        --button-danger-shadow-selected: 0px 0px 0px 0px #000;
        --button-inactive-fgColor: #8b949e;
        --button-inactive-bgColor: #21262d;
        --button-star-iconColor: #df8e1d;
        --buttonCounter-default-bgColor-rest: #bcc0cc;
        --buttonCounter-invisible-bgColor-rest: #bcc0cc;
        --buttonCounter-primary-bgColor-rest: #04260f33;
        --buttonCounter-outline-bgColor-rest: #051d4d33;
        --buttonCounter-outline-bgColor-hover: #051d4d33;
        --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
        --buttonCounter-outline-fgColor-rest: #388bfd;
        --buttonCounter-outline-fgColor-hover: #58a6ff;
        --buttonCounter-outline-fgColor-disabled: #4493f880;
        --buttonCounter-danger-bgColor-hover: rgba(76, 79, 105, 0.2);
        --buttonCounter-danger-bgColor-disabled: #da36330d;
        --buttonCounter-danger-bgColor-rest: #49020233;
        --buttonCounter-danger-fgColor-rest: #d20f39;
        --buttonCounter-danger-fgColor-hover: #4c4f69;
        --buttonCounter-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
        --focus-outlineColor: #1e66f5;
        --menu-bgColor-active: #e6e9ef;
        --overlay-bgColor: #eff1f5;
        --overlay-borderColor: #ccd0da;
        --overlay-backdrop-bgColor: #161b2266;
        --selectMenu-borderColor: #484f58;
        --selectMenu-bgColor-active: #0c2d6b;
        --sideNav-bgColor-selected: #21262d;
        --skeletonLoader-bgColor: #161b22;
        --timelineBadge-bgColor: #e6e9ef;
        --treeViewItem-leadingVisual-iconColor-rest: #848d97;
        --underlineNav-borderColor-active: #1e66f5;
        --underlineNav-borderColor-hover: #6e768166;
        --underlineNav-iconColor-rest: #848d97;
        --selection-bgColor: rgba(30, 102, 245, 0.3);
        --reactionButton-selected-bgColor-rest: rgba(30, 102, 245, 0.2);
        --reactionButton-selected-bgColor-hover: rgba(30, 102, 245, 0.35);
        --reactionButton-selected-fgColor-rest: #1e66f5;
        --reactionButton-selected-fgColor-hover: #1e66f5;
        --fgColor-default: #4c4f69;
        --fgColor-muted: #5c5f77;
        --fgColor-onEmphasis: #eff1f5;
        --fgColor-white: #4c4f69;
        --fgColor-disabled: #acb0be;
        --fgColor-link: #1e66f5;
        --fgColor-neutral: #6e7681;
        --fgColor-accent: #1e66f5;
        --fgColor-success: #40a02b;
        --fgColor-attention: #df8e1d;
        --fgColor-severe: #fe640b;
        --fgColor-danger: #d20f39;
        --fgColor-open: #40a02b;
        --fgColor-closed: #d20f39;
        --fgColor-done: #8839ef;
        --fgColor-sponsors: #ea76cb;
        --bgColor-default: #eff1f5;
        --bgColor-muted: #e6e9ef;
        --bgColor-inset: #dce0e8;
        --bgColor-emphasis: #7c7f93;
        --bgColor-inverse: #4c4f69;
        --bgColor-disabled: #21262db3;
        --bgColor-transparent: #0000;
        --bgColor-neutral-muted: rgba(204, 208, 218, 0.4);
        --bgColor-neutral-emphasis: #6c6f85;
        --bgColor-accent-muted: rgba(30, 102, 245, 0.2);
        --bgColor-accent-emphasis: #1e66f5;
        --bgColor-success-muted: #2ea04326;
        --bgColor-success-emphasis: #40a02b;
        --bgColor-attention-muted: rgba(223, 142, 29, 0.15);
        --bgColor-attention-emphasis: #df8e1d;
        --bgColor-severe-muted: rgba(254, 100, 11, 0.26);
        --bgColor-severe-emphasis: #fe640b;
        --bgColor-danger-muted: rgba(210, 15, 57, 0.26);
        --bgColor-danger-emphasis: #d20f39;
        --bgColor-open-muted: #2ea0431a;
        --bgColor-open-emphasis: #40a02b;
        --bgColor-closed-muted: rgba(210, 15, 57, 0.15);
        --bgColor-closed-emphasis: #d20f39;
        --bgColor-done-muted: #a371f726;
        --bgColor-done-emphasis: #8839ef;
        --bgColor-sponsors-muted: #db61a21a;
        --bgColor-sponsors-emphasis: #ea76cb;
        --borderColor-default: #bcc0cc;
        --borderColor-muted: #ccd0da;
        --borderColor-emphasis: #484f58;
        --borderColor-disabled: #21262db3;
        --borderColor-transparent: #0000;
        --borderColor-neutral-muted: #6e768166;
        --borderColor-neutral-emphasis: #6e7681;
        --borderColor-accent-muted: rgba(30, 102, 245, 0.5);
        --borderColor-accent-emphasis: #1e66f5;
        --borderColor-success-muted: #388c26;
        --borderColor-success-emphasis: #40a02b;
        --borderColor-attention-muted: rgba(221, 120, 120, 0.3);
        --borderColor-attention-emphasis: #dd7878;
        --borderColor-severe-muted: #fe640b;
        --borderColor-severe-emphasis: #bd561d;
        --borderColor-danger-muted: #d20f39;
        --borderColor-danger-emphasis: #d20f39;
        --borderColor-open-muted: #388c26;
        --borderColor-open-emphasis: #40a02b;
        --borderColor-closed-muted: #d20f39;
        --borderColor-closed-emphasis: #d20f39;
        --borderColor-done-muted: #7287fd;
        --borderColor-done-emphasis: #8839ef;
        --borderColor-sponsors-muted: #db61a266;
        --borderColor-sponsors-emphasis: #ea76cb;
        --color-ansi-black: #bcc0cc;
        --color-ansi-black-bright: #acb0be;
        --color-ansi-gray: #acb0be;
        --color-ansi-white: #5c5f77;
        --color-ansi-white-bright: #6c6f85;
        --color-ansi-red: #d20f39;
        --color-ansi-red-bright: #d20f39;
        --color-ansi-green: #40a02b;
        --color-ansi-green-bright: #40a02b;
        --color-ansi-yellow: #df8e1d;
        --color-ansi-yellow-bright: #df8e1d;
        --color-ansi-blue: #1e66f5;
        --color-ansi-blue-bright: #1e66f5;
        --color-ansi-magenta: #ea76cb;
        --color-ansi-magenta-bright: #ea76cb;
        --color-ansi-cyan: #179299;
        --color-ansi-cyan-bright: #179299;
        --color-prettylights-syntax-comment: #8c8fa1;
        --color-prettylights-syntax-constant: #1e66f5;
        --color-prettylights-syntax-entity: #1e66f5;
        --color-prettylights-syntax-storage-modifier-import: #fe640b;
        --color-prettylights-syntax-entity-tag: #179299;
        --color-prettylights-syntax-keyword: #ea76cb;
        --color-prettylights-syntax-string: #40a02b;
        --color-prettylights-syntax-variable: #fe640b;
        --color-prettylights-syntax-invalid-illegal-text: #d20f39;
        --color-prettylights-syntax-invalid-illegal-bg: rgba(210, 15, 57, 0.15);
        --color-prettylights-syntax-markup-heading: #179299;
        --color-prettylights-syntax-markup-italic: #df8e1d;
        --color-prettylights-syntax-markup-bold: #df8e1d;
        --color-prettylights-syntax-markup-deleted-text: #4c4f69;
        --color-prettylights-syntax-markup-deleted-bg: rgba(210, 15, 57, 0.4);
        --color-prettylights-syntax-markup-inserted-text: #4c4f69;
        --color-prettylights-syntax-markup-inserted-bg: rgba(64, 160, 43, 0.4);
        --color-prettylights-syntax-markup-changed-text: #4c4f69;
        --color-prettylights-syntax-markup-changed-bg: rgba(223, 142, 29, 0.4);
        --color-prettylights-syntax-markup-ignored-text: #4c4f69;
        --bgColor-white: #eff1f5;
        --color-scale-white: #eff1f5;
        --color-scale-gray-3: #7c7f93;
        --color-scale-gray-5: #9ca0b0;
        --color-scale-gray-6: #bcc0cc;
        --color-scale-gray-7: #bcc0cc;
        --color-scale-blue-2: #04a5e5;
        --color-scale-blue-5: #1e66f5;
        --color-scale-green-3: #40a02b;
        --color-scale-green-4: #40a02b;
        --color-scale-yellow-3: #fe640b;
        --color-scale-orange-4: #fe640b;
        --color-scale-red-4: #d20f39;
        --shadow-inset: inset 0px 1px 0px 0px #dce0e8;
        --shadow-resting-xsmall: 0px 1px 0px 0px #dce0e8;
        --shadow-resting-small: 0px 1px 0px 0px #dce0e8, 0px 1px 3px 0px #dce0e8;
        --shadow-resting-medium: 0px 3px 6px 0px #dce0e8;
        --shadow-floating-small: 0px 0px 0px 1px #eff1f5, 0px 6px 12px -3px #dce0e8,
        0px 6px 18px 0px #dce0e8;
        --shadow-floating-medium: 0px 0px 0px 1px #ccd0da,
        0px 8px 16px -4px #dce0e8, 0px 4px 32px -4px #dce0e8,
        0px 24px 48px -12px #dce0e8, 0px 48px 96px -24px #dce0e8;
        --shadow-floating-large: 0px 0px 0px 1px #ccd0da,
        0px 24px 48px 0px #010409;
        --shadow-floating-xlarge: 0px 0px 0px 1px #ccd0da,
        0px 32px 64px 0px #010409;
        --shadow-floating-legacy: 0px 6px 12px -3px #dce0e8, 0px 6px 18px 0px #dce0e8;
        --outline-focus: #1e66f5 solid 2px;
        /* Header when logged out */
    }
    [data-color-mode="auto"][data-light-theme="light"] ::selection {
        background-color: rgba(30, 102, 245, 0.3);
    }
    [data-color-mode="auto"][data-light-theme="light"] input::placeholder,
    [data-color-mode="auto"][data-light-theme="light"] textarea::placeholder {
        color: #6c6f85 !important;
    }
    [data-color-mode="auto"][data-light-theme="light"] .cm-placeholder {
        color: #6c6f85;
    }
    [data-color-mode="auto"][data-light-theme="light"] .turbo-progress-bar {
        background-color: #1e66f5;
    }
    [data-color-mode="auto"][data-light-theme="light"] .form-select {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%236c6f85%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
    }
    [data-color-mode="auto"][data-light-theme="light"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
        content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
    }
    [data-color-mode="auto"][data-light-theme="light"] .HeaderMenu-link {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-light-theme="light"] .HeaderMenu-link:hover {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-light-theme="light"] .header-search-button.placeholder {
        color: #6c6f85;
    }
    [data-color-mode="auto"][data-light-theme="light"] .HeaderMenu-toggle-bar {
        background-color: #4c4f69;
    }
    [data-color-mode="auto"][data-light-theme="light"] .notification-indicator .mail-status {
        background-image: linear-gradient(#1e66f5, #0b57ef);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-r {
        color: var(--color-ansi-red);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-y {
        color: var(--color-ansi-yellow);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-g {
        color: var(--color-ansi-green);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-b {
        color: var(--color-ansi-blue);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-c {
        color: var(--color-ansi-cyan);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-m {
        color: var(--color-ansi-magenta);
    }
    [data-color-mode="auto"][data-light-theme="light"] .CheckStep .ansifg-gr {
        color: var(--color-ansi-gray);
    }
    [data-color-mode="auto"][data-light-theme="light"] .js-activity-overview-graph .js-highlight-blob {
        fill: #1e66f5;
        stroke: #1e66f5;
    }
    [data-color-mode="auto"][data-light-theme="dark"] {
        color-scheme: dark;
        accent-color: #89b4fa;
        color: #cdd6f4;
        --color-social-reaction-bg-reacted-hover: rgba(137, 180, 250, 0.3);
        --color-notifications-button-hover-bg: rgba(137, 180, 250, 0.6);
        --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
        --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
        --color-calendar-halloween-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-halloween-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-halloween-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-halloween-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-winter-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-winter-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-winter-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-winter-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-graph-day-bg: #313244 !important;
        --color-calendar-graph-day-border: transparent !important;
        --color-calendar-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-graph-day-L2-border: transparent !important;
        --color-calendar-graph-day-L3-border: transparent !important;
        --color-calendar-graph-day-L4-border: transparent !important;
        --color-user-mention-fg: #89b4fa;
        --color-user-mention-bg: rgba(137, 180, 250, 0.3);
        --color-dashboard-feed-bg: var(--color-scale-gray-9);
        --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
        --color-marketing-icon-secondary: var(--color-scale-blue-5);
        --color-project-header-bg: var(--color-scale-gray-9);
        --color-project-sidebar-bg: var(--color-scale-gray-8);
        --color-project-gradient-in: var(--color-scale-gray-8);
        --color-project-gradient-out: rgba(22, 27, 34, 0);
        --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
        --topicTag-borderColor: #0000;
        --highlight-neutral-bgColor: rgba(249, 226, 175, 0.3);
        --page-header-bgColor: #11111b;
        --diffBlob-addition-fgColor-text: #cdd6f4;
        --diffBlob-addition-fgColor-num: #cdd6f4;
        --diffBlob-addition-bgColor-num: rgba(166, 227, 161, 0.3);
        --diffBlob-addition-bgColor-line: rgba(166, 227, 161, 0.15);
        --diffBlob-addition-bgColor-word: rgba(166, 227, 161, 0.3);
        --diffBlob-deletion-fgColor-text: #cdd6f4;
        --diffBlob-deletion-fgColor-num: #cdd6f4;
        --diffBlob-deletion-bgColor-num: rgba(243, 139, 168, 0.3);
        --diffBlob-deletion-bgColor-line: rgba(243, 139, 168, 0.15);
        --diffBlob-deletion-bgColor-word: rgba(243, 139, 168, 0.3);
        --diffBlob-hunk-bgColor-num: rgba(137, 180, 250, 0.4);
        --diffBlob-expander-iconColor: #848d97;
        --codeMirror-fgColor: #cdd6f4;
        --codeMirror-bgColor: #1e1e2e;
        --codeMirror-gutters-bgColor: #1e1e2e;
        --codeMirror-gutterMarker-fgColor-default: #1e1e2e;
        --codeMirror-gutterMarker-fgColor-muted: #6c7086;
        --codeMirror-lineNumber-fgColor: #bac2de;
        --codeMirror-cursor-fgColor: #cdd6f4;
        --codeMirror-selection-bgColor: #388bfd66;
        --codeMirror-activeline-bgColor: #6e768166;
        --codeMirror-matchingBracket-fgColor: #cdd6f4;
        --codeMirror-lines-bgColor: #1e1e2e;
        --codeMirror-syntax-fgColor-comment: #6c7086;
        --codeMirror-syntax-fgColor-constant: #89b4fa;
        --codeMirror-syntax-fgColor-entity: #89b4fa;
        --codeMirror-syntax-fgColor-keyword: #f5c2e7;
        --codeMirror-syntax-fgColor-storage: #fab387;
        --codeMirror-syntax-fgColor-string: #a6e3a1;
        --codeMirror-syntax-fgColor-support: #79c0ff;
        --codeMirror-syntax-fgColor-variable: #fab387;
        --header-fgColor-default: #cdd6f4;
        --header-fgColor-logo: #cdd6f4;
        --header-bgColor: #11111b;
        --header-borderColor-divider: #8b949e;
        --headerSearch-bgColor: #181825;
        --headerSearch-borderColor: #313244;
        --avatar-bgColor: rgba(205, 214, 244, 0.26);
        --avatar-borderColor: #313244;
        --avatar-shadow: 0px 0px 0px 2px #0d1117;
        --avatarStack-fade-bgColor-default: #45475a;
        --avatarStack-fade-bgColor-muted: #21262d;
        --control-bgColor-rest: #f38ba8;
        --control-bgColor-hover: #292e36;
        --control-bgColor-active: #45475a;
        --control-bgColor-disabled: rgba(24, 24, 37, 0.6);
        --control-bgColor-selected: #161b22;
        --control-fgColor-rest: #cdd6f4;
        --control-fgColor-placeholder: #484f58;
        --control-fgColor-disabled: rgba(166, 173, 200, 0.7);
        --control-borderColor-rest: #45475a;
        --control-borderColor-emphasis: #666e79;
        --control-borderColor-disabled: rgba(69, 71, 90, 0.75);
        --control-borderColor-selected: #f0f6fc;
        --control-borderColor-success: #a6e3a1;
        --control-borderColor-danger: #f38ba8;
        --control-borderColor-warning: #f9e2af;
        --control-iconColor-rest: #848d97;
        --control-transparent-bgColor-rest: #0000;
        --control-transparent-bgColor-hover: rgba(88, 91, 112, 0.2);
        --control-transparent-bgColor-active: rgba(108, 112, 134, 0.5);
        --control-transparent-bgColor-disabled: #21262db3;
        --control-transparent-bgColor-selected: #b1bac414;
        --control-transparent-borderColor-rest: #0000;
        --control-transparent-borderColor-hover: #0000;
        --control-transparent-borderColor-active: #0000;
        --control-danger-fgColor-rest: #f38ba8;
        --control-danger-fgColor-hover: #11111b;
        --control-danger-bgColor-hover: rgba(243, 139, 168, 0.8);
        --control-danger-bgColor-active: #f38ba8;
        --control-checked-bgColor-rest: #89b4fa;
        --control-checked-bgColor-hover: #a1c4fb;
        --control-checked-bgColor-active: #a1c4fb;
        --control-checked-bgColor-disabled: #6e7681;
        --control-checked-fgColor-rest: #11111b;
        --control-checked-fgColor-disabled: #010409;
        --control-checked-borderColor-rest: #89b4fa;
        --control-checked-borderColor-hover: #89b4fa;
        --control-checked-borderColor-active: #89b4fa;
        --control-checked-borderColor-disabled: #313244;
        --controlTrack-bgColor-rest: #313244;
        --controlTrack-bgColor-hover: #45475a;
        --controlTrack-bgColor-active: #585b70;
        --controlTrack-bgColor-disabled: #6e7681;
        --controlTrack-fgColor-rest: #848d97;
        --controlTrack-fgColor-disabled: #cdd6f4;
        --controlTrack-borderColor-rest: #0000;
        --controlTrack-borderColor-disabled: #6e7681;
        --controlKnob-bgColor-rest: #1e1e2e;
        --controlKnob-bgColor-disabled: #21262db3;
        --controlKnob-bgColor-checked: #cdd6f4;
        --controlKnob-borderColor-rest: #585b70;
        --controlKnob-borderColor-disabled: #21262db3;
        --controlKnob-borderColor-checked: #89b4fa;
        --button-default-fgColor-rest: #cdd6f4;
        --button-default-bgColor-rest: #313244;
        --button-default-bgColor-hover: #45475a;
        --button-default-bgColor-active: #585b70;
        --button-default-bgColor-selected: #585b70;
        --button-default-bgColor-disabled: rgba(49, 50, 68, 0.7);
        --button-default-borderColor-rest: #45475a;
        --button-default-borderColor-hover: #45475a;
        --button-default-borderColor-active: #45475a;
        --button-default-borderColor-disabled: rgba(49, 50, 68, 0.7);
        --button-default-shadow-resting: 0px 0px 0px 0px #000;
        --button-primary-fgColor-rest: #1e1e2e;
        --button-primary-fgColor-disabled: rgba(30, 30, 46, 0.6);
        --button-primary-iconColor-rest: #1e1e2e;
        --button-primary-bgColor-rest: #a6e3a1;
        --button-primary-bgColor-hover: #b9e9b5;
        --button-primary-bgColor-active: #a3e69e;
        --button-primary-bgColor-disabled: rgba(166, 227, 161, 0.7);
        --button-primary-borderColor-rest: #a6e3a1;
        --button-primary-borderColor-hover: #a6e3a1;
        --button-primary-borderColor-active: #a6e3a1;
        --button-primary-borderColor-disabled: rgba(166, 227, 161, 0.7);
        --button-primary-shadow-selected: 0px 0px 0px 0px #000;
        --button-invisible-fgColor-rest: #89b4fa;
        --button-invisible-fgColor-hover: #bad3fc;
        --button-invisible-fgColor-disabled: #6e7681;
        --button-invisible-iconColor-rest: #9399b2;
        --button-invisible-iconColor-hover: #e6edf3;
        --button-invisible-iconColor-disabled: #6e7681;
        --button-invisible-bgColor-rest: #0000;
        --button-invisible-bgColor-hover: #b1bac41f;
        --button-invisible-bgColor-active: #b1bac433;
        --button-invisible-bgColor-disabled: rgba(69, 71, 90, 0.7);
        --button-invisible-borderColor-rest: #0000;
        --button-invisible-borderColor-hover: #0000;
        --button-invisible-borderColor-disabled: rgba(69, 71, 90, 0.7);
        --button-outline-fgColor-rest: #388bfd;
        --button-outline-fgColor-hover: #58a6ff;
        --button-outline-fgColor-active: #cdd6f4;
        --button-outline-fgColor-disabled: #4493f880;
        --button-outline-bgColor-rest: #f0f6fc;
        --button-outline-bgColor-hover: #45475a;
        --button-outline-bgColor-active: #0d419d;
        --button-outline-bgColor-disabled: #0d1117;
        --button-outline-borderColor-hover: #f0f6fc1a;
        --button-outline-borderColor-selected: #f0f6fc1a;
        --button-outline-shadow-selected: 0px 0px 0px 0px #000;
        --button-danger-fgColor-rest: #f38ba8;
        --button-danger-fgColor-hover: #1e1e2e;
        --button-danger-fgColor-active: #1e1e2e;
        --button-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
        --button-danger-iconColor-rest: #f38ba8;
        --button-danger-iconColor-hover: #11111b;
        --button-danger-bgColor-rest: #313244;
        --button-danger-bgColor-hover: #f38ba8;
        --button-danger-bgColor-active: #f17497;
        --button-danger-bgColor-disabled: #1e1e2e;
        --button-danger-borderColor-rest: #45475a;
        --button-danger-borderColor-hover: #f38ba8;
        --button-danger-borderColor-active: #f17497;
        --button-danger-shadow-selected: 0px 0px 0px 0px #000;
        --button-inactive-fgColor: #8b949e;
        --button-inactive-bgColor: #21262d;
        --button-star-iconColor: #f9e2af;
        --buttonCounter-default-bgColor-rest: #45475a;
        --buttonCounter-invisible-bgColor-rest: #45475a;
        --buttonCounter-primary-bgColor-rest: #04260f33;
        --buttonCounter-outline-bgColor-rest: #051d4d33;
        --buttonCounter-outline-bgColor-hover: #051d4d33;
        --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
        --buttonCounter-outline-fgColor-rest: #388bfd;
        --buttonCounter-outline-fgColor-hover: #58a6ff;
        --buttonCounter-outline-fgColor-disabled: #4493f880;
        --buttonCounter-danger-bgColor-hover: rgba(205, 214, 244, 0.2);
        --buttonCounter-danger-bgColor-disabled: #da36330d;
        --buttonCounter-danger-bgColor-rest: #49020233;
        --buttonCounter-danger-fgColor-rest: #f38ba8;
        --buttonCounter-danger-fgColor-hover: #cdd6f4;
        --buttonCounter-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
        --focus-outlineColor: #89b4fa;
        --menu-bgColor-active: #181825;
        --overlay-bgColor: #1e1e2e;
        --overlay-borderColor: #313244;
        --overlay-backdrop-bgColor: #161b2266;
        --selectMenu-borderColor: #484f58;
        --selectMenu-bgColor-active: #0c2d6b;
        --sideNav-bgColor-selected: #21262d;
        --skeletonLoader-bgColor: #161b22;
        --timelineBadge-bgColor: #181825;
        --treeViewItem-leadingVisual-iconColor-rest: #848d97;
        --underlineNav-borderColor-active: #89b4fa;
        --underlineNav-borderColor-hover: #6e768166;
        --underlineNav-iconColor-rest: #848d97;
        --selection-bgColor: rgba(137, 180, 250, 0.3);
        --reactionButton-selected-bgColor-rest: rgba(137, 180, 250, 0.2);
        --reactionButton-selected-bgColor-hover: rgba(137, 180, 250, 0.35);
        --reactionButton-selected-fgColor-rest: #89b4fa;
        --reactionButton-selected-fgColor-hover: #89b4fa;
        --fgColor-default: #cdd6f4;
        --fgColor-muted: #bac2de;
        --fgColor-onEmphasis: #1e1e2e;
        --fgColor-white: #cdd6f4;
        --fgColor-disabled: #585b70;
        --fgColor-link: #89b4fa;
        --fgColor-neutral: #6e7681;
        --fgColor-accent: #89b4fa;
        --fgColor-success: #a6e3a1;
        --fgColor-attention: #f9e2af;
        --fgColor-severe: #fab387;
        --fgColor-danger: #f38ba8;
        --fgColor-open: #a6e3a1;
        --fgColor-closed: #f38ba8;
        --fgColor-done: #cba6f7;
        --fgColor-sponsors: #f5c2e7;
        --bgColor-default: #1e1e2e;
        --bgColor-muted: #181825;
        --bgColor-inset: #11111b;
        --bgColor-emphasis: #9399b2;
        --bgColor-inverse: #cdd6f4;
        --bgColor-disabled: #21262db3;
        --bgColor-transparent: #0000;
        --bgColor-neutral-muted: rgba(49, 50, 68, 0.4);
        --bgColor-neutral-emphasis: #a6adc8;
        --bgColor-accent-muted: rgba(137, 180, 250, 0.2);
        --bgColor-accent-emphasis: #89b4fa;
        --bgColor-success-muted: #2ea04326;
        --bgColor-success-emphasis: #a6e3a1;
        --bgColor-attention-muted: rgba(249, 226, 175, 0.15);
        --bgColor-attention-emphasis: #f9e2af;
        --bgColor-severe-muted: rgba(250, 179, 135, 0.26);
        --bgColor-severe-emphasis: #fab387;
        --bgColor-danger-muted: rgba(243, 139, 168, 0.26);
        --bgColor-danger-emphasis: #f38ba8;
        --bgColor-open-muted: #2ea0431a;
        --bgColor-open-emphasis: #a6e3a1;
        --bgColor-closed-muted: rgba(243, 139, 168, 0.15);
        --bgColor-closed-emphasis: #f38ba8;
        --bgColor-done-muted: #a371f726;
        --bgColor-done-emphasis: #cba6f7;
        --bgColor-sponsors-muted: #db61a21a;
        --bgColor-sponsors-emphasis: #f5c2e7;
        --borderColor-default: #45475a;
        --borderColor-muted: #313244;
        --borderColor-emphasis: #484f58;
        --borderColor-disabled: #21262db3;
        --borderColor-transparent: #0000;
        --borderColor-neutral-muted: #6e768166;
        --borderColor-neutral-emphasis: #6e7681;
        --borderColor-accent-muted: rgba(137, 180, 250, 0.5);
        --borderColor-accent-emphasis: #89b4fa;
        --borderColor-success-muted: #93dd8d;
        --borderColor-success-emphasis: #a6e3a1;
        --borderColor-attention-muted: rgba(242, 205, 205, 0.3);
        --borderColor-attention-emphasis: #f2cdcd;
        --borderColor-severe-muted: #fab387;
        --borderColor-severe-emphasis: #bd561d;
        --borderColor-danger-muted: #f38ba8;
        --borderColor-danger-emphasis: #f38ba8;
        --borderColor-open-muted: #93dd8d;
        --borderColor-open-emphasis: #a6e3a1;
        --borderColor-closed-muted: #f38ba8;
        --borderColor-closed-emphasis: #f38ba8;
        --borderColor-done-muted: #b4befe;
        --borderColor-done-emphasis: #cba6f7;
        --borderColor-sponsors-muted: #db61a266;
        --borderColor-sponsors-emphasis: #f5c2e7;
        --color-ansi-black: #45475a;
        --color-ansi-black-bright: #585b70;
        --color-ansi-gray: #585b70;
        --color-ansi-white: #bac2de;
        --color-ansi-white-bright: #a6adc8;
        --color-ansi-red: #f38ba8;
        --color-ansi-red-bright: #f38ba8;
        --color-ansi-green: #a6e3a1;
        --color-ansi-green-bright: #a6e3a1;
        --color-ansi-yellow: #f9e2af;
        --color-ansi-yellow-bright: #f9e2af;
        --color-ansi-blue: #89b4fa;
        --color-ansi-blue-bright: #89b4fa;
        --color-ansi-magenta: #f5c2e7;
        --color-ansi-magenta-bright: #f5c2e7;
        --color-ansi-cyan: #94e2d5;
        --color-ansi-cyan-bright: #94e2d5;
        --color-prettylights-syntax-comment: #7f849c;
        --color-prettylights-syntax-constant: #89b4fa;
        --color-prettylights-syntax-entity: #89b4fa;
        --color-prettylights-syntax-storage-modifier-import: #fab387;
        --color-prettylights-syntax-entity-tag: #94e2d5;
        --color-prettylights-syntax-keyword: #f5c2e7;
        --color-prettylights-syntax-string: #a6e3a1;
        --color-prettylights-syntax-variable: #fab387;
        --color-prettylights-syntax-invalid-illegal-text: #f38ba8;
        --color-prettylights-syntax-invalid-illegal-bg: rgba(243, 139, 168, 0.15);
        --color-prettylights-syntax-markup-heading: #94e2d5;
        --color-prettylights-syntax-markup-italic: #f9e2af;
        --color-prettylights-syntax-markup-bold: #f9e2af;
        --color-prettylights-syntax-markup-deleted-text: #cdd6f4;
        --color-prettylights-syntax-markup-deleted-bg: rgba(243, 139, 168, 0.4);
        --color-prettylights-syntax-markup-inserted-text: #cdd6f4;
        --color-prettylights-syntax-markup-inserted-bg: rgba(166, 227, 161, 0.4);
        --color-prettylights-syntax-markup-changed-text: #cdd6f4;
        --color-prettylights-syntax-markup-changed-bg: rgba(249, 226, 175, 0.4);
        --color-prettylights-syntax-markup-ignored-text: #cdd6f4;
        --bgColor-white: #1e1e2e;
        --color-scale-white: #1e1e2e;
        --color-scale-gray-3: #9399b2;
        --color-scale-gray-5: #6c7086;
        --color-scale-gray-6: #45475a;
        --color-scale-gray-7: #45475a;
        --color-scale-blue-2: #89dceb;
        --color-scale-blue-5: #89b4fa;
        --color-scale-green-3: #a6e3a1;
        --color-scale-green-4: #a6e3a1;
        --color-scale-yellow-3: #fab387;
        --color-scale-orange-4: #fab387;
        --color-scale-red-4: #f38ba8;
        --shadow-inset: inset 0px 1px 0px 0px #11111b;
        --shadow-resting-xsmall: 0px 1px 0px 0px #11111b;
        --shadow-resting-small: 0px 1px 0px 0px #11111b, 0px 1px 3px 0px #11111b;
        --shadow-resting-medium: 0px 3px 6px 0px #11111b;
        --shadow-floating-small: 0px 0px 0px 1px #1e1e2e, 0px 6px 12px -3px #11111b,
        0px 6px 18px 0px #11111b;
        --shadow-floating-medium: 0px 0px 0px 1px #313244,
        0px 8px 16px -4px #11111b, 0px 4px 32px -4px #11111b,
        0px 24px 48px -12px #11111b, 0px 48px 96px -24px #11111b;
        --shadow-floating-large: 0px 0px 0px 1px #313244,
        0px 24px 48px 0px #010409;
        --shadow-floating-xlarge: 0px 0px 0px 1px #313244,
        0px 32px 64px 0px #010409;
        --shadow-floating-legacy: 0px 6px 12px -3px #11111b, 0px 6px 18px 0px #11111b;
        --outline-focus: #89b4fa solid 2px;
        /* Header when logged out */
    }
    [data-color-mode="auto"][data-light-theme="dark"] ::selection {
        background-color: rgba(137, 180, 250, 0.3);
    }
    [data-color-mode="auto"][data-light-theme="dark"] input::placeholder,
    [data-color-mode="auto"][data-light-theme="dark"] textarea::placeholder {
        color: #a6adc8 !important;
    }
    [data-color-mode="auto"][data-light-theme="dark"] .cm-placeholder {
        color: #a6adc8;
    }
    [data-color-mode="auto"][data-light-theme="dark"] .turbo-progress-bar {
        background-color: #89b4fa;
    }
    [data-color-mode="auto"][data-light-theme="dark"] .form-select {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%23a6adc8%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
    }
    [data-color-mode="auto"][data-light-theme="dark"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
        content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
    }
    [data-color-mode="auto"][data-light-theme="dark"] .HeaderMenu-link {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .HeaderMenu-link:hover {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .header-search-button.placeholder {
        color: #a6adc8;
    }
    [data-color-mode="auto"][data-light-theme="dark"] .HeaderMenu-toggle-bar {
        background-color: #cdd6f4;
    }
    [data-color-mode="auto"][data-light-theme="dark"] .notification-indicator .mail-status {
        background-image: linear-gradient(#89b4fa, #71a4f9);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-r {
        color: var(--color-ansi-red);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-y {
        color: var(--color-ansi-yellow);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-g {
        color: var(--color-ansi-green);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-b {
        color: var(--color-ansi-blue);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-c {
        color: var(--color-ansi-cyan);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-m {
        color: var(--color-ansi-magenta);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .CheckStep .ansifg-gr {
        color: var(--color-ansi-gray);
    }
    [data-color-mode="auto"][data-light-theme="dark"] .js-activity-overview-graph .js-highlight-blob {
        fill: #89b4fa;
        stroke: #89b4fa;
    }
}
@media (prefers-color-scheme: dark) {
    [data-color-mode="auto"][data-dark-theme="light"] {
        color-scheme: dark;
        accent-color: #1e66f5;
        color: #4c4f69;
        --color-social-reaction-bg-reacted-hover: rgba(30, 102, 245, 0.3);
        --color-notifications-button-hover-bg: rgba(30, 102, 245, 0.6);
        --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
        --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
        --color-calendar-halloween-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-halloween-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-halloween-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-halloween-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-winter-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-winter-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-winter-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-winter-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-graph-day-bg: #ccd0da !important;
        --color-calendar-graph-day-border: transparent !important;
        --color-calendar-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
        --color-calendar-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
        --color-calendar-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
        --color-calendar-graph-day-L4-bg: #1e66f5 !important;
        --color-calendar-graph-day-L2-border: transparent !important;
        --color-calendar-graph-day-L3-border: transparent !important;
        --color-calendar-graph-day-L4-border: transparent !important;
        --color-user-mention-fg: #1e66f5;
        --color-user-mention-bg: rgba(30, 102, 245, 0.3);
        --color-dashboard-feed-bg: var(--color-scale-gray-9);
        --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
        --color-marketing-icon-secondary: var(--color-scale-blue-5);
        --color-project-header-bg: var(--color-scale-gray-9);
        --color-project-sidebar-bg: var(--color-scale-gray-8);
        --color-project-gradient-in: var(--color-scale-gray-8);
        --color-project-gradient-out: rgba(22, 27, 34, 0);
        --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
        --topicTag-borderColor: #0000;
        --highlight-neutral-bgColor: rgba(223, 142, 29, 0.3);
        --page-header-bgColor: #dce0e8;
        --diffBlob-addition-fgColor-text: #4c4f69;
        --diffBlob-addition-fgColor-num: #4c4f69;
        --diffBlob-addition-bgColor-num: rgba(64, 160, 43, 0.3);
        --diffBlob-addition-bgColor-line: rgba(64, 160, 43, 0.15);
        --diffBlob-addition-bgColor-word: rgba(64, 160, 43, 0.3);
        --diffBlob-deletion-fgColor-text: #4c4f69;
        --diffBlob-deletion-fgColor-num: #4c4f69;
        --diffBlob-deletion-bgColor-num: rgba(210, 15, 57, 0.3);
        --diffBlob-deletion-bgColor-line: rgba(210, 15, 57, 0.15);
        --diffBlob-deletion-bgColor-word: rgba(210, 15, 57, 0.3);
        --diffBlob-hunk-bgColor-num: rgba(30, 102, 245, 0.4);
        --diffBlob-expander-iconColor: #848d97;
        --codeMirror-fgColor: #4c4f69;
        --codeMirror-bgColor: #eff1f5;
        --codeMirror-gutters-bgColor: #eff1f5;
        --codeMirror-gutterMarker-fgColor-default: #eff1f5;
        --codeMirror-gutterMarker-fgColor-muted: #9ca0b0;
        --codeMirror-lineNumber-fgColor: #5c5f77;
        --codeMirror-cursor-fgColor: #4c4f69;
        --codeMirror-selection-bgColor: #388bfd66;
        --codeMirror-activeline-bgColor: #6e768166;
        --codeMirror-matchingBracket-fgColor: #4c4f69;
        --codeMirror-lines-bgColor: #eff1f5;
        --codeMirror-syntax-fgColor-comment: #9ca0b0;
        --codeMirror-syntax-fgColor-constant: #1e66f5;
        --codeMirror-syntax-fgColor-entity: #1e66f5;
        --codeMirror-syntax-fgColor-keyword: #ea76cb;
        --codeMirror-syntax-fgColor-storage: #fe640b;
        --codeMirror-syntax-fgColor-string: #40a02b;
        --codeMirror-syntax-fgColor-support: #79c0ff;
        --codeMirror-syntax-fgColor-variable: #fe640b;
        --header-fgColor-default: #4c4f69;
        --header-fgColor-logo: #4c4f69;
        --header-bgColor: #dce0e8;
        --header-borderColor-divider: #8b949e;
        --headerSearch-bgColor: #e6e9ef;
        --headerSearch-borderColor: #ccd0da;
        --avatar-bgColor: rgba(76, 79, 105, 0.26);
        --avatar-borderColor: #ccd0da;
        --avatar-shadow: 0px 0px 0px 2px #0d1117;
        --avatarStack-fade-bgColor-default: #bcc0cc;
        --avatarStack-fade-bgColor-muted: #21262d;
        --control-bgColor-rest: #d20f39;
        --control-bgColor-hover: #292e36;
        --control-bgColor-active: #bcc0cc;
        --control-bgColor-disabled: rgba(230, 233, 239, 0.6);
        --control-bgColor-selected: #161b22;
        --control-fgColor-rest: #4c4f69;
        --control-fgColor-placeholder: #484f58;
        --control-fgColor-disabled: rgba(108, 111, 133, 0.7);
        --control-borderColor-rest: #bcc0cc;
        --control-borderColor-emphasis: #666e79;
        --control-borderColor-disabled: rgba(188, 192, 204, 0.75);
        --control-borderColor-selected: #f0f6fc;
        --control-borderColor-success: #40a02b;
        --control-borderColor-danger: #d20f39;
        --control-borderColor-warning: #df8e1d;
        --control-iconColor-rest: #848d97;
        --control-transparent-bgColor-rest: #0000;
        --control-transparent-bgColor-hover: rgba(172, 176, 190, 0.2);
        --control-transparent-bgColor-active: rgba(156, 160, 176, 0.5);
        --control-transparent-bgColor-disabled: #21262db3;
        --control-transparent-bgColor-selected: #b1bac414;
        --control-transparent-borderColor-rest: #0000;
        --control-transparent-borderColor-hover: #0000;
        --control-transparent-borderColor-active: #0000;
        --control-danger-fgColor-rest: #d20f39;
        --control-danger-fgColor-hover: #dce0e8;
        --control-danger-bgColor-hover: rgba(210, 15, 57, 0.8);
        --control-danger-bgColor-active: #d20f39;
        --control-checked-bgColor-rest: #1e66f5;
        --control-checked-bgColor-hover: #3677f6;
        --control-checked-bgColor-active: #3677f6;
        --control-checked-bgColor-disabled: #6e7681;
        --control-checked-fgColor-rest: #dce0e8;
        --control-checked-fgColor-disabled: #010409;
        --control-checked-borderColor-rest: #1e66f5;
        --control-checked-borderColor-hover: #1e66f5;
        --control-checked-borderColor-active: #1e66f5;
        --control-checked-borderColor-disabled: #ccd0da;
        --controlTrack-bgColor-rest: #ccd0da;
        --controlTrack-bgColor-hover: #bcc0cc;
        --controlTrack-bgColor-active: #acb0be;
        --controlTrack-bgColor-disabled: #6e7681;
        --controlTrack-fgColor-rest: #848d97;
        --controlTrack-fgColor-disabled: #4c4f69;
        --controlTrack-borderColor-rest: #0000;
        --controlTrack-borderColor-disabled: #6e7681;
        --controlKnob-bgColor-rest: #eff1f5;
        --controlKnob-bgColor-disabled: #21262db3;
        --controlKnob-bgColor-checked: #4c4f69;
        --controlKnob-borderColor-rest: #acb0be;
        --controlKnob-borderColor-disabled: #21262db3;
        --controlKnob-borderColor-checked: #1e66f5;
        --button-default-fgColor-rest: #4c4f69;
        --button-default-bgColor-rest: #ccd0da;
        --button-default-bgColor-hover: #bcc0cc;
        --button-default-bgColor-active: #acb0be;
        --button-default-bgColor-selected: #acb0be;
        --button-default-bgColor-disabled: rgba(204, 208, 218, 0.7);
        --button-default-borderColor-rest: #bcc0cc;
        --button-default-borderColor-hover: #bcc0cc;
        --button-default-borderColor-active: #bcc0cc;
        --button-default-borderColor-disabled: rgba(204, 208, 218, 0.7);
        --button-default-shadow-resting: 0px 0px 0px 0px #000;
        --button-primary-fgColor-rest: #eff1f5;
        --button-primary-fgColor-disabled: rgba(239, 241, 245, 0.6);
        --button-primary-iconColor-rest: #eff1f5;
        --button-primary-bgColor-rest: #40a02b;
        --button-primary-bgColor-hover: #48b430;
        --button-primary-bgColor-active: #3da526;
        --button-primary-bgColor-disabled: rgba(64, 160, 43, 0.7);
        --button-primary-borderColor-rest: #40a02b;
        --button-primary-borderColor-hover: #40a02b;
        --button-primary-borderColor-active: #40a02b;
        --button-primary-borderColor-disabled: rgba(64, 160, 43, 0.7);
        --button-primary-shadow-selected: 0px 0px 0px 0px #000;
        --button-invisible-fgColor-rest: #1e66f5;
        --button-invisible-fgColor-hover: #4f87f7;
        --button-invisible-fgColor-disabled: #6e7681;
        --button-invisible-iconColor-rest: #7c7f93;
        --button-invisible-iconColor-hover: #e6edf3;
        --button-invisible-iconColor-disabled: #6e7681;
        --button-invisible-bgColor-rest: #0000;
        --button-invisible-bgColor-hover: #b1bac41f;
        --button-invisible-bgColor-active: #b1bac433;
        --button-invisible-bgColor-disabled: rgba(188, 192, 204, 0.7);
        --button-invisible-borderColor-rest: #0000;
        --button-invisible-borderColor-hover: #0000;
        --button-invisible-borderColor-disabled: rgba(188, 192, 204, 0.7);
        --button-outline-fgColor-rest: #388bfd;
        --button-outline-fgColor-hover: #58a6ff;
        --button-outline-fgColor-active: #4c4f69;
        --button-outline-fgColor-disabled: #4493f880;
        --button-outline-bgColor-rest: #f0f6fc;
        --button-outline-bgColor-hover: #bcc0cc;
        --button-outline-bgColor-active: #0d419d;
        --button-outline-bgColor-disabled: #0d1117;
        --button-outline-borderColor-hover: #f0f6fc1a;
        --button-outline-borderColor-selected: #f0f6fc1a;
        --button-outline-shadow-selected: 0px 0px 0px 0px #000;
        --button-danger-fgColor-rest: #d20f39;
        --button-danger-fgColor-hover: #eff1f5;
        --button-danger-fgColor-active: #eff1f5;
        --button-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
        --button-danger-iconColor-rest: #d20f39;
        --button-danger-iconColor-hover: #dce0e8;
        --button-danger-bgColor-rest: #ccd0da;
        --button-danger-bgColor-hover: #d20f39;
        --button-danger-bgColor-active: #ba0d33;
        --button-danger-bgColor-disabled: #eff1f5;
        --button-danger-borderColor-rest: #bcc0cc;
        --button-danger-borderColor-hover: #d20f39;
        --button-danger-borderColor-active: #ba0d33;
        --button-danger-shadow-selected: 0px 0px 0px 0px #000;
        --button-inactive-fgColor: #8b949e;
        --button-inactive-bgColor: #21262d;
        --button-star-iconColor: #df8e1d;
        --buttonCounter-default-bgColor-rest: #bcc0cc;
        --buttonCounter-invisible-bgColor-rest: #bcc0cc;
        --buttonCounter-primary-bgColor-rest: #04260f33;
        --buttonCounter-outline-bgColor-rest: #051d4d33;
        --buttonCounter-outline-bgColor-hover: #051d4d33;
        --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
        --buttonCounter-outline-fgColor-rest: #388bfd;
        --buttonCounter-outline-fgColor-hover: #58a6ff;
        --buttonCounter-outline-fgColor-disabled: #4493f880;
        --buttonCounter-danger-bgColor-hover: rgba(76, 79, 105, 0.2);
        --buttonCounter-danger-bgColor-disabled: #da36330d;
        --buttonCounter-danger-bgColor-rest: #49020233;
        --buttonCounter-danger-fgColor-rest: #d20f39;
        --buttonCounter-danger-fgColor-hover: #4c4f69;
        --buttonCounter-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
        --focus-outlineColor: #1e66f5;
        --menu-bgColor-active: #e6e9ef;
        --overlay-bgColor: #eff1f5;
        --overlay-borderColor: #ccd0da;
        --overlay-backdrop-bgColor: #161b2266;
        --selectMenu-borderColor: #484f58;
        --selectMenu-bgColor-active: #0c2d6b;
        --sideNav-bgColor-selected: #21262d;
        --skeletonLoader-bgColor: #161b22;
        --timelineBadge-bgColor: #e6e9ef;
        --treeViewItem-leadingVisual-iconColor-rest: #848d97;
        --underlineNav-borderColor-active: #1e66f5;
        --underlineNav-borderColor-hover: #6e768166;
        --underlineNav-iconColor-rest: #848d97;
        --selection-bgColor: rgba(30, 102, 245, 0.3);
        --reactionButton-selected-bgColor-rest: rgba(30, 102, 245, 0.2);
        --reactionButton-selected-bgColor-hover: rgba(30, 102, 245, 0.35);
        --reactionButton-selected-fgColor-rest: #1e66f5;
        --reactionButton-selected-fgColor-hover: #1e66f5;
        --fgColor-default: #4c4f69;
        --fgColor-muted: #5c5f77;
        --fgColor-onEmphasis: #eff1f5;
        --fgColor-white: #4c4f69;
        --fgColor-disabled: #acb0be;
        --fgColor-link: #1e66f5;
        --fgColor-neutral: #6e7681;
        --fgColor-accent: #1e66f5;
        --fgColor-success: #40a02b;
        --fgColor-attention: #df8e1d;
        --fgColor-severe: #fe640b;
        --fgColor-danger: #d20f39;
        --fgColor-open: #40a02b;
        --fgColor-closed: #d20f39;
        --fgColor-done: #8839ef;
        --fgColor-sponsors: #ea76cb;
        --bgColor-default: #eff1f5;
        --bgColor-muted: #e6e9ef;
        --bgColor-inset: #dce0e8;
        --bgColor-emphasis: #7c7f93;
        --bgColor-inverse: #4c4f69;
        --bgColor-disabled: #21262db3;
        --bgColor-transparent: #0000;
        --bgColor-neutral-muted: rgba(204, 208, 218, 0.4);
        --bgColor-neutral-emphasis: #6c6f85;
        --bgColor-accent-muted: rgba(30, 102, 245, 0.2);
        --bgColor-accent-emphasis: #1e66f5;
        --bgColor-success-muted: #2ea04326;
        --bgColor-success-emphasis: #40a02b;
        --bgColor-attention-muted: rgba(223, 142, 29, 0.15);
        --bgColor-attention-emphasis: #df8e1d;
        --bgColor-severe-muted: rgba(254, 100, 11, 0.26);
        --bgColor-severe-emphasis: #fe640b;
        --bgColor-danger-muted: rgba(210, 15, 57, 0.26);
        --bgColor-danger-emphasis: #d20f39;
        --bgColor-open-muted: #2ea0431a;
        --bgColor-open-emphasis: #40a02b;
        --bgColor-closed-muted: rgba(210, 15, 57, 0.15);
        --bgColor-closed-emphasis: #d20f39;
        --bgColor-done-muted: #a371f726;
        --bgColor-done-emphasis: #8839ef;
        --bgColor-sponsors-muted: #db61a21a;
        --bgColor-sponsors-emphasis: #ea76cb;
        --borderColor-default: #bcc0cc;
        --borderColor-muted: #ccd0da;
        --borderColor-emphasis: #484f58;
        --borderColor-disabled: #21262db3;
        --borderColor-transparent: #0000;
        --borderColor-neutral-muted: #6e768166;
        --borderColor-neutral-emphasis: #6e7681;
        --borderColor-accent-muted: rgba(30, 102, 245, 0.5);
        --borderColor-accent-emphasis: #1e66f5;
        --borderColor-success-muted: #388c26;
        --borderColor-success-emphasis: #40a02b;
        --borderColor-attention-muted: rgba(221, 120, 120, 0.3);
        --borderColor-attention-emphasis: #dd7878;
        --borderColor-severe-muted: #fe640b;
        --borderColor-severe-emphasis: #bd561d;
        --borderColor-danger-muted: #d20f39;
        --borderColor-danger-emphasis: #d20f39;
        --borderColor-open-muted: #388c26;
        --borderColor-open-emphasis: #40a02b;
        --borderColor-closed-muted: #d20f39;
        --borderColor-closed-emphasis: #d20f39;
        --borderColor-done-muted: #7287fd;
        --borderColor-done-emphasis: #8839ef;
        --borderColor-sponsors-muted: #db61a266;
        --borderColor-sponsors-emphasis: #ea76cb;
        --color-ansi-black: #bcc0cc;
        --color-ansi-black-bright: #acb0be;
        --color-ansi-gray: #acb0be;
        --color-ansi-white: #5c5f77;
        --color-ansi-white-bright: #6c6f85;
        --color-ansi-red: #d20f39;
        --color-ansi-red-bright: #d20f39;
        --color-ansi-green: #40a02b;
        --color-ansi-green-bright: #40a02b;
        --color-ansi-yellow: #df8e1d;
        --color-ansi-yellow-bright: #df8e1d;
        --color-ansi-blue: #1e66f5;
        --color-ansi-blue-bright: #1e66f5;
        --color-ansi-magenta: #ea76cb;
        --color-ansi-magenta-bright: #ea76cb;
        --color-ansi-cyan: #179299;
        --color-ansi-cyan-bright: #179299;
        --color-prettylights-syntax-comment: #8c8fa1;
        --color-prettylights-syntax-constant: #1e66f5;
        --color-prettylights-syntax-entity: #1e66f5;
        --color-prettylights-syntax-storage-modifier-import: #fe640b;
        --color-prettylights-syntax-entity-tag: #179299;
        --color-prettylights-syntax-keyword: #ea76cb;
        --color-prettylights-syntax-string: #40a02b;
        --color-prettylights-syntax-variable: #fe640b;
        --color-prettylights-syntax-invalid-illegal-text: #d20f39;
        --color-prettylights-syntax-invalid-illegal-bg: rgba(210, 15, 57, 0.15);
        --color-prettylights-syntax-markup-heading: #179299;
        --color-prettylights-syntax-markup-italic: #df8e1d;
        --color-prettylights-syntax-markup-bold: #df8e1d;
        --color-prettylights-syntax-markup-deleted-text: #4c4f69;
        --color-prettylights-syntax-markup-deleted-bg: rgba(210, 15, 57, 0.4);
        --color-prettylights-syntax-markup-inserted-text: #4c4f69;
        --color-prettylights-syntax-markup-inserted-bg: rgba(64, 160, 43, 0.4);
        --color-prettylights-syntax-markup-changed-text: #4c4f69;
        --color-prettylights-syntax-markup-changed-bg: rgba(223, 142, 29, 0.4);
        --color-prettylights-syntax-markup-ignored-text: #4c4f69;
        --bgColor-white: #eff1f5;
        --color-scale-white: #eff1f5;
        --color-scale-gray-3: #7c7f93;
        --color-scale-gray-5: #9ca0b0;
        --color-scale-gray-6: #bcc0cc;
        --color-scale-gray-7: #bcc0cc;
        --color-scale-blue-2: #04a5e5;
        --color-scale-blue-5: #1e66f5;
        --color-scale-green-3: #40a02b;
        --color-scale-green-4: #40a02b;
        --color-scale-yellow-3: #fe640b;
        --color-scale-orange-4: #fe640b;
        --color-scale-red-4: #d20f39;
        --shadow-inset: inset 0px 1px 0px 0px #dce0e8;
        --shadow-resting-xsmall: 0px 1px 0px 0px #dce0e8;
        --shadow-resting-small: 0px 1px 0px 0px #dce0e8, 0px 1px 3px 0px #dce0e8;
        --shadow-resting-medium: 0px 3px 6px 0px #dce0e8;
        --shadow-floating-small: 0px 0px 0px 1px #eff1f5, 0px 6px 12px -3px #dce0e8,
        0px 6px 18px 0px #dce0e8;
        --shadow-floating-medium: 0px 0px 0px 1px #ccd0da,
        0px 8px 16px -4px #dce0e8, 0px 4px 32px -4px #dce0e8,
        0px 24px 48px -12px #dce0e8, 0px 48px 96px -24px #dce0e8;
        --shadow-floating-large: 0px 0px 0px 1px #ccd0da,
        0px 24px 48px 0px #010409;
        --shadow-floating-xlarge: 0px 0px 0px 1px #ccd0da,
        0px 32px 64px 0px #010409;
        --shadow-floating-legacy: 0px 6px 12px -3px #dce0e8, 0px 6px 18px 0px #dce0e8;
        --outline-focus: #1e66f5 solid 2px;
        /* Header when logged out */
    }
    [data-color-mode="auto"][data-dark-theme="light"] ::selection {
        background-color: rgba(30, 102, 245, 0.3);
    }
    [data-color-mode="auto"][data-dark-theme="light"] input::placeholder,
    [data-color-mode="auto"][data-dark-theme="light"] textarea::placeholder {
        color: #6c6f85 !important;
    }
    [data-color-mode="auto"][data-dark-theme="light"] .cm-placeholder {
        color: #6c6f85;
    }
    [data-color-mode="auto"][data-dark-theme="light"] .turbo-progress-bar {
        background-color: #1e66f5;
    }
    [data-color-mode="auto"][data-dark-theme="light"] .form-select {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%236c6f85%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
    }
    [data-color-mode="auto"][data-dark-theme="light"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
        content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
    }
    [data-color-mode="auto"][data-dark-theme="light"] .HeaderMenu-link {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .HeaderMenu-link:hover {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .header-search-button.placeholder {
        color: #6c6f85;
    }
    [data-color-mode="auto"][data-dark-theme="light"] .HeaderMenu-toggle-bar {
        background-color: #4c4f69;
    }
    [data-color-mode="auto"][data-dark-theme="light"] .notification-indicator .mail-status {
        background-image: linear-gradient(#1e66f5, #0b57ef);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-r {
        color: var(--color-ansi-red);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-y {
        color: var(--color-ansi-yellow);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-g {
        color: var(--color-ansi-green);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-b {
        color: var(--color-ansi-blue);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-c {
        color: var(--color-ansi-cyan);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-m {
        color: var(--color-ansi-magenta);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .CheckStep .ansifg-gr {
        color: var(--color-ansi-gray);
    }
    [data-color-mode="auto"][data-dark-theme="light"] .js-activity-overview-graph .js-highlight-blob {
        fill: #1e66f5;
        stroke: #1e66f5;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] {
        color-scheme: dark;
        accent-color: #89b4fa;
        color: #cdd6f4;
        --color-social-reaction-bg-reacted-hover: rgba(137, 180, 250, 0.3);
        --color-notifications-button-hover-bg: rgba(137, 180, 250, 0.6);
        --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
        --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
        --color-calendar-halloween-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-halloween-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-halloween-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-halloween-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-winter-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-winter-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-winter-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-winter-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-graph-day-bg: #313244 !important;
        --color-calendar-graph-day-border: transparent !important;
        --color-calendar-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
        --color-calendar-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
        --color-calendar-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
        --color-calendar-graph-day-L4-bg: #89b4fa !important;
        --color-calendar-graph-day-L2-border: transparent !important;
        --color-calendar-graph-day-L3-border: transparent !important;
        --color-calendar-graph-day-L4-border: transparent !important;
        --color-user-mention-fg: #89b4fa;
        --color-user-mention-bg: rgba(137, 180, 250, 0.3);
        --color-dashboard-feed-bg: var(--color-scale-gray-9);
        --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
        --color-marketing-icon-secondary: var(--color-scale-blue-5);
        --color-project-header-bg: var(--color-scale-gray-9);
        --color-project-sidebar-bg: var(--color-scale-gray-8);
        --color-project-gradient-in: var(--color-scale-gray-8);
        --color-project-gradient-out: rgba(22, 27, 34, 0);
        --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
        --topicTag-borderColor: #0000;
        --highlight-neutral-bgColor: rgba(249, 226, 175, 0.3);
        --page-header-bgColor: #11111b;
        --diffBlob-addition-fgColor-text: #cdd6f4;
        --diffBlob-addition-fgColor-num: #cdd6f4;
        --diffBlob-addition-bgColor-num: rgba(166, 227, 161, 0.3);
        --diffBlob-addition-bgColor-line: rgba(166, 227, 161, 0.15);
        --diffBlob-addition-bgColor-word: rgba(166, 227, 161, 0.3);
        --diffBlob-deletion-fgColor-text: #cdd6f4;
        --diffBlob-deletion-fgColor-num: #cdd6f4;
        --diffBlob-deletion-bgColor-num: rgba(243, 139, 168, 0.3);
        --diffBlob-deletion-bgColor-line: rgba(243, 139, 168, 0.15);
        --diffBlob-deletion-bgColor-word: rgba(243, 139, 168, 0.3);
        --diffBlob-hunk-bgColor-num: rgba(137, 180, 250, 0.4);
        --diffBlob-expander-iconColor: #848d97;
        --codeMirror-fgColor: #cdd6f4;
        --codeMirror-bgColor: #1e1e2e;
        --codeMirror-gutters-bgColor: #1e1e2e;
        --codeMirror-gutterMarker-fgColor-default: #1e1e2e;
        --codeMirror-gutterMarker-fgColor-muted: #6c7086;
        --codeMirror-lineNumber-fgColor: #bac2de;
        --codeMirror-cursor-fgColor: #cdd6f4;
        --codeMirror-selection-bgColor: #388bfd66;
        --codeMirror-activeline-bgColor: #6e768166;
        --codeMirror-matchingBracket-fgColor: #cdd6f4;
        --codeMirror-lines-bgColor: #1e1e2e;
        --codeMirror-syntax-fgColor-comment: #6c7086;
        --codeMirror-syntax-fgColor-constant: #89b4fa;
        --codeMirror-syntax-fgColor-entity: #89b4fa;
        --codeMirror-syntax-fgColor-keyword: #f5c2e7;
        --codeMirror-syntax-fgColor-storage: #fab387;
        --codeMirror-syntax-fgColor-string: #a6e3a1;
        --codeMirror-syntax-fgColor-support: #79c0ff;
        --codeMirror-syntax-fgColor-variable: #fab387;
        --header-fgColor-default: #cdd6f4;
        --header-fgColor-logo: #cdd6f4;
        --header-bgColor: #11111b;
        --header-borderColor-divider: #8b949e;
        --headerSearch-bgColor: #181825;
        --headerSearch-borderColor: #313244;
        --avatar-bgColor: rgba(205, 214, 244, 0.26);
        --avatar-borderColor: #313244;
        --avatar-shadow: 0px 0px 0px 2px #0d1117;
        --avatarStack-fade-bgColor-default: #45475a;
        --avatarStack-fade-bgColor-muted: #21262d;
        --control-bgColor-rest: #f38ba8;
        --control-bgColor-hover: #292e36;
        --control-bgColor-active: #45475a;
        --control-bgColor-disabled: rgba(24, 24, 37, 0.6);
        --control-bgColor-selected: #161b22;
        --control-fgColor-rest: #cdd6f4;
        --control-fgColor-placeholder: #484f58;
        --control-fgColor-disabled: rgba(166, 173, 200, 0.7);
        --control-borderColor-rest: #45475a;
        --control-borderColor-emphasis: #666e79;
        --control-borderColor-disabled: rgba(69, 71, 90, 0.75);
        --control-borderColor-selected: #f0f6fc;
        --control-borderColor-success: #a6e3a1;
        --control-borderColor-danger: #f38ba8;
        --control-borderColor-warning: #f9e2af;
        --control-iconColor-rest: #848d97;
        --control-transparent-bgColor-rest: #0000;
        --control-transparent-bgColor-hover: rgba(88, 91, 112, 0.2);
        --control-transparent-bgColor-active: rgba(108, 112, 134, 0.5);
        --control-transparent-bgColor-disabled: #21262db3;
        --control-transparent-bgColor-selected: #b1bac414;
        --control-transparent-borderColor-rest: #0000;
        --control-transparent-borderColor-hover: #0000;
        --control-transparent-borderColor-active: #0000;
        --control-danger-fgColor-rest: #f38ba8;
        --control-danger-fgColor-hover: #11111b;
        --control-danger-bgColor-hover: rgba(243, 139, 168, 0.8);
        --control-danger-bgColor-active: #f38ba8;
        --control-checked-bgColor-rest: #89b4fa;
        --control-checked-bgColor-hover: #a1c4fb;
        --control-checked-bgColor-active: #a1c4fb;
        --control-checked-bgColor-disabled: #6e7681;
        --control-checked-fgColor-rest: #11111b;
        --control-checked-fgColor-disabled: #010409;
        --control-checked-borderColor-rest: #89b4fa;
        --control-checked-borderColor-hover: #89b4fa;
        --control-checked-borderColor-active: #89b4fa;
        --control-checked-borderColor-disabled: #313244;
        --controlTrack-bgColor-rest: #313244;
        --controlTrack-bgColor-hover: #45475a;
        --controlTrack-bgColor-active: #585b70;
        --controlTrack-bgColor-disabled: #6e7681;
        --controlTrack-fgColor-rest: #848d97;
        --controlTrack-fgColor-disabled: #cdd6f4;
        --controlTrack-borderColor-rest: #0000;
        --controlTrack-borderColor-disabled: #6e7681;
        --controlKnob-bgColor-rest: #1e1e2e;
        --controlKnob-bgColor-disabled: #21262db3;
        --controlKnob-bgColor-checked: #cdd6f4;
        --controlKnob-borderColor-rest: #585b70;
        --controlKnob-borderColor-disabled: #21262db3;
        --controlKnob-borderColor-checked: #89b4fa;
        --button-default-fgColor-rest: #cdd6f4;
        --button-default-bgColor-rest: #313244;
        --button-default-bgColor-hover: #45475a;
        --button-default-bgColor-active: #585b70;
        --button-default-bgColor-selected: #585b70;
        --button-default-bgColor-disabled: rgba(49, 50, 68, 0.7);
        --button-default-borderColor-rest: #45475a;
        --button-default-borderColor-hover: #45475a;
        --button-default-borderColor-active: #45475a;
        --button-default-borderColor-disabled: rgba(49, 50, 68, 0.7);
        --button-default-shadow-resting: 0px 0px 0px 0px #000;
        --button-primary-fgColor-rest: #1e1e2e;
        --button-primary-fgColor-disabled: rgba(30, 30, 46, 0.6);
        --button-primary-iconColor-rest: #1e1e2e;
        --button-primary-bgColor-rest: #a6e3a1;
        --button-primary-bgColor-hover: #b9e9b5;
        --button-primary-bgColor-active: #a3e69e;
        --button-primary-bgColor-disabled: rgba(166, 227, 161, 0.7);
        --button-primary-borderColor-rest: #a6e3a1;
        --button-primary-borderColor-hover: #a6e3a1;
        --button-primary-borderColor-active: #a6e3a1;
        --button-primary-borderColor-disabled: rgba(166, 227, 161, 0.7);
        --button-primary-shadow-selected: 0px 0px 0px 0px #000;
        --button-invisible-fgColor-rest: #89b4fa;
        --button-invisible-fgColor-hover: #bad3fc;
        --button-invisible-fgColor-disabled: #6e7681;
        --button-invisible-iconColor-rest: #9399b2;
        --button-invisible-iconColor-hover: #e6edf3;
        --button-invisible-iconColor-disabled: #6e7681;
        --button-invisible-bgColor-rest: #0000;
        --button-invisible-bgColor-hover: #b1bac41f;
        --button-invisible-bgColor-active: #b1bac433;
        --button-invisible-bgColor-disabled: rgba(69, 71, 90, 0.7);
        --button-invisible-borderColor-rest: #0000;
        --button-invisible-borderColor-hover: #0000;
        --button-invisible-borderColor-disabled: rgba(69, 71, 90, 0.7);
        --button-outline-fgColor-rest: #388bfd;
        --button-outline-fgColor-hover: #58a6ff;
        --button-outline-fgColor-active: #cdd6f4;
        --button-outline-fgColor-disabled: #4493f880;
        --button-outline-bgColor-rest: #f0f6fc;
        --button-outline-bgColor-hover: #45475a;
        --button-outline-bgColor-active: #0d419d;
        --button-outline-bgColor-disabled: #0d1117;
        --button-outline-borderColor-hover: #f0f6fc1a;
        --button-outline-borderColor-selected: #f0f6fc1a;
        --button-outline-shadow-selected: 0px 0px 0px 0px #000;
        --button-danger-fgColor-rest: #f38ba8;
        --button-danger-fgColor-hover: #1e1e2e;
        --button-danger-fgColor-active: #1e1e2e;
        --button-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
        --button-danger-iconColor-rest: #f38ba8;
        --button-danger-iconColor-hover: #11111b;
        --button-danger-bgColor-rest: #313244;
        --button-danger-bgColor-hover: #f38ba8;
        --button-danger-bgColor-active: #f17497;
        --button-danger-bgColor-disabled: #1e1e2e;
        --button-danger-borderColor-rest: #45475a;
        --button-danger-borderColor-hover: #f38ba8;
        --button-danger-borderColor-active: #f17497;
        --button-danger-shadow-selected: 0px 0px 0px 0px #000;
        --button-inactive-fgColor: #8b949e;
        --button-inactive-bgColor: #21262d;
        --button-star-iconColor: #f9e2af;
        --buttonCounter-default-bgColor-rest: #45475a;
        --buttonCounter-invisible-bgColor-rest: #45475a;
        --buttonCounter-primary-bgColor-rest: #04260f33;
        --buttonCounter-outline-bgColor-rest: #051d4d33;
        --buttonCounter-outline-bgColor-hover: #051d4d33;
        --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
        --buttonCounter-outline-fgColor-rest: #388bfd;
        --buttonCounter-outline-fgColor-hover: #58a6ff;
        --buttonCounter-outline-fgColor-disabled: #4493f880;
        --buttonCounter-danger-bgColor-hover: rgba(205, 214, 244, 0.2);
        --buttonCounter-danger-bgColor-disabled: #da36330d;
        --buttonCounter-danger-bgColor-rest: #49020233;
        --buttonCounter-danger-fgColor-rest: #f38ba8;
        --buttonCounter-danger-fgColor-hover: #cdd6f4;
        --buttonCounter-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
        --focus-outlineColor: #89b4fa;
        --menu-bgColor-active: #181825;
        --overlay-bgColor: #1e1e2e;
        --overlay-borderColor: #313244;
        --overlay-backdrop-bgColor: #161b2266;
        --selectMenu-borderColor: #484f58;
        --selectMenu-bgColor-active: #0c2d6b;
        --sideNav-bgColor-selected: #21262d;
        --skeletonLoader-bgColor: #161b22;
        --timelineBadge-bgColor: #181825;
        --treeViewItem-leadingVisual-iconColor-rest: #848d97;
        --underlineNav-borderColor-active: #89b4fa;
        --underlineNav-borderColor-hover: #6e768166;
        --underlineNav-iconColor-rest: #848d97;
        --selection-bgColor: rgba(137, 180, 250, 0.3);
        --reactionButton-selected-bgColor-rest: rgba(137, 180, 250, 0.2);
        --reactionButton-selected-bgColor-hover: rgba(137, 180, 250, 0.35);
        --reactionButton-selected-fgColor-rest: #89b4fa;
        --reactionButton-selected-fgColor-hover: #89b4fa;
        --fgColor-default: #cdd6f4;
        --fgColor-muted: #bac2de;
        --fgColor-onEmphasis: #1e1e2e;
        --fgColor-white: #cdd6f4;
        --fgColor-disabled: #585b70;
        --fgColor-link: #89b4fa;
        --fgColor-neutral: #6e7681;
        --fgColor-accent: #89b4fa;
        --fgColor-success: #a6e3a1;
        --fgColor-attention: #f9e2af;
        --fgColor-severe: #fab387;
        --fgColor-danger: #f38ba8;
        --fgColor-open: #a6e3a1;
        --fgColor-closed: #f38ba8;
        --fgColor-done: #cba6f7;
        --fgColor-sponsors: #f5c2e7;
        --bgColor-default: #1e1e2e;
        --bgColor-muted: #181825;
        --bgColor-inset: #11111b;
        --bgColor-emphasis: #9399b2;
        --bgColor-inverse: #cdd6f4;
        --bgColor-disabled: #21262db3;
        --bgColor-transparent: #0000;
        --bgColor-neutral-muted: rgba(49, 50, 68, 0.4);
        --bgColor-neutral-emphasis: #a6adc8;
        --bgColor-accent-muted: rgba(137, 180, 250, 0.2);
        --bgColor-accent-emphasis: #89b4fa;
        --bgColor-success-muted: #2ea04326;
        --bgColor-success-emphasis: #a6e3a1;
        --bgColor-attention-muted: rgba(249, 226, 175, 0.15);
        --bgColor-attention-emphasis: #f9e2af;
        --bgColor-severe-muted: rgba(250, 179, 135, 0.26);
        --bgColor-severe-emphasis: #fab387;
        --bgColor-danger-muted: rgba(243, 139, 168, 0.26);
        --bgColor-danger-emphasis: #f38ba8;
        --bgColor-open-muted: #2ea0431a;
        --bgColor-open-emphasis: #a6e3a1;
        --bgColor-closed-muted: rgba(243, 139, 168, 0.15);
        --bgColor-closed-emphasis: #f38ba8;
        --bgColor-done-muted: #a371f726;
        --bgColor-done-emphasis: #cba6f7;
        --bgColor-sponsors-muted: #db61a21a;
        --bgColor-sponsors-emphasis: #f5c2e7;
        --borderColor-default: #45475a;
        --borderColor-muted: #313244;
        --borderColor-emphasis: #484f58;
        --borderColor-disabled: #21262db3;
        --borderColor-transparent: #0000;
        --borderColor-neutral-muted: #6e768166;
        --borderColor-neutral-emphasis: #6e7681;
        --borderColor-accent-muted: rgba(137, 180, 250, 0.5);
        --borderColor-accent-emphasis: #89b4fa;
        --borderColor-success-muted: #93dd8d;
        --borderColor-success-emphasis: #a6e3a1;
        --borderColor-attention-muted: rgba(242, 205, 205, 0.3);
        --borderColor-attention-emphasis: #f2cdcd;
        --borderColor-severe-muted: #fab387;
        --borderColor-severe-emphasis: #bd561d;
        --borderColor-danger-muted: #f38ba8;
        --borderColor-danger-emphasis: #f38ba8;
        --borderColor-open-muted: #93dd8d;
        --borderColor-open-emphasis: #a6e3a1;
        --borderColor-closed-muted: #f38ba8;
        --borderColor-closed-emphasis: #f38ba8;
        --borderColor-done-muted: #b4befe;
        --borderColor-done-emphasis: #cba6f7;
        --borderColor-sponsors-muted: #db61a266;
        --borderColor-sponsors-emphasis: #f5c2e7;
        --color-ansi-black: #45475a;
        --color-ansi-black-bright: #585b70;
        --color-ansi-gray: #585b70;
        --color-ansi-white: #bac2de;
        --color-ansi-white-bright: #a6adc8;
        --color-ansi-red: #f38ba8;
        --color-ansi-red-bright: #f38ba8;
        --color-ansi-green: #a6e3a1;
        --color-ansi-green-bright: #a6e3a1;
        --color-ansi-yellow: #f9e2af;
        --color-ansi-yellow-bright: #f9e2af;
        --color-ansi-blue: #89b4fa;
        --color-ansi-blue-bright: #89b4fa;
        --color-ansi-magenta: #f5c2e7;
        --color-ansi-magenta-bright: #f5c2e7;
        --color-ansi-cyan: #94e2d5;
        --color-ansi-cyan-bright: #94e2d5;
        --color-prettylights-syntax-comment: #7f849c;
        --color-prettylights-syntax-constant: #89b4fa;
        --color-prettylights-syntax-entity: #89b4fa;
        --color-prettylights-syntax-storage-modifier-import: #fab387;
        --color-prettylights-syntax-entity-tag: #94e2d5;
        --color-prettylights-syntax-keyword: #f5c2e7;
        --color-prettylights-syntax-string: #a6e3a1;
        --color-prettylights-syntax-variable: #fab387;
        --color-prettylights-syntax-invalid-illegal-text: #f38ba8;
        --color-prettylights-syntax-invalid-illegal-bg: rgba(243, 139, 168, 0.15);
        --color-prettylights-syntax-markup-heading: #94e2d5;
        --color-prettylights-syntax-markup-italic: #f9e2af;
        --color-prettylights-syntax-markup-bold: #f9e2af;
        --color-prettylights-syntax-markup-deleted-text: #cdd6f4;
        --color-prettylights-syntax-markup-deleted-bg: rgba(243, 139, 168, 0.4);
        --color-prettylights-syntax-markup-inserted-text: #cdd6f4;
        --color-prettylights-syntax-markup-inserted-bg: rgba(166, 227, 161, 0.4);
        --color-prettylights-syntax-markup-changed-text: #cdd6f4;
        --color-prettylights-syntax-markup-changed-bg: rgba(249, 226, 175, 0.4);
        --color-prettylights-syntax-markup-ignored-text: #cdd6f4;
        --bgColor-white: #1e1e2e;
        --color-scale-white: #1e1e2e;
        --color-scale-gray-3: #9399b2;
        --color-scale-gray-5: #6c7086;
        --color-scale-gray-6: #45475a;
        --color-scale-gray-7: #45475a;
        --color-scale-blue-2: #89dceb;
        --color-scale-blue-5: #89b4fa;
        --color-scale-green-3: #a6e3a1;
        --color-scale-green-4: #a6e3a1;
        --color-scale-yellow-3: #fab387;
        --color-scale-orange-4: #fab387;
        --color-scale-red-4: #f38ba8;
        --shadow-inset: inset 0px 1px 0px 0px #11111b;
        --shadow-resting-xsmall: 0px 1px 0px 0px #11111b;
        --shadow-resting-small: 0px 1px 0px 0px #11111b, 0px 1px 3px 0px #11111b;
        --shadow-resting-medium: 0px 3px 6px 0px #11111b;
        --shadow-floating-small: 0px 0px 0px 1px #1e1e2e, 0px 6px 12px -3px #11111b,
        0px 6px 18px 0px #11111b;
        --shadow-floating-medium: 0px 0px 0px 1px #313244,
        0px 8px 16px -4px #11111b, 0px 4px 32px -4px #11111b,
        0px 24px 48px -12px #11111b, 0px 48px 96px -24px #11111b;
        --shadow-floating-large: 0px 0px 0px 1px #313244,
        0px 24px 48px 0px #010409;
        --shadow-floating-xlarge: 0px 0px 0px 1px #313244,
        0px 32px 64px 0px #010409;
        --shadow-floating-legacy: 0px 6px 12px -3px #11111b, 0px 6px 18px 0px #11111b;
        --outline-focus: #89b4fa solid 2px;
        /* Header when logged out */
    }
    [data-color-mode="auto"][data-dark-theme="dark"] ::selection {
        background-color: rgba(137, 180, 250, 0.3);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] input::placeholder,
    [data-color-mode="auto"][data-dark-theme="dark"] textarea::placeholder {
        color: #a6adc8 !important;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .cm-placeholder {
        color: #a6adc8;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .turbo-progress-bar {
        background-color: #89b4fa;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .form-select {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%23a6adc8%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
    }
    [data-color-mode="auto"][data-dark-theme="dark"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
        content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .HeaderMenu-link {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .HeaderMenu-link:hover {
        color: var(--fgColor-default);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .header-search-button.placeholder {
        color: #a6adc8;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .HeaderMenu-toggle-bar {
        background-color: #cdd6f4;
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .notification-indicator .mail-status {
        background-image: linear-gradient(#89b4fa, #71a4f9);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-r {
        color: var(--color-ansi-red);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-y {
        color: var(--color-ansi-yellow);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-g {
        color: var(--color-ansi-green);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-b {
        color: var(--color-ansi-blue);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-c {
        color: var(--color-ansi-cyan);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-m {
        color: var(--color-ansi-magenta);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .CheckStep .ansifg-gr {
        color: var(--color-ansi-gray);
    }
    [data-color-mode="auto"][data-dark-theme="dark"] .js-activity-overview-graph .js-highlight-blob {
        fill: #89b4fa;
        stroke: #89b4fa;
    }
}
[data-color-mode="light"][data-light-theme="dark"],
[data-color-mode="dark"][data-dark-theme="dark"] {
    color-scheme: dark;
    accent-color: #89b4fa;
    color: #cdd6f4;
    --color-social-reaction-bg-reacted-hover: rgba(137, 180, 250, 0.3);
    --color-notifications-button-hover-bg: rgba(137, 180, 250, 0.6);
    --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
    --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
    --color-calendar-halloween-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
    --color-calendar-halloween-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
    --color-calendar-halloween-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
    --color-calendar-halloween-graph-day-L4-bg: #89b4fa !important;
    --color-calendar-winter-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
    --color-calendar-winter-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
    --color-calendar-winter-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
    --color-calendar-winter-graph-day-L4-bg: #89b4fa !important;
    --color-calendar-graph-day-bg: #313244 !important;
    --color-calendar-graph-day-border: transparent !important;
    --color-calendar-graph-day-L1-bg: rgba(137, 180, 250, 0.4) !important;
    --color-calendar-graph-day-L2-bg: rgba(137, 180, 250, 0.6) !important;
    --color-calendar-graph-day-L3-bg: rgba(137, 180, 250, 0.8) !important;
    --color-calendar-graph-day-L4-bg: #89b4fa !important;
    --color-calendar-graph-day-L2-border: transparent !important;
    --color-calendar-graph-day-L3-border: transparent !important;
    --color-calendar-graph-day-L4-border: transparent !important;
    --color-user-mention-fg: #89b4fa;
    --color-user-mention-bg: rgba(137, 180, 250, 0.3);
    --color-dashboard-feed-bg: var(--color-scale-gray-9);
    --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
    --color-marketing-icon-secondary: var(--color-scale-blue-5);
    --color-project-header-bg: var(--color-scale-gray-9);
    --color-project-sidebar-bg: var(--color-scale-gray-8);
    --color-project-gradient-in: var(--color-scale-gray-8);
    --color-project-gradient-out: rgba(22, 27, 34, 0);
    --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
    --topicTag-borderColor: #0000;
    --highlight-neutral-bgColor: rgba(249, 226, 175, 0.3);
    --page-header-bgColor: #11111b;
    --diffBlob-addition-fgColor-text: #cdd6f4;
    --diffBlob-addition-fgColor-num: #cdd6f4;
    --diffBlob-addition-bgColor-num: rgba(166, 227, 161, 0.3);
    --diffBlob-addition-bgColor-line: rgba(166, 227, 161, 0.15);
    --diffBlob-addition-bgColor-word: rgba(166, 227, 161, 0.3);
    --diffBlob-deletion-fgColor-text: #cdd6f4;
    --diffBlob-deletion-fgColor-num: #cdd6f4;
    --diffBlob-deletion-bgColor-num: rgba(243, 139, 168, 0.3);
    --diffBlob-deletion-bgColor-line: rgba(243, 139, 168, 0.15);
    --diffBlob-deletion-bgColor-word: rgba(243, 139, 168, 0.3);
    --diffBlob-hunk-bgColor-num: rgba(137, 180, 250, 0.4);
    --diffBlob-expander-iconColor: #848d97;
    --codeMirror-fgColor: #cdd6f4;
    --codeMirror-bgColor: #1e1e2e;
    --codeMirror-gutters-bgColor: #1e1e2e;
    --codeMirror-gutterMarker-fgColor-default: #1e1e2e;
    --codeMirror-gutterMarker-fgColor-muted: #6c7086;
    --codeMirror-lineNumber-fgColor: #bac2de;
    --codeMirror-cursor-fgColor: #cdd6f4;
    --codeMirror-selection-bgColor: #388bfd66;
    --codeMirror-activeline-bgColor: #6e768166;
    --codeMirror-matchingBracket-fgColor: #cdd6f4;
    --codeMirror-lines-bgColor: #1e1e2e;
    --codeMirror-syntax-fgColor-comment: #6c7086;
    --codeMirror-syntax-fgColor-constant: #89b4fa;
    --codeMirror-syntax-fgColor-entity: #89b4fa;
    --codeMirror-syntax-fgColor-keyword: #f5c2e7;
    --codeMirror-syntax-fgColor-storage: #fab387;
    --codeMirror-syntax-fgColor-string: #a6e3a1;
    --codeMirror-syntax-fgColor-support: #79c0ff;
    --codeMirror-syntax-fgColor-variable: #fab387;
    --header-fgColor-default: #cdd6f4;
    --header-fgColor-logo: #cdd6f4;
    --header-bgColor: #11111b;
    --header-borderColor-divider: #8b949e;
    --headerSearch-bgColor: #181825;
    --headerSearch-borderColor: #313244;
    --avatar-bgColor: rgba(205, 214, 244, 0.26);
    --avatar-borderColor: #313244;
    --avatar-shadow: 0px 0px 0px 2px #0d1117;
    --avatarStack-fade-bgColor-default: #45475a;
    --avatarStack-fade-bgColor-muted: #21262d;
    --control-bgColor-rest: #f38ba8;
    --control-bgColor-hover: #292e36;
    --control-bgColor-active: #45475a;
    --control-bgColor-disabled: rgba(24, 24, 37, 0.6);
    --control-bgColor-selected: #161b22;
    --control-fgColor-rest: #cdd6f4;
    --control-fgColor-placeholder: #484f58;
    --control-fgColor-disabled: rgba(166, 173, 200, 0.7);
    --control-borderColor-rest: #45475a;
    --control-borderColor-emphasis: #666e79;
    --control-borderColor-disabled: rgba(69, 71, 90, 0.75);
    --control-borderColor-selected: #f0f6fc;
    --control-borderColor-success: #a6e3a1;
    --control-borderColor-danger: #f38ba8;
    --control-borderColor-warning: #f9e2af;
    --control-iconColor-rest: #848d97;
    --control-transparent-bgColor-rest: #0000;
    --control-transparent-bgColor-hover: rgba(88, 91, 112, 0.2);
    --control-transparent-bgColor-active: rgba(108, 112, 134, 0.5);
    --control-transparent-bgColor-disabled: #21262db3;
    --control-transparent-bgColor-selected: #b1bac414;
    --control-transparent-borderColor-rest: #0000;
    --control-transparent-borderColor-hover: #0000;
    --control-transparent-borderColor-active: #0000;
    --control-danger-fgColor-rest: #f38ba8;
    --control-danger-fgColor-hover: #11111b;
    --control-danger-bgColor-hover: rgba(243, 139, 168, 0.8);
    --control-danger-bgColor-active: #f38ba8;
    --control-checked-bgColor-rest: #89b4fa;
    --control-checked-bgColor-hover: #a1c4fb;
    --control-checked-bgColor-active: #a1c4fb;
    --control-checked-bgColor-disabled: #6e7681;
    --control-checked-fgColor-rest: #11111b;
    --control-checked-fgColor-disabled: #010409;
    --control-checked-borderColor-rest: #89b4fa;
    --control-checked-borderColor-hover: #89b4fa;
    --control-checked-borderColor-active: #89b4fa;
    --control-checked-borderColor-disabled: #313244;
    --controlTrack-bgColor-rest: #313244;
    --controlTrack-bgColor-hover: #45475a;
    --controlTrack-bgColor-active: #585b70;
    --controlTrack-bgColor-disabled: #6e7681;
    --controlTrack-fgColor-rest: #848d97;
    --controlTrack-fgColor-disabled: #cdd6f4;
    --controlTrack-borderColor-rest: #0000;
    --controlTrack-borderColor-disabled: #6e7681;
    --controlKnob-bgColor-rest: #1e1e2e;
    --controlKnob-bgColor-disabled: #21262db3;
    --controlKnob-bgColor-checked: #cdd6f4;
    --controlKnob-borderColor-rest: #585b70;
    --controlKnob-borderColor-disabled: #21262db3;
    --controlKnob-borderColor-checked: #89b4fa;
    --button-default-fgColor-rest: #cdd6f4;
    --button-default-bgColor-rest: #313244;
    --button-default-bgColor-hover: #45475a;
    --button-default-bgColor-active: #585b70;
    --button-default-bgColor-selected: #585b70;
    --button-default-bgColor-disabled: rgba(49, 50, 68, 0.7);
    --button-default-borderColor-rest: #45475a;
    --button-default-borderColor-hover: #45475a;
    --button-default-borderColor-active: #45475a;
    --button-default-borderColor-disabled: rgba(49, 50, 68, 0.7);
    --button-default-shadow-resting: 0px 0px 0px 0px #000;
    --button-primary-fgColor-rest: #1e1e2e;
    --button-primary-fgColor-disabled: rgba(30, 30, 46, 0.6);
    --button-primary-iconColor-rest: #1e1e2e;
    --button-primary-bgColor-rest: #a6e3a1;
    --button-primary-bgColor-hover: #b9e9b5;
    --button-primary-bgColor-active: #a3e69e;
    --button-primary-bgColor-disabled: rgba(166, 227, 161, 0.7);
    --button-primary-borderColor-rest: #a6e3a1;
    --button-primary-borderColor-hover: #a6e3a1;
    --button-primary-borderColor-active: #a6e3a1;
    --button-primary-borderColor-disabled: rgba(166, 227, 161, 0.7);
    --button-primary-shadow-selected: 0px 0px 0px 0px #000;
    --button-invisible-fgColor-rest: #89b4fa;
    --button-invisible-fgColor-hover: #bad3fc;
    --button-invisible-fgColor-disabled: #6e7681;
    --button-invisible-iconColor-rest: #9399b2;
    --button-invisible-iconColor-hover: #e6edf3;
    --button-invisible-iconColor-disabled: #6e7681;
    --button-invisible-bgColor-rest: #0000;
    --button-invisible-bgColor-hover: #b1bac41f;
    --button-invisible-bgColor-active: #b1bac433;
    --button-invisible-bgColor-disabled: rgba(69, 71, 90, 0.7);
    --button-invisible-borderColor-rest: #0000;
    --button-invisible-borderColor-hover: #0000;
    --button-invisible-borderColor-disabled: rgba(69, 71, 90, 0.7);
    --button-outline-fgColor-rest: #388bfd;
    --button-outline-fgColor-hover: #58a6ff;
    --button-outline-fgColor-active: #cdd6f4;
    --button-outline-fgColor-disabled: #4493f880;
    --button-outline-bgColor-rest: #f0f6fc;
    --button-outline-bgColor-hover: #45475a;
    --button-outline-bgColor-active: #0d419d;
    --button-outline-bgColor-disabled: #0d1117;
    --button-outline-borderColor-hover: #f0f6fc1a;
    --button-outline-borderColor-selected: #f0f6fc1a;
    --button-outline-shadow-selected: 0px 0px 0px 0px #000;
    --button-danger-fgColor-rest: #f38ba8;
    --button-danger-fgColor-hover: #1e1e2e;
    --button-danger-fgColor-active: #1e1e2e;
    --button-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
    --button-danger-iconColor-rest: #f38ba8;
    --button-danger-iconColor-hover: #11111b;
    --button-danger-bgColor-rest: #313244;
    --button-danger-bgColor-hover: #f38ba8;
    --button-danger-bgColor-active: #f17497;
    --button-danger-bgColor-disabled: #1e1e2e;
    --button-danger-borderColor-rest: #45475a;
    --button-danger-borderColor-hover: #f38ba8;
    --button-danger-borderColor-active: #f17497;
    --button-danger-shadow-selected: 0px 0px 0px 0px #000;
    --button-inactive-fgColor: #8b949e;
    --button-inactive-bgColor: #21262d;
    --button-star-iconColor: #f9e2af;
    --buttonCounter-default-bgColor-rest: #45475a;
    --buttonCounter-invisible-bgColor-rest: #45475a;
    --buttonCounter-primary-bgColor-rest: #04260f33;
    --buttonCounter-outline-bgColor-rest: #051d4d33;
    --buttonCounter-outline-bgColor-hover: #051d4d33;
    --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
    --buttonCounter-outline-fgColor-rest: #388bfd;
    --buttonCounter-outline-fgColor-hover: #58a6ff;
    --buttonCounter-outline-fgColor-disabled: #4493f880;
    --buttonCounter-danger-bgColor-hover: rgba(205, 214, 244, 0.2);
    --buttonCounter-danger-bgColor-disabled: #da36330d;
    --buttonCounter-danger-bgColor-rest: #49020233;
    --buttonCounter-danger-fgColor-rest: #f38ba8;
    --buttonCounter-danger-fgColor-hover: #cdd6f4;
    --buttonCounter-danger-fgColor-disabled: rgba(243, 139, 168, 0.5);
    --focus-outlineColor: #89b4fa;
    --menu-bgColor-active: #181825;
    --overlay-bgColor: #1e1e2e;
    --overlay-borderColor: #313244;
    --overlay-backdrop-bgColor: #161b2266;
    --selectMenu-borderColor: #484f58;
    --selectMenu-bgColor-active: #0c2d6b;
    --sideNav-bgColor-selected: #21262d;
    --skeletonLoader-bgColor: #161b22;
    --timelineBadge-bgColor: #181825;
    --treeViewItem-leadingVisual-iconColor-rest: #848d97;
    --underlineNav-borderColor-active: #89b4fa;
    --underlineNav-borderColor-hover: #6e768166;
    --underlineNav-iconColor-rest: #848d97;
    --selection-bgColor: rgba(137, 180, 250, 0.3);
    --reactionButton-selected-bgColor-rest: rgba(137, 180, 250, 0.2);
    --reactionButton-selected-bgColor-hover: rgba(137, 180, 250, 0.35);
    --reactionButton-selected-fgColor-rest: #89b4fa;
    --reactionButton-selected-fgColor-hover: #89b4fa;
    --fgColor-default: #cdd6f4;
    --fgColor-muted: #bac2de;
    --fgColor-onEmphasis: #1e1e2e;
    --fgColor-white: #cdd6f4;
    --fgColor-disabled: #585b70;
    --fgColor-link: #89b4fa;
    --fgColor-neutral: #6e7681;
    --fgColor-accent: #89b4fa;
    --fgColor-success: #a6e3a1;
    --fgColor-attention: #f9e2af;
    --fgColor-severe: #fab387;
    --fgColor-danger: #f38ba8;
    --fgColor-open: #a6e3a1;
    --fgColor-closed: #f38ba8;
    --fgColor-done: #cba6f7;
    --fgColor-sponsors: #f5c2e7;
    --bgColor-default: #1e1e2e;
    --bgColor-muted: #181825;
    --bgColor-inset: #11111b;
    --bgColor-emphasis: #9399b2;
    --bgColor-inverse: #cdd6f4;
    --bgColor-disabled: #21262db3;
    --bgColor-transparent: #0000;
    --bgColor-neutral-muted: rgba(49, 50, 68, 0.4);
    --bgColor-neutral-emphasis: #a6adc8;
    --bgColor-accent-muted: rgba(137, 180, 250, 0.2);
    --bgColor-accent-emphasis: #89b4fa;
    --bgColor-success-muted: #2ea04326;
    --bgColor-success-emphasis: #a6e3a1;
    --bgColor-attention-muted: rgba(249, 226, 175, 0.15);
    --bgColor-attention-emphasis: #f9e2af;
    --bgColor-severe-muted: rgba(250, 179, 135, 0.26);
    --bgColor-severe-emphasis: #fab387;
    --bgColor-danger-muted: rgba(243, 139, 168, 0.26);
    --bgColor-danger-emphasis: #f38ba8;
    --bgColor-open-muted: #2ea0431a;
    --bgColor-open-emphasis: #a6e3a1;
    --bgColor-closed-muted: rgba(243, 139, 168, 0.15);
    --bgColor-closed-emphasis: #f38ba8;
    --bgColor-done-muted: #a371f726;
    --bgColor-done-emphasis: #cba6f7;
    --bgColor-sponsors-muted: #db61a21a;
    --bgColor-sponsors-emphasis: #f5c2e7;
    --borderColor-default: #45475a;
    --borderColor-muted: #313244;
    --borderColor-emphasis: #484f58;
    --borderColor-disabled: #21262db3;
    --borderColor-transparent: #0000;
    --borderColor-neutral-muted: #6e768166;
    --borderColor-neutral-emphasis: #6e7681;
    --borderColor-accent-muted: rgba(137, 180, 250, 0.5);
    --borderColor-accent-emphasis: #89b4fa;
    --borderColor-success-muted: #93dd8d;
    --borderColor-success-emphasis: #a6e3a1;
    --borderColor-attention-muted: rgba(242, 205, 205, 0.3);
    --borderColor-attention-emphasis: #f2cdcd;
    --borderColor-severe-muted: #fab387;
    --borderColor-severe-emphasis: #bd561d;
    --borderColor-danger-muted: #f38ba8;
    --borderColor-danger-emphasis: #f38ba8;
    --borderColor-open-muted: #93dd8d;
    --borderColor-open-emphasis: #a6e3a1;
    --borderColor-closed-muted: #f38ba8;
    --borderColor-closed-emphasis: #f38ba8;
    --borderColor-done-muted: #b4befe;
    --borderColor-done-emphasis: #cba6f7;
    --borderColor-sponsors-muted: #db61a266;
    --borderColor-sponsors-emphasis: #f5c2e7;
    --color-ansi-black: #45475a;
    --color-ansi-black-bright: #585b70;
    --color-ansi-gray: #585b70;
    --color-ansi-white: #bac2de;
    --color-ansi-white-bright: #a6adc8;
    --color-ansi-red: #f38ba8;
    --color-ansi-red-bright: #f38ba8;
    --color-ansi-green: #a6e3a1;
    --color-ansi-green-bright: #a6e3a1;
    --color-ansi-yellow: #f9e2af;
    --color-ansi-yellow-bright: #f9e2af;
    --color-ansi-blue: #89b4fa;
    --color-ansi-blue-bright: #89b4fa;
    --color-ansi-magenta: #f5c2e7;
    --color-ansi-magenta-bright: #f5c2e7;
    --color-ansi-cyan: #94e2d5;
    --color-ansi-cyan-bright: #94e2d5;
    --color-prettylights-syntax-comment: #7f849c;
    --color-prettylights-syntax-constant: #89b4fa;
    --color-prettylights-syntax-entity: #89b4fa;
    --color-prettylights-syntax-storage-modifier-import: #fab387;
    --color-prettylights-syntax-entity-tag: #94e2d5;
    --color-prettylights-syntax-keyword: #f5c2e7;
    --color-prettylights-syntax-string: #a6e3a1;
    --color-prettylights-syntax-variable: #fab387;
    --color-prettylights-syntax-invalid-illegal-text: #f38ba8;
    --color-prettylights-syntax-invalid-illegal-bg: rgba(243, 139, 168, 0.15);
    --color-prettylights-syntax-markup-heading: #94e2d5;
    --color-prettylights-syntax-markup-italic: #f9e2af;
    --color-prettylights-syntax-markup-bold: #f9e2af;
    --color-prettylights-syntax-markup-deleted-text: #cdd6f4;
    --color-prettylights-syntax-markup-deleted-bg: rgba(243, 139, 168, 0.4);
    --color-prettylights-syntax-markup-inserted-text: #cdd6f4;
    --color-prettylights-syntax-markup-inserted-bg: rgba(166, 227, 161, 0.4);
    --color-prettylights-syntax-markup-changed-text: #cdd6f4;
    --color-prettylights-syntax-markup-changed-bg: rgba(249, 226, 175, 0.4);
    --color-prettylights-syntax-markup-ignored-text: #cdd6f4;
    --bgColor-white: #1e1e2e;
    --color-scale-white: #1e1e2e;
    --color-scale-gray-3: #9399b2;
    --color-scale-gray-5: #6c7086;
    --color-scale-gray-6: #45475a;
    --color-scale-gray-7: #45475a;
    --color-scale-blue-2: #89dceb;
    --color-scale-blue-5: #89b4fa;
    --color-scale-green-3: #a6e3a1;
    --color-scale-green-4: #a6e3a1;
    --color-scale-yellow-3: #fab387;
    --color-scale-orange-4: #fab387;
    --color-scale-red-4: #f38ba8;
    --shadow-inset: inset 0px 1px 0px 0px #11111b;
    --shadow-resting-xsmall: 0px 1px 0px 0px #11111b;
    --shadow-resting-small: 0px 1px 0px 0px #11111b, 0px 1px 3px 0px #11111b;
    --shadow-resting-medium: 0px 3px 6px 0px #11111b;
    --shadow-floating-small: 0px 0px 0px 1px #1e1e2e, 0px 6px 12px -3px #11111b,
    0px 6px 18px 0px #11111b;
    --shadow-floating-medium: 0px 0px 0px 1px #313244,
    0px 8px 16px -4px #11111b, 0px 4px 32px -4px #11111b,
    0px 24px 48px -12px #11111b, 0px 48px 96px -24px #11111b;
    --shadow-floating-large: 0px 0px 0px 1px #313244,
    0px 24px 48px 0px #010409;
    --shadow-floating-xlarge: 0px 0px 0px 1px #313244,
    0px 32px 64px 0px #010409;
    --shadow-floating-legacy: 0px 6px 12px -3px #11111b, 0px 6px 18px 0px #11111b;
    --outline-focus: #89b4fa solid 2px;
    /* Header when logged out */
}
[data-color-mode="light"][data-light-theme="dark"] ::selection,
[data-color-mode="dark"][data-dark-theme="dark"] ::selection {
    background-color: rgba(137, 180, 250, 0.3);
}
[data-color-mode="light"][data-light-theme="dark"] input::placeholder,
[data-color-mode="dark"][data-dark-theme="dark"] input::placeholder,
[data-color-mode="light"][data-light-theme="dark"] textarea::placeholder,
[data-color-mode="dark"][data-dark-theme="dark"] textarea::placeholder {
    color: #a6adc8 !important;
}
[data-color-mode="light"][data-light-theme="dark"] .cm-placeholder,
[data-color-mode="dark"][data-dark-theme="dark"] .cm-placeholder {
    color: #a6adc8;
}
[data-color-mode="light"][data-light-theme="dark"] .turbo-progress-bar,
[data-color-mode="dark"][data-dark-theme="dark"] .turbo-progress-bar {
    background-color: #89b4fa;
}
[data-color-mode="light"][data-light-theme="dark"] .form-select,
[data-color-mode="dark"][data-dark-theme="dark"] .form-select {
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%23a6adc8%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
}
[data-color-mode="light"][data-light-theme="dark"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"],
[data-color-mode="dark"][data-dark-theme="dark"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
    content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
}
[data-color-mode="light"][data-light-theme="dark"] .HeaderMenu-link,
[data-color-mode="dark"][data-dark-theme="dark"] .HeaderMenu-link {
    color: var(--fgColor-default);
}
[data-color-mode="light"][data-light-theme="dark"] .HeaderMenu-link:hover,
[data-color-mode="dark"][data-dark-theme="dark"] .HeaderMenu-link:hover {
    color: var(--fgColor-default);
}
[data-color-mode="light"][data-light-theme="dark"] .header-search-button.placeholder,
[data-color-mode="dark"][data-dark-theme="dark"] .header-search-button.placeholder {
    color: #a6adc8;
}
[data-color-mode="light"][data-light-theme="dark"] .HeaderMenu-toggle-bar,
[data-color-mode="dark"][data-dark-theme="dark"] .HeaderMenu-toggle-bar {
    background-color: #cdd6f4;
}
[data-color-mode="light"][data-light-theme="dark"] .notification-indicator .mail-status,
[data-color-mode="dark"][data-dark-theme="dark"] .notification-indicator .mail-status {
    background-image: linear-gradient(#89b4fa, #71a4f9);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-r,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-r {
    color: var(--color-ansi-red);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-y,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-y {
    color: var(--color-ansi-yellow);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-g,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-g {
    color: var(--color-ansi-green);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-b,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-b {
    color: var(--color-ansi-blue);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-c,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-c {
    color: var(--color-ansi-cyan);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-m,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-m {
    color: var(--color-ansi-magenta);
}
[data-color-mode="light"][data-light-theme="dark"] .CheckStep .ansifg-gr,
[data-color-mode="dark"][data-dark-theme="dark"] .CheckStep .ansifg-gr {
    color: var(--color-ansi-gray);
}
[data-color-mode="light"][data-light-theme="dark"] .js-activity-overview-graph .js-highlight-blob,
[data-color-mode="dark"][data-dark-theme="dark"] .js-activity-overview-graph .js-highlight-blob {
    fill: #89b4fa;
    stroke: #89b4fa;
}
[data-color-mode="light"][data-light-theme="light"],
[data-color-mode="dark"][data-dark-theme="light"] {
    color-scheme: dark;
    accent-color: #1e66f5;
    color: #4c4f69;
    --color-social-reaction-bg-reacted-hover: rgba(30, 102, 245, 0.3);
    --color-notifications-button-hover-bg: rgba(30, 102, 245, 0.6);
    --color-workflow-card-header-shadow: rgba(27, 31, 35, 0.04);
    --color-icon-directory: var(--fgColor-muted, var(--color-fg-muted));
    --color-calendar-halloween-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
    --color-calendar-halloween-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
    --color-calendar-halloween-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
    --color-calendar-halloween-graph-day-L4-bg: #1e66f5 !important;
    --color-calendar-winter-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
    --color-calendar-winter-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
    --color-calendar-winter-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
    --color-calendar-winter-graph-day-L4-bg: #1e66f5 !important;
    --color-calendar-graph-day-bg: #ccd0da !important;
    --color-calendar-graph-day-border: transparent !important;
    --color-calendar-graph-day-L1-bg: rgba(30, 102, 245, 0.4) !important;
    --color-calendar-graph-day-L2-bg: rgba(30, 102, 245, 0.6) !important;
    --color-calendar-graph-day-L3-bg: rgba(30, 102, 245, 0.8) !important;
    --color-calendar-graph-day-L4-bg: #1e66f5 !important;
    --color-calendar-graph-day-L2-border: transparent !important;
    --color-calendar-graph-day-L3-border: transparent !important;
    --color-calendar-graph-day-L4-border: transparent !important;
    --color-user-mention-fg: #1e66f5;
    --color-user-mention-bg: rgba(30, 102, 245, 0.3);
    --color-dashboard-feed-bg: var(--color-scale-gray-9);
    --color-mktg-btn-shadow-outline: rgba(255, 255, 255, 0.25) 0 0 0 1px inset;
    --color-marketing-icon-secondary: var(--color-scale-blue-5);
    --color-project-header-bg: var(--color-scale-gray-9);
    --color-project-sidebar-bg: var(--color-scale-gray-8);
    --color-project-gradient-in: var(--color-scale-gray-8);
    --color-project-gradient-out: rgba(22, 27, 34, 0);
    --color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
    --topicTag-borderColor: #0000;
    --highlight-neutral-bgColor: rgba(223, 142, 29, 0.3);
    --page-header-bgColor: #dce0e8;
    --diffBlob-addition-fgColor-text: #4c4f69;
    --diffBlob-addition-fgColor-num: #4c4f69;
    --diffBlob-addition-bgColor-num: rgba(64, 160, 43, 0.3);
    --diffBlob-addition-bgColor-line: rgba(64, 160, 43, 0.15);
    --diffBlob-addition-bgColor-word: rgba(64, 160, 43, 0.3);
    --diffBlob-deletion-fgColor-text: #4c4f69;
    --diffBlob-deletion-fgColor-num: #4c4f69;
    --diffBlob-deletion-bgColor-num: rgba(210, 15, 57, 0.3);
    --diffBlob-deletion-bgColor-line: rgba(210, 15, 57, 0.15);
    --diffBlob-deletion-bgColor-word: rgba(210, 15, 57, 0.3);
    --diffBlob-hunk-bgColor-num: rgba(30, 102, 245, 0.4);
    --diffBlob-expander-iconColor: #848d97;
    --codeMirror-fgColor: #4c4f69;
    --codeMirror-bgColor: #eff1f5;
    --codeMirror-gutters-bgColor: #eff1f5;
    --codeMirror-gutterMarker-fgColor-default: #eff1f5;
    --codeMirror-gutterMarker-fgColor-muted: #9ca0b0;
    --codeMirror-lineNumber-fgColor: #5c5f77;
    --codeMirror-cursor-fgColor: #4c4f69;
    --codeMirror-selection-bgColor: #388bfd66;
    --codeMirror-activeline-bgColor: #6e768166;
    --codeMirror-matchingBracket-fgColor: #4c4f69;
    --codeMirror-lines-bgColor: #eff1f5;
    --codeMirror-syntax-fgColor-comment: #9ca0b0;
    --codeMirror-syntax-fgColor-constant: #1e66f5;
    --codeMirror-syntax-fgColor-entity: #1e66f5;
    --codeMirror-syntax-fgColor-keyword: #ea76cb;
    --codeMirror-syntax-fgColor-storage: #fe640b;
    --codeMirror-syntax-fgColor-string: #40a02b;
    --codeMirror-syntax-fgColor-support: #79c0ff;
    --codeMirror-syntax-fgColor-variable: #fe640b;
    --header-fgColor-default: #4c4f69;
    --header-fgColor-logo: #4c4f69;
    --header-bgColor: #dce0e8;
    --header-borderColor-divider: #8b949e;
    --headerSearch-bgColor: #e6e9ef;
    --headerSearch-borderColor: #ccd0da;
    --avatar-bgColor: rgba(76, 79, 105, 0.26);
    --avatar-borderColor: #ccd0da;
    --avatar-shadow: 0px 0px 0px 2px #0d1117;
    --avatarStack-fade-bgColor-default: #bcc0cc;
    --avatarStack-fade-bgColor-muted: #21262d;
    --control-bgColor-rest: #d20f39;
    --control-bgColor-hover: #292e36;
    --control-bgColor-active: #bcc0cc;
    --control-bgColor-disabled: rgba(230, 233, 239, 0.6);
    --control-bgColor-selected: #161b22;
    --control-fgColor-rest: #4c4f69;
    --control-fgColor-placeholder: #484f58;
    --control-fgColor-disabled: rgba(108, 111, 133, 0.7);
    --control-borderColor-rest: #bcc0cc;
    --control-borderColor-emphasis: #666e79;
    --control-borderColor-disabled: rgba(188, 192, 204, 0.75);
    --control-borderColor-selected: #f0f6fc;
    --control-borderColor-success: #40a02b;
    --control-borderColor-danger: #d20f39;
    --control-borderColor-warning: #df8e1d;
    --control-iconColor-rest: #848d97;
    --control-transparent-bgColor-rest: #0000;
    --control-transparent-bgColor-hover: rgba(172, 176, 190, 0.2);
    --control-transparent-bgColor-active: rgba(156, 160, 176, 0.5);
    --control-transparent-bgColor-disabled: #21262db3;
    --control-transparent-bgColor-selected: #b1bac414;
    --control-transparent-borderColor-rest: #0000;
    --control-transparent-borderColor-hover: #0000;
    --control-transparent-borderColor-active: #0000;
    --control-danger-fgColor-rest: #d20f39;
    --control-danger-fgColor-hover: #dce0e8;
    --control-danger-bgColor-hover: rgba(210, 15, 57, 0.8);
    --control-danger-bgColor-active: #d20f39;
    --control-checked-bgColor-rest: #1e66f5;
    --control-checked-bgColor-hover: #3677f6;
    --control-checked-bgColor-active: #3677f6;
    --control-checked-bgColor-disabled: #6e7681;
    --control-checked-fgColor-rest: #dce0e8;
    --control-checked-fgColor-disabled: #010409;
    --control-checked-borderColor-rest: #1e66f5;
    --control-checked-borderColor-hover: #1e66f5;
    --control-checked-borderColor-active: #1e66f5;
    --control-checked-borderColor-disabled: #ccd0da;
    --controlTrack-bgColor-rest: #ccd0da;
    --controlTrack-bgColor-hover: #bcc0cc;
    --controlTrack-bgColor-active: #acb0be;
    --controlTrack-bgColor-disabled: #6e7681;
    --controlTrack-fgColor-rest: #848d97;
    --controlTrack-fgColor-disabled: #4c4f69;
    --controlTrack-borderColor-rest: #0000;
    --controlTrack-borderColor-disabled: #6e7681;
    --controlKnob-bgColor-rest: #eff1f5;
    --controlKnob-bgColor-disabled: #21262db3;
    --controlKnob-bgColor-checked: #4c4f69;
    --controlKnob-borderColor-rest: #acb0be;
    --controlKnob-borderColor-disabled: #21262db3;
    --controlKnob-borderColor-checked: #1e66f5;
    --button-default-fgColor-rest: #4c4f69;
    --button-default-bgColor-rest: #ccd0da;
    --button-default-bgColor-hover: #bcc0cc;
    --button-default-bgColor-active: #acb0be;
    --button-default-bgColor-selected: #acb0be;
    --button-default-bgColor-disabled: rgba(204, 208, 218, 0.7);
    --button-default-borderColor-rest: #bcc0cc;
    --button-default-borderColor-hover: #bcc0cc;
    --button-default-borderColor-active: #bcc0cc;
    --button-default-borderColor-disabled: rgba(204, 208, 218, 0.7);
    --button-default-shadow-resting: 0px 0px 0px 0px #000;
    --button-primary-fgColor-rest: #eff1f5;
    --button-primary-fgColor-disabled: rgba(239, 241, 245, 0.6);
    --button-primary-iconColor-rest: #eff1f5;
    --button-primary-bgColor-rest: #40a02b;
    --button-primary-bgColor-hover: #48b430;
    --button-primary-bgColor-active: #3da526;
    --button-primary-bgColor-disabled: rgba(64, 160, 43, 0.7);
    --button-primary-borderColor-rest: #40a02b;
    --button-primary-borderColor-hover: #40a02b;
    --button-primary-borderColor-active: #40a02b;
    --button-primary-borderColor-disabled: rgba(64, 160, 43, 0.7);
    --button-primary-shadow-selected: 0px 0px 0px 0px #000;
    --button-invisible-fgColor-rest: #1e66f5;
    --button-invisible-fgColor-hover: #4f87f7;
    --button-invisible-fgColor-disabled: #6e7681;
    --button-invisible-iconColor-rest: #7c7f93;
    --button-invisible-iconColor-hover: #e6edf3;
    --button-invisible-iconColor-disabled: #6e7681;
    --button-invisible-bgColor-rest: #0000;
    --button-invisible-bgColor-hover: #b1bac41f;
    --button-invisible-bgColor-active: #b1bac433;
    --button-invisible-bgColor-disabled: rgba(188, 192, 204, 0.7);
    --button-invisible-borderColor-rest: #0000;
    --button-invisible-borderColor-hover: #0000;
    --button-invisible-borderColor-disabled: rgba(188, 192, 204, 0.7);
    --button-outline-fgColor-rest: #388bfd;
    --button-outline-fgColor-hover: #58a6ff;
    --button-outline-fgColor-active: #4c4f69;
    --button-outline-fgColor-disabled: #4493f880;
    --button-outline-bgColor-rest: #f0f6fc;
    --button-outline-bgColor-hover: #bcc0cc;
    --button-outline-bgColor-active: #0d419d;
    --button-outline-bgColor-disabled: #0d1117;
    --button-outline-borderColor-hover: #f0f6fc1a;
    --button-outline-borderColor-selected: #f0f6fc1a;
    --button-outline-shadow-selected: 0px 0px 0px 0px #000;
    --button-danger-fgColor-rest: #d20f39;
    --button-danger-fgColor-hover: #eff1f5;
    --button-danger-fgColor-active: #eff1f5;
    --button-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
    --button-danger-iconColor-rest: #d20f39;
    --button-danger-iconColor-hover: #dce0e8;
    --button-danger-bgColor-rest: #ccd0da;
    --button-danger-bgColor-hover: #d20f39;
    --button-danger-bgColor-active: #ba0d33;
    --button-danger-bgColor-disabled: #eff1f5;
    --button-danger-borderColor-rest: #bcc0cc;
    --button-danger-borderColor-hover: #d20f39;
    --button-danger-borderColor-active: #ba0d33;
    --button-danger-shadow-selected: 0px 0px 0px 0px #000;
    --button-inactive-fgColor: #8b949e;
    --button-inactive-bgColor: #21262d;
    --button-star-iconColor: #df8e1d;
    --buttonCounter-default-bgColor-rest: #bcc0cc;
    --buttonCounter-invisible-bgColor-rest: #bcc0cc;
    --buttonCounter-primary-bgColor-rest: #04260f33;
    --buttonCounter-outline-bgColor-rest: #051d4d33;
    --buttonCounter-outline-bgColor-hover: #051d4d33;
    --buttonCounter-outline-bgColor-disabled: #1f6feb0d;
    --buttonCounter-outline-fgColor-rest: #388bfd;
    --buttonCounter-outline-fgColor-hover: #58a6ff;
    --buttonCounter-outline-fgColor-disabled: #4493f880;
    --buttonCounter-danger-bgColor-hover: rgba(76, 79, 105, 0.2);
    --buttonCounter-danger-bgColor-disabled: #da36330d;
    --buttonCounter-danger-bgColor-rest: #49020233;
    --buttonCounter-danger-fgColor-rest: #d20f39;
    --buttonCounter-danger-fgColor-hover: #4c4f69;
    --buttonCounter-danger-fgColor-disabled: rgba(210, 15, 57, 0.5);
    --focus-outlineColor: #1e66f5;
    --menu-bgColor-active: #e6e9ef;
    --overlay-bgColor: #eff1f5;
    --overlay-borderColor: #ccd0da;
    --overlay-backdrop-bgColor: #161b2266;
    --selectMenu-borderColor: #484f58;
    --selectMenu-bgColor-active: #0c2d6b;
    --sideNav-bgColor-selected: #21262d;
    --skeletonLoader-bgColor: #161b22;
    --timelineBadge-bgColor: #e6e9ef;
    --treeViewItem-leadingVisual-iconColor-rest: #848d97;
    --underlineNav-borderColor-active: #1e66f5;
    --underlineNav-borderColor-hover: #6e768166;
    --underlineNav-iconColor-rest: #848d97;
    --selection-bgColor: rgba(30, 102, 245, 0.3);
    --reactionButton-selected-bgColor-rest: rgba(30, 102, 245, 0.2);
    --reactionButton-selected-bgColor-hover: rgba(30, 102, 245, 0.35);
    --reactionButton-selected-fgColor-rest: #1e66f5;
    --reactionButton-selected-fgColor-hover: #1e66f5;
    --fgColor-default: #4c4f69;
    --fgColor-muted: #5c5f77;
    --fgColor-onEmphasis: #eff1f5;
    --fgColor-white: #4c4f69;
    --fgColor-disabled: #acb0be;
    --fgColor-link: #1e66f5;
    --fgColor-neutral: #6e7681;
    --fgColor-accent: #1e66f5;
    --fgColor-success: #40a02b;
    --fgColor-attention: #df8e1d;
    --fgColor-severe: #fe640b;
    --fgColor-danger: #d20f39;
    --fgColor-open: #40a02b;
    --fgColor-closed: #d20f39;
    --fgColor-done: #8839ef;
    --fgColor-sponsors: #ea76cb;
    --bgColor-default: #eff1f5;
    --bgColor-muted: #e6e9ef;
    --bgColor-inset: #dce0e8;
    --bgColor-emphasis: #7c7f93;
    --bgColor-inverse: #4c4f69;
    --bgColor-disabled: #21262db3;
    --bgColor-transparent: #0000;
    --bgColor-neutral-muted: rgba(204, 208, 218, 0.4);
    --bgColor-neutral-emphasis: #6c6f85;
    --bgColor-accent-muted: rgba(30, 102, 245, 0.2);
    --bgColor-accent-emphasis: #1e66f5;
    --bgColor-success-muted: #2ea04326;
    --bgColor-success-emphasis: #40a02b;
    --bgColor-attention-muted: rgba(223, 142, 29, 0.15);
    --bgColor-attention-emphasis: #df8e1d;
    --bgColor-severe-muted: rgba(254, 100, 11, 0.26);
    --bgColor-severe-emphasis: #fe640b;
    --bgColor-danger-muted: rgba(210, 15, 57, 0.26);
    --bgColor-danger-emphasis: #d20f39;
    --bgColor-open-muted: #2ea0431a;
    --bgColor-open-emphasis: #40a02b;
    --bgColor-closed-muted: rgba(210, 15, 57, 0.15);
    --bgColor-closed-emphasis: #d20f39;
    --bgColor-done-muted: #a371f726;
    --bgColor-done-emphasis: #8839ef;
    --bgColor-sponsors-muted: #db61a21a;
    --bgColor-sponsors-emphasis: #ea76cb;
    --borderColor-default: #bcc0cc;
    --borderColor-muted: #ccd0da;
    --borderColor-emphasis: #484f58;
    --borderColor-disabled: #21262db3;
    --borderColor-transparent: #0000;
    --borderColor-neutral-muted: #6e768166;
    --borderColor-neutral-emphasis: #6e7681;
    --borderColor-accent-muted: rgba(30, 102, 245, 0.5);
    --borderColor-accent-emphasis: #1e66f5;
    --borderColor-success-muted: #388c26;
    --borderColor-success-emphasis: #40a02b;
    --borderColor-attention-muted: rgba(221, 120, 120, 0.3);
    --borderColor-attention-emphasis: #dd7878;
    --borderColor-severe-muted: #fe640b;
    --borderColor-severe-emphasis: #bd561d;
    --borderColor-danger-muted: #d20f39;
    --borderColor-danger-emphasis: #d20f39;
    --borderColor-open-muted: #388c26;
    --borderColor-open-emphasis: #40a02b;
    --borderColor-closed-muted: #d20f39;
    --borderColor-closed-emphasis: #d20f39;
    --borderColor-done-muted: #7287fd;
    --borderColor-done-emphasis: #8839ef;
    --borderColor-sponsors-muted: #db61a266;
    --borderColor-sponsors-emphasis: #ea76cb;
    --color-ansi-black: #bcc0cc;
    --color-ansi-black-bright: #acb0be;
    --color-ansi-gray: #acb0be;
    --color-ansi-white: #5c5f77;
    --color-ansi-white-bright: #6c6f85;
    --color-ansi-red: #d20f39;
    --color-ansi-red-bright: #d20f39;
    --color-ansi-green: #40a02b;
    --color-ansi-green-bright: #40a02b;
    --color-ansi-yellow: #df8e1d;
    --color-ansi-yellow-bright: #df8e1d;
    --color-ansi-blue: #1e66f5;
    --color-ansi-blue-bright: #1e66f5;
    --color-ansi-magenta: #ea76cb;
    --color-ansi-magenta-bright: #ea76cb;
    --color-ansi-cyan: #179299;
    --color-ansi-cyan-bright: #179299;
    --color-prettylights-syntax-comment: #8c8fa1;
    --color-prettylights-syntax-constant: #1e66f5;
    --color-prettylights-syntax-entity: #1e66f5;
    --color-prettylights-syntax-storage-modifier-import: #fe640b;
    --color-prettylights-syntax-entity-tag: #179299;
    --color-prettylights-syntax-keyword: #ea76cb;
    --color-prettylights-syntax-string: #40a02b;
    --color-prettylights-syntax-variable: #fe640b;
    --color-prettylights-syntax-invalid-illegal-text: #d20f39;
    --color-prettylights-syntax-invalid-illegal-bg: rgba(210, 15, 57, 0.15);
    --color-prettylights-syntax-markup-heading: #179299;
    --color-prettylights-syntax-markup-italic: #df8e1d;
    --color-prettylights-syntax-markup-bold: #df8e1d;
    --color-prettylights-syntax-markup-deleted-text: #4c4f69;
    --color-prettylights-syntax-markup-deleted-bg: rgba(210, 15, 57, 0.4);
    --color-prettylights-syntax-markup-inserted-text: #4c4f69;
    --color-prettylights-syntax-markup-inserted-bg: rgba(64, 160, 43, 0.4);
    --color-prettylights-syntax-markup-changed-text: #4c4f69;
    --color-prettylights-syntax-markup-changed-bg: rgba(223, 142, 29, 0.4);
    --color-prettylights-syntax-markup-ignored-text: #4c4f69;
    --bgColor-white: #eff1f5;
    --color-scale-white: #eff1f5;
    --color-scale-gray-3: #7c7f93;
    --color-scale-gray-5: #9ca0b0;
    --color-scale-gray-6: #bcc0cc;
    --color-scale-gray-7: #bcc0cc;
    --color-scale-blue-2: #04a5e5;
    --color-scale-blue-5: #1e66f5;
    --color-scale-green-3: #40a02b;
    --color-scale-green-4: #40a02b;
    --color-scale-yellow-3: #fe640b;
    --color-scale-orange-4: #fe640b;
    --color-scale-red-4: #d20f39;
    --shadow-inset: inset 0px 1px 0px 0px #dce0e8;
    --shadow-resting-xsmall: 0px 1px 0px 0px #dce0e8;
    --shadow-resting-small: 0px 1px 0px 0px #dce0e8, 0px 1px 3px 0px #dce0e8;
    --shadow-resting-medium: 0px 3px 6px 0px #dce0e8;
    --shadow-floating-small: 0px 0px 0px 1px #eff1f5, 0px 6px 12px -3px #dce0e8,
    0px 6px 18px 0px #dce0e8;
    --shadow-floating-medium: 0px 0px 0px 1px #ccd0da,
    0px 8px 16px -4px #dce0e8, 0px 4px 32px -4px #dce0e8,
    0px 24px 48px -12px #dce0e8, 0px 48px 96px -24px #dce0e8;
    --shadow-floating-large: 0px 0px 0px 1px #ccd0da,
    0px 24px 48px 0px #010409;
    --shadow-floating-xlarge: 0px 0px 0px 1px #ccd0da,
    0px 32px 64px 0px #010409;
    --shadow-floating-legacy: 0px 6px 12px -3px #dce0e8, 0px 6px 18px 0px #dce0e8;
    --outline-focus: #1e66f5 solid 2px;
    /* Header when logged out */
}
[data-color-mode="light"][data-light-theme="light"] ::selection,
[data-color-mode="dark"][data-dark-theme="light"] ::selection {
    background-color: rgba(30, 102, 245, 0.3);
}
[data-color-mode="light"][data-light-theme="light"] input::placeholder,
[data-color-mode="dark"][data-dark-theme="light"] input::placeholder,
[data-color-mode="light"][data-light-theme="light"] textarea::placeholder,
[data-color-mode="dark"][data-dark-theme="light"] textarea::placeholder {
    color: #6c6f85 !important;
}
[data-color-mode="light"][data-light-theme="light"] .cm-placeholder,
[data-color-mode="dark"][data-dark-theme="light"] .cm-placeholder {
    color: #6c6f85;
}
[data-color-mode="light"][data-light-theme="light"] .turbo-progress-bar,
[data-color-mode="dark"][data-dark-theme="light"] .turbo-progress-bar {
    background-color: #1e66f5;
}
[data-color-mode="light"][data-light-theme="light"] .form-select,
[data-color-mode="dark"][data-dark-theme="light"] .form-select {
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%236c6f85%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m4.427%209.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%209H4.604a.25.25%200%200%200-.177.427M4.423%206.47%207.82%203.072a.25.25%200%200%201%20.354%200L11.57%206.47a.25.25%200%200%201-.177.427H4.6a.25.25%200%200%201-.177-.427%22/%3E%3C/svg%3E");
}
[data-color-mode="light"][data-light-theme="light"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"],
[data-color-mode="dark"][data-dark-theme="light"] img[src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"] {
    content: url("https://giscus.catppuccin.com/assets/loading_48x48.gif");
}
[data-color-mode="light"][data-light-theme="light"] .HeaderMenu-link,
[data-color-mode="dark"][data-dark-theme="light"] .HeaderMenu-link {
    color: var(--fgColor-default);
}
[data-color-mode="light"][data-light-theme="light"] .HeaderMenu-link:hover,
[data-color-mode="dark"][data-dark-theme="light"] .HeaderMenu-link:hover {
    color: var(--fgColor-default);
}
[data-color-mode="light"][data-light-theme="light"] .header-search-button.placeholder,
[data-color-mode="dark"][data-dark-theme="light"] .header-search-button.placeholder {
    color: #6c6f85;
}
[data-color-mode="light"][data-light-theme="light"] .HeaderMenu-toggle-bar,
[data-color-mode="dark"][data-dark-theme="light"] .HeaderMenu-toggle-bar {
    background-color: #4c4f69;
}
[data-color-mode="light"][data-light-theme="light"] .notification-indicator .mail-status,
[data-color-mode="dark"][data-dark-theme="light"] .notification-indicator .mail-status {
    background-image: linear-gradient(#1e66f5, #0b57ef);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-r,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-r {
    color: var(--color-ansi-red);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-y,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-y {
    color: var(--color-ansi-yellow);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-g,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-g {
    color: var(--color-ansi-green);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-b,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-b {
    color: var(--color-ansi-blue);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-c,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-c {
    color: var(--color-ansi-cyan);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-m,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-m {
    color: var(--color-ansi-magenta);
}
[data-color-mode="light"][data-light-theme="light"] .CheckStep .ansifg-gr,
[data-color-mode="dark"][data-dark-theme="light"] .CheckStep .ansifg-gr {
    color: var(--color-ansi-gray);
}
[data-color-mode="light"][data-light-theme="light"] .js-activity-overview-graph .js-highlight-blob,
[data-color-mode="dark"][data-dark-theme="light"] .js-activity-overview-graph .js-highlight-blob {
    fill: #1e66f5;
    stroke: #1e66f5;
}
html:not([data-light-theme="light"], [data-light-theme="dark"]) body:not(.logged-out)::after,
html:not([data-dark-theme="dark"], [data-dark-theme="light"]) body:not(.logged-out)::after {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    max-width: 40ch;
    background-color: var(--color-danger-fg);
    color: var(--color-header-bg);
    content: "Unsupported GitHub theme detected! Please switch to the default light/dark theme via the GitHub Appearance settings to get the best experience for the Catppuccin GitHub userstyle.";
    z-index: 9999;
}

/* prettier-ignore */
`)