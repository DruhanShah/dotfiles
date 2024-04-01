return {
    "kylechui/nvim-surround",
    event = "VeryLazy",
    config = function()
        require("nvim-surround").setup {
            surrounds = {
                ["c"] = {
                    add = function()
                        local command = require("nvim-surround.config").get_input("Enter LaTeX command: ")
                        return { { "\\" ..command.. "{" }, { "}" } }
                    end,
                },
            },
        }
    end,
}
