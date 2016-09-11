var app = angular.module("MightyClickApp");

app.service("RedService", function() {
	this.score = 100;

	this.redClick = function() {
		return ++ this.score;
	}

	this.blueClick = function() {
		this.score --;
		if (this.score === 0) {
			this.score = 100;
		}
		return this.score;
	}

});