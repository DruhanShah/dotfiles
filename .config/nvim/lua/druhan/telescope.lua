local telescope = require("telescope")
local config = require("telescope.config")
local builtin = require("telescope.builtin")

local M = {}

function M.help ()
    builtin.help_tags()
end

function M.oldfiles ()
    builtin.oldfiles()
end

function M.buffers ()
    builtin.buffers()
end

function M.find_files()
    builtin.find_files()
end

function M.file_browser()
    telescope.extensions.file_browser.file_browser()
end

function M.zotero()
    telescope.extensions.zotero.zotero()
end

function M.config()
    builtin.find_files({ cwd = "~/.config/nvim" })
end

function M.reference()
    builtin.lsp_references()
end

function M.setup ()
    telescope.setup {
        defaults = {
            file_ignore_patterns = {
                "node_modules/.*",
                ".git/.*",
                "OneDrive/.*",
            },
            theme = "ivy",
            sorting_strategy = "ascending",
            layout_strategy = "bottom_pane",
            layout_config = {
                height = 15,
            },
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
    telescope.load_extension("file_browser")
end

return M
