---
name: V2Label
category: Controls
---

## Description

*Label* represents a label in form fields, input fields, etc. Label is normally
used with `<label>` elements and occupies `olt-V2Label*` class names.

```label.html
<label class="olt-V2Label">
  <input class="olt-V2Input" type="text" placeholder="john_doe" />
  <div class="olt-V2Label-text">Username</div>
</label>
<br />
<label class="olt-V2Label has-value">
  <input class="olt-V2Input" type="text" value="john_doe" />
  <div class="olt-V2Label-text">Username</div>
  <div class="olt-V2Label-footer">
    <span class="olt-V2Label-error">
      Your username should not be wrong
    </span>
    <span class="olt-V2Label-count">
      5/150
    </span>
  </div>
</label>
<br />
<label class="olt-V2Label has-value">
  <input class="olt-V2Input" type="text" value="john_doe" disabled />
  <div class="olt-V2Label-text">Username</div>
</label>
<br />
<label class="olt-V2Label has-value has-error">
  <input class="olt-V2Input" type="text" value="wrong" />
  <div class="olt-V2Label-text">Username</div>
  <div class="olt-V2Label-icon">
    <i class="olt-Icon" data-icon="edit"></i>
  </div>
  <div class="olt-V2Label-footer">
    <span class="olt-V2Label-error">
      Your username should not be wrong
    </span>
    <span class="olt-V2Label-count">
      5/150
    </span>
  </div>
</label>
<br />
<label class="olt-V2Label has-value">
  <input class="olt-V2Input" type="password" value="password-xyz" />
  <div class="olt-V2Label-text">Password</div>
</label>
<br />
<label class="olt-V2Label">
  <input class="olt-V2Input" type="password" />
  <div class="olt-V2Label-text">Confirm Password</div>
  <div class="olt-V2Label-icon">
    <i class="olt-Icon" data-icon="lock"></i>
  </div>
</label>
<br />
<label class="olt-V2Label">
  <select class="olt-V2Select">
    <option hidden></option>
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <div class="olt-V2Label-text">Select</div>
</label>
<br />
<label class="olt-V2Label has-value">
  <select class="olt-V2Select" value="Lorem Ipsum">
    <option value="LoremIpsum">Lorem Ipsum</option>
    <option value="DolorSitAmet">Dolor Sit Amet</option>
    <option value="EtVersus">Et Versus</option>
  </select>
  <div class="olt-V2Label-text">Select</div>
</label>


<div class="olt-Theme-dark" style="padding: 20px;">
  <label class="olt-V2Label">
    <input class="olt-V2Input" type="text" placeholder="john_doe" />
    <div class="olt-V2Label-text">Username</div>
  </label>
  <br />
  <label class="olt-V2Label has-value">
    <input class="olt-V2Input" type="text" value="john_doe" />
    <div class="olt-V2Label-text">Username</div>
    <div class="olt-V2Label-footer">
      <span class="olt-V2Label-error">
        Your username should not be wrong
      </span>
      <span class="olt-V2Label-count">
        5/150
      </span>
    </div>
  </label>
  <br />
  <label class="olt-V2Label has-value">
    <input class="olt-V2Input" type="text" value="john_doe" disabled />
    <div class="olt-V2Label-text">Username</div>
  </label>
  <br />
  <label class="olt-V2Label has-value has-error">
    <input class="olt-V2Input" type="text" value="wrong" />
    <div class="olt-V2Label-text">Username</div>
    <div class="olt-V2Label-icon">
      <i class="olt-Icon" data-icon="edit"></i>
    </div>
    <div class="olt-V2Label-footer">
      <span class="olt-V2Label-error">
        Your username should not be wrong
      </span>
      <span class="olt-V2Label-count">
        5/150
      </span>
    </div>
  </label>
  <br />
  <label class="olt-V2Label has-value">
    <input class="olt-V2Input" type="password" value="password-xyz" />
    <div class="olt-V2Label-text">Password</div>
  </label>
  <br />
  <label class="olt-V2Label">
    <input class="olt-V2Input" type="password" />
    <div class="olt-V2Label-text">Confirm Password</div>
    <div class="olt-V2Label-icon">
      <i class="olt-Icon" data-icon="lock"></i>
    </div>
  </label>
  <br />
  <label class="olt-V2Label">
    <select class="olt-V2Select">
      <option hidden></option>
      <option value="LoremIpsum">Lorem Ipsum</option>
      <option value="DolorSitAmet">Dolor Sit Amet</option>
      <option value="EtVersus">Et Versus</option>
    </select>
    <div class="olt-V2Label-text">Select</div>
  </label>
  <br />
  <label class="olt-V2Label has-value">
    <select class="olt-V2Select" value="Lorem Ipsum">
      <option value="LoremIpsum">Lorem Ipsum</option>
      <option value="DolorSitAmet">Dolor Sit Amet</option>
      <option value="EtVersus">Et Versus</option>
    </select>
    <div class="olt-V2Label-text">Select</div>
  </label>
</div>
```
