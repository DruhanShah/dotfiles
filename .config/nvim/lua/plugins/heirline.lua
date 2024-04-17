return {
    "rebelot/heirline.nvim",
    event = "UiEnter",
    config = function ()
        local colors = require("catppuccin.palettes").get_palette("mocha")
        require("heirline").load_colors(colors)
        require("heirline").setup {
            statusline = require("druhan.statusline"),
            tabline = require("druhan.tabline"),
        }
    end,
}
