local M = {}

function M.setup()
    vim.g.everforest_enable_italic = 1
    vim.g.everforest_show_eob = 0
    vim.g.everforest_diagnostic_text_highlight = 1
    vim.g.everforest_better_performance = 1

    vim.cmd.colorscheme "everforest"

    vim.api.nvim_set_hl(0, "DashNvim",
			{ bg = "#fdf6e3", fg = "#3a94c5", bold = true })
    vim.api.nvim_set_hl(0, "DashMicro",
			{ bg = "#fdf6e3", fg = "#8da101", bold = true })
    vim.api.nvim_set_hl(0, "DashHelp",
			{ bg = "#fdf6e3", fg = "#a6b0a0" })
    vim.api.nvim_set_hl(0, "DashFoot",
			{ bg = "#fdf6e3", fg = "#bdc3af" })
    vim.api.nvim_set_hl(0, "HeaderModeNO",
			{ bg = "#93b259", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeVI",
			{ bg = "#3a94c5", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeVL",
			{ bg = "#3a94c5", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeVB",
			{ bg = "#3a94c5", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeSE",
			{ bg = "#df69ba", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeSL",
			{ bg = "#df69ba", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeSB",
			{ bg = "#df69ba", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeIN",
			{ bg = "#8da101", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeRE",
			{ bg = "#f85552", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeEX",
			{ bg = "#f57d26", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModePR",
			{ bg = "#708089", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeSH",
			{ bg = "#93b259", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderModeTE",
			{ bg = "#dfa000", fg = "#fdf6e3", bold = true })
    vim.api.nvim_set_hl(0, "HeaderDiagnosticError",
			{ bg = "#e6e2cc", fg = "#f85552" })
    vim.api.nvim_set_hl(0, "HeaderDiagnosticWarn",
			{ bg = "#e6e2cc", fg = "#f57d26" })
    vim.api.nvim_set_hl(0, "HeaderDiagnosticHint",
			{ bg = "#e6e2cc", fg = "#dfa000" })
    vim.api.nvim_set_hl(0, "HeaderDiagnosticInfo",
			{ bg = "#e6e2cc", fg = "#35a77c" })
    vim.api.nvim_set_hl(0, "HeaderSolid",
			{ bg = "#e6e2cc", fg = "#5c6a72", bold = true })
    vim.api.nvim_set_hl(0, "HeaderSimple",
			{ bg = "#e6e2cc", fg = "#bdc3af" })
    vim.api.nvim_set_hl(0, "HeaderLine",
			{ bg = "#fdf6e3", fg = "#a6b0a0" })
    vim.api.nvim_set_hl(0, "StatusLine",
			{ bg = "#fdf6e3", fg = "#a6b0a0" })
    vim.api.nvim_set_hl(0, "StatusLineNC",
			{ bg = "#fdf6e3", fg = "#bdc3af" })
    vim.api.nvim_set_hl(0, "WinBar",
			{ bg = "#fdf6e3", fg = "#a6b0a0" })
    vim.api.nvim_set_hl(0, "WinBarNC",
			{ bg = "#fdf6e3", fg = "#bdc3af" })
end


return M
