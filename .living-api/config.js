const path = require('path');
const webpackConfig = require('../webpack.config');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
  title: 'LIGHTELLIGENCE® UI',
  output: 'docs',
  publicPath: isDev ? '/' : '/styleguide/',
  index: 'README.md',
  ignore: '**/Spinner.md',
  contents: {
    content: 'src/content/*/*.md',
    layout: 'src/layout/*/*.md',
    components: 'src/components/*/*.md',
    controls: 'src/controls/*/*.md',
    utilities: 'src/utils/*/*.md',
    examples: 'src/examples/**/*.md',
  },
  template: path.join(__dirname, 'template.ejs'),
  webpack: webpackConfig
};
