
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";





function addRoom()
{
       room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});       

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}





getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}




function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
