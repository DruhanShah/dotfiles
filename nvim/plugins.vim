call plug#begin('~/.config/nvim/autoload/plugged')

	Plug 'dracula/vim'
	Plug 'nvim-lualine/lualine.nvim'
	Plug 'kyazdani42/nvim-web-devicons'
	Plug 'kyazdani42/nvim-tree.lua'
	Plug 'lervag/vimtex'
	Plug 'glepnir/dashboard-nvim'
	Plug 'nvim-lua/plenary.nvim'
	Plug 'nvim-telescope/telescope.nvim'
	Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
	Plug 'tpope/vim-fugitive'
	Plug 'nvim-telescope/telescope-file-browser.nvim'
	Plug 'b3nj5m1n/kommentary'

call plug#end()
