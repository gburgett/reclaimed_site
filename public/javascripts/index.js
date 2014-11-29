require(['jquery', 'skrollr'], function( $, skrollr ) {
	window.skrollerobj = skrollr.init({
			forceHeight: false
		});
	console.log("created skroller", skrollerobj);
	
});