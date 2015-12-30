define(function (require, exports, module) {
  require('director');
  var template = require("template");
  var index = require("index");

  var loadActions;
  var currentControlller;


  var seajsLoad = function () {
    var CurrentControlller = require('info');
    currentControlller = new CurrentControlller();
    loadActions = currentControlller.actions;
    currentControlller.init();
  };
  var Msg = function () {
    var CurrentControlller = require('message');
    currentControlller = new CurrentControlller();
    loadActions = currentControlller.actions;
    currentControlller.init();

  };
 var reloadWindow = function(){
      window.location.href=window.location.host+window.location.port;
 }
  var sub1Handle = function () {
    alert("sub1Handle!");
  };
  var sub2Handle = function () {
    alert("sub2Handle!");
  };
  var notFoundHandle = function () {
     $('#jim-content').html("页面飞走了!");
   };
  var beforeHandle = function () {
    // 加载loading
    var html = template("app/templates/loading", {});
    $(".loading").html(html);


  };
  // 路由变了之后 清空之前 路由处理对象
  var afterFoundHandle = function () {
    alert("afterFoundHandle!");
  };
  var loading = function () {
    //加载处理函数之后 去掉loading

    setTimeout(function () {
      $(".loading").html("");
    }, 500);

  };

  //var action
  //
  // define the routing table.
  //
  var routes = {
     'index':reloadWindow,
     '/seajsLoad': seajsLoad,
    '/message': Msg,
    '/top': {
      '/sub': sub1Handle,
      '/sub2': sub2Handle,

    },

  };

  //
  // instantiate the router.
  //
  var router = Router(routes);

  //
  // a global configuration setting.
  //
  router.configure({
    on: loading,
    //on: allroutes,
    notfound:notFoundHandle,
    before: beforeHandle,
    //after:afterFoundHandle
  });

  router.init();
  var index = new index();
  index.init();

  $(document).on("click", "[data-jim-action]", function (evt) {
    alert(" clicked me!");
    var _this = $(this),
      actionName = _this.attr('data-jim-action');
    var action = loadActions[actionName];
    action && $.isFunction(action) && action.call(_this, evt);
  });

  // 若点击的a标签地址与当前地址相同时手动触发hashchange事件
  $(document).on("click", "a", function () {
    if (window.location.hash == $(this).attr("href")) {
      $(window).trigger('hashchange');
    }
  });


});

