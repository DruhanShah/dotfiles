return {
    "catppuccin/nvim",
    name = "catppuccin",
    priority = 1000,
    config = function()
        require("catppuccin").setup {
            flavour = "mocha",
            integrations = {
                mason = true,
                which_key = true,
                telescope = {
                    enabled = true,
                    style = "nvchad",
                },
            },
            custom_highlights = function (colors)
                return {
                    -- Line number highlights
                    LineNr = { fg = colors.base },
                    LineNrAbove = { fg = colors.surface0 },
                    LineNrBelow = { fg = colors.surface0 },
                    -- Floating window highlight
                    NormalFloat = { bg = colors.mantle },
                    -- Completion highlights
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
                }
            end,
        }
        vim.cmd.colorscheme "catppuccin"
    end,
}
