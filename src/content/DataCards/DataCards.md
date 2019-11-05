---
name: Data Cards
category: Content
---

## Description

*Data Cards* component can be used to show table-like content that
is represented as a list of cards on tablet and mobile. The component occupies
`olt-DataCards*` class names and must be structured with a specific layout.

```example-1.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name, Surname</div>
      <div class="olt-DataCards-headItem">Email</div>
      <div class="olt-DataCards-headItem">Roles</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Bernier, Josefina
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            bernier.josefina@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Writer</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Konopelski, Vinnie
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            konopelski.vinnie@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Reader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Howell, Bessie
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            howell.bessie@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Abernathy, Philip
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            abernathy.philip@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Administrator</div>
                <div class="olt-Tag">Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

*Data Cards* on gray background:

```example-gray.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name, Surname</div>
      <div class="olt-DataCards-headItem">Email</div>
      <div class="olt-DataCards-headItem">Roles</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Kyra Murphy
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            murphy.kyra@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Reader</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Herbig, Robin
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            herbig.robin@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Tenant Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
```example-gray.css
body {
  background: #E6E9ED;
  padding: 20px;
}
```

*Data Cards* are responsive. In desktop mode they are rendered as a table (**table mode**) and on tablet/mobile as a list of cards (**list mode**). We will refer to these modes in this document, because often modifiers or functionalities only apply to one of them.

In addition to these modes *Data Cards* have two different underlying layout systems: **flex layout** and **table layout**. They can be enabled with the corresponding modifers: `olt-DataCards--useFlexLayout` and `olt-DataCards--useTableLayout`. These modifiers do only apply when the component is in **table mode**. In **list mode** they behave exactly the same.

## Data Cards Flex Layout

With `olt-DataCards--useFlexLayout`, every card in **table mode** is rendered with the flexbox layout model.

```modifiers-flexlayout.html
<div class="olt-DataCards olt-DataCards--useFlexLayout olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">First Name</div>
      <div class="olt-DataCards-headItem">Last Name</div>
      <div class="olt-DataCards-headItem">Is Online</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Aisha
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Torphy
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Talon
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            O'Keefe
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Data Cards Table Layout

By default the *Data Cards* component uses the **flex layout** to render data cards in **table mode**. This means that rows are rendered independent from each other. One issue with this approach is that the width of every column must be defined explicitly in order to have the same space distribution on all cards. By default all columns have a `flex-basis` value of 0 which causes the available space to be distributed evenly.

In order to support more complex use cases it is possible to enable **table layout** rendering with `olt-DataCards--useTableLayout`. *Data cards* will then use the same layout model as HTML-tables. This has the advantage that every card distributes the available space equally based on a common 2-dimensional grid.

```modifiers-tablelayout.html
<div class="olt-DataCards olt-DataCards--useTableLayout olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">First Name</div>
      <div class="olt-DataCards-headItem">Last Name</div>
      <div class="olt-DataCards-headItem">Is Online</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Therese
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Nicolas
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Alexandre
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Schultz
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Modifiers (table and flex layout)

### Enforce table mode on smaller screens

*Data Cards* are responsive by default. This means that the table layout changes to a list layout on smaller screens. Sometimes it might be desirable to enforce the table layout on all screens. Use `olt-DataCards--alwaysTable` to achieve this.

```modifiers-always-table.html
<div class="olt-DataCards olt-DataCards--alwaysTable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name, Surname</div>
      <div class="olt-DataCards-headItem">Email</div>
      <div class="olt-DataCards-headItem">Roles</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            singh.mishri@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Herbig, Robin
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            herbig.robin@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Selectable cards

Cards do not react to mouse events by default. To make them behave like buttons, add the `olt-DataCards--selectable` modifier. This modifer adds proper hover states to each card.

```modifiers-selectable.html
<div class="olt-DataCards olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name, Surname</div>
      <div class="olt-DataCards-headItem">Email</div>
      <div class="olt-DataCards-headItem">Roles</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Olson, Terence
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            olson.terence@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Powlowski, Summer
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            powlowski.summer@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Tags</div>
          <div class="olt-DataCards-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Developer</div>
                <div class="olt-Tag">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
```modifiers-selectable.css
body {
  background: #E6E9ED;
  padding: 20px;
}
```

### Adjust column sizes (table mode only)

Normally all column widths are evenly distributed. By applying the classes `olt-DataCards--tableCellWidthXX` to `olt-DataCards-headItem` and `olt-DataCads-item` elements this can be customized. Valid values for `XX` are: 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90. Be careful when not using the table layout. In flex-mode (default), those modifiers have to be added to all `cardItems` and `headItems` in order to avoid a broken layout.

