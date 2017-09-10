var app = angular.module("profile");

app.controller("loginCtlr", ['$scope', '$window','$location', 'loginSrvc', 'firebaseService', function($scope, $window, $location, loginSrvc, firebaseService){
	$scope.msg = "";
	if($location.search().msg != undefined){
		$scope.msg = $location.search().msg;
		$scope.isMsg = true;
	}

	$scope.check = function(){
		firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				console.log("user is signed-in")
				loginSrvc.getUser(user.uid, function(success){
					if(success == null){}
					else if(success.approved){
						console.log('session created')
						$window.sessionStorage.setItem('id', user.uid);
						$location.path('/students');
						$scope.$apply();
					}
					else{
						$scope.msg = 'You haven\'t been approved by the administrator';
						$scope.isMsg = true;
						$scope.$apply();
					}
				}, function(error) {
					// body...
				});
			}
			else{
				console.log("not logged in")
			}
		});
	}
	$scope.check();

	$scope.loginFb = function(){
		loginSrvc.login_user(function(success){
			result = success;
			loginSrvc.getUser(result.user.uid, function(success){
				if(success == null){
					loginSrvc.createUser(result.user, function(){
						$scope.check();
					}, function(error){});
					
				}
			}, function(error) {
				// body...
			});
		}, function(error){
			console.log(error);
		});
	}

	$scope.login_signOut = function(){
		firebaseService.signOut();
		$scope.msg = 'Logged out successfully';
		$scope.isMsg = true;
		$scope.$apply();
	}
}]);