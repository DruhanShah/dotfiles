local utils = require("druhan.utils")

local splash_screen = vim.schedule_wrap(function()
    local header = {
        "", "",
        [[████████████ ███████████ █████████████████████]],
        [[ █████   █████ █████   █████ █████   █████ ████████████ ]],
        [[ █████   █████ █████   █████ █████   █████ ████████████ ]],
        [[ █████  ████ ████  █████ █████  ████ █████████ ]],
        [[ █████ ████   ████████ ████████   ███  █████ ]],
        [[ █████████     ████████   ████████     ██  █████ ]],
        [[ ████████       ██████     ██████       █  █████ ]],
        [[  ██████                                       ████ ]],
        [[   ████                                         ███  ]],
        [[    ██               N E O  V I M               █   ]],
    }
    local arg = vim.fn.argv(0)
    if (vim.bo.ft ~= "lazy") and (vim.bo.ft ~= "netrw") and (arg == "") then
        vim.fn.matchadd("Doom", "[█]")
        vim.fn.matchadd("DashNeo", " N E O ")
        vim.fn.matchadd("DashVim", " V I M ")
        vim.api.nvim_put(utils.center(header), "l", true, true)
        vim.cmd [[silent! setl readonly nospell nonu nornu nobl ft=dashboard bh=wipe bt=nofile]]
    end
end)

vim.api.nvim_create_autocmd("UIEnter", {
    pattern = "*",
    callback = splash_screen,
})
