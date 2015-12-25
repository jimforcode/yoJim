define({
	"index": {
		controller: "base/InfoController",
		template: "base/info"
	},
	"user/:userId/edit": {
		regExp: "user\\/([a-zA-Z0-9\\-]+)\\/edit",
		controller: "user/editController",
		template: "user/edit"
	},


});