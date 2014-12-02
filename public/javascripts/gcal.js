define(["jquery", "goog!feeds"], function($){
	
	function GCal(calendarId) {
		this.calendarId = calendarId;
		this.feedUrl = "https://www.google.com/calendar/feeds/" + calendarId + "/public/basic";
		this.feed = new google.feeds.Feed(this.feedUrl);	
		
	};
	
	GCal.prototype.load = function(){
		var dfd = new $.Deferred();
	
		if(!this.rss || this.reloadAt > Date.now()){
			this.feed.load(function(result){
				if(!result.error){
					this.rss = result.feed;
					for(i = 0; i < this.rss.entries.length; i++)
						this.rss.entries[i].content = _parseContent(this.rss.entries[i].content);
						
					this.reloadAt = Date.now() + (5 * 60 * 1000);
					dfd.resolve(this.rss);
				}
				else{
					dfd.reject(result.error);
				}
			});
		}
		else{
			dfd.resolve(this.rss);
		}
		
		return dfd.promise();
	}
	
	
	/*
When: Wed Dec 3, 2014 10am to 11am 
CST<br>

<br>Where: Del&#39;s Charcoal Burgers, 110 S McKinney St, Richardson, TX 75081, United States
<br>Event Status: confirmed
<br>Event Description: This is the description of the event.

Can it handle inline HTML? <b>this should be bold</b>
Here&#39;s the google logo:
<img src="void.gif">
	*/	
	function _parseContent(contentStr){
		var rWhen = /When:(.+)<br>/i
		var rWhere = /Where:(.+)<br>/i
		
		var when = rWhen.exec(contentStr)[1];
		var where = rWhere.exec(contentStr)[1];
		
		return {
			raw: contentStr,
			when: when,
			where: where
		};
	}
	
	return GCal;
});