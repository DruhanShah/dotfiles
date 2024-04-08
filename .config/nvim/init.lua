vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

require("options")
require("mappings")

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

require("lazy").setup("plugins")

vim.api.nvim_set_hl(0, "LineNr", { fg = "#1e1e2e" })
vim.api.nvim_set_hl(0, "LineNrAbove", { fg = "#45475a" })
vim.api.nvim_set_hl(0, "LineNrBelow", { fg = "#45475a" })
vim.api.nvim_set_hl(0, "NormalFloat", { bg = "#181825" })
