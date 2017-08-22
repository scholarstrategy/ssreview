var app = angular.module("profile");

app.controller("studentCtrl", ['$scope', 'studentSrvc', '$location', function($scope, studentSrvc, $location){
	$scope.students = [];

	studentSrvc.getStudents(function(students){
		$scope.students = students;
		console.log(students);
		$scope.$apply();
	}, function(error){
		console.log(error);
	});

	$scope.goToId = function(id){
		// this line is not working. have a state change here and use UI.router
		$location.path('#/https://google.com/'+id)
	}
}]);
