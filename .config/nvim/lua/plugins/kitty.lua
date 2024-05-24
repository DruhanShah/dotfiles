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
            desc = "Move left",
            mode = { "n" },
        },
        {
            "<C-j>",
            function() require("kitty-navigator").navigateDown() end,
            desc = "Move down",
            mode = { "n" },
        },
        {
            "<C-k>",
            function() require("kitty-navigator").navigateUp() end,
            desc = "Move up",
            mode = { "n" },
        },
        {
            "<C-l>",
            function() require("kitty-navigator").navigateRight() end,
            desc = "Move right",
            mode = { "n" },
        },
    },
}
