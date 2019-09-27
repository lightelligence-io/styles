const path = require('path');
const { sync: glob } = require('glob');
const yaml = require('js-yaml');
const template = require('es6-template-strings');
const { decamelize, pascalize } = require('humps');

const mode = process.env.NODE_ENV || 'development';
const context = path.resolve(__dirname, 'src');

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
          {
            loader: 'extract-loader',
          },
        ].concat([
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                path: __dirname,
              },
            },
          },
          {
            loader: 'fast-sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
              transformers: [
                {
                  extensions: ['.yml'],
                  transform: (source) => {
                    const theme = yaml.load(source);
                    const getters = Object.assign(
                      {},
                      ...Object.entries(theme).map(([prop, value]) => ({
                        [prop]:
                          typeof value === 'object'
                            ? Object.assign(
                                {},
                                ...Object.entries(value).map(
                                  ([key, value]) => ({
                                    [key]: `#{var-get('${prop}${pascalize(
                                      key,
                                    )}')}`,
                                  }),
                                ),
                              )
                            : `#{var-get('${prop}')}`,
                      })),
                    );
                    const variables = {
                      varPrefix: 'olt-',
                      varStyle: 'camelCase',
                    };
                    const content = `\n${Object.entries(variables)
                      .map(
                        ([key, value]) => `\t$${decamelize(key)}: '${value}'`,
                      )
                      .join(';\n')}\n:root {\n${Object.entries(theme)
                      .map(([key, value]) => {
                        value =
                          typeof value === 'object'
                            ? `(\n${Object.entries(value)
                                .map(([key, value]) => `\t\t${key}: ${value}`)
                                .join(',\n')}\n)`
                            : `${value}`;
                        value = template(value, getters);

                        return `\t@include var-set('${key}', ${value})`;
                      })
                      .join(';\n')}}`;

                    return content;
                  },
                },
              ],
            },
          },
        ]),
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: context,
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
      {
        test: require.resolve(
          path.resolve(context, 'components/Navbar/lightelligence.svg'),
        ),
        use: [
          {
            loader: 'svg-url-loader',
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
