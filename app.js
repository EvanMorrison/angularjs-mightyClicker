var app = angular.module("MightyClickApp", []);

app.controller("MCController", ["$scope", "BlueService", "RedService", function($scope, BlueService, RedService) {

	$scope.title = "Mighty Clicker"
	$scope.BlueTitle = BlueService.title;
	$scope.RedTitle = RedService.title;

	$scope.changeScores = function() {

		BlueService.changeScore();
		RedService.changeScore();


	}	
		


}]);