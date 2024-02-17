#!/bin/bash
case "$1" in
    tw)
        if [ -n $2 ] && [ "$2" == "watch" ];
        then
            ./scripts/tww.sh watch
        else
            ./scripts/tww.sh
        fi
      ;;
    dev)
        ./scripts/run
        ;;
    *)
        echo "$1 is not a command"
        ;;
esac

