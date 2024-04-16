return {
    "lewis6991/gitsigns.nvim",
    lazy = true,
    config = function ()
        require("gitsigns").setup {
            signcolumn = false,
        }
    end
}
