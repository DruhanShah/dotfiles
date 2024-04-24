return {
    {
        "vhyrro/luarocks.nvim",
        config = true,
    },
    {
        "nvim-neorg/neorg",
        dependencies = {
            "vhyrro/luarocks.nvim",
            "nvim-treesitter/nvim-treesitter",
            { "pysan3/neorg-templates", dependencies = { "L3MON4D3/LuaSnip" } },
        },
        lazy = false,
        init = function ()
            vim.keymap.set("n", "<localleader>jt", ":Neorg journal today<cr>", {
                desc = "[Neorg] Open today's journal",
            })
            vim.keymap.set("n", "<localleader>jT", ":Neorg journal tomorrow<cr>", {
                desc = "[Neorg] Open tomorrow's journal",
            })
            vim.keymap.set("n", "<localleader>jy", ":Neorg journal yesterday<cr>", {
                desc = "[Neorg] Open yesterday's journal",
            })
            vim.keymap.set("n", "<leader>nt", ":Neorg workspace notes<cr>", {
                desc = "[Neorg] Jot down a note",
            })
        end,
        opts = require("config.neorg"),
    }
}
