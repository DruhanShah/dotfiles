// ==UserScript==
// @name          Dark Reader (https://gomagic.org*)
// @run-at        document-end
// @grant         none
// @include       https://gomagic.org*
// @require       https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js
// ==/UserScript==
// original url: https://gomagic.org/members/druhan_shah/
DarkReader.setFetchMethod(window.fetch);DarkReader.enable({
	brightness: 100,
	contrast: 100,
	sepia: -50
});