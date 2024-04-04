return {
    "nvim-lualine/lualine.nvim",
    dependencies = {
        "nvim-tree/nvim-web-devicons",
        { "catppuccin/nvim", name = "catppuccin" }
    },
    config = function()
        local lualine = require('lualine')

        local colors = {
            bg       = '#111112',
            fg       = '#cdd6f4',
            yellow   = '#f9e2af',
            cyan     = '#94e2d5',
            darkblue = '#585b70',
            green    = '#a6e3a1',
            orange   = '#fab387',
            violet   = '#cba6f7',
            magenta  = '#f5c2e7',
            blue     = '#89b4fa',
            red      = '#f38ba8',
        }

        local conditions = {
            buffer_not_empty = function()
                return vim.fn.empty(vim.fn.expand('%:t')) ~= 1
            end,
            hide_in_width = function()
                return vim.fn.winwidth(0) > 80
            end,
            check_git_workspace = function()
                local filepath = vim.fn.expand('%:p:h')
                local gitdir = vim.fn.finddir('.git', filepath .. ';')
                return gitdir and #gitdir > 0 and #gitdir < #filepath
            end,
        }

        local config = {
            options = {
                component_separators = '',
                section_separators = '',
                theme = {
                    normal = { c = { fg = colors.fg, bg = colors.bg } },
                    inactive = { c = { fg = colors.fg, bg = colors.bg } },
                },
            },
            sections = {
                lualine_a = {},
                lualine_b = {},
                lualine_y = {},
                lualine_z = {},
                lualine_c = {},
                lualine_x = {},
            },
            inactive_sections = {
                lualine_a = {},
                lualine_b = {},
                lualine_y = {},
                lualine_z = {},
                lualine_c = {},
                lualine_x = {},
            },
        }

        local function ins_left(component)
            table.insert(config.sections.lualine_c, component)
        end

        local function ins_left_in(component)
            table.insert(config.inactive_sections.lualine_c, component)
        end

        local function ins_right(component)
            table.insert(config.sections.lualine_x, component)
        end

        local function ins_right_in(component)
            table.insert(config.inactive_sections.lualine_x, component)
        end

        ins_left {
            function()
                return '▌'
            end,
            color = { fg = colors.blue },
            padding = { left = 0, right = 1 },
        }

        ins_left_in {
            function()
                return '▌'
            end,
            color = { fg = colors.blue },
            padding = { left = 0, right = 1 },
        }

        ins_left {
            function()
                return ''
            end,
            color = function()
                local mode_color = {
                    n = colors.green,
                    i = colors.red,
                    v = colors.blue,
                    [''] = colors.blue,
                    V = colors.blue,
                    c = colors.magenta,
                    no = colors.green,
                    s = colors.orange,
                    S = colors.orange,
                    [''] = colors.orange,
                    ic = colors.yellow,
                    R = colors.violet,
                    Rv = colors.violet,
                    cv = colors.green,
                    ce = colors.green,
                    r = colors.cyan,
                    rm = colors.cyan,
                    ['r?'] = colors.cyan,
                    ['!'] = colors.green,
                    t = colors.green,
                }
                return { fg = mode_color[vim.fn.mode()] }
            end,
            padding = { right = 1 },
        }

        ins_left {
            'filename',
            cond = conditions.buffer_not_empty,
            color = { fg = colors.fg, gui = 'bold' },
        }

        ins_left {
            "filetype",
            colored = true,
            icon_only = true,
        }

        ins_left_in {
            'filename',
            cond = conditions.buffer_not_empty,
            color = { fg = colors.fg, gui = 'bold' },
        }

        ins_left {
            'diagnostics',
            sources = { 'nvim_diagnostic' },
            symbols = { error = ' ', warn = ' ', info = ' ' },
            diagnostics_color = {
                color_error = { fg = colors.red },
                color_warn = { fg = colors.yellow },
                color_info = { fg = colors.cyan },
            },
        }

        ins_left {
            function()
                return '%='
            end,
        }

        ins_left {
            function()
                local msg = 'No Active Lsp'
                local buf_ft = vim.api.nvim_buf_get_option(0, 'filetype')
                local clients = vim.lsp.get_active_clients()
                if next(clients) == nil then
                    return msg
                end
                for _, client in ipairs(clients) do
                    local filetypes = client.config.filetypes
                    if filetypes and vim.fn.index(filetypes, buf_ft) ~= -1 then
                        return client.name
                    end
                end
                return msg
            end,
            icon = '  LSP:',
            color = { fg = '#ffffff', gui = 'bold' },
        }

        ins_right { 'location' }

        ins_right { 'progress', color = { fg = colors.magenta, gui = 'bold' } }

        ins_right {
            'branch',
            icon = '',
            color = { fg = colors.violet, gui = 'bold' },
        }

        ins_right {
            'diff',
            symbols = { added = ' ', modified = ' ', removed = ' ' },
            diff_color = {
                added = { fg = colors.green },
                modified = { fg = colors.orange },
                removed = { fg = colors.red },
            },
            cond = conditions.hide_in_width,
        }

        ins_right {
            function()
                return '▐'
            end,
            color = { fg = colors.blue },
            padding = { left = 1 },
        }

        ins_right_in {
            function()
                return '▐'
            end,
            color = { fg = colors.blue },
            padding = { left = 1 },
        }

        lualine.setup(config)
    end,
}
