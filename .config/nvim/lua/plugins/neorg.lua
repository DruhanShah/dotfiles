return {
    "nvim-neorg/neorg",
    dependencies = {
        "vhyrro/luarocks.nvim",
    },
    lazy = false,
    config = function()
        require("neorg").setup {
            load = {
                ["core.defaults"] = {},
                ["core.completion"] = {
                    config = {
                        engine = "nvim-cmp",
                    },
                },
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
                        use_template = true,
                        workspace = "notes",
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
