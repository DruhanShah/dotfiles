function note
	cd ~/Notes/
	nvim .
	git add .
	git commit -m "Update"
	git push
	cd -
end
