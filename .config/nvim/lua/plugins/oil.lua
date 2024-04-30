return {
    "stevearc/oil.nvim",
    dependencies = {
        "nvim-tree/nvim-web-devicons",
    },
    opts = {
        default_file_explorer = true,
        columns = {
            "icon",
            "permissions",
        },
        delete_to_trash = true,
    },
    init = function ()
        -- vim.keymap.set("n", "<leader>o", require("config.file-explorer").popup, {
        --     desc = "Open file explorer",
        -- })
    end
}
