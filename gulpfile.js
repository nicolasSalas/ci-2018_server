
var gulp = require('gulp'), watch = require('gulp-watch');
var bs = require('browser-sync').create();
var livereload = require('gulp-livereload');
var wiredep = require('gulp-wiredep');
var nodemon = require('nodemon');
var notify = require("gulp-notify");

gulp.src("./src/view/home.html")
  .pipe(notify("Hello Hello!"));



gulp.task('serve',['run'], function() {
    bs.init({
        logPrefix: "te deje entero loco",
        notify: false,
        logConnections: true,
        proxy: "localhost:8081"
    });
 gulp.watch("./src/view/*.html").on('change', bs.reload);

});

gulp.task('run',function() {

  livereload.listen()

  nodemon({
    script: 'server.js',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^listening/.test(chunk)) {
        livereload.reload()
      }
      process.stdout.write(chunk)
    })
  })
});


gulp.task('bower', function () {
  gulp.src('./views/index.ejs')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./views/'))
})


