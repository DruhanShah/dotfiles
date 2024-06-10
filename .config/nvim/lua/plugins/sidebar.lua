return {
    {
        "akinsho/toggleterm.nvim",
        opts = {
            size = vim.o.columns * 0.4,
            autochdir = true,
            direction = "vertical",
        },
        init = function ()
            vim.keymap.set("n", "<leader>t", "<Cmd>ToggleTerm<CR>")
        end,
    },
    {
        "folke/trouble.nvim",
        opts = {
            win = {
                position = "right",
                size = 0.4,
            }
        },
        init = function ()
            vim.keymap.set("n", "<leader>sd", function() require("trouble").toggle("diagnostics") end)
        end,
    },
}
