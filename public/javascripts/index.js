require(['jquery', 'skrollr', 'modules/gcal', 'bootstrap'], function( $, skrollr, GCal ) {
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	}


	$('[data-toggle="popover"]').popover();
		
	var cal = new GCal("67gfi1ooq8ie2rs1h5smhmm2pg@group.calendar.google.com");
	cal.load().done(function(result) {
		console.log('rss', result.items);
		

		if(result.items.length > 0){
			var entry = result.items[0];
			var $title = $("<span>").text(entry.summary);

			$("#nextEvent .evtTitle").append($title);
			$("#nextEvent .evtDate").text(new Date(entry.start.dateTime).toLocaleString());
			$("#nextEvent .evtDesc").html(entry.description);

		}
	});
});
