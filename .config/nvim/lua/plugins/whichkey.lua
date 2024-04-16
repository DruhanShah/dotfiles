return {
    "folke/which-key.nvim",
    event = "VeryLazy",
    init = function()
        vim.opt.timeout = true
        vim.opt.timeoutlen = 200
    end,
    opts = {
        plugins = {
            spelling = {
                enabled = true,
                suggestions = 10,
            },
        },
    },
}
