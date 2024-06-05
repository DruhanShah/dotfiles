#!/bin/sh

# Input device shenanigans
xinput set-prop 10 344 1
xinput set-prop 10 317 1
setxkbmap -option ctrl:swapcaps
xcape -e 'Control_L=Escape'

# Autostart programs
emacs --daemon &
clipster -d &
picom &
rclone --vfs-cache-mode writes mount OneDrive: ~/OneDrive
