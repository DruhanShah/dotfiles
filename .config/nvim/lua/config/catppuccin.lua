local M = {}

function M.setup()
    require("catppuccin").setup({
	flavour = "latte",
	background = {
	    light = "latte",
	    dark = "macchiato",
	},
	transparent_background = false,
	float = {
	    transparent = false,
	    solid = false,
	},
	show_end_of_buffer = false,
	term_colors = false,
	dim_inactive = {
	    enabled = false,
	    shade = "dark",
	    percentage = 0.15,
	},
	no_italic = false,
	no_bold = false,
	no_underline = false,
	styles = {
	    comments = {},
	    conditionals = {},
	    loops = {},
	    functions = { "bold" },
	    keywords = { "bold" },
	    strings = {},
	    variables = {},
	    numbers = {},
	    booleans = {},
	    properties = {},
	    types = {},
	    operators = {},
	},
	color_overrides = {},
	custom_highlights = function (colors)
	    return {
		StatusLine = { bg = colors.base, fg = colors.subtext0 },
		StatusLineNC = { bg = colors.base, fg = colors.overlay0 },
		WinBar = { bg = colors.base, fg = colors.subtext0 },
		WinBarNC = { bg = colors.base, fg = colors.overlay0 },
		DashNvim = { bg = colors.base, fg = colors.blue, bold = true },
		DashMicro = { bg = colors.base, fg = colors.green, bold = true },
		DashHelp = { bg = colors.base, fg = colors.subtext0 },
		DashFoot = { bg = colors.base, fg = colors.overlay0 },
		HeaderModeNO = { bg = colors.mauve, fg = colors.base, bold = true },
		HeaderModeVI = { bg = colors.blue, fg = colors.base, bold = true },
		HeaderModeVL = { bg = colors.blue, fg = colors.base, bold = true },
		HeaderModeVB = { bg = colors.blue, fg = colors.base, bold = true },
		HeaderModeSE = { bg = colors.pink, fg = colors.base, bold = true },
		HeaderModeSL = { bg = colors.pink, fg = colors.base, bold = true },
		HeaderModeSB = { bg = colors.pink, fg = colors.base, bold = true },
		HeaderModeIN = { bg = colors.green, fg = colors.base, bold = true },
		HeaderModeRE = { bg = colors.red, fg = colors.base, bold = true },
		HeaderModeEX = { bg = colors.peach, fg = colors.base, bold = true },
		HeaderModePR = { bg = colors.surface2, fg = colors.base, bold = true },
		HeaderModeSH = { bg = colors.surface0, fg = colors.base, bold = true },
		HeaderModeTE = { bg = colors.yellow, fg = colors.base, bold = true },
		HeaderDiagnosticERROR = { bg = colors.crust, fg = colors.red },
		HeaderDiagnosticWARN = { bg = colors.crust, fg = colors.peach },
		HeaderDiagnosticHINT = { bg = colors.crust, fg = colors.yellow },
		HeaderDiagnosticINFO = { bg = colors.crust, fg = colors.lavender },
		HeaderSolid = { bg = colors.crust, fg = colors.text, bold = true },
		HeaderSimple = { bg = colors.crust, fg = colors.overlay0 },
		HeaderLine = { bg = colors.base, fg = colors.subtext0 },
	    }
	end,
	auto_integrations = true,
    })

    vim.cmd.colorscheme "catppuccin"
end


return M
