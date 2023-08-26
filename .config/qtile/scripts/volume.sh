#!/bin/fish

set volume (pamixer --get-volume-human)
if [ $volume = "muted" ];
	echo " M "
else
	echo $volume
end
