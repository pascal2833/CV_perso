module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					//trace: true,
					//check: true,
					quiet: true,
					style: 'compressed'
				},
				files: {
					'css/sass/cv_perso.css': 'css/sass/cv_perso.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['css/sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}
	});

	//grunt.loadNpmTasks('grunt-responsive-images');
	//grunt.loadNpmTasks('grunt-pagespeed');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default', ['sass','watch']);
	/*grunt.registerTask('default', ['responsive_images']);*/
	//grunt.registerTask('default', ['grunt-pagespeed']);

};
