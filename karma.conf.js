'use strict';

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        { pattern: './test.js', watched: false }
    ],
    plugins: [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-webpack'
    ],
    preprocessors: {
      './test.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
