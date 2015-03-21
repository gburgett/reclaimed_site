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
			var entry;

			var dt;
			var formatted;
			$.each(result.items, function(idx, e){
				if(e.start.dateTime){
					dt = new Date(e.start.dateTime)
					formatted = dt.toLocaleString();
				}
				else if(e.start.date){
					dt = new Date(e.start.date)
					formatted = new Date(dt.getTime() + (dt.getTimezoneOffset() * 60000)).toLocaleDateString();
				}
				if(dt > new Date()){
					entry = e;
					return false;
				}
			});
			if(!entry)
				return;
				

			var $title = $("<span>").text(entry.summary);

			$("#nextEvent .evtTitle").append($title);
			if(dt){
				$("#nextEvent .evtDate").text(formatted);
			}
			$("#nextEvent .evtDesc").html(entry.description);

		}
	});
});
