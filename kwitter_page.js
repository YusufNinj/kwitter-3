//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC9HkWV7bE2GdbvcDki_An5FeBqfIcB_L8",
      authDomain: "kwitter-practice-afa5a.firebaseapp.com",
      databaseURL: "https://kwitter-practice-afa5a-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-afa5a",
      storageBucket: "kwitter-practice-afa5a.appspot.com",
      messagingSenderId: "234359921690",
      appId: "1:234359921690:web:81f753907ce436d0b0c5a3"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}














function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
