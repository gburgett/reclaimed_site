define(["jquery", 'googleapi'], function($, pGapi){


	function GCal(calendarId) {
		this.calendarId = calendarId;
		this.feedUrl = "https://www.google.com/calendar/feeds/" + calendarId + "/public/basic";
		
		var cal = new $.Deferred();
		this.pCalendar = cal.promise();
		pGapi.done(function(gapi){
			gapi.client.load('calendar', 'v3').then(function() { cal.resolve(gapi.client.calendar); });	
		})
	};
	
	GCal.prototype.load = function(){

		var dfd = new $.Deferred();

		var self = this;

		this.pCalendar.done(function(calendar) {
			console.log('listing ', self.calendarId);
			calendar.events.list({
				calendarId: self.calendarId,
				orderBy: 'startTime',
				timeMin: new Date().toISOString(),
				singleEvents: true
			}).then(
				function(resp){
					dfd.resolve(resp.result);
				},
				function(err){
					dfd.reject(err);
				}
				);
		});

		return dfd.promise();
	}
	
	return GCal;
});
