var app = angular.module("profile");

app.controller("profileCtlr", ['$scope', '$routeParams', '$window', 'profileSrvc', function($scope, $routeParams, $window, profileSrvc){
	$scope.user = {};
	$scope.params = '';

	$scope.programs = profileSrvc.getPrograms();
	$scope.degrees = profileSrvc.getDegrees();

	$scope.general_list = ['firstname','lastname', 'university', 'degree', 'program']
	$scope.general_names = ['First Name', 'Last Name', 'University', 'Degree', 'Program']


	profileSrvc.getUserById($routeParams.user_id, function(user){
		$scope.user = user;
		$scope.$apply();
	}, function(error){
		console.log(error);
	});

	//$scope.goToId = function(id){
		// this line is not working. have a state change here and use UI.router
	//	$location.path('#/https://google.com/'+id)
	//}

}]);
