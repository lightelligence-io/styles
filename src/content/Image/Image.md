---
name: Image
category: Content
---

## Description

*Images* must be used with `<img>` elements and give any image `width: 100%`
and `height: auto` css styles. This gives harmony when an image is being used

```image.css hidden
body > div.olt-Frame { min-height: 400px; padding: 20px; }
```

```image.html
<img class="olt-Image" src="https://picsum.photos/300/100"/>
```

## Variations

### Natural

Images preserve image ratio unless the `--natural`-modifier is applied.

```natural.css hidden
body > div.olt-Frame { min-height: 100px; }
```

```natural.html
<div class="olt-u-overflowXAuto">
  <img class="olt-Image olt-Image--natural" src="https://picsum.photos/300/100"/>
</div>
```

### Round corners

*Image* also has `--round` modifier, which sets border radius of the image.

```round.css hidden
body > div.olt-Frame { min-height: 100px; }
```

```round.html
<div class="olt-u-overflowXAuto">
  <img class="olt-Image olt-Image--natural olt-Image--round" src="https://picsum.photos/300/100"/>
</div>
```
