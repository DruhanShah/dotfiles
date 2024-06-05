local M = {}

local alpha = require("alpha")
local dashboard = require("alpha.themes.dashboard")

dashboard.section.header.val = {
    [[ ╭──────────────────────────────────────────────────────╮ ]],
    [[ │                                                      │ ]],
    [[ │                        0.10.0                        │ ]],
    [[ │                                                      │ ]],
    [[ │              ███       ███                        │ ]],
    [[ │             ████      ████                       │ ]],
    [[ │             ██████     █████                       │ ]],
    [[ │             ███████    █████                       │ ]],
    [[ │             ████████   █████                       │ ]],
    [[ │             █████████  █████                       │ ]],
    [[ │             █████ ████ █████                       │ ]],
    [[ │             █████  █████████                       │ ]],
    [[ │             █████   ████████   ██   █            │ ]],
    [[ │             █████    ███████   ██  █             │ ]],
    [[ │             █████     ██████   ██ █              │ ]],
    [[ │             ████      ████   ███               │ ]],
    [[ │              ███       ███    ███                │ ]],
    [[ │                                                      │ ]],
    [[ │                       Neovimium                      │ ]],
    [[ │                                                      │ ]],
    [[ ╰──────────────────────────────────────────────────────╯ ]],
}

dashboard.section.header.opts.hl = {
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 2 }, { "DashNeo", 12, 33 }, { "DashVim", 40, 52 }, { "DashBase", 52, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 17, 20 }, { "DashInter", 20, 22 }, { "DashNeo", 22, 40 }, { "DashVim", 40, 60 }, { "DashBase", 60, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 22 }, { "DashInter", 23, 24 }, { "DashNeo", 25, 40 }, { "DashVim", 41, 60 }, { "DashBase", 61, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 24 }, { "DashInter", 24, 27 }, { "DashNeo", 27, 42 }, { "DashVim", 42, 62 }, { "DashBase", 62, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 28 }, { "DashInter", 28, 30 }, { "DashNeo", 30, 50 }, { "DashVim", 50, 65 }, { "DashBase", 65, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashVim", 50, 65 }, { "DashBase", 65, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashVim", 50, 65 }, { "DashBase", 65, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashVim", 50, 65 }, { "DashBase", 65, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashInter", 50, 52 }, { "DashVim", 53, 65 }, { "DashNeo", 66, 90 }, { "DashBase", 90, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashInter", 49, 52 }, { "DashVim", 52, 63 }, { "DashNeo", 63, 90 }, { "DashBase", 90, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 50 }, { "DashInter", 52, 55 }, { "DashVim", 55, 60 }, { "DashNeo", 60, 90 }, { "DashBase", 90, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 52 }, { "DashInter", 52, 55 }, { "DashVim", 55, 58 }, { "DashNeo", 58, 90 }, { "DashBase", 90, 400 } },
    { { "DashBase", 1, 2 }, { "DashVim", 16, 30 }, { "DashNeo", 30, 75 }, { "DashBase", 75, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
    { { "DashBase", 1, 400 } },
}

dashboard.section.buttons.val = {}

M.setup = function ()
    alpha.setup(dashboard.opts)
end

return M
