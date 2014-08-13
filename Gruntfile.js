module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: [require('node-bourbon').includePaths,'bower_components/foundation/scss','bower_components/owl-carousel2/src/scss/']
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
    uglify: {
      dist: {
        files: {
          'js/foundation/foundation.min.js':'bower_components/foundation/js/foundation/foundation.js',
          'js/foundation/foundation.offcanvas.min.js':'bower_components/foundation/js/foundation/foundation.offcanvas.js',
          'js/owl.carousel/owl.carousel.min.js':'bower_components/owl-carousel2/dist/owl.carousel.min.js'
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // grunt.registerTask('dist', ['sass:dist','concat:dev']);
  grunt.registerTask('compile', ['uglify:dist']);
  grunt.registerTask('dist', ['sass:dist']);
  grunt.registerTask('dev', ['sass:dev']);
  grunt.registerTask('default', ['dev','watch']);
}