export class OltComponent {
  constructor(root) {
    this.root = root;
    this.initialize();
    this.initialSyncWithDOM();
  }

  /**
   * Initialize the component, add listeners, add initial classes.
   */
  initialize() {} /* eslint-disable-line class-methods-use-this */

  /**
   * Initialize the internal component state based on the DOM-Element.
   * Don't change the dom here, just read from it.
   */
  initialSyncWithDOM() {} /* eslint-disable-line class-methods-use-this */

  /**
   * execute cleanup, remove listeners etc.
   */
  destroy() {} /* eslint-disable-line class-methods-use-this */

  /**
   *
   * Removes a n eventlistener
   * @param {string} evtType
   * @param {event->void} handler
   */
  unlisten(evtType, handler) {
    this.root.removeEventListener(evtType, handler);
  }

  /**
   *
   * Adds an eventlistener and returns a function to remove it.
   * @param {string} evtType
   * @param {event->void} handler
   */
  listen(evtType, handler) {
    this.root.addEventListener(evtType, handler);
    return () => this.unlisten(evtType, handler);
  }
}
