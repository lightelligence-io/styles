---
name: Card Table
category: Content
---

## Description

The *CardTable* component can be used to show table-like content that
is represented as a list of cards on tablet and mobile. The component occupies
`olt-CardTable*` class names and must be structured with a specific layout.

```example-1.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name, Surname</div>
      <div class="olt-CardTable-headItem">Email</div>
      <div class="olt-CardTable-headItem">Roles</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Bernier, Josefina
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            bernier.josefina@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Writer</div>
                <div class="olt-Chip">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Konopelski, Vinnie
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            konopelski.vinnie@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Reader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Howell, Bessie
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            howell.bessie@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Abernathy, Philip
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            abernathy.philip@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Administrator</div>
                <div class="olt-Chip">Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

*Card Table* on gray background:

```example-gray.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name, Surname</div>
      <div class="olt-CardTable-headItem">Email</div>
      <div class="olt-CardTable-headItem">Roles</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Kyra Murphy
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            murphy.kyra@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Reader</div>
                <div class="olt-Chip">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Herbig, Robin
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            herbig.robin@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Tenant Manager</div>
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

*Card Table* are responsive. In desktop mode they are rendered as a table (**table mode**) and on tablet/mobile as a list of cards (**list mode**). We will refer to these modes in this document, because often modifiers or functionalities only apply to one of them.

In addition to these modes *Card Table* have two different underlying layout systems: **flex layout** and **table layout**. They can be enabled with the corresponding modifers: `olt-CardTable--useFlexLayout` and `olt-CardTable--useTableLayout`. These modifiers do only apply when the component is in **table mode**. In **list mode** they behave exactly the same.

## Card Table Flex Layout

With `olt-CardTable--useFlexLayout`, every card in **table mode** is rendered with the flexbox layout model.

```modifiers-flexlayout.html
<div class="olt-CardTable olt-CardTable--useFlexLayout olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">First Name</div>
      <div class="olt-CardTable-headItem">Last Name</div>
      <div class="olt-CardTable-headItem">Is Online</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Aisha
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Torphy
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Talon
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            O'Keefe
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Card Table Table Layout

By default the *Card Table* component uses the **flex layout** to render data cards in **table mode**. This means that rows are rendered independent from each other. One issue with this approach is that the width of every column must be defined explicitly in order to have the same space distribution on all cards. By default all columns have a `flex-basis` value of 0 which causes the available space to be distributed evenly.

In order to support more complex use cases it is possible to enable **table layout** rendering with `olt-CardTable--useTableLayout`. *Data cards* will then use the same layout model as HTML-tables. This has the advantage that every card distributes the available space equally based on a common 2-dimensional grid.

```modifiers-tablelayout.html
<div class="olt-CardTable olt-CardTable--useTableLayout olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">First Name</div>
      <div class="olt-CardTable-headItem">Last Name</div>
      <div class="olt-CardTable-headItem">Is Online</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Therese
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Nicolas
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Alexandre
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Schultz
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
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

*Card Table* are responsive by default. This means that the table layout changes to a list layout on smaller screens. Sometimes it might be desirable to enforce the table layout on all screens. Use `olt-CardTable--alwaysTable` to achieve this.

```modifiers-always-table.html
<div class="olt-CardTable olt-CardTable--alwaysTable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name, Surname</div>
      <div class="olt-CardTable-headItem">Email</div>
      <div class="olt-CardTable-headItem">Roles</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            singh.mishri@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Herbig, Robin
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            herbig.robin@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Tenant Manager</div>
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

Cards do not react to mouse events by default. To make them behave like buttons, add the `olt-CardTable--selectable` modifier. This modifer adds proper hover states to each card.

```modifiers-selectable.html
<div class="olt-CardTable olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name, Surname</div>
      <div class="olt-CardTable-headItem">Email</div>
      <div class="olt-CardTable-headItem">Roles</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Olson, Terence
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            olson.terence@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Tenant Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Powlowski, Summer
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            powlowski.summer@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Tags</div>
          <div class="olt-CardTable-content">
            <div class="olt-FloatingList">
              <div class="olt-FloatingList-items">
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Developer</div>
                <div class="olt-Chip">Tenant Manager</div>
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

Normally all column widths are evenly distributed. By applying the classes `olt-CardTable--tableCellWidthXX` to `olt-CardTable-headItem` and `olt-DataCads-item` elements this can be customized. Valid values for `XX` are: 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90. Be careful when not using the table layout. In flex-mode (default), those modifiers have to be added to all `cardItems` and `headItems` in order to avoid a broken layout.

