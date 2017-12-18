'use strict';

const fs = require('fs');
const path = require('path');
const Server = require('karma').Server;

function run(type) {
  const config = {
    browsers: ['PhantomJS'],
    configFile: path.resolve(__dirname, '..', 'karma.conf.js'),
    singleRun: true,
    webpack: require(
      path.resolve(__dirname, '..', 'webpack.config.js')
    )
  };
  const server = new Server(config, function(exitCode) {
    process.exit(exitCode);
  });

  server.start();
}

module.exports = run;

if (!module.parent) {
  run();
}
