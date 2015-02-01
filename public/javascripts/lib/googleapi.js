define(['jquery'], function(){
    
    var dfd = $.Deferred();

	$.getScript('https://apis.google.com/js/client.js', function(){
		if(gapi){
			gapi.client.setApiKey('AIzaSyDMFX62aX1-hpVyydmrSMZ-ykkdJShm9qs');
			dfd.resolve(gapi);
		}
		else{
			console.log("unable to load google api");
			dfd.reject();
		}
	});

    return dfd.promise();
});
