#!/bin/bash
case "$1" in
    watch)
      bun run tailwindcss -i ./assets/css/twstyles.css -o ./assets/css/app.css --watch --minify
      # You can add your actions here for the "watch" case.
      ;;
    *)
      bun run tailwindcss -i ./assets/css/twstyles.css -o ./assets/css/app.css --minify
      ;;
esac
