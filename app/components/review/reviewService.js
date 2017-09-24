var app = angular.module("profile");

app.service("reviewSrvc", function(){
	var db = firebase.database();

	var castSingleToStudent = function(object){
		// var students = []
		// for(var i in object){
		// 	object[i].firebaseId = i;
		// 	students.push(object[i]);
		// }
		// return students;
		console.log(object);
	}

	this.save = function(id, user){
		return db.ref(`users/${id}`).set(user).then(function(snapshot){
			console.log('saved user');
		}, function(error){
			console.log('user not saved');
		});
	}

	this.saveReview = function(id, review, success){
		return db.ref(`reviews/${id}`).set(review).then(
			function(snapshot){
				success();
			},
			function(error){
				console.log(error);
			}
		)
	}
});
