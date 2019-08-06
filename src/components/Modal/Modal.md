---
name: Modal
category: Component
---

## Description

Modals are used with `<div>` elements and render a popup in full-screen mode.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-1" type="checkbox">
    <label class="olt-Button" for="modal-demo-1">Open</label>
    <div class="olt-Modal">
      <div class="olt-Modal-dialog">
        <label class="olt-Modal-close" for="modal-demo-1"></label>
        <header class="olt-Modal-header">
          <h5 class="olt-Modal-title Headline Headline--5">This is a modal</h5>
        </header>
        <div class="olt-Modal-content">
          <p>You should really check the configuration</p>
        </div>
        <footer class="olt-Modal-footer">
          <label class="olt-Button olt-Button--outline" for="modal-demo-1">Cancel</label>
          <label class="olt-Button" for="modal-demo-1">Apply</label>
        </footer>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-1" type="checkbox">
<label class="olt-Button" for="modal-toggle-1">Open</label>
<div class="olt-Modal">
  <div class="olt-Modal-dialog">
    <label class="olt-Modal-close" for="modal-toggle-1"></label>
    <header class="olt-Modal-header">
      <h5 class="olt-Modal-title Headline Headline--5">This is a modal</h5>
    </header>
    <div class="olt-Modal-content">
      <p>You should really check the configuration</p>
    </div>
    <footer class="olt-Modal-footer">
      <label class="olt-Button olt-Button--outline" for="modal-toggle-1">Cancel</label>
      <label class="olt-Button" for="modal-toggle-1">Apply</label>
    </footer>
  </div>
</div>
```

## Context variations

The *Modal* can be rendered with different variations based on the context.

We support the following modifiers :

- `olt-Modal--error`
- `olt-Modal--warning`
- `olt-Modal--info`
- `olt-Modal--success`

### Error modal

Use the error *Modal* whenever you want to communicate an error state to the
user.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-2" type="checkbox">
    <label class="olt-Button" for="modal-demo-2">Open</label>
    <div class="olt-Modal olt-Modal--error">
      <div class="olt-Modal-dialog">
        <label class="olt-Modal-close" for="modal-demo-2"></label>
        <header class="olt-Modal-header">
          <h5 class="olt-Modal-title olt-Headline olt-Headline--5">Oh no! An error occurred</h5>
        </header>
        <div class="olt-Modal-content">
          <p>You should really check the configuration</p>
        </div>
        <div class="olt-Modal-footer">
          <label class="olt-Button olt-Button--outline" for="modal-demo-2">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-2" type="checkbox">
<label class="olt-Button" for="modal-toggle-2">Open</label>
<div class="olt-Modal olt-Modal--error">
  <div class="olt-Modal-dialog">
    <label class="olt-Modal-close" for="modal-toggle-2"></label>
    <header class="olt-Modal-header">
      <h5 class="olt-Modal-title olt-Headline olt-Headline--5">Oh no! An error occurred</h5>
    </header>
    <div class="olt-Modal-content">
      <p>You should really check the configuration</p>
    </div>
    <div class="olt-Modal-footer">
      <label class="olt-Button olt-Button--outline" for="modal-toggle-2">Yes, show me</label>
    </div>
  </div>
</div>
```

### Warning modal

The warning *Modal* can be used whenever an additional critical information
should be provided to the user.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-3" type="checkbox">
    <label class="olt-Button" for="modal-demo-3">Open</label>
    <div class="olt-Modal olt-Modal--warning">
      <div class="olt-Modal-dialog">
        <label class="olt-Modal-close" for="modal-demo-3"></label>
        <div class="olt-Modal-content">
          <h5 class="olt-Modal-title Headline Headline--5">Attention! Here's a warning for you</h5>
          <p>We detected a problem in your configuration</p>
        </div>
        <div class="olt-Modal-footer">
          <label class="olt-Button olt-Button--warning" for="modal-demo-3">Ok, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-3" type="checkbox">
<label class="olt-Button" for="modal-toggle-3">Open</label>
<div class="olt-Modal olt-Modal--warning">
  <div class="olt-Modal-dialog">
    <label class="olt-Modal-close" for="modal-toggle-3"></label>
    <div class="olt-Modal-content">
      <h5 class="olt-Modal-title Headline Headline--5">Attention! Here's a warning for you</h5>
      <p>We detected a problem in your configuration</p>
    </div>
    <div class="olt-Modal-footer">
      <label class="olt-Button olt-Button--warning" for="modal-toggle-3">Ok, show me</label>
    </div>
  </div>
</div>
```

### Info modal

The info *Modal* can be used whenever an additional non-critical information
should be provided to the user.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-4" type="checkbox">
    <label class="olt-Button" for="modal-demo-4">Open</label>
    <div class="olt-Modal olt-Modal--info">
      <div class="olt-Modal-dialog">
        <label class="olt-Modal-close" for="modal-demo-4"></label>
        <div class="olt-Modal-content">
          <h5 class="olt-Modal-title Headline Headline--5">Oh! Here's some info for you</h5>
          <p>You should really check the configuration</p>
        </div>
        <div class="olt-Modal-footer">
          <label class="olt-Button olt-Button--info" for="modal-demo-4">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-4" type="checkbox">
<label class="olt-Button" for="modal-toggle-4">Open</label>
<div class="olt-Modal olt-Modal--info">
  <div class="olt-Modal-dialog">
    <label class="olt-Modal-close" for="modal-toggle-4"></label>
    <div class="olt-Modal-content">
      <h5 class="olt-Modal-title Headline Headline--5">Oh! Here's some info for you</h5>
      <p>You should really check the configuration</p>
    </div>
    <div class="olt-Modal-footer">
      <label class="olt-Button olt-Button--info" for="modal-toggle-4">Yes, show me</label>
    </div>
  </div>
</div>
```

