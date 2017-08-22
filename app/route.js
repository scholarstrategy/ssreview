var app = angular.module('profile');

app.config(function($routeProvider){
	console.log('coming inside though');
	$routeProvider
	.when("/", {
		templateUrl 	: 'app/components/home/homeView.html', 
		controller	: 'homeCtrl'
	})
	.when("/students", {
		templateUrl	: 'app/components/students/studentView.html',
		controller 	: 'studentCtrl'
	})
	// .when("/view/:student_id", {
	// 	// templateUrl	: "components"
	// })
	.otherwise({
		redirectTo	: "/"
	});
});
