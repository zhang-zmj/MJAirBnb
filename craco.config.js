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


/*
依赖版本：
create-react-app： 3.4.1
@craco/craco： 5.6.4
craco-less： 1.16.0
antd： 4.2.4
@babel/plugin-proposal-decorators​​​​​​​： 7.8.3
babel-plugin-import​​​​​​​： 1.13.0

https://blog.csdn.net/qq_39223195/article/details/106287522
*/
