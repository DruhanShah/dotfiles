local M = {}

M.lsp = {
    override = {
        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,
        ["vim.lsp.util.stylize_markdown"] = true,
        ["cmp.entry.get_documentation"] = true,
    },
}

M.presets = {
    bottom_search = false,
    command_palette = true,
    long_message_to_split = true,
    inc_rename = false,
    lsp_doc_border = false,
}

M.views = {
    cmdline_popup = {
        border = {
            style = "none",
            padding = { 0, 1 },
        },
        position = {
            row = -1,
            col = 0,
        },
        size = {
            width = "100%",
        },
        filter_options = {},
        win_options = {
            winhighlight = "NormalFloat:NormalFloat,FloatBorder:FloatBorder",
        },
    },
}

return M
