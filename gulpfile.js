var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
  console.log("Hooray - you created a gulp task");
});

gulp.task('html', function(){
  console.log("Imagine something useful being done to your html!");
});

gulp.task('styles', function(){
  //console.log("Imagine Sass or PostCSS tasks running here!");
  return gulp.src('./app/assests/styles/styles.css')
  .pipe(postcss([nested, cssvars, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
