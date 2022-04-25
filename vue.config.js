module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                   @import "@/assets/scss/_colors.scss";   
                  @import "@/assets/scss/_fonts.scss";                
                  @import "@/assets/scss/_main.scss"; 
                `
            }
        }
    },
    configureWebpack: {
        module: {
          rules: [
            {
              test: /\.pug$/,
              oneOf: [
                {
                  resourceQuery: /^\?vue/,
                  use: ['pug-plain-loader']
                },
                {
                  use: ['raw-loader', 'pug-plain-loader']
                }
              ]
            },
          ],
          
        }
      }
}