return {

    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-telescope/telescope-file-browser.nvim",
        "nvim-lua/plenary.nvim",
        "jmbuhr/telescope-zotero.nvim",
        "kkharji/sqlite.lua",
        {
            "nvim-telescope/telescope-fzf-native.nvim",
            build = "make",
        },
    },

    config = function()
        local telescope = require("telescope")

        local telescope_config = require("telescope.config")
        local vimgrep_args = telescope_config.values.vimgrep_arguments
        table.insert(vimgrep_args, "--hidden")
        table.insert(vimgrep_args, "--glob")
        table.insert(vimgrep_args, "!**/.git/*")

        local fb_utils = require("telescope._extensions.file_browser.utils")
        local action_state = require("telescope.actions.state")
        local Path = require("plenary.path")

        telescope.setup {
            defaults = {
                vimgrep_arguments = vimgrep_args,
                file_ignore_patterns = {
                    "node_modules/.*",
                    ".git/.*",
                    "OneDrive/.*",
                },
            },
            pickers = {
                find_files = {
                    find_command = { "rg", "--files", "--hidden", "--glob", "!**/.git/*"},
                    theme = "ivy",
                },
                oldfiles = {
                    theme = "ivy",
                },
                buffers = {
                    theme = "ivy",
                },
            },
            extensions = {
                fzf = {
                    fuzzy = true,
                    override_generic_sorter = true,
                    override_file_sorter = true,
                    case_mode = "smart_case",
                },
                file_browser = {
                    theme = "ivy",
                    mappings = {
                        ["i"] = {
                            ["<C-e>"] = function(bufnr)
                                local curr_pick = action_state.get_current_picker(bufnr)
                                local finder = curr_pick.finder
                                local buf_path = Path:new(vim.fn.expand("#:p"))
                                local buf_parent_path = buf_path:parent():absolute()

                                if finder.path ~= buf_parent_path then
                                    finder.path = buf_parent_path
                                    fb_utils.selection_callback(curr_pick, buf_path:absolute())
                                else
                                    finder.path = vim.loop.cwd()
                                end
                                fb_utils.redraw_border_title(curr_pick)
                                curr_pick:refresh(finder, {
                                    new_prefix = fb_utils.relative_path_prefix(finder),
                                    reset_prompt = true,
                                    multi = curr_pick.multi,
                                })

                            end
                        },
                    },
                },
            },
        }

        telescope.load_extension("fzf")
        telescope.load_extension("zotero")
        telescope.load_extension("file_browser")

        vim.keymap.set("n", "<leader>fo", require("telescope.builtin").oldfiles, {
            noremap = true,
            desc = "Old files",
        })
        vim.keymap.set("n", "<leader>bf", require("telescope.builtin").buffers, {
            noremap = true,
            desc = "List buffers",
        })
        vim.keymap.set("n", "<leader>ff", require("telescope.builtin").find_files, {
            noremap = true,
            desc = "Find files",
        })
        vim.keymap.set("n", "<leader>fb", telescope.extensions.file_browser.file_browser, {
            noremap = true,
            desc = "File browser",
        })
        vim.keymap.set("n", "<leader>zc", telescope.extensions.zotero.zotero, {
            noremap = true,
            desc = "Search Zotero",
        })

        local colors = require("catppuccin.palettes").get_palette()
        local TelescopeColor = {
            TelescopeMatching = { fg = colors.flamingo },
            TelescopeSelection = { fg = colors.text, bg = colors.base},
            TelescopePromptPrefix = { bg = colors.surface0 },
            TelescopePromptNormal = { bg = colors.surface0 },
            TelescopeResultsNormal = { bg = colors.mantle },
            TelescopePreviewNormal = { bg = colors.mantle },
            TelescopePromptBorder = { bg = colors.surface0, fg = colors.surface0 },
            TelescopeResultsBorder = { bg = colors.mantle, fg = colors.mantle },
            TelescopePreviewBorder = { bg = colors.mantle, fg = colors.mantle },
            TelescopePromptTitle = { bg = colors.pink, fg = colors.mantle },
            TelescopeResultsTitle = { fg = colors.mantle },
            TelescopePreviewTitle = { bg = colors.green, fg = colors.mantle },
        }

        for hl, col in pairs(TelescopeColor) do
            vim.api.nvim_set_hl(0, hl, col)
        end
    end,

}
