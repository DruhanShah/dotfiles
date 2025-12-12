local function map(lhs, rhs)
    vim.keymap.set("n", lhs, function ()
        require("config.telescope")[rhs]()
    end)
end

return {
    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "jmbuhr/telescope-zotero.nvim",
        "kkharji/sqlite.lua",
    },
    init = function ()
        map("<leader>ff", "find_files")
        map("<leader>fo", "oldfiles")
        map("<leader>fb", "buffers")
        map("<leader>fh", "help")
        map("<leader>fH", "highlights")
        map("<leader>fz", "zotero")
        map("<leader>f/", "search")
        map("z=", "spell")
        map("gr", "reference")
    end,
    config = function ()
        require("config.telescope").setup()
    end,
}
