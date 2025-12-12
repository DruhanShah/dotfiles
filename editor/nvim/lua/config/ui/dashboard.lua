local utils = require("config.utils")
local width = 25
local height = 24
local posx = math.ceil(vim.o.columns/2)
local posy = math.ceil(vim.o.lines/2)

local splash_text = {}
for i = 1, posy-1 do
    splash_text[i] = ""
end
splash_text[posy-1] = "Neovim / M I C R ϴ"
splash_text[posy] = "Editing text at the speed of thought"
splash_text[posy+1] = "Type :h for help"
for i = posy+2, vim.o.lines-5 do
    splash_text[i] = ""
end
splash_text[vim.o.lines-4] = "Based on GNU Emacs / N Λ N O by Nicolas Rougier"

local g = vim.api.nvim_create_augroup("Dashboard", {})
vim.api.nvim_create_autocmd('StdinReadPre', {
    group = g,
    callback = function()
        vim.g.read_from_stdin = true
    end,
})

vim.api.nvim_create_autocmd("UIEnter", {
    pattern = "<buffer>",
    group = g,
    callback = vim.schedule_wrap(function ()
        if utils.check_empty() then
            vim.cmd "e .temp-nvim"
            vim.api.nvim_put(utils.center(splash_text), "l", true, true)
            vim.cmd "silent! setl nowrite noma nonu nornu nobl acd ft=dashboard bh=wipe bt=nofile"
            vim.fn.matchadd("DashNvim", "Neovim /")
	    vim.fn.matchadd("DashMicro", "M I C R ϴ")
            vim.fn.matchadd("DashHelp", "Type :h for help")
            vim.fn.matchadd("DashFoot", "Based on GNU Emacs / N Λ N O by Nicolas Rougier")
        end
    end),
})
vim.api.nvim_create_autocmd("BufLeave", {
    pattern = ".temp-nvim",
    group = g,
    callback = function ()
        vim.cmd "silent! setl write"
    end,
})
vim.api.nvim_create_autocmd("BufEnter", {
    pattern = ".temp-nvim",
    group = g,
    callback = function ()
        vim.cmd "silent! setl nowrite"
    end,
})
