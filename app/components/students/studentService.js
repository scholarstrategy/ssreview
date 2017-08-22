var app = angular.module("profile");

app.service("studentSrvc", function(){
	var db = firebase.database();

	var castManyToStudents = function(object){
		var students = []
		for(var i in object){
			object[i].firebaseId = i;
			students.push(object[i]);
		}
		return students;
	}

	this.getStudents = function(success, failure){
		return db.ref("students").once("value")
		.then(function(snapshot){
			success(castManyToStudents(snapshot.val()));
		}, function(error){
			failure(error);
		});
	}
});
