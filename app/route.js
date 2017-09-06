var app = angular.module('profile');

app.config(function($routeProvider){
	console.log('coming inside though');
	$routeProvider
	.when("/", {
		templateUrl : 'app/components/home/homeView.html', 
		controller	: 'homeCtlr'
	})
	.when("/students", {
		templateUrl	: 'app/components/students/studentView.html',
		controller 	: 'studentCtlr'
	})
	.when("/info/:student_id", {
		templateUrl	: 'app/components/info/infoView.html',
		controller	: 'infoCtlr'
	})
	// .when("/view/:student_id", {
	// 	// templateUrl	: "components"
	// })
	.otherwise({
		redirectTo	: "/"
	});
});
