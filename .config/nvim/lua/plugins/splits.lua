return {
    "mrjones2014/smart-splits.nvim",
    config = function()
        vim.keymap.set("n", "<C-h>", require('smart-splits').move_cursor_left, { noremap = true, silent = true })
        vim.keymap.set("n", "<C-j>", require('smart-splits').move_cursor_down, { noremap = true, silent = true })
        vim.keymap.set("n", "<C-k>", require('smart-splits').move_cursor_up, { noremap = true, silent = true })
        vim.keymap.set("n", "<C-l>", require('smart-splits').move_cursor_right, { noremap = true, silent = true })

        vim.keymap.set("n", "<A-h>", require('smart-splits').resize_right, { noremap = true, silent = true })
        vim.keymap.set("n", "<A-j>", require('smart-splits').resize_right, { noremap = true, silent = true })
        vim.keymap.set("n", "<A-k>", require('smart-splits').resize_right, { noremap = true, silent = true })
        vim.keymap.set("n", "<A-l>", require('smart-splits').resize_right, { noremap = true, silent = true })
    end,
}
