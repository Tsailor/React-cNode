const path = require('path');  //引入路径
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 引入
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    //  css抽离
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {      //  导出
    entry: './src/index.js',    //    项目入口
    output: {                  //    输出 
      filename: 'bundle.js',    //    打包后的名字
      path: path.resolve(__dirname, 'build'),  //  当前路径下
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {   
      // host: 'localhost',
      // port: 8080,           //  配置 react-router 相关项
      contentBase: path.resolve(__dirname, 'build'),//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
      hot: true
    },
    module: {
      rules: [
        {
            test: /\.js$/,         //  打包 .js文件
            exclude: /node_modules/,   //  除了node_modules的文件
            use: {
              loader: "babel-loader",    //  使用 babel-loader
            }
        },
        {
            test: /\.css$/,         //  打包 .css文件
            exclude: /node_modules/,   //  除了node_modules的文件
            use: [
              {  
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: true,
                },
              },   //  将style插入到模板里
              {
                loader: 'css-loader?modules',    //   解析css
                options: {
                  modules: true
                }
              }
            ]
        },
        {//antd样式处理
            test:/\.css$/,
            exclude:/src/,
            use:[
                {  
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    esModule: true,
                  },
                },
                {
                    loader: "css-loader?modules",
                    options:{
                        importLoaders:1
                    }
                }
            ]
        }
      ],
    },
    plugins: [ 
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: 'cNode -- node.js中文社区',
          template: path.resolve('./public/index.html') ,  //  模板
          // favicon: './public/favicon.ico',
          favicon: path.resolve('./public/favicon.ico')
      }),
      new MiniCssExtractPlugin(),
    
      new webpack.HotModuleReplacementPlugin()
  
    ] 
}