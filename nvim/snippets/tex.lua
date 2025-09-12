local ls = require("luasnip")
local s, i, t = ls.snippet, ls.insert_node, ls.text_node
local fmt = require("luasnip.extras.fmt").fmt
local rep = require("luasnip.extras").rep

return {
    s({
        trig = "env",
        snippetType = "autosnippet"
    },
    fmt(
        [[
            \begin{{{}}}
                {}
            \end{{{}}}
        ]],
        {
            i(1), i(0), rep(1)
        }
    )),
}
