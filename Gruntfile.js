module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        compress: {
          drop_console: true
        },
        mangle: {
          except: ['require', 'exports', 'module']
        },
        banner: '/* <%= pkg.name %> by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> version: <%= pkg.version %> */',
        sourceMap: true,
        sourceMapName: 'build/<%= pkg.name %>.min.map',
      },
      "build": {
        files: {
          "build/<%= pkg.name %>.min.js": ["src/spa-ui-pager.js"]
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      "build": {
        files: ['src/*.js'],
        tasks: ['uglify:build']
      }
    },

    compress: {
      'release': {
        options: {
          archive: './release/<%= pkg.name %>-<%= pkg.version %>.zip',
        },
        files: [
          {src: ['src/**', 'build/**', 'package.json', 'README.md', 'LICENSE', 'Gruntfile.js']}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['uglify:build', 'watch:build']);
  grunt.registerTask('build', ['uglify:build']);
  grunt.registerTask('release', ['uglify:build', 'compress:release']);

};