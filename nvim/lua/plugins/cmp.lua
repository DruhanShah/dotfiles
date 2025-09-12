return {
    "hrsh7th/nvim-cmp",
    lazy = true,
    event = {
        "InsertEnter",
        "CmdlineEnter"
    },
    dependencies = {
        "onsails/lspkind-nvim",
        "hrsh7th/cmp-nvim-lua",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "zbirenbaum/copilot-cmp",
    },
    config = function()
        require("config.completion").setup()
    end,
}
