// ==UserScript==
// @name    Userstyle (aoc.css)
// @include    *adventofcode.com/*
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

body {
	background: var(--base);
	color: var(--text);

	header h1 a,
	header h1 span {
		color: var(--green);
		text-shadow:
		0 0 2px var(--green),
		0 0 5px var(--green);
	}

	a {
		color: var(--green);
	}

	.star-count {
		color: var(--yellow);
	}

	.quiet {
		color: var(--subtext0);
		opacity: 1;
	}

	.share,
	.share:hover,
	input[type="submit"] {
		color: var(--green);
	}

	main {
		article {
			em {
				color: var(--text);
				text-shadow: 0 0 5px var(--text);
			}

			h2 {
				color: var(--text);
			}

			input[type="radio"]:checked ~ span,
			input[type="checkbox"]:checked ~ span {
				color: var(--text);
			}

			input[type="radio"] ~ span:hover,
			input[type="radio"] ~ span:focus,
			input[type="checkbox"]:hover ~ span,
			input[type="checkbox"]:focus ~ span {
				background-color: var(--crust);
			}
		}
		.supporter-badge {
			color: var(--yellow);
		}

		.supporter-badge:hover {
			color: var(--yellow);
			text-shadow: 0 0 5px var(--yellow);
		}

		.sponsor-badge {
			color: var(--blue);
		}

		.sponsor-badge:hover,
		.sponsor-badge:focus {
			color: var(--blue);
			text-shadow: 0 0 5px var(--blue);
		}

		.leaderboard-entry {
			.leaderboard-position {
				color: var(--subtext1);
			}
			.leaderboard-totalscore {
				color: var(--text);
			}
		}

		.leaderboard-daylinks-selected {
			color: var(--text);
			text-shadow: 0 0 5px var(--text);
		}

		.leaderboard-daylinks-selected:hover {
			color: var(--green);
		}

		.leaderboard-anon {
			opacity: 1;
			color: var(--subtext0);
		}
		.calendar {
			.calendar-color-w {
				color: var(--text);
			}
			.calendar-color-s {
				color: var(--yellow);
			}
			.calendar-color-c {
				color: var(--subtext1);
			}
			.calendar-color-g3 {
				color: darken(var(--green), 3);
			}
			.calendar-color-g2 {
				color: var(--green);
			}
			.calendar-color-g4 {
				color: darken(var(--green), 3.5);
			}
			.calendar-color-u {
				color: var(--sky);
			}
			.calendar-color-a {
				color: var(--subtext0);
			}
			.calendar-color-g1 {
				color: darken(var(--green), 2.5);
			}
			.calendar-color-g0 {
				color: darken(var(--green), 2);
			}
			.calendar-color-l {
				color: var(--red);
			}
			.calendar-mark-complete {
				color: var(--yellow);
			}
			.calendar-mark-verycomplete {
				color: var(--yellow);
			}
			.calendar-day {
				color: var(--subtext1);
			}
			#calendar-countdown {
				color: var(--subtext1);
			}

			span {
				color: var(--surface0);
			}

			a {
				color: var(--surface2);
			}
		}

		.day-success {
			color: var(--yellow);
			text-shadow: 0 0 5x var(--yellow);
		}

		input[type="text"],
		textarea,
		code::before {
			border-color: var(--surface0);
			background: var(--crust);
		}
	}
}


`)