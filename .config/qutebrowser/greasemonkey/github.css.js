// ==UserScript==
// @name    Userstyle (github.css)
// @include    *github.com/*
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

	--accent-color: var(--blue)
}

body {
	accent-color: var(--accent-color);
	--bgColor-default: var(--base);
	--color-canvas-default-transparent: rgba(13, 17, 23, 0);
	--color-page-header-bg: var(--base);
	--color-marketing-icon-primary: var(--sky);
	--color-marketing-icon-secondary: var(--blue);
	--color-diff-blob-addition-num-text: var(--text);
	--color-diff-blob-addition-fg: var(--text);
	--color-diff-blob-addition-num-bg: fadeout(var(--green), 70%);
	--color-diff-blob-addition-line-bg: fadeout(var(--green), 85%);
	--color-diff-blob-addition-word-bg: fadeout(var(--green), 70%);
	--color-diff-blob-deletion-num-text: var(--text);
	--color-diff-blob-deletion-fg: var(--text);
	--color-diff-blob-deletion-num-bg: fadeout(var(--red), 70%);
	--color-diff-blob-deletion-line-bg: fadeout(var(--red), 85%);
	--color-diff-blob-deletion-word-bg: fadeout(var(--red), 70%);
	--color-diff-blob-hunk-num-bg: fadeout(var(--blue), 60%);
	--color-diff-blob-expander-icon: #8b949e;
	--color-diff-blob-selected-line-highlight-mix-blend-mode: screen;
	--color-diffstat-deletion-border: rgba(240, 246, 252, 0.1);
	--color-diffstat-addition-border: rgba(240, 246, 252, 0.1);
	--color-diffstat-addition-bg: var(--green);
	--color-search-keyword-hl: rgba(210, 153, 34, 0.4);
	--color-prettylights-syntax-comment: var(--overlay1);
	--color-prettylights-syntax-constant: var(--blue);
	--color-prettylights-syntax-entity: var(--blue);
	--color-prettylights-syntax-storage-modifier-import: var(--peach);
	--color-prettylights-syntax-entity-tag: var(--teal);
	--color-prettylights-syntax-keyword: var(--pink);
	--color-prettylights-syntax-string: var(--green);
	--color-prettylights-syntax-variable: var(--peach);
	--color-prettylights-syntax-brackethighlighter-unmatched: #f0f;
	--color-prettylights-syntax-invalid-illegal-text: var(--red);
	--color-prettylights-syntax-invalid-illegal-bg: fadeout(var(--red), 85%);
	--color-prettylights-syntax-carriage-return-text: #f0f;
	--color-prettylights-syntax-carriage-return-bg: #f0f;
	--color-prettylights-syntax-string-regexp: #f0f;
	--color-prettylights-syntax-markup-list: #f0f;
	--color-prettylights-syntax-markup-heading: var(--teal);
	--color-prettylights-syntax-markup-italic: var(--yellow);
	--color-prettylights-syntax-markup-bold: var(--yellow);
	--color-prettylights-syntax-markup-deleted-text: var(--text);
	--color-prettylights-syntax-markup-deleted-bg: fadeout(var(--red), 60%);
	--color-prettylights-syntax-markup-inserted-text: var(--text);
	--color-prettylights-syntax-markup-inserted-bg: fadeout(var(--green), 60%);
	--color-prettylights-syntax-markup-changed-text: var(--text);
	--color-prettylights-syntax-markup-changed-bg: fadeout(var(--yellow), 60%);
	--color-prettylights-syntax-markup-ignored-text: var(--text);
	--color-prettylights-syntax-markup-ignored-bg: #f0f;
	--color-prettylights-syntax-meta-diff-range: var(--mauve);
	--color-prettylights-syntax-brackethighlighter-angle: #f0f;
	--color-prettylights-syntax-sublimelinter-gutter-mark: #f0f;
	--color-prettylights-syntax-constant-other-reference-link: #f0f;
	--color-codemirror-text: var(--text);
	--color-codemirror-bg: var(--base);
	--color-codemirror-gutters-bg: var(--base);
	--color-codemirror-guttermarker-text: var(--base);
	--color-codemirror-guttermarker-subtle-text: #6e7681;
	--color-codemirror-linenumber-text: #8b949e;
	--color-codemirror-cursor: #c9d1d9;
	--color-codemirror-selection-bg: rgba(56, 139, 253, 0.4);
	--color-codemirror-activeline-bg: rgba(110, 118, 129, 0.1);
	--color-codemirror-matchingbracket-text: #c9d1d9;
	--color-codemirror-lines-bg: var(--base);
	--color-codemirror-syntax-comment: #8b949e;
	--color-codemirror-syntax-constant: #79c0ff;
	--color-codemirror-syntax-entity: #d2a8ff;
	--color-codemirror-syntax-keyword: #ff7b72;
	--color-codemirror-syntax-storage: #ff7b72;
	--color-codemirror-syntax-string: #a5d6ff;
	--color-codemirror-syntax-support: #79c0ff;
	--color-codemirror-syntax-variable: #ffa657;
	--color-checks-bg: var(--mantle);
	--color-checks-run-border-width: 1px;
	--color-checks-container-border-width: 1px;
	--color-checks-text-primary: var(--text);
	--color-checks-text-secondary: var(--subtext1);
	--color-checks-text-link: var(--sapphire);
	--color-checks-btn-icon: var(--text);
	--color-checks-btn-hover-icon: var(--text);
	--color-checks-btn-hover-bg: var(--crust);
	--color-checks-input-text: var(--surface1);
	--color-checks-input-placeholder-text: var(--subtext1);
	--color-checks-input-focus-text: var(--text);
	--color-checks-input-bg: var(--surface0);
	--color-checks-input-shadow: 0 0 0 1px;
	--color-checks-donut-error: var(--red);
	--color-checks-donut-pending: var(--peach);
	--color-checks-donut-success: var(--green);
	--color-checks-donut-neutral: var(--overlay2);
	--color-checks-dropdown-text: var(--text);
	--color-checks-dropdown-bg: var(--surface0);
	--color-checks-dropdown-border: var(--surface1);
	--color-checks-dropdown-shadow: var(--crust);
	--color-checks-dropdown-hover-text: var(--subtext0);
	--color-checks-dropdown-hover-bg: var(--mantle);
	--color-checks-dropdown-btn-hover-text: var(--text);
	--color-checks-dropdown-btn-hover-bg: var(--mantle);
	--color-checks-scrollbar-thumb-bg: var(--mantle);
	--color-checks-header-label-text: var(--text);
	--color-checks-header-label-open-text: var(--accent-color);
	--color-checks-header-border: var(--surface0);
	--color-checks-header-icon: var(--text);
	--color-checks-line-text: var(--subtext0);
	--color-checks-line-num-text: var(--subtext0);
	--color-checks-line-timestamp-text: var(--subtext0);
	--color-checks-line-hover-bg: var(--surface0);
	--color-checks-line-selected-bg: var(--surface0);
	--color-checks-line-selected-num-text: #dc2286;
	--color-checks-line-dt-fm-text: #dc2286;
	--color-checks-line-dt-fm-bg: #dc2286;
	--color-checks-gate-bg: rgba(187, 128, 9, 0.15);
	--color-checks-gate-text: var(--text);
	--color-checks-gate-waiting-text: var(--yellow);
	--color-checks-step-header-open-bg: var(--surface0);
	--color-checks-step-error-text: var(--maroon);
	--color-checks-step-warning-text: var(--peach);
	--color-checks-logline-text: var(--text);
	--color-checks-logline-num-text: var(--text);
	--color-checks-logline-debug-text: var(--mauve);
	--color-checks-logline-error-text: var(--text);
	--color-checks-logline-error-num-text: var(--maroon);
	--color-checks-logline-error-bg: fadeout(var(--maroon), 85%);
	--color-checks-logline-warning-text: var(--subtext1);
	--color-checks-logline-warning-num-text: var(--peach);
	--color-checks-logline-warning-bg: fadeout(var(--peach), 85%);
	--color-checks-logline-command-text: var(--blue);
	--color-checks-logline-section-text: var(--green);
	--color-checks-ansi-black: var(--surface1);
	--color-checks-ansi-black-bright: var(--surface2);
	--color-checks-ansi-white: var(--subtext1);
	--color-checks-ansi-white-bright: var(--subtext0);
	--divider-color: var(--surface1);
	--underlineNav-borderColor-active: var(--accent-color);

	--color-checks-ansi-gray: #f0f;
	--color-checks-ansi-red: var(--red);
	--color-checks-ansi-red-bright: var(--red);
	--color-checks-ansi-green: var(--green);
	--color-checks-ansi-green-bright: var(--green);
	--color-checks-ansi-yellow: var(--yellow);
	--color-checks-ansi-yellow-bright: var(--yellow);
	--color-checks-ansi-blue: var(--blue);
	--color-checks-ansi-blue-bright: var(--blue);
	--color-checks-ansi-magenta: var(--pink);
	--color-checks-ansi-magenta-bright: var(--pink);
	--color-checks-ansi-cyan: var(--teal);
	--color-checks-ansi-cyan-bright: var(--teal);
	--color-project-header-bg: #0d1117;
	--color-project-sidebar-bg: #161b22;
	--color-project-gradient-in: #161b22;
	--color-project-gradient-out: rgba(22, 27, 34, 0);
	--color-mktg-btn-bg: #f6f8fa;
	--color-mktg-btn-shadow-outline: rgb(255, 255, 255 / 25%) 0 0 0 1px inset;
	--color-mktg-btn-shadow-focus: rgb(255, 255, 255 / 25%) 0 0 0 4px;
	--color-mktg-btn-shadow-hover: 0 4px 7px rgba(0, 0, 0, 0.15),
	0 100px 80px rgba(255, 255, 255, 0.02),
	0 42px 33px rgba(255, 255, 255, 0.024),
	0 22px 18px rgba(255, 255, 255, 0.028),
	0 12px 10px rgba(255, 255, 255, 0.034),
	0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07);
	--color-mktg-btn-shadow-hover-muted: rgb(255, 255, 255) 0 0 0 2px inset;
	--color-avatar-bg: rgba(255, 255, 255, 0.1);
	--color-avatar-border: rgba(240, 246, 252, 0.1);
	--color-avatar-stack-fade: #30363d;
	--color-avatar-stack-fade-more: #21262d;
	--color-avatar-child-shadow: -2px -2px 0 #0d1117;
	--color-topic-tag-border: rgba(0, 0, 0, 0);
	--color-counter-border: rgba(0, 0, 0, 0);
	--color-select-menu-backdrop-border: #484f58;
	--color-select-menu-tap-highlight: rgba(48, 54, 61, 0.5);
	--color-select-menu-tap-focus-bg: #0c2d6b;
	--color-overlay-shadow: 0 0 0 1px #30363d, 0 16px 32px rgba(1, 4, 9, 0.85);
	--color-header-text: var(--subtext2);
	--color-header-bg: var(--base);

	--color-header-divider: #8b949e;
	--color-header-logo: var(--text);
	--color-header-search-bg: var(--surface0);
	--color-header-search-border: var(--surface1);
	--color-sidenav-selected-bg: var(--surface1);
	--color-menu-bg-active: var(--surface2);
	--color-input-disabled-bg: rgba(110, 118, 129, 0);
	--color-timeline-badge-bg: var(--surface0);
	--color-ansi-black: #484f58;
	--color-ansi-black-bright: #6e7681;
	--color-ansi-white: #b1bac4;
	--color-ansi-white-bright: #ffffff;
	--color-ansi-gray: #6e7681;
	--color-ansi-red: #ff7b72;
	--color-ansi-red-bright: #ffa198;
	--color-ansi-green: #3fb950;
	--color-ansi-green-bright: #56d364;
	--color-ansi-yellow: #d29922;
	--color-ansi-yellow-bright: #e3b341;
	--color-ansi-blue: #58a6ff;
	--color-ansi-blue-bright: #79c0ff;
	--color-ansi-magenta: #bc8cff;
	--color-ansi-magenta-bright: #d2a8ff;
	--color-ansi-cyan: #39c5cf;
	--color-ansi-cyan-bright: #56d4dd;
	--color-btn-text: var(--text);
	--color-btn-bg: var(--surface0);
	--color-btn-border: transparent;
	--color-btn-shadow: 0 0 transparent;
	--color-btn-inset-shadow: 0 0 transparent;
	--color-btn-hover-bg: var(--surface1);
	--color-btn-hover-border: transparent;
	--color-btn-active-bg: var(--surface2);
	--color-btn-active-border: transparent;
	--color-btn-selected-bg: var(--surface2);
	--color-btn-focus-bg: #21262d;
	--color-btn-focus-border: #8b949e;
	--color-btn-focus-shadow: 0 0 0 3px rgba(139, 148, 158, 0.3);
	--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(1, 4, 9, 0.15);
	--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(31, 111, 235, 0.3);
	--color-btn-counter-bg: var(--surface2);
	--color-btn-primary-text: var(--base);
	--color-btn-primary-bg: var(--green);
	--color-btn-primary-border: transparent;
	--color-btn-primary-shadow: 0 0 transparent;
	--color-btn-primary-inset-shadow: 0 0 transparent;
	--color-btn-primary-hover-bg: mix(var(--green), var(--text), 30%);
	--color-btn-primary-hover-border: rgba(240, 246, 252, 0.1);
	--color-btn-primary-selected-bg: mix(var(--green), var(--text), 50%);
	--color-btn-primary-selected-shadow: 0 0 transparent;
	--color-btn-primary-disabled-text: var(--crust);
	--color-btn-primary-disabled-bg: mix(var(--green), var(--base), 60%);
	--color-btn-primary-disabled-border: transparent;
	--color-btn-primary-focus-bg: #238636;
	--color-btn-primary-focus-border: rgba(240, 246, 252, 0.1);
	--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
	--color-btn-primary-icon: var(--base);
	--color-btn-primary-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-outline-text: #58a6ff;
	--color-btn-outline-hover-text: #58a6ff;
	--color-btn-outline-hover-bg: #30363d;
	--color-btn-outline-hover-border: rgba(240, 246, 252, 0.1);
	--color-btn-outline-hover-shadow: 0 1px 0 rgba(1, 4, 9, 0.1);
	--color-btn-outline-hover-inset-shadow: inset 0 1px 0
	rgba(255, 255, 255, 0.03);
	--color-btn-outline-hover-counter-bg: rgba(255, 255, 255, 0.2);
	--color-btn-outline-selected-text: #ffffff;
	--color-btn-outline-selected-bg: #0d419d;
	--color-btn-outline-selected-border: rgba(240, 246, 252, 0.1);
	--color-btn-outline-selected-shadow: 0 0 transparent;
	--color-btn-outline-disabled-text: var(--subtext0);
	--color-btn-outline-disabled-bg: var(--surface2);
	--color-btn-outline-disabled-counter-bg: rgba(31, 111, 235, 0.05);
	--color-btn-outline-focus-border: rgba(240, 246, 252, 0.1);
	--color-btn-outline-focus-shadow: 0 0 0 3px rgba(17, 88, 199, 0.4);
	--color-btn-outline-counter-bg: rgba(31, 111, 235, 0.1);
	--color-btn-danger-text: var(--base);
	--color-btn-danger-bg: var(--red);
	--color-btn-danger-border: transparent;
	--color-btn-danger-shadow: 0 0 transparent;
	--color-btn-danger-inset-shadow: 0 0 transparent;
	--color-btn-danger-hover-bg: mix(var(--red), var(--text), 30%);
	--color-btn-danger-hover-border: rgba(240, 246, 252, 0.1);
	--color-btn-danger-selected-bg: mix(var(--red), var(--text), 50%);
	--color-btn-danger-selected-shadow: 0 0 transparent;
	--color-btn-danger-disabled-text: var(--crust);
	--color-btn-danger-disabled-bg: mix(var(--red), var(--base), 60%);
	--color-btn-danger-disabled-border: transparent;
	--color-btn-danger-focus-bg: #238636;
	--color-btn-danger-focus-border: rgba(240, 246, 252, 0.1);
	--color-btn-danger-focus-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
	--color-btn-danger-icon: var(--base);
	--color-btn-danger-counter-bg: rgba(255, 255, 255, 0.2);
	--color-underlinenav-icon: #6e7681;
	--color-underlinenav-border-hover: rgba(110, 118, 129, 0.4);
	--color-action-list-item-inline-divider: var(--surface2);
	--color-action-list-item-default-hover-bg: var(--surface0);
	--color-action-list-item-default-hover-border: rgba(0, 0, 0, 0);
	--color-action-list-item-default-active-bg: rgba(177, 186, 196, 0.2);
	--color-action-list-item-default-active-border: rgba(0, 0, 0, 0);
	--color-action-list-item-default-selected-bg: var(--surface1);
	--color-action-list-item-danger-hover-bg: rgba(248, 81, 73, 0.16);
	--color-action-list-item-danger-active-bg: rgba(248, 81, 73, 0.24);
	--color-action-list-item-danger-hover-text: #ff7b72;
	--color-switch-track-bg: #010409;
	--color-switch-track-border: #6e7681;
	--color-switch-track-checked-bg: rgba(31, 111, 235, 0.35);
	--color-switch-track-checked-hover-bg: rgba(31, 111, 235, 0.5);
	--color-switch-track-checked-active-bg: rgba(31, 111, 235, 0.65);
	--color-switch-track-checked-border: #58a6ff;
	--color-switch-knob-checked-bg: #1f6feb;
	--color-switch-knob-checked-disabled-bg: #484f58;
	--color-fg-default: var(--text);
	--color-fg-muted: var(--subtext1);
	--color-fg-subtle: var(--subtext1);
	--color-fg-on-emphasis: var(--base);
	--color-canvas-default: var(--base);
	--color-canvas-overlay: var(--mantle);
	--color-canvas-inset: var(--surface0);
	--color-canvas-subtle: var(--mantle);
	--color-border-default: var(--surface1);
	--color-border-muted: var(--surface0);
	--color-border-subtle: rgba(240, 246, 252, 0.1);
	--color-shadow-small: 0 0 transparent;
	--color-shadow-medium: 0 3px 6px var(--crust);
	--color-shadow-large: 0 8px 24px var(--crust);
	--color-shadow-extra-large: 0 12px 48px var(--crust);
	--color-neutral-emphasis-plus: var(--overlay0);
	--color-neutral-emphasis: var(--overlay2);
	--color-neutral-muted: rgba(110, 118, 129, 0.4);
	--color-neutral-subtle: rgba(110, 118, 129, 0.1);
	--color-accent-fg: var(--accent-color);
	--color-accent-emphasis: var(--accent-color);
	--color-accent-muted: fadeout(var(--accent-color), 60%);
	--color-accent-subtle: fadeout(var(--accent-color), 85%);
	--color-success-fg: var(--green);
	--color-success-emphasis: var(--green);
	--color-success-muted: rgba(46, 160, 67, 0.4);
	--color-success-subtle: rgba(46, 160, 67, 0.15);
	--color-attention-fg: var(--peach);
	--color-attention-emphasis: var(--peach);
	--color-attention-muted: rgba(187, 128, 9, 0.4);
	--color-attention-subtle: rgba(187, 128, 9, 0.15);
	--color-severe-fg: var(--maroon);
	--color-severe-emphasis: var(--maroon);
	--color-severe-muted: rgba(219, 109, 40, 0.4);
	--color-severe-subtle: rgba(219, 109, 40, 0.15);
	--color-danger-fg: var(--red);
	--color-danger-emphasis: var(--red);
	--color-danger-muted: rgba(248, 81, 73, 0.4);
	--color-danger-subtle: rgba(248, 81, 73, 0.15);
	--color-open-fg: var(--green);
	--color-open-emphasis: var(--green);
	--color-open-muted: rgba(46, 160, 67, 0.4);
	--color-open-subtle: rgba(46, 160, 67, 0.15);
	--color-closed-fg: var(--red);
	--color-closed-emphasis: var(--red);
	--color-closed-muted: rgba(248, 81, 73, 0.4);
	--color-closed-subtle: rgba(248, 81, 73, 0.15);
	--color-done-fg: var(--mauve);
	--color-done-emphasis: var(--mauve);
	--color-done-muted: rgba(163, 113, 247, 0.4);
	--color-done-subtle: rgba(163, 113, 247, 0.15);
	--color-sponsors-fg: var(--mauve);
	--color-sponsors-emphasis: var(--mauve);
	--color-sponsors-muted: rgba(219, 97, 162, 0.4);
	--color-sponsors-subtle: rgba(219, 97, 162, 0.15);
	--color-primer-fg-disabled: fadeout(var(--accent-color), 50%);
	--color-primer-canvas-backdrop: rgba(1, 4, 9, 0.8);
	--color-primer-canvas-sticky: rgba(13, 17, 23, 0.95);
	--color-primer-border-active: var(--red);
	--color-primer-border-contrast: rgba(255, 255, 255, 0.2);
	--color-primer-shadow-highlight: 0 0 transparent;
	--color-primer-shadow-inset: 0 0 transparent;
	--color-primer-shadow-focus: 0 0 0 3px #0c2d6b;
	--color-scale-black: #010409;
	--color-scale-white: #ffffff;
	--color-scale-gray-0: #f0f6fc;
	--color-scale-gray-1: #c9d1d9;
	--color-scale-gray-2: #b1bac4;
	--color-scale-gray-3: #8b949e;
	--color-scale-gray-4: #6e7681;
	--color-scale-gray-5: #484f58;
	--color-scale-gray-6: #30363d;
	--color-scale-gray-7: #21262d;
	--color-scale-gray-8: #161b22;
	--color-scale-gray-9: #0d1117;
	--color-scale-blue-0: #cae8ff;
	--color-scale-blue-1: #a5d6ff;
	--color-scale-blue-2: #79c0ff;
	--color-scale-blue-3: #58a6ff;
	--color-scale-blue-4: #388bfd;
	--color-scale-blue-5: #1f6feb;
	--color-scale-blue-6: #1158c7;
	--color-scale-blue-7: #0d419d;
	--color-scale-blue-8: #0c2d6b;
	--color-scale-blue-9: #051d4d;
	--color-scale-green-0: #aff5b4;
	--color-scale-green-1: #7ee787;
	--color-scale-green-2: #56d364;
	--color-scale-green-3: #3fb950;
	--color-scale-green-4: #2ea043;
	--color-scale-green-5: #238636;
	--color-scale-green-6: #196c2e;
	--color-scale-green-7: #0f5323;
	--color-scale-green-8: #033a16;
	--color-scale-green-9: #04260f;
	--color-scale-yellow-0: #f8e3a1;
	--color-scale-yellow-1: #f2cc60;
	--color-scale-yellow-2: #e3b341;
	--color-scale-yellow-3: #d29922;
	--color-scale-yellow-4: #bb8009;
	--color-scale-yellow-5: #9e6a03;
	--color-scale-yellow-6: #845306;
	--color-scale-yellow-7: #693e00;
	--color-scale-yellow-8: #4b2900;
	--color-scale-yellow-9: #341a00;
	--color-scale-orange-0: #ffdfb6;
	--color-scale-orange-1: #ffc680;
	--color-scale-orange-2: #ffa657;
	--color-scale-orange-3: #f0883e;
	--color-scale-orange-4: #db6d28;
	--color-scale-orange-5: #bd561d;
	--color-scale-orange-6: #9b4215;
	--color-scale-orange-7: #762d0a;
	--color-scale-orange-8: #5a1e02;
	--color-scale-orange-9: #3d1300;
	--color-scale-red-0: #ffdcd7;
	--color-scale-red-1: #ffc1ba;
	--color-scale-red-2: #ffa198;
	--color-scale-red-3: #ff7b72;
	--color-scale-red-4: #f85149;
	--color-scale-red-5: #da3633;
	--color-scale-red-6: #b62324;
	--color-scale-red-7: #8e1519;
	--color-scale-red-8: #67060c;
	--color-scale-red-9: #490202;
	--color-scale-purple-0: #eddeff;
	--color-scale-purple-1: #e2c5ff;
	--color-scale-purple-2: #d2a8ff;
	--color-scale-purple-3: #bc8cff;
	--color-scale-purple-4: #a371f7;
	--color-scale-purple-5: #8957e5;
	--color-scale-purple-6: #6e40c9;
	--color-scale-purple-7: #553098;
	--color-scale-purple-8: #3c1e70;
	--color-scale-purple-9: #271052;
	--color-scale-pink-0: #ffdaec;
	--color-scale-pink-1: #ffbedd;
	--color-scale-pink-2: #ff9bce;
	--color-scale-pink-3: #f778ba;
	--color-scale-pink-4: #db61a2;
	--color-scale-pink-5: #bf4b8a;
	--color-scale-pink-6: #9e3670;
	--color-scale-pink-7: #7d2457;
	--color-scale-pink-8: #5e103e;
	--color-scale-pink-9: #42062a;
	--color-scale-coral-0: #ffddd2;
	--color-scale-coral-1: #ffc2b2;
	--color-scale-coral-2: #ffa28b;
	--color-scale-coral-3: #f78166;
	--color-scale-coral-4: #ea6045;
	--color-scale-coral-5: #cf462d;
	--color-scale-coral-6: #ac3220;
	--color-scale-coral-7: #872012;
	--color-scale-coral-8: #640d04;
	--color-scale-coral-9: #460701;
}

