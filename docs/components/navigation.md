## Navbar

::: warning
The following example uses vue code to handle and change the state. This code is not part of the framework.
:::

<navbar />


```html
<div class="olt-navbar">
	<div class="olt-navbar__left hide-for-mobile-only">
		<div class="olt-navbar__item">
			<img src="../../source/assets/logo_lightelligence.svg" />
		</div>
		<a class="olt-navbar__item
			olt-navbar__item--is-button"
			>
			Personal Dashboard
		</a>
		<a class="olt-navbar__item
			olt-navbar__item--is-button"
			>
			<i class="olt-tenant-avatar">T</i>
			<span class="olt-spacing--xs-left">
				MyTenant
			</span>
			<i class="material-icons 
			olt-spacing--xs-left">keyboard_arrow_down</i>
		</a>
		<div class="olt-navbar__separator"></div>
		<a class="olt-navbar__item
			olt-navbar__item--is-button">
			Documentation
		</a>
	</div>
	<div class="olt-navbar__left show-for-mobile-only">
		<a class="olt-navbar__item
			olt-navbar__item--is-button">
			<i class="material-icons">'menu'</i>
		</a>
	</div>
	<div class="olt-navbar__center show-for-mobile-only">
		<a class="olt-navbar__item">
			<img src="../../source/assets/logo_lightelligence.svg" />
		</a>
	</div>
	<div class="olt-navbar__right">
		<a class="olt-navbar__item
			olt-navbar__item--is-button">
			<i class="olt-user-avatar">W</i>
			<span class="olt-spacing--xs-left 
				hide-for-mobile-only">
				Profile
			</span>
		</a>
		<a class="olt-navbar__item 
			olt-navbar__item--is-button 
				hide-for-mobile-only">
			Logout
		</a>
	</div>
</div>
```

The navigation bar has 3 slots for children, left, right and center. In general center is only used on mobile devices. The classes are `olt-navbar__left`, `olt-navbar__center`, `olt-navbar__right`.

Each slot contains elements of type `olt-navbar__item` or `olt-navbar__separator`. `olt-navbar__item` is a flex container which aligns its children vertical centered.

Modifiers for `olt-navbar__item`

* `--is-button` item is a button and has a pointer as cursor and a hover state.
* `--is-active` item is currently activated.


## Navbar Submenu

::: warning
The following example uses vue code to handle and change the state. This code is not part of the framework.
:::

<navbar-submenu />

```html
<div class="olt-navbar-submenu">
	<a class="olt-navbar-submenu__item">
		Dashboard
	</a>
	<a class="olt-navbar-submenu__item">
		Device Types
	</a>
	<a class="olt-navbar-submenu__item">
		Manage Devices
	</a>
	<a class="olt-navbar-submenu__item">
		Manage Users
	</a>
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
	<a class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		Personal Dashboard
	</a>
	<a v-on:click="toggleExpand()" class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		<i class="olt-tenant-avatar ">T</i>
		<span class="olt-spacing--xs-left">
			MyTenant
		</span>
		<i class="material-icons 
			olt-spacing--xs-left">keyboard_arrow_down</i>
	</a>
	<div class="olt-navdrawer__submenu" v-if="expanded">
		<a class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			Dashboard
		</a>
		<a class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			Device Types
		</a>
		<a class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			Manage Devices
		</a>
		<a class="olt-navdrawer__submenu-item 
			olt-navdrawer__submenu-item--is-button">
			Tenant Users
		</a>
	</div>
	<div class="olt-navdrawer__separator"></div>
	<a class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		Documentation
	</a>
	<a class="olt-navdrawer__item 
		olt-navdrawer__item--is-button">
		Logout
	</a>
</div>
```
### Navdrawer Classes and States

The navdrawer component is the mobile navigation component which usually slides in from the left. Every `olt-navdrawer` contains a variable number of children. These can be of type `olt-navdrawer__separator`, `olt-navdrawer__item` or `olt-navdrawer__submenu`. Each `olt-navdrawer__submenu` can contain items of type `olt-navdrawer__submenu-item`.

The `olt-navdrawer__item` and `olt-navdrawer__submenu-item` elements have the following modifiers:

* `--is-button` item is a button and has a pointer as cursor and a hover state.
* `--is-active` item is currently activated.
