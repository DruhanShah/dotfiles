require("lualine").setup {
	options = {
		theme = "nord",
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
	ensure_installed = {"c", "cpp", "python", "lua", "latex", "bibtex", "fish", "astro", "html", "css", "javascript", "markdown", "markdown_inline"},


	auto_install = true,
	highlight = {
		enable = true,
		disable = {"latex", "markdown", "markdown_inline"},
		additional_vim_regex_highlighting = false,
	},
}

require("nvim-surround").setup {
	surrounds = {
		["c"] = {
			add = function()
				local command = require("nvim-surround.config").get_input("Enter LaTeX command: ")
				return { { "\\" ..command.. "{" }, { "}" } }
			end,
		},
	},
}

require("colorizer").setup()

require("oil").setup()

require("glow").setup()

require("ibl").setup()

require("lean").setup {
	lsp = { on_attach = on_attach, },
	mappings = true,
}

require("kiwi").setup {
	{
		name="notes",
		path="/home/druhan/Notes"
	}
}

require("nnn").setup {
	picker = {
		cmd = "tmux new-session nnn",
		style = { border = "rounded", width=0.7, height=0.7 },
		session = "shared",
	},
	replace_netrw = "picker",
	offset = true,
}

require("neoscroll").setup()
