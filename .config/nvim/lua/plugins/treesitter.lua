return {
    "nvim-treesitter/nvim-treesitter",
    dependencies = {
        "nvim-treesitter/nvim-treesitter-textobjects",
    },
    config = function ()
        local opts = require("config.treesitter")
        require("nvim-treesitter.configs").setup(opts)
    end,
    build = ":TSUpdate",
}
