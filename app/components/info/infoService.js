var app = angular.module("profile");

app.service("infoSrvc", function(){
	var db = firebase.database();

	this.getInfoById = function(id, success, failure){
		return db.ref(`users/${id}`).once("value")
		.then(function(snapshot){
			success(snapshot.val());
		}, function(error){
			failure(error);
		});
	}
});