```modifier-table-cell-basis.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem olt-CardTable--tableCellWidth25">Name</div>
      <div class="olt-CardTable-headItem olt-CardTable--tableCellWidth50">Is Offline</div>
      <div class="olt-CardTable-headItem olt-CardTable--tableCellWidth25">Is Admin</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellWidth25">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellWidth50">
          <div class="olt-CardTable-title">Is Offline</div>
          <div class="olt-CardTable-content">
            No
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellWidth25">
          <div class="olt-CardTable-title">Is Admin</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


### Align header titles and card content (table mode only)

Header titles and contents in table mode are left aligned by default. To align them differently use `olt-CardTable--alignCenter` and `olt-CardTable--alignRight`.


```modifiers-align.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Name</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignRight">Email</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content olt-CardTable--alignCenter">
            Robin Herbig
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content olt-CardTable--alignRight">
            herbig.robin@company.com
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```




### Vertical align header titles and card content (table mode only)

Header titles and contents in table mode are middle/center aligned by default. To vertical align them differently use `olt-CardTable--verticalAlignTop` and `olt-CardTable--verticalAlignBottom`. This modifier has no effect when in list mode.

```modifiers-align-vertical-flex.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name</div>
      <div class="olt-CardTable-headItem">Email</div>
      <div class="olt-CardTable-headItem">ID</div>
      <div class="olt-CardTable-headItem">Description</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem olt-CardTable--verticalAlignTop">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content">
            Lucie Stamm
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--verticalAlignBottom">
          <div class="olt-CardTable-title">Email</div>
          <div class="olt-CardTable-content">
            lucie.stamm@company.com
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">ID</div>
          <div class="olt-CardTable-content">
            0b30f032-42f9-47bf-b359-cb2fa61d0d90
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Description</div>
          <div class="olt-CardTable-content">
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

In **list-mode** (small screens) card items occupy the full size by default. The `olt-CardTable--halfSize` modifier decreases the item size to `50%` instead of `100%`. This allows displaying content more concise.

```modifiers-small.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name</div>
      <div class="olt-CardTable-headItem">Last Seen</div>
      <div class="olt-CardTable-headItem">Is Online</div>
      <div class="olt-CardTable-headItem">Alias</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Last Seen</div>
          <div class="olt-CardTable-content">
            Monday
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Alias</div>
          <div class="olt-CardTable-content">
            Herbig, Robin
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Conditional Content

In some circumstances it's useful to show or hide content based on the current viewing mode. For those cases use `olt-CardTable--tableOnly` and `olt-CardTable--listOnly`.

In this example we use the modifiers on cardItems:

```modifiers-table-only-list-only.html
<div class="olt-CardTable olt-CardTable--useFlexLayout">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">First Name</div>
      <div class="olt-CardTable-headItem">Last Name</div>
      <div class="olt-CardTable-headItem">Is Online</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem olt-CardTable--tableOnly">
          <div class="olt-CardTable-content">
            Singh
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableOnly">
          <div class="olt-CardTable-content">
            Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--listOnly">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
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
<div class="olt-CardTable olt-CardTable--useTableLayout olt-CardTable--largeCardPadding">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Status</div>
      <div class="olt-CardTable-headItem">Name / ID</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Floor</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Room</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Temperature&nbsp;<i class="olt-Icon olt-Icon--dark olt-Icon-chevron-up olt-Icon--small"></i></div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Occupancy&nbsp;<i class="olt-Icon olt-Icon--dark olt-Icon-chevron-down olt-Icon--small"></i></div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Last Motion</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Power</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Brightness</div>
      <div class="olt-CardTable-headItem olt-CardTable--alignCenter">Illuminance</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellMinimalWidth olt-CardTable--alignCenter">
          <div class="olt-CardTable-content olt-CardTable--listOnly">
            <div class="dotAndName">
              <div class="dot dot-abs"></div>
              <div class="olt-u-fontWeightBold olt-u-fontSizeMedium">CSJ0001J020143808857</div>
            </div>
            <div class="olt-u-fontMono olt-u-colorGray500">A1891</div>
          </div>
          <div class="olt-CardTable-content olt-CardTable--tableOnly">
            <div class="dot"></div>
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableOnly">
          <div class="olt-CardTable-content">
            <div class="olt-u-fontWeightBold olt-u-fontSizeMedium">CSJ0001J020143808857</div>
            <div class="olt-u-fontMono olt-u-colorGray500">A1891</div>
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Floor</div>
          <div class="olt-CardTable-content">
            11
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Room</div>
          <div class="olt-CardTable-content">
            MQQY2
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Temperature</div>
          <div class="olt-CardTable-content">
            92°F
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Occupancy</div>
          <div class="olt-CardTable-content">
            Free
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Last Motion</div>
          <div class="olt-CardTable-content">
            01:14:05 h
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Power</div>
          <div class="olt-CardTable-content">
            113.45 W
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Brightness</div>
          <div class="olt-CardTable-content">
            100%
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize olt-CardTable--alignCenter">
          <div class="olt-CardTable-title">Illuminance</div>
          <div class="olt-CardTable-content">
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

