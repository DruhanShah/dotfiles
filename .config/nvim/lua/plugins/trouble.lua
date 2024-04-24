return {
    "folke/trouble.nvim",
    dependencies = {
        "nvim-tree/nvim-web-devicons",
    },
    config = function ()
        require("trouble").setup()

        vim.keymap.set("n", "<leader>xx", function() require("trouble").toggle() end, {
            desc = "[Trouble] Toggle default",
        })
        vim.keymap.set("n", "<leader>xd", function() require("trouble").toggle("document_diagnostics") end, {
            desc = "[Trouble] Toggle diagnostics",
        })
        vim.keymap.set("n", "<leader>xq", function() require("trouble").toggle("quickfix") end, {
            desc = "[Trouble] Toggle quickfix",
        })
        vim.keymap.set("n", "<leader>xl", function() require("trouble").toggle("loclist") end, {
            desc = "[Trouble] Toggle location list",
        })
    end,
}
