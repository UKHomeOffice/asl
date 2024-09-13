const path = require('path');
const { merge } = require('webpack-merge');
const pages = path.dirname(require.resolve('@asl/pages/package.json'));
const defaults = require('@asl/service/ui/webpack.config');
const babelrc = require('@asl/service/.babelrc.json');

const config = merge(
  defaults([
    {
      dir: pages,
      ignore: ['./pages/common/**', '**/pdf/**']
    },
    __dirname
  ]),
  {
    output: {
      path: path.resolve(__dirname, './public/js')
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!(@joefitter|@asl|@ukhomeoffice)\/).*/,
          use: {
            loader: 'babel-loader',
            options: babelrc
          }
        }
      ]
    }
  }
);

module.exports = config;
