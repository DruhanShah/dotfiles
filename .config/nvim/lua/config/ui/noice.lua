local M = {}

M.cmdline = {
    enabled = true,
    view = "cmdline_popup",
}

M.lsp = {
    override = {
        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,
        ["vim.lsp.util.stylize_markdown"] = true,
        ["cmp.entry.get_documentation"] = true,
    },
}

M.presets = {
    long_message_to_split = true,
    lsp_doc_border = false,
}

M.views = {
    cmdline_popup = {
        border = {
            style = "none",
            padding = { 1, 3 },
        },
        win_options = {
            winhighlight = "NormalFloat:NormalFloat,FloatBorder:FloatBorder",
        },
    },
}

return M
