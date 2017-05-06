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

// 2. Button for adding Employees
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


 