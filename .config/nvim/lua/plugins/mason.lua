return {
    "williamboman/mason.nvim",
    dependencies = {
        "williamboman/mason-lspconfig.nvim",
        "neovim/nvim-lspconfig",
    },
    config = function()
        require("mason").setup()
        require("mason-lspconfig").setup {
            ensure_installed = {}
        }

        require("lspconfig.ui.windows").default_options = {
            border = "rounded"
        }
        vim.lsp.handlers["textDocument/hover"] = vim.lsp.with (
            vim.lsp.handlers.hover, {
                border = "rounded"
            }
        )
        vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
            vim.lsp.diagnostic.on_publish_diagnostics, {
                virtual_text = false,
            }
        )
        vim.diagnostic.config {
            float = {
                border = "rounded"
            }
        }

        vim.keymap.set("n", "gd", "<Cmd>lua vim.lsp.buf.definition()<CR>", {
            noremap = true,
            desc = "Go to definition",
        })
        vim.keymap.set("n", "gD", "<Cmd>lua vim.lsp.buf.declaration()<CR>", {
            noremap = true,
            desc = "Go to declaration",
        })
        vim.keymap.set("n", "gl", "<Cmd>lua vim.diagnostic.open_float()<CR>", {
            noremap = true,
            desc = "Open diagnostics",
        })
        vim.keymap.set("n", "K", "<Cmd>lua vim.lsp.buf.hover()<CR>", {
            noremap = true,
            desc = "Show hover information",
        })
    end,
}
