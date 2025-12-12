return {
    "sainnhe/everforest",
    lazy = false,
    priority = 1000,
    config = function ()
	require("config.everforest").setup()
    end,
}
