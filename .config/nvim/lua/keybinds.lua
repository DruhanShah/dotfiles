local opts = { noremap = true, silent = true }

local key = vim.keymap.set

vim.g.mapleader = " "
vim.g.maplocalleader = " "

-- Normal mode --
key("n", "<C-h>", "<C-w>h", opts)
key("n", "<C-j>", "<C-w>j", opts)
key("n", "<C-k>", "<C-w>k", opts)
key("n", "<C-l>", "<C-w>l", opts)

key("n", "<C-J>", ":bnext<CR>", opts)
key("n", "<C-K>", ":bprevious<CR>", opts)

key("n", "<leader>m", "K", opts)
key("n", "M", "J", opts)

key("n", "H", "^", opts)
key("n", "J", "6j", opts)
key("n", "K", "6k", opts)
key("n", "L", "$", opts)

key("n", "<C-n>", ":NnnPicker<CR>", opts)
key("n", "<C-Space>", require("kiwi").todo.toggle, opts)
key("n", "<leader>ww", ":lua require(\"kiwi\").open_wiki_index(notes)<CR>", opts)

key("n", "ZC", "ggVGyZZ", opts)

key("n", "<Esc>", ":noh<CR>:echo<CR>", opts)


-- Insert mode --
key("i", "{<CR>", "{<CR>}<Esc>ko", opts)
key("i", "[<CR>", "[<CR>]<Esc>ko", opts)
key("i", "(<CR>", "(<CR>)<Esc>ko", opts)
key("i", "{", "{}<Esc>i", opts)
key("i", "[", "[]<Esc>i", opts)
key("i", "(", "()<Esc>i", opts)
key("i", "{}", "{}", opts)
key("i", "[]", "[]", opts)
key("i", "()", "()", opts)
key("i", "\"", "\"\"<Esc>ha", opts)
key("i", "\'", "\'\'<Esc>ha", opts)
key("i", "\"\"", "\"\"", opts)
key("i", "\'\'", "\'\'", opts)

key("i", "<C-s>", "<C-g>u<Esc>[s1z=`]a<C-g>u")

-- Visual mode --
key("v", "<", "<gv", opts)
key("v", ">", ">gv", opts)

key("v", "<A-j>", ":m .+1<CR>==", opts)
key("v", "<A-k>", ":m .-2<CR>==", opts)
key("v", "p", "\"1dP", opts)

-- Visual Block mode --
key("x", "<A-j>", ":move '>+1<CR>gv-gv", opts)
key("x", "<A-k>", ":move '>-2<CR>gv-gv", opts)

-- LSP stuff --
key("n", "gd", vim.lsp.buf.definition)
key("n", "gD", vim.lsp.buf.declaration)
key("n", "<leader>rn", vim.lsp.buf.rename)
key("n", "gl", vim.diagnostic.open_float)
