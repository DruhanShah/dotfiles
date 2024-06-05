return {
    "vimpostor/vim-tpipeline",
    event = "UIEnter",
    dependencies = { "rebelot/heirline.nvim" },
    init = function()
        vim.cmd("let g:tpipeline_size = &co")
        vim.g.tpipeline_refreshcmd = "kitty @ set-tab-title Master test"
        vim.g.tpipeline_tabline = true
        vim.api.nvim_create_autocmd("User", {
            pattern = "TpipelineSize",
            command = "let g:tpipeline_size = &co",
        })
    end,
}
