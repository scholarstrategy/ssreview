var app = angular.module("profile");

app.service("loginSrvc", function(){
	var db = firebase.database();

	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('email');
	provider.addScope('user_friends');

	this.login_user = function(success, failure){
		return firebase.auth().signInWithPopup(provider).then(function(result) {

		  success(result)
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		  failure(error);
		});
	}

	this.getAccessToken = function(result){
		return result.credential.accessToken;
	}

	this.authUser = function(result){
		return result.user;
	}

	this.getUser = function(uid, success, failure){
		return db.ref('users/'+uid).once('value').then(function(snapshot){
			success(snapshot.val());
		}, function(error){
			console.log('error in getUser function');
		})
	}

	this.createUser = function(user, success, failure){
		newUser = {
			"approved": false,
			"firstname": user.displayName.split(' ')[0],
			"lastname" : user.displayName.split(' ')[1] 
		}
		return db.ref('users/'+user.uid).set(newUser).then(function(snapshot){
			success();
		}, function(error){
			console.log('could not create a user');
			failure();
		});
	}
});