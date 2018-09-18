import { OltComponent } from '../olt-base/component';

export class OltTextfield extends OltComponent {
    constructor(root) {
        super(root);
    }

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
            })
        ];
        this.maybeAddFloatingLabel();
    }

    initialSyncWithDOM () {
        const element = this.root;
        this.required = element.required;
    }

    destroy () {
        super.destroy();
        for (const e of this.listeners) {
            e();
        }
        this.listeners = null;
    }

    maybeAddFloatingLabel() {
        const el = this.root;
        if (this.hasText()) {
            this.addClass(el, 'has-floating-label');
        }
    }

    hasText() {
        return this.root.value.length > 0;
    }

    addClass (el, cl) {
        el.classList.add(cl);
    }
    removeClass (el, cl) {
        el.classList.remove(cl);
    }

    onFocus() {
        const el = this.root;
        this.addClass(el, 'has-floating-label');
        this.addClass(el, 'is-focused');
    }

    onBlur() {
        const el = this.root;
        const hasText = this.hasText();

        if (!hasText) {
            this.removeClass(el, 'has-floating-label');
        }
        if (this.required) {
            if (!hasText) {
                this.addClass(el, 'has-error');

                this.addClass(el.parentElement, 'has-error-message');
            } else if (hasText) {
                this.removeClass(el, 'has-error');
                this.removeClass(el.parentElement, 'has-error-message');
            }
        }
        this.removeClass(el, 'is-focused');
    }
}