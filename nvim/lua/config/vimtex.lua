local M = {}

local function custom_cmd(cmd, char)
    return {
        name = cmd,
        mathmode = true,
        conceal = true,
        concealchar = char,
    }
end

local function custom_delim(cmd, args, char_o, char_m, char_c)
    return {
        name = cmd,
        nargs = args,
        mathmode = false,
        cchar_open = char_o,
        cchar_mid = char_m,
        cchar_close = char_c,
    }
end

function M.init()
    vim.g.vimtex_view_method = "zathura"
    vim.g.vimtex_fold_enabled = true
    vim.g.vimtex_syntax_custom_cmds = {
		custom_cmd("Real", "ℝ"),
		custom_cmd("Nat", "ℕ"),
		custom_cmd("Int", "ℤ"),
		custom_cmd("Comp", "ℂ"),
		custom_cmd("BigO", "O"),
		custom_cmd("diff", "d"),
    }
    vim.g.vimtex_syntax_custom_cmds_with_concealed_delims = {
        custom_delim("pc", 1, "(", "", ")"),
        custom_delim("tc", 1, "[", "", "]"),
    }
end

return M
