vim.api.nvim_create_augroup("CustomHL", { clear = true })
vim.api.nvim_create_autocmd("FileType", {
    group = "CustomHL",
    pattern = "query",
    callback = function ()
        vim.wo.winhighlight = "Normal:NormalFloat"
        print("Done")
    end
})
