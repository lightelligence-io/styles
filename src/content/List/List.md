# List

List is normally used with `<ul>` elements in which `<li>` is contained but can be used with arbitrary elements as well.


## Unordered List

```html
<ul class="olt-List">
  <li class="olt-List-item">Item One</li>
  <li class="olt-List-item">Item Two</li>
  <li class="olt-List-item">Item Three</li>
</ul>
```

## Ordered List

```html
<ol class="olt-List olt-List--ordered">
  <li class="olt-List-item">Item One</li>
  <li class="olt-List-item">Item Two</li>
  <li class="olt-List-item">Item Three</li>
</ol>
```

## Definition List

```html
<dl class="olt-List olt-List--definition">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Tag">Light</span>
    <span class="olt-Tag">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```

## 2 columns

You can display a definition list in 2 columns with the `--2columns` modifier.
The modifier is reponsive:

`olt-List--[xs|sm|lg|xl]-2columns`

```html
<dl class="olt-List olt-List--definition olt-List--sm-2columns">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Tag">Light</span>
    <span class="olt-Tag">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```

## Vertically stacked definition list

You can display a definition list vertically stacked in a single column with the `--vertical` modifier.
The modifier is reponsive:

`olt-List--[xs|sm|lg|xl]-vertical`

```html
<dl class="olt-List olt-List--definition olt-List--sm-vertical olt-List--lg-2columns">
  <dt class="olt-List-term">Device Name</dt>
  <dd class="olt-List-item">Waterproofed solar roof</dd>
  <dt class="olt-List-term">Device Type</dt>
  <dd class="olt-List-item">Gateway</dd>
  <dt class="olt-List-term">Description</dt>
  <dd class="olt-List-item">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</dd>
  <dt class="olt-List-term">Firmware</dt>
  <dd class="olt-List-item">DEV2S</dd>
  <dt class="olt-List-term">Tags</dt>
  <dd class="olt-List-item">
    <span class="olt-Tag">Light</span>
    <span class="olt-Tag">Intelligence</span>
  </dd>
  <dt class="olt-List-term">Status</dt>
  <dd class="olt-List-item">Waterproofed solar roof 4</dd>
</dl>
```
