return {
    "rose-pine/nvim",
    name = "rose-pine",
    priority = 1000,
    config = function ()
	require("config.rose-pine").setup()
    end,
}
