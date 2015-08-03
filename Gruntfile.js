module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      before: ['src/utils.js', 'src/repaint.js', 'src/pager.js']
    },

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
          "build/<%= pkg.name %>.min.js": ["<%= concat.raw.dest %>"],
          "build/<%= pkg.name %>.bootstrap.min.js": ["<%= concat.bootstrap.dest %>"]
        }
      }
    },

    concat: {
      options: {
        separator: '',
        banner: '/* <%= pkg.name %> by <%= pkg.author %>, <%= pkg.license %> license, <%= grunt.template.today("yyyy-mm-dd") %> version: <%= pkg.version %> */'
      },
      "raw": {
        src: ['src/intro.js', 'src/utils.js', 'src/options.js', 'src/repaint.js', 'src/pager.js', 'src/outro.js'],
        dest: 'build/<%= pkg.name %>.js'
      },
      "bootstrap": {
        src: ['src/intro.js', 'src/utils.js', 'src/options-bootstrap.js', 'src/repaint.js', 'src/pager.js', 'src/outro.js'],
        dest: 'build/<%= pkg.name %>-bootstrap.js'
      }
    },

    watch: {
      options: {
        spawn: false
      },
      "build": {
        files: ['src/*.js'],
        tasks: ['jshint:before', 'concat:raw', 'concat:bootstrap', 'uglify:build']
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint:before', 'concat:raw', 'concat:bootstrap', 'uglify:build', 'watch:build']);
  grunt.registerTask('build', ['concat:raw', 'concat:bootstrap', 'uglify:build']);
  grunt.registerTask('release', ['concat:raw', 'concat:bootstrap', 'uglify:build', 'compress:release']);

};