var app = angular.module("profile");

app.controller("profileCtlr", ['$scope', '$routeParams', '$window', 'profileSrvc', 'firebaseService', '$location', function($scope, $routeParams, $window, profileSrvc, firebaseService, $location){

	$scope.user = {};
	$scope.params = '';
	$scope.num = 3;
	$scope.show_page = false;
	$scope.show_confirm = false;

	$scope.programs = firebaseService.getPrograms();
	$scope.degrees = firebaseService.getDegrees();
	$scope.years = firebaseService.getYears(2000, 2030);
	$scope.user_status = ['Applicant', 'Graduate Student', 'Other']

	// $scope.general_list = ['firstname','lastname', 'university', 'degree', 'program']
	// $scope.general_names = ['First Name', 'Last Name', 'University', 'Degree', 'Program']

	$scope.get_user = function(){
		profileSrvc.getUserById($routeParams.user_id, function(user){
			$scope.user = user;
			$scope.show_page = true;
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
	}

	$scope.back = function(){
		$location.path('/students');
	}

	$scope.save = function(){
		console.log("came in save")
		$scope.show_page = false;
		if($scope.user != ""){
			profileSrvc.save($routeParams.user_id, $scope.user, function(success){
				$scope.show_page = true;
				$scope.show_confirm = true;
				$scope.$apply();
				console.log('saved');
			}, function(error){
				console.log("can't save it");
			});
		}
		else{
			alert("Status is blank. Please choose from options");
		}
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
