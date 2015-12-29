define(function (require, exports, module) {
  require('director');
  var template =require("template");

  // var router =require("router");
  // var hash = decodeURI(window.location.hash);
  // alert(hash);

  //  var author = function () { console.log("author"); };
  //    var books = function () { console.log("books"); };
  //    var viewBook = function (bookId) {
  //      console.log("viewBook: bookId is populated: " + bookId);
  //    };
  //var seajsLoad =function(){
  //  ISeaJs.use('./scripts/business/base/InfoController');
  //};
  //
  //    var routes = {
  //      '/author': [author],
  //      '/books': [books, seajsLoad,function() {
  //        console.log("An inline route handler.");
  //      }],
  //      '/books/view/:bookId': [viewBook]
  //    };
  //
  //    var router = Router(routes);
  //
  //    router.init();
  var showAuthorInfo = function () {



    console.log("showAuthorInfo");
  };
  var listBooks = function () {

    console.log("listBooks");
  };

  var allroutes = function () {
    alert("我是on 方法执行的!");

    var route = window.location.hash.slice(2);
    var sections = $('section');
    var section;
    section = sections.filter('[data-route=' + route + ']');
    if (section.length) {
      sections.hide(250);
      section.show(250);
    }
  };
  var loadActions;
  var currentControlller;
  var seajsLoad = function () {
    //return ISeaJs.use('./scripts/business/base/InfoController');
    var CurrentControlller = require('info');
    currentControlller = new CurrentControlller();
    loadActions = currentControlller.actions;
    currentControlller.init();
   };
  var Msg = function () {
    alert("我是Message 我被执行辣!");
    //return ISeaJs.use('./scripts/business/base/InfoController');
    var CurrentControlller = require('message');
    currentControlller = new CurrentControlller();
    loadActions = currentControlller.actions;
    currentControlller.init();

  };

  var sub1Handle = function(){
    alert("sub1Handle!");
  };
  var sub2Handle = function(){
    alert("sub2Handle!");
  };
  var notFoundHandle = function(){
    alert("notFoundHandle!");
  };
  var beforeHandle = function(){
    //$(window).data("loadingHash", window.location.hash);

    // 加载loading
     var html =template("app/templates/loading",{});
      $(".loading").html(html);

  };
  var afterFoundHandle = function(){
    alert("afterFoundHandle!");
  };
  var  loading=function(){
      //加载处理函数之后 去掉loading

     setTimeout(function(){
       $(".loading").html("");
     },1500);

    };

  //var action
  //
  // define the routing table.
  //
  var routes = {
    '/author': showAuthorInfo,
    '/books': listBooks,
    '/seajsLoad': seajsLoad,
    '/message': Msg,
    '/top':{
      '/sub':sub1Handle,
      '/sub2':sub2Handle,

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
    //notfound:notFoundHandle,
    before:beforeHandle,
    //after:afterFoundHandle
  });

  router.init();





  $(document).on("click", "[data-jim-action]", function (evt) {
    alert(" clicked me!");
    var _this = $(this),
      actionName = _this.attr('data-jim-action');
    var action = loadActions[actionName];
      action && $.isFunction(action) && action.call(_this, evt);
  });

  // 若点击的a标签地址与当前地址相同时手动触发hashchange事件
  $(document).on("click", "a", function() {
    if (window.location.hash == $(this).attr("href")) {
      //$(window).trigger('hashchange.application');
      $(window).trigger('hashchange.app');
    }
  });


});

