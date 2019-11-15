const path = require('path');
const yaml = require('js-yaml');
const template = require('es6-template-strings');
const { decamelize, pascalize } = require('humps');
const fs = require('fs');

const mode = process.env.NODE_ENV || 'development';
const context = path.resolve(__dirname, 'src');

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
              config: {
                path: __dirname,
              },
            },
          },
          //
          // Since we need the "loader" object for the iconfont-webpack-plugin
          // and that object is not provided in the postcss.config.js we
          // have to duplicate the loader above and run it again
          //
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [require('iconfont-webpack-plugin')(loader)],
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
              transformers: [
                {
                  extensions: ['.yml'],
                  transform: () => {
                    const variables = {
                      varPrefix: 'olt-',
                      varStyle: 'camelCase',
                    };
                    const content = `\n${Object.entries(variables)
                      .map(
                        ([key, value]) => `\t$${decamelize(key)}: '${value}'`,
                      )
                      .join(';\n')}\n
                      :root {}`;

                    return content;
                  },
                },
              ],
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
