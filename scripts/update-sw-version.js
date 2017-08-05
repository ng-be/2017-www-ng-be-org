'use strict';
var fs = require('fs');
var path = require('path');

var serviceWorker = path.join(process.cwd(), path.join('dist', 'service-worker.js'));

var version = Date.now();

// Read `service-worker.js` contents and replace the version
var contents = fs.readFileSync(serviceWorker, 'utf8');
var newContents = contents.replace(/^var VERSION = (?:.*?)$/m, "var VERSION = 'v"+version+"';");

// Overwrite `service-worker.js`
fs.writeFileSync(serviceWorker, newContents, 'utf8');

console.log('Service worker version updated');