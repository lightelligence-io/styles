const path = require('path');

module.exports = {
  title: 'LIGHTELLIGENCE® UI',
  context: path.join(__dirname, '../src'),
  output: 'docs',
  entry: '**/*.md',
  template: path.join(__dirname, 'template.ejs'),
  webpack: require('../webpack.config.js'),
  navigation: {
    items: [
      {
        label: 'Introduction',
        path: '/',
        items: []
      },
      {
        label: 'Layout',
        items: [
          {
            label: 'Frame',
            path: '/layout/Frame/Frame.html',
            items: []
          },
          {
            label: 'Container',
            path: '/layout/Container/Container.html',
            items: []
          },
          {
            label: 'Grid',
            path: '/layout/Grid/Grid.html',
            items: []
          }
        ]
      }, {
        label: 'Content',
        items: [
          {
            label: 'Image',
            path: '/content/Image/Image.html',
            items: []
          },
          {
            label: 'List',
            path: '/content/List/List.html',
            items: []
          },
          {
            label: 'Link',
            path: '/content/Link/Link.html',
            items: []
          }, {
            label: 'Table',
            path: '/content/Table/Table.html',
            items: []
          }, {
            label: 'Paragraph',
            path: '/content/Paragraph/Paragraph.html',
            items: []
          }, {
            label: 'Headline',
            path: '/content/Headline/Headline.html',
            items: []
          }
        ]
      },
      {
        label: 'Components',
        items: [
          {
            label: 'Avatar',
            path: '/components/Avatar/Avatar.html',
            items: []
          },,
          {
            label: 'Button',
            path: '/components/Button/Button.html',
            items: []
          },
          {
            label: 'Card',
            path: '/components/Card/Card.html',
            items: []
          },
          {
            label: 'Icon',
            path: '/components/Icon/Icon.html',
            items: []
          },
          {
            label: 'Spinner',
            path: '/components/Spinner/Spinner.html',
            items: []
          },
          {
            label: 'Dropdown',
            path: '/components/Dropdown/Dropdown.html',
            items: []
          },
          {
            label: 'Menu',
            path: '/components/Menu/Menu.html',
            items: []
          },
          {
            label: 'Modal',
            path: '/components/Modal/Modal.html',
            items: []
          },
          {
            label: 'Tabs',
            path: '/components/Tabs/Tabs.html',
            items: []
          }, {
            label: 'Stepper',
            path: '/components/Stepper/Stepper.html',
            items: []
          }, {
            label: 'Tooltip',
            path: '/components/Tooltip/Tooltip.html',
            items: []
          }, {
            label: 'Navbar',
            path: '/components/Navbar/Navbar.html',
            items: []
          }, {
            label: 'Tag',
            path: '/components/Tag/Tag.html',
            items: []
          }
        ]
      }, {
        label: 'Controls',
        items: [
          {
            label: 'Label',
            path: '/controls/Label/Label.html',
            items: []
          },
          {
            label: 'TextField',
            path: '/controls/TextField/TextField.html',
            items: []
          },
          {
            label: 'Select',
            path: '/controls/Select/Select.html',
            items: []
          }, {
            label: 'Checkbox',
            path: '/controls/Checkbox/Checkbox.html',
            items: []
          },
        ]
      },
      {
        label: 'Utilities',
        items: [
          {
            label: 'alignItems',
            path: '/utils/alignItems/alignItems.html',
            items: []
          },
          {
            label: 'background',
            path: '/utils/background/background.html',
            items: []
          },
          {
            label: 'border',
            path: '/utils/border/border.html',
            items: []
          },
          {
            label: 'color',
            path: '/utils/color/color.html',
            items: []
          },
          {
            label: 'display',
            path: '/utils/display/display.html',
            items: []
          },
          {
            label: 'flex',
            path: '/utils/flex/flex.html',
            items: []
          },
          {
            label: 'font',
            path: '/utils/font/font.html',
            items: []
          },
          {
            label: 'fontSize',
            path: '/utils/fontSize/fontSize.html',
            items: []
          },
          {
            label: 'fontWeight',
            path: '/utils/fontWeight/fontWeight.html',
            items: []
          },
          {
            label: 'justifyContent',
            path: '/utils/justifyContent/justifyContent.html',
            items: []
          },
          {
            label: 'margin',
            path: '/utils/margin/margin.html',
            items: []
          },
          {
            label: 'overflow',
            path: '/utils/overflow/overflow.html',
            items: []
          },
          {
            label: 'textAlign',
            path: '/utils/textAlign/textAlign.html',
            items: []
          },
        ]
      }
    ]
  }
}
