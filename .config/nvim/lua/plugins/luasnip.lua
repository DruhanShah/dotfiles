return {
    "L3MON4D3/LuaSnip",
    version = "*",
    event = "VeryLazy",
    build = "make install_jsregexp",
    config = function()
        local ls = require("luasnip")
        vim.keymap.set("i", "<S-Tab>", function() ls.expand() end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Expand snippet",
        })
        vim.keymap.set("i", "<C-j>", function() ls.jump(1) end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Jump to next input field",
        })
        vim.keymap.set("i", "<C-k>", function() ls.jump(-1) end, {
            expr = true,
            noremap = true,
            silent = true,
            desc = "Jump to previous input field",
        })

        local snippath = "~/.config/nvim/snippets"
        require("luasnip.loaders.from_lua").load({paths = snippath})
    end,
}
