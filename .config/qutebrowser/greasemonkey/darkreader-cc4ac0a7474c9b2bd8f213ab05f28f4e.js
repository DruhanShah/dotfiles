// ==UserScript==
// @name          Dark Reader (https://medium.com*)
// @run-at        document-end
// @grant         none
// @include       https://medium.com*
// @require       https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js
// ==/UserScript==
// original url: https://medium.com/analytics-vidhya/co-occurrence-matrix-singular-value-decomposition-svd-31b3d3deb305
DarkReader.setFetchMethod(window.fetch);DarkReader.enable({
	brightness: 100,
	contrast: 100,
	sepia: -50
});