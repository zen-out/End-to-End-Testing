#!/usr/bin/env node

/**
 * Script that will execute the downloaded phantomjs binary.  stdio are
 * forwarded to and from the child process.
 *
 * The following is for an ugly hack to avoid a problem where the installer
 * finds the bin script npm creates during global installation.
 *
 * {NPM_INSTALL_MARKER}
 */

var path = require('path')
var spawn = require('child_process').spawn

var binPath = require(path.join(__dirname, '..', 'lib', 'phantomjs')).path

var args = process.argv.slice(2)

// For Node 0.6 compatibility, pipe the streams manually, instead of using
// `{ stdio: 'inherit' }`.
var cp = spawn(binPath, args)
cp.stdout.pipe(process.stdout)
cp.stderr.pipe(process.stderr)
process.stdin.pipe(cp.stdin)

cp.on('error', function(err) {
    console.error('Error executing phantom at', binPath)
    console.error(err.stack)
})

cp.on('exit', function(code) {
    // Wait few ms for error to be printed.
    setTimeout(function() {
        process.exit(code)
    }, 20)
});

process.on('SIGTERM', function() {
    cp.kill('SIGTERM')
    process.exit(1)
})