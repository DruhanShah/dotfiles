return {
    "rebelot/heirline.nvim",
    dependencies = {
        "lewis6991/gitsigns.nvim",
        "nvim-tree/nvim-web-devicons",
        { "catppuccin/nvim", name = "catppuccin" },
    },
    event = "UiEnter",
    config = function ()
        local colors = require("catppuccin.palettes").get_palette("mocha")
        require("heirline").load_colors(colors)
        require("heirline").setup {
            statusline = require("statusline"),
            tabline = require("tabline"),
        }
    end,
}
