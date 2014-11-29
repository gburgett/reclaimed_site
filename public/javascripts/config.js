window.jsHome = cfgUrl.replace(/config.js$/, "");
require.config({
	baseUrl: jsHome,
	paths: {
		"bootstrap": "lib/bootstrap.min",
		"skrollr": "lib/skrollr.min",
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min"
	}
});

require([window.page], function(){
	console.log(window.page + " loaded");
});