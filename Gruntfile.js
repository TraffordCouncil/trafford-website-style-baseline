module.exports = function (grunt) {
    grunt.initConfig({
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'compact'
                },
                files: { // Dictionary of files
                    'css/100-reset.css': 'sass/reset.scss',
                    'css/200-skeleton.css': 'sass/skeleton.scss',
                    'css/300-base.css': 'sass/bespoke.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};