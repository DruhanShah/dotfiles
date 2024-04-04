// ==UserScript==
// @name    Userstyle (codeforces.css)
// @include    *codeforces.com/*
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

body {
  background-color: var(--base);
  color: var(--text);
}

a:link {
  color: var(--sky);
}

a:visited {
  color: var(--blue);
}

/** Site Logo at top **/
img[src*="codeforces-logo-with-telegram.png"] {
  filter: invert(86.5%);
}

/* 'Enter', 'Register' */
.lang-chooser {
  color: #666;
}

/* Bell Icon (on Login) */
.header-bell__img {
  filter: invert(86.5%);
}

/* Overlay on click of Bell Icon */
.bell-details {
  background-color: var(--base);
  border-color: var(--base);
}

.bell-details__no-new {
  color: #aaa !important;
}

.bell-details__recent-link {
  border-top-color: var(--base) !important;
}


/*** Top Header ***/

.roundbox {
  background-color: var(--surface0);
  border-color: var(--base) !important;
}

.roundbox .roundbox-lt, .roundbox .roundbox-rt, .roundbox .roundbox-lb, .roundbox .roundbox-rb {
  filter: invert(80%);
}

.menu-list li a {
  color: var(--text);
}

/* Search box */
.search {
  background-color: var(--base);
  border-color: var(--base) !important;
  color: var(--text);
}

/******** Home Page - codeforces.com ********/

/*** Message ***/
div.alert-success {
  background-color: #336534;
  border-color: var(--base) !important;
  text-shadow: none;
  color: #ccc;
}

div.alert-success a:link {
  color: var(--blue);
}

/*** 'Pay attention' box on left ***/

.roundbox .caption {
  color: var(--text);
}

.roundbox .titled {
  border-bottom-color: var(--base) !important;
}

div[style*="border-bottom: 1px solid rgb(185, 185, 185);"] {
  border-bottom-color: #333 !important;
}

/*** '<username>' box on left (on login) ***/

img[src="//userpic.codeforces.com/no-avatar.jpg"] {
  opacity: 0.3;
}

/*** 'Top rated' box on left ***/

.roundbox table.rtable {
  color: var(--text);
}

.roundbox .rtable td, .roundbox .rtable th {
  border-color: var(--base) !important;
}

.roundbox .dark {
  background-color: var(--mantle);
}

.roundbox .bottom-links {
  background-color: #333;
  border-top-color: var(--base) !important;
}

/*** Body ***/

div.ttypography {
  color: var(--text);
}

.topic .content {
  border-left-color: var(--base) !important;
}

div.ttypography a:link {
	color: var(--blue);
}
div.ttypography a:hover, div.ttypography a:focus {
  background-color: var(--surface0) !important;
  color: var(--text) !important;
}

/* Image
div.ttypography img, div.ttypography figure {
  filter: invert(86.5%);
}
*/

/* Table */

div.ttypography table.bordertable {
  border-color: var(--base) !important;
}

div.ttypography table {
  color: var(--text);
}

div.ttypography tbody th {
  border-top-color: var(--base) !important;
}

div.ttypography .bordertable tbody th {
  border-right-color: var(--base) !important;
}

div.ttypography tbody td {
  border-top-color: var(--base) !important;
}

div.ttypography .bordertable tbody td {
  border-right-color: var(--base) !important;
}

/* User Link categories */

.user-admin {
  color: var(--text) !important; /* from latexcolor.com */
}

.legendary-user-first-letter {
  color: var(--text) !important; /* from cppreference */
}

.user-legendary {
  color: var(--red) !important; /* from cppreference */
}

.user-red {
  color: var(--red) !important; /* from latexcolor.com */
}

.user-blue {
  color: var(--blue) !important;
}

.user-cyan {
	color: var(--sky) !important;
}

.user-violet {
	color: var(--mauve) !important;
}

.user-green {
  color: var(--green) !important; /* from latexcolor.com */
}

.user-orange {
  color: var(--peach) !important; /* from latexcolor.com */
}

.user-black {
  color: var(--subtext0) !important; /* from latexcolor.com */
}

font[color="red"] {
  color: var(--red) !important; /* from latexcolor.com */
}

/* Page No. */

.pagination span.active {
  background-color: #333;
  border-color: var(--base) !important;
}

.pagination .inactive {
  color: var(--text);
}

.pagination .arrow {
  color: #ccc;
}

/** Footer **/
#footer {
  border-top-color: var(--base) !important;
}

img[alt="Telegram"] {
  filter: invert(86.5%);
}

/******** Contests Page - codeforces.com/contests ********/

/* 'Current or upcoming contests' Table */
.datatable {
  background-color: var(--base) !important;
}

.datatable .lt, .datatable .rt, .datatable .lb, .datatable .rb {
  filter: invert(89%);
}

.datatable .ilt, .datatable .irt {
  filter: invert(84.5%);
}

.datatable td, .datatable th {
  background-color: var(--mantle);
}

