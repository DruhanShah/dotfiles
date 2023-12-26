local Plug = vim.fn["plug#"]

vim.call("plug#begin", "~/.config/nvim/plugged")

	Plug("catppuccin/nvim", {['as'] = "catppuccin"})
	Plug("shaunsingh/nord.nvim")

	Plug("nvim-lua/plenary.nvim")
	Plug("nvim-treesitter/nvim-treesitter", {['do'] = vim.fn[":TSUpdate"]})
	Plug("nvim-tree/nvim-web-devicons")
	Plug("nvim-lualine/lualine.nvim")
	Plug("glepnir/dashboard-nvim")
	Plug("norcalli/nvim-colorizer.lua")
	Plug("lukas-reineke/indent-blankline.nvim")
	Plug("kylechui/nvim-surround")
	Plug("lervag/vimtex")
	Plug("ixru/nvim-markdown")
	Plug("serenevoid/kiwi.nvim")
	Plug("Julian/lean.nvim")
	Plug("stevearc/oil.nvim")
	Plug("ellisonleao/glow.nvim")
	Plug("luk400/vim-jukit")

	Plug("christoomey/vim-tmux-navigator")

	Plug("williamboman/mason.nvim", {['do'] = vim.fn[":MasonUpdate"]})
	Plug("williamboman/mason-lspconfig.nvim")
	Plug("neovim/nvim-lspconfig")

	Plug("SirVer/ultisnips")

	Plug("hrsh7th/cmp-nvim-lsp")
	Plug("hrsh7th/cmp-buffer")
	Plug("hrsh7th/cmp-path")
	Plug("hrsh7th/cmp-cmdline")
	Plug("hrsh7th/nvim-cmp")
	Plug("quangnguyen30192/cmp-nvim-ultisnips")

vim.call("plug#end")
