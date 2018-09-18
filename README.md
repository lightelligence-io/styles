# LIGHTELLIGENCE UI Styleguide

[User Documentation](https://lightelligence-styleguide.azurewebsites.net/)

## Folder structure

```
|- build // destination for compiled js and css files
|- build-styleguide // destination for static documentation sites in html
|- source
	|- script // scripts for single components
	|- style // ITCSS Structure
		|- 01-settings	// variables etc.
		|- 02-tools // mixins etc.
		|- 03-generic // resets/normalizing
		|- 04-elements // bare html elements like typography
		|- 05-objects // class based objects like spacings
		|- 06-components // ui components like tabs, buttons etc.
		|- 07-trumps // utilities and helper classes with ability to override
		|- 08-fonts // all font files
|- docs // static styleguide generator based on vuepress
  |- _assets // images etc.
  |- _components // interactive vue components which can be used in markdown
  |- .vuepress // vuepress config files
  |- development // markdown documentation files for ui-framework
  |- design // markdown documentation files for design-guide
```

## Getting Started

### Installation

```
// Install npm packages
$ npm install
```

### Local Serving

```
$ npm run dev
// serves compiled css and js at localhost:8080 with hot-reload and serves styleguide @localhost:8081
```

### Build for usage

```
$ npm run build
// build compiled css and js and save in build-folder && build styleguide and save in build-styleguide
```
