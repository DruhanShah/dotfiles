return {
    {
        "vhyrro/luarocks.nvim",
        priority = 1001,
        opts = {
            rocks = {
                "magick"
            },
        },
    },
    {
        "3rd/image.nvim",
        dependencies = {
            "vhyrro/luarocks.nvim",
        },
        config = true,
    },
    {
        "nvim-neorg/neorg",
        dependencies = {
            "vhyrro/luarocks.nvim",
            "nvim-treesitter/nvim-treesitter",
            "benlubas/neorg-conceal-wrap",
        },
        lazy = false,
        opts = require("config.neorg"),
    }
}