:root {
	--color-workflow-card-connector: var(--overlay0);
	--color-workflow-card-connector-bg: var(--overlay0);
	--color-workflow-card-connector-inactive: var(--surface1);
	--color-workflow-card-connector-inactive-bg: var(--surface1);
	--color-workflow-card-connector-highlight: var(--accent-color);
	--color-workflow-card-connector-highlight-bg: var(--accent-color);
	--color-workflow-card-bg: var(--surface1);
	--color-workflow-card-inactive-bg: var(--surface0);
	--color-workflow-card-header-shadow: #dc2286;
	--color-workflow-card-progress-complete-bg: fadeout(var(--blue), 85%);
	--color-workflow-card-progress-incomplete-bg: var(--surface1);
	--color-discussions-state-answered-icon: var(--color-scale-green-3);
	--color-bg-discussions-row-emoji-box: var(--color-scale-gray-6);
	--color-notifications-button-text: var(--color-scale-white);
	--color-notifications-button-hover-text: var(--color-scale-white);
	--color-notifications-button-hover-bg: var(--color-scale-blue-4);
	--color-notifications-row-read-bg: var(--color-canvas-default);
	--color-notifications-row-bg: var(--color-canvas-subtle);
	--color-icon-directory: var(--text);
	--color-checks-step-error-icon: var(--color-scale-red-4);
	--color-calendar-halloween-graph-day-L1-bg: #631c03;
	--color-calendar-halloween-graph-day-L2-bg: #bd561d;
	--color-calendar-halloween-graph-day-L3-bg: #fa7a18;
	--color-calendar-halloween-graph-day-L4-bg: #fddf68;
	--color-calendar-graph-day-bg: var(--surface0);
	--color-calendar-graph-day-border: transparent;
	/* These could do with a bit of refining */
	--color-calendar-graph-day-L1-bg: spin(fade(var(--green), 40%), 15deg);
	--color-calendar-graph-day-L2-bg: spin(fade(var(--green), 60%), 10deg);
	--color-calendar-graph-day-L3-bg: spin(fade(var(--green), 80%), 5deg);
	--color-calendar-graph-day-L4-bg: var(--green);
	--color-calendar-graph-day-L1-border: transparent;
	--color-calendar-graph-day-L2-border: transparent;
	--color-calendar-graph-day-L3-border: transparent;
	--color-calendar-graph-day-L4-border: transparent;
	--color-user-mention-fg: var(--color-scale-yellow-0);
	--color-user-mention-bg: var(--color-scale-yellow-8);
	--color-text-white: var(--text);
}

