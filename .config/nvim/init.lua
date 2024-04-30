vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

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

require("lazy").setup("plugins", {
    change_detection = {
        notify = false,
    },
})
