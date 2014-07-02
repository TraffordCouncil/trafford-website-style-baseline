Trafford Website Style Baseline
===============================

Baseline styles for use in Trafford Council web pages and affiliated websites.

Trafford Council's new CMS-based website and design went live in October 2013. 
The design was initially created manually using flat css files. 
Very quickly it was discovered just how much effort is involved in maintaining plain css files, and how error-prone they can be; alterations would usually involve random rules, specificity wars, and bloated stylesheets.

In an attempt to control the rampant spread of fudged css rules and excessive duplication,
the entire design has been rewritten using [Sass](http://sass-lang.com/).

The css output, and other pre-deployment tasks, are created using [Grunt](http://gruntjs.com/).

Content
-------

### SRC

Development source files. Mainly template pages and Sass stylesheets.

### DIST

Disribution files: compiled css and JavaScript, and reformatted html template files.
This folder is generated during compilation and output processing and so should not be edited directly as any changes will be overwritten.

Current distibution outputs are:

- Main. Standard html templates, css and JavaScript.
- Contensis-cms. Similar to Main distribution, but css files are renamed to match Contensis naming convetions.