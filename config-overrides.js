const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components/'),
    '@utils': path.resolve(__dirname, 'src/utils/'),
    '@src': path.resolve(__dirname, 'src'),

  })
);