.datatable .dark {
  background-color: var(--crust);
}

/* 'Register' Link */

.red-link {
  color: var(--base) !important;
}

/******** Contest Page - codeforces.com/contest/<contest_id>/standings ********/

/* Highlighted Row e.g. codeforces.com/contest/377/standings/participant/1904423#p1904423 */
/* ( on clicking Graph Point on contestent Profile ) */
.highlighted-row td, .highlighted-row th {
  background-color: var(--base) !important;
}

/*** Problems Tab - codeforces.com/contest/<contest_id> ***/

/* Aeroplane-like Problem selector */
img[src*="submit-22x22.png"] {
  filter: invert(86.5%);
}

/* Star icon to favorite Problem (on login) */
img.toggle-favourite.add-favourite {
  filter: invert(86.5%);
}

/*** Submit Code Tab - codeforces.com/contest/<contest_id>/submit ***/

/** Editor **/

#editor {
  border-color: var(--base) !important;
}

.ace-chrome {
  background-color: var(--base);
  color: var(--text);
}

.ace-chrome .ace_gutter {
  background-color: var(--base);
  color: var(--text);
}

.ace-chrome .ace_gutter-active-line {
  background-color: var(--base);
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background-color: #aaa1;
}

/* Cursor */
.ace-chrome .ace_cursor {
  color: var(--surface2);
}

/** Syntax Highlighting - C++ **/

.ace-chrome .ace_storage, .ace-chrome .ace_meta.ace_tag {
  color: var(--sapphire);
}

.ace-chrome .ace_keyword {
  color: var(--green);
}

.ace-chrome .ace_keyword.ace_operator {
  color: var(--sky);
}

.ace-chrome .ace_string {
  color: var(--flamingo);
}

.ace-chrome .ace_constant.ace_numeric {
  color: var(--peach);
}

.ace-chrome .ace_comment.ace_doc {
  color: var(--subtext0);
}

.ace-chrome .ace_comment {
  color: var(--surface0);
}

.ace-chrome .ace_indent-guide {
  opacity: 0.2;
}


/* Selected */
.ace-chrome .ace_marker-layer .ace_selected-word {
  background-color: var(--surface1);
  border-color: var(--base) !important;
}

/******** Gym Page - codeforces.com/gyms ********/

/*** 'Training filter' box on right ***/

/* 'Difficulty:' Stars */
#vote-list-filterDifficultyLowerBorder {
  filter: invert(84%);
}

#vote-list-filterDifficultyUpperBorder {
  filter: invert(84%);
}

/******** Gym Registration Page - e.g.codeforces.com/gymRegistration/102082/virtual/true ********/

/* Terms of Agreement Box */
textarea.terms {
  background-color: var(--base);
}

/******** Problem Set Page - codeforces.com/problemset ********/

/*** Status Tab ***/

.verdict-rejected {
  color: var(--red);
}


/******** Problem Page - codeforces.com/problemset/problem/<id> ********/

/** Top Menu **/

.second-level-menu-list li a {
  color: var(--text);
}

.second-level-menu-list li.backLava {
  filter: invert(90%);
  opacity: 0.5;
}


/* MathML */
div.ttypography .MathJax {
  color: var(--text) !important;
}

/** MathJax Pop-up overlay **/
.MathJax_Menu {
  background-color: var(--mantle);
  color: var(--text);
  border-color: var(--base) !important;
  box-shadow: 0px 10px 20px var(--mantle);
}

.MathJax_MenuRule {
  border-top-color: var(--base) !important;
}

.MathJax_MenuActive {
  background-color: var(--base);
  color: var(--text);
}


/* transient Floating Pane on left -> to scroll up */
.button-up {
  filter: invert(93%);
}

/** Code Block **/

.problem-statement .sample-tests pre {
  background-color: var(--text);
}

.problem-statement .sample-tests .title {
  border-bottom-color: var(--base) !important;
}

.problem-statement .sample-tests .input, .problem-statement .sample-tests .output {
  border-color: var(--base) !important;
}

div.ttypography pre, div.ttypography code {
  color: var(--text);
}

/* small 'Copy' button on top, right corner */
.input-output-copier {
  border-color: var(--base) !important;
}

/*** 'Attention' box on right side ***/
.highlight-blue {
  background-color: var(--surface0) !important;
}

/*** 'Codeforces Round #N' box on right side ***/
a[style="color: black"] {
  color: var(--rosewater) !important;
}

/*** ' Problem tags' box on right side ***/

.roundbox[style*="background-color:#f0f0f0;"] {
  background-color: var(--crust) !important;
}

/******** Rating Page - codeforces.com/ratings ********/

/* City */
#locationSelect select[disabled=""] {
  background-color: #333;
  color: #aaa;
}

/* 'Rating: users participated in recent 6 months' Table */
.datatable.ratingsDatatable div[style*="background-color: white"] {
  background-color: #282828 !important;
}