/* Buttons */
.btn-danger,
.Button--danger {
	background: var(--color-btn-danger-bg);
}

/* Create PR button & New branch button */
.iRoQzU,
.ifkUYV,
.bOZDzN {
	background-color: var(--green);
	color: var(--base);
}

/* New branch dialog */
.jenxrv {
	background-color: var(--mantle);
	color: var(--text);
}

/* Branch drop down */
.fHiIQb {
	background-color: var(--surface0);
}

/* Compare button & Cancel new branch button */
.idPXPh,
.epAEYw {
	background-color: var(--surface0);
	color: var(--text);
	border-color: var(--surface1);
}

/* search btn */
.header-search-button.placeholder {
	color: var(--text);
}

/* Issue tags */
.hx_IssueLabel {
	--text: var(--text);
}

/* Labels */
.Label {
	color: var(--color-accent-fg);
	background-color: var(--surface0);
	border-color: transparent;
}

.Label--secondary {
	background-color: var(--surface0);
	color: var(--text);
}

.Label--success {
	color: var(--base);
	background-color: var(--green);
}

.Label--danger {
	background-color: var(--color-danger-emphasis);
	color: var(--color-btn-danger-text);
}

.timeline-comment-header .Label,
.timeline-comment .Label {
	color: var(--color-fg-muted);
}

