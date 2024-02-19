// ==UserScript==
// @name    Userstyle (github.css)
// @include    *github.com/*
// ==/UserScript==
GM_addStyle(`:root { 
	--rosewater: #d8dee9;
	--flamingo: #d8dee9;
	--pink: #b48ead;
	--mauve: #b48ead;
	--red: #bf616a;
	--maroon: #bf616a;
	--peach: #d08770;
	--yellow: #ebcb8b;
	--green: #a3be8c;
	--teal: #8fbcbb;
	--sky: #88c0d0;
	--sapphire: #81a1c1;
	--blue: #5e81ac;
	--lavender: #b48ead;
	--text: #eceff4;
	--subtext1: #e5e9f0;
	--subtext0: #e5e9f0;
	--overlay2: #4c566a;
	--overlay1: #4c566a;
	--overlay0: #434c5e;
	--surface2: #434c5e;
	--surface1: #3b4252;
	--surface0: #3b4252;
	--base: #2e3440;
	--mantle: #2e3440;
	--crust: #2e3440;

	--accent-color: var(--blue);
}

body {
	accent-color: var(--accent-color);
	--bgColor-default: var(--base);
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
	--color-diffstat-addition-bg: var(--green);
	--color-prettylights-syntax-comment: var(--overlay1);
	--color-prettylights-syntax-constant: var(--blue);
	--color-prettylights-syntax-entity: var(--blue);
	--color-prettylights-syntax-storage-modifier-import: var(--peach);
	--color-prettylights-syntax-entity-tag: var(--teal);
	--color-prettylights-syntax-keyword: var(--pink);
	--color-prettylights-syntax-string: var(--green);
	--color-prettylights-syntax-variable: var(--peach);
	--color-prettylights-syntax-invalid-illegal-text: var(--red);
	--color-prettylights-syntax-invalid-illegal-bg: fadeout(var(--red), 85%);
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
	--color-codemirror-text: var(--text);
	--color-codemirror-bg: var(--base);
	--color-codemirror-gutters-bg: var(--base);
	--color-codemirror-guttermarker-text: var(--base);
	--color-codemirror-lines-bg: var(--base);
	--color-checks-bg: var(--mantle);
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
	--color-scale-yellow-2: var(--yellow); //star

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
	--color-header-text: var(--subtext2);
	--color-header-bg: var(--mantle);
	--color-header-logo: var(--text);
	--color-header-search-bg: var(--surface0);
	--color-header-search-border: var(--surface1);
	--color-sidenav-selected-bg: var(--surface1);
	--color-menu-bg-active: var(--surface2);
	--color-timeline-badge-bg: var(--surface0);
	--color-btn-text: var(--text);
	--color-btn-bg: var(--surface0);
	--color-btn-border: var(--surface1);
	--color-btn-hover-bg: var(--surface1);
	--color-btn-hover-border: var(--surface2);
	--color-btn-active-bg: var(--surface2);
	--color-btn-selected-bg: var(--surface2);
	--color-btn-counter-bg: var(--surface2);
	--color-btn-primary-text: var(--base);
	--color-btn-primary-bg: var(--green);
	--color-btn-primary-icon: var(--base);
	--color-btn-primary-hover-text: var(--base);
	--color-btn-primary-hover-bg: lighten(var(--green), 10%);
	--color-btn-primary-hover-border: lighten(var(--green), 10%);
	--color-btn-primary-selected-text: var(--base);
	--color-btn-primary-selected-bg: lighten(var(--green), 10%);
	--color-btn-primary-selected-border: lighten(var(--green), 10%);
	--color-btn-primary-disabled-text: var(--crust);
	--color-btn-primary-disabled-bg: fadeout(var(--green), 60%);
	--color-btn-primary-hover-icon: var(--base);
	--color-btn-primary-border: transparent;
	--color-btn-primary-shadow: 0 0 transparent;
	--color-btn-primary-inset-shadow: 0 0 transparent;
	--color-btn-primary-selected-shadow: 0 0 transparent;
	--color-btn-primary-disabled-border: transparent;
	--color-btn-danger-text: var(--base);
	--color-btn-danger-bg: var(--red);
	--color-btn-danger-icon: var(--base);
	--color-btn-danger-hover-text: var(--base);
	--color-btn-danger-hover-bg: lighten(var(--red), 10%);
	--color-btn-danger-hover-border: lighten(var(--red), 10%);
	--color-btn-danger-selected-text: var(--base);
	--color-btn-danger-selected-bg: lighten(var(--red), 10%);
	--color-btn-danger-selected-border: lighten(var(--red), 10%);
	--color-btn-danger-disabled-text: var(--crust);
	--color-btn-danger-disabled-bg: fadeout(var(--red), 60%);
	--color-btn-danger-hover-icon: var(--base);
	--color-btn-danger-border: transparent;
	--color-btn-danger-shadow: 0 0 transparent;
	--color-btn-danger-inset-shadow: 0 0 transparent;
	--color-btn-danger-selected-shadow: 0 0 transparent;
	--color-btn-danger-disabled-border: transparent;
	--color-action-list-item-inline-divider: var(--surface2);
	--color-action-list-item-default-hover-bg: var(--surface1);
	--color-action-list-item-default-selected-bg: var(--surface1);
	--color-fg-default: var(--text);
	--color-fg-muted: var(--subtext1);
	--color-fg-subtle: var(--subtext1);
	--color-fg-on-emphasis: var(--base);
	--color-canvas-default: var(--base);
	--color-canvas-overlay: var(--surface0);
	--color-canvas-inset: var(--mantle);
	--color-canvas-subtle: var(--surface0);
	--color-border-default: var(--surface1);
	--color-border-muted: var(--surface0);
	--color-shadow-medium: 0 3px 6px var(--crust);
	--color-shadow-large: 0 8px 24px var(--crust);
	--color-shadow-extra-large: 0 12px 48px var(--crust);
	--color-neutral-emphasis-plus: var(--overlay0);
	--color-neutral-emphasis: var(--overlay2);
	--color-neutral-muted: fadeout(var(--overlay0), 60%);
	--color-accent-fg: var(--accent-color);
	--color-accent-emphasis: var(--accent-color);
	--color-accent-muted: fadeout(var(--accent-color), 60%);
	--color-accent-subtle: fadeout(var(--accent-color), 85%);
	--color-success-fg: var(--green);
	--color-success-emphasis: var(--green);
	--color-attention-fg: var(--peach);
	--color-attention-emphasis: var(--peach);
	--color-severe-fg: var(--maroon);
	--color-severe-emphasis: var(--maroon);
	--color-danger-fg: var(--red);
	--color-danger-muted: fadeout(var(--red), 60%);
	--color-danger-emphasis: var(--red);
	--color-open-fg: var(--green);
	--color-open-emphasis: var(--green);
	--color-closed-fg: var(--red);
	--color-closed-emphasis: var(--red);
	--color-done-fg: var(--mauve);
	--color-done-emphasis: var(--mauve);
	--color-sponsors-fg: var(--mauve);
	--color-sponsors-emphasis: var(--mauve);
	--color-primer-fg-disabled: fadeout(var(--accent-color), 50%);
	--color-primer-border-active: var(--red);
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

	--color-user-mention-fg: var(--accent-color);
	--color-user-mention-bg: var(--crust);
	--color-text-white: var(--text);

	--color-calendar-halloween-graph-day-L1-bg: fadeout(var(--accent-color), 3);
	--color-calendar-halloween-graph-day-L2-bg: fadeout(var(--accent-color), 2);
	--color-calendar-halloween-graph-day-L3-bg: var(--accent-color);
	--color-calendar-halloween-graph-day-L4-bg: var(--mantle);
	--color-calendar-graph-day-L1-bg: fadeout(var(--accent-color), 60%) !important;
	--color-calendar-graph-day-L2-bg: fadeout(var(--accent-color), 40%) !important;
	--color-calendar-graph-day-L3-bg: fadeout(var(--accent-color), 20%) !important;
	--color-calendar-graph-day-L4-bg: var(--accent-color) !important;
	--color-calendar-graph-day-L1-border: transparent !important;
	--color-calendar-graph-day-L2-border: transparent !important;
	--color-calendar-graph-day-L3-border: transparent !important;
	--color-calendar-graph-day-L4-border: transparent !important;
	--color-calendar-graph-day-border: transparent !important;
	--color-calendar-graph-day-bg: var(--surface0) !important;
}

/* Search */
.header-search-input {
	color: var(--text) !important;
}

.header-search-button.placeholder,
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

/* user/team mentions */
.user-mention,
.team-mention {
	color: var(--accent-color);
}

/* Large notification */
.flash {
	--color-attention-muted: var(--accent-color);
	--bgColor-attention-muted: fadeout(var(--accent-color), 60%);
	--color-attention-subtle: fadeout(var(--accent-color), 85%);
}

/* fix for notis shadow */
.notifications-list .Box-header {
	box-shadow: none;
}

::selection {
	background: var(--surface2) !important;
}

& when (var(--repo-beta) = 1) {
	/* New repo layout button, pr button on repo, tick */
	.dvJnjZ,
	.types__StyledButton-sc-ws60qy-0.gHIvvy,
	.ldavJa {
		background-color: var(--green);
		color: var(--crust);
		&:hover {
			background-color: darken(var(--green), 15%);
		}
	}
	.ezbPok * {
		fill: var(--text);
	}
	.jMEWXM > * > *,
	#branch-picker-repos-header-ref-selector,
	.gtXnmh .Box-sc-g0xbh4-0.jGfYmh > * {
		background-color: var(--surface0);
		border-color: var(--surface1);
		&:hover {
			background-color: var(--surface1);
			border-color: var(--surface2);
		}
		& * {
			fill: var(--text);
			color: var(--text);
		}
	}
	.cPEOjV {
		background-color: var(--mantle);
	}
	.Box-sc-g0xbh4-0.bUCzHg,
	.ehcSsh > * {
		border-color: var(--surface1) !important;
	}
	.eYedVD .Box-sc-g0xbh4-0.jGfYmh *,
	.Text-sc-17v1xeu-0.foaUgQ {
		color: var(--subtext0);
	}
	.hRMLtq,
	.ilcYjX *,
	.lcModf,
	button.types__StyledButton-sc-ws60qy-0.kRuNkv {
		color: var(--text);
	}
	.Flash__StyledFlash-sc-hzrzfc-0.kUDiXM {
		background-color: fadeout(var(--peach), 90%);
		border-color: var(--peach);
	}
	.kUDiXM svg {
		fill: var(--peach);
	}
	/* Some popup */
	.iGzDhH,
	.hBobmI,
	#__primerPortalRoot__ > div > div > div {
		background-color: var(--mantle);
	}
	.Text-sc-17v1xeu-0.gPDEWA {
		color: var(--subtext1);
	}
	.TabNav__TabNavTabList-sc-pwdi4r-1.gFzOft {
		& * {
			border-color: var(--surface0);
		}
		&:hover {
			& * {
				background: var(--mantle);
			}
		}
	}
}

& when (var(--search-beta) = 1) {
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

	.lpbCdH,
	.ibvJxz,
	.fjInzX {
		background-color: var(--mantle);
	}

	.search-results-page {
		background-color: var(--base);
	}
}


`)