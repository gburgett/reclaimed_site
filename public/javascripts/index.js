require(['jquery', 'skrollr', 'modules/gcal'], function( $, skrollr, GCal ) {
	window.skrollerobj = skrollr.init({
			forceHeight: false
		});	
		
	var cal = new GCal("an8d1rjnd0qen3fq016jniq6ts%40group.calendar.google.com");
	cal.load().done(function(rss) {
		console.log('rss', rss);
		rss.entries.sort(function(a, b){ 
		 if(a.content.start < b.content.start){
		 	return -1;
		 }
		 return 1;
		});

		console.log("sorted", rss.entries);

		var entry = undefined;
		for(var i = 0; i < rss.entries.length; i++)
			if(rss.entries[i].content.start > new Date())
			{
				entry = rss.entries[i];
				break;
			}

		if(entry){
			var $title = $("<span>").text(entry.title);
			var $desc = $("<span>").text(entry.desc);

			$("#nextEvent .evtTitle").append($title).append($("<br/>")).append($desc);
			$("#nextEvent .evtDate").text(entry.content.when);
			$("#nextEvent .evtDesc").html(entry.content.desc);

			$("#nextEvent").click(function(){
				window.location = entry.link;
			});
		}
	});
});