// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAxOYa6CV-drR5fFHfIpDI2F5xkTJmOpVc",
    authDomain: "train-scheduler-b73d5.firebaseapp.com",
    databaseURL: "https://train-scheduler-b73d5.firebaseio.com",
    projectId: "train-scheduler-b73d5",
    storageBucket: "train-scheduler-b73d5.appspot.com",
    messagingSenderId: "522628858105"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

// Button for adding train data
$("#add-trainTime-btn").on("click", function(event) {
  event.preventDefault();

	// Grabs user input
		var trainName = $("#train-name").val().trim();
		var trainDes = $("#destination-input").val().trim();
		var trainFreq = moment($("#freq-input").val().trim(), "Min").format("X");
		var trainArriv = $("#arrival-input").val().trim();

	// Creates local "temporary" object for holding train data
		var newTrain = {
		name: trainName,
		destination: trainDes,
		frequency: trainFreq,
		arrival: trainArriv
		};

	// Uploads train schedule entry to the database
		database.ref().push(newTrain);

	// Logs everything to console
		console.log(newTrain.name);
		console.log(newTrain.destination);
		console.log(newTrain.frequency);
		console.log(newTrain.arrival);

	// Alert
		alert("Train successfully added");

	// Clears all of the text-boxes
		$("#train-name").val("");
		$("#destination-input").val("");
		$("#freq-input").val("");
		$("#arrival-input").val("");


});



// Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDes = childSnapshot.val().destination;
  var trainFreq = childSnapshot.val().frequency;
  var trainArriv = childSnapshot.val().arrival;
  // Employee Info
  console.log(trainName);
  console.log(trainDes);
  console.log(trainFreq);
  // console.log(trainArriv);
  // // Prettify the employee start
  // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
  // // Calculate the months worked using hardcore math
  // // To calculate the months worked
  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);
  // // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);
  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDes + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});


 