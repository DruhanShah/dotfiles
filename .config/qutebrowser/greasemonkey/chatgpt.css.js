// ==UserScript==
// @name    Userstyle (chatgpt.css)
// @include    *chat.openai.com*
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

div[class*="bg-gray-"]:not([class*="bg-gray-900"]):not([class*="bg-gray-700"]):not(.bg-black .bg-gray-800),
div[class*="bg-vert-dark-gradient"] {
	background: var(--base) !important;
}

/* Sidebar */
div[class*="bg-gray-900"] {
	background-color: var(--mantle) !important;
}

.bg-gray-900 .bg-gray-800 {
	background-color: var(--surface0) !important;
}

.bg-gradient-to-l {
	background: none;
}

/* Upgrade Plan */
.shim-yellow {
	display: none;
}

/* Search */
div[class*="bg-gray-700"] {
	background-color: var(--surface0) !important;
}

[class*="text-gray-"],
[class*="text-white"]:not(.btn-primary .text-white) {
	color: var(--text) !important;
}

div[class*="border-gray"],
div[class*="border-white"] {
	border-color: var(--overlay0) !important;
}

input::placeholder,
textarea::placeholder {
	color: var(--overlay0);
}

input,
textarea {
	color: var(--text);
}

[class*="bg-white/5"] {
	background-color: var(--surface0) !important;
}

.px-3.py-3,
.pt-3 {
	background: var(--mantle) !important;
}

.px-3.py-3:hover {
	background: var(--base) !important;
}
/* Bot messages */
.prose {
	--tw-prose-body: var(--text) !important;
	--tw-prose-bold: var(--text) !important;
	--tw-prose-code: var(--text) !important;
	--tw-prose-links: var(--text) !important;
	--tw-prose-headings: var(--overlay1) !important;
}

.bg-black {
	background-color: var(--crust) !important;
}

.bg-black .bg-gray-800 {
	background-color: var(--surface0) !important;
}

code.hljs,
code[class*="language-"],
pre[class*="language-"] {
	color: var(--text) !important;
}

/* Buttons */
.btn-neutral {
	background-color: var(--surface1) !important;
	color: var(--text) !important;
}

.btn-primary {
	background-color: var(--green) !important;
	color: var(--crust) !important;
}

.btn-primary .text-white {
	color: var(--crust) !important;
}

.btn-danger {
	background-color: var(--red) !important;
	color: var(--crust) !important;
}

.text-2xl {
	color: var(--text) !important;
}

.dark [class*="bg-yellow-"] {
	color: var(--crust) !important;
}

.light [class*="bg-yellow-"] {
	color: var(--text) !important;
}

[class*="text-green"] {
	color: var(--green) !important;
}


`)