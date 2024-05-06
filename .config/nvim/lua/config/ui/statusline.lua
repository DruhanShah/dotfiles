local conditions = require("heirline.conditions")
local utils = require("heirline.utils")

local padding = function(n)
    return {
        provider = string.rep(" ", n),
        hl = { bg = "crust" },
    }
end
local spacer = {
    provider = "%=",
    hl = { bg = "crust" },
}

local Bracket = {
    provider = "▋",
    hl = { fg = "blue", bg = "crust" }
}

local Mode = {
    init = function(self)
        self.mode = vim.fn.mode()
    end,
    static = {
        mode_colors = {
            n = "green",
            i = "red",
            v = "teal",
            V = "teal",
            ["\22"] = "teal",
            c = "peach",
            s = "mauve",
            S = "mauve",
            ["\19"] = "mauve",
            R = "peach",
            r = "peach",
            ["!"] = "green",
            t = "green",
        },
    },
    {
        provider = "",
        hl = function(self)
            local mode = self.mode:sub(1, 1)
            return { fg = self.mode_colors[mode], bg = "crust" }
        end,
        condition = conditions.is_active,
    },
}

local FileSize = {
    provider = function()
        local suffix = { 'b', 'k', 'M', 'G', 'T', 'P', 'E' }
        local fsize = vim.fn.getfsize(vim.api.nvim_buf_get_name(0))
        fsize = (fsize < 0 and 0) or fsize
        if fsize < 1024 then
            return fsize .. suffix[1]
        end
        local i = math.floor((math.log(fsize) / math.log(1024)))
        return string.format("%.2g%s", fsize / math.pow(1024, i), suffix[i + 1])
    end,
    hl = { bg = "crust" },
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
        return self.icon and (self.icon .. " ")
    end,
    hl = function(self)
        return { fg = self.icon_color, bg = "crust" }
    end
}

local FileName = {
    provider = function(self)
        local filename = vim.fn.fnamemodify(self.filename, ":t")
        if filename == "" then return "[No Name]" end
        if not conditions.width_percent_below(#filename, 0.25) then
            filename = vim.fn.pathshorten(filename)
        end
        return filename
    end,
    hl = { fg = "teal", bg = "crust", bold = true },
}

local FileFlags = {
    {
        condition = function()
            return vim.bo.readonly
        end,
        provider = "",
        hl = { fg = "orange", bg = "crust", bold = true },
    },
    {
        condition = function()
            return vim.bo.modified
        end,
        provider = "",
        hl = { fg = "red", bg = "crust", bold = true },
    },
    {
        condition = function()
            return vim.bo.modified or vim.bo.readonly
        end,
        {
            padding(1),
        }
    },
}

FileNameBlock = utils.insert(FileNameBlock,
    FileIcon,
    FileName,
    padding(1),
    FileFlags,
    { provider = "%<", hl = { bg = "crust" } }
)

local Diagnostics = {
    condition = conditions.has_diagnostics,
    static = {
        error_icon = "",
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
        hl = { fg = "red", bg = "crust" }
    },
    {
        provider = function(self)
            return self.warnings > 0 and (self.warn_icon .. self.warnings .. " ")
        end,
        hl = { fg = "peach", bg = "crust" }
    },
    {
        provider = function(self)
            return self.info > 0 and (self.info_icon .. self.info .. " ")
        end,
        hl = { fg = "teal", bg = "crust" }
    },
    {
        provider = function(self)
            return self.hints > 0 and (self.hint_icon .. self.hints)
        end,
        hl = { fg = "yellow", bg = "crust" }
    },
    {
        padding(3),
    }
}

local LSPActive = {
    condition = conditions.lsp_attached,
    update    = { 'LspAttach', 'LspDetach' },
    provider  = function()
        local names = {}
        for _, server in pairs(vim.lsp.get_active_clients({ bufnr = 0 })) do
            table.insert(names, server.name)
        end
        return " [" .. table.concat(names, " ") .. "]"
    end,
    hl        = { fg = "green", bg = "crust", bold = true },
}

local Position = {
    provider = "%l:%c",
    hl = { bg = "crust" },
}

local Percentage = {
    provider = "%P",
    hl = { fg = "pink", bg = "crust", bold = true },
}

local Git = {
    condition = conditions.is_git_repo,

    init = function(self)
        self.status_dict = vim.b.gitsigns_status_dict
        self.has_changes = self.status_dict.added ~= 0 or self.status_dict.removed ~= 0 or self.status_dict.changed ~= 0
    end,
    hl = { fg = "mauve", bg = "crust" },

    { -- git branch name
        provider = function(self)
            return " " .. self.status_dict.head
        end,
        hl = { bold = true }
    },
    {
        provider = "  ",
        condition = function(self)
            return self.has_changes
        end
    },
    {
        provider = function(self)
            local count = self.status_dict.added or 0
            return count > 0 and ("  " .. count)
        end,
        hl = { fg = "green" },
    },
    {
        provider = function(self)
            local count = self.status_dict.removed or 0
            return count > 0 and ("  " .. count)
        end,
        hl = { fg = "red" },
    },
    {
        provider = function(self)
            local count = self.status_dict.changed or 0
            return count > 0 and ("  " .. count)
        end,
        hl = { fg = "peach" },
    },
}

local FileEncoding = {
    provider = function()
        local enc = (vim.bo.fenc ~= '' and vim.bo.fenc) or vim.o.enc -- :h 'enc'
        return enc:upper()
    end,
    hl = { bg = "crust", fg = "text" },
}

local FileType = {
    provider = function()
        local fmt = vim.bo.filetype
        return fmt:upper()
    end,
    hl = { bg = "crust", fg = "blue", bold = true },
}

local EditingBuffer = {
    Bracket,
    padding(1),
    Mode,
    {
        condition = conditions.is_active,
        padding(2),
        FileSize
    },
    padding(2),
    FileNameBlock,
    {
        condition = conditions.is_active,
        padding(1),
        Position,
    },
    spacer,
    {
        condition = conditions.is_active,
        LSPActive,
        spacer,
        Git,
        padding(2),
        FileEncoding,
        padding(2),
        FileType
    },
    padding(2),
    Bracket
}

local SpecialBuffer = {
    Bracket,
    padding(1),
    { condition = conditions.is_active, Mode },
    padding(2),
    {
        provider = function()
            local ft = vim.bo.filetype
            if string.find(ft, "alpha") then
                return "DASHBOARD"
            elseif string.find(ft, "Neogit") then
                return "NEOGIT"
            elseif string.find(ft, "oil") then
                return "OIL"
            elseif string.find(ft, "vimtex") then
                return "CONTENTS"
            end
        end,
        hl = { fg = "blue", bg = "crust", bold = true },
    },
    padding(1),
    { condition = conditions.is_active, FileFlags },
    spacer,
    Bracket,
}

return {
    fallthrough = false,
    {
        condition = function()
            return conditions.buffer_matches {
                filetype = {
                    "alpha",
                    "Neogit*",
                    "oil",
                    "vimtex-toc",
                }
            }
        end,
        SpecialBuffer,
    },
    EditingBuffer,
}
