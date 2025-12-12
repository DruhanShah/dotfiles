return {
    "NeogitOrg/neogit",
    branch = "master",
    cmd = "Neogit",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "nvim-telescope/telescope.nvim",
        "sindrets/diffview.nvim",
    },
    opts = {
        kind = "replace",
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
