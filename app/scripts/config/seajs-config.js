/**
 * Created by zj on 15/12/23.
 */
seajs.config({
  //base: "../sea-modules/",
  alias: {
    "jim": "scripts/template",
    "userController": "scripts/business/UserController",
    "main":"scripts/main"
  },
  // 变量配置
  vars: {
    "locale": "zh-cn"
  },
  // 调试模式
  debug: false,

  // Sea.js 的基础路径
  // base: "/oa/",
  base: "/",

  // 文件编码
  charset: "utf-8"
});
(function() {
  var ISeaJs = window.ISeaJs = window.ISeaJs || {};


  // 封装seajs模块
    ISeaJs.use = seajs.use;
})();
