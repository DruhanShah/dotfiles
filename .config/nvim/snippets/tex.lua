local ls = require("luasnip")
local s = ls.snippet
local i = ls.insert_node
local t = ls.text_node
local rep = require("luasnip.extras").rep

return {
    s({
        trig = "env",
        snippetType = "autosnippet"
    },
    {
        t("\\begin{"), i(1), t("}"),
        t({ "", "    " }), i(0),
        t({ "", "\\end{" }), rep(1), t({ "}", "" }),
    }),
}
