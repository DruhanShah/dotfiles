if status is-interactive
    # Commands to run in interactive sessions can go here
end

set fish_function_path $fish_function_path "/usr/lib/python3.10/site-packages/powerline/bindings/fish"
source /usr/lib/python3.10/site-packages/powerline/bindings/fish/powerline-setup.fish
powerline-setup
