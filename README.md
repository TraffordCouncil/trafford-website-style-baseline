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

### CSS

This contains the post-compiled stylesheets. The contents of this folder should not be edited as any changes will be overwritten by future compilations.

### HTML

Sample HTML test pages from the Trafford Council website for testing styling.

### Sass

Main Sass files.

### Images

Standard images for use on pages and referenced by stylesheets.

### SiteElements

Compiled output for use in Contensis CMS. As this is compiled output, the contents from this folder should not edited.
