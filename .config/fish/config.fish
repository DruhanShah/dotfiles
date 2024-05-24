if status is-interactive
    # Commands to run in interactive sessions can go here
end

function starship_transient_prompt_func
    starship module character
end

fish_vi_key_bindings
starship init fish | source
enable_transience
