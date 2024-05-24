function ls
    /usr/bin/ranger --choosedir=/tmp/rangerdir $argv
    set -x LASTDIR (cat /tmp/rangerdir)
    cd $LASTDIR
end
