return {
    "catppuccin/nvim",
    name = "catppuccin",
    priority = 1000,
    opts = {
        integrations = {
            mason = true,
            which_key = true,
            telescope = { style = "nvchad" },
        },
        custom_highlights = require("config.ui.highlights").highlight,
    },
    config = function(_, opts)
        require("catppuccin").setup(opts)
        vim.cmd.colorscheme "catppuccin-mocha"
    end,
}
