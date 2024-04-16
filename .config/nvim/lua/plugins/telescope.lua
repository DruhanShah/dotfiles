local function map(lhs, rhs, desc)
    vim.keymap.set("n", lhs, function ()
        require("druhan.telescope")[rhs]()
    end, {
        noremap = true,
        desc = "[Telescope] " .. desc,
    })
end

return {
    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-telescope/telescope-file-browser.nvim",
        "nvim-lua/plenary.nvim",
        "jmbuhr/telescope-zotero.nvim",
        "kkharji/sqlite.lua",
        {
            "nvim-telescope/telescope-fzf-native.nvim",
            build = "make",
        },
    },
    init = function ()
        map("<leader>ff", "find_files", "Find Files")
        map("<leader>fo", "oldfiles", "File History")
        map("<leader>fb", "file_browser", "File Browser")
        map("<leader>fB", "buffers", "Buffer List")
        map("<leader>fh", "help", "Search Neovim Help")
        map("<leader>fn", "config", "Search Neovim Config")
        map("<leader>fz", "zotero", "Search Zotero")
        map("gr", "reference", "List object references")
    end,
    config = function ()
        require("druhan.telescope").setup()
    end,
}
