local update_date = function ()
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
                        function ()
                            return vim.fn.expand("%:p:t:r")
                        end,
                    },
                    { "description", "" },
                    { "categories", "" },
                    { "updated", update_date },
                }
            },
        },
        ["core.concealer"] = {
            config = {
                init_open_folds = "always",
                icon_preset = "basic",
                icons = {
                    code_block = {
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
                -- dim = {
                --     tags = {
                --         ranged_verbatim = {
                --             code_block = {
                --                 percentage = 50,
                --             },
                --         },
                --     },
                -- },
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
        -- ["external.better-conceal"] = {},
    },
}
