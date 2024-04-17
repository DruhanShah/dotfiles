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
            local custom = require("druhan.conceal")

            vim.g.vimtex_view_method = "zathura"
            vim.g.vimtex_syntax_conceal_cites = {
                type = "icon",
                icon = " ",
            }
            vim.g.vimtex_syntax_custom_cmds = custom.custom_cmds
            vim.g.vimtex_syntax_custom_cmds_with_concealed_delims = custom.custom_cmds_with_delim
        end,
    }
}
