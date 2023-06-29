
//ADD YOUR FIREBASE LINKS
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
function addUser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}