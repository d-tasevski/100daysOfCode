
var gulp 		 = require('gulp'),
	nested		 = require('postcss-nested'),	
	postcss 	 = require('gulp-postcss'),
	cssImport	 = require('postcss-import'),
	autoprefixer = require('autoprefixer');


gulp.task('styles', function(){

	return gulp.src('./app/assets/styles/main.css')
		.pipe(postcss([cssImport, nested, autoprefixer]))
		.on('error', function(err){
			if(err){
				console.log(err.toString());
			}
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});
