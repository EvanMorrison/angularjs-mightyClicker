var app = angular.module("MightyClickApp");

app.service("BlueService", function() {
	this.score = 100;

	this.blueClick = function() {
		return ++ this.score;
	}
	this.redClick = function() {
		this.score --;
		if (this.score === 0) {
			this.score = 100;
		}
		return this.score;
	} 
});
