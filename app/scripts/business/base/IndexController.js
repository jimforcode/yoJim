define(function(require, exports, module) {
  require('styles/index.css');
  var template =require("template");


  var Controller = function(){
    var controller = this;
    controller.actions={
      showUserInfo:function(){
        alert(" 点嘛点!");
      }

    }

  };
  Controller.prototype.init=function(){


    var menu=[{"title":"index","dist":"index"},{"title":"饮马江湖","dist":"seajsLoad"},{"title":"浓烟下的诗歌电台","dist":"message"},{"title":"XXXXXX","dist":"message"}];

    var  menu =template("app/templates/index/index",{menu:menu});
    console.log(menu);
    $('#jim-header').html(menu);
    var  content =template("app/templates/index/info",{});

    $('#jim-content').html(content);
  }
  module.exports = Controller;

});
