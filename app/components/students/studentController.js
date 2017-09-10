var app = angular.module("profile");

app.controller("studentCtlr", ['$scope', '$window', 'studentSrvc', '$location', 'firebaseService', function($scope, $window, studentSrvc, $location,firebaseService){
	$scope.students = [];

	$scope.populateStudents = function(){
		studentSrvc.getStudents(function(students){
			$scope.students = students;
			// getStarStudents();
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
	}

	$scope.goToId = function(id){
		$location.path('/info/'+id)
	}

	$scope.edit = function(){
		console.log('edit is called')
		$location.path('/profile/'+$window.sessionStorage['id']);
	}

	$scope.student_signOut = function(){
		firebaseService.signOut();
		$location.path('/login?msg=Logged out successfully');
	}

	if($window.sessionStorage['id'] != undefined && $window.sessionStorage['id'] != null){
		$scope.populateStudents();
	}
	else{
		$location.path('/login?msg=You need to login first');
	}
}]);
