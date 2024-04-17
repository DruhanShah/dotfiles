return {
    "nvim-treesitter/nvim-treesitter",
    dependencies = {
        "nvim-treesitter/nvim-treesitter-textobjects",
    },
    config = function ()
        require("nvim-treesitter.configs").setup {
            sync_install = false,
            auto_install = true,
            highlight = {
                enable = true,
                disable = { "latex" },
                additional_vim_regex_highlighting = { "latex" },
            },
            incremental_selection = {
                enable = true,
                keymaps = {
                    init_selection = "<leader>vv",
                    node_incremental = "<leader>vn",
                    scope_incremental = "<leader>vs",
                    node_decremental = "<leader>vd",
                },
            },
            textobjects = {
                select = {
                    enable = true,
                    lookahead = true,
                    keymaps = {
                        ["af"] = "@function.outer",
                        ["if"] = "@function.inner",
                        ["ac"] = "@class.outer",
                        ["ic"] = "@class.inner",
                        ["as"] = "@scope",
                    },
                    selection_modes = {
                        ["@parameter.outer"] = "v",
                        ["@function.outer"] = "V",
                        ["@class.outer"] = "<C-v>",
                    },
                },
            },
        }
    end,
    build = ":TSUpdate",
}
