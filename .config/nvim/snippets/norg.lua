local ls = require("luasnip")
local s, i, t = ls.snippet, ls.insert_node, ls.text_node
local fmt = require("luasnip.extras.fmt").fmt

return {
    s({
        trig = "journal"
    },
    fmt(
        [[
            {}

            [Index]{{:{}:}}
            [Yesterday]{{:{}:}} - [Tomorrow]{{:{}:}}

            * {}

            ** What happened today

               {}

            ** Things to do today

               {}
        ]],
        {
            i(0), i(1), i(2), i(3), i(4), i(5), i(6)
        }
    )),
}