/* Search */
.header-search-input {
	color: var(--text) !important;
}

.header-search-input::placeholder {
	color: var(--subtext1) !important;
}

/* Tags */
.topic-tag {
	--color-accent-fg: var(--accent-color);
	--color-accent-emphasis: var(--accent-color);
	--color-accent-muted: fadeout(var(--accent-color), 60%);
	--color-accent-subtle: fadeout(var(--accent-color), 85%);
}

/* Misc */
.col-md-8 {
	background-color: var(--base);
}

.user-mention,
.team-mention {
	color: var(--accent-color);
}

.kSmUFR[data-size="small"][data-no-visuals="true"] svg {
	color: var(--green);
}
.starred .starred-button-icon {
	color: var(--yellow);
}

/* Large notification */
.flash {
	background: var(--mantle);
	border-color: transparent;
}

/* Button Fix */
.color-bg-subtle {
	background-color: transparent !important;
}

.command-palette-details-dialog .color-bg-subtle {
	background-color: var(--surface0) !important;
}

/* Button selection Fix */
.navigation-item[aria-selected="true"] .color-fg-muted {
	color: var(--base) !important;
}

/* Darker bg for new AppHeader */
.AppHeader {
	background: var(--color-header-bg);
}

/* Headers */
h1,
h2,
h3,
h4,
h5,
h6 {
	color: var(--subtext1);
}

