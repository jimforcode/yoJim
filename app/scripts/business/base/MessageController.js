define(function(require, exports, module) {
  //require('styles/userDetail.css');
  var template =require("template");

  console.log("MessageController is loading...");

  var Controller = function(){
    var controller = this;
    controller.actions={
      yo:function(){
        alert(" 我是Message点嘛点!");
      },
      jim:function(){
        alert(" 我是Message 再点试试!");
      },
      jimi:function(){
        alert(" 我是Message jimi was clicked!");
      }
    }

  };
  Controller.prototype.init=function(){


    var  user =template("app/templates/user/header",{sayhi:"这是MessageController 初始化信息..."});
    console.log(user);
    $('#jim-content').html(user);

  }

  module.exports = Controller;

});
