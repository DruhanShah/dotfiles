local M = {}

function M.mode_component()
    local mode = vim.api.nvim_get_mode().mode:sub(1, 1)
    local mode_dict = {
        n = "NO",
        v = "VI",
        V = "VL",
        ["\22"] = "VB",
        s = "SE",
        S = "SL",
        ["\19"] = "SB",
        i = "IN",
        R = "RE",
        c = "EX",
        r = "PR",
        ["!"] = "SH",
        t = "TE",
    }

    local hl = "HeaderMode" .. mode_dict[mode]
    return "%#".. hl .."#  ".. mode_dict[mode] .."  "
end

function M.diagnostics_component()
    if vim.startswith(vim.api.nvim_get_mode().mode, "i") then
        return ""
    end

    local names = {
        [1] = "ERROR",
        [2] = "WARN",
        [3] = "HINT",
        [4] = "INFO",
    }
    local icons = {
        ERROR = "",
        WARN = "󱈸",
        HINT = "",
        INFO = "",
    }
    local counts = vim.diagnostic.count(0)
    local strings = vim.iter({1, 2, 3, 4}):map(function (level)
        local count = counts[level]
        if count == 0 or count == nil then
            return nil
        end
        local name = names[level]
        local hl = "HeaderDiagnostic" .. name
        return string.format("%%#%s#%s %d", hl, icons[name], count)
    end)

    local final = table.concat(strings:totable(), " ")
    return final .. "%#HeaderSimple#  "
end

function M.filetype_component()
    local devicons = require("nvim-web-devicons")

    local special_icons = {}

    local ft = vim.bo.filetype
    local name = vim.fn.expand("%:t")
    local ext = vim.fn.expand("%:e")

    if ft == "" then
        ft = "[No Name]"
    end
    local icon, icon_hl
    if special_icons[ft] then
        icon, icon_hl = special_icons[ft]:unpack()
    else
        icon, icon_hl = devicons.get_icon_color(name, ext)
        if not icon then
            icon, icon_hl = devicons.get_icon_color_by_filetype(ft, { default = true })
        end
    end
    vim.api.nvim_set_hl(0, "HeaderIcon", { bg = "#e6e2cc", fg = icon_hl })

    local modified = vim.bo.modified and " " or ""

    return table.concat {
        string.format("%%#HeaderSolid# %s%s", name, modified),
        string.format("%%#HeaderIcon#  %s  ", icon),
    }
end

function M.position_component()
    return "%#HeaderSimple# %l:%c "
end

function M.headerline()
    local header = table.concat {
        vim.w.curr and M.mode_component() or "",
        M.filetype_component(),
        "%#HeaderLine#%=",
        M.diagnostics_component(),
        M.position_component(),
    }
    return header
end

vim.api.nvim_create_autocmd({ "ModeChanged", "BufEnter", "CursorMoved", "CursorMovedI" }, {
    pattern = "*",
    command = "redrawstatus",
})
vim.api.nvim_create_autocmd({ "WinEnter", "BufEnter" }, {
    callback = function()
        vim.w.curr = true
    end,
})
vim.api.nvim_create_autocmd({ "WinLeave", "BufLeave" }, {
    callback = function()
        vim.w.curr = false
    end,
})

vim.o.statusline = "%="
vim.o.winbar = "%{%v:lua.require('config.ui.statusline').headerline()%}"

return M
