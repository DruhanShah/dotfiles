return {
    "hrsh7th/nvim-cmp",
    dependencies = {
        "onsails/lspkind-nvim",
        "hrsh7th/cmp-nvim-lua",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "saadparwaiz1/cmp_luasnip",
        "zbirenbaum/copilot-cmp"
    },
    config = function()
        local cmp = require("cmp")
        local lspkind = require("lspkind")
        lspkind.init {
            symbol_map = {
                Copilot = "",
            }
        }

        require("copilot_cmp").setup()

        cmp.setup {
            snippet = {
                expand = function(args)
                    require("luasnip").lsp_expand(args.body)
                end,
            },
            window = {
                completion = {
                    winhighlight = "FloatBorder:NormalFloat",
                    col_offset = -3,
                    side_padding = 0,
                },
                documentation = {
                    winhighlight = "FloatBorder:NormalFloat",
                },
            },
            mapping = {
                ['<C-k>'] = cmp.mapping.select_prev_item(),
                ['<C-j>'] = cmp.mapping.select_next_item(),
                ['<C-Space>'] = cmp.mapping.complete(),
                ['<C-Esc>'] = cmp.mapping.abort(),
                ["<CR>"] = cmp.mapping.confirm {
                    behavior = cmp.ConfirmBehavior.Replace,
                    select = false,
                },
            },
            formatting = {
                fields = { "kind", "abbr", "menu" },
                format = function(entry, vim_item)
                    local kind = lspkind.cmp_format {
                        mode = 'symbol',
                        maxwidth = 30,
                        ellipsis_char = '...',
                        show_labelDetails = true,
                        menu = ({
                            nvim_lua = "[API]",
                            nvim_lsp = "[LSP]",
                            buffer = "[Buffer]",
                            path = "[Path]",
                            cmdline = "[Command]",
                            luasnip = "[Snippet]",
                            copilot = "[Copilot]",
                        })
                    } (entry, vim_item)
                    local strings = vim.split(kind.kind, "%s", { trimempty = true })
                    kind.kind = " " .. (strings[1] or "") .. " "

                    return kind
                end,
            },
            sources = {
                { name = "nvim_lua", max_item_count = 3 },
                { name = "nvim_lsp", max_item_count = 3 },
                { name = "buffer", keyword_length = 5, max_item_count = 3 },
                { name = "path", max_item_count = 10 },
                { name = "cmdline", max_item_count = 10 },
                { name = "luasnip", max_item_count = 3 },
                { name = "copilot", max_item_count = 3 },
            },
        }

        -- Use buffer source for `/` and `?`
        cmp.setup.cmdline({ '/', '?' }, {
            mapping = cmp.mapping.preset.cmdline(),
            sources = {
                { name = 'buffer', max_item_count = 10 }
            }
        })

        -- Use cmdline and path source for ':'
        cmp.setup.cmdline(':', {
            mapping = cmp.mapping.preset.cmdline(),
            sources = cmp.config.sources({
                { name = 'path', max_item_count = 10 }
            }, {
                { name = 'cmdline', max_item_count = 10 }
            })
        })

        vim.api.nvim_set_hl(0, "CmpItemAbbrDeprecated", {
            fg = "#7E8294",
            bg = "NONE",
            strikethrough = true
        })
        vim.api.nvim_set_hl(0, "CmpItemAbbrMatch", { fg = "#89b4fa", bg = "NONE", bold = true })
        vim.api.nvim_set_hl(0, "CmpItemAbbrMatchFuzzy", { fg = "#89b4fa", bg = "NONE", bold = true })
        vim.api.nvim_set_hl(0, "CmpItemMenu", { fg = "#cba6f7", bg = "NONE", italic = true })

        vim.api.nvim_set_hl(0, "CmpItemKindCopilot", { fg = "#111112", bg = "#a6adc8" })

        vim.api.nvim_set_hl(0, "CmpItemKindField", { fg = "#111112", bg = "#f38ba8" })
        vim.api.nvim_set_hl(0, "CmpItemKindProperty", { fg = "#111112", bg = "#f38ba8" })
        vim.api.nvim_set_hl(0, "CmpItemKindEvent", { fg = "#111112", bg = "#f38ba8" })

        vim.api.nvim_set_hl(0, "CmpItemKindText", { fg = "#111112", bg = "#a6e3a1" })
        vim.api.nvim_set_hl(0, "CmpItemKindEnum", { fg = "#111112", bg = "#a6e3a1" })
        vim.api.nvim_set_hl(0, "CmpItemKindKeyword", { fg = "#111112", bg = "#a6e3a1" })

        vim.api.nvim_set_hl(0, "CmpItemKindConstant", { fg = "#111112", bg = "#a6e3a1" })
        vim.api.nvim_set_hl(0, "CmpItemKindConstructor", { fg = "#111112", bg = "#a6e3a1" })
        vim.api.nvim_set_hl(0, "CmpItemKindReference", { fg = "#111112", bg = "#a6e3a1" })

        vim.api.nvim_set_hl(0, "CmpItemKindFunction", { fg = "#111112", bg = "#cba6f7" })
        vim.api.nvim_set_hl(0, "CmpItemKindStruct", { fg = "#111112", bg = "#cba6f7" })
        vim.api.nvim_set_hl(0, "CmpItemKindClass", { fg = "#111112", bg = "#cba6f7" })
        vim.api.nvim_set_hl(0, "CmpItemKindModule", { fg = "#111112", bg = "#cba6f7" })
        vim.api.nvim_set_hl(0, "CmpItemKindOperator", { fg = "#111112", bg = "#cba6f7" })

        vim.api.nvim_set_hl(0, "CmpItemKindVariable", { fg = "#cdd4fa", bg = "#45475a" })
        vim.api.nvim_set_hl(0, "CmpItemKindFile", { fg = "#cdd4fa", bg = "#45475a" })

        vim.api.nvim_set_hl(0, "CmpItemKindUnit", { fg = "#111112", bg = "#fab387" })
        vim.api.nvim_set_hl(0, "CmpItemKindSnippet", { fg = "#111112", bg = "#fab387" })
        vim.api.nvim_set_hl(0, "CmpItemKindFolder", { fg = "#111112", bg = "#fab387" })

        vim.api.nvim_set_hl(0, "CmpItemKindMethod", { fg = "#111112", bg = "#89b4fa" })
        vim.api.nvim_set_hl(0, "CmpItemKindValue", { fg = "#111112", bg = "#89b4fa" })
        vim.api.nvim_set_hl(0, "CmpItemKindEnumMember", { fg = "#111112", bg = "#89b4fa" })

        vim.api.nvim_set_hl(0, "CmpItemKindInterface", { fg = "#111112", bg = "#94e2d5" })
        vim.api.nvim_set_hl(0, "CmpItemKindColor", { fg = "#111112", bg = "#94e2d5" })
        vim.api.nvim_set_hl(0, "CmpItemKindTypeParameter", { fg = "#111112", bg = "#94e2d5" })
    end,
}
