var app = angular.module('profile');

app.service("firebaseService", ['$window', function($window){
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

	this.getUserById = function(id, success, failure){
		return db.ref(`users/${id}`).once("value")
		.then(function(snapshot){
			// success(castSingleToStudent(snapshot.val()));
			success(snapshot.val());
		}, function(error){
			failure(error);
		});
	}

	this.getReviewById = function(id, success, failure){
		return db.ref(`reviews/${id}`).once("value")
		.then(function(snapshot){
			// success(castSingleToStudent(snapshot.val()));
			success(snapshot.val());
		}, function(error){
			failure(error);
		});
	}

	this.signOut = function(){
		firebase.auth().signOut().then(function(success){
			console.log("successfully logged out")
			$window.sessionStorage.removeItem('id')
		}, function(error){
			console.log("sign out error" +error)
		})
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

	this.getPrograms = function(){
		programs = ['Computer Science', 'Chemical Engineering', 'Energy and Environmental Policy', 
					'Biology', 'Mechanical Engineering', 'Electrical Engineering'];
		return programs.sort();
	}

	this.getUniversities = function(){
		return ['Arizona State University', 'Auburn University', 'Boston University', 'Brown University', 'California Institute Of Technology', 'Carnegie Mellon University', 'Case Western Reserve University', 'Clemson University', 'Colorado School of Mines', 'Colorado State University', 'Columbia University', 'Cornell University', 'Dartmouth College', 'Drexel University', 'Duke University', 'George Washington University', 'Georgia Institute of Technology', 'Harvard University', 'Illinois Institute of Technology', 'Iowa State University', 'Johns Hopkins University', 'Kansas State University', 'Lehigh University', 'Louisiana State University and A&M College', 'Massachusetts Institute of Technology', 'Michigan State University', 'Mississippi State University', 'Missouri University of Science and Technology', 'New York University', 'North Carolina State University', 'Northeastern University', 'Northwestern University', 'Ohio State University', 'Oregon State University', 'Pennsylvania State University', 'Portland State University', 'Princeton University', 'Purdue University West Lafayette', 'Rensselaer Polytechnic Institute', 'Rice University', 'Rochester Institute of Technology', 'Rutgers University', 'Stanford University', 'State University of New York at Buffalo', 'State University of New York at Stony Brook', 'Stevens Institute of Technology', 'Syracuse University', 'Texas A&M University', 'Texas Tech University', 'The City College of New York', 'Tufts University', 'University of Alabama', 'University of Arizona', 'University of California - Berkeley', 'University of California - Davis', 'University of California - Irvine', 'University of California - Los Angeles', 'University of California - Riverside', 'University of California - San Diego', 'University of California - Santa Barbara', 'University of California - Santa Cruz', 'University of Central Florida', 'University of Cincinnati', 'University of Colorado Boulder', 'University of Connecticut', 'University of Dayton', 'University of Delaware', 'University of Florida', 'University of Houston', 'University of Illinois at Chicago', 'University of Illinois at Urbana-Champaign', 'University of Iowa', 'University of Kansas', 'University of Kentucky', 'University of Maryland College Park', 'University of Massachusetts - Amherst', 'University of Michigan - Ann Arbor', 'University of Minnesota Twin Cities', 'University of Missouri - Columbia', 'University of Nebraska', 'University of New Mexico', 'University of North Carolina at Chapel Hill', 'University of North Carolina at Charlotte', 'University of Notre Dame', 'University of Oklahoma', 'University of Pennsylvania', 'University of Pittsburgh', 'University of Rochester', 'University of South Carolina', 'University of South Florida', 'University of Southern California', 'University of Tennessee at Knoxville', 'University of Texas - Arlington', 'University of Texas - Austin', 'University of Texas - Dallas', 'University of Utah', 'University of Virginia', 'University of Washington', 'University of Wisconsin-Madison', 'Vanderbilt University', 'Virginia Tech', 'Washington State University', 'Washington University in St. Louis', 'Wichita State University', 'Worcester Polytechnic Institute', 'Yale University'];
	}

	this.getPrograms = function(){
		return ['Aerospace', 'Business Analytics', 'Chemical/Petroleum', 'Civil/Construction', 'Computer Science/Information Technology', 'Data Science', 'Electrical/Electronics', 'Engineering Management/Technology Management (MEM)', 'Financial Engineering', 'Industrial/Operations Research', 'Management Information System (MIS)', 'Mechanical', 'Software Engineering']
	}

	// var db = firebase.database();
	// student = {
	// "firstname" : "Sucharita",
	// "lastname" 	: "Sarkar",
	// "university": "University of Delaware",
	// "degree"	: "Phd",
	// "program"	: "Biology",
	// "difficulty": "moderate" 
	// }
	// db.ref('students').push(student)
	// .then(function(success){
	// 	console.log("successfully added a user")
	// },function(error){
	// 	console.log(error);
	// });
}]);
