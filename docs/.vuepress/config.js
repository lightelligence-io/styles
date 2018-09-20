module.exports = {
  dest: "build-styleguide",
  serviceWorker: true,
  themeConfig: {
    nav: [{ text: "Back to Homepage", link: "https://lightelligence.io/" }],
    sidebar: [
      ["/", "Introduction"],
      {
        title: "Layout",
        collapsable: true,
        children: [
          ["/layout/grid-system", "Grid System"],
          ["/layout/media-query-classes", "Media Query Classes"],
          ["/layout/spacings", "Responsive Spacings"]
        ]
      },
      {
        title: "Content",
        collapsable: true,
        children: [
          ["/content/typography", "Typography & Fonts"],
          ["/content/colors", "Colors"],
        ],
      },
      {
        title: "Components",
        collapsable: true,
        children: [
          ["/components/buttons", "Buttons"],
          ["/components/form-controls", "Form Controls"],
          ["/components/selection-controls", "Selection Controls"],
          ["/components/tags", "Tags"],
          ["/components/notifications", "Error Notifications"],
          ["/components/cards", "Cards"],
          ["/components/tooltips", "Tooltips"],
          ["/components/floating-action-button", "Floating Action Button"],
          ["/components/modals", "Modal"],
          ["/components/tabs", "Tabs"],
          ["/components/toggle-buttons", "Toggle-Buttons"],
          ["/components/stepper", "Stepper"],
          ["/components/avatar", "Avatar" ],
          ["/components/navigation", "Navigation" ],
          ["/components/pageblock", "Page Blocks" ],
        ]
      }
    ]
  },
  title: "LIGHTELLIGENCE® UI",
  base: "/"
};
