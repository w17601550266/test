const path = require('path');
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const Polyfill = require('node-polyfill-webpack-plugin')

const addfallback =(config)=>{
  config.resolve.fallback={
    "timers": false,
    buffer:false,
  }

  return config

}
module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components/'),
    '@utils': path.resolve(__dirname, 'src/utils/'),
    '@src': path.resolve(__dirname, 'src'),

  }),
  addWebpackPlugin(new Polyfill())
  // addfallback
);