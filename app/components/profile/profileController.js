var app = angular.module("profile");

app.controller("profileCtlr", ['$scope', '$routeParams', '$window', 'profileSrvc', 'firebaseService', '$location', function($scope, $routeParams, $window, profileSrvc, firebaseService, $location){

	$scope.user = {};
	$scope.params = '';
	$scope.num = 3;

	$scope.programs = firebaseService.getPrograms();
	$scope.degrees = firebaseService.getDegrees();
	$scope.years = firebaseService.getYears(2000, 2030);

	// $scope.general_list = ['firstname','lastname', 'university', 'degree', 'program']
	// $scope.general_names = ['First Name', 'Last Name', 'University', 'Degree', 'Program']

	$scope.get_user = function(){
		profileSrvc.getUserById($routeParams.user_id, function(user){
			$scope.user = user;
			getStar();
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
	}

	$scope.change_show = function(val){
		$scope.user.show = val;
		profileSrvc.save($routeParams.user_id, $scope.user, function(success){
			$scope.$apply();
		}, function(error){
			$scope.user.show = !val;
		});
	}

	$scope.save = function(){
		console.log("came in save")
		profileSrvc.save($routeParams.user_id, $scope.user, function(success){
			$scope.$apply();
			console.log('saved');
		}, function(error){
			console.log("can't save it");
		});
	}

	$scope.profile_signOut = function(){
		firebaseService.signOut();
		$location.path('/login?msg=Logged out successfully');
	}

	if($window.sessionStorage['id'] != undefined && $window.sessionStorage['id'] != null){
		$scope.get_user();
	}
	else{
		$location.path('/login?msg=You need to login first');
	}
}]);
