var app = angular.module("profile");

app.controller("reviewCtlr", ['$scope', '$routeParams', '$window', 'reviewSrvc', 'firebaseService', '$location', function($scope, $routeParams, $window, reviewSrvc, firebaseService, $location){

	$scope.user = {};
	$scope.review = {};
	$scope.review.rating = 0;
	$scope.show_page = false;
	$scope.show_confirm = false;
	id = $routeParams.user_id;
	$scope.num = 3;

	$scope.programs = firebaseService.getPrograms();
	$scope.degrees = firebaseService.getDegrees();
	$scope.years = firebaseService.getYears(2010, 2025);
	$scope.universities = firebaseService.getUniversities();
	$scope.programs = firebaseService.getPrograms();

	// $scope.general_list = ['firstname','lastname', 'university', 'degree', 'program']
	// $scope.general_names = ['First Name', 'Last Name', 'University', 'Degree', 'Program']

	$scope.get_user = function(){
		firebaseService.getUserById(id, function(user){
			$scope.user = user;
			if(user.reviewed == true){
				firebaseService.getReviewById(id, function(rev){
					$scope.review = rev;
					$scope.$apply()
					getStar();
				}, function(error){console.log(error)});
			}else{
				console.log("nothing")
				getStar();
			}
			$scope.show_page = true;
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
	}

	// $scope.change_show = function(val){
	// 	$scope.user.show = val;
	// 	reviewSrvc.save($routeParams.user_id, $scope.user, function(success){
	// 		$scope.$apply();
	// 	}, function(error){
	// 		$scope.user.show = !val;
	// 	});
	// }
	$scope.back = function(){
		$location.path('/students');
	}

	check_empty = function(val){
		return val == undefined || val == "";
	}

	check_validation = function(){
		return !(check_empty($scope.review.year_joined) || check_empty($scope.review.year_graduated) || check_empty($scope.review.university) || check_empty($scope.review.program) || check_empty($scope.review.degree) || check_empty($scope.review.overall) || check_empty($scope.review.recommend) || check_empty($scope.review.rating));
	}

	$scope.save = function(){
		// reviewSrvc.save($routeParams.user_id, $scope.user, function(success){
		// 	$scope.$apply();
		// 	console.log('saved');
		// }, function(error){
		// 	console.log("can't save it");
		// });
		if(check_validation()){
			$scope.show_page = false;
			$scope.user.reviewed = true;
			reviewSrvc.saveReview(id, $scope.review, function(){
				reviewSrvc.save(id, $scope.user, function(){
					$scope.show_page = true;
					$scope.show_confirm = true;
					$scope.$apply();
				});
			});
		}
		else{
			alert("Please fill all marked fields");
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
