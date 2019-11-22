module.exports = {
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
     }
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
