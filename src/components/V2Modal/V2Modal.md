---
name: V2Modal
category: Component
---

## Description

V2Modals are used with `<div>` elements and render a popup.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-1" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-1">Open</label>
    <div class="olt-V2Modal">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header">
          This is a modal
        </header>
        <div class="olt-V2Modal-content">
          You should really check the configuration
        </div>
        <footer class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--tertiary" for="v-2-modal-demo-1">Cancel</label>
          <label class="olt-V2Button" for="v-2-modal-demo-1">Ok</label>
        </footer>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-1" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-1">Open</label>
<div class="olt-V2Modal">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header">
      This is a modal
    </header>
    <div class="olt-V2Modal-content">
      You should really check the configuration
    </div>
    <footer class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--tertiary" for="v-2-modal-demo-1">Cancel</label>
      <label class="olt-V2Button" for="v-2-modal-toggle-1">Ok</label>
    </footer>
  </div>
</div>
```

## Context variations

The *V2Modal* can be rendered with different variations based on the context.

We support the following modifiers :

- `olt-V2Modal--error`
- `olt-V2Modal--warning`
- `olt-V2Modal--info`
- `olt-V2Modal--success`
- `olt-V2Modal--action`

### Critical modal

Use the critical *V2Modal* whenever you want to communicate an critical or error state to the
user. Especially when proceeding will likely lead to an undesired outcome for the user that he is probably not aware of. E.g.: Deleting a role will lead to users being deleted from the tenant because they have no role afterward.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-2" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-2">Open</label>
    <div class="olt-V2Modal olt-V2Modal--critical">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header">
          Oh no! This is critical!
        </header>
        <div class="olt-V2Modal-content">
          <p>You should really check the configuration</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--destructive" for="v-2-modal-demo-2">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-2" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-2">Open</label>
<div class="olt-V2Modal olt-V2Modal--critical">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header">
      Oh no! This is critical!
    </header>
    <div class="olt-V2Modal-content">
      <p>You should really check the configuration</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--destructive" for="v-2-modal-toggle-2">Yes, show me</label>
    </div>
  </div>
</div>
```

### Warning modal

The warning *V2Modal* is used when needing to show information critical in preventing errors.
e.g.: 15 of your devices have not responded, check your device management.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-3" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-3">Open</label>
    <div class="olt-V2Modal olt-V2Modal--warning">
      <div class="olt-V2Modal-dialog">
        <div class="olt-V2Modal-header">
          Attention! Here's a warning for you
        </div>
        <div class="olt-V2Modal-content">
          <p>We detected a problem in your configuration</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--warning" for="v-2-modal-demo-3">Ok, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-3" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-3">Open</label>
<div class="olt-V2Modal olt-V2Modal--warning">
  <div class="olt-V2Modal-dialog">
    <div class="olt-V2Modal-header">
      Attention! Here's a warning for you
    </div>
    <div class="olt-V2Modal-content">
      <p>We detected a problem in your configuration</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--warning" for="v-2-modal-toggle-3">Ok, show me</label>
    </div>
  </div>
</div>
```

### Info modal

The info *V2Modal* can be used whenever an additional non-critical information
should be provided to the user. The info will not have negative results no matter the users choice.
e.g.: You have been invited to a tenant, accept or decline.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-4" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-4">Open</label>
    <div class="olt-V2Modal olt-V2Modal--info">
      <div class="olt-V2Modal-dialog">
        <div class="olt-V2Modal-header">
          Oh! Here's some info for you
        </div>
        <div class="olt-V2Modal-content">
          <p>You should really check the configuration</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button" for="v-2-modal-demo-4">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-4" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-4">Open</label>
<div class="olt-V2Modal olt-V2Modal--info">
  <div class="olt-V2Modal-dialog">
    <div class="olt-V2Modal-header">
      Oh! Here's some info for you
    </div>
    <div class="olt-V2Modal-content">
      <p>You should really check the configuration</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button" for="v-2-modal-toggle-4">Yes, show me</label>
    </div>
  </div>
</div>
```

### Success modal

Use the success *V2Modal* to communicate a success message the user has to be made aware of.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-5" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-5">Open</label>
    <div class="olt-V2Modal olt-V2Modal--success">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header">
          Oh yes! Success!
        </header>
        <div class="olt-V2Modal-content">
          <p>Your configuration was approved</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--confirmative" for="v-2-modal-demo-5">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-5" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-5">Open</label>
<div class="olt-V2Modal olt-V2Modal--success">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header">
      Oh yes! Success!
    </header>
    <div class="olt-V2Modal-content">
      <p>Your configuration was approved.</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--confirmative" for="v-2-modal-toggle-6">Yes, show me</label>
    </div>
  </div>