#check-step-header-title {
	color: var(--color-checks-text-link) !important;
}

::selection {
	background: var(--surface2) !important;
}

/* New change visibility box star and watcher preview buttons Fix */
.btn.color-fg-danger.cursor-default {
	color: var(--color-btn-danger-text) !important;
	background-color: var(--color-btn-danger-bg);
}

.btn.color-fg-danger.cursor-default:hover {
	background-color: var(--color-btn-danger-hover-bg);
}

.btn.color-fg-danger.cursor-default > svg.octicon {
	color: var(--color-btn-danger-text) !important;
}

/* New change visibility box danger buttons Fix */
:where(
#repo-visibility-proceed-button-public,
#repo-visibility-proceed-button-private
):not([data-next-stage]) {
	color: var(--color-btn-danger-text);
	background-color: var(--color-btn-danger-bg);
}

/* 2FA authentication box header Fix */
body.session-authentication div.Box-header {
	background-color: inherit;
}

/* Footer Logo Fix */
.footer-octicon > svg:nth-child(1) > path:nth-child(1) {
	fill: var(--text);
}

/* Footer text hover fix */
.footer nav.col-12 * {
	color: var(--subtext1) !important;
}

/* Notifications */
.notification-indicator .mail-status {
	background-image: none;
	background-color: var(--accent-color);
}

