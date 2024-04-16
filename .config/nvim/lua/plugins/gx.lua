return {
    "chrishrb/gx.nvim",
    keys = { { "gx", "<Cmd>Browse<CR>", mode = { "n", "x" } } },
    cmd = { "Browse" },
    init = function ()
        vim.g.netrw_nogx = true
    end,
    dependencies = {
        "nvim-lua/plenary.nvim",
    },
    opts = {
        handler_options = {
            search_engine = "duckduckgo",
        }
    },
    submodules = false,
}
