const path = require('path');
const { sync: glob } = require('glob');

const mode = process.env.NODE_ENV || 'development';
const context = path.resolve(__dirname, 'src');

const browsers = [
  'last 2 versions',
  'safari >= 7'
];

module.exports = {
  mode,
  context,
  entry:  [
    path.resolve(context, 'index.scss')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env', {
              targets: {
                browsers
              }
            }
          ]
        ],
        plugins: [
          "@babel/plugin-transform-spread"
        ]
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: (mode === 'production'
        ? [{
            loader: "file-loader",
            options: {
              name: "[name].css",
              emitFile: true
            }
          }, {
            loader: 'extract-loader'
          }]
        : [{
          loader: 'style-loader'
        }]).concat([
          {
            loader: 'css-loader'
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                path: __dirname
              }
            }
          }, {
            loader: 'fast-sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules')
              ]
            }
          }
        ])
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      exclude: context,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      }]
    }, {
      test: require.resolve(path.resolve(context, 'components/Navbar/lightelligence.svg')),
      use: [{
        loader: 'svg-url-loader'
      }]
    }]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './'),
      path.resolve(__dirname, './node_modules'),
    ]
  },
  /*optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/](node_modules)[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: 5
        },
        svgxuse: {
          test: /svgxuse/,
          name: "svgxuse",
          chunks: "all",
          priority: 10
        }
      }
    }
  }*/
};
