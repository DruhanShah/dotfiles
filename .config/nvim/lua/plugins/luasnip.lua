return {
    "L3MON4D3/LuaSnip",
    version = "*",
    event = "VeryLazy",
    build = "make install_jsregexp",

    init = function ()
        local ls = require("luasnip")
        vim.keymap.set("i", "<C-e>", function() ls.expand() end)
        vim.keymap.set("i", "<C-n>", function() ls.jump(1) end)
        vim.keymap.set("i", "<C-p>", function() ls.jump(-1) end)
        vim.keymap.set("i", "<C-s>", function() ls.change_choice(1) end)
        vim.keymap.set("n", "<leader>sr", "<Cmd>source ~/.config/nvim/lua/plugins/luasnip.lua<CR>")
    end,

    config = function()
        require("luasnip").config.set_config {
            history = true,
            updateevents = "TextChanged,TextChangedI",
            enable_autosnippets = true,
        }
        require("luasnip.loaders.from_lua").load {paths =  "~/.config/nvim/snippets"}

    end,
}
