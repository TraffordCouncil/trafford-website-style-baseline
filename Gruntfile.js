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
                        // main images
                        expand: true,
                        cwd: 'src/Images/',
                        src: ['**/*.png', '**/*.jpg', '**/*.gif'],
                        dest: 'dist/main/Images/'
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