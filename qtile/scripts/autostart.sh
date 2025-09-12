#!/bin/sh

# Input device shenanigans
xinput set-prop 11 349 1
setxkbmap -option compose:ralt,ctrl:nocaps
xcape -e 'Control_L=Escape'

# Autostart programs
picom &
syncthing &
