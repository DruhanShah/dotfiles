#!/usr/bin/env bash

theme="$HOME/.config/rofi/themes/widget.rasi"

# Brightness Info
brightness=$(brightnessctl g)
max=$(brightnessctl m)
percent=$(( $brightness*100 / $max ))
backlight="$(printf "%.0f\n" $percent )"
card="intel_backlight"

if [[ $backlight -ge 0 ]] && [[ $backlight -le 29 ]]; then
    level="Low"
elif [[ $backlight -ge 30 ]] && [[ $backlight -le 49 ]]; then
    level="Optimal"
elif [[ $backlight -ge 50 ]] && [[ $backlight -le 69 ]]; then
    level="High"
elif [[ $backlight -ge 70 ]] && [[ $backlight -le 100 ]]; then
    level="Peak"
fi

# Theme Elements
prompt="${backlight}%"

list_col='4'
list_row='1'
win_width='550px'

# Options
option_1=""
option_2=""
option_3=""
option_4="󰃜"

# Rofi CMD
rofi_cmd() {
	rofi -theme-str "window {width: $win_width;}" \
		-theme-str "listview {columns: $list_col; lines: $list_row;}" \
		-theme-str 'textbox-prompt-colon {str: "";}' \
		-dmenu \
		-p "$prompt" \
		-markup-rows \
		-theme ${theme}
}

# Pass variables to rofi dmenu
run_rofi() {
	echo -e "$option_1\n$option_2\n$option_3\n$option_4" | rofi_cmd
}

# Execute Command
run_cmd() {
	if [[ "$1" == '--opt1' ]]; then
        $HOME/.config/qtile/scripts/dunst-vb.sh bright_up
	elif [[ "$1" == '--opt2' ]]; then
        notify-send "Optimal brightness not set"
	elif [[ "$1" == '--opt3' ]]; then
        $HOME/.config/qtile/scripts/dunst-vb.sh bright_down
	elif [[ "$1" == '--opt4' ]]; then
        brightnessctl set 1
	fi
}

# Actions
chosen="$(run_rofi)"
case ${chosen} in
    $option_1)
		run_cmd --opt1
        ;;
    $option_2)
		run_cmd --opt2
        ;;
    $option_3)
		run_cmd --opt3
        ;;
    $option_4)
		run_cmd --opt4
        ;;
esac
