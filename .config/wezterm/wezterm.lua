local wezterm = require("wezterm")
local config = {}

local function is_vim(pane)
  return pane:get_user_vars().IS_NVIM == 'true'
end

local direction_keys = {
  Left = 'h',
  Down = 'j',
  Up = 'k',
  Right = 'l',
  -- reverse lookup
  h = 'Left',
  j = 'Down',
  k = 'Up',
  l = 'Right',
}

local function split_nav(resize_or_move, key)
  return {
    key = key,
    mods = resize_or_move == 'resize' and 'META' or 'CTRL',
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        win:perform_action({
          SendKey = { key = key, mods = resize_or_move == 'resize' and 'META' or 'CTRL' },
        }, pane)
      else
        if resize_or_move == 'resize' then
          win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
        else
          win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
        end
      end
    end),
  }
end


config.color_scheme = "catppuccin-mocha"

config.font = wezterm.font("Caskaydia Cove NF")
config.font_size = 12
config.cell_width = 1.0
config.line_height = 1.5
config.font_rules = {
    {
        intensity = "Bold",
        font = wezterm.font("Caskaydia Cove NF", {weight="Bold"}),
    },
    {
        intensity = "Bold",
        italic = true,
        font = wezterm.font("Caskaydia Cove NF", {weight="Bold", italic=true}),
    },
    {
        intensity = "Normal",
        font = wezterm.font("Caskaydia Cove NF", {weight="Regular"}),
    },
    {
        intensity = "Normal",
        italic = true,
        font = wezterm.font("Caskaydia Cove NF", {weight="Regular", italic=true}),
    },
    {
        intensity = "Half",
        font = wezterm.font("Caskaydia Cove NF", {weight="ExtraLight"}),
    },
    {
        intensity = "Half",
        italic = true,
        font = wezterm.font("Caskaydia Cove NF", {weight="ExtraLight", italic=true}),
    },
}

config.window_close_confirmation = "NeverPrompt"
config.window_decorations = "NONE"
config.enable_tab_bar = false
config.window_padding = {
    left = 4,
    right = 1,
    top = 0,
    bottom = 0,
}
config.cursor_blink_rate = 0

config.leader = {
    mods = "CTRL",
    key = "\\",
    timeout_milliseconds = 1000,
}
config.keys = {
    split_nav("resize", "h"),
    split_nav("resize", "j"),
    split_nav("resize", "k"),
    split_nav("resize", "l"),
    split_nav("move", "h"),
    split_nav("move", "j"),
    split_nav("move", "k"),
    split_nav("move", "l"),
    {
        key = "x",
        mods = "LEADER",
        action = wezterm.action.CloseCurrentPane {confirm=false},
    },
    {
        key = "v",
        mods = "LEADER",
        action = wezterm.action.SplitHorizontal {domain = "CurrentPaneDomain"},
    },
    {
        key = "z",
        mods = "LEADER",
        action = wezterm.action.SplitVertical {domain = "CurrentPaneDomain"},
    },
    {
        key = "Enter",
        mods = "LEADER",
        action = wezterm.action.ActivateCopyMode,
    },
}


return config
