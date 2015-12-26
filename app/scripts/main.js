define(function(require, exports, module) {
	require('director');
	// var router =require("router");
	// var hash = decodeURI(window.location.hash);
	// alert(hash);

var author = function () { console.log("author"); };
      var books = function () { console.log("books"); };
      var viewBook = function (bookId) {
        console.log("viewBook: bookId is populated: " + bookId);
      };

      var routes = {
        '/author': [author],
        '/books': [books, require("extend"),function() {
          console.log("An inline route handler.");
        }],
        '/books/view/:bookId': [viewBook, ISeaJs.use('./scripts/business/base/InfoController')]
      };

      var router = Router(routes);

      router.init();



 });

