const path = require('path')
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {// 环境配置
    host: '0.0.0.0',
    port: 8080,
    open: true //配置自动启动浏览器
  },
  chainWebpack: config => {
    // #region svg-config
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.resolve('src/assets/icons'))
    // #endregion svg-config


  }
};