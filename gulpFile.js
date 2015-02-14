(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy:false});



var paths = {
  index: './client/index.html',
  root: './client',
  html: './client/**/*.html',
  scripts: './client/app/**/*.js',
  styles: './client/app/**/*.css'
}

gulp.task('default', $.sequence('inject', 'server', 'watch'));
gulp.task('server', startServer);
gulp.task('watch', startWatch);
gulp.task('inject', startInject);
gulp.task('deploy', deploy);
gulp.task('heroku', $.sequence('inject'));
gulp.task('deployHeroku', deployHeroku);

function startServer(){
  require('./server');

}
function startWatch(){
  $.livereload();
  $.livereload.listen();
  gulp.watch('./client/app/**/*.css', $.livereload.changed);
  gulp.watch('./client/app/**/*.js', $.livereload.changed);
  gulp.watch('./client/**/*.html', $.livereload.changed);
}

function startInject(){
  var target  = gulp.src( paths.index );
  var scripts = gulp.src( paths.scripts, {read:false} );
  var styles  = gulp.src( paths.styles, {read:false} );

  return target
    .pipe( $.inject( scripts,  {relative:true}) )
    .pipe( $.inject( styles,  {relative:true}) )
    .pipe( gulp.dest( paths.root ) );
}

function deploy() {
  if (process.env.NODE_ENV === 'production') {
    gulp.start('heroku');
  }
}

function deployHeroku() {
  gulp.src('')
    .pipe($.shell([
      'git push heroku master'
    ]))
}

})();