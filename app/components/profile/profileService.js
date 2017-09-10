var app = angular.module("profile");

app.service("profileSrvc", function(){
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

	this.getUserById = function(id, success, failure){
		return db.ref(`users/${id}`).once("value")
		.then(function(snapshot){
			// success(castSingleToStudent(snapshot.val()));
			success(snapshot.val());
		}, function(error){
			failure(error);
		});
	}

	this.getPrograms = function(){
		programs = ['Computer Science', 'Chemical Engineering', 'Energy and Environmental Policy', 
					'Biology', 'Mechanical Engineering', 'Electrical Engineering'];
		return programs.sort();
	}

	this.getDegrees = function(){
		degrees = ['Bachelors', 'Masters', 'Phd'];
		return degrees;
	}

	this.getYears = function(start, end){
		arr = []
		for(i = start; i <= end; i++){arr.push(i);}
		return arr;
	}

	this.save = function(id, user, success, failure){
		return db.ref(`users/${id}`).set(user).then(function(snapshot){
			success();
		}, function(error){
			failure();
		});
	}
});
