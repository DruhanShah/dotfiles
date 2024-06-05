local telescope = require("telescope")
local builtin = require("telescope.builtin")
local pickers = require("telescope.pickers")
local finders = require("telescope.finders")
local previewers = require("telescope.previewers")
local putils = require("telescope.previewers.utils")
local actions = require("telescope.actions")
local action_state = require("telescope.actions.state")
local conf = require("telescope.config").values

local M = {}

function M.gtd(opts)
    opts = opts or {}

    pickers.new(opts, {
        prompt_title = "GTD list",
        finder = finders.new_table {
            results = {
                { "Refile",        "~/Notes/index.norg" },
                { "Now",           "~/Notes/now.norg" },
                { "Later",         "~/Notes/later.norg" },
                { "Someday/Maybe", "~/Notes/maybe.norg" },
                { "Deadlines",     "~/Notes/deadlines.norg" },
                { "Projects",      "~/Notes/Projects/" },
            },
            entry_maker = function(entry)
                return {
                    value = entry[2],
                    display = entry[1],
                    ordinal = entry[1],
                }
            end
        },
        sorter = conf.generic_sorter(opts),
        previewer = previewers.new_buffer_previewer {
            define_preview = function(self, entry)
                conf.buffer_previewer_maker(entry.value, self.state.bufnr, {
                    bufname = self.state.bufname,
                    callback = function(bufnr)
                        putils.highlighter(bufnr, "norg")
                    end
                })
            end
        },
        attach_mappings = function(prompt_bufnr, map)
            actions.select_default:replace(function()
                local selection = action_state.get_selected_entry()
                actions.close(prompt_bufnr)
                vim.cmd(":e " .. selection.value)
            end)
            return true
        end
    }):find()
end

function M.help()
    builtin.help_tags()
end

function M.highlights()
    builtin.highlights()
end

function M.oldfiles()
    builtin.oldfiles()
end

function M.buffers()
    builtin.buffers()
end

function M.find_files()
    builtin.find_files()
end

function M.zotero()
    telescope.extensions.zotero.zotero()
end

function M.search()
    builtin.current_buffer_fuzzy_find()
end

function M.config()
    builtin.find_files({ cwd = "~/.config/nvim" })
end

function M.reference()
    builtin.lsp_references()
end

function M.spell()
    builtin.spell_suggest()
end

function M.setup()
    telescope.setup {
        defaults = {
            file_ignore_patterns = {
                "node_modules/.*",
                ".git/.*",
                "OneDrive/.*",
            },
            path_display = {
                "filename_first",
            },
            layout_config = {
                prompt_position = "top",
            },
            sorting_strategy = "ascending",
        },
        extensions = {
            file_browser = {
                mappings = {
                    ["i"] = {
                        ["<C-e>"] = function(bufnr)
                            local Path = require("plenary.path")
                            local fb_utils = require("telescope._extensions.file_browser.utils")
                            local curr_pick = require("telescope.actions.state").get_current_picker(bufnr)
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
        }
    }

    telescope.load_extension("fzf")
    telescope.load_extension("zotero")
end

return M
