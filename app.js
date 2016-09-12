var app = angular.module("MightyClickApp", []);

app.controller("MCController", ["$scope", "BlueService", "RedService", function($scope, BlueService, RedService) {

	$scope.title = "Mighty Clicker"

	$scope.blueScore = BlueService.score;
	$scope.redScore = RedService.score;

	$scope.blueClick = function() {

		$scope.blueScore = BlueService.increment();
		$scope.redScore = RedService.decrement();
	}

	$scope.redClick = function() {
		$scope.redScore = RedService.increment();
		$scope.blueScore = BlueService.decrement();
	}	
		


}]);