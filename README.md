# Navarch
This is the public version of Navarch that is being developed for [kokopi.dev](https://kokopi.dev).

## Features

### Tailwindcss
Tailwind makes it easy to jump into any project that is not your own, and modify it's css. No need to flip back and forth files and guess what `.main-something` does.

- Colors: modify `tailwind.config.js` -> `theme.extend.colors`

### Pages
- **Home**: Modify `layouts/_default/home.html`
- **Posts**: Modify `layouts/_default/posts.html`
- **About Section**: Modify `layouts/_default/about.html`

### Webcomponents
- Tooltip component:
```
<tooltip-component>
</tooltip-component>
```

## Shortcodes

### Images
Accepts all image formats aside form gifs will be converted to webp so users will use less data.
Example Usage:
```
# image folder structure:
- content
    - posts
        - post-3
            - index.md (post content)
            - bryce-canyon.jpg

# inside index.md:
{{< image title="bryce canyon" src="bryce-canyon.jpg" alt="canyon" >}}
```

### Videos (gifs)
For less data usage on users, there is a script for converting gifs to webm format.
While the gif has a smaller size on file, on the web they are extremely large if you look at the network tab.
Webm format might be a little large on file, but on the web they are optimized for displaying video like media.
```
# image folder strucutre:
- content
    - posts
        - post-3
            - index.md (post content)
            - myvideo.webm

# inside index.md:
{{< video src="myvideo.webm" >}}
```

### Html
Write html inside a post:
```
{{< html >}}
<div class="text-center rounded-md text-black bg-gray-100 shadow">
    <p>hello world</p>
</div>
{{< /html >}}
```

## Configuration
- Display image: `images/logo.png`
