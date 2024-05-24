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
        concealcursor = "",
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
        showtabline = 1,
        cmdwinheight = 1,
        cmdheight = 0,
        showmode = false,
    },
}

for _, section in pairs(options) do
    for k, v in pairs(section) do
        vim.opt[k] = v
    end
end
