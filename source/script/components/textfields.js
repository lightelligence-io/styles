import { Generator } from '../helpers/generator';

export default class Textfield {
    constructor(className) {
        _docReady(() => {
            this.getLocation();
            this.elementsLoaded(className);
        });
        _onDomChange(() => {
            // Needed for Web-Apps which render content dynamically without dom-reload
            const oldLocation = this.location;
            this.getLocation();
            // 
            if (this.location !== oldLocation) {
                this.elementsLoaded(className);
            }
        });
    }

    getLocation() {
        const currentLocation = window.location.href;
        const locationArr = currentLocation.split('#');
        this.location = locationArr[0];
    }

    elementsExists() {
        for (let i = 0; i < this.elements.length; i++) {
            const elementId = Generator.id();
            const elementHelperClass = `_helper-${this.className}${elementId}`;
            this.elements[i].classList.add(elementHelperClass);
            const element = document.querySelector(`.${elementHelperClass}`);

            // check if value is already existing
            this.checkForValue(element);
    
            // Event Listener
            element.onfocus = () => {
                this.onFocus(element);
            };
            element.onblur = () => {
                this.onBlur(element);
            };
            element.onfocusin = () => {
                this.onFocus(element);
            };
            element.onfocusout = () => {
                this.onBlur(element);
            };
        }
    }

    elementsLoaded(className) {
        this.elements = [];
        this.className = className;
        const checkExist = setInterval(() => {
            this.elements = document.getElementsByClassName(className);
            if (this.elements.length > 0) {
                this.elementsExists();
                clearInterval(checkExist);
            }
        }, 100);
    }

    checkForValue(el) {
        if (el.value.length > 0) {
            el.classList.add('has-floating-label');
        }
    }
    
    onFocus(el) {
        el.classList.add('has-floating-label');
        el.classList.add('is-focused');
    }
    
    onBlur(el) {
        if (el.value.length <= 0) {
            el.classList.remove('has-floating-label');
        }
        if (el.required && el.value.length === 0) {
            el.classList.add('has-error');
            el.parentElement.classList.add('has-error-message');
        } else if (el.required && el.value.length > 0) {
            el.classList.remove('has-error');
            el.parentElement.classList.remove('has-error-message');
        }
        el.classList.remove('is-focused');
    }
};

// Initialize
new Textfield('olt-textfield--input');
