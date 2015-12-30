define(function(require, exports, module) {
	  require('styles/userDetail.css');
   var template =require("template");


  var Controller = function(){
    var controller = this;
    controller.actions={
      yo:function(){
        alert(" 点嘛点!");
      },
      jim:function(){
        alert(" 再点试试!");
      },
      jimi:function(){
        alert("jimi was clicked!");
      }
    }

  };
  Controller.prototype.init=function(){


    var  user =template("app/templates/user/header",{sayhi:"这是InfoController 初始化信息..."});
    console.log(user);
    //$('#jim-header').html(user);

  }
  module.exports = Controller;

});
