#!/bin/zsh

rclone --vfs-cache-mode writes mount OneDrive: ~/OneDrive &
notify-send "OneDrive mounted" "Location: ~/OneDrive"
