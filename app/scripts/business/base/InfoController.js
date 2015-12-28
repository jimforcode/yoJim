define(function(require, exports, module) {
	  require('styles/userDetail.css');
  console.log(" this is what i'm doing .....这是会加载的info.........");

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



  //exports.sayS = function(msg){
  //  console.log(" well done ! "+msg);
  //}
  module.exports = Controller;

});
