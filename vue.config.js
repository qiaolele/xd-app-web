const ip = require("ip");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/newPage/" : "/",

  outputDir: "dist",

  filenameHashing: true,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  devServer: {
    open: true,

    host: ip.address(),

    port: 8080,

    https: false,

    hotOnly: false,

    proxy: {
      "/api": {
        // target: "http://192.168.0.18:8080", //后台本地环境——梁城
        // target: "http://192.168.2.112:8080", //后台本地环境——苑奥奇
        // target: "http://xindaiguanjia-app-dev.itkyd.com", //测试
        target: "http://xindaiguanjia-app-prod.itkyd.com", //正式域名
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },

    disableHostCheck: true, //  新增该配置项

    before: (app) => {},
  },
  // 第三方插件配置
  pluginOptions: {},
};
