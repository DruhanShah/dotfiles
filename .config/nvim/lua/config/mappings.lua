local key = vim.keymap.set

local toggle_number = function()
    vim.wo.number = not vim.wo.number
    vim.wo.relativenumber = false
end

local toggle_relative = function ()
    vim.wo.relativenumber = not vim.wo.relativenumber
    vim.wo.number = false
end

-- Normal mode --
key("n", "<C-h>", "<C-w>h")
key("n", "<C-j>", "<C-w>j")
key("n", "<C-k>", "<C-w>k")
key("n", "<C-l>", "<C-w>l")

key("n", "<Esc>", "<Esc>:noh<CR>")

key("n", "H", "^")
key("n", "L", "$")

key("n", "M", "J")

key("n", "<C-1>", toggle_number)
key("n", "<C-2>", toggle_relative)

-- Visual mode --
key("v", "<", "<gv")
key("v", ">", ">gv")

key("v", "<A-j>", ":m .+1<CR>==")
key("v", "<A-k>", ":m .-2<CR>==")

-- Visual Block mode --
key("x", "<A-j>", ":move '>+1<CR>gv-gv")
key("x", "<A-k>", ":move '>-2<CR>gv-gv")
