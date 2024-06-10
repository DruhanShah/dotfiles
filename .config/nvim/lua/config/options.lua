local options = {
    General = {
        clipboard = "unnamedplus",
        swapfile = false,
        undofile = true,
        virtualedit = "block",
        splitright = true,
        splitbelow = true,
        termguicolors = true,
    },
    ConcealAndFold = {
        foldmethod = "expr",
        foldlevel = 100,
        foldexpr = "v:lua.vim.treesitter.foldexpr()",
        foldtext = 'v:lua.require("config.utils").fold_text()',
        conceallevel = 2,
        concealcursor = "nc",
    },
    Spelling = {
        spell = false,
        spelllang = "en_us",
    },
    LineNumbers = {
        number = true,
        cursorline = true,
        cursorlineopt = "number",
        signcolumn = "number",
    },
    Indenting = {
        tabstop = 4,
        shiftwidth = 4,
        autoindent = true,
        expandtab = true,
        breakindent = true,
    },
    CmdLine = {
        laststatus = 2,
        showtabline = 0,
        cmdwinheight = 1,
        cmdheight = 1,
        showmode = false,
        shortmess = "astTWoOCF",
    },
}

for _, section in pairs(options) do
    for k, v in pairs(section) do
        vim.opt[k] = v
    end
end
