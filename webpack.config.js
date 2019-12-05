const path = require('path');
const fs = require('fs');
const { camelize, pascalize } = require('humps');
const mode = process.env.NODE_ENV || 'development';
const context = path.resolve(__dirname, 'src');
const dest = path.resolve(__dirname, 'dist');

/**
 * Prefix used for our class names
 *
 * @type {string}
 */
const prefix = 'olt-';

/**
 * Will construct a sass variable that will hold all icons
 *
 * The icon files are positioned inside `src/icons` directory
 *
 * @returns {string}
 */
function addIconsVariable() {
  return [
    '$icons: (',
    fs
      .readdirSync(path.join(context, 'icons'))
      .map((file) => `"${file}"`)
      .join(','),
    ');',
  ].join('');
}

module.exports = {
  mode,
  context,
  entry: [path.resolve(context, 'index.scss')],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              emitFile: true,
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) =>
                [
                  require('iconfont-webpack-plugin')(loader),
                  require('postcss-custom-properties')({
                    preserve: true,
                  }),
                  require('postcss-custom-media')({
                    preserve: true,
                  }),
                  require('postcss-modules')({
                    generateScopedName(name, filename, css) {
                      if (name.startsWith('is-') || name.startsWith('has-')) {
                        // States are global
                        return name;
                      }

                      // Otherwise we want a prefix
                      return prefix + name;
                    },
                    getJSON(cssFileName, json, outputFileName) {
                      json = Object.assign(
                        {},
                        ...Object.entries(json).map(([key, value]) => ({
                          [(key.charAt(0).toUpperCase() === key.charAt(0)
                            ? pascalize
                            : camelize)(key)]: value,
                        })),
                      );

                      const filename = path.resolve(dest, 'index.js');
                      const contents = Object.entries(json)
                        .map(([key, value]) => `exports.${key} = '${value}';`)
                        .join('\n');

                      if (!fs.existsSync(dest)) {
                        fs.mkdirSync(dest);
                      }

                      fs.writeFileSync(filename, contents);

                      return json;
                    },
                  }),
                  require('autoprefixer'),
                  mode === 'production' ? require('cssnano') : undefined,
                ].filter((plugin) => !!plugin),
            },
          },
          {
            loader: 'fast-sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
              //
              // Provide additional sass code as data. So far we use this only
              // for the icons.
              //
              data: [addIconsVariable()].join('\n'),
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: './',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './'),
      path.resolve(__dirname, './node_modules'),
    ],
  },
};
