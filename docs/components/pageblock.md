# Page Blocks

A page block is just an element with padding applied. It can contain a headline and a body as children. The background and font color are applied through the olt color classes.

## Page Blocks with Headlines

<div class="olt-page-block olt-color--as-background-primary-06">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A light grey block with Text.
	</p>
</div>

<div class="olt-page-block olt-color--as-background-primary-08">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A white block with Text.
	</p>
</div>

<div class="olt-page-block olt-color--as-background-primary-04">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A grey block with Text.
	</p>
</div>

```html
<div class="olt-page-block olt-color--as-background-primary-06">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A light grey block with Text.
	</p>
</div>

<div class="olt-page-block olt-color--as-background-primary-08">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A white block with Text.
	</p>
</div>

<div class="olt-page-block olt-color--as-background-primary-04">
	<h1 class="olt-headline--m olt-page-block__headline">
		Headline
	</h1>
	<p class="olt-page-block__body olt-copy--m">
		A grey block with Text.
	</p>
</div>
```

## Page Blocks without Headlines

When you need a page block without a headline, just leave it out. The `olt-page-block__body` is optional in that case, it just removes margins from the element.

<div class="olt-page-block olt-color--as-background-primary-01">
	<p class="olt-page-block__body">
		Some Content
	</p>
</div>
<div class="olt-page-block olt-color--as-background-primary-06">
	<p class="olt-page-block__body">
		Some Content
	</p>
</div>

```html
<div class="olt-page-block olt-color--as-background-primary-01">
	<p class="olt-page-block__body">
		Some Content
	</p>
</div>
<div class="olt-page-block olt-color--as-background-primary-06">
	<p class="olt-page-block__body">
		Some Content
	</p>
</div>
```

## No padding modifiers

In some cases it's useful to get rid of a specific padding. In that case 4 modifiers exist.

* `olt-page-block--no-padding-top`
* `olt-page-block--no-padding-bottom`
* `olt-page-block--no-padding-left`
* `olt-page-block--no-padding-right`



<div class="olt-page-block
	olt-page-block--no-padding-top
	olt-color--as-background-primary-01 
	">
	<p class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-top
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-bottom
	olt-color--as-background-primary-02 
	">
	<p class="olt-page-block__body" style="background-color:rgba(255,255,255,0.2)">
		olt-page-block--no-padding-bottom
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-left
	olt-color--as-background-primary-03 
	">
	<p class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-left
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-right
	olt-color--as-background-primary-04 
	">
	<div class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-right
	</div>
</div>

```html
<div class="olt-page-block
	olt-page-block--no-padding-top
	olt-color--as-background-primary-01 
	">
	<p class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-top
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-bottom
	olt-color--as-background-primary-02 
	">
	<p class="olt-page-block__body" style="background-color:rgba(255,255,255,0.2)">
		olt-page-block--no-padding-bottom
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-left
	olt-color--as-background-primary-03 
	">
	<p class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-left
	</p>
</div>

<div class="olt-page-block
	olt-page-block--no-padding-right
	olt-color--as-background-primary-04 
	">
	<div class="olt-page-block__body" style="background-color:rgba(0,0,0,0.1)">
		olt-page-block--no-padding-right
	</div>
</div>
```