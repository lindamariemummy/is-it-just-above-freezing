module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },
    jscs: {

      src: ['server.js', 'app/*.js'],

      options: {
        config: '.jscsrc'
      }
    },
    browserify: {
      dev: {
        src: ['app/cold.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },
    jshint: {
      options: {
        node: true
      },
      src: ['app/*.js', 'server.js']
    },

    simplemocha: {
      src: ['test/*.js']
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev'])
  grunt.registerTask('test', ['jshint', 'jscs','simplemocha']);
  grunt.registerTask('default', ['test']);
};
