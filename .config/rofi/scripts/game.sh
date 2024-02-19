#!/bin/fish
if test (count $argv) = 0;
	echo "5D-Chess"
	echo "Chants-of-Sennaar"
	echo "Risk-of-Rain-2"
	echo "Return-of-the-Obra-Dinn"
	echo "The-Case-of-the-Golden-Idol"
	echo "Slay-the-Princess"
	echo "Overboard!"
else;
	$HOME/Games/.scripts/$argv > /dev/null 2>&1 &
	exit 0
end
