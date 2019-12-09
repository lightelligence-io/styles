---
name: StepperDialog
category: Component
---

## Description

*StepperDialog* occupies `olt-StepperDialog*` class names. It provides a modal dialog to show any kind of content and is also utilized for dynamic lists and steppers.

The dialog changes to full screen on mobile and tablet devices.

<div class="olt-Card olt-u-padding24">
  <div class="olt-u-marginAuto">
    <input data-toggle="stepperdialog" id="demo-1" type="checkbox">
    <label class="olt-Button" for="stepper-dialog-demo-1">Open</label>
    <div class="olt-StepperDialog">
      <div class="olt-StepperDialog-window">
        <div class="olt-StepperDialog-stepper">
          <div class="olt-StepperDialog-stepper-header">Create Device Type Category</div>
          <div class="olt-StepperDialog-stepper-counter">
            2/5
          </div>
          <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--done">Select Type</div>
          <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--current">Create Device</div>
          <div class="olt-StepperDialog-stepper-step">Add Info</div>
          <div class="olt-StepperDialog-stepper-step">Define Parameters</div>
          <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--last">Set up monitoring</div>
        </div>
        <div class="olt-StepperDialog-content">
          <label class="olt-Dialog-close" for="stepper-dialog-demo-1"></label>
          <div class="olt-Dialog-title">Create the Device</div>
          <div class="olt-Dialog-description">This is the dialog description. This is the dialog description. This is the dialog description.</div>
          <div class="olt-Dialog-content">
            <label class="olt-Label">
              <input class="olt-Input" type="text" placeholder="Device Name" />
              <span class="olt-Label-text">Name</span>
            </label>
            <label class="olt-Label">
              <input class="olt-Input" type="text" placeholder="Device Location" />
              <span class="olt-Label-text">Location</span>
            </label>
            <label class="olt-Label">
              <textarea class="olt-TextArea" placeholder="Description"></textarea>
              <span class="olt-Label-text">Description</span>
            </label>
          </div>
          <div class="olt-Dialog-footer">
            <label class="olt-StepperDialog-back" for="stepper-dialog-demo-1">Back</label>
            <label class="olt-StepperDialog-proceed" for="stepper-dialog-demo-1">Proceed</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<input data-toggle="stepperdialog" id="demo-1" type="checkbox">
<label class="olt-Button" for="stepper-dialog-demo-1">Open</label>
<div class="olt-StepperDialog">
  <div class="olt-StepperDialog-window">
    <div class="olt-StepperDialog-stepper">
      <div class="olt-StepperDialog-stepper-header">Create Device Type Category</div>
      <div class="olt-StepperDialog-stepper-counter">
        2/5
      </div>
      <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--done">Select Type</div>
      <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--current">Create Device</div>
      <div class="olt-StepperDialog-stepper-step">Add Info</div>
      <div class="olt-StepperDialog-stepper-step">Define Parameters</div>
      <div class="olt-StepperDialog-stepper-step olt-StepperDialog-stepper-step--last">Set up monitoring</div>
    </div>
    <div class="olt-StepperDialog-content">
      <label class="olt-Dialog-close" for="stepper-dialog-demo-1"></label>
      <div class="olt-Dialog-title">Create the Device</div>
      <div class="olt-Dialog-description">This is the dialog description. This is the dialog description. This is the dialog description.</div>
      <div class="olt-Dialog-content">
        <label class="olt-Label">
          <input class="olt-Input" type="text" placeholder="Device Name" />
          <span class="olt-Label-text">Name</span>
        </label>
        <label class="olt-Label">
          <input class="olt-Input" type="text" placeholder="Device Location" />
          <span class="olt-Label-text">Location</span>
        </label>
        <label class="olt-Label">
          <textarea class="olt-TextArea" placeholder="Description"></textarea>
          <span class="olt-Label-text">Description</span>
        </label>
      </div>
      <div class="olt-Dialog-footer">
        <label class="olt-StepperDialog-back" for="stepper-dialog-demo-1">Back</label>
        <label class="olt-StepperDialog-proceed" for="stepper-dialog-demo-1">Proceed</label>
      </div>
    </div>
  </div>
</div>
```
