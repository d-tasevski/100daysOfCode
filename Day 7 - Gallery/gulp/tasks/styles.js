var gulp 		  = require('gulp'),
 	nested 		  = require('postcss-nested'),
 	postCss 	  = require('gulp-postcss'),
 	cssImport	  = require('postcss-import'),
 	autoprefixer  = require('autoprefixer'),
 	mixins 		  = require('postcss-mixins');


gulp.task('styles', function(){

	return gulp.src('./app/assets/styles/app.css')
		.pipe(postCss([cssImport, mixins, nested, autoprefixer]))
			.on('error', function(err){
				if(err) {
					console.log(err.toString());
				}
				this.emit('end');
			})
		.pipe(gulp.dest('./app/temp/styles'));
});