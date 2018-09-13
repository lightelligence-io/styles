module.exports = {
  dest: 'build-styleguide',
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Back to Homepage', link: 'https://lightelligence.io/' },
    ],
    sidebar: [ 
      [ '/', 'Introduction' ],
      {
        title: 'Design',
        collapsable: true,
        children: [
          [ '/design/responsive-layout.md', 'Responsive Layout' ],
        ]
      },
      {
        title: 'Development',
        collapsable: true,
        children: [
          [ '/development/getting-started', 'Getting Started' ],
          [ '/development/grid-system', 'Grid System' ],
          [ '/development/media-query-classes', 'Media Query Classes' ],
          [ '/development/typography', 'Typography & Fonts' ],
          [ '/development/colors', 'Colors' ],
          [ '/development/spacings', 'Responsive Spacings' ],
          [ '/development/buttons', 'Buttons' ],
          [ '/development/form-controls', 'Form Controls' ],
          [ '/development/selection-controls', 'Selection Controls' ],
          [ '/development/tags', 'Tags' ],
          [ '/development/notifications', 'Notifications' ],
        ],
      },
    ],
  },
  head: [
    ['link', { rel: 'stylesheet', href: process.env.NODE_ENV === 'development' ? `http://localhost:8080/lightelligence-ui.css` : '../build/lightelligence-ui.css' }],
    ['script', { src: process.env.NODE_ENV === 'development' ? `http://localhost:8080/lightelligence-ui.js` : '../build/lightelligence-ui.js' }]
  ],
  title: 'LIGHTELLIGENCE® UI',
  base: '/',
};
