import { OltComponent } from '../olt-base/component';

const addClass = (el, cl) => {
  el.classList.add(cl);
}

const removeClass = (el, cl) => {
  el.classList.remove(cl);
}

export class OltTextfield extends OltComponent {

  initialize() {
    // Add Event Listeners
    this.listeners = [
      this.listen('focus', () => {
        this.onFocus();
      }),
      this.listen('blur', () => {
        this.onBlur();
      }),
      this.listen('focusin', () => {
        this.onFocus();
      }),
      this.listen('focusout', () => {
        this.onBlur();
      }),
    ];
    this.maybeAddFloatingLabel();
  }

  initialSyncWithDOM() {
    const element = this.root;
    this.required = element.required;
  }

  destroy() {
    super.destroy();
    this.listeners.forEach((e) => e());
    this.listeners = null;
  }

  maybeAddFloatingLabel() {
    const el = this.root;
    if (this.hasText()) {
      addClass(el, 'has-floating-label');
    }
  }

  hasText() {
    return this.root.value.length > 0;
  }



  onFocus() {
    const el = this.root;
    addClass(el, 'has-floating-label');
    addClass(el, 'is-focused');
  }

  onBlur() {
    const el = this.root;
    const hasText = this.hasText();

    if (!hasText) {
      removeClass(el, 'has-floating-label');
    }
    if (this.required) {
      if (!hasText) {
        addClass(el, 'has-error');

        addClass(el.parentElement, 'has-error-message');
      } else if (hasText) {
        removeClass(el, 'has-error');
        removeClass(el.parentElement, 'has-error-message');
      }
    }
    removeClass(el, 'is-focused');
  }
}
