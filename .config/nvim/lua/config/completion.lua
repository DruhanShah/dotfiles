
local M = {}

function M.setup()
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
                winhighlight = "Normal:Pmenu,FloatBorder:Pmenu,Search:PmenuSel",
                col_offset = -3,
                side_padding = 0,
            },
            documentation = {
                winhighlight = "Normal:Pmenu,FloatBorder:Pmenu,Search:PmenuSel",
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
                        luasnip = "[Snippet]",
                        copilot = "[Copilot]",
                        neorg = "[Neorg]",
                    })
                } (entry, vim_item)
                local strings = vim.split(kind.kind, "%s", { trimempty = true })
                kind.kind = " " .. (strings[1] or "") .. " "

                return kind
            end,
        },
        sources = {
            { name = "nvim_lua" },
            { name = "nvim_lsp" },
            { name = "buffer" },
            { name = "path" },
            { name = "cmdline" },
            { name = "luasnip" },
            { name = "copilot" },
            { name = "neorg" },
        },
    }

    cmp.setup.cmdline({ '/', '?' }, {
        mapping = cmp.mapping.preset.cmdline(),
        sources = {
            { name = 'buffer' }
        },
    })

    cmp.setup.cmdline(':', {
        mapping = cmp.mapping.preset.cmdline(),
        sources = {
            { name = 'path' },
            { name = 'cmdline' }
        },
    })
end

return M
