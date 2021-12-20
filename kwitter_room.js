
var firebaseConfig = {
  apiKey: "AIzaSyBCZHlkbLejFdY24ZUoIrC8m9rjAmjOVEo",
  authDomain: "kwitter-8c5aa.firebaseapp.com",
  databaseURL: "https://kwitter-8c5aa-default-rtdb.firebaseio.com",
  projectId: "kwitter-8c5aa",
  storageBucket: "kwitter-8c5aa.appspot.com",
  messagingSenderId: "1008015102564",
  appId: "1:1008015102564:web:9ec4b516a4821af723c571",
  measurementId: "G-DEQNPNV4GH"
};
firebase.initializeApp(firebaseConfig);
function addRoom()
{
  room_name =document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({

        purpose:"adding room name "
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location="index.html";
} 
