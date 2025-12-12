return {
    "nvim-treesitter/nvim-treesitter",
    config = function ()
        local opts = require("config.treesitter")
        require("nvim-treesitter.configs").setup(opts)
    end,
    build = ":TSUpdate",
}
