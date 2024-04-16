return {
    "hrsh7th/nvim-cmp",
    lazy = true,
    event = {
        "InsertEnter",
        "CmdlineEnter"
    },
    dependencies = {
        "onsails/lspkind-nvim",
        "hrsh7th/cmp-nvim-lua",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "saadparwaiz1/cmp_luasnip",
        "zbirenbaum/copilot-cmp",
    },
    config = function()
        local cmp = require("cmp")
        local lspkind = require("lspkind")
        local cmp_autopairs = require("nvim-autopairs.completion.cmp")
        cmp.event:on("confirm_done", cmp_autopairs.on_confirm_done())
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
                ['<C-p>'] = cmp.mapping.select_prev_item(),
                ['<C-n>'] = cmp.mapping.select_next_item(),
                ['<C-CR>'] = cmp.mapping.complete(),
                ['<C-Esc>'] = cmp.mapping.abort(),
                ["<C-y>"] = cmp.mapping.confirm {
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
                            -- luasnip = "[Snippet]",
                            -- copilot = "[Copilot]",
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
                -- { name = "luasnip", max_item_count = 3 },
                -- { name = "copilot", max_item_count = 3 },
            },
        }

        cmp.setup.cmdline({ '/', '?' }, {
            mapping = cmp.mapping.preset.cmdline(),
            sources = {
                { name = 'buffer', max_item_count = 10 }
            }
        })

        cmp.setup.cmdline(':', {
            mapping = cmp.mapping.preset.cmdline(),
            sources = cmp.config.sources({
                { name = 'path', max_item_count = 10 }
            }, {
                { name = 'cmdline', max_item_count = 10 }
            })
        })

    end,
}
