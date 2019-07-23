---
name: Basics
category: Getting Started
---

## Installation

Lightelligence Styles can be integrated to any project by installing the npm
package via npm.

```bash
$ npm install @lightelligence/styles --save-dev
```

## Usage

In your `index.html` page you need to make sure you add the `index.css` file : 

```html
<html>
<head>
    <title>My awesome Lightelligence App</title>
    <link href="node_modules/@lightelligence/styles/dist/index.css" rel="stylesheet"/>
</head>
<body>
<div class="olt-Frame">
    <button class="olt-Button">Hello World</button>
</div>
</body>
</html>
```

> The `index.css` file exist under 
> `node_modules/@lightelligence/styles/dist/index.css`. In most cases you need
> to add the whole `dist/` directory to your `public/dist` directory of your 
> project to make those files accessible by the browser

The `index.css` file itself will load the necessary fonts from `dist/fonts`,
so you don't need to worry about adding those manually.

Make sure that you also wrap your content in a `olt-Frame` class, which will
set defaults for most of the common elements. Part of the properties set by
`olt-Frame` are colors, fonts, `box-sizing`, etc.

## Known issues

Currently there is a bug with `cssnano`, which affects users of this styleguide
to minify the output of their CSS files.

The bug is [reported](https://github.com/postcss/postcss-calc/issues/77) and
the following workaround needs to be used until the external library is updated :

In `package.json` file of your application please include : 

```json
{
 "name": "...",
 ...
 "cssnano": {
    "preset": [
      "default",
      {
        "calc": false
      }
    ]
  }
}
``` 
