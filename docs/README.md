# Getting started

Lightelligence UI is a living styleguide for lightelligence platform related web projects.
Distribution of this project will let you easily style your app and provide consistent lightelligence look and feel.

::: warning
Lightelligence UI is a work in progress. For any bugs or feature request, please contact Frontend Team members.
:::

## Installation

### Via NPM with Bitbucket

The only available version at the moment

Before starting, please contact r.makovyak@osram.com to enlist your project to have access to Lightelligence UI repo

Include following in your package.json

```
{
    "dependencies" {
        "lightelligence-ui": "bitbucket:lightelligence/styleguide"
    }
}
```

Install package

```
$ npm i lightelligence-ui
```

Import css and js files from dist folder

```javascript
// CSS
import "lightelligence-ui/dist/olt-ui.css";
// Script
import "lightelligence-ui/dist/olt-ui.js";
```

### Via CDN

::: warning
Not supported at the moment
:::

```html
<!-- Style -->
<link href="//lightelligence.io/ui-framework/v0.0.1/olt-ui.css" rel="stylesheet">

<!-- Script -->
<script src="//lightelligence.io/ui-framework/v0.0.1/olt-ui.js"></script>
```

### Via NPM

::: warning
Not supported at the moment
:::

```
$ npm install lightelligence-ui --save
```

```javascript
// Script
import "lightelligence-ui/dist/olt-ui.js";

// Style
import "lightelligence-ui/dist/olt-ui.scss";
// or
import "lightelligence-ui/dist/olt-ui.css";
```

## Next steps

Start exploring from [Grid system](/layout/grid-system.html)
