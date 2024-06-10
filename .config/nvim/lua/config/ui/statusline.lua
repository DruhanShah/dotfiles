local M = {}

M.filetype_component = function ()
    local devicons = require("nvim-web-devicons")

    local special_icons = {
        -- Special filetype icons go here
    }

    local ft = vim.bo.filetype
    local buf_name = vim.api.nvim_buf_get_name(0)

    if ft == "" then
        ft = "[No Name]"
    end
    local icon, icon_hl
    if special_icons[ft] then
        icon, icon_hl = special_icons[ft]:unpack()
    else
        local name, ext = vim.fn.fnamemodify(buf_name, ':t'), vim.fn.fnamemodify(buf_name, ':e')

        icon, icon_hl = devicons.get_icon(name, ext)
        if not icon then
            icon, icon_hl = devicons.get_icon_by_filetype(ft, { default = true })
        end
    end

    local name = vim.fn.expand("%:t")
    local modified = vim.bo.modified and " " or ""


    return table.concat {
        string.format("%%#%s# %s", icon_hl, icon),
        string.format("%%#StatusSolid# %s%s", name, modified)
    }
end

M.position_component = function ()
    local line = vim.fn.line('.')
    local col = vim.fn.virtcol('.')
    local line_count = vim.api.nvim_buf_line_count(0)

    return table.concat {
        "%#StatusSimple#",
        string.format("%d:%d", line, col),
        string.format(" out of %d", line_count),
    }
end

function M.render()
    local concat_components = function (components)
        return vim.iter(components):skip(1):fold(components[1], function(acc, comp)
            return #comp > 0 and string.format('%s    %s', acc, comp) or acc
        end)
    end

    return table.concat {
        concat_components {
            M.filetype_component(),
        },
        '%#StatusLine#%=',
        concat_components {
            -- M.diagnostics_component(),
            M.position_component(),
        },
        ' ',
    }
end

M.setup = function ()
    vim.cmd("let g:tpipeline_size = &co")
    vim.g.tpipeline_refreshcmd = "kitty @ set-tab-title Master test"

    vim.o.fillchars = "stlnc:🭻,stl:🭻,wbr:🭶"
    vim.o.winbar = " %= "
    vim.o.statusline = " %#WinBar#%= %#StatusLine#"
    vim.g.tpipeline_statusline = "%!v:lua.require(\"config.ui.statusline\").render()"
    vim.g.tpipeline_tabline = false
    vim.g.tpipeline_autoembed = false
    vim.g.tpipeline_clearstl = true

    vim.api.nvim_create_autocmd("User", {
        pattern = "TpipelineSize",
        command = "let g:tpipeline_size = &co",
    })
    vim.api.nvim_create_autocmd("UIEnter", {
        pattern = "*",
        callback = function()
            vim.o.laststatus = 2
        end,
    })
end

return M
