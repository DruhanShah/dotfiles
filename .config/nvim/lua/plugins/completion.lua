return {
    "hrsh7th/nvim-cmp",
    dependencies = {
        "neovim/nvim-lspconfig",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "L3MON4D3/LuaSnip",
        "saadparwaiz1/cmp_luasnip",
    },
    config = function()
        local kind_icons = {
          Text = "󰊄",
          Method = "m",
          Function = "󰊕",
          Constructor = "",
          Field = "",
          Variable = "󰫧",
          Class = "",
          Interface = "",
          Module = "",
          Property = "",
          Unit = "",
          Value = "",
          Enum = "",
          Keyword = "󰌆",
          Snippet = "",
          Color = "",
          File = "",
          Reference = "",
          Folder = "",
          EnumMember = "",
          Constant = "",
          Struct = "",
          Event = "",
          Operator = "",
          TypeParameter = "󰉺",
        }

        local cmp = require("cmp")
        local lspconfig = require("lspconfig")

        cmp.setup {
            snippet = {
                expand = function(args)
                    require("luasnip").lsp_expand(args.body)
                end,
            },
            window = {
                completion = cmp.config.window.bordered(),
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
                    vim_item.kind = string.format("%s", kind_icons[vim_item.kind])
                    vim_item.menu = ({
                        ultisnips = "[Snippet]",
                        buffer = "[Buffer]",
                        path = "[Path]",
                        nvim_lsp = "[LSP]"
                    })[entry.source.name]
                    return vim_item
                end,
            },
            sources = {
                { name = "nvim_lsp" },
                { name = "buffer" },
                { name = "path" },
                { name = "cmdline" },
                { name = "luasnip" },
                { name = "neorg" },
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
