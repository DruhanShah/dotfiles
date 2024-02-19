function note
	cd ~/Notes/
	nvim index.md
	git add .
	git commit -m "Update"
	git push
	cd -
end
