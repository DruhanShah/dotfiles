local M = {}

M.fold_text = function ()
    local fs, fe = vim.v.foldstart, vim.v.foldend
    local indent = vim.fn.getline(fs):match("^ *")
    local start_line = vim.fn.getline(fs):gsub("^ *", (""):rep(vim.opt.ts:get()))
    local end_line = vim.trim(vim.fn.getline(fe))
    local spaces = (" "):rep( vim.o.columns - start_line:len() - end_line:len() - 7)

    return {
        { indent, "Folded" },
        {"  ", "FoldMarker"},
        {" " .. start_line .. "  " .. end_line .. " ", "FoldedText"},
        { spaces, "Folded" },
    }
end

-- Not used anywhere
M.center = function(dict)
    local new_dict = {}
    for _, v in pairs(dict) do
        local padding = vim.fn.max(vim.fn.map(dict, 'strwidth(v:val)'))
        local spacing = (" "):rep(math.floor((vim.o.columns - padding) / 2)) .. v
        table.insert(new_dict, spacing)
    end
    return new_dict
end

return M
