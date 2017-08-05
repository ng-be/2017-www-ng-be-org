/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */
'use strict';
importScripts('/sw-toolbox.js');

var VERSION = 'v1499427252610';

self.toolbox.options.cache = {
    name: 'ngbe-' + VERSION
};

var assets = [
    './app.css',
    './app.js',
    './',
    './workshop-day',
    './conference-day',
    './sponsors',
    './location',
    './team',
    './terms',
    './code-of-conduct'
];

// pre-cache our key assets
self.toolbox.precache(assets);

// dynamically cache any other local assets
self.toolbox.router.any('./assets/*', self.toolbox.cacheFirst);

assets.forEach(function(asset) {
    self.toolbox.router.any(asset, self.toolbox.cacheFirst);
});

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;