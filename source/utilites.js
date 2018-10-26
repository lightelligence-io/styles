/* eslint-disable */
import { OltTextfield } from './script/olt-textfield';

const defaultConfig = {
  bindToNode: true, // bind component to node
  bindKey: '__olt-component',
};

const mappingComponents = [
  { selector: '.olt-textfield__input', component: OltTextfield },
];

/**
 * bind framework component to dom
 *
 * @param root
 * @param config
 * @returns {Array}
 *
 * @example
 *  bind(document.body);
 */
function bind(root = null, config = {}) {
  root = root || document;
  config = Object.assign({ mappingComponents }, defaultConfig, config);

  if (!root || typeof root.querySelectorAll !== 'function') {
    throw new Error('Root not support child selection');
  }

  const bindings = [];

  config.mappingComponents.forEach((mapping) => {
    const nodes = root.querySelectorAll(mapping.selector);

    Array.from(nodes).forEach((node) => {
      let component = null;

      // check if already binded
      if (node[config.bindKey]) {
        component = node[config.bindKey];
      } else {
        component = new mapping.component(node);
      }

      if (config.bindToNode) {
        node[config.bindKey] = component;
      }

      bindings.push({
        node,
        component,
      });
    });
  });

  return bindings;
}

export { mappingComponents, bind };
