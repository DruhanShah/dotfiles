return {
    {
        "Julian/lean.nvim",
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
            lsp = { on_attach = on_attach },
            mappings = true,
        },
    },
    {
        "lervag/vimtex",
        init = function()
            vim.g.vimtex_view_method = "zathura"
            vim.g.vimtex_fold_enabled = true
            vim.g.vimtex_syntax_conceal_cites = {
                type = "icon",
                icon = "󰎚",
            }
        end,
    }
}