/* Keyboard hint */
.bdgUpN,
.hZMmEi .TextInput-icon,
.hZMmEi .TextInput-action {
	color: var(--text);
	background-color: var(--mantle);
	border-color: var(--surface0);
}

/* Merge icon */
.fMJQEf {
	color: var(--text);
	background-color: var(--overlay0);
}

/* Branch indicator */
.iVNDSi {
	color: var(--accent-color);
	background-color: fade(var(--accent-color), 10);
}

/* File view */
.hwnsNO {
	color: var(--text);
	th {
		background: var(--mantle);
	}
}

.dXveNa[data-no-visuals="true"] {
	color: var(--subtext0);
}

.dXveNa,
.kbjJSF {
	background-color: var(--surface0);
	border-color: var(--surface1);
}

.gUecKw,
.lcpiaz,
.jolsUx,
.fsSggy {
	background-color: var(--mantle);
}

.Cxvmo,
.dhYcqs {
	color: var(--red);
}

.byJIBD,
.dMLfZp[data-size="small"][data-no-visuals="true"] svg {
	color: var(--green);
}

.lmmHGT:not(:first-of-type),
.fOEJrA,
.fnFdxN,
.huABLg,
.dMLfZp[data-component="IconButton"][data-no-visuals],
.cwSUxL,
.iXnXki[data-size="small"][data-no-visuals="true"],
.jvzHAP,
.hPIyzG,
.gTeenv[data-no-visuals="true"],
.VplrY[data-no-visuals="true"],
.bqDKPR[data-component="IconButton"][data-no-visuals],
.icOaJE[data-size="small"][data-no-visuals="true"],
.kKFNhh,
.lnXbGs,
.dTxwit {
	color: var(--subtext0);
}

.gssqTz {
	color: var(--text) !important;
}

.bPgnBp,
.jMyfUO,
.cBrzIN {
	color: var(--text);
}

.eLaeIt:hover:not([disabled]),
.dMLfZp[data-size="small"][data-no-visuals="true"]:hover:not([disabled]),
.bqDKPR[data-component="IconButton"][data-no-visuals],
.bDSYgZ:hover:not([disabled]),
.icOaJE:hover:not([disabled]) {
	background-color: var(--surface0);
}

.icOaJE[aria-pressed="true"] {
	background-color: var(--surface0);
}

.cZRqXf {
	background-color: var(--surface0);
	&:active:not([disabled]),
	&[aria-expanded="true"] {
		border-color: var(--surface2);
	}
	&:hover:not([disabled]) {
		border-color: var(--surface2);
		background-color: var(--surface1);
	}
}

.kdEavw,
.ddNLNa,
.jepClM,
.gTeenv,
.VplrY {
	background-color: var(--surface0);
	&:hover:not([disabled]) {
		border-color: var(--surface2);
		background-color: var(--surface1);
	}
}

.juEfKr {
	border-color: var(--surface2);
}

.eUqMHM,
.hSXtjz {
	background-color: var(--base);
}

.gtXnmh,
.ukUXs,
.giEfVQ,
.cKvNNO,
.evdFFE,
.kTUxDY {
	background-color: var(--mantle);
}

.hLwWNO .PRIVATE_TreeView-item-container,
.hYaoHV,
.rLhXz,
.gtXnmh,
.lmmHGT,
.dEmXPQ {
	color: var(--text);
}

.bJBoUI,
.iJtJJh {
	color: var(--accent-color);
}

.lhyFLG {
	background-color: var(--mantle);
	border-top: 1px solid var(--surface1);
	border-right-color: var(--surface1);
	border-bottom-color: var(--surface1);
	border-left-color: var(--surface1);
}

.hUWqlv,
.bJcMWH {
	color: var(--blue);
}
// search menu links
.Link__StyledLink-sc-14289xe-0.ifbDxt {
	color: var(--blue);
}
.Link__StyledLink-sc-14289xe-0.ifbDxt:hover {
	background-color: fadeout(var(--blue), 60%);
}
// Search page buttons
.cxcvTj,
.Box-sc-g0xbh4-0.grSspY button {
	background-color: var(--mantle);
	border-color: var(--surface1);
}

.gxGEao {
	border-bottom-color: var(--surface0);
}

.hLwWNO
.PRIVATE_TreeView-item[aria-current="true"]
> .PRIVATE_TreeView-item-container {
	background-color: var(--surface0);
	&::after {
		background-color: var(--accent-color);
	}
}

.dfAUyE,
.gKuCoB,
.bFrOJy {
	.segmentedControl-content {
		background-color: var(--mantle);
		color: var(--text);
	}
}

.cuqBaK,
.fCAAcl,
.dAXkSP {
	color: var(--text);
	background-color: var(--base);
	&:hover .segmentedControl-content {
		background: var(--surface0);
	}
}

