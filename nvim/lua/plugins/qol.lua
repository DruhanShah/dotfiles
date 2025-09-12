return {
    {
        "windwp/nvim-autopairs",
        event = "InsertEnter",
        config = true,
    },
    {
        "brenoprata10/nvim-highlight-colors",
        event = "BufReadPre",
        opts = { enable_named_colors = false },
    },
    {
        "kylechui/nvim-surround",
        event = "VeryLazy",
        opts = {
            surrounds = {
                ["c"] = {
                    add = function()
                        local command = require("nvim-surround.config").get_input("Enter LaTeX command: ")
                        return { { "\\" ..command.. "{" }, { "}" } }
                    end,
                },
            },
        },
    },
}
