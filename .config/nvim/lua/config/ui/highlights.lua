local M = {}

M.highlight = function(colors)
    return {
        -- Dashboard-specific highlights
        Doom = { fg = colors.blue },
        DashNeo = { bg = colors.green, fg = colors.crust, bold = true },
        DashVim = { bg = colors.blue, fg = colors.crust, bold = true },
        -- Quality of Life stuff
        LineNr = { fg = colors.base },
        LineNrAbove = { fg = colors.surface0 },
        LineNrBelow = { fg = colors.surface0 },
        NormalFloat = { bg = colors.mantle },
        FoldMarker = { bg = colors.mauve, fg = colors.crust },
        FoldedText = { bg = colors.surface0, fg = colors.text },
        Folded = { bg = colors.base, fg = colors.text },
        Conceal = { fg = colors.lavender, bg = "NONE" },
        OilSourcePath = { fg = colors.crust, bg = colors.red, bold = true },
        -- Completion Icons
        CmpItemAbbrDeprecated = { fg = colors.surface1, bg = "NONE", strikethrough = true, },
        CmpItemAbbrMatch = { fg = colors.blue, bg = "NONE", bold = true, },
        CmpItemAbbrMatchFuzzy = { fg = colors.blue, bg = "NONE", bold = true, },
        CmpItemMenu = { fg = colors.mauve, bg = "NONE", italic = true, },
        CmpItemKindCopilot = { fg = colors.base, bg = colors.surface3, },
        CmpItemKindField = { fg = colors.crust, bg = colors.red, },
        CmpItemKindProperty = { fg = colors.crust, bg = colors.red, },
        CmpItemKindEvent = { fg = colors.crust, bg = colors.red, },
        CmpItemKindText = { fg = colors.crust, bg = colors.green, },
        CmpItemKindEnum = { fg = colors.crust, bg = colors.green, },
        CmpItemKindKeyword = { fg = colors.crust, bg = colors.green, },
        CmpItemKindConstant = { fg = colors.crust, bg = colors.green, },
        CmpItemKindConstructor = { fg = colors.crust, bg = colors.green, },
        CmpItemKindReference = { fg = colors.crust, bg = colors.green, },
        CmpItemKindFunction = { fg = colors.crust, bg = colors.mauve, },
        CmpItemKindStruct = { fg = colors.crust, bg = colors.mauve, },
        CmpItemKindClass = { fg = colors.crust, bg = colors.mauve, },
        CmpItemKindModule = { fg = colors.crust, bg = colors.mauve, },
        CmpItemKindOperator = { fg = colors.crust, bg = colors.mauve, },
        CmpItemKindVariable = { fg = colors.text, bg = colors.surface0, },
        CmpItemKindFile = { fg = colors.text, bg = colors.surface0, },
        CmpItemKindUnit = { fg = colors.crust, bg = colors.peach, },
        CmpItemKindSnippet = { fg = colors.crust, bg = colors.peach, },
        CmpItemKindFolder = { fg = colors.crust, bg = colors.peach, },
        CmpItemKindMethod = { fg = colors.crust, bg = colors.blue, },
        CmpItemKindValue = { fg = colors.crust, bg = colors.blue, },
        CmpItemKindEnumMember = { fg = colors.crust, bg = colors.blue, },
        CmpItemKindInterface = { fg = colors.crust, bg = colors.teal, },
        CmpItemKindColor = { fg = colors.crust, bg = colors.teal, },
        CmpItemKindTypeParameter = { fg = colors.crust, bg = colors.teal, },
        -- Vimtex highlights
        texCmd = { fg = colors.blue },
        texArg = { fg = colors.peach },
        texCSectionArg = { fg = colors.sky, bold = true },
        texCmdCSection = { fg = colors.sky, bold = true },
        texCSubsectionArg = { fg = colors.green, bold = true },
        texCmdCSubsection = { fg = colors.green, bold = true },
        texCSubsubsectionArg = { fg = colors.teal, bold = true },
        texCmdCSubssubection = { fg = colors.teal, bold = true },
        -- Neorg highlights
        ["@neorg.tags.ranged_verbatim.document_meta.title.norg_meta"] = { bg = colors.mauve, fg = colors.crust, bold = true },
    }
end

return M
