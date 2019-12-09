---
name: Notification
category: Component
---

## Description

The *Notification* is used to show a message on the bottom of the screen.
It occupies the `olt-NotificationContainer` and `olt-Notification*` class names,
with `olt-NotificationContainer` being the container element holding the stack
of notifications.

On larger screens notifications are placed on the bottom right, on small devices
only the header is displayed bottom-centered with full width. Notifications can
stack up if they are not closed manually within a very short time. A
notification that is not closed manually should hide automatically after a short
time. For implementing the logic behind the visibility of the Notifications
please use JavaScript ( check "Related JavaScript" section below for a demo ).

<div class="olt-Card olt-u-padding24">
  <div class="olt-u-marginAuto">
    <button class="olt-Button" onclick={showNotifications()}>Demo</button>
 </div>
</div>

<div class="olt-NotificationContainer">
    <div class="olt-Notification olt-Notification--error">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">An Error Occurred</header>
            <div class="olt-Notification-content">
                Everything went well ... and more. This is a long text to see how the notification grows, when the text gets longer ... and it looks good!
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
    <div class="olt-Notification olt-Notification--success">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">This is a Notification</header>
            <div class="olt-Notification-content">
                Everything went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
</div>

## Notification Types

Like the modals the notifications got different color themes for various use cases. Depending on the use case a fitting color and icon is used.

- Info - e.g. new information became available
- Success - e.g. an action has successfully been completed
- Warning - e.g. something has not been configured correctly
- Error - e.g. communication has been interrupted

Respectively, we support the following modifiers :

- `olt-Notification--info`
- `olt-Notification--success`
- `olt-Notification--warning`
- `olt-Notification--error`

These different types will look as follows:

```types.html
<!-- style="..." has only been added to make this example work in iframe.
DON'T USE IN PRODUCTION!! -->
<div class="olt-NotificationContainer" style="position: relative; margin: 10px;">
    <div class="olt-Notification olt-Notification--info is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Info Notification</header>
            <div class="olt-Notification-content">
                Everything went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
    <div class="olt-Notification olt-Notification--success is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Success Notification</header>
            <div class="olt-Notification-content">
                It was a great success.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
    <div class="olt-Notification olt-Notification--warning is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Warning Notification</header>
            <div class="olt-Notification-content">
                I am warning you!
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
    <div class="olt-Notification olt-Notification--error is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Error Notification</header>
            <div class="olt-Notification-content">
                Houston we have a problem.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
</div>
```

```html
<div class="olt-NotificationContainer">
    <div class="olt-Notification olt-Notification--info">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Info Notification</header>
            <div class="olt-Notification-content">
                Everything went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
    <div class="olt-Notification olt-Notification--error">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Error Notification</header>
            <div class="olt-Notification-content">
                Nothing went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close">
            <i class="olt-Icon olt-Icon--medium olt-Icon-close"></i>
        </button>
    </div>
</div>

```

## States

A *Notification* is hidden by default. It can be rendered by adding `is-open`
state class at the main element. It will appear inside the
*NotificationContainer*, which is rendered at the bottom right of the page.

```html
<div class="olt-NotificationContainer">
    <div class="olt-Notification olt-Notification--info is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Info Notification</header>
            <div class="olt-Notification-content">
                Everything went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close" />
    </div>
    <div class="olt-Notification olt-Notification--error is-open">
        <div class="olt-Notification-dialog">
            <header class="olt-Notification-header">Error Notification</header>
            <div class="olt-Notification-content">
                Nothing went well.
            </div>
        </div>
        <button type='button' class="olt-Notification-close" />
    </div>
</div>
```

## Related Javascript

The following JS snippet is used to show, hide and close notifications for the demo in this guide.

```show_and_hide.js
<script>

  /**
   * Adds closing functionality for a notification
   */
  /**
   * Add closing functionality for a notification
   */
  window.addEventListener('load', () => {
    document
      .querySelectorAll('div.olt-Notification')
      .forEach((notificationEl) => {
        const closeEl = notificationEl.querySelector(
          'button.olt-Notification-close',
        );
        if (closeEl) {
          closeEl.addEventListener('click', () => {
            notificationEl.classList.remove('is-open');
            notificationEl.style.display = 'none';
          });
        }
      });
  });

  /**
   * Adds demo functionality to show stack of notifications
   */
  showNotifications = () => {
    const notificationsList = [
      ...document.querySelector('div.olt-NotificationContainer').children,
    ].reverse();
    notificationsList.forEach((notification, index) => {
      notification.style.display = '';
      setTimeout(() => {
        notification.classList.add('is-open');
      }, 1000 * index);
      setTimeout(() => {
        notification.style.display = 'none';
        notification.classList.remove('is-open');
      }, 3000 + 1000 * index);
    });
  };
</script>
```
