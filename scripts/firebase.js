let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];

	
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_M1PPIlNIG0yEmZeDlptwApOjY3oFr70",
    authDomain: "learning-tool-5eb63.firebaseapp.com",
    databaseURL: "https://learning-tool-5eb63-default-rtdb.firebaseio.com",
    projectId: "learning-tool-5eb63",
    storageBucket: "learning-tool-5eb63.appspot.com",
    messagingSenderId: "128932611744",
    appId: "1:128932611744:web:626d046619028126fcebc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

console.log('okay1');

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 

console.log('okay2');

// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().ref('deck/flashcards').set(myFlashcards);

console.log('okay3');

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve

	let fc = firebase.database().ref('deck/flashy');
	// A variable to store the JSON results in a human readable format
	let jsonString;
	// Tell Firebase to retrieve your data
console.log('okay4');
	fc.on("value", function(retrieve) {
	    //Get the raw JSON data back from the database
	    let queryData = retrieve.val();
	    // Turn the data into a JSON String
	    jsonString = JSON.stringify(queryData);
console.log('okay5');
	});
console.log('okay6');
	// Print the data out as a JSON string or otherwise manipulate it
	console.log (' JSON string:' + jsonString )
