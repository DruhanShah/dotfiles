return {

    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-telescope/telescope-file-browser.nvim",
        "nvim-lua/plenary.nvim",
        "jmbuhr/telescope-zotero.nvim",
        "kkharji/sqlite.lua",
    },

    config = function()
        local colors = require("catppuccin.palettes").get_palette()
        local TelescopeColor = {
            TelescopeMatching = { fg = colors.flamingo },
            TelescopeSelection = { fg = colors.text, bg = colors.surface0},
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

        local telescope_config = require("telescope.config")
        local vimgrep_args = telescope_config.values.vimgrep_arguments
        table.insert(vimgrep_args, "--hidden")
        table.insert(vimgrep_args, "--glob")
        table.insert(vimgrep_args, "!**/.git/*")

        require("telescope").setup {
            defaults = {
                vimgrep_arguments = vimgrep_args,
            },
            pickers = {
                find_files = {
                    find_command = { "rg", "--files", "--hidden", "--glob", "!**/.git/*" },
                },
            },
        }

        for hl, col in pairs(TelescopeColor) do
            vim.api.nvim_set_hl(0, hl, col)
        end

        require("telescope").load_extension("zotero")
        require("telescope").load_extension("file_browser")

        vim.keymap.set("n", "<leader>ff", require("telescope.builtin").find_files, {
            noremap = true,
            desc = "Find files",
        })
        vim.keymap.set("n", "<leader>bf", require("telescope.builtin").buffers, {
            noremap = true,
            desc = "List buffers",
        })
        vim.keymap.set("n", "<leader>fb", require("telescope").extensions.file_browser.file_browser, {
            noremap = true,
            desc = "File browser",
        })
        vim.keymap.set("n", "<leader>zc", require("telescope").extensions.zotero.zotero, {
            noremap = true,
            desc = "Search Zotero",
        })
    end,

}
