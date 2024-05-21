// //@ts-check
// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const subDir = path.basename(__dirname);
// const outPrefix = `${subDir}/`;

// module.exports = {
//   entry: './src/App.tsx',
//   mode: "production",
//   devtool: 'source-map',
//   optimization: { minimize: true, splitChunks: { chunks: 'all' } },
//   module: { rules: [{ test: /\.tsx?$/, loader: "babel-loader", exclude: [/node_modules/] }] },
//   resolve: { extensions: ['.tsx', '.js', '.ts'] },
//   output: {
//     publicPath: `./`,
//     path: path.resolve(__dirname, `../dist`),
//     filename: `${outPrefix}[name].[contenthash].js`,
//     sourceMapFilename: `${outPrefix}[name].map`,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: 'index.template.html', filename: `index.html` }),
//     new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['!**', `${outPrefix}**`] }),
//     new webpack.DefinePlugin({ 'process.env': JSON.stringify(env) }),
//   ],
// };


//@ts-check
const { resolve } = require('path');
const { globSync } = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('./.env');
const { existsSync, rmSync, readFileSync, writeFileSync } = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


const isDev = process.argv.indexOf('serve') !== -1;

const paths = {
  root: resolve(__dirname),
  rootTemplate: resolve(__dirname, 'index.template.html'),
  pages: resolve(__dirname, 'src', 'pages'),
  dist: resolve(__dirname, 'dist'),
  dist_static: resolve(__dirname, 'dist', 'static'),
}

const pages = globSync('*.tsx', { cwd: paths.pages }).map(fname => {
  const key = fname.replace(/\.tsx$/, '')
  const tsx = resolve(paths.pages, fname);
  let html = resolve(paths.pages, `${key}.template.html`);
  if (!existsSync(html)) html = paths.rootTemplate;
  return { key, tsx, html };
});

const assertNoOtherProcessIsRunning = (() => {
  const lockFile = resolve(__dirname, `.webpack${isDev ? '.dev' : ''}.lock`);
  writeFileSync(lockFile, JSON.stringify({ pid: process.pid }));
  const nodemonPid = parseInt(process.env.NODEMON_PID || '0') || null;
  const quit = (msg) => {
    console.error(msg);
    if (nodemonPid) process.kill(nodemonPid, 'SIGUSR2');
    process.exit(0);
  }
  return () => {
    if (!existsSync(lockFile)) quit('Lock file not found. Another process is running?');
    const lock = JSON.parse(readFileSync(lockFile, 'utf8'))
    if (lock.pid !== process.pid) quit(`Another process is running: ${lock.pid}`);
  }
})();

class MyPlugin {
  apply(/** @type {webpack.Compiler}*/ compiler) {
    compiler.hooks.shouldEmit.tap('MyPlugin', this.shouldEmit);
    compiler.hooks.afterDone.tap('MyPlugin', this.afterDone);
    compiler.hooks.emit.tap('MyPlugin', this.emit);
  }
  shouldEmit(compilation) {
    assertNoOtherProcessIsRunning();
    if (!isDev) {
      let toRemove = globSync(['*.html', 'bundles/*'], { cwd: paths.dist });
      toRemove = toRemove.filter(f => !compilation.assets[f]);
      console.log(`Assets are ready. Cleaning ${toRemove.length} existing files before saving them`);
      for (let f of toRemove) rmSync(resolve(paths.dist, f));
    }
    return true;
  }
  afterDone() {
    console.log('Webpack finished at', new Date().toLocaleTimeString());
  }
  emit(compilation) {
    const scriptsToInject = () => [
      // Server base by default; switch to file-mode if needed
      `<base href="${env.BASE_URL || ''}/"><script>if(location.protocol === 'file:'){document.querySelector('base').href="${paths.dist}/";}</script>`,
      `<script>console.info(\`This page was compiled \${((new Date().getTime() - new Date("${new Date().toISOString()}").getTime())/1000).toFixed(0)}s ago\`)</script>`,
    ];
    Object.keys(compilation.assets).forEach((key) => {
      if (key.endsWith('.html')) {
        let code = compilation.assets[key].source();
        code = code.replace(/<head>/i, `<head>${scriptsToInject().join('')}`);
        compilation.assets[key] = { source: () => code, size: () => code.length };
      }
    });
  }
};

module.exports = {
  entry: Object.fromEntries(pages.map(({ key, tsx }) => [key, tsx])),
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "babel-loader", exclude: [/node_modules/], options: { cacheDirectory: true } },
    ]
  },
  resolve: { extensions: ['.tsx', '.js', '.ts'] },
  plugins: [
    ...pages.map(({ key, html }) => new HtmlWebpackPlugin(
      { filename: `${key}.html`, template: html, chunks: [key] }
    )),
    new MyPlugin(),
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(env) }),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['bundles/**'] }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/dist/',
      generate: (seed, files) => {
        const manifest = files.reduce((manifest, { name, path }) => {
          manifest[name || ''] = path;
          return manifest;
        }, seed);
        return manifest;
      }
    })
  ],
  // performance: { assetFilter: (s) => !silencedWarnings.includes(s) },
  // cache: { type: 'filesystem', cacheDirectory: resolve(__dirname, '.cache') },
  cache: true,
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        katex: {
          test: /[\\/]node_modules[\\/]katex[\\/]/,
          name: 'katex',
          chunks: 'all',
        },
        revealJS: {
          test: /[\\/]node_modules[\\/]reveal\.js[\\/]/,
          name: 'revealJS',
          chunks: 'all',
        },
        other_node_modules: {
          test: /[\\/]node_modules[\\/]/,
          name: 'other_node_modules',
          chunks: 'all',
        },
      },
    },
  },
  ...isDev ? {
    mode: "development",
    output: {
      publicPath: '',
      path: paths.dist,
      filename: `bundles/[name].dev.js`,
    },
    devServer: {
      static: paths.dist,
      port: 9010,
      hot: true,
      open: true,
    },
    // target: 'browserslist:> 0.25%, not dead',
  } : {
    mode: "production",
    output: {
      publicPath: '',
      path: paths.dist,
      filename: `bundles/[name].[contenthash].js`,
      sourceMapFilename: `bundles/[name].[contenthash].map`,
    },
    // devtool: 'cheap-module-source-map',
    watchOptions: { aggregateTimeout: 200 },
  },
};