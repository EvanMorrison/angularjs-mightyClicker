var app = angular.module("MightyClickApp");

app.service("RedService", function() {
	this.score = 100;
	this.title = "RedService Ready";

	this.changeScore = function(direction) {
		//increment the Blue Score up or down by one depending on the direction, if it gets to zero then reset to 100.
	}

});