@media (hover: hover) and (pointer: fine) {
	.rLhXz:hover:not([aria-disabled]) {
		background-color: var(--surface0);
	}
}

/* Projects */
.ksbilD,
.cuaLcW,
.joCMLT,
.jClMHS,
.jhjELj,
.diDjDG,
.gFuKCf,
.dHdESs,
.hpfKPO,
.jdgyJn,
.iInViE,
.brqMal,
.AbCTW {
	background-color: var(--mantle);
}

.jEgFtJ,
.lixtXZ:hover,
.eNIoFu,
.idPXPh:hover,
.fdORwV,
.cjFogo,
.gIOnJa {
	background-color: var(--surface0);
}

.jBCpbB {
	color: var(--text);
	background-color: var(--surface0);
}

.kzrUhn.selected {
	background-color: var(--base);
	border-color: var(--surface0);
	color: var(--text);
}

.esIQoN,
.kbjJSF:disabled {
	color: var(--subtext1);
}

.eJTCnd,
.eTthoV {
	border-color: var(--surface0);
	background-color: var(--base);
	color: var(--text);
	.fixINc,
	.eDZJqt {
		color: var(--subtext0);
	}
	.bniVFX,
	.jtlytA {
		color: var(--text);
	}
}

.ikTPpF {
	box-shadow: var(--base) 0px 3px 6px;
	border-color: var(--surface0);
}

.cvveTk,
.dwoION {
	background-color: var(--base);
}

.FKGWN {
	background-color: var(--base);
	border-color: var(--surface0);
}

.jPHlsW::after {
	background-color: var(--accent-color);
}

.khCtfm:hover {
	background-color: var(--surface0);
}
.bWlbEI,
.hzIORV {
	background-color: var(--mantle);
}

.khCtfm,
.khCtfm[data-component="leadingVisual"],
.Tnbrt[data-component="IconButton"][data-no-visuals] {
	color: var(--subtext0);
}

.Tnbrt {
	&:active,
	&[aria-expanded="true"] {
		background-color: var(--surface2);
	}
	&:hover {
		background-color: var(--surface1);
	}
}

.imsxCM {
	color: var(--text);

	.is-selected::after {
		background-color: var(--accent-color);
	}
}

.pxYjU {
	background-color: var(--mantle);
	color: var(--text);
	border-color: var(--surface0);
}

.ilLRrZ {
	color: var(--text);
	background-color: var(--surface1);
}

.cnIHxk {
	background-color: var(--surface0);
	color: var(--text);
	&:disabled {
		background-color: var(--overlay0);
		color: var(--crust);
	}
}

.ghFpol {
	background-color: var(--base);
}

.hVmCdl,
.fqKZNC,
.fZFWUy,
.kbjJSF,
.flKHtV,
.jolsUx,
.ekNmOn {
	color: var(--text);
}

.lixtXZ[data-component="IconButton"][data-no-visuals],
.klUZzf:not(:first-of-type) {
	color: var(--subtext0);
}

.jvpWzR {
	&:hover {
		background-color: var(--surface1);
	}
	&[data-size="large"][data-block="block"] {
		color: var(--subtext0);
	}
}

.fZFWUy,
.fzjwje {
	background-color: var(--base);
}

.cEYXBH {
	background-color: var(--accent-color);
}

.joxhcl,
.hXyJIp,
.fMkBhb > .segmentedControl-content {
	background-color: var(--mantle);
}

.dVFmxu,
.gbKtit,
.lnKxja,
.jzwNMs {
	color: var(--subtext0);
	svg {
		fill: var(--subtext0);
	}
	&:hover .segmentedControl-content {
		background-color: var(--surface1);
		border-color: var(--surface0);
	}
}

.hJMtSk {
	color: var(--crust);
	background-color: var(--green);
	&:disabled {
		color: var(--crust);
		background-color: var(--overlay0);
	}
}

.iDiUTR {
	color: var(--text);
	background-color: var(--base);
	border-color: var(--surface0);
	&:hover {
		border-color: var(--surface1);
	}
}

.eQfJKc,
.UHWYv {
	color: var(--red);
}

.jVIqnb {
	color: var(--red);
	background-color: var(--surface0);
	&:hover {
		color: var(--base);
		background-color: var(--red);
	}
}

.UHWYv:hover {
	background-color: fade(var(--red), 20);
}

.lmmHGT:hover {
	background-color: var(--surface0);
}

/* Project table view */
.hYdbWk,
.gkeKEr,
.jzcCeu,
.iGxiw,
.ixFSpw,
.koxWOe,
.gkWKRr,
.ikaTJo > svg,
.dcGHGc,
.dzMFih,
.hYdbWk::before,
.ixFSpw::before,
.dSHKOE {
	background-color: var(--base);
}

.gkWKRr {
	border-top-color: var(--surface0);
	border-right-color: var(--surface0);
	border-left-color: var(--surface0);
}

.hPQRKh {
	background-color: var(--surface0);
	&:hover:not([disabled]) {
		background-color: var(--surface1);
	}
	&[data-component="IconButton"][data-no-visuals] {
		color: var(--subtext0);
	}
}

.kfwhFa {
	&:hover:not([disabled]) {
		background-color: var(--surface0);
	}
	&[data-size="small"][data-no-visuals="true"] {
		color: var(--subtext0);
	}
}

.jykkjb {
	background-color: var(--base);
	box-shadow:
	var(--crust) 0px -2px 0px inset,
	var(--crust) 0px 1px 0px inset;
}

.jhjELj,
.ixTUPS {
	border-color: var(--surface1);
}

.gmscZx,
.fUaEiu {
	&:hover:not([disabled]) {
		background-color: var(--surface1);
	}
	&[aria-expanded="true"] {
		background-color: var(--surface0);
	}
	& [data-component="leadingVisual"],
	&[data-size="small"],
	&[data-size="small"][data-no-visuals="true"] {
		color: var(--subtext0);
	}
}

.cBssZb {
	color: var(--text);
}

.jhjELj::before {
	border-color: transparent transparent var(--surface1);
}

.fHpqaf,
.bfQVnA,
.iGxiw,
.fUzagb,
.gisjeK,
.iQkwAM {
	color: var(--subtext0);
}

