#!/usr/bin/env bash

THEME="~/.config/rofi/themes/calendar"

NEXT_MONTH=""
PREV_MONTH=""

if [ "$#" -ne 0 ]; then
    TEMP=$(date +'%Y-%-m')
    if [ "$1" = "$TEMP" ]; then shift; fi
fi

if [ "$#" -eq 0 ]; then
    MAIN=$(ncal -b -h | awk 'NR>2 {print}')
    DATE=$(date +'%_d')
    DAY_STR=$(date +'%A' | tr '[:lower:]' '[:upper:]')
    MONTH=$(date +'%-m')
    MONTH_STR=$(date +'%b')
    YEAR=$(date +'%Y')
else
    MAIN=$(ncal -b -h -d "$1" | awk 'NR>2 {print}')
    TEMP=$(ncal -b -h -d "$1" | head -1 | awk '{$1=$1;print}')
    MONTH_STR=$(echo "$TEMP" | cut -d' ' -f1)
    YEAR=$(echo "$TEMP" | cut -d' ' -f2)
    MONTH=$(echo "$1" | cut -d'-' -f2)
    ACTIVE=""
fi

SUN=$(echo "$MAIN" | cut -c 1,2)
MON=$(echo "$MAIN" | cut -c 4,5)
TUE=$(echo "$MAIN" | cut -c 7,8)
WED=$(echo "$MAIN" | cut -c 10,11)
THR=$(echo "$MAIN" | cut -c 13,14)
FRI=$(echo "$MAIN" | cut -c 16,17)
SAT=$(echo "$MAIN" | cut -c 19,20)

VAL="$SUN\n$PREV_MONTH\n$MON\n \n$TUE\n \n$WED\n \n$THR\n \n$FRI\n \n$SAT\n$NEXT_MONTH"

if [ $# -eq 0 ]; then
    ACTIVE=$(echo -e "$VAL" | grep -m 1 -n "$DATE" | cut -d':' -f1)
    ((ACTIVE = ACTIVE - 1))
fi

SELECT=$(echo -e "$VAL" | rofi -dmenu -no-custom \
    -theme "$THEME" \
    -theme-str "textbox-prompt-colon {str:\"$DATE\";}" \
    -matching prefix \
    -select "$DATE" \
    -u "0,1,2,3,4,5" \
    -a "$ACTIVE" \
    -p "$MONTH_STR" \
    -mesg "$DAY_STR")

TEMP="$?"
if [ $TEMP -eq 10 ]; then
    SELECT="$PREV_MONTH"
elif [ $TEMP -eq 11 ]; then
    SELECT="$NEXT_MONTH"
fi

case "$SELECT" in
"$NEXT_MONTH")
    ((MONTH = MONTH + 1))
    if [ "$MONTH" -gt 12 ]; then
        MONTH="1"
        ((YEAR = YEAR + 1))
    fi
    $DIR/launch3.sh "$YEAR-$MONTH"
    ;;
"$PREV_MONTH")
    ((MONTH = MONTH - 1))
    if [ "$MONTH" -lt 1 ]; then
        MONTH="12"
        ((YEAR = YEAR - 1))
    fi
    $DIR/launch3.sh "$YEAR-$MONTH"
    ;;
*)
    DATE="$(echo "$SELECT" | sed 's/\ //g')"
    if [ -z "$DATE" ]; then
        exit
    fi
    DATE=$(printf "%02d\n" "$DATE")
    MONTH=$(printf "%02d\n" "$MONTH")
    echo "$YEAR-$MONTH-$DATE"
    ;;
esac
