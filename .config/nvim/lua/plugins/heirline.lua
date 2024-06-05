return {
    "rebelot/heirline.nvim",
    event = "UIEnter",
    priority = 100,
    config = function ()
        local colors = require("catppuccin.palettes").get_palette("mocha")
        require("heirline").load_colors(colors)
        require("heirline").setup {
            statusline = require("config.ui.statusline").separator,
            tabline = require("config.ui.statusline").minimal,
        }
    end,
}
