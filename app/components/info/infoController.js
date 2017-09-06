var app = angular.module("profile");

app.controller("infoCtlr", ['$scope', '$routeParams', 'infoSrvc', function($scope, $routeParams, infoSrvc){
	$scope.student = {};
	$scope.params = '';

	$scope.general_list = ['firstname','lastname', 'university', 'degree','program']
	$scope.general_names = [['First Name', 1], ['Last Name', 1], ['University', 1], ['Degree', 1], ['Program', 1]]

	$scope.curriculum_list = ['difficulty', 'good_courses', 'bad_courses', 'professors']
	$scope.curriculum_names = [['Program Difficulty', 2], ['Good Courses', 5], ['Bad Courses', 5], ['About different Professors', 3]]

	$scope.financial_list = ['loan', 'scholarship']
	$scope.financial_names = ['Loan Details', 'Scholarship']

	$scope.employment_list = ['internship', 'coop', 'oncampus_jobs', 'job_hunt', 'assistantship']
	$scope.employment_names = ['Intership', 'Co-ops', 'On Campus Jobs', 'Job Hunt', 'Assistantships available?']

	$scope.networking_list = ['meetups', 'clubs', 'diversity']
	$scope.networking_names = ['Meetups to attend', 'Student Clubs', 'Diversity']

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
