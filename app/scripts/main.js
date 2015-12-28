define(function(require, exports, module) {
	require('director');
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
  var showAuthorInfo = function () { console.log("showAuthorInfo"); };
  var listBooks = function () { console.log("listBooks"); };

  var allroutes = function() {
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

  var seajsLoad =function(){
    //return ISeaJs.use('./scripts/business/base/InfoController');
    var  info=require('info');
    var  _info = new info();
    loadActions=_info.actions
   };
 //var action
  //
  // define the routing table.
  //
  var routes = {
    '/author': showAuthorInfo,
    '/books': listBooks,
    '/seajsLoad':seajsLoad
   };

  //
  // instantiate the router.
  //
  var router = Router(routes);

  //
  // a global configuration setting.
  //
  router.configure({
    on: allroutes
  });

  router.init();

  $(document).on("click", "[data-jim-action]", function(evt) {
   alert(" clicked me!");
    //console.log(evt = evt || window.event);


    var _this = $(this),
       actionName = _this.attr('data-jim-action');
      var action = loadActions[actionName];
    console.log(_this);
    console.log(actionName);
    console.log(action);
    action && $.isFunction(action) && action.call(_this, evt);
  });




 });

