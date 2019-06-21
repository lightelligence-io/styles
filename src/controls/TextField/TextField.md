---
name: TextField
category: Controls
---

## Description

*TextField* is used with `<div>` elements that contain a text-input and 
optionally a label and can be used as [FormFields](/#form-field) for text
input elements. *TextField* occupies `olt-TextField*` class names.

The `input` tag of the *TextField* must also include `olt-Input` class name,
since it wraps the [Input](/#input) component and enhances it. The `label` tag 
of the *TextField* must also include `olt-Label` class name for the very same
reasons.

Inheriting from [Input](/#input), it can be used with :

- `type=text` for text input fields
- `type=password` for password input fields
- `type=email` for email input fields

A TextField contains `-label`, `-input` and can contain `-footer` for specifying
additional information such as validation errors.

*TextField* implements the following native states :

- `:focus`
- `:invalid`

```text-field.html
<div class="olt-TextField">
  <label class="olt-Label olt-TextField-label">What did you do yesterday?</label>
  <input class="olt-Input olt-TextField-input" placeholder="Enter your life..."/>
  <div class="olt-TextField-footer">
    <div class="olt-TextField-message olt-u-colorInfo">
        Please make it short
    </div>
  </div>
</div>
```

> You can check additional examples in the [Examples Form Section](/#forms).

## Modifiers

### Floating labels

Enable floating labels by adding `--float` modifier and placing the label 
*after* the input in markup. When the *TextField* contains a floating label,
it will not display `placeholder` html attribute, until the input field is
focused.

```floating.html
<div class="olt-TextField olt-TextField--float">
  <input id="input" class="olt-Input olt-TextField-input" placeholder="john_doe"/>
  <label for="input" class="olt-Label olt-TextField-label">Username</label>
</div>
```

### Required

Making an *TextField* required can be done by adding `--required` modifier
class name, as well as adding `:required` to the HTML input. It will add "*"
to the end of the label.

```required.html
<div class="olt-TextField olt-TextField--required">
  <label class="olt-Label olt-TextField-label">Occupation</label>
  <input class="olt-Input olt-TextField-input" required placeholder="engineer"/>
  <div class="olt-TextField-footer">
    <div class="olt-TextField-message olt-u-colorPrimary">This field is mandatory</div>
  </div>
</div>
```

### Horizontal text field

You can make horizontal *TextFields* by adding `--horizontal` modifier 
class name. This will render the text inputs with the labels next to them,
rather than stacked above them.

> Note: *TextField* can not be used in conjunction with `--float`.

```horizontal.css hidden
.olt-TextField {
  align-items:center;
}
```

```horizontal.html
<div class="olt-TextField olt-TextField--horizontal">
  <label class="olt-Label olt-TextField-label">Occupation</label>
  <div>
    <input class="olt-Input olt-TextField-input" required placeholder="engineer"/>
    <div class="olt-TextField-footer">
      <div class="olt-TextField-message olt-u-colorPrimary">This field is mandatory</div>
    </div>
  </div>
</div>
```

## Variations

### Info Message

An additional information can be added to the text field by nesting `-info`
child element inside `-footer`. It is rendered on the right side of the 
text field. 

```info.html
<div class="olt-TextField">
  <label class="olt-Label olt-TextField-label">Label</label>
  <input class="olt-Input olt-TextField-input is-error" placeholder="Enter your life..."/>
  <div class="olt-TextField-footer">
    <div class="olt-TextField-message olt-u-colorError">Something went horribly wrong</div>
    <div class="olt-TextField-info">max. 200 Chars</div>
  </div>
</div>
```

### With icon

You can adding an icon to the text field, which will be rendered on the right
side of the input itself. Combine that with [Icon](/#icon) inside a nested
element containing `olt-TextField-icon`.

```icon.html
<div class="olt-TextField">
  <div class="olt-TextField-icon">
    <i class="olt-Icon olt-Icon--error" data-icon="error"></i>
  </div>
  <label class="olt-Label olt-TextField-label">Username</label>
  <input class="olt-Input olt-TextField-input is-error" value="bill"/>
  <div class="olt-TextField-footer">
    <div class="olt-TextField-message olt-u-colorError">Username already taken</div>
    <div class="olt-TextField-info">max. 10 Chars</div>
  </div>
</div>
```


