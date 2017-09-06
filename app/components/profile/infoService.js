var app = angular.module("profile");

app.service("infoSrvc", function(){
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

	this.getStudentById = function(id, success, failure){
		return db.ref(`students/${id}`).once("value")
		.then(function(snapshot){
			// success(castSingleToStudent(snapshot.val()));
			success(snapshot.val());
		}, function(error){
			failure(error);
		});
	}
});
