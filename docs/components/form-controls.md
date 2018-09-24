# Form Controls

## Select
<div class="olt-select__wrapper olt-spacing--s-top">
    <select class="olt-select" name="select">
        <option value="LoremIpsum">Lorem Ipsum</option>
        <option value="DolorSitAmet">Dolor Sit Amet</option>
        <option value="EtVersus">Et versus</option>
    </select>
    <label class="olt-select__label">Select</label>
</div>

<div class="olt-select__wrapper olt-spacing--s-left">
    <select class="olt-select" name="select" disabled>
        <option value="LoremIpsum">Lorem Ipsum</option>
        <option value="DolorSitAmet">Dolor Sit Amet</option>
        <option value="EtVersus">Et versus</option>
    </select>
    <label class="olt-select__label">Disabled</label>
</div>

````html
<div class="olt-select__wrapper">
    <select class="olt-select" name="select">
        <option value="LoremIpsum">Lorem Ipsum</option>
        <option value="DolorSitAmet">Dolor Sit Amet</option>
        <option value="EtVersus">Et versus</option>
    </select>
    <label class="olt-select__label">Select</label>
</div>
````

## Textfields

::: warning
You have to set a placeholder. Otherwise floating label is buggy.<br>
We recommend empty placeholder!
:::

First you have to initialize the textfields javascript component.
````javascript
import { OltTextfield } from 'lightelligence-ui';
Array.from(document.querySelectorAll(".olt-textfield__input")).map(x => new OltTextfield(x));
````

### Input
<div class="olt-textfield__wrapper is-fullwidth">
    <input class="olt-textfield__input" id="input-1" name="input"/>
    <label class="olt-textfield__input-label" for="input-1">Input</label>
</div>

<div class="olt-textfield__wrapper is-fullwidth">
    <input class="olt-textfield__input" value="123" name="input" id="input-2"/>
    <label class="olt-textfield__input-label" for="input-2">Prefilled</label>
</div>

<div class="olt-textfield__wrapper is-fullwidth">
    <input class="olt-textfield__input" value="123" name="input" id="input-2"/>
    <label class="olt-textfield__input-label" for="input-2">Prefilled</label>
</div>

<div class="olt-textfield__wrapper is-fullwidth">
    <input class="olt-textfield__input" name="input" id="input-disabled" disabled/>
    <label class="olt-textfield__input-label" for="input-disabled">Disabled</label>
</div>

<input-counter></input-counter>

<div class="olt-textfield__wrapper">
    <input class="olt-textfield__input" name="input" id="input-3" required/>
    <label class="olt-textfield__input-label" for="input-3">Input</label>
    <span class="olt-textfield__input-error-message">Field is required!</span>
</div>

<div class="olt-textfield__wrapper has-icon is-fullwidth">
    <input class="olt-textfield__input" id="input-with-icon" name="input"/>
    <label class="olt-textfield__input-label" for="input-with-icon">Input with Icon</label>
    <span class="olt-textfield__input-icon">
        <i class="material-icons">edit</i>
    </span>
</div>

<textfields-helper></textfields-helper>

````html
<div class="olt-textfield__wrapper">
    <input class="olt-textfield__input" id="input-1" name="input"/>
    <label class="olt-textfield__input-label" for="input-1">Input</label>
</div>

<div class="olt-textfield__wrapper">
    <input class="olt-textfield__input" value="123" name="input" id="input-2"/>
    <label class="olt-textfield__input-label" for="input-2">Prefilled</label>
</div>

<div class="olt-textfield__wrapper">
    <input class="olt-textfield__input" name="input" id="input-disabled" disabled/>
    <label class="olt-textfield__input-label" for="input-disabled">Disabled</label>
</div>

<div class="olt-textfield__wrapper has-info">
    <input class="olt-textfield__input" id="input-counter" name="input"/>
    <label class="olt-textfield__input-label" for="input-counter">Input with Counter</label>
    <span class="olt-textfield__input-info-right">Info Text</span>
</div>

<div class="olt-textfield__wrapper">
    <input class="olt-textfield__input" name="input" id="input-3" required/>
    <label class="olt-textfield__input-label" for="input-3">Input</label>
    <span class="olt-textfield__input-error-message">Field is required!</span>
</div>

<div class="olt-textfield__wrapper has-error-message">
    <input class="olt-textfield__input has-error" id="input-4" name="input" required/>
    <label class="olt-textfield__input-label" for="input-4">Input</label>
    <span class="olt-textfield__input-error-message">Field is required!</span>
</div>

<div class="olt-textfield__wrapper has-icon is-fullwidth">
    <input class="olt-textfield__input" id="input-with-icon" name="input"/>
    <label class="olt-textfield__input-label" for="input-with-icon">Input with Icon</label>
    <span class="olt-textfield__input-icon">
        <i class="material-icons">edit</i>
    </span>
</div>
````

### Textarea

<div class="olt-textfield__wrapper">
    <textarea class="olt-textfield__input" id="textarea-1" name="textarea"></textarea>
    <label class="olt-textfield__input-label" for="textarea-1">Textarea</label>
</div>
<div class="olt-textfield__wrapper has-info is-fullwidth">
    <textarea class="olt-textfield__input" id="textarea-disabled" name="textarea"></textarea>
    <label class="olt-textfield__input-label" for="textarea-disabled">Textarea</label>
    <span class="olt-textfield__input-info-right">Info Right</span>
</div>
<div class="olt-textfield__wrapper is-fullwidth">
    <textarea class="olt-textfield__input" id="textarea-disabled" name="textarea" disabled></textarea>
    <label class="olt-textfield__input-label" for="textarea-disabled">Textarea</label>
</div>
<div class="olt-textfield__wrapper is-fullwidth">
    <textarea class="olt-textfield__input" id="textarea-required" name="textarea" required></textarea>
    <label class="olt-textfield__input-label" for="textarea-required">Textarea</label>
    <span class="olt-textfield__input-error-message">Field is required!</span>
</div>

````html
<div class="olt-textfield__wrapper">
    <textarea class="olt-textfield__input" id="textarea-1" name="textarea"></textarea>
    <label class="olt-textfield__input-label" for="textarea-1">Textarea</label>
</div>

<div class="olt-textfield__wrapper has-info">
    <textarea class="olt-textfield__input" id="textarea-disabled" name="textarea" required></textarea>
    <label class="olt-textfield__input-label" for="textarea-disabled">Textarea</label>
    <span class="olt-textfield__input-info-right">Info Right</span>
</div>

<div class="olt-textfield__wrapper">
    <textarea class="olt-textfield__input" id="textarea-disabled" name="textarea" disabled></textarea>
    <label class="olt-textfield__input-label" for="textarea-disabled">Textarea</label>
</div>

<div class="olt-textfield__wrapper">
    <textarea class="olt-textfield__input" id="textarea-required" name="textarea" required></textarea>
    <label class="olt-textfield__input-label" for="textarea-required">Textarea</label>
    <span class="olt-textfield__input-error-message">Field is required!</span>
</div>
````