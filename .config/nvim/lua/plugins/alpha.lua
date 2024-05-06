return {
    "goolord/alpha-nvim",
    config = function()
        local alpha = require("alpha")
        local dashboard = require("alpha.themes.dashboard")

        dashboard.section.header.val = {
            [[████████████ ███████████ █████████████████████]],
            [[ █████   █████ █████   █████ █████   █████ ████████████ ]],
            [[ █████   █████ █████   █████ █████   █████ ████████████ ]],
            [[ █████  ████ ████  █████ █████  ████ █████████ ]],
            [[ █████ ████   ████████ ████████   ███  █████ ]],
            [[ █████████     ████████   ████████     ██  █████ ]],
            [[ ████████       ██████     ██████       █  █████ ]],
            [[  ██████                                       ████ ]],
            [[   ████                                         ███  ]],
            [[    ██               N E O  V I M               █   ]],
        }
        vim.fn.matchadd("Doom", "[█]")
        vim.fn.matchadd("DashNeo", " N E O ")
        vim.fn.matchadd("DashVim", " V I M ")

        dashboard.section.buttons.val = {}

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
