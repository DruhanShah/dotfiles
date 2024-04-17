return {
    "catppuccin/nvim",
    name = "catppuccin",
    priority = 1000,
    opts = {
        flavour = "mocha",
        integrations = {
            mason = true,
            which_key = true,
            telescope = { style = "nvchad" },
        },
        custom_highlights = require("druhan.colorscheme").highlight,
    },
    config = function(_, opts)
        require("catppuccin").setup(opts)
        vim.cmd.colorscheme "catppuccin"
    end,
}
