var app = angular.module('profile');

app.config(function($routeProvider){
	$routeProvider
	.when("/login", {
		templateUrl : 'app/components/login/loginView.html', 
		controller	: 'loginCtlr'
	})
	.when("/students", {
		templateUrl	: 'app/components/students/studentView.html',
		controller 	: 'studentCtlr'
	})
	.when("/info/:user_id", {
		templateUrl	: 'app/components/info/infoView.html',
		controller	: 'infoCtlr'
	})
	.when("/profile/:user_id", {
		templateUrl	: 'app/components/profile/profileView.html',
		controller	: 'profileCtlr'
	})
	.when("/review/:user_id", {
		templateUrl	: 'app/components/review/reviewView.html',
		controller	: 'reviewCtlr'
	})
	.otherwise({
		redirectTo	: "/login"
	});
});
