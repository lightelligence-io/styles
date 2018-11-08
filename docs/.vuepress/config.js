module.exports = {
  dest: "build-styleguide",
  serviceWorker: true,
  themeConfig: {
    nav: [{ text: "Back to Homepage", link: "https://lightelligence.io/" }],
    serviceWorker: {
      updatePopup: true
    },
    sidebar: [
      ["/", "Introduction"],
      {
        title: "Layout",
        collapsable: true,
        children: [
          ["/layout/grid-system", "Grid System"],
          ["/layout/media-query-classes", "Media Query Classes"],
          ["/layout/spacings", "Responsive Spacings"],
          ["/layout/app-layout", "App Layout"]
        ]
      },
      {
        title: "Content",
        collapsable: true,
        children: [
          ["/content/typography", "Typography & Fonts"],
          ["/content/colors", "Colors"],
          ["/content/icons", "Icons"],
          ["/content/links", "Links"],
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
          ["/components/cards", "Cards"],
          ["/components/tooltips", "Tooltips"],
          ["/components/floating-action-button", "Floating Action Button"],
          ["/components/modals", "Modal"],
          ["/components/tabs", "Tabs"],
          ["/components/notification-icon", "Notification Icon"],
          ["/components/toggle-buttons", "Toggle-Buttons"],
          ["/components/stepper", "Stepper"],
          ["/components/datepicker", "Datepicker"],
          ["/components/footer", "Footer"],
          ["/components/avatar", "Avatar"],
          ["/components/navigation", "Navigation Bar"],
          ["/components/pageblock", "Page Blocks"],
          ["/components/table", "Table"],
          ["/components/list", "List"],
          ["/components/key-value-list", "Key-Value-List"],
          ["/components/snackbar", "Snackbar"],
          ["/components/banner", "Banner"],
        ]
      }
    ]
  },
  title: "LIGHTELLIGENCE® UI",
  base: "/"
};
