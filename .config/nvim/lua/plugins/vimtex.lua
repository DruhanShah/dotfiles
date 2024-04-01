return {
    "lervag/vimtex",
    init = function()
        vim.g.vimtex_view_method = "zathura"
        vim.g.vimtex_syntax_conceal = {
            accents = true,
            ligatures = true,
            cites = true,
            fancy = true,
            spacing = true,
            greek = true,
            math_bounds = true,
            math_delimiters = true,
            math_fracs = true,
            math_super_sub = true,
            math_symbols = true,
            styles = true,
        }
    end,
}
