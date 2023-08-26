// ==UserScript==
// @name    Userstyle (qute.help.css)
// @include    qute://help*
// ==/UserScript==
GM_addStyle(`html {
  background-color: #1e1e2e;
}

html > body, html ul > li > * {
  color: #cdd6f4;
  font-family: sans-serif;
}

html a {
  color: #fab387;
}

html a:visited {
  color: #74c7ec;
}

.monospaced, code, pre {
  color: #f9e2af;
}

div.admonitionblock {
  color: #f2cdcd;
  font-weight: bold;
}

html em, html dt {
  color: #f2cdcd;
  font-weight: bold;
}

html div.listingblock > div.content, div.listingblock .highlight {
  background-color: #eba0ac;
}
`)