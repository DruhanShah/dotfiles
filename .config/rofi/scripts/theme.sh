#!/bin/sh

latte="󰃠"
mocha="󰃜"

make_latte() {
    echo "latte" > ~/.config/qtile/theme
    sed -i "s/mocha/latte/g" $HOME/.config/rofi/catppuccin.rasi
    sed -i "s/Mocha/Latte/g" $HOME/.config/kitty/kitty.conf
    sed -i "s/dark/light/g" $HOME/.config/nvim/init.lua
    sed -i "s/dark/light/g" $HOME/.config/nvim/scrollback.lua
    sed -i "s/palette = \"catppuccin_mocha\"/palette = \"catppuccin_latte\"/g" $HOME/.config/starship.toml
    sed -i "s/mocha/latte/g" $HOME/.config/btop/btop.conf
    sed -i "s/mocha/latte/g" $HOME/.config/zathura/zathurarc
    sed -i "s/mocha/latte/g" $HOME/.config/zathura/presentation/zathurarc
    sed -i "s/mocha/latte/g" $HOME/.config/qutebrowser/homepage/styles.css
}

make_mocha() {
    echo "mocha" > ~/.config/qtile/theme
    sed -i "s/latte/mocha/g" $HOME/.config/rofi/catppuccin.rasi
    sed -i "s/Latte/Mocha/g" $HOME/.config/kitty/kitty.conf
    sed -i "s/light/dark/g" $HOME/.config/nvim/init.lua
    sed -i "s/dark/light/g" $HOME/.config/nvim/scrollback.lua
    sed -i "s/palette = \"catppuccin_latte\"/palette = \"catppuccin_mocha\"/g" $HOME/.config/starship.toml
    sed -i "s/latte/mocha/g" $HOME/.config/btop/btop.conf
    sed -i "s/latte/mocha/g" $HOME/.config/zathura/zathurarc
    sed -i "s/latte/mocha/g" $HOME/.config/zathura/presentation/zathurarc
    sed -i "s/latte/mocha/g" $HOME/.config/qutebrowser/homepage/styles.css
}

rofi_cmd() {
    echo -e "$latte\n$mocha" | rofi \
        -theme-str 'window {width: 350px;}' \
        -theme-str 'window {location: center; anchor: center;}' \
        -theme-str 'mainbox {children: [ "message", "listview" ];}' \
        -theme-str 'listview {columns: 2; lines: 1;}' \
        -theme-str 'element-text {horizontal-align: 0.5;}' \
        -theme-str 'textbox {horizontal-align: 0.5;}' \
        -dmenu \
        -mesg "Select Theme" \
        -theme $HOME/.config/rofi/themes/powermenu.rasi
}

selected="$(rofi_cmd)"
if [[ "$selected" == "$latte" ]]; then
    make_latte
elif [[ "$selected" == "$mocha" ]]; then
    make_mocha
fi
qtile cmd-obj -o cmd -f restart
