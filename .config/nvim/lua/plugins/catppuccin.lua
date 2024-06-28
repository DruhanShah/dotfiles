return {
    "catppuccin/nvim",
    name = "catppuccin",
    priority = 1000,
    opts = {
        integrations = {
            mason = true,
        },
        custom_highlights = require("config.ui.highlights").highlight,
        color_overrides = require("config.ui.highlights").overrides,
    },
    config = function(_, opts)
        require("catppuccin").setup(opts)
        vim.cmd.colorscheme "catppuccin-latte"
    end,
}
