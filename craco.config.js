const path = require('path')
const CracoLessPlugin = require("craco-less");

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {

  //less的配置
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ],

  //配置webpack的配置
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }



}

