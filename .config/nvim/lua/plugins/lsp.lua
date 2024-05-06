return {
    "neovim/nvim-lspconfig",
    dependencies = {
        "williamboman/mason.nvim",
        "williamboman/mason-lspconfig.nvim",
        "stevearc/conform.nvim",
        "LittleEndianRoot/mason-conform",
    },
    init = function()
        vim.keymap.set("n", "gd", vim.lsp.buf.definition, {
            desc = "Go to definition",
        })
        vim.keymap.set("n", "gl", vim.diagnostic.open_float, {
            desc = "Open diagnostics",
        })
    end,

    config = function ()
        require("config.lsp").setup()
    end
}
