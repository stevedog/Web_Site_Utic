 

   var config = {
    apiKey: "AIzaSyCxNlBfZuYUNlEjYYqW3m__xxN04OG_fEU",
    authDomain: "eforense-ce7b8.firebaseapp.com",
    databaseURL: "https://eforense-ce7b8.firebaseio.com",
    projectId: "eforense-ce7b8",
    storageBucket: "eforense-ce7b8.appspot.com",
    messagingSenderId: "1070285228354"
  };
  firebase.initializeApp(config);

 var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

 function submitForm(e){
  e.preventDefault();

   var name = getInputVal('name');
  var email = getInputVal('email');
   var message = getInputVal('message');

   saveMessage(name, email, message);

   document.querySelector('.alert').style.display = 'block';

   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

 function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}