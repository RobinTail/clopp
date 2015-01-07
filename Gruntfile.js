/*
 * grunt-clopp
 * https://github.com/boostermedia/clopp
 *
 * Copyright (c) 2015 Riko Ophorst
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        clean: 
        {
            tests: ['tmp']
        },
        clopp: 
        {
            preprocess: 
            {
                options: {
                    context: {
                        __ads: '"true"',
                        __environment: '"prod"'
                    }
                },
                files:
                [
                    { src: 'test/src/*.*', dest: 'test/dest/' }
                ]
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'clopp']);
};