```modifier-table-cell-basis.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem olt-DataCards--tableCellWidth25">Name</div>
      <div class="olt-DataCards-headItem olt-DataCards--tableCellWidth50">Is Offline</div>
      <div class="olt-DataCards-headItem olt-DataCards--tableCellWidth25">Is Admin</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellWidth25">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellWidth50">
          <div class="olt-DataCards-title">Is Offline</div>
          <div class="olt-DataCards-content">
            No
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellWidth25">
          <div class="olt-DataCards-title">Is Admin</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


### Align header titles and card content (table mode only)

Header titles and contents in table mode are left aligned by default. To align them differently use `olt-DataCards--alignCenter` and `olt-DataCards--alignRight`.


```modifiers-align.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Name</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignRight">Email</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content olt-DataCards--alignCenter">
            Robin Herbig
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content olt-DataCards--alignRight">
            herbig.robin@company.com
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```




### Vertical align header titles and card content (table mode only)

Header titles and contents in table mode are middle/center aligned by default. To vertical align them differently use `olt-DataCards--verticalAlignTop` and `olt-DataCards--verticalAlignBottom`. This modifier has no effect when in list mode.

```modifiers-align-vertical-flex.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name</div>
      <div class="olt-DataCards-headItem">Email</div>
      <div class="olt-DataCards-headItem">ID</div>
      <div class="olt-DataCards-headItem">Description</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem olt-DataCards--verticalAlignTop">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content">
            Lucie Stamm
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--verticalAlignBottom">
          <div class="olt-DataCards-title">Email</div>
          <div class="olt-DataCards-content">
            lucie.stamm@company.com
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">ID</div>
          <div class="olt-DataCards-content">
            0b30f032-42f9-47bf-b359-cb2fa61d0d90
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Description</div>
          <div class="olt-DataCards-content">
            Nesciunt aut accusamus similique omnis. Labore sint mollitia aspernatur sapiente labore vitae facere commodi. Quas quisquam facilis. Quia aliquid voluptates asperiores et repellat quibusdam.

            Tempora molestiae debitis quia assumenda aut tempore tempora qui unde. Minus architecto nostrum sequi quo sit. Iste nisi ut assumenda reprehenderit minima corrupti. Nemo et veniam doloremque ex tempora eligendi dolor quod.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Displaying items more concisely (list mode only)

In **list-mode** (small screens) card items occupy the full size by default. The `olt-DataCards--halfSize` modifier decreases the item size to `50%` instead of `100%`. This allows displaying content more concise.

```modifiers-small.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name</div>
      <div class="olt-DataCards-headItem">Last Seen</div>
      <div class="olt-DataCards-headItem">Is Online</div>
      <div class="olt-DataCards-headItem">Alias</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Last Seen</div>
          <div class="olt-DataCards-content">
            Monday
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Alias</div>
          <div class="olt-DataCards-content">
            Herbig, Robin
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Conditional Content

In some circumstances it's useful to show or hide content based on the current viewing mode. For those cases use `olt-DataCards--tableOnly` and `olt-DataCards--listOnly`.

In this example we use the modifiers on cardItems:

```modifiers-table-only-list-only.html
<div class="olt-DataCards olt-DataCards--useFlexLayout">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">First Name</div>
      <div class="olt-DataCards-headItem">Last Name</div>
      <div class="olt-DataCards-headItem">Is Online</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem olt-DataCards--tableOnly">
          <div class="olt-DataCards-content">
            Singh
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableOnly">
          <div class="olt-DataCards-content">
            Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--listOnly">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

In this case they are applied to the `content` of the `cardItem`.

```modifiers-table-only-list-only-2.html
<div class="olt-DataCards olt-DataCards--useTableLayout olt-DataCards--largeCardPadding">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Status</div>
      <div class="olt-DataCards-headItem">Name / ID</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Floor</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Room</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Temperature&nbsp;<i class="olt-Icon olt-Icon--dark olt-Icon-chevron-up olt-Icon--small"></i></div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Occupancy&nbsp;<i class="olt-Icon olt-Icon--dark olt-Icon-chevron-down olt-Icon--small"></i></div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Last Motion</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Power</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Brightness</div>
      <div class="olt-DataCards-headItem olt-DataCards--alignCenter">Illuminance</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellMinimalWidth olt-DataCards--alignCenter">
          <div class="olt-DataCards-content olt-DataCards--listOnly">
            <div class="dotAndName">
              <div class="dot dot-abs"></div>
              <div class="olt-u-fontWeightBold olt-u-fontSizeMedium">CSJ0001J020143808857</div>
            </div>
            <div class="olt-u-fontMono olt-u-colorGray500">A1891</div>
          </div>
          <div class="olt-DataCards-content olt-DataCards--tableOnly">
            <div class="dot"></div>
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableOnly">
          <div class="olt-DataCards-content">
            <div class="olt-u-fontWeightBold olt-u-fontSizeMedium">CSJ0001J020143808857</div>
            <div class="olt-u-fontMono olt-u-colorGray500">A1891</div>
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Floor</div>
          <div class="olt-DataCards-content">
            11
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Room</div>
          <div class="olt-DataCards-content">
            MQQY2
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Temperature</div>
          <div class="olt-DataCards-content">
            92°F
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Occupancy</div>
          <div class="olt-DataCards-content">
            Free
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Last Motion</div>
          <div class="olt-DataCards-content">
            01:14:05 h
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Power</div>
          <div class="olt-DataCards-content">
            113.45 W
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Brightness</div>
          <div class="olt-DataCards-content">
            100%
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize olt-DataCards--alignCenter">
          <div class="olt-DataCards-title">Illuminance</div>
          <div class="olt-DataCards-content">
            500 lux
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```modifiers-table-only-list-only-2.css
.dotAndName {
  position: relative;
}
.dot-abs {
  position: absolute;
  top: 0;
  right: calc( 100% + 10px);
  margin-top:-5px;
  top:50%;

}
.dot {
  display:inline-block;
  background-color: var(--olt-colorSuccess);
  height: 10px;
  width: 10px;
  border-radius: 5px;
}
```

### Increased horizontal card padding (list mode only)

For specific cases the horizontal padding of the card can the increased with `olt-DataCards--largeCardPadding`. This has only an effect in **list-mode**.

```modifiers-large-card-padding.html
<div class="olt-DataCards olt-DataCards--largeCardPadding">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">Name</div>
      <div class="olt-DataCards-headItem">Last Seen</div>
      <div class="olt-DataCards-headItem">Is Online</div>
      <div class="olt-DataCards-headItem">Alias</div>
    </div>
    <div class="olt-DataCards-body">
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Last Seen</div>
          <div class="olt-DataCards-content">
            5 mins ago
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--halfSize">
          <div class="olt-DataCards-title">Alias</div>
          <div class="olt-DataCards-content">
            Singh34
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Modifiers (table layout only)

