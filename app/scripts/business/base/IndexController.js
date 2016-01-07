define(function(require, exports, module) {
  require('styles/index.css');
  require('styles/bootstrap.css');
  require('styles/bootstrap-datetimepicker.css');
  var ajaxHandle= require("ajaxHandle");
  var template =require("template");


  var Controller = function(){
    var controller = this;
    controller.actions={
      showUserInfo:function(){
        ajaxHandle({
          url: 'date',
          data: {
            dataValue:dataValue
            // keyword: keyword
          }}).done(function(data){



          console.log(data);
        }).fail(function(err){}).always(function(data){
          console.log("i 'm always ...");
        });
      }

    }

  };
  Controller.prototype.init=function(){


    var menu=[{"title":"index","dist":"index"},{"title":"饮马江湖","dist":"seajsLoad"},{"title":"浓烟下的诗歌电台","dist":"message"},{"title":"XXXXXX","dist":"message"}];

    var  menu =template("app/templates/index/index",{menu:menu});
    console.log(menu);
    $('#jim-header').html(menu);
    var  content =template("app/templates/index/info",{date:Date.parse(new Date())});

    $('#jim-content').html(content);

    $(".form_datetime").datetimepicker({format: 'yyyy/MM/dd hh:mm'});
    //$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
       //var  dataValue =Date.parse($(".form_datetime").val());

// $.ajax({
//   url: "/backendyo/",
//   beforeSend: function( xhr ) {
//     xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
//   }
// })
//   .done(function( data ) {
//     if ( console && console.log ) {
//       console.log( "Sample of data:", data.slice( 0, 100 ) );
//     }
//   });




  }
  module.exports = Controller;

});
