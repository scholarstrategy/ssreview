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
		var reviewsRef = db.ref("reviews");

		reviewsRef.on('child_added', snap => {
			let userRef = db.ref('users/' + snap.key);
			userRef.once('value').then(userSnap => {
				userData = userSnap.val();
				userData.firebaseId = snap.key;
				success(Object.assign(snap.val(), userData));
			})
		});

		// return userRef.orderByChild('show').equalTo(true).once("value")
		// .then(function(snapshot){
		// 	success(castManyToStudents(snapshot.val()));
		// }, function(error){
		// 	failure(error);
		// });
	}
});
