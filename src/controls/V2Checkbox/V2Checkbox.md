---
name: V2Checkbox
category: Controls
---

## Description

Checkbox is used with a wrapped `<label>` element that contain
`<input type="checkbox"/>`. It occupies `olt-V2Checkbox*` class names.

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
               <label class="olt-V2Checkbox">
                 <input type="checkbox" checked />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox" checked disabled />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox"/>
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox" disabled />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
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
               <label class="olt-V2Checkbox">
                 <input type="checkbox" checked />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox" checked disabled />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox"/>
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
               </label>
             </div>
             <div class="demo-content">
               <label class="olt-V2Checkbox">
                 <input type="checkbox" disabled />
                 <span class="olt-V2Checkbox-button"></span>
                 <span class="olt-V2Checkbox-label">Select an option</span>
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
<label class="olt-V2Checkbox">
 <input type="checkbox" />
 <span class="olt-V2Checkbox-button"></span>
 <span class="olt-V2Checkbox-label">Select an option</span>
</label>
```

## HTML Input states

The checkbox control is a native browser `input[type="checkbox"]` so you can
apply `disable`, `checked` attributes directly to the input field

```states.html
<label class="olt-V2Checkbox">
 <input type="checkbox" />
 <span class="olt-V2Checkbox-button"></span>
 <span class="olt-V2Checkbox-label">Select an option</span>
</label>
<label class="olt-V2Checkbox">
 <input type="checkbox" disabled />
 <span class="olt-V2Checkbox-button"></span>
 <span class="olt-V2Checkbox-label">Select an option</span>
</label>
<label class="olt-V2Checkbox">
 <input type="checkbox" checked />
 <span class="olt-V2Checkbox-button"></span>
 <span class="olt-V2Checkbox-label">Select an option</span>
</label>
<label class="olt-V2Checkbox">
 <input type="checkbox" disabled checked />
 <span class="olt-V2Checkbox-button"></span>
 <span class="olt-V2Checkbox-label">Select an option</span>
</label>
```
