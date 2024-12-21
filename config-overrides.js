const path = require('path');
// const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

// module.exports = override(
//   addWebpackAlias({
//     '@components': path.resolve(__dirname, 'src/components/'),
//     '@utils': path.resolve(__dirname, 'src/utils/'),
//     '@src': path.resolve(__dirname, 'src'),

//   }),
//   addWebpackPlugin(new NodePolyfillPlugin())
//   // addfallback
// );

// config-overrides.js
module.exports =
  (config, env) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@common': path.join(__dirname, 'src/common'),
        '@store': path.join(__dirname, 'src/store')
      }
    };

    config.plugins.push(new NodePolyfillPlugin());
    if (env === 'production') {
      config.devtool = false;
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)/,
            name: 'vendors-react',
            chunks: 'all'
          }

        }
      };
    }

    return config;
  }