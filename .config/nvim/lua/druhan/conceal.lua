local M = {}

M.custom_cmds = {}

M.custom_cmds_with_delim = {
    {
        name = "section",
        nargs = 1,
        cchar_open = "◈",
    },
    {
        name = "subsection",
        nargs = 1,
        cchar_open = "◇",
    },
    {
        name = "subsubsection",
        nargs = 1,
        cchar_open = "◆",
    },
}

return M
