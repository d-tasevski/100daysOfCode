var gulp 			= require('gulp'),
    nested 			= require('postcss-nested'),
    postCss 		= require('gulp-postcss'),
    cssImport 		= require('postcss-import'),
    simpleVars 		= require('postcss-simple-vars'),
    autoprefixer 	= require('autoprefixer'),
    mixins 			= require('postcss-mixins');


gulp.task('styles', function() {

    return gulp.src('./app/assets/styles/main.css')
        .pipe(postCss([cssImport, mixins, simpleVars, nested, autoprefixer]))
	        .on('error', function(err) { // error handling
	            if (err) {
	                console.log(err.toString());
	            }
	            this.emit('end');
	        })
	    .pipe(gulp.dest('./app/temp/styles'));
});
