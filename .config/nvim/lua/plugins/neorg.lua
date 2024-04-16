return {
    "nvim-neorg/neorg",
    dependencies = {
        "vhyrro/luarocks.nvim",
        "nvim-tree/nvim-treesitter",
        { "pysan3/neorg-templates", dependencies = { "L3MON4D3/LuaSnip" } },
    },
    lazy = false,
    config = function()
        require("neorg").setup {
            load = {
                ["core.defaults"] = {},
                ["core.dirman"] = {
                    config = {
                        workspaces = {
                            notes = "~/Notes",
                            config = "~/.config",
                        },
                        default_workspace = "notes",
                    },
                },
                ["core.concealer"] = {
                    config = {
                        init_open_folds = "always",
                        icon_preset = "diamond",
                        icons = {
                            code_block = {
                                conceal = true,
                                content_only = false,
                                width = "content",
                                padding = {
                                    left = 1,
                                    right = 1,
                                },
                            },
                        },
                    },
                },
                ["core.highlights"] = {
                    config = {
                        dim = {
                            tags = {
                                ranged_verbatim = {
                                    code_block = {
                                        percentage = 50,
                                    },
                                },
                            },
                        },
                        highlights = {
                            headings = {
                                ["1"] = {
                                    title = "guifg=#74c7ec gui=bold",
                                    prefix = "guifg=#74c7ec gui=bold",
                                },
                                ["2"] = {
                                    title = "guifg=#a6e3a1 gui=bold",
                                    prefix = "guifg=#a6e3a1 gui=bold",
                                },
                                ["3"] = {
                                    title = "guifg=#94e2d5 gui=bold",
                                    prefix = "guifg=#94e2d5 gui=bold",
                                },
                                ["4"] = {
                                    title = "guifg=#b4befe gui=bold",
                                    prefix = "guifg=#b4befe gui=bold",
                                },
                                ["5"] = {
                                    title = "guifg=#f9e2af gui=bold",
                                    prefix = "guifg=#f9e2af gui=bold",
                                },
                                ["6"] = {
                                    title = "guifg=#fab387 gui=bold",
                                    prefix = "guifg=#fab387 gui=bold",
                                },
                            },
                        },
                    },
                },
                ["core.summary"] = {},
                ["core.journal"] = {
                    config = {
                        journal_folder = "Journal",
                        workspace = "notes",
                    },
                },
                ["core.ui.calendar"] = {},
                ["external.templates"] = {
                    config = {
                        keywords = {
                            TODAY_AS_FILEPATH = function()
                                local ls = require("luasnip")
                                local s = require("neorg.modules.external.templates.default_snippets")
                                return ls.text_node(s.parse_date(0, s.file_name_date(), "%Y/%m/%d"))
                            end,
                            TOMORROW_AS_FILEPATH = function()
                                local ls = require("luasnip")
                                local s = require("neorg.modules.external.templates.default_snippets")
                                return ls.text_node(s.parse_date(1, s.file_name_date(), "%Y/%m/%d"))
                            end,
                            YESTERDAY_AS_FILEPATH = function()
                                local ls = require("luasnip")
                                local s = require("neorg.modules.external.templates.default_snippets")
                                return ls.text_node(s.parse_date(-1, s.file_name_date(), "%Y/%m/%d"))
                            end,
                        },
                    },
                },
            },
        }

        vim.keymap.set("n", "<localleader>jt", ":Neorg journal today<cr>", {
            noremap = true,
            desc = "Open today's journal",
        })
        vim.keymap.set("n", "<localleader>jT", ":Neorg journal tomorrow<cr>", {
            noremap = true,
            desc = "Open tomorrow's journal",
        })
        vim.keymap.set("n", "<localleader>jy", ":Neorg journal yesterday<cr>", {
            noremap = true,
            desc = "Open yesterday's journal",
        })
    end,

}
