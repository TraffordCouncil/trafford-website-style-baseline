module.exports = function (grunt) {
    grunt.initConfig({

        // Remove any exiting content in the distribution folder(s)
        clean: ['dist'],

        // Sass --> css compilation
        sass: {
            dist: {
                files: [
                    {
                        // Main stylesheet output
                        expand: true,
                        cwd: 'src/sass',
                        src: ['*.scss'],
                        dest: 'dist/main/css',
                        ext: '.css'
                    },
                    {
                        // Contensis stylesheet output
                        expand: true,
                        cwd: 'src/sass',
                        src: ['*.scss'],
                        dest: 'dist/contensis-cms/SiteElements/Stylesheets/',
                        ext: '.css'
                    }
                ]
            }
        },

        // Copy important resources (images etc.)
        copy: {
            main: {
                files: [
                    {
                        // HTML content
                        expand: true,
                        cwd: 'src/html/',
                        src: ['*.html'],
                        dest: 'dist/main/html/'
                    },
                    {
                        // Images
                        expand: true,
                        cwd: 'src/Images/',
                        src: ['**/*.png', '**/*.jpg', '**/*.gif'],
                        dest: 'dist/main/images/'
                    },
                    {
                        // Contensis HTML content
                        expand: true,
                        cwd: 'src/html/',
                        src: ['*.html'],
                        dest: 'dist/contensis-cms/html/'
                    },
                    {
                        // Contensis images
                        expand: true,
                        cwd: 'src/Images/',
                        src: ['**/*.png', '**/*.jpg', '**/*.gif'],
                        dest: 'dist/contensis-cms/SiteElements/Images/'
                    }
                ]
            }
        },

        // Rewrite paths
        replace: {
            // Rewrite paths for Contensis output
            contensis_cms: {
                src: ['dist/contensis-cms/**/*.html', 'dist/contensis-cms/**/*.css'],
                overwrite: true, // overwrite existing files
                replacements: [{
                        from: /\/src\//g,
                        to: '/SiteElements/'
                    },
                    {
                        from: /href=".*\/css\/(.+.css)"/g,
                        to: 'href="/SiteElements/Stylesheets/$1"'
                    },
                      {
                        from: /href="http:\/\/www\.trafford\.gov\.uk\//g,
                        to: 'href="/'
                    }]
            }
        },

        // Create minified css files
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['**/*.css', '!*.min.css'],
                dest: 'dist/',
                ext: '.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-text-replace');

    // This is the order that Grunt tasks will be performed
    // Make sure copy & replace is done in the correct order
    grunt.registerTask('default', ['clean', 'sass', 'copy', 'replace', 'cssmin']);
};