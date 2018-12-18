const path = require('path');

module.exports = {
  title: 'LIGHTELLIGENCE® UI',
  output: 'docs',
  publicPath: '/',
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
  webpack: require('../webpack.config.js')
};
