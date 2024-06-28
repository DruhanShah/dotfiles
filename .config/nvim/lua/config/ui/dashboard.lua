local api = require("image")
local utils = require("config.utils")
local width = 21
local height = 20
local posx = math.ceil(vim.o.columns/2)
local posy = math.ceil(vim.o.lines/2)

local image = api.from_file("~/.config/nvim/splash.png", {
    inline = true,
    width = width,
    height = height,
    x = posx - math.ceil(width/2),
    y = posy - math.ceil(height/2)
})

local splash_text = {}
for i = 1, posy-1 do
    splash_text[i] = ""
end
splash_text[posy] = "NVIM 0.10.0"
splash_text[posy+1] = "Editing text at the speed of thought"
splash_text[posy+2] = "https://neovim.io"
for i = posy+3, vim.o.lines-5 do
    splash_text[i] = ""
end
splash_text[vim.o.lines-4] = "Type :h for help"
splash_text[vim.o.lines-3] = "Based on Elegant Emacs by Nicolas Rougier"


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
            image:render()
            vim.cmd "silent! setl nowrite noma nonu nornu nobl acd ft=dashboard bh=wipe bt=nofile"
            vim.fn.matchadd("DashNvim", "NVIM 0.10.0")
            vim.fn.matchadd("DashLink", "https://neovim.io")
            vim.fn.matchadd("DashFoot", "Type .*")
            vim.fn.matchadd("DashFoot", "Based .*")
        end
    end),
})
vim.api.nvim_create_autocmd("BufLeave", {
    pattern = ".temp-nvim",
    group = g,
    callback = function ()
        image:clear()
        vim.cmd "silent! setl write"
    end,
})
vim.api.nvim_create_autocmd("BufEnter", {
    pattern = ".temp-nvim",
    group = g,
    callback = function ()
        image:render()
        vim.cmd "silent! setl nowrite"
    end,
})
