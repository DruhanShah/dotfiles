return {
    "NeogitOrg/neogit",
    branch = "nightly",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "nvim-telescope/telescope.nvim",
        "sindrets/diffview.nvim",
    },
    config = function()
        require("neogit").setup {
            kind = "tab",
            graph_style = "unicode",
            disable_signs = false,
            disable_line_numbers = false,
            signs = {
                section = { " ", " " },
                item = { " ", " " },
                hunk = { "", "" },
            },
            integrations = {
                telescope = true,
                diffview = true,
            }
        }
    end,
}