For specific cases the horizontal padding of the card can the increased with `olt-CardTable--largeCardPadding`. This has only an effect in **list-mode**.

```modifiers-large-card-padding.html
<div class="olt-CardTable olt-CardTable--largeCardPadding">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">Name</div>
      <div class="olt-CardTable-headItem">Last Seen</div>
      <div class="olt-CardTable-headItem">Is Online</div>
      <div class="olt-CardTable-headItem">Alias</div>
    </div>
    <div class="olt-CardTable-body">
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Last Seen</div>
          <div class="olt-CardTable-content">
            5 mins ago
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--halfSize">
          <div class="olt-CardTable-title">Alias</div>
          <div class="olt-CardTable-content">
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

By default **table layout** uses `auto` as value for the `table-layout` css property. This can be changed to `fixed` by using the `olt-CardTable--tableLayoutFixed` modifier. A fixed layout distributes the space between all columns evenly independent of their content. This is identical to the default behaviour of flex-mode.

```modifiers-tablelayout-fixed.html
<div class="olt-CardTable olt-CardTable--useTableLayout olt-CardTable--tableLayoutFixed olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">First Name</div>
      <div class="olt-CardTable-headItem">Last Name</div>
      <div class="olt-CardTable-headItem">Is Online</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Dagmar
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Sanford
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Lia
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Kling
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```



### Adjust Column to use minimal space (table mode only)

The **table-layout** enables additional options to control the width of card items. To decrease the size of a column to it's minimal width use `olt-CardTable--tableCellMinimalWidth` in combination with the corresponding `headItem` and `cardItem`.

```modifiers-table-minimal-width.html
<div class="olt-CardTable olt-CardTable--useTableLayout olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem olt-CardTable--tableCellMinimalWidth">Name</div>
      <div class="olt-CardTable-headItem">Description</div>
      <div class="olt-CardTable-headItem olt-CardTable--tableCellMinimalWidth olt-CardTable--alignRight">Status</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellMinimalWidth">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content">
            Considine, Kacie
          </div>
        </div>
        <div class="olt-CardTable-cardItem">
          <div class="olt-CardTable-title">Description</div>
          <div class="olt-CardTable-content">
            Sit est explicabo omnis magni vitae magni. Commodi in dolorem ut laborum facilis repudiandae quis. Quos minus quia quis quidem. Dicta eum possimus. Quis voluptatibus omnis unde. Tempora numquam aut.
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableCellMinimalWidth olt-CardTable--alignRight">
          <div class="olt-CardTable-title">Status</div>
          <div class="olt-CardTable-content">
            Online
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Fixing table layout quirks (table mode only)

Using `olt-CardTable--listOnly` on the last item of a card could lead to a visual glitch in combination with `olt-CardTable--useTableLayout`. The right border of a card is not applied correctly because it's impossible with css-only to figure out the last **visible** item inside of a card. For such cases the `olt-CardTable--lastTableItem` modifier exists. An `olt-CardTable-cardItem` with this modifier is styled in the same way as the last element of the row and therefor fixes the glitch.

There is an equivalent `olt-CardTable--firstTableItem` modifier. It fixes the same glitch for the first visual element of a card. In contrast to the last item the usage of this modifier is rarely required, because common cases are already applied via css.


```tablelayout-test.html
<div class="olt-CardTable olt-CardTable--useTableLayout olt-CardTable--selectable">
  <div class="olt-CardTable-frame">
    <div class="olt-CardTable-head">
      <div class="olt-CardTable-headItem">First Name</div>
      <div class="olt-CardTable-headItem">Last Name</div>
      <div class="olt-CardTable-headItem">Is Online</div>
    </div>
    <div class="olt-CardTable-body">

      <div class="olt-CardTable-card">

        <div class="olt-CardTable-cardItem olt-CardTable--listOnly">
          <div class="olt-CardTable-title">Name</div>
          <div class="olt-CardTable-content">
            Singh, Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableOnly">
          <div class="olt-CardTable-title">First Name</div>
          <div class="olt-CardTable-content">
            Singh
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--tableOnly">
          <div class="olt-CardTable-title">Last Name</div>
          <div class="olt-CardTable-content">
            Mishri
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--lastTableItem">
          <div class="olt-CardTable-title">Is Online</div>
          <div class="olt-CardTable-content">
            Yes
          </div>
        </div>
        <div class="olt-CardTable-cardItem olt-CardTable--listOnly">
          <div class="olt-CardTable-title">Test</div>
          <div class="olt-CardTable-content">
            Test Last
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
