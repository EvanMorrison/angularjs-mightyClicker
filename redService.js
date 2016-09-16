var app = angular.module("MightyClickApp");

app.service("RedService", function() {
	this.score = 100;

	this.increment = function() {
		return ++ this.score;
	}

	this.decrement = function() {
		this.score --;
		if (this.score === 0) {
			this.reset();
		}
		return this.score;
	}

	this.reset = function() {
		this.score = 100;
	}

});