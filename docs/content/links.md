# Links

## Basic usage

<a href="#" class="olt-link">Link</a><br>
<a href="#" class="olt-link olt-link--normalize">Link</a><br>

```html
<a href="#" class="olt-link">Link</a>
<a href="#" class="olt-link olt-link--normalize">Link</a>
```


## use as container for child definition

<div class="olt-links">
  <a href="#" class="olt-link">Link</a><br>
  <a href="#">Same style without class</a><br>
</div>

```html
<div class="olt-links">
  <a href="#" class="olt-link">Link</a>
  <a href="#">Same style without class</a>
</div>
```


## use by sass for own container name

```scss
@import "/05-objects/link/_definition.scss";

.my-link-container {
  @include olt-link-childs(true, true); // for a tags and by class
}

.my-link-container-with-extras {
  // disable tag defintion and update style
  @include olt-link-childs($tag-defintion: false) {
    &:hover {
      font-weight: bold;
    }
  } 
}

.my-own-link {
  @include olt-link-core;
}

.my-own-link-soften {
  @include olt-link-core($primary-03); // please always use olt color variables
}
```
