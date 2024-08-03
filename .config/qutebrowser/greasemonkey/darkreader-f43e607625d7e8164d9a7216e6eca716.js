// ==UserScript==
// @name          Dark Reader (https://codeforces.com*)
// @run-at        document-end
// @grant         none
// @include       https://codeforces.com*
// @require       https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js
// ==/UserScript==
// original url: https://codeforces.com/contest/1997/my
DarkReader.setFetchMethod(window.fetch);DarkReader.enable({
	brightness: 100,
	contrast: 100,
	sepia: -50
});