// Imports
const childProcess = require('child_process');
const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const quoiaBuildScript = path.join(__dirname, './quoia.build.js');

// Build project task
gulp.task('build', function() {
  return runScript(quoiaBuildScript);
});

// Dev task to watch for changes and rebuild
gulp.task('dev', function() {
  // Set up browsersync
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    // injectChanges: false,
    notify: false,
    // open: false
  });

  // Watch for changes
  let watcher = gulp.watch('./src/**/*.*');

  // Rebuild & reload on change
  watcher.on('change', (evt, fname) => {
    runScript(quoiaBuildScript).then(() => {
      browserSync.reload();
    });
  });
});

/**
 * Runs a child node script
 * @param {string} scriptPath Absolute path to Node script
 */
function runScript(scriptPath) {
  return new Promise(resolve => {
    // Prevent duplicate concurrent calls
    let invoked = false;
  
    // Fork process
    let process = childProcess.fork(scriptPath);
  
    // Catch errors
    process.on('error', err => {
      if (invoked) return;
      invoked = true;
  
      resolve(err);
    });
  
    // Return on exit
    process.on('exit', code => {
      if (invoked) return;
      invoked = true;
  
      resolve(code);
    });
  });
}
