local key = vim.keymap.set
local utils = require("config.utils")

-- Normal mode --
key("n", "<C-h>", "<C-w>h")
key("n", "<C-j>", "<C-w>j")
key("n", "<C-k>", "<C-w>k")
key("n", "<C-l>", "<C-w>l")

key("n", "<Esc>", "<Esc>:noh<CR>")

key("n", "H", "^")
key("n", "J", "gj")
key("n", "K", "gk")
key("n", "L", "$")

key("n", "M", "J")
key("n", "gk", "K")

key("n", "<C-1>", utils.toggle_number)
key("n", "<C-2>", utils.toggle_relative)

-- Visual mode --
key("v", "<", "<gv")
key("v", ">", ">gv")

key("v", "<A-j>", ":m .+1<CR>==")
key("v", "<A-k>", ":m .-2<CR>==")

-- Visual Block mode --
key("x", "<A-j>", ":move '>+1<CR>gv-gv")
key("x", "<A-k>", ":move '>-2<CR>gv-gv")
