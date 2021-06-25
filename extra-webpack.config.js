const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;

const webpackMerge = require("webpack-merge");
const { packageName } = require('./package');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  // singleSpaWebpackConfig.externals = [''];

  const singleSpaConfig = {
    output: {
      library: 'ecs-front',
      // library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${packageName}`,
      publicPath: 'http://localhost:10300/'
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = webpackMerge.smart(
    singleSpaWebpackConfig,
    singleSpaConfig
  );
  return mergedConfig;
};
