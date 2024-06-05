local M = {}

local conditions = require("heirline.conditions")
local utils = require("heirline.utils")

local padding = function(n)
    return {
        provider = string.rep(" ", n),
        hl = { bg = "surface0" },
    }
end
local spacer = {
    provider = "%=",
    hl = { bg = "surface0" },
}

local Mode = {
    init = function(self)
        self.mode = vim.fn.mode()
    end,
    static = {
        mode_colors = {
            n = "green",
            i = "blue",
            v = "teal",
            V = "teal",
            ["\22"] = "teal",
            c = "peach",
            s = "mauve",
            S = "mauve",
            ["\19"] = "mauve",
            R = "red",
            r = "peach",
            ["!"] = "green",
            t = "green",
        },
        mode_icons = {
            n = " ",
            i = " ",
            v = " ",
            V = " ",
            ["\22"] = " ",
            c = " ",
            s = " ",
            S = " ",
            ["\19"] = " ",
            R = " ",
            r = "󰌑 ",
            ["!"] = " ",
            t = " ",
        },
    },
    {
        provider = function (self)
            local mode = self.mode:sub(1, 1)
            return "  " .. self.mode_icons[mode] .. " "
        end,
        hl = function(self)
            local mode = self.mode:sub(1, 1)
            return { bg = self.mode_colors[mode], fg = "crust" }
        end,
        condition = conditions.is_active,
    },
}

local FileNameBlock = {
    init = function(self)
        self.filename = vim.api.nvim_buf_get_name(0)
    end,
}

local FileIcon = {
    init = function(self)
        local filename = self.filename
        local extension = vim.fn.fnamemodify(filename, ":e")
        self.icon, self.icon_color = require("nvim-web-devicons").get_icon_color(filename, extension, { default = true })
    end,
    provider = function(self)
        if vim.bo.readonly then
            return " "
        else
            return self.icon and (self.icon .. " ")
        end
    end,
    hl = function(self)
        if vim.bo.readonly then
            return { fg = "peach", bg = "surface0" }
        else
            return { fg = self.icon_color, bg = "surface0" }
        end
    end
}

local FileName = {
    provider = function(self)
        local filename = vim.fn.fnamemodify(self.filename, ":t")
        if filename == "" then return "[No Name]" end
        if not conditions.width_percent_below(#filename, 0.25) then
            filename = vim.fn.pathshorten(filename)
        end
        return filename .. " "
    end,
    hl = { fg = "text", bg = "surface0", bold = true },
}

local Modified = {
    condition = function()
        return vim.bo.modified
    end,
    provider = "  ",
    hl = { fg = "text", bg = "surface0", bold = true },
}

FileNameBlock = utils.insert(FileNameBlock,
    FileIcon,
    FileName,
    Modified
)

local Recording = {
    condition = function ()
        return vim.fn.reg_recording() ~= ""
    end,
    provider = "  ",
    hl = { fg = "red", bg = "surface0" },
    update = { "RecordingEnter", "RecordingLeave" },
}

    local Diagnostics = {
        condition = conditions.has_diagnostics,
        static = {
            error_icon = " ",
            warn_icon = " ",
            info_icon = " ",
            hint_icon = " ",
        },
        init = function(self)
            self.errors = #vim.diagnostic.get(0, { severity = vim.diagnostic.severity.ERROR })
            self.warnings = #vim.diagnostic.get(0, { severity = vim.diagnostic.severity.WARN })
            self.hints = #vim.diagnostic.get(0, { severity = vim.diagnostic.severity.HINT })
            self.info = #vim.diagnostic.get(0, { severity = vim.diagnostic.severity.INFO })
        end,
        update = { "DiagnosticChanged", "BufEnter" },
        {
            provider = function(self)
                return self.errors > 0 and (self.error_icon .. self.errors .. " ")
            end,
            hl = { fg = "red", bg = "surface0" }
        },
        {
            provider = function(self)
                return self.warnings > 0 and (self.warn_icon .. self.warnings .. " ")
            end,
            hl = { fg = "peach", bg = "surface0" }
        },
        {
            provider = function(self)
                return self.info > 0 and (self.info_icon .. self.info .. " ")
            end,
            hl = { fg = "teal", bg = "surface0" }
        },
        {
            provider = function(self)
                return self.hints > 0 and (self.hint_icon .. self.hints)
            end,
            hl = { fg = "yellow", bg = "surface0" }
        },
        {
            padding(2),
        }
    }

    local Position = {
        provider = "  %l:%c  ",
        hl = { bg = "subtext1", fg = "crust" },
    }

    M.minimal = {
        Mode,
        Recording,
        padding(2),
        FileNameBlock,
        spacer,
        padding(2),
        Diagnostics,
        Position,
    }

    M.separator = {
        provider = ("─"):rep(vim.api.nvim_win_get_width(0)),
        hl = "WinSeparator",
    }

    return M
