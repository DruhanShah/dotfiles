vim.cmd([[
source $HOME/.config/nvim/plugins.vim

filetype plugin indent on

set clipboard+=unnamedplus
syntax enable

]])
vim.o.number = true
vim.o.relativenumber = true;
vim.o.autoindent = true
vim.o.tabstop = 4
vim.o.shiftwidth = 4
vim.o.smarttab = true
vim.o.mouse = 'a'
vim.o.showtabline = 1

vim.g.UltiSnipsExpandTrigger = '<tab>'
vim.g.UltiSnipsJumpForwardTrigger = '<tab>'
vim.g.UltiSnipsJumpBackwardTrigger = '<s-tab>'
vim.g.UltiSnipsSnippetDirectories = {"UltiSnips", "userSnippets"}

vim.g.vimtex_view_method = 'zathura'
vim.g.vimtex_compiler_method = 'latexmk'
vim.g.maplocalleader = ','
vim.g.vimtex_quickfixmode = 0
vim.o.conceallevel = 1
vim.g.tex_conceal = 'abdmg'

vim.g.airline_powerline_fonts = 1

vim.g.dracula_colorterm = 0
vim.g.dracula_italic = 0
vim.cmd(':colorscheme dracula')

vim.g.dashboard_default_executive = 'telescope'
vim.g.mapleader = "\\"

vim.g.dashboard_preview_pipeline = 'lolcat'
vim.g.dashboard_custom_header = {
[[ ███▄    █ ▓█████  ▒█████   ██▒   █▓ ██▓ ███▄ ▄███▓]],
[[ ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒▓██░   █▒▓██▒▓██▒▀█▀ ██▒]],
[[▓██  ▀█ ██▒▒███   ▒██░  ██▒ ▓██  █▒░▒██▒▓██    ▓██░]],
[[▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░  ▒██ █░░░██░▒██    ▒██ ]],
[[▒██░   ▓██░░▒████▒░ ████▓▒░   ▒▀█░  ░██░▒██▒   ░██▒]],
[[░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░    ░ ▐░  ░▓  ░ ▒░   ░  ░]],
[[░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░    ░ ░░   ▒ ░░  ░      ░]],
[[   ░   ░ ░    ░   ░ ░ ░ ▒       ░░   ▒ ░░      ░   ]],
[[         ░    ░  ░    ░ ░        ░   ░         ░   ]],
[[                                ░                  ]],
}
vim.cmd([[
let g:dashboard_custom_shortcut = {'find_history' : '<Leader> f h', 'find_file' : '<Leader> f f', 'new_file' : '<Leader> c n', 'change_colorscheme' : '<Leader> t c', 'find_word' : '<Leader> f a', 'last_session' : '<Leader> l s', 'book_marks' : '<Leader> f b', }
]])

require('lualine').setup {
  options = {
    icons_enabled = true,
    theme = 'dracula',
    component_separators = { left = '', right = ''},
    section_separators = { left = '', right = ''},
    disabled_filetypes = {},
    always_divide_middle = true,
  },
  sections = {
    lualine_a = {'mode'},
    lualine_b = {'branch', 'diff', 'diagnostics'},
    lualine_c = {'filename'},
    lualine_x = {'encoding', 'fileformat', 'filetype'},
    lualine_y = {'progress'},
    lualine_z = {'location'}
  },
  inactive_sections = {
    lualine_a = {},
    lualine_b = {},
    lualine_c = {'filename'},
    lualine_x = {'location'},
    lualine_y = {},
    lualine_z = {}
  },
  tabline = {},
  extensions = {}
}

require("telescope").load_extension "file_browser"

require'nvim-treesitter.configs'.setup {
  -- One of "all", "maintained" (parsers with maintainers), or a list of languages
  ensure_installed = {"bash", "cpp", "css", "html", "javascript", "python", "markdown"},

  -- Install languages synchronously (only applied to `ensure_installed`)
  sync_install = true,

  highlight = {
    -- `false` will disable the whole extension
    enable = true,
 },
}

function map(mode, lhs, rhs, opts)
    local options = { noremap = true }
    if opts then
        options = vim.tbl_extend("force", options, opts)
    end
    vim.api.nvim_set_keymap(mode, lhs, rhs, options)
end



map("n", "<C-n>", ":Telescope file_browser<CR>")
map("i", "{<CR>", "{<CR>}<Esc>ko")
map("i", "[<CR>", "[<CR>]<Esc>ko")
map("i", "(<CR>", "(<CR>)<Esc>ko")
map("i", "\"", "\"\"<Esc>ha")
map("i", "\'", "\'\'<Esc>ha")
map("n", "<Leader>fh", ":DashboardFindHistory<CR>", {silent = true})
map("n", "<Leader>tc", ":DashboardChangeColorscheme<CR>", {silent = true})
map("n", "<Leader>fa", ":DashboardFindWord<CR>", {silent = true})
map("n", "<Leader>cn", ":DashboardNewFile<CR>", {silent = true})
map("n", "<Leader>ff", ":DashboardFindFile<CR>", {silent = true})