</div>
```

### Action modal

Use the action *V2Modal* for changes that demand active user input.
e.g.: Edit the description of a tenant.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-6" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-6">Open</label>
    <div class="olt-V2Modal olt-V2Modal--action">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header">
          Action!!
        </header>
        <div class="olt-V2Modal-content">
          <p>Start acting now!</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--success" for="v-2-modal-demo-6">Action</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-6" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-6">Open</label>
<div class="olt-V2Modal olt-V2Modal--action">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header">
       Action!!
    </header>
    <div class="olt-V2Modal-content">
      <p>Start acting now!</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--success" for="v-2-modal-toggle-5">Action</label>
    </div>
  </div>
</div>
```

## Custom Header Modals

In rare occasions the icon and background color of the header can be individually changed. If you use the `--custom` modifier with the `olt-V2Modal-header` element, you **have to** provide an icon as in the examples below. *Use with care!*

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-7" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-7">Open</label>
    <div class="olt-V2Modal">
      <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header olt-V2Modal-header--custom olt-u-backgroundColorGray500">
          <i class="olt-Icon olt-Icon-security-visibility"></i>
          Oh yes! Success!
        </header>
        <div class="olt-V2Modal-content">
          <p>Your configuration was approved</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--success" for="v-2-modal-demo-7">Yes, show me</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-7" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-7">Open</label>
<div class="olt-V2Modal olt-V2Modal--action">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header olt-V2Modal-header--custom olt-u-backgroundColorGray500">
      <i class="olt-Icon olt-Icon-security-visibility"></i>
        Oh yes! Success!
    </header>
    <div class="olt-V2Modal-content">
      <p>Your configuration was approved</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--success" for="v-2-modal-toggle-7">Yes, show me</label>
    </div>
  </div>
</div>
```

### Custom Header Icons

The icon can be changed while keeping the remaining styles. *Also use with care!*

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-8" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-8">Open</label>
    <div class="olt-V2Modal olt-V2Modal--action">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header olt-V2Modal-header--custom">
          <i class="olt-Icon olt-Icon-security-visibility"></i>
          Action!
        </header>
        <div class="olt-V2Modal-content">
          <p>... but watch out!</p>
        </div>
        <div class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--action" for="v-2-modal-demo-8">I'll be careful</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-8" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-8">Open</label>
<div class="olt-V2Modal olt-V2Modal--action">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header olt-V2Modal-header--custom">
      <i class="olt-Icon olt-Icon-security-visibility"></i>
        Action!
    </header>
    <div class="olt-V2Modal-content">
      <p>... but watch out!</p>
    </div>
    <div class="olt-V2Modal-footer">
      <label class="olt-V2Button olt-V2Button--action" for="v-2-modal-demo-8">I'll be careful</label>
    </div>
  </div>
</div>
```

## Wide Modals

There is an additional wide *V2Modal* which takes more space when rendered.

<div class="olt-Card olt-u-padding5">
  <div class="olt-u-marginAuto">
    <input data-toggle="v2modal" id="demo-9" type="checkbox">
    <label class="olt-V2Button" for="v-2-modal-demo-9">Open</label>
    <div class="olt-V2Modal olt-V2Modal--wide">
      <div class="olt-V2Modal-dialog">
        <header class="olt-V2Modal-header">
          This is a wide modal
        </header>
        <div class="olt-V2Modal-content">
            <p>This is wide modal, it can accommodate more content than the smaller modal.</p>
            <p>You can add more complex content like forms, etc.</p>
            <p>It will scroll the content if needed.</p>
            <p>It will also not shrink on mobile devices.</p>
            <p><br/><br/></p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <footer class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--tertiary" for="v-2-modal-demo-9">Cancel</label>
          <label class="olt-V2Button" for="v-2-modal-demo-9">Ok</label>
        </footer>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="v2modal" id="v2modal-toggle-9" type="checkbox">
<label class="olt-V2Button" for="v-2-modal-toggle-9">Open</label>
<div class="olt-V2Modal olt-V2Modal--wide">
  <div class="olt-V2Modal-dialog">
    <header class="olt-V2Modal-header">
      This is a wide modal
    </header>
    <div class="olt-V2Modal-content">
      <p>This is wide modal, it can accommodate more content than the smaller modal.</p>
      <p>You can add more complex content like forms, etc.</p>
      <p>It will also not shrink on mobile devices.</p>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <footer class="olt-V2Modal-footer">
          <label class="olt-V2Button olt-V2Button--tertiary" for="v-2-modal-demo-9">Cancel</label>
      <label class="olt-V2Button" for="v-2-modal-toggle-9">Ok</label>
    </footer>
  </div>
</div>
```