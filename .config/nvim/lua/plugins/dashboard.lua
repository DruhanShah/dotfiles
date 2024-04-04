return {
    "goolord/alpha-nvim",
    config = function()
        local alpha = require("alpha")
        local dashboard = require("alpha.themes.dashboard")

        dashboard.section.header.val = {
            [[██████████   █████████   █████████  ████████ ]],
            [[ ████   ████   ████   ████   ████   ████   ██████████ ]],
            [[ ████   ████   ████   ████   ████   ████   ████████ ]],
            [[ ████   ████   ████   ████   ████   ████   ████  ████ ]],
            [[ ████  ███   ████   ████   ████   ████   ███  ████ ]],
            [[ ████ ███    ███  ████   ████  ███    ██  ████ ]],
            [[ ███████      ██████   ██████      █  ████ ]],
            [[ ███████        ██████     ██████          ████ ]],
            [[██████          ████       ████            ████ ]],
            [[ ████                                          ███ ]],
            [[  ██                N E O V I M                 ██]],
        }
        dashboard.section.header.opts.hl = "Title"

        dashboard.section.buttons.val = {
            dashboard.button("SPC f f", "  Find File", ":Telescope find_files<CR>"),
            dashboard.button("SPC b f", "  Find Buffer", ":Telescope buffers<CR>"),
            dashboard.button("SPC f b", "  File Browser", ":Telescope file_browser<CR>"),
            dashboard.button("SPC f o", "  File History", ":Telescope oldfiles<CR>"),
            dashboard.button("SPC l a", "󰅒  Lazy dialog", ":Lazy<CR>"),
        }

        local fortune = require("alpha.fortune")
        dashboard.section.footer.val = fortune()
        dashboard.section.footer.opts.hl = "Question"

        alpha.setup(dashboard.opts)

        vim.api.nvim_create_autocmd("User", {
            callback = function()
                local stats = require("lazy").stats()
                local ms = math.floor(stats.startuptime * 100) / 100
                dashboard.section.footer.val = "󱐌 Lazy-loaded "
                .. stats.loaded
                .. " out of "
                .. stats.count
                .. " plugins in "
                .. ms
                .. "ms"
                pcall(vim.cmd.AlphaRedraw)
            end,
        })
    end
};
