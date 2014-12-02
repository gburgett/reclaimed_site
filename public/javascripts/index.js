require(['jquery', 'skrollr', 'modules/gcal'], function( $, skrollr, GCal ) {
	window.skrollerobj = skrollr.init({
			forceHeight: false
		});	
		
	var cal = new GCal("an8d1rjnd0qen3fq016jniq6ts%40group.calendar.google.com");
	cal.load().done(function(rss) {
		console.log("rss", rss.entries);
		var entry = rss.entries[0];
		if(entry){
			$("#nextEvent .evtTitle").text(entry.title);
			$("#nextEvent .evtDate").text(entry.content.when);
			$("#nextEvent .evtDesc").html(entry.content.desc);
		}
	});
});