smt {
	background-color: var(--base);
	&:hover {
		background-color: var(--surface0);
	}
}

.dtTTcd {
	background-color: var(--base);
	&.hoverable:hover {
		background-color: var(--surface0);
	}
}

.pQcjM {
	border-color: var(--surface1);
	&.hoverable:hover {
		background-color: var(--surface0);
	}
}

.eTSXcP {
	background-color: var(--red);
}

.iGxiw {
	border-bottom-color: var(--surface1);
}

/* Tree Fix */

/* Tree Fix */

/* Weird barely visible outlines | Can be removed if intentional*/
.brFBoI,
.ldUAkr,
.gtXnmh {
	border-color: var(--surface1);
}

/* New Repository Overview Fix */
.gWjhfa,
.jMdYTc {
	background-color: var(--mantle);
}

.jMdYTc {
	border: 1px solid var(--surface1);

	& button {
		color: var(--subtext1);

		&:hover {
			background-color: var(--surface0);
		}

		&[aria-expanded="true"] {
			background-color: var(--surface0);
		}
	}
}

.gwuIGu > a {
	&:hover {
		background-color: var(--surface0);
	}

	& span {
		color: var(--subtext1);
	}
}

/* Buttons */
.bJYdrf:hover {
	background-color: var(--mantle);
}

.dSlCya:hover {
	color: var(--accent-color);
}

.hNNRLM,
.hGgJQu,
.hTcsdJ {
	background-color: var(--surface0);
	border-color: var(--surface0);
	color: var(--text);

	&:hover {
		background-color: var(--surface1);
		border-color: var(--surface1);
	}
}

.eOIzRT {
	background-color: var(--base);

	&:hover {
		background-color: var(--surface0);
	}
}

.hNNRLM svg {
	color: var(--text);
}

.react-last-commit-history-group:hover {
	background-color: var(--base);
	color: var(--text);
}
.ContributionCalendar-day {
	--color-calendar-graph-day-L1-bg: spin(fade(var(--green), 40%), 15deg);
	--color-calendar-graph-day-L2-bg: spin(fade(var(--green), 60%), 10deg);
	--color-calendar-graph-day-L3-bg: spin(fade(var(--green), 80%), 5deg);
	--color-calendar-graph-day-L4-bg: var(--green);
	--color-calendar-graph-day-L1-border: transparent;
	--color-calendar-graph-day-L2-border: transparent;
	--color-calendar-graph-day-L3-border: transparent;
	--color-calendar-graph-day-L4-border: transparent;
	--color-calendar-graph-day-bg: var(--surface0);
}

.tooltipped.tooltipped-s rect {
	fill: var(--green) !important;
}
.hfRvxg {
	color: var(--subtext1);

	&:hover {
		color: var(--text);
	}
}

/* Scrolling top menu */
.lbYguI {
	border-radius: 6px;
}

.hPsWZB,
.bOUZZs {
	background-color: var(--mantle);
}

.react-blob-header-edit-and-raw-actions > div > a,
.react-blob-header-edit-and-raw-actions > div > span > a,
.react-blob-header-edit-and-raw-actions > div > span > button {
	background-color: var(--base);
	color: var(--subtext0);

	&:hover {
		background-color: var(--surface1);
	}
}

.hMOAua {
	color: var(--subtext1);

	&:hover {
		background-color: var(--mantle);
		border: 1px solid var(--surface1);
		color: var(--text);
	}
}

/* Fullscreen Sidebar Fixes*/
.hMCjFU,
.jcKsih,
.hpgNiv {
	background-color: var(--base);
	color: var(--text);
	border: 1px solid var(--surface1);

	&:hover {
		background-color: var(--surface0);
	}
}

/* Dropdown Menus */
.jfOCiu,
.gNXjVV,
.iGzDhH,
.Overlay {
	background-color: var(--mantle);
	border: 1px solid var(--surface1);
	border-radius: 6px;
	box-shadow: var(--shadow-floating-large, var(--color-shadow-large));
}

.jfOCiu li {
	color: var(--text);
}

.kRbyXo {
	color: var(--text);
}

.VgnWi {
	background-color: var(--base);
	border: 1px solid var(--surface1);

	&:focus-within {
		border-color: var(--accent-color);
		box-shadow: var(--accent-color) 0px 0px 0px 1px inset;
	}
}

.bAKGFC {
	background-color: var(--surface1);
}

.bdMlHy {
	border-color: var(--surface1);
}

.jMyfUO.selected {
	border-color: var(--surface1);
	background-color: var(--mantle);
}

.bPgnBp {
	color: var(--accent-color);
}

kbd {
	background-color: var(--surface1);
}

select option,
optgroup {
	background-color: var(--mantle);
	border: 1px solid var(--surface1);
	border-radius: 6px;
	box-shadow: var(--shadow-floating-large, var(--color-shadow-large));
}

.hUQSCH {
	background-color: var(--base);
	color: var(--subtext1);
	border-color: var(--surface1);

	&:hover {
		background-color: var(--mantle);
		border-color: var(--surface1);
	}
}

/* Add File Menu */
.dQPLyc {
	background-color: transparent;
	border: 1px solid var(--surface1);
}

.ktGGEf {
	background-color: var(--base);
	border: 1px solid var(--surface1);
}

.gkfBtX {
	background-color: var(--mantle);
	border-radius: 6px 0px 0px 0px;
	border-bottom: 1px solid var(--surface1);
}

.jproXT {
	background-color: transparent;
	border-color: transparent;
	color: var(--subtext1);

	&:hover {
		color: var(--text);
	}

	&:focus-within {
		border-color: transparent;
		box-shadow: none;
		color: var(--text);
	}
}

.wLDmP {
	background-color: var(--mantle);
	border: 1px solid var(--surface1);
}

.eNSiNz .segmentedControl-content,
.gKuCoB .segmentedControl-content {
	background-color: var(--base);
}

/* Notification Menu Fix */
.notifications-list-item.notification-read,
.notifications-list-item.notification-archived {
	background-color: var(--base) !important;

	&:last-child {
		border-bottom-left-radius: 6px;
	}
}

/* Loading Bar Color */
.turbo-progress-bar {
	background-color: var(--accent-color);
}
.search-results-page {
	background-color: var(--base);
}


`)