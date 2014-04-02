module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: [require('node-bourbon').includePaths,'bower_components/foundation/scss','bower_components/fontawesome/scss']
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/styles.css': 'css/styles.scss'
        }        
      },
      dev: {
        options: {
          style: 'nested',
          quiet: true
        },
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dev: {
        files: {
          'js/public-head.js': ['bower_components/modernizr/modernizr.js'],
          'js/public-body.js': ['bower_components/foundation/js/foundation.js','js/trt5-public.js']
        }
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: 'css/**/*.scss',
        tasks: ['dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('dist', ['sass:dist','concat:dev']);
  grunt.registerTask('dev', ['sass:dev','concat:dev']);
  grunt.registerTask('default', ['dev','watch']);
}