/******** API Page - codeforces.com/api/help ********/

/*** 'API' box on right ***/

.sidebar-menu ul li {
  border-color: var(--base) !important;
}

.sidebar-menu ul li:hover, .sidebar-menu ul li.active {
  background-color: #333;
  border-color: var(--base) !important;
}

.sidebar-menu ul a {
  color: #aaa;
}

/*** Introduction Tab ***/

/* Header */
div.ttypography h1, div.ttypography h2, div.ttypography h3, div.ttypography h4, div.ttypography h5, div.ttypography h6 {
  color: #aaa;
}

/* Code */
div.ttypography .tt {
  background-color: var(--mantle);
  border-color: var(--base) !important;
}

/*** Methods Tab ***/

div.ttypography thead th {
  color: var(--text);
}

div.ttypography .bordertable thead th {
  background-color: var(--mantle);
  border-right-color: var(--base) !important;
  border-bottom-color: var(--base) !important;
}

/******** Profile Page - codeforces.com/profile/<user_id> ********/

/* Profile Pic */
.title-photo > div[style*="border:1px solid #B9B9B9"] {
  border-color: #444 !important;
}

.title-photo img[src="//userpic.codeforces.com/no-title.jpg"] {
  opacity: 0.2;
}

/** Progress Graph **/
div#placeholder > canvas {
  opacity: 0.5;
}

/* Axis Labels */
.tickLabels {
  color: #aaa !important;
}

/* Graph point overlay */
#tooltip {
  background-color: #282828 !important;
  border-color: #666 !important;
}

/* Legend */

.legend div[style*="background-color: rgb(255, 255, 255)"] {
  background-color: #282828 !important;
}

.legend table[style*="color:#545454"] {
  color: #ccc !important;
}

.legendColorBox div[style*="border:1px solid #ccc;"] {
  border-color: #333 !important;
}


/*** Blog Tab - codeforces.com/blog/<user_id> ***/

/* Comments */

.comment-table {
  border-color: var(--base) !important;
}

/*** Submissions Tab - codeforces.com/submissions/<user_id> ***/

/* Table Search */
.datatable .filter input {
  background-color: #282828;
  border-color: #333 !important;
}


/** Submission Overlay, on click **/

#facebox .content {
  background-color: #282828;
}

#facebox .close {
  background-color: #282828;
}

img.close_image {
  filter: invert(86.5%);
}

.source-popup-header hr {
  color: #333;
  border-bottom-color: var(--base) !important;
}

.source-popup hr {
  color: #222;
  border-color: var(--base) !important;
}

/** Text files **/
.test-for-popup pre {
  background-color: #222;
  border-color: var(--base) !important;
}

/*** Submission Page e.g. codeforces.com/contest/1110/submission/49588803 (Open in new Tab) ***/

pre.prettyprint {
  border-color: var(--base) !important;
}

/** Syntax Highlighting **/

/* Plain */
.pln {
  color: var(--text) !important;
}

/* Comments */
.com {
  color: var(--overlay2) !important;
}

/* Keyword */
.kwd {
  color: var(--green) !important;
}

/* Type */
.typ {
  color: var(--mauve) !important;
}

/* Literals */
.lit {
  color: var(--peach) !important;
}

/* Punctuation */
.pun {
	color: var(--blue) !important;
}

.str {
	color: var(--flamingo) !important;
}

/** Text files **/
.file .text {
  background-color: #222;
}

/*** Groups Tab - codeforces.com/groups/with/<group_id> ***/

.groupName {
  color: var(--text) !important;
}

span[style="color: #0000bb;"] {
  color: var(--green) !important;
}

/*** Contests Tab - codeforces.com/contests/with/<user_id> ***/

/* Table headers */
table.tablesorter thead tr .header {
  background-color: #eee; /* due to invert */
  color: #222; /* due to invert */
  filter: invert(86.5%);
}


/******** Search Results Page - codeforces.com/search ********/

.search-large {
  background-color: #222;
  border-color: var(--base) !important;
  color: var(--text);
}

.search-help code {
  background-color: #222;
  border-color: var(--base) !important;
}

/******** Login Page - codeforces.com/enter ********/

/* 'Login' button */
.table-form .submit {
  color: var(--text);
}

.title, .contest-state-phase, .welldone {
	color: var(--green) !important;
}

.contest-state-regular {
	color: var(--text) !important;
}

pre {
	background-color: var(--mantle) !important;
}

.test-example-line-even {
	background-color: var(--crust) !important;
}

.test-example-line-odd {
	background-color: var(--mantle) !important;
}

.countdown, .notice {
	color: var(--text) !important;
}

.cell-accepted, .cell-accepted-locked {
	color: var(--sky) !important;
}

.cell-time {
	color: var(--text) !important;
}

.spoiler-content {
	background-color: var(--base) !important;
	border-color: var(--mauve) !important;
	color: var(--text) !important;
}
`)