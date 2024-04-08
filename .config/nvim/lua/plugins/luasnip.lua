return {
    "L3MON4D3/LuaSnip",
    enabled = false,
    version = "*",
    event = "VeryLazy",
    build = "make install_jsregexp",
    config = function()
        local ls = require("luasnip")
        local snippath = "~/.config/nvim/snippets"

        ls.config.set_config {
            history = true,
            updateevents = "TextChanged,TextChangedI",
            enable_autosnippets = true,
        }
        require("luasnip.loaders.from_lua").load {paths = snippath}

        vim.keymap.set("i", "<Tab>", function() ls.expand() end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Expand snippet",
        })
        vim.keymap.set("i", "<C-n>", function() ls.jump(1) end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Jump to next input field",
        })
        vim.keymap.set("i", "<C-p>", function() ls.jump(-1) end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Jump to previous input field",
        })
        vim.keymap.set("i", "<C-s>", function() ls.change_choice(1) end, {
            noremap = true,
            silent = true,
            desc = "Change snippet choice",
        })
        vim.keymap.set("n", "<leader>sr", "<Cmd>source ~/.config/nvim/lua/plugins/luasnip.lua<CR>", {
            noremap = true,
            silent = true,
            desc = "Reload Luasnip",
        })
    end,
}
