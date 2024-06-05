-- This is only supposed to be a minimal config for the Kitty scrollback buffer.

vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

require("config.options")
vim.opt.number = false
require("config.mappings")

local lazypath = vim.fn.stdpath("data") .. "lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
    vim.fn.system {
        "git",
	    "clone",
	    "--filter=blob:none",
	    "https://github.com/folke/lazy.nvim",
	    "--branch=stable",
	    lazypath
    }
end
vim.opt.rtp:prepend(lazypath)

local statusline = require("plugins.statusline")
local colorscheme = require("plugins.catppuccin")
require("lazy").setup({
    statusline,
    colorscheme,
    "nvim-tree/nvim-web-devicons",
})
