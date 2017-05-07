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
  var sv = snapshot.val();  
        
      var svArr = Object.keys(sv);
      var lastIndex = svArr.length - 1;
      var lastKey = svArr[lastIndex];
      var lastObj = sv[lastKey]
      
      var trainName = sv.trainName;
      var trainDes = sv.trainDes;
      var trainFreq = sv.trainFreq;
      var trainArriv = sv.trainArriv;

      console.log(trainName);     
      console.log(trainDes);
      console.log(trainFreq );
      console.log(trainArriv);
      var tableRow = $("<tr>").attr("data-key", sv);
      
      $("<td>").text(trainName).appendTo(tableRow);
      $("<td>").text(trainDes).appendTo(tableRow);
      $("<td>").text(trainFreq).appendTo(tableRow);
      $("<td>").text(trainArriv).appendTo(tableRow);
      // $("<td>").text(rate).appendTo(tableRow);
      // $("<td>").text(totalBilled).appendTo(tableRow);
      // $("#employees").append(tableRow);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});


 