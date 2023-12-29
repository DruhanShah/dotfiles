#!/bin/fish
if test (count $argv) = 0;
	echo "Hollow-Knight"
	echo "5D-Chess"
	echo "Chants-of-Sennaar"
	echo "Risk-of-Rain-2"
	echo "Hades"
	echo "Return-of-the-Obra-Dinn"
else;
	$HOME/Games/.scripts/$argv > /dev/null 2>&1 &
	exit 0
end
