# Grid

In the old styleguide the basic grid classes were `olt-row` and `olt-col`. This has changed to the new classes `olt-Grid` and `olt-Grid-item`.

Here is a simple example based on the old styleguide, where the maximum number of columns was breakpoint-specific (mobile 4, tabled 8, desktop 12).

```
<div class="olt-row">
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-8">
        Column1
    </div>
    <div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        Column2
    </div>
	<div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        Column3
    </div>
	<div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        Column4
    </div>
	<div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        Column5
    </div>
	<div class="olt-col-mobile-4 olt-col-tablet-4 olt-col-desktop-4">
        Column6
    </div>
</div>
```

Now we have 12 columns for every breakpoint. The `olt-Grid-item` has a responsive modifier for every column definition: `olt-Grid-item--[sm-|md-|lg-|xl-]{1-12}`.

```html
<div class="olt-Grid">
    <div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
		<div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column1
		</div>
    </div>
    <div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
        <div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column2
		</div>
	</div>
	<div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
        <div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column3
		</div>
	</div>
	<div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
		<div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column4
		</div>
    </div>
    <div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
        <div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column5
		</div>
	</div>
	<div class="olt-Grid-item olt-Grid-item--12 olt-Grid-item--md-6 olt-Grid-item--lg-4">
        <div class="olt-u-backgroundColorPrimary olt-u-padding2">
			Column6
		</div>
    </div>
</div>
```

## Offsets

The old class `olt-col-mobile-offset-3` is now a responsive modifier of `Grid-item` `olt-Grid-item--[sm|md|lg|xl]-offset3`.

