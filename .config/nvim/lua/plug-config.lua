require("catppuccin").setup {
	integrations = {
		treesitter = true,
		notify = true,
		cmp = true,
		mason = true,
		dashboard = true,
		telescope = {
			enabled = true,
		},

	}
}

require("lualine").setup {
	options = {
		theme = "catppuccin",
		component_separators = {
			left = "|",
			right = "|",
		},
		section_separators = {
			left = "",
			right = "",
		},
	}
}

require("nvim-treesitter.configs").setup {
	ensure_installed = {"c", "cpp", "python", "lua", "latex", "bibtex", "fish", "astro", "html", "css", "javascript"},


	auto_install = true,
	highlight = {
		enable = true,
		disable = {"latex"},
		additional_vim_regex_highlighting = false,
	},
}

require("dashboard").setup {
	theme = "hyper",
	config = {
		week_header = { enable = true, },
		shortcut = {
			{ desc = '󰊳 Update', group = '@property', action = 'Lazy update', key = 'u' },
			{
				icon = ' ',
				icon_hl = '@variable',
				desc = 'Files',
				group = 'Label',
				action = 'Telescope find_files',
				key = 'f',
			},
			{
				desc = ' Apps',
					group = 'DiagnosticHint',
					action = 'Telescope app',
					key = 'a',
			},
			{
				desc = ' dotfiles',
					group = 'Number',
					action = 'Telescope dotfiles',
					key = 'd',
			},
		},
	},
	hide = {
		tabline = true,
		statusline = false,
		winbar = true,
	},
}

require("nvim-surround").setup()

require("colorizer").setup()

require("oil").setup()

require("glow").setup()

require("Comment").setup()
