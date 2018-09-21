const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var dirname = process.cwd();
let config = {
  mode: 'production',
  entry: {
    app: ['./index.js'],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dev'),
    // compress: true,
    historyApiFallback:false,
        // historyApiFallback: {
        //     index: 'index.html'
        // },
        disableHostCheck: true,
        progress: true,
        // open: true,
        hot: true,
        inline: true,
    port: 8083,
  },
  plugins: [
    new CleanWebpackPlugin(['dev'],{
      "root": dirname
  }),
    new HtmlWebpackPlugin({
      title: 'ReactDemo',
    
      //filename: './src/index.html', // 调用的文件
      template: './index.html', // 模板文件
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true
    }
    }),
  ],
  output: {
    publicPath: '/dev/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dev/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        options: {
          plugins: ['transform-async-to-generator', 'transform-strict-mode', 'transform-object-assign', 'transform-decorators-legacy'],
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 这里是必须要加的，不然默认的值加载['.js','.json']为后缀的文件
  },
};

if (process.env.NODE_ENV === 'production') {
  config = Object.assign({}, config, {
    mode: 'production',
  });
} else {
  config = Object.assign({}, config, {
    mode: 'development',
    devtool: 'eval',
  });
}

module.exports = config;