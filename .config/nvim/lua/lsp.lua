require("mason").setup()
require("mason-lspconfig").setup({
	ensure_installed = {
		"lua_ls",
		"pylsp",
		"texlab",
	}
})

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
vim.diagnostic.config{
	float={
		border = "rounded"
	}
}

require("lspconfig").lua_ls.setup {}
require("lspconfig").pylsp.setup {}
require("lspconfig").texlab.setup {}
