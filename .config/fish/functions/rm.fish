function rm
	set files $argv
	if test $argv[1] = "-rf" -o $argv[1] = "-r";
		set files $argv[2..]
	end
	trash $files
end
