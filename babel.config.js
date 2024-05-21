// This file is used by 'babel-loader' in webpack.config.js
// tsconfig.js should have compilerOptions { ..., "jsx": "react-jsx", "jsxImportSource": "jsx-dom", ... }
// webpack.config.js should have module.rules [ ..., { test: /\.tsx?$/, loader: "babel-loader", exclude: [/node_modules/] }, ... ] and resolve.extensions ['.tsx', '.js'].

const presets = [
   "@babel/preset-typescript",
   "@babel/preset-env",
];

const plugins = [
   [
      "@babel/plugin-transform-react-jsx",
      { runtime: "automatic", importSource: "jsx-dom", },
   ],
];

module.exports = {
   presets,
   plugins,
};