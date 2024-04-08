return {
    "Julian/lean.nvim",
    enabled = false,
    event = {
        "BufReadPre *.lean",
        "BufNewFile *.lean",
    },
    dependencies = {
        "neovim/nvim-lspconfig",
        "nvim-lua/plenary.nvim",
        "hrsh7th/nvim-cmp",
    },

    opts = {
        lsp = {
            on_attach = on_attach,
        },
        mappings = true,
    },
}
