local function map(lhs, rhs, desc)
    vim.keymap.set("n", lhs, function ()
        require("config.telescope")[rhs]()
    end, { desc = desc, })
end

return {
    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "jmbuhr/telescope-zotero.nvim",
        "kkharji/sqlite.lua",
        {
            "nvim-telescope/telescope-fzf-native.nvim",
            build = "make",
        },
    },
    init = function ()
        map("<leader>ff", "find_files", "[Telescope] Find Files")
        map("<leader>fo", "oldfiles", "[Telescope] File History")
        map("<leader>fb", "buffers", "[Telescope] Buffer List")
        map("<leader>fh", "help", "[Telescope] Search Neovim Help")
        map("<leader>fH", "highlights", "[Telescope] Find highlights")
        map("<leader>fn", "config", "[Telescope] Search Neovim Config")
        map("<leader>fz", "zotero", "[Telescope] Search Zotero")
        map("<leader>fg", "gtd", "[Telescope|Neorg] GTD Lists")
        map("gr", "reference", "[Telescope|LSP] List object references")
    end,
    config = function ()
        require("config.telescope").setup()
    end,
}
