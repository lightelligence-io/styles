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
          [ '/development/notifications', 'Error Notifications' ],
          [ '/development/cards', 'Cards' ],
          [ '/development/tooltips', 'Tooltips' ],
          [ '/development/floating-action-button', 'Floating Action Button' ],
          [ '/development/modals', 'Modal' ],
          [ '/development/tabs', 'Tabs' ],
          [ '/development/toggle-buttons', 'Toggle-Buttons' ],
          [ '/development/stepper', 'Stepper' ],
        ],
      },
    ],
  },
  title: 'LIGHTELLIGENCE® UI',
  base: '/',
};
