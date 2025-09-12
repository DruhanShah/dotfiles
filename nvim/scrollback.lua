-- This is only supposed to be a minimal config for the Kitty scrollback buffer.

vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

vim.cmd.colorscheme "nano-light"

require("config.options")
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

require("lazy").setup({
    "nvim-tree/nvim-web-devicons",
})

require("config.ui.statusline")

vim.api.nvim_create_autocmd("User", {
    pattern = "VeryLazy",
    command = "colorscheme nano-light"
})
