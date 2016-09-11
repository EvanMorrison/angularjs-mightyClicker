var app = angular.module("MightyClickApp", []);

app.controller("MCController", ["$scope", "BlueService", "RedService", function($scope, BlueService, RedService) {

	$scope.title = "Mighty Clicker"

	$scope.blueScore = BlueService.score;
	$scope.redScore = RedService.score;

	$scope.blueClick = function() {

		$scope.blueScore = BlueService.blueClick();
		$scope.redScore = RedService.blueClick();
	}

	$scope.redClick = function() {
		$scope.redScore = RedService.redClick();
		$scope.blueScore = BlueService.redClick();
	}	
		


}]);