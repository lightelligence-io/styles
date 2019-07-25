<a href="https://lightelligence.io" align="right">
    <img src="/resources/logo.png" alt="logo" title="logo" align="right" />
</a>

# Styles

[![Build Status](https://img.shields.io/travis/com/lightelligence-io/styles.svg)](https://travis-ci.com/lightelligence-io/styles/branches)
[![npm (scoped)](https://img.shields.io/npm/v/@lightelligence/styles.svg)](https://www.npmjs.com/package/@lightelligence/styles)

> The Lightelligence design system implementation in CSS

## Installation

```
npm install @lightelligence/styles
```

## Features

The Lightelligence Styles are a set of components that require no JavaScript
in order to function properly, styled according to our design system.

## Usage

Using the Lightelligence Styles is as easy as including the bundled css file
in your front-end and then add the corresponding class names to your elements.

```html
<html>
  <head>
    <title>My awesome Lightelligence App</title>
    <link
      href="node_modules/@lightelligence/styles/dist/index.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="olt-Frame">
      <button class="olt-Button">Hello World</button>
    </div>
  </body>
</html>
```

Check out [the API reference](https://lightelligence-io.github.io/styles/)
to see the full documentation.

## License

MIT
