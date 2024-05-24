local update_date = function()
    return os.date("%Y-%m-%dT%H:%M:%S")
end

return {
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
        ["core.esupports.metagen"] = {
            config = {
                timezone = "implicit-local",
                template = {
                    {
                        "title",
                        function()
                            return vim.fn.expand("%:p:t:r")
                        end,
                    },
                    { "description", "" },
                    { "categories",  "" },
                    { "updated",     update_date },
                }
            },
        },
        ["core.concealer"] = {
            config = {
                init_open_folds = "auto",
                icon_preset = "basic",
                icons = {
                    code_block = {
                        conceal = true,
                        width = "content",
                        padding = {
                            left = 1,
                            right = 1,
                        },
                    },
                    heading = {
                        icons = {
                            "",
                            "",
                            "",
                            "",
                            "󰜌",
                            "✺",
                        }
                    },
                    todo = {
                        pending = {
                            icon = "",
                        },
                        uncertain = {
                            icon = "",
                        },
                        cancelled = {
                            icon = "",
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
                                percentage = 30,
                            },
                        },
                    },
                },
                highlights = {
                    rendered = {
                        latex = "guifg=#cdd6f4",
                    },
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
                    todo_items = {
                        done = "guibg=#a6e3a1 guifg=#11111b gui=bold",
                        undone = "guibg=#9399b2 guifg=#11111b gui=bold",
                        urgent = "guibg=#f38ba8 guifg=#11111b gui=bold",
                        on_hold = "guibg=#89b4fa guifg=#11111b gui=bold",
                        pending = "guibg=#b4befe guifg=#11111b gui=bold",
                        recurring = "guibg=#cba6f7 guifg=#11111b gui=bold",
                        uncertain = "guibg=#fab387 guifg=#11111b gui=bold",
                        cancelled = "guibg=#45475a guifg=#11111b gui=bold",
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
        ["core.integrations.image"] = {},
        ["core.latex.renderer"] = {
            config = {
                render_on_enter = true,
            },
        },
        ["external.conceal-wrap"] = {},
    },
}
