return {
    "neovim/nvim-lspconfig",
    dependencies = {
        "williamboman/mason.nvim",
        "williamboman/mason-lspconfig.nvim",
    },
    config = function()
        require("mason").setup()
        require("mason-lspconfig").setup()
        local capabilities = require("cmp_nvim_lsp").default_capabilities()

        require("lspconfig").texlab.setup {capabilities = capabilities}
        require("lspconfig").pylsp.setup {capabilities = capabilities}
        require("lspconfig").lua_ls.setup {
            capabilities = capabilities,
            settings = {
                Lua = {
                    diagnostics = {
                        globals = {"vim"},
                    },
                },
            },
        }

        require("lspconfig.ui.windows").default_options = { border = "none" }
        vim.lsp.handlers["textDocument/hover"] = vim.lsp.with (
            vim.lsp.handlers.hover, { border = "none" }
        )
        vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
            vim.lsp.diagnostic.on_publish_diagnostics, { virtual_text = false, }
        )
        vim.diagnostic.config { float = { border = "none" } }

        vim.keymap.set("n", "gd", "<Cmd>lua vim.lsp.buf.definition()<CR>", {
            noremap = true,
            desc = "Go to definition",
        })
        vim.keymap.set("n", "gl", "<Cmd>lua vim.diagnostic.open_float()<CR>", {
            noremap = true,
            desc = "Open diagnostics",
        })
    end,
}
