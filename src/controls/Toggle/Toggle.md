---
name: Toggle
category: Controls
---

## Description

Toggle is used with a wrapped `<label>` element that contain
`<input type="checkbox"/>`. It occupies `olt-Toggle*` class names.

<div class="olt-Grid olt-u-marginTop4 olt-u-marginBottom6">
   <div class="olt-Grid-item olt-Grid-item--3">
     <div class="demo-spacer-small"></div>
     <div>
       <div class="demo-label">
         Active
       </div>
       <div class="demo-label">
         Active Disabled
       </div>
       <div class="demo-label">
         Inactive
       </div>
       <div class="demo-label">
         Inactive disabled
       </div>
     </div>
   </div>
   <div class="olt-Grid-item olt-Grid-item--7">
     <div class="olt-Grid">
       <div class="olt-Grid-item olt-Grid-item--4">
         <div class="demo-title">Light Theme</div>
         <div class="demo-subtitle-small"></div>
         <div class="olt-Card">
           <div class="olt-Card-content">
             <div class="demo-content">
              <label class="olt-Toggle">
                <input type="checkbox" checked>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle">
                <input type="checkbox" disabled checked>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle olt-Toggle--secondary">
                <input type="checkbox">
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle olt-Toggle--secondary">
                <input type="checkbox" disabled>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
           </div>
         </div>
       </div>
       <div class="olt-Grid-item olt-Grid-item--4">
         <div class="demo-title">Dark Theme</div>
         <div class="demo-subtitle-small"></div>
         <div class="olt-Card olt-Card--dark olt-Theme-dark">
           <div class="olt-Card-content">
             <div class="demo-content">
              <label class="olt-Toggle">
                <input type="checkbox" checked>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle">
                <input type="checkbox" disabled checked>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle olt-Toggle--secondary">
                <input type="checkbox">
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
             <div class="demo-content">
               <label class="olt-Toggle olt-Toggle--secondary">
                <input type="checkbox" disabled>
                <div class="olt-Toggle-button"></div>
                <div class="olt-Toggle-label">Select Option</div>
              </label>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

## HTML Input states

The toggle control is a native browser `input[type="checkbox"]` so you can
apply `disable`, `checked` attributes directly to the input field

```states.html
<label class="olt-Toggle">
  <input type="checkbox">
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
<label class="olt-Toggle">
  <input type="checkbox" disabled>
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
<label class="olt-Toggle">
  <input type="checkbox" checked>
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
<label class="olt-Toggle">
  <input type="checkbox" disabled checked>
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
```

## Display mode Inline

The display mode can be set to `inline-flex` instead of `flex` with the `--inline` modifier.

```inline.html
<label class="olt-Toggle olt-Toggle--inline">
  <input type="checkbox" checked>
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
<label class="olt-Toggle olt-Toggle--inline">
  <input type="checkbox" disabled checked>
  <div class="olt-Toggle-button"></div>
  <div class="olt-Toggle-label">Select Option</div>
</label>
```