### Success modal

Use the success *Modal* when the actions of the user are successful.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-5" type="checkbox">
    <label class="olt-Button" for="modal-demo-5">Open</label>
    <div class="olt-Modal olt-Modal--success">
      <div class="olt-Modal-dialog">
        <label class="olt-Modal-close" for="modal-demo-5"></label>
        <header class="olt-Modal-header">
          <h5 class="olt-Modal-title olt-Headline olt-Headline--5">Oh yes! Success occurred</h5>
        </header>
        <div class="olt-Modal-content">
          <p>Your configuration was approved</p>
        </div>
        <div class="olt-Modal-footer">
          <label class="olt-Button olt-Button--success" for="modal-demo-5">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-5" type="checkbox">
<label class="olt-Button" for="modal-toggle-5">Open</label>
<div class="olt-Modal olt-Modal--success">
  <div class="olt-Modal-dialog">
    <label class="olt-Modal-close" for="modal-toggle-5"></label>
    <header class="olt-Modal-header">
      <h5 class="olt-Modal-title olt-Headline olt-Headline--5">Oh yes! Success occurred</h5>
    </header>
    <div class="olt-Modal-content">
      <p>Your configuration was approved</p>
    </div>
    <div class="olt-Modal-footer">
      <label class="olt-Button olt-Button--success" for="modal-toggle-5">Yes, show me</label>
    </div>
  </div>
</div>
```

## Fullscreen

There is an additional fullscreen *Modal* which takes the space of the whole
screen when rendered. This *Modal* can be used for various wizards in a
combination with [Stepper](/#stepper).

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="modal" id="demo-5" type="checkbox">
    <label class="olt-Button" for="modal-demo-5">Open</label>
    <div class="olt-Modal olt-Modal--fullscreen olt-Modal--error">
      <div class="olt-Modal-dialog">
        <div class="olt-Container">
          <header class="olt-Modal-header">
            <h2 class="olt-Modal-title olt-Headline olt-Headline--2">Tenant registration</h2>
          </header>
          <div class="olt-Modal-content">
            <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <div class="olt-Stepper">
              <input type="radio" name="steps" id="step-one" checked="checked"/>
              <label for="step-one" class="olt-Stepper-header">Step One</label>
              <div class="olt-Stepper-content">
                <h4 class="olt-Headline olt-Headline--4">Step One Content</h4>
                <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicinsg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <input type="radio" name="steps" id="step-two"/>
              <label for="step-two" class="olt-Stepper-header">Step Two</label>
              <div class="olt-Stepper-content">
                <h4 class="olt-Headline olt-Headline--4">Step Two Content</h4>
                <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <input type="radio" name="steps" id="step-three"/>
              <label for="step-three" class="olt-Stepper-header">Step Three</label>
              <div class="olt-Stepper-content">
                <h4 class="olt-Headline olt-Headline--4">Step Three Content</h4>
                <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <input type="radio" name="steps" id="step-four"/>
              <label for="step-four" class="olt-Stepper-header">Step Four</label>
              <div class="olt-Stepper-content">
                <h4 class="olt-Headline olt-Headline--4">Step Four Content</h4>
                <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <label class="olt-Button olt-Button--primary" for="modal-demo-5">Close</label>
          </div>
        </div>
      </div>
      <label class="olt-Modal-close" for="modal-demo-5"></label>
    </div>
  </div>
</div>

```html
<input data-toggle="modal" id="modal-toggle-5" type="checkbox">
<label class="olt-Button" for="modal-toggle-5">Open</label>
<div class="olt-Modal olt-Modal--fullscreen olt-Modal--error">
  <div class="olt-Modal-dialog">
    <div class="olt-Container">
      <header class="olt-Modal-header">
        <h2 class="olt-Modal-title olt-Headline olt-Headline--2">Tenant registration</h2>
      </header>
      <div class="olt-Modal-content">
        <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        <div class="olt-Stepper">
          <input type="radio" name="steps" id="step-one" checked="checked"/>
          <label for="step-one" class="olt-Stepper-header">Step One</label>
          <div class="olt-Stepper-content">
            <h4 class="olt-Headline olt-Headline--4">Step One Content</h4>
            <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicinsg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <input type="radio" name="steps" id="step-two"/>
          <label for="step-two" class="olt-Stepper-header">Step Two</label>
          <div class="olt-Stepper-content">
            <h4 class="olt-Headline olt-Headline--4">Step Two Content</h4>
            <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <input type="radio" name="steps" id="step-three"/>
          <label for="step-three" class="olt-Stepper-header">Step Three</label>
          <div class="olt-Stepper-content">
            <h4 class="olt-Headline olt-Headline--4">Step Three Content</h4>
            <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

        	<input type="radio" name="steps" id="step-four"/>
          <label for="step-four" class="olt-Stepper-header">Step Four</label>
          <div class="olt-Stepper-content">
            <h4 class="olt-Headline olt-Headline--4">Step Four Content</h4>
            <p class="olt-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <label class="olt-Button olt-Button--primary" for="modal-toggle-5">Close</label>
      </div>
    </div>
  </div>
  <label class="olt-Modal-close" for="modal-toggle-5"></label>
</div>
```
