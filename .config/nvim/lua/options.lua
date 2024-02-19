local options = {
	number = true,
	relativenumber = false,
	autoindent = true,
	tabstop = 4,
	shiftwidth = 4,
	smarttab = true,
	mouse = 'a',
	showtabline = 1,
	clipboard = "unnamedplus",
	cmdheight = 1,
	showmode = false,
	swapfile = false,
	termguicolors = true,
	undofile = true,
	updatetime = 300,
	signcolumn = "yes",
	cursorline = true,
	cursorlineopt = "number",
	conceallevel = 2,
	splitright = true,
	splitbelow = true,
	spell = false,
	spelllang = "en_us",
}

local plug_options = {
	markdown_fenced_languages = {
		"tex",
		"python",
		"bash=sh",
	},
	vim_markdown_conceal = 2,
	vim_markdown_math = 1,
	vimtex_view_method = "zathura",
	vimtex_compiler_method = "latexmk",
	vimtex_syntax_conceal = {
		accents = true,
		ligatures = true,
		cites = true,
		fancy = true,
		spacing = true,
		greek = true,
		math_bounds = true,
		math_delimiters = true,
		math_fracs = true,
		math_super_sub = true,
		math_symbols = true,
		sections = true,
		styles = true,
	},
	vimtex_syntax_custom_cmds = {
		{name = "Real", concealchar = "ℝ", mathmode = true},
		{name = "Nat", concealchar = "ℕ", mathmode = true},
		{name = "Int", concealchar = "ℤ", mathmode = true},
		{name = "Comp", concealchar = "ℂ", mathmode = true},
		{name = "BigO", concealchar = "𝒪", mathmode = true},
		{name = "diff", concealchar = "d", mathmode = true},
	},
	vimtex_syntax_custom_cmds_with_concealed_delims = {
		{name = "binom", nargs = 2, mathmode = true, cchar_open = "(", cchar_mid = "|", cchar_close = ")"},
	},
	UltiSnipsExpandTrigger = "<tab>",
	UltiSnipsJumpForwardTrigger = "<tab>",
	UltiSnipsJumpBackwardTrigger = "<S-tab>",
	UltiSnipsSnippetDirectories = {"~/.config/nvim/snip"},
	UltiSnipsEditSplit = "vertical",
	jukit_shell_cmd = "ipython",
	jukit_terminal = "tmux",
	jukit_auto_output_hist = 0,
	jukit_use_tcomment = 0,
	jukit_comment_mark = "",
	jukit_mappings = 1,
	jukit_mappings_ext_enabled = {
		"py",
		"ipynb",
	},
	jukit_notebook_viewer = "jupyter-notebook",
	jukit_convert_overwrite_default = -1,
	jukit_conver_open_default = -1,
	jukit_file_encodings = "utf-8",
	jukit_venv_in_output_hist = 1,
	jukit_highlight_markers = 1,
	jukit_enable_textcell_bg_hl = 1,
	jukit_enable_textcell_syntax = 1,
	jukit_hl_ext_enabled = {
		"py",
		"ipynb",
	},
	jukit_output_new_os_window = 1,
	jukit_in_style = 2,
	jukit_max_size = 20,
	jukit_show_prompt = 0,
	jukit_clean_outhist_freq = 60 * 60 * 2,
	jukit_savefig_dpi = 150,
	jukil_mpl_block = 1,
	jukit_custom_backend = -1,
	jukit_inline_plotting = 1,
	jukit_mpl_style = "~/.config/nvim/plugged/vim-jukit/helpers/matplotlib-backend-kitty/backend.mplstyle",
}

vim.cmd(":colorscheme nord")
vim.api.nvim_set_hl(0, "CursorLineNr", {
	fg = "#a6e3a1",
	bold = true,
})

for k,v in pairs(options) do
	vim.o[k] = v
end
for k,v in pairs(plug_options) do
	vim.g[k] = v
end

vim.cmd([[
let g:jukit_layout = {
    \'split': 'horizontal',
    \'p1': 0.4, 
    \'val': [
        \'file_content',
        \{
            \'split': 'vertical',
            \'p1': 0.6,
            \'val': ['output', 'output_history']
        \}
    \]
\}
]])
