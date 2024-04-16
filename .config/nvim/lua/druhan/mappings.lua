local key = vim.keymap.set

local function toggle_number()
    if vim.wo.number then
        vim.wo.number = false
        vim.wo.relativenumber = true
    else
        vim.wo.number = true
        vim.wo.relativenumber = false
    end
end

-- Normal mode --
key("n", "<C-h>", "<C-w>h", {
	silent = true,
	noremap = true,
	desc = "Move left",
})
key("n", "<C-j>", "<C-w>j", {
	silent = true,
	noremap = true,
	desc = "Move down",
})
key("n", "<C-k>", "<C-w>k", {
	silent = true,
	noremap = true,
	desc = "Move up",
})
key("n", "<C-l>", "<C-w>l", {
	silent = true,
	noremap = true,
	desc = "Move right",
})

key("n", "<Esc>", "<Esc>:noh<CR>", {
	silent = true,
	noremap = true,
	desc = "Clear search highlight",
})

key("n", "H", "^", {
	silent = true,
	noremap = true,
	desc = "Move to beginning",
})
key("n", "L", "$", {
	silent = true,
	noremap = true,
	desc = "Move to end",
})

key("n", "M", "J", {
	silent = true,
	noremap = true,
	desc = "Merge current line with line below",
})

key("n", "<C-1>", toggle_number, {
	silent = true,
	noremap = true,
	desc = "Toggle relative line numbers",
})

-- Visual mode --
key("v", "<", "<gv", {
	silent = true,
	noremap = true,
	desc = "Dedent lines",
})
key("v", ">", ">gv", {
	silent = true,
	noremap = true,
	desc = "Indent lines",
})

key("v", "<A-j>", ":m .+1<CR>==", {
	silent = true,
	noremap = true,
	desc = "Move lines down",
})
key("v", "<A-k>", ":m .-2<CR>==", {
	silent = true,
	noremap = true,
	desc = "Move lines up",
})

-- Visual Block mode --
key("x", "<A-j>", ":move '>+1<CR>gv-gv", {
	silent = true,
	noremap = true,
	desc = "Move block down",
})
key("x", "<A-k>", ":move '>-2<CR>gv-gv", {
	silent = true,
	noremap = true,
	desc = "Move block up",
})
