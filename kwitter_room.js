
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDxUs-6SMx1TS8TZkSPtIDS20ySKDTmYA0",
      authDomain: "kwitter-59af8.firebaseapp.com",
      databaseURL: "https://kwitter-59af8.firebaseio.com",
      projectId: "kwitter-59af8",
      storageBucket: "kwitter-59af8.appspot.com",
      messagingSenderId: "111326831496",
      appId: "1:111326831496:web:cae78de661720e47ca503d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);







    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