### Fixed table layout (table mode only)

By default **table layout** uses `auto` as value for the `table-layout` css property. This can be changed to `fixed` by using the `olt-DataCards--tableLayoutFixed` modifier. A fixed layout distributes the space between all columns evenly independent of their content. This is identical to the default behaviour of flex-mode.

```modifiers-tablelayout-fixed.html
<div class="olt-DataCards olt-DataCards--useTableLayout olt-DataCards--tableLayoutFixed olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">First Name</div>
      <div class="olt-DataCards-headItem">Last Name</div>
      <div class="olt-DataCards-headItem">Is Online</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Dagmar
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Sanford
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Lia
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Kling
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```



### Adjust Column to use minimal space (table mode only)

The **table-layout** enables additional options to control the width of card items. To decrease the size of a column to it's minimal width use `olt-DataCards--tableCellMinimalWidth` in combination with the corresponding `headItem` and `cardItem`.

```modifiers-table-minimal-width.html
<div class="olt-DataCards olt-DataCards--useTableLayout olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem olt-DataCards--tableCellMinimalWidth">Name</div>
      <div class="olt-DataCards-headItem">Description</div>
      <div class="olt-DataCards-headItem olt-DataCards--tableCellMinimalWidth olt-DataCards--alignRight">Status</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellMinimalWidth">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content">
            Considine, Kacie
          </div>
        </div>
        <div class="olt-DataCards-cardItem">
          <div class="olt-DataCards-title">Description</div>
          <div class="olt-DataCards-content">
            Sit est explicabo omnis magni vitae magni. Commodi in dolorem ut laborum facilis repudiandae quis. Quos minus quia quis quidem. Dicta eum possimus. Quis voluptatibus omnis unde. Tempora numquam aut.
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableCellMinimalWidth olt-DataCards--alignRight">
          <div class="olt-DataCards-title">Status</div>
          <div class="olt-DataCards-content">
            Online
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Fixing table layout quirks (table mode only)

Using `olt-DataCards--listOnly` on the last item of a card could lead to a visual glitch in combination with `olt-DataCards--useTableLayout`. The right border of a card is not applied correctly because it's impossible with css-only to figure out the last **visible** item inside of a card. For such cases the `olt-DataCards--lastTableItem` modifier exists. An `olt-DataCards-cardItem` with this modifier is styled in the same way as the last element of the row and therefor fixes the glitch.

There is an equivalent `olt-DataCards--firstTableItem` modifier. It fixes the same glitch for the first visual element of a card. In contrast to the last item the usage of this modifier is rarely required, because common cases are already applied via css.


```tablelayout-test.html
<div class="olt-DataCards olt-DataCards--useTableLayout olt-DataCards--selectable">
  <div class="olt-DataCards-frame">
    <div class="olt-DataCards-head">
      <div class="olt-DataCards-headItem">First Name</div>
      <div class="olt-DataCards-headItem">Last Name</div>
      <div class="olt-DataCards-headItem">Is Online</div>
    </div>
    <div class="olt-DataCards-body">

      <div class="olt-DataCards-card">

        <div class="olt-DataCards-cardItem olt-DataCards--listOnly">
          <div class="olt-DataCards-title">Name</div>
          <div class="olt-DataCards-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableOnly">
          <div class="olt-DataCards-title">First Name</div>
          <div class="olt-DataCards-content">
            Singh
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--tableOnly">
          <div class="olt-DataCards-title">Last Name</div>
          <div class="olt-DataCards-content">
            Mishri
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--lastTableItem">
          <div class="olt-DataCards-title">Is Online</div>
          <div class="olt-DataCards-content">
            Yes
          </div>
        </div>
        <div class="olt-DataCards-cardItem olt-DataCards--listOnly">
          <div class="olt-DataCards-title">Test</div>
          <div class="olt-DataCards-content">
            Test Last
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
