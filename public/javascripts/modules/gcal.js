define(["jquery", "goog!feeds"], function($){
	
	function GCal(calendarId) {
		this.calendarId = calendarId;
		this.feedUrl = "https://www.google.com/calendar/feeds/" + calendarId + "/public/basic?seed=" + new Date().toDateString();
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
	
	
	function _parseContent(contentStr){
		var rWhen = /When: ((?:.|[\r\n])+?)<br>/m
		var rWhere = /Where: ((?:.|[\r\n])+?)<br>/m
		
		var when = rWhen.exec(contentStr);
		if(when) when = when[1];
		var where = rWhere.exec(contentStr);
		if(where) where = where[1];
		
		var desc = contentStr.lastIndexOf("Event Description: ");
		if(desc && desc >= 0)
			desc = contentStr.substring(desc + "Event Description: ".length);
		else
			desc = null;
		
		var start = when.split(' to ')[0];
		start = start.match(/\b(?:(?:Mon)|(?:Tues?)|(?:Wed(?:nes)?)|(?:Thur?s?)|(?:Fri)|(?:Sat(?:ur)?)|(?:Sun))(?:day)?\b[:\-,]?\s*[a-zA-Z]{3,9}\s+\d{1,2}\s*,?\s*\d{4}/);
		
		return {
			raw: contentStr,
			when: when,
			where: where,
			desc: desc,
			start: new Date(start)
		};
	}
	
	return GCal;
});
