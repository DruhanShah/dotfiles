if status is-interactive
end

function fish_prompt
	 # echo (string repeat -n $COLUMNS "┈")
	 echo (set_color -o) (prompt_pwd --full-length-dirs 2) (set_color 40a02b)" "(set_color normal)
end

fish_default_key_bindings
