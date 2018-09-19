## Navbar

::: warning
The following example uses vue code to handle and change the state. This code is not part of the framework.
:::

<navbar />


```html
<div class="olt-navbar">
	<div class="olt-navbar__left hide-for-mobile-only">
		<div class="olt-navbar__item">
			<div class="olt-navbar__item-body">
				<img src="../../source/assets/logo_lightelligence.svg" />
			</div>
		</div>
		<div class="olt-navbar__item
			olt-navbar__item--is-button"
			>
			<div class="olt-navbar__item-body">
				Personal Dashboard
			</div>
		</div>
		<div class="olt-navbar__item
			olt-navbar__item--is-button"
			>
			<div class="olt-navbar__item-body">
				<i class="olt-tenant-avatar">T</i>
				<span class="olt-navbar__item-icon-label">
					MyTenant
				</span>
				<span class="olt-navbar__item-toggle">
					<i class="material-icons">keyboard_arrow_down</i>
				</span>
			</div>
		</div>
		<div class="olt-navbar__separator"></div>
		<div class="olt-navbar__item
			olt-navbar__item--is-button">
			<div class="olt-navbar__item-body">
				Documentation
			</div>
		</div>
	</div>
	<div class="olt-navbar__left show-for-mobile-only">
		<div class="olt-navbar__item
			olt-navbar__item--is-button">
			<div class="olt-navbar__item-body">
				<i class="material-icons">'menu'</i>
			</div>
		</div>
	</div>
	<div class="olt-navbar__center show-for-mobile-only">
		<div class="olt-navbar__item">
			<div class="olt-navbar__item-body">
				<img src="../../source/assets/logo_lightelligence.svg" />
			</div>
		</div>
	</div>
	<div class="olt-navbar__right">
		<div class="olt-navbar__item
			olt-navbar__item--is-button">
			<div class="olt-navbar__item-body">
				<i class="olt-user-avatar">W</i>
				<span class="olt-navbar__item-icon-label 
					hide-for-mobile-only">
					Profile
				</span>
			</div>
		</div>
		<div class="olt-navbar__item 
			olt-navbar__item--is-button 
				hide-for-mobile-only">
			<div class="olt-navbar__item-body">
			Logout
			</div>
		</div>
	</div>
</div>
```

The navigation bar has 3 slots for children, left, right and center. In general center is only used on mobile devices. The classes are `olt-navbar__left`, `olt-navbar__center`, `olt-navbar__right`.

Each slot contains elements of type `olt-navbar__item` or `olt-navbar__separator`, each item has a `olt-navbar__item-body` child which adds padding to the item. 

Modifiers for `olt-navbar__item`

* `--is-button` item is a button and has a cursor as pointer and a hover state.
* `--is-active` item is currently activated.


## Navbar Submenu

::: warning
The following example uses vue code to handle and change the state. This code is not part of the framework.
:::

<navbar-submenu />

```html
<div class="olt-navbar-submenu">
	<div class="olt-navbar-submenu__item">
		Dashboard
	</div>
	<div class="olt-navbar-submenu__item">
		Device Types
	</div>
	<div class="olt-navbar-submenu__item">
		Manage Devices
	</div>
	<div class="olt-navbar-submenu__item">
		Manage Users
	</div>
</div>
```

The navbar submenu is meant to be used with the `navbar` together, but this framework only provides the styling for the submenu.
A submenu is defined by the class `olt-navbar-submenu`. It contains children with the class `olt-navbar-submenu__item`.

Modifiers for `olt-navbar-submenu__item`

* `--is-active` item is currently activated.


## Navdrawer

::: warning
The following example uses vue code to handle and change the state. This code is not part of the framework.
:::

<navdrawer />

```html
<div class="olt-navdrawer">
	<div class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		<div class="olt-navdrawer__item-body">
			Personal Dashboard
		</div>
	</div>
	<div v-on:click="toggleExpand()" class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		<div class="olt-navdrawer__item-body">
			<span class="olt-navdrawer__item-icon">
				<i class="olt-tenant-avatar ">T</i>
			</span>
			<span class="olt-navdrawer__item-icon-label">
				MyTenant
			</span>
			<span class="olt-navdrawer__item-toggle">
				<i class="material-icons">keyboard_arrow_down</i>
			</span>
		</div>
	</div>
	<div class="olt-navdrawer__submenu" v-if="expanded">
		<div class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			<div class="olt-navdrawer__submenu-item-body">
				Dashboard
			</div>
		</div>
		<div class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			<div class="olt-navdrawer__submenu-item-body">
				Device Types
			</div>
		</div>
		<div class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			<div class="olt-navdrawer__submenu-item-body">
				Manage Devices
			</div>
		</div>
		<div class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			<div class="olt-navdrawer__submenu-item-body">
				Tenant Users
			</div>
		</div>
	</div>
	<div class="olt-navdrawer__separator"></div>
	<div class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		<div class="olt-navdrawer__item-body">
			Documentation
		</div>
	</div>
	<div class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		<div class="olt-navdrawer__item-body">
			Logout
		</div>
	</div>
</div>
```
### Navdrawer Classes and States

The navdrawer component is the mobile navigation component which usually slides in from the left. Every `olt-navdrawer` contains a variable number of children of type `olt-navdrawer__separator`, `olt-navdrawer__item` and `olt-navdrawer__submenu`. Each `olt-navdrawer__submenu` can contain items of type `olt-navdrawer__submenu-item`.

The `olt-navdrawer__item` and `olt-navdrawer__submenu-item` elements have the following modifiers:

* `--is-button` item is a button and has a cursor as pointer and a hover state.
* `--is-active` item is currently activated.

Items can contain an icon, in that case you should add a `olt-navdrawer__item-icon-label` which adds spacing between the icon and the label. 
for toggle buttons you can add an icon wrapped in an element of type `olt-navdrawer__item-toggle`.
