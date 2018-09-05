module.exports = { 
  dest: 'build',
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Back to Homepage', link: 'https://lightelligence.io/' },
    ],
    sidebar: [ 
      '/',
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
        ],
      },
    ],
  },
  head: [
    ['link', { rel: 'stylesheet', href: `http://localhost:8080/olt-ui.css` }],
    ['script', { src: `http://localhost:8080/olt-ui.js` }]
  ],
  title: 'LIGHTELLIGENCE® UI',
  base: '/',
};
