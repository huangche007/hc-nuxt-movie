
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: "电影、经典电影、热映、电视剧、美剧、影评、电影院、电影票、排行、推荐" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/menu/style/css',
    'ant-design-vue/lib/breadcrumb/style/css',
    'ant-design-vue/lib/card/style/css',
    'ant-design-vue/lib/layout/style/css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/deal_img',
    '@/plugins/ctx_names',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  *
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': { 
      target: 'https://api.douban.com/',//这个网站是开源的可以请求到数据的
      pathRewrite: {
         '^/api/': '/',
         changeOrigin: true
      }    
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push(...[{
      //     test:/\.less$/,
      //     use:[
      //       'style-loader',
      //       'css-loader',
      //       'less-loader'
      //     ]
      //   }])
      // }
    }
  }
}
