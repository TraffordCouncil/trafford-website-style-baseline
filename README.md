Trafford Website Style Baseline
===============================

Baseline styles for use in Trafford Council web pages and affiliated websites.

Trafford Council's new CMS-based website and design went live in October 2013. 
The design was initially created manually using flat css files. 
Very quickly it was discovered just how much effort is involved in maintaining plain css files, and how error-prone they can be; alterations would usually involve random rules, specificity wars, and bloated stylesheets.

In an attempt to control the rampant spread of fudged css rules and excessive duplication,
the entire design has been rewritten using [Sass](http://sass-lang.com/).

The css output, and other pre-deployment tasks, are created using [Gulp](https://gulpjs.com/).

Content
-------

### src

Development source files. Mainly template pages and Sass stylesheets.

### dist

Disribution files: compiled css and JavaScript, and reformatted html template files.
This folder is generated during compilation and output processing and so should not be edited directly as any changes will be overwritten.

Current distibution outputs are:

- **main:** Standard html templates, css and JavaScript.
- **contensis-cms:** Similar to Main distribution, but resource paths are rewritten to match folder structures in Trafford Council's CMS.

Installation / Usage
--------------------

The pre-compiled files in _dist_ can be used directly within the website. Use _contensis-cms_ within existing Council CMS, use _main_ within any other non-CMS site.

To compile and build your own files from the _src_ folder:

1. Install Gulp CLI: ```npm i -g gulp-cli```
2. Open terminal / command-line window at the project root
3. Install necessary dependencies: ```(sudo) npm install```
4. Run Gulp: ```gulp```
5. To run Gulp in watch mode (auto detect changes and recompile scss): ``` gulp watch```

Release Notes
-------------

### v3.0.0

- Re-sync with live site

### v2.0.0 ###

- Complete re-write of all rules. All original css convertered to Sass using [Css2Sass](http://sebastianpontow.de/css2compass/).
- Only Trafford styles re-created ([300-base on www.trafford.gov.uk](http://www.trafford.gov.uk/SiteElements/Stylesheets/300-base.css)) -- other stylesheets still need converting and re-engineering.
- Create output with correct paths for Contensis CMS.

### v1.0.0 ###

- Initial re-creation and consolidation of Trafford styles using Sass.
