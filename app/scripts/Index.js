/**
 * Created by zj on 15/12/23.
 */
define(function(require, exports, module) {


  //require('styles/user.css');

  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }

  var template =require("template");
  var user11={
    name:"aaaaa"
    },
    user12={
    name:"bbbb"
  }

  var users =[];
  users=users.concat(user11);
  users=users.concat(user12);



 var  user =template("app/templates/user/header",{sayhi:"this is what i have done! good job, Jim"});
  console.log(user);
  $('#jim-header').html(user);



  console.log(" 参数获取: "+getQueryString('skip'));
  if(getQueryString('skip')=='detail'){
    require('styles/userDetail.css');
    var content =template("app/templates/user/userDetail",{name:"Jim",say:"bulabula"});
    $('#jim-content').html(content);

  }else{
    require('styles/user.css');
    var content =template("app/templates/user/userInfo",{users:users});
    $('#jim-content').html(content);
  }
});
