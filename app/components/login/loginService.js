var app = angular.module("profile");

app.service("homeSrvc", function(){
	var db = firebase.database();

	// var castManyToUsers = function(object){
	// 	var users = []
	// 	for(var i in object){
	// 		object[i].firebaseId = i;
	// 		users.push(object[i]);
	// 	}
	// 	return users;
	// }

	// this.getUsers = function(success, failure){
	// 	return db.ref("users").once("value")
	// 	.then(function(snapshot){
	// 		success(castManyToUsers(snapshot.val()));
	// 	}, function(error){
	// 		failure(error);
	// 	});
	// }
});