---
name: White labeling
category: Getting Started
---

## Description

Lightelligence styles supports limited white labeling that can achieve the 
effect of having a feel of your application to match different corporate styles.

The white labeling feature includes changing the two major colors : 

| Color                                                | Name      | CSS Custom Property       |
|:----------------------------------------------------:|:----------|:--------------------------|
| <div class="demo-color demo-color--primary"></div>   | Primary   | `--olt-v2-colorPrimary`   |
| <div class="demo-color demo-color--secondary"></div> | Secondary | `--olt-v2-colorSecondary` |

## Exposed custom properties

The design system's colors that can be white labeled are exposed as CSS
Custom Properties. However since there are additional shades of these colors,
which are mainly a mix between white and dark. These colors are also exposed
as CSS Custom Properties. 

All those additional shades, though, can be derived by a color calculation 
between the Primary / Secondary and a black or white colors. See example
below on how to properly use the white labeling feature with JavaScript.

```css
:root {

  /**
   * The two major colors that are selectable
   */
  --olt-v2-primaryColor: #f60;
  --olt-v2-secondaryColor: #0d122c;

  /**
   * Color variations that are calculations based on the above colors.
   */
  --olt-v2-primaryColor-white-10: #fff0e6;
  --olt-v2-primaryColor-white-15: #ffe8d9;
  --olt-v2-primaryColor-white-20: #ffe0cc;
  --olt-v2-primaryColor-white-30: #ffd1b3;
  --olt-v2-primaryColor-white-40: #ffc299;
  --olt-v2-primaryColor-white-50: #ffb380;
  --olt-v2-primaryColor-white-60: #ffa366;
  --olt-v2-primaryColor-white-70: #ff944d;
  --olt-v2-primaryColor-white-80: #ff8533;
  --olt-v2-primaryColor-black-10: #1a0a00;
  --olt-v2-primaryColor-black-15: #260f00;
  --olt-v2-primaryColor-black-20: #331400;
  --olt-v2-primaryColor-black-30: #4d1f00;
  --olt-v2-primaryColor-black-40: #662900;
  --olt-v2-primaryColor-black-50: #803300;
  --olt-v2-primaryColor-black-60: #993d00;
  --olt-v2-primaryColor-black-70: #b34700;
  --olt-v2-primaryColor-black-80: #cc5200;
  --olt-v2-primaryColor-secondary-30: #562b1f;
  --olt-v2-primaryColor-secondary-40: #6e341a;
  --olt-v2-primaryColor-secondary-80: #cf5509;
  --olt-v2-secondaryColor-white-10: #e7e7ea;
  --olt-v2-secondaryColor-white-15: #dbdbdf;
  --olt-v2-secondaryColor-white-20: #cfd0d5;
  --olt-v2-secondaryColor-white-30: #b6b8c0;
  --olt-v2-secondaryColor-white-40: #9ea0ab;
  --olt-v2-secondaryColor-white-50: #868996;
  --olt-v2-secondaryColor-white-60: #6e7180;
  --olt-v2-secondaryColor-white-70: #56596b;
  --olt-v2-secondaryColor-white-80: #3d4156;
  --olt-v2-secondaryColor-black-10: #010204;
  --olt-v2-secondaryColor-black-15: #020307;
  --olt-v2-secondaryColor-black-20: #030409;
  --olt-v2-secondaryColor-black-30: #04050d;
  --olt-v2-secondaryColor-black-40: #050712;
  --olt-v2-secondaryColor-black-50: #070916;
  --olt-v2-secondaryColor-black-60: #080b1a;
  --olt-v2-secondaryColor-black-70: #090d1f;
  --olt-v2-secondaryColor-black-80: #0a0e23;
  --olt-v2-secondaryColor-secondary-30: #0d122c;
  --olt-v2-secondaryColor-secondary-40: #0d122c;
  --olt-v2-secondaryColor-secondary-80: #0d122c;

}
```

## Example

```white-labeling.css
.input--color-box {
  width: 100px;
  height: 17px;
  border-radius: 4px;
  margin-left: 15px;
  border: 2px solid white;
  display: inline-block;
}
.input--color {
  opacity: 0;
}
```

```white-labeling.js

const styles = getComputedStyle(document.documentElement);
const documentStyle = document.documentElement.style;
const primaryPicker = document.getElementById("primaryPicker");
const secondaryPicker = document.getElementById("secondaryPicker");
const primaryValue = document.getElementById("primaryValue");
const secondaryValue = document.getElementById("secondaryValue");
const primaryProperty = '--olt-v2-primaryColor';
const secondaryProperty = '--olt-v2-secondaryColor';

const mixes = [
  { 
    name: "white",
    shades: [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
  },
  { 
    name: "black",
    shades: [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
  },
  { 
    name: "secondary",
    shades: [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
  }
]

// We use https://www.github.com/bgrins/TinyColor to calculate the colors
const primaryColor = tinycolor( styles.getPropertyValue( primaryProperty ) );
const secondaryColor = tinycolor( styles.getPropertyValue( secondaryProperty ) );

primaryPicker.value = primaryColor.toHexString();
secondaryPicker.value = secondaryColor.toHexString();

function updateValues( primaryColor, secondaryColor ) {
  primaryValue.style.backgroundColor = primaryColor.toHexString();
  secondaryValue.style.backgroundColor = secondaryColor.toHexString();
}

function updateStylesheets( primaryColor, secondaryColor ) {
  documentStyle.setProperty( primaryProperty, primaryColor.toHexString() );
  documentStyle.setProperty( secondaryProperty, secondaryColor.toHexString() );
  mixes.forEach( mix => {
    const name = mix.name;
    const color = name === "secondary" ? secondaryColor : tinycolor(name);
    mix.shades.forEach( shade => {
      const mixProperty = prefix => `${prefix}-${name}-${shade * 100}`;
      const primaryMix = tinycolor.mix( color, primaryColor, shade * 100 );
      const secondaryMix = tinycolor.mix( color, secondaryColor, shade * 100 );
      const primaryPropertyName = mixProperty( primaryProperty );
      const secondaryPropertyName = mixProperty( secondaryProperty );
      documentStyle.setProperty( primaryPropertyName, primaryMix.toHexString() );
      documentStyle.setProperty( secondaryPropertyName, secondaryMix.toHexString() );
    } );
  } );
}

function update() {
  const primaryColor = tinycolor( primaryPicker.value );
  const secondaryColor = tinycolor( secondaryPicker.value );
  updateValues( primaryColor, secondaryColor );
  updateStylesheets( primaryColor, secondaryColor );
}

primaryPicker.addEventListener('change', update);
secondaryPicker.addEventListener('change', update);

update();

const darkModeToggle = document.getElementById("darkToggle");
const card = document.getElementById("card");
darkModeToggle.addEventListener('change', () => {
  const isDarkMode = darkModeToggle.checked;
  console.log( isDarkMode );
  if ( isDarkMode ) {
    card.style.backgroundColor = secondaryColor;
    card.classList.add("olt-Theme-dark");
  } else {
    card.style.backgroundColor = "#fff";
    card.classList.remove("olt-Theme-dark");
  }
} );

```

```white-labeling.html
<div class="olt-Card" id="card">
  <div class="olt-Card-content">
    <div class="olt-V2Grid">
      <div class="olt-V2Grid-item olt-V2Grid-item--4">
        <label class="olt-V2Label">
          <input class="input--color" type="color" id="primaryPicker" />
          <div class="input--color-box" id="primaryValue"></div>
          <span class="olt-V2Label-text">Primary Color</span>
        </label>
      </div>
      <div class="olt-V2Grid-item olt-V2Grid-item--4">
        <label class="olt-V2Label">
          <input class="input--color" type="color" id="secondaryPicker" />
          <div class="input--color-box" id="secondaryValue"></div>
          <span class="olt-V2Label-text">Secondary Color</span>
        </label>
      </div>
      <div class="olt-V2Grid-item olt-V2Grid-item--4">
        <label class="olt-Toggle olt-Toggle--inline">
          <input type="checkbox" id="darkToggle" />
          <div class="olt-Toggle-button"></div>
          <div class="olt-Toggle-label">Dark mode</div>
        </label>
      </div>
    </div>
    <div class="olt-V2Grid">
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
        <label class="olt-V2Label olt-V2Label--floating olt-V2Label--floating has-value">
          <input class="olt-V2Input" type="text" value="My Device" />
          <span class="olt-V2Label-text">Device Name</span>
        </label>
      </div>
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
        <label class="olt-V2Label olt-V2Label--floating olt-V2Label--floating has-value">
          <input class="olt-V2Input" type="text" value="Berlin" />
          <span class="olt-V2Label-text">Device Location</span>
        </label>
      </div>
    </div>
    <div class="olt-V2Grid">
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
         <label class="olt-V2Radio">
           <input type="radio" value="admin" name="role"/>
           <span class="olt-V2Radio-button"></span>
           <span class="olt-V2Radio-label">Admin</span>
         </label>
         <label class="olt-V2Radio">
           <input type="radio" disabled value="super_admin" name="role"/>
           <span class="olt-V2Radio-button"></span>
           <span class="olt-V2Radio-label">Super Admin</span>
         </label>
         <label class="olt-V2Radio">
           <input type="radio" checked value="writer" name="role" />
           <span class="olt-V2Radio-button"></span>
           <span class="olt-V2Radio-label">Writer</span>
         </label>
         <label class="olt-V2Radio">
           <input type="radio" value="reader" name="role"/>
           <span class="olt-V2Radio-button"></span>
           <span class="olt-V2Radio-label">Reader</span>
         </label>
      </div>
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
        <button class="olt-V2Button olt-V2Button-default">OK</button>
        <button class="olt-V2Button olt-V2Button-default olt-V2Button--tertiary olt-V2Button--action">Cancel</button>
      </div>
    </div>
    <br />
    <div class="olt-V2Grid">
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
        <div class="olt-Chip olt-Chip--primary olt-Chip--selectable">Administrator</div>
        <div class="olt-Chip olt-Chip--primary olt-Chip--selectable">Writer</div>
        <div class="olt-Chip olt-Chip--primary olt-Chip--selectable">Tenant Manager</div>
      </div>
      <div class="olt-V2Grid-item olt-V2Grid-item--6">
      </div>
    </div>
  </div>
</div>
<script src="https://unpkg.com/tinycolor2@1.4.1/dist/tinycolor-min.js"></script>
```




