#!/bin/bash

declare -A modes
modes=(
    ["Apps (drun)"]="rofi -show drun"
    ["Window Switching"]="rofi -show window"
    ["Clipboard Manager"]="rofi -modi 'clipboard:greenclip print' -show clipboard -run-command '{cmd}'"
    ["Calculator"]="rofi -show calc -modi calc -no-show-match -no-sort"
    ["Emoji Picker"]="rofimoji --action copy --max-recent 0 --use-icons"
)

options="Apps (drun)\0icon\x1fapplication-x-executable\n"
options+="Window Switching\0icon\x1fpreferences-system-windows\n"
options+="Clipboard Manager\0icon\x1faccessories-notes\n"
options+="Calculator\0icon\x1faccessories-calculator\n"
options+="Emoji Picker\0icon\x1fface-raspberry\n"

chosen_option=$(echo -en "$options" | rofi -dmenu -p "Select action" -i -show-icons)

if [ -n "$chosen_option" ]; then
    command="${modes[$chosen_option]}"
    eval "$command"
fi
