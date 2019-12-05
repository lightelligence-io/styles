const stylemark = require('stylemark');
const watch = require('watch');
const args = require('yargs').argv;
const bs = require('browser-sync').create();
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const copy = require('copy');
const watchDelay = 50;

const port = args.port || 3020;

const docsFolder = __dirname + '/../docs';
const distFolder = __dirname + '/../dist';
const srcFolder = __dirname + '/../src';

/**
 * Runs stylemark and update the docs folder
 */
const updateStylemark = () => {
  if (!fs.existsSync(`${distFolder}/index.css`)) {
    console.log('cannot run stylemark, index.css does not exist');
    return;
  }
  console.log('run stylemark...');
  stylemark({
    input: srcFolder,
    output: docsFolder,
    configPath: `${srcFolder}/.stylemark.yml`,
  });
};

// a key to callback lookup map
const cbs = {};

/*
 * Register the callback `cb` for the key `key`. The callback is
 * executed after `watchDelay` milliseconds, unless another
 * callback was registered for the same key in the mean time.
 */
const throttle = (key, cb) => {
  cbs[key] = cb;
  setTimeout(() => {
    if (cbs[key] === cb) {
      cbs[key] = undefined;
      cb();
    }
  }, watchDelay);
};
/*
 * watches a directory and runs a callback whenever a file
 * is created, changed or removed and the filename matches
 * `pattern`
 *
 */
const watchDir = (dir, pattern, callback) => {
  watch.watchTree(dir, function(f, curr, prev) {
    if (prev === null) {
      // f is a new file
      if (!pattern || pattern.test(f)) {
        callback();
      }
    } else if (curr.nlink === 0) {
      // f was removed
      if (!pattern || pattern.test(f)) {
        callback();
      }
    } else {
      // f was changed
      if (!pattern || pattern.test(f)) {
        callback();
      }
    }
  });
};

watchDir(srcFolder, /\.(md|js|yml)$/, () => {
  throttle('updateStylemark', () => {
    updateStylemark();
  });
});

console.log('start webpack in watch mode...');

const webpackConfig = require(__dirname + '/../webpack.config.js');
const compiler = webpack(webpackConfig);

// we only run webpack to regenerate the dist folder.
// this means watch for scss changes and copy changes to the docs folder to force a browsersync update

compiler.watch(
  {
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined,
  },
  (err, stats) => {
    if (err) {
      console.error(err);
    }
    if (stats) {
      console.log('webpack updated');
      console.log('copy dist...');
      copy(distFolder + '/*', docsFolder + '/dist', (err) => {
        if (err) {
          console.error(err);
        }
        console.log('copy dist...done');
        // run stylemark when the docs doesn't exist.
        if (!fs.existsSync(`${docsFolder}/_stylemark`)) {
          updateStylemark();
        }
      });
    }
  },
);

// Run browserify for the documentation
console.log('Launching browser...');

var options = {
  ui: false,
  files: path.resolve(docsFolder, '**', '*.*'),
  watchEvents: ['add', 'change'],
  server: docsFolder,
  reloadDelay: 200,
  notify: false,
  ghostMode: false, // ghost mode causes cross-iframe weirdness
};
if (port) {
  options.port = port;
}
bs.init(options);
