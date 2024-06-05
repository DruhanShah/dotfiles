local utils = require("heirline.utils")

local Tabpage = {
    provider = function(self)
        return "%" .. self.tabnr .. "T " .. self.tabpage .. " %T"
    end,
    hl = function(self)
        if not self.is_active then
            return "TabLine"
        else
            return "TabLineSel"
        end
    end,
}

return {
    condition = function()
        return #vim.api.nvim_list_tabpages() >= 1
    end,
    utils.make_tablist(Tabpage),
}
