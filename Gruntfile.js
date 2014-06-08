module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['dist'],

        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/sass',
                        src: ['*.scss'],
                        dest: 'dist/main/css',
                        ext: '.css'
                    },
                    {
                        'dist/contensis-cms/SiteElements/Stylesheets/100-reset.css': 'src/sass/normalize.scss',
                        'dist/contensis-cms/SiteElements/Stylesheets/200-skeleton.css': 'src/sass/skeleton.scss',
                        'dist/contensis-cms/SiteElements/Stylesheets/300-base.css': 'src/sass/base.scss'
                    }]
            }
        },

        copy: {
            main: {
                files: [
                    {
                        // main dist content
                        expand: true,
                        cwd: 'src/',
                        src: ['*.html'],
                        dest: 'dist/main/'
                    },
                    {
                        // contensis dist content
                        expand: true,
                        cwd: 'src/',
                        src: ['*.html'],
                        dest: 'dist/contensis-cms/'
                    },
                    {
                        // main images
                        expand: true,
                        cwd: 'src/Images/',
                        src: ['**/*.png', '**/*.jpg', '**/*.gif'],
                        dest: 'dist/main/Images/'
                    },
                    {
                        // contensis images
                        expand: true,
                        cwd: 'src/Images/',
                        src: ['**/*.png', '**/*.jpg', '**/*.gif'],
                        dest: 'dist/contensis-cms/SiteElements/Images/'
                    }
                ]
            }
        },

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

    grunt.registerTask('default', ['clean', 'sass', 'copy', 'cssmin']);
};