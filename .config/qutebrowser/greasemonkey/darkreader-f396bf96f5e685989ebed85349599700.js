// ==UserScript==
// @name          Dark Reader (https://login.iiit.ac.in*)
// @run-at        document-end
// @grant         none
// @include       https://login.iiit.ac.in*
// @require       https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js
// ==/UserScript==
// original url: https://login.iiit.ac.in/cas/login?service=https%3A%2F%2Fcourses.iiit.ac.in%2Flogin%2Findex.php
DarkReader.setFetchMethod(window.fetch);DarkReader.enable({
	brightness: 100,
	contrast: 100,
	sepia: -50
});
GM.addStyle(`
	* {
		font-family: "JetBrains Mono" !important;
	}
`);
