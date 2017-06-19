module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-npm');
  grunt.loadNpmTasks('grunt-ts');

  grunt.initConfig({
    clean: {
      html: ['*.html', 'assets/js/*.js', 'assets/js/*.js.map', 'assets/js/*.d.ts']
    },
    
    watch: {
      options: {
        livereload: true
      },
      pug: {
        files: ['src/**/*.pug', 'src/**/*.js', 'src/**/*.json'],
        tasks: ['pug']
      },
      js: {
        files: ['assets/**/*.js']
      },
      ts: {
        files: ['src/tsconfig.json', 'src/**/*.ts'],
        tasks: ['ts']
      },
      css: {
        files: ['assets/**/*.css']
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          host: 'localhost',
          hostname: 'localhost'
        }
      }
    },

    pug: {
      compile: {
        options: {
          data: require('./src/fillModel.js')
        },
        pretty: true,

        cwd: 'src',
        src: ['**/*.pug', '!pieces/*.pug'],
        dest: './',
        ext: '.html',
        expand: true
      }
    },

    ts: {
      default: {
        tsconfig: './src/tsconfig.json'
      }
    }
  });
  grunt.registerTask('serve', ['clean', 'ts', 'pug', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'ts', 'pug']);
};