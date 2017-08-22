var app = angular.module('profile');

app.service("firebaseService",function(){
	var db = firebase.database();

	this.addUser = function(user){
		obj = {
			"firstname" : "Pranjal",
			"lastname" 	: "Singi",
			"university": "University of Delaware",
			"degree"	: "Masters",
			"program"	: "Computer Science",
			"difficulty": "Moderate"    
		}
		db.ref('users').push(user)
		.then(function(success){
			console.log("successfully added a user")
		},function(error){
			console.log(error);
		});
	}

	this.updateUser = function(id, user, callback, failure){
		return db.ref(`users/${id}`).update(user)
		.then(function(success){
			callback("Success");
		}, function(error){
			failure(error);
		})
	}
});