---
name: Checkbox
category: Controls
---

## Description

Checkbox is used with a wrapped `<label>` element that contain
`<input type="checkbox"/>`. It occupies `olt-Checkbox*` class names.

---

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
         Indeterminate
       </div>
       <div class="demo-label">
         Indeterminate Disabled
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
               <label class="olt-Checkbox">
                 <input type="checkbox" checked />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 1</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" checked disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 2</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" class="olt-Checkbox--indeterminate" />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 3</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" class="olt-Checkbox--indeterminate" disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 4</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox"/>
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 5</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 6</span>
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
               <label class="olt-Checkbox">
                 <input type="checkbox" checked />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 1</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" checked disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 2</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" class="olt-Checkbox--indeterminate" />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 3</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" class="olt-Checkbox--indeterminate" disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 4</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox"/>
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 5</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-Checkbox">
                 <input type="checkbox" disabled />
                 <span class="olt-Checkbox-button"></span>
                 <span class="olt-Checkbox-label">Option 6</span>
               </label>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

---

```example.html
<label class="olt-Checkbox">
 <input type="checkbox" />
 <span class="olt-Checkbox-button"></span>
 <span class="olt-Checkbox-label">Select an option</span>
</label>
```

## HTML Input states

The checkbox control is a native browser `input[type="checkbox"]` so you can
apply `disable`, `checked` attributes directly to the input field

```states.html
<label class="olt-Checkbox">
 <input type="checkbox" />
 <span class="olt-Checkbox-button"></span>
 <span class="olt-Checkbox-label">Select an option</span>
</label>
<label class="olt-Checkbox">
 <input type="checkbox" disabled />
 <span class="olt-Checkbox-button"></span>
 <span class="olt-Checkbox-label">Select an option</span>
</label>
<label class="olt-Checkbox">
 <input type="checkbox" checked />
 <span class="olt-Checkbox-button"></span>
 <span class="olt-Checkbox-label">Select an option</span>
</label>
<label class="olt-Checkbox">
 <input type="checkbox" disabled checked />
 <span class="olt-Checkbox-button"></span>
 <span class="olt-Checkbox-label">Select an option</span>
</label>
```

## Indeterminate Checkbox

To set the indeterminate state of a checkbox you can either use the `olt-Checkbox--indeterminate` class or set the `:indeterminate` pseudo-class active via Javascript. Note: Activating the pseudo-class cannot be done with HTML.

```indeterminate.js
const c1 = document.getElementById("one");
const c2 = document.getElementById("two");
const parent = document.getElementById("parent");
[ c1, c2 ].forEach( checkbox => {
    checkbox.addEventListener( "click", () => {
        if ( c1.checked && c2.checked ) {
          parent.indeterminate = false;
          return parent.checked = true;
        }
        if ( !c1.checked && !c2.checked ) {
          parent.indeterminate = false;
          return parent.checked = false;
        }
        parent.indeterminate = true;
    } );
} );
parent.addEventListener( "click", () => {
    if ( parent.checked ) {
        c1.checked = true;
        c2.checked = true;
    } else {
        c1.checked = false;
        c2.checked = false;
    }
} );
```

```indeterminate.html
<label class="olt-Checkbox">
  <input type="checkbox" class="olt-Checkbox--indeterminate"/>
  <span class="olt-Checkbox-button"></span>
  <span class="olt-Checkbox-label">Indeterminate</span>
</label>
<label class="olt-Checkbox">
  <input id="parent" type="checkbox"/>
  <span class="olt-Checkbox-button"></span>
  <span class="olt-Checkbox-label">Parent</span>
</label>
<div class="olt-u-marginLeft5">
  <label class="olt-Checkbox">
    <input id="one" type="checkbox"/>
    <span class="olt-Checkbox-button"></span>
    <span class="olt-Checkbox-label">Child</span>
  </label>
  <label class="olt-Checkbox">
    <input id="two" type="checkbox" />
    <span class="olt-Checkbox-button"></span>
    <span class="olt-Checkbox-label">Child</span>
  </label>
</div>
```
