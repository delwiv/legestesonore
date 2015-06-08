var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify    = require('watchify');
var reactify    = require('babelify');
var streamify   = require('gulp-streamify');
var sass        = require('gulp-sass');
var debug       = require('gulp-debug');
var cssmin      = require('gulp-minify-css');
var concat      = require('gulp-concat');
var streamqueue = require('streamqueue');

var assets      = require('./client/assets.json');







var path = {
    HTML: 'client/app/index.html',
    ALL: ['client/app/*.js', 'client/app/**/*.js', 'client/app/index.html'],
    JS: ['client/app/*.js', 'client/app/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    OUT: 'app.js',
    DEST_SRC: 'client/dist/src',
    DEST_BUILD: 'client/dist/build',
    DEST: 'client/dist',
    ENTRY_POINT: './client/app/app.js',
    vendors: {
        CSS: assets.vendors.css,
        JS: assets.vendors.js
    }
};

// Dev
gulp.task('copy', function() {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch-app-js', function() {
    gulp.watch(path.HTML, ['copy']);

    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    return watcher.on('update', function() {
            watcher.bundle()
                .pipe(source(path.OUT))
                .pipe(gulp.dest(path.DEST_SRC))
            console.log('Updated');
        })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('vendors-css', function() {
    return gulp.src(assets.vendors.css.src)
        .pipe(debug({
            title: 'vendors-css:'
        }))
        .pipe(cssmin())
        .pipe(concat('vendors.min.css'))
        .pipe(gulp.dest('client/dist/src/'));
});

gulp.task('vendors-js', function() {
    return streamqueue({
                objectMode: true
            },
            gulp.src(assets.vendors.js.min),
            gulp.src(assets.vendors.js.src)
            .pipe(debug({
                title: 'vendors-js:'
            }))
            .pipe(uglify())
        )
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('client/dist/src/'));
});


gulp.task('app-sass', function() {
    return gulp.src(["client/app/**/*.scss"])
        .pipe(debug({
            title: 'app-sass:'
        }))
        .pipe(sass())
        // .on('error', error)
        .pipe(concat('app.src.css'))
        .pipe(gulp.dest('./client/dist/src/'));
});

gulp.task('build', function() {
    browserify({
            entries: [path.ENTRY_POINT],
            transform: [reactify],
        })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});


gulp.task('production', ['replaceHTML', 'build']);

gulp.task('default', ['watch-app-js', 'vendors-css', 'vendors-js', 'app-sass'], function(){

    gulp.watch('./client/app/**/*.scss', ['app-sass']);

    gulp.watch('./client/assets.json', ['vendors-css', 'vendors-js'])
        .on('change', function() {
            assets = require('./client/assets.json');
            console.log('reload assets.json');
        });

});
