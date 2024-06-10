return {
    "vimpostor/vim-tpipeline",
    event = "UIEnter",
    dependencies = { "nvim-tree/nvim-web-devicons" },
    init = require("config.ui.statusline").setup,
}
