const path = require("path")

function addStyleResource(rule) {
  rule.use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "src/assets/styles/index.less")//全局引入的less文件
      ]
  });
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"]
    types.forEach(type => addStyleResource(config.module.rule("less").oneOf(type)))
  }
}