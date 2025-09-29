local M = {}

function M.setup()
    require("rose-pine").setup({
	variant = "dawn", -- auto, main, moon, or dawn
	dark_variant = "main", -- main, moon, or dawn
	dim_inactive_windows = false,
	extend_background_behind_borders = true,

	enable = {
            terminal = true,
            legacy_highlights = true, -- Improve compatibility for previous versions of Neovim
            migrations = true, -- Handle deprecated options automatically
	},

	styles = {
            bold = true,
            italic = true,
            transparency = false,
	},

	groups = {
            border = "muted",
            link = "iris",
            panel = "surface",

            error = "love",
            hint = "iris",
            info = "foam",
            note = "pine",
            todo = "rose",
            warn = "gold",

            git_add = "foam",
            git_change = "rose",
            git_delete = "love",
            git_dirty = "rose",
            git_ignore = "muted",
            git_merge = "iris",
            git_rename = "pine",
            git_stage = "iris",
            git_text = "rose",
            git_untracked = "subtle",

            h1 = "iris",
            h2 = "foam",
            h3 = "rose",
            h4 = "gold",
            h5 = "pine",
            h6 = "foam",
	},

	highlight_groups = {
	    StatusLine = { bg = base, fg = subtext0 },
	    StatusLineNC = { bg = base, fg = overlay0 },
	    WinBar = { bg = base, fg = subtext0 },
	    WinBarNC = { bg = base, fg = overlay0 },
	    DashNvim = { bg = base, fg = blue, bold = true },
	    DashMicro = { bg = base, fg = green, bold = true },
	    DashHelp = { bg = base, fg = subtext0 },
	    DashFoot = { bg = base, fg = overlay0 },
	    HeaderModeNO = { bg = mauve, fg = base, bold = true },
	    HeaderModeVI = { bg = blue, fg = base, bold = true },
	    HeaderModeVL = { bg = blue, fg = base, bold = true },
	    HeaderModeVB = { bg = blue, fg = base, bold = true },
	    HeaderModeSE = { bg = pink, fg = base, bold = true },
	    HeaderModeSL = { bg = pink, fg = base, bold = true },
	    HeaderModeSB = { bg = pink, fg = base, bold = true },
	    HeaderModeIN = { bg = green, fg = base, bold = true },
	    HeaderModeRE = { bg = red, fg = base, bold = true },
	    HeaderModeEX = { bg = peach, fg = base, bold = true },
	    HeaderModePR = { bg = surface2, fg = base, bold = true },
	    HeaderModeSH = { bg = surface0, fg = base, bold = true },
	    HeaderModeTE = { bg = yellow, fg = base, bold = true },
	    HeaderDiagnosticERROR = { bg = crust, fg = red },
	    HeaderDiagnosticWARN = { bg = crust, fg = peach },
	    HeaderDiagnosticHINT = { bg = crust, fg = yellow },
	    HeaderDiagnosticINFO = { bg = crust, fg = lavender },
	    HeaderSolid = { bg = crust, fg = text, bold = true },
	    HeaderSimple = { bg = crust, fg = overlay0 },
	    HeaderLine = { bg = base, fg = subtext0 },
	},
    })

    vim.cmd.colorscheme "rose-pine-dawn"
end


return M


