var app = angular.module("profile");

app.controller("infoCtlr", ['$scope', '$routeParams', 'infoSrvc', function($scope, $routeParams, infoSrvc){
	$scope.student = {};
	$scope.params = '';

	$scope.programs = infoSrvc.getPrograms();
	$scope.degrees = infoSrvc.getDegrees();

	$scope.general_list = ['firstname','lastname', 'university', 'degree', 'program']
	$scope.general_names = ['First Name', 'Last Name', 'University', 'Degree', 'Program']


	infoSrvc.getStudentById($routeParams.student_id, function(student){
		$scope.student = student;
		$scope.$apply();
	}, function(error){
		console.log(error);
	});

	//$scope.goToId = function(id){
		// this line is not working. have a state change here and use UI.router
	//	$location.path('#/https://google.com/'+id)
	//}

}]);
