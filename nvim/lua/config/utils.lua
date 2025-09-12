local M = {}

function M.fold_text()
    local fs, fe = vim.v.foldstart, vim.v.foldend
    local indent = vim.fn.getline(fs):match("^ *")
    local start_line = vim.fn.getline(fs):gsub("^ *", (""):rep(vim.opt.ts:get()))
    local end_line = vim.trim(vim.fn.getline(fe))
    local spaces = (" "):rep( vim.o.columns - start_line:len() - end_line:len() - 7)

    return {
        { indent, "Folded" },
        {"  ", "FoldMarker"},
        {" " .. start_line .. "  " .. end_line .. " ", "FoldedText"},
        { spaces, "Folded" },
    }
end

function M.center(dict)
    local new_dict = {}
    for _, v in pairs(dict) do
        local padding = vim.fn.strdisplaywidth(v)
        local spacing = (" "):rep(math.floor((vim.o.columns - padding) / 2)) .. v
        table.insert(new_dict, spacing)
    end
    return new_dict
end

function M.check_empty(bufnr)
    bufnr = bufnr or 0

    return vim.api.nvim_buf_get_name(bufnr) == ""
    and vim.fn.argc() == 0
    and vim.api.nvim_buf_line_count(bufnr) == 1
    and vim.g.read_from_stdin == nil
    and vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)[1] == ''
end

function M.toggle_number()
    vim.wo.number = not vim.wo.number
    vim.wo.relativenumber = false
end

function M.toggle_relative()
    vim.wo.relativenumber = not vim.wo.relativenumber
    vim.wo.number = false
end


return M
