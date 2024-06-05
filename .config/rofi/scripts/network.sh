#!/usr/bin/env bash

theme="$HOME/.config/rofi/themes/widget.rasi"

IFACE="$(nmcli | grep -i interface | awk '/interface/ {print $2}')"
STATUS="$(nmcli radio wifi)"

active=""
urgent=""

if (ping -c 1 archlinux.org || ping -c 1 google.com || ping -c 1 bitbucket.org || ping -c 1 github.com || ping -c 1 sourceforge.net) &>/dev/null; then
	if [[ $STATUS == *"enable"* ]]; then
        if [[ $IFACE == e* ]]; then
            connected="󰛳"
        else
            connected="󰖩"
        fi
	active="-a 0"
	SSID="󰖩 $(iwgetid -r)"
	PIP="$(wget --timeout=30 http://ipinfo.io/ip -qO -)"
	fi
else
    urgent="-u 0"
    SSID="Disconnected"
    PIP="Not Available"
    connected="󰤮"
fi

list=""
nmtui=""

options="$connected\n$list\n$nmtui"

rofi_cmd() {
	rofi -theme-str "window {width: 300px;}" \
		-theme-str "listview {columns: 3; lines: 1;}" \
		-theme-str 'textbox-prompt-colon {str: "Network";}' \
		-dmenu $active $urgent \
		-p "$SSID" \
		-markup-rows \
		-theme ${theme}
}

chosen="$(echo -e "$options" | rofi_cmd)"
case $chosen in
    $connected)
		if [[ $STATUS == *"enable"* ]]; then
			nmcli radio wifi off
		else
			nmcli radio wifi on
		fi 
        ;;
    $list)
        $HOME/.config/rofi/scripts/wifi.sh
        ;;
    $nmtui)
        kitty -e nmtui
        ;;
esac
