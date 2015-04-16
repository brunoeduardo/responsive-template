module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks que o Grunt deve executar
        sass : {
      dist : {
        options : { style : 'expanded' },
        files : {
          'css/style.css' : 'css/_sass/style.scss'
        }
      }
    }, // sass   

        watch : {
      dist : {
        files : [
          'css/_sass/*'
        ],

        tasks : [ 'sass']
      }
    } // watch

  });

    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'sass' ] );
	grunt.registerTask( 'w', [ 'watch' ] );
};