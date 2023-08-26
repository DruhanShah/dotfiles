function note
	nvim ~/Notes
	cd ~/Notes/
	git add .
	git commit -m "Update"
	git push
	cd -
end
