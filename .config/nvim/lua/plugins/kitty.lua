return {
    "MunsMan/kitty-navigator.nvim",
    build = {
        "cp navigate_kitty.py ~/.config/kitty",
        "cp pass_keys.py ~/.config/kitty",
    },
    keys = {
        {
            "<C-h>",
            function() require("kitty-navigator").navigateLeft() end,
            mode = { "n" },
        },
        {
            "<C-j>",
            function() require("kitty-navigator").navigateDown() end,
            mode = { "n" },
        },
        {
            "<C-k>",
            function() require("kitty-navigator").navigateUp() end,
            mode = { "n" },
        },
        {
            "<C-l>",
            function() require("kitty-navigator").navigateRight() end,
            mode = { "n" },
        },
    },
}
