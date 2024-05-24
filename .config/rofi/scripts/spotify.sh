#!/bin/sh

Control="None"
[ -n "$(pgrep spotify)" ] && Control="spotify"

Cover=/tmp/cover.png
bkpCover=~/Wallpapers/latte-sakura.png
lyricsdir=/tmp/lyrics
terminal=kitty
roficonfig=~/.config/rofi/themes/spotify.rasi

musicmetadata() {

    player=""

    albumart="$(playerctl --player=$Control metadata mpris:artUrl | sed -e 's/open.spotify.com/i.scdn.co/g')"
    [ $(playerctl --player=$Control metadata mpris:artUrl) ] && curl -s "$albumart" --output $Cover || cp $bkpCover $Cover 

    title=$(playerctl --player=$Control metadata --format {{title}} | cut -c1-35)
    title=${title:-Play Something}

    artist=$(playerctl --player=$Control metadata --format {{artist}} | cut -c1-35)
    artist=${artist:-Artist}

    album=$(playerctl --player=$Control metadata --format {{album}} | cut -c1-35)
    album=${album:-Album}

    status=$(playerctl --player=$Control status)
    status=${status:-Stopped}

    icon=""
    [ "$sta~tus" = "Playing" ] && icon=""
    [ "$status" = "Paused" ] && icon="喇"

    playlist=$(playerctl --player=$Control metadata xesam:trackNumber)
    playlist=${playlist:-0}
}

lyrics() {
    Title=$(playerctl --player=$Control metadata --format {{title}})
    Artist=$(playerctl --player=$Control metadata --format {{artist}})
    URL="https://api.lyrics.ovh/v1/$Artist/$Title"
    curl -s "$( echo "$URL" | sed s/" "/%20/g | sed s/"&"/%26/g | sed s/,/%2C/g | sed s/-/%2D/g)" | jq '.lyrics' > /tmp/lyrics
    [ -z $(cat /tmp/lyrics) ] &&  curl -s --get "https://makeitpersonal.co/lyrics" --data-urlencode "artist=$Artist" --data-urlencode "title=$Title" > /tmp/lyrics
    [ "$(cat /tmp/lyrics)" = "null" ] && curl -s --get "https://makeitpersonal.co/lyrics" --data-urlencode "artist=$Artist" --data-urlencode "title=$Title" > /tmp/lyrics
    $terminal -e "printf \"\$(cat /tmp/lyrics)\" | less"
}

empty() {
    title="Nothing playing..."
    album="None"
    artist="None"
    status="Paused"
    playlist=0
    cp $bkpCover $Cover
}

case $Control in
    spotify) musicmetadata ;;
    *)       empty         ;;
esac 2>/dev/null

previous="玲"
next="怜"
lyrics=""
options="$player\n$previous\n$icon\n$next\n$lyrics"

rofi=$(printf $options | rofi -theme $roficonfig -dmenu -i -selected-row 2 -hover-select -p "$status: ($playlist)
$title 
$album
$artist")

case $rofi in 
    $player)	wmctrl -a $Control || $Control         ;;
    $next)		playerctl --player=$Control next       ;;
    $icon)		playerctl --player=$Control play-pause ;;
    $previous)	playerctl --player=$Control previous   ;;
    $lyrics)	lyrics                                 ;;
esac 2>/dev/null
