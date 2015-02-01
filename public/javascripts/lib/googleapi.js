define(['jquery'], function(){
    
    var dfd = $.Deferred();

    window.handleClientLoad = function(){
    	gapi.client.setApiKey('AIzaSyDMFX62aX1-hpVyydmrSMZ-ykkdJShm9qs');
			dfd.resolve(gapi);
    }

	$.getScript('https://apis.google.com/js/client.js?onload=handleClientLoad');

    return dfd.promise();
});
