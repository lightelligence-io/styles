# LIGHTELLIGENCE UI Styleguide

## Folder structure
````
|- build // destination for compiled js and css files
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
		|- fonts // all font files
|- styleguide // static styleguide generator based on vuepress
	|- build // destination for static documentation sites in html
	|- docs
		|- .vuepress // vuepress config files
		|- development // markdown documentation files for ui-framework
		|- design // markdown documentation files for design-guide
	|- public
	|- src
		|- assets // images etc.
		|- components // interactive vue components which can be used in markdown
````

## Getting Started
### Installation
````
// Install npm packages for ui-framework-elements
$ npm install
````
and
````
// Install npm packages for styleguide generator
$ cd styleguide
$ npm install
````
### Local Serving
````
$ npm run start 
// serves compiled css and js at localhost:8080
````
and in an extra window
````
$ npm run start:docs
// serves compiled styleguide-pages at localhost:8081
````
### Build for usage
````
$ npm run build 
// build compiled css and js and save in build-folder
````
and
````
$ npm run build:docs
// generates static html pages out of markdown files and components, saved in styleguide/build
````
