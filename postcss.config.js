const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const template = require('es6-template-strings');
const { camelize, decamelize, pascalize } = require('humps');
const json5 = require('json5');

const mode = process.env.NODE_ENV || 'development';
const prefix = 'olt-';
const src = path.resolve(__dirname, 'src');
const dest = path.resolve(__dirname, 'dist');

const minifyEnabled = mode === 'production'; // Minify in production

module.exports = {
  plugins: [
    () => {
      // Create export directory
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
      }
    },
    require('postcss-custom-properties')({
      preserve: true
    }),
    require('postcss-custom-media')({
      preserve: true
    }),
    require('postcss-modules')({
      generateScopedName(name, filename, css) {
        if (name.startsWith('is-') || name.startsWith('has-')) {
          // States are global
          return name;
        }

        // Otherwise we want a prefix
        return prefix + name;
      },
      getJSON(cssFileName, json, outputFileName) {
        json = Object.assign({}, ...Object.entries(json).map(([ key, value ]) => ({
          [(key.charAt(0).toUpperCase() === key.charAt(0) ? pascalize : camelize)(key)]: value
        })));

        const filename = path.resolve(dest, 'components.js');
        const contents = Object.entries(json).map(([ key, value ]) => `exports.${key} = '${value}';`).join('\n');

        fs.writeFileSync(filename, contents);

        return json;
      },
    }),
    require('autoprefixer'),
    minifyEnabled && require('cssnano'),
    () => {
      // Output theme variables
      const source = fs.readFileSync(path.resolve(src, 'theme.yml'), 'utf-8');

      const theme = yaml.load(source);
      const getters = Object.assign(
        {},
        ...Object.entries(theme)
          .map(([ prop, value ]) => ({
            [prop]: typeof value === 'object'
              ? Object.assign(
                {},
                ...Object.entries(value)
                  .map(([ key, value ]) => ({
                    [key]: `var(--${prefix}${prop}${pascalize(key)})`
                  }))
              )
              : `var(--${prefix}${prop})`
          }))
      );

      const content = template(source, getters);
      const compiled = yaml.load(content);

      const json = Object.entries(compiled)
        .map(([key, value]) => {
          if (typeof value === 'object') {
            value = json5.stringify(value, null, 2);
          } else {
            if (typeof value === 'string') {
              value = value.replace(/\n$/, '');
              value = value.replace(/'/g, '\\\'');
            }
            value = `'${value}'`;
          }

          return `exports.${key} = ${value};`;
        }).join('\n');

      // Create theme.js
      fs.writeFileSync(
        path.join(dest, 'theme.js'),
        json,
        'utf-8'
      );

      // Create index.js
      fs.writeFileSync(
        path.join(dest, 'index.js'),
`const components = require('./components.js');
const theme = require('./theme.js');

module.exports = Object.assign({}, components, { theme : theme });
`,
        'utf-8'
      );
    }
  ],
};
