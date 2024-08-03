function ranger-cd
	set tmp (mktemp -t "ranger-cwd.XXXXXX")
	ranger $argv --choosedir="$tmp"
	if set cwd (cat -- "$tmp"); and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]
		cd -- "$cwd"
	end
	rm -f -- "$tmp"
end
