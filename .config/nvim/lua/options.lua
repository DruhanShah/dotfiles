local options = {
    number = true,
    autoindent = true,
    tabstop = 4,
    shiftwidth = 4,
	expandtab = true,
    showtabline = 1,
    clipboard = "unnamedplus",
    cmdwinheight = 2,
    showmode = false,
    swapfile = false,
    termguicolors = true,
    undofile = true,
    signcolumn = "number",
    conceallevel = 2,
    concealcursor = "n",
    cursorline = true,
    cursorlineopt = "number",
    virtualedit = "block",
    splitright = true,
    splitbelow = true,
    ignorecase = true,
    spell = true,
    spelllang = "en_us",
}

for k,v in pairs(options) do
    vim.opt[k] = v
end
