const path = require('path');
const webpackConfig = require('../webpack.config');

const isProdDocs = JSON.parse(process.env.PROD_DOCS || 'false');

module.exports = {
  title: 'LIGHTELLIGENCE® UI',
  output: 'docs',
  publicPath: isProdDocs ? '/styles/' : '/',
  index: 'README.md',
  ignore: '**/Spinner.md',
  contents: {
    Core: {
      contents: {
        concepts: 'src/core/concepts.md',
        interaction: 'src/core/interaction.md',
        screen: 'src/core/screen.md',
        variables: 'src/core/variables.md'
      }
    },
    content: 'src/content/*/*.md',
    layout: 'src/layout/*/*.md',
    components: 'src/components/*/*.md',
    controls: 'src/controls/*/*.md',
    utilities: 'src/utils/*/*.md',
    examples: 'src/examples/**/*.md'
  },
  template: path.join(__dirname, 'template.ejs'),
  webpack: webpackConfig
};
