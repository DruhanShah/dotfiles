-- This is a major WIP

local Job = require("plenary.job")

local function compile()
    Job:new({
        command = "latexmk",
        args = {
            "-lualatex",
            "-pvc",
            "-f"
        },
    })
end

vim.keymap.set("n", "<localleader>ll", compile, {
    noremap = true,
    desc = "[LaTeX] Start compiling"
})
