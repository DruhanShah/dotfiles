local telescope = require("telescope")
local builtin = require("telescope.builtin")
local pickers = require("telescope.pickers")
local finders = require("telescope.finders")
local previewers = require("telescope.previewers")
local putils = require("telescope.previewers.utils")
local actions = require("telescope.actions")
local action_state = require("telescope.actions.state")
local conf = require("telescope.config").values
local layout_strat = require("telescope.pickers.layout_strategies")

layout_strat.vertico = function (picker, max_columns, max_lines, layout_config)
    local base = layout_strat.center(picker, max_columns, max_lines, layout_config)
    base.results.line = base.results.line - 1
    base.prompt.line = base.prompt.line - 2
    base.prompt.height = base.prompt.height
    base.prompt.border = { 1, 1, 1, 1 }
    base.prompt.borderchars = { "─", "│", "─", "│", "╭", "╮", "╯", "╰" }
    base.results.borderchars = { "", "", "─", "", "", "", "─", "─" }
    base.results.title = ""

    return base
end

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
        attach_mappings = function(prompt_bufnr)
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
            prompt_prefix = "    ",
            selection_caret = " ",
            entry_prefix = "  ",
            file_ignore_patterns = {
                "node_modules/.*",
                ".git/.*",
                "OneDrive/.*",
            },
            path_display = {
                "filename_first",
            },
            layout_strategy = "vertico",
            layout_config = {
                preview_cutoff = 99999,
                width = vim.o.columns,
                height = 15,
                anchor = "N",
            },
            sorting_strategy = "ascending",
        },
    }

    telescope.load_extension("fzf")
    telescope.load_extension("zotero")
end

return M
