return {
    "hrsh7th/nvim-cmp",
    dependencies = {
        "onsails/lspkind-nvim",
        "neovim/nvim-lspconfig",
        "hrsh7th/cmp-nvim-lua",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "L3MON4D3/LuaSnip",
        "saadparwaiz1/cmp_luasnip",
        "micangl/cmp-vimtex",
        "zbirenbaum/copilot-cmp"
    },
    config = function()
        local cmp = require("cmp")
        local lspkind = require("lspkind")
        local lspconfig = require("lspconfig")
        lspkind.init {
            symbol_map = {
                Copilot = "",
            }
        }
        vim.api.nvim_set_hl(0, "CmpItemKindCopilot", { fg = "#a6e3a1" })

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
                format = lspkind.cmp_format({
                    mode = 'symbol',
                    maxwidth = 50,
                    ellipsis_char = '...',
                    show_labelDetails = true,
                    menu = ({
                        nvim_lua = "[API]",
                        nvim_lsp = "[LSP]",
                        buffer = "[Buffer]",
                        path = "[Path]",
                        cmdline = "[Command]",
                        luasnip = "[Snippet]",
                        neorg = "[Neorg]",
                        vimtex = "[Vimtex]",
                        copilot = "[Copilot]",
                    })
                })
            },
            sources = {
                { name = "nvim_lua" },
                { name = "nvim_lsp" },
                { name = "buffer", keyword_length = 5 },
                { name = "path" },
                { name = "cmdline" },
                { name = "luasnip" },
                { name = "neorg" },
                { name = "vimtex" },
                { name = "copilot" },
            },
        }

        -- Use buffer source for `/` and `?`
        cmp.setup.cmdline({ '/', '?' }, {
            mapping = cmp.mapping.preset.cmdline(),
            sources = {
                { name = 'buffer' }
            }
        })

        -- Use cmdline and path source for ':'
        cmp.setup.cmdline(':', {
            mapping = cmp.mapping.preset.cmdline(),
            sources = cmp.config.sources({
                { name = 'path' }
            }, {
                { name = 'cmdline' }
            })
        })

        local capabilities = require("cmp_nvim_lsp").default_capabilities()
        lspconfig.lua_ls.setup {capabilities = capabilities}
        lspconfig.pylsp.setup {capabilities = capabilities}
        lspconfig.texlab.setup {capabilities = capabilities}
    end,
}
