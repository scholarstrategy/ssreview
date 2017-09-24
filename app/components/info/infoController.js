var app = angular.module("profile");

app.controller("infoCtlr", ['$scope', '$routeParams', '$window', 'infoSrvc', 'firebaseService', '$location',function($scope, $routeParams, $window, infoSrvc, firebaseService, $location){
	$scope.student_data = {};
	$scope.params = '';
	id = $routeParams.user_id;

	$scope.get_info_user = function(){
		firebaseService.getUserById(id, function(user){
			firebaseService.getReviewById(id, function(rev){
				$scope.student_data = Object.assign(user, rev);
				$scope.$apply();
				getStar();
			}, function(error){console.log(error)});
		}, function(error){
			console.log(error);
		});
	}

	$scope.back = function(){
		$location.path('/students');
	}

	$scope.info_signOut = function(){
		firebaseService.signOut();
		$location.path('/login?msg=Logged out successfully');
	}

	if($window.sessionStorage['id'] != undefined && $window.sessionStorage['id'] != null){
		$scope.get_info_user();
	}
	else{
		$location.path('/login?msg=You need to login first');
	}

}]);
