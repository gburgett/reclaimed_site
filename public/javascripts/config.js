window.jsHome = cfgUrl.replace(/config.js$/, "");
require.config({
	baseUrl: jsHome,
	paths: {
		async: 'plugins/async',
        googleapi: 'lib/googleapi',
		propertyParser: 'plugins/propertyParser',
		"bootstrap": "lib/bootstrap.min",
		"skrollr": "lib/skrollr.min",
		"jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min", "lib/jquery-1.11.1.min"],
		"modernizr": "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min",
		"respond": "https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min"
	},
	shim: {
		'bootstrap' : {
			deps: ['jquery']
		}
	}
});

require(['bootstrap', 'modernizr', 'respond', window.page], function(){

});
