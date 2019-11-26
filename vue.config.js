const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')   //导入插件
module.exports = {
 // 基本路径
 publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
 outputDir: 'dist', // 默认输出路径dist
 assetsDir: 'src', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
 indexPath: 'index.html',// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
 filenameHashing: true, //默认为True 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
 //如果你不需要生产环境的source map，可以将其设置为false以加速生产环境构建。Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。
 productionSourceMap: true,
 devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open:true, // 打开浏览器
    port: 9000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true //eslint会被输出到浏览器是上（为true）
    },
   // proxy: {
   //   '/api': {
   //     target: 'http://123.207.32.32:8000',
   //     changeOrigin: true, // 允许websockets跨域
   //     pathRewrite: {
   //       '^/api': ''
   //     }
   //   }
   // }
 },
 lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用 eslint
 integrity: true,

 configureWebpack: {
   resolve: {
    alias: {
     'assets': '@/assets',
     'common': '@/common',
     'components': '@/components',
     'network': '@/network',
     'views':'@/views',
      'mock':'@/mock'
    }
   },
 },

 css: {
   loaderOptions: {
     stylus: {
       'resolve url': true,
       'import': [
         './src/theme'
       ]
     }
   }
 },

 pluginOptions: {
   'cube-ui': {
     postCompile: true,
     theme: true
   }
 }

}
