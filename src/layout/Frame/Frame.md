---
name: Frame
category: Layout
---

## Description

A *Frame* represents the entry point of your application. It is usually applied
to the `<body>` or `<html>` of the document. Use Frame to inject fonts and basic
typography into your site. It is used with the `olt-Frame` class name.

Styles applied by *Frame* globally :

- Font family and weight, as well as line height
- Enables font smoothing where available
- Changes the [box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model) to `border-box`

```frame.js hidden
document.querySelector("body > div.olt-Frame").classList.remove("olt-Frame");
```

```frame.html
<div class="olt-Frame">
  <h3 class="olt-u-H200">Wrapped in frame</h3>
  <p class="olt-Paragraph">This content is wrapped in a olt-Frame</p>
</div>
<br />
<div>
  <h1 class="olt-u-H200">Not wrapped in frame</h3>
  <p class="olt-Paragraph">This content is not wrapped in a frame</p>
</div>
```

## Making layout with Frame

*Frame* also provides site layout building blocks : `header`, `footer`,
`body` and `main`. Below is example layout using *Frame* component.

```frame.js hidden
document.querySelector("body > div.olt-Frame").classList.remove("olt-Frame");
```

```layout.html
<div class="olt-Frame" style="height: 400px">
  <div class="olt-Frame-body">
    <header class="olt-Frame-header olt-u-backgroundColorDark olt-u-colorLight olt-u-textLight olt-u-padding16 olt-u-marginBottom5">
      A simple header
    </header>
    <main class="olt-Frame-main">
      <div class="olt-Card">
        <div class="olt-Card-header">
          <h4 class="olt-Card-title">
            A title of a card
          </h4>
          <p class="olt-Card-description">
            Lorem ipsum dolor
          </p>
        </div>
      </div>
    </main>
    <footer class="olt-Frame-footer olt-u-borderTop olt-u-padding16">
      Footer &copy; OSRAM GmbH
    </footer>
  </div>
</div>
```
