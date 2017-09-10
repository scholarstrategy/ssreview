var app = angular.module("profile");

app.controller("infoCtlr", ['$scope', '$routeParams', '$window', 'infoSrvc', 'firebaseService', '$location',function($scope, $routeParams, $window, infoSrvc, firebaseService, $location){
	$scope.user = {};
	$scope.params = '';

	$scope.programs = firebaseService.getPrograms();
	$scope.degrees = firebaseService.getDegrees();
	$scope.years = firebaseService.getYears(2000, 2030);

	// $scope.general_list = ['firstname','lastname', 'university', 'degree','program']
	// $scope.general_names = [['First Name', 1], ['Last Name', 1], ['University', 1], ['Degree', 1], ['Program', 1]]

	// $scope.curriculum_list = ['difficulty', 'good_courses', 'bad_courses', 'professors']
	// $scope.curriculum_names = [['Program Difficulty', 2], ['Good Courses', 5], ['Bad Courses', 5], ['About different Professors', 3]]

	// $scope.financial_list = ['loan', 'scholarship']
	// $scope.financial_names = ['Loan Details', 'Scholarship']

	// $scope.employment_list = ['internship', 'coop', 'oncampus_jobs', 'job_hunt', 'assistantship']
	// $scope.employment_names = ['Intership', 'Co-ops', 'On Campus Jobs', 'Job Hunt', 'Assistantships available?']

	// $scope.networking_list = ['meetups', 'clubs', 'diversity']
	// $scope.networking_names = ['Meetups to attend', 'Student Clubs', 'Diversity']

	$scope.get_info_user = function(){
		infoSrvc.getInfoById($routeParams.user_id, function(user){
			$scope.user = user;
			getInfoStar();
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
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
