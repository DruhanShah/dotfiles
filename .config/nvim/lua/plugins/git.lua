return {
    {
        "NeogitOrg/neogit",
        branch = "nightly",
        cmd = "Neogit",
        dependencies = {
            "nvim-lua/plenary.nvim",
            "nvim-telescope/telescope.nvim",
            "sindrets/diffview.nvim",
        },
        opts = {
            graph_style = "unicode",
            disable_hint = true,
            disable_signs = false,
            signs = {
                section = { " ", " " },
                item = { " ", " " },
                hunk = { "", "" },
            },
            integrations = {
                telescope = true,
                diffview = true,
            }
        },
    }
}
