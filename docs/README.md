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
import "lightelligence-ui/dist/lightelligence-ui.css";
// Script
import "lightelligence-ui/dist/lightelligence-ui.js";
```

### Via CDN

::: warning
Source not available yet
:::

```html
<!-- Style ( should be inside the head tag)-->
<link href="//lightelligence.io/ui-framework/v0.0.1/lightelligence-ui.css" rel="stylesheet">



<!-- Script (at last node in body) -->
<script src="//lightelligence.io/ui-framework/v0.0.1/lightelligence-ui.js"></script>
<!-- init component (take one option) -->
<script>
    // A. bind all components on document
    lightelligence.bind();
    
    // B. bind all in div container
    const div = document.getElementById('container');
    lightelligence.bind(div);
    
    // B. bind a single component, example with textfield use bind helper
    lightelligence.bind(document, {
        mappingComponents: [
            { selector: '.olt-textfield__input', component: lightelligence.OltTextfield }
        ]
    });
    
    // C. bind with vanilla code ES3
    var nodes = document.querySelectorAll('.olt-textfield__input');
    var components = Array.prototype.map.call(nodes, function(node) {
        return new lightelligence.OltTextfield(node);
    });
</script>


```



### Via NPM

::: warning
Not testet yet
:::

```
$ npm install lightelligence-ui --save
```

```javascript
// Script
import lightelligence from "lightelligence-ui/dist/lightelligence-ui.js";

// Style
import "lightelligence-ui/source/style/framework.scss";
// or
import "lightelligence-ui/dist/lightelligence-ui.css";
```

## Next steps

Start exploring from [Grid system](/layout/grid-system.html)
