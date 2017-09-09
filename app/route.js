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
	.when("/info/:student_id", {
		templateUrl	: 'app/components/info/infoView.html',
		controller	: 'infoCtlr'
	})
	.when("/profile/:user_id", {
		templateUrl	: 'app/components/profile/profileView.html',
		controller	: 'profileCtlr'
	})
	.otherwise({
		redirectTo	: "/login"
	});
});
