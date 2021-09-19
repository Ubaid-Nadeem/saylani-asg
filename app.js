// const firestore = firebase.firestore();
const firebaseConfig = {
    apiKey: "AIzaSyD4NHfSrT5c1E7SvlLZVpx0Frc8d_39Nbc",
    authDomain: "signup-form-c9c8e.firebaseapp.com",
    databaseURL: "https://signup-form-c9c8e-default-rtdb.firebaseio.com",
    projectId: "signup-form-c9c8e",
    storageBucket: "signup-form-c9c8e.appspot.com",
    messagingSenderId: "909995732544",
    appId: "1:909995732544:web:217f5e672e0bcc16d039a5",
    measurementId: "G-5RVK5YXDD8"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      document.getElementById("user").innerHTML = user.email;
      document.getElementById("login_box").style.display = "none";
      document.getElementById("welcome_box").style.display = "block";
    } else {
      document.getElementById("login_box").style.display = "block";
      document.getElementById("welcome_box").style.display = "none";
    }
  });

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        const email = document.getElementById("email").value = '';
        const password = document.getElementById("password").value = '';
     
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        alert(errorMessage);
            // ..
        });
}

function show(){
    var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// let database = firebase.database();

function get_teams(user){

    var get_team_name= document.getElementById('get-team-name').value;
    var get_team_email = document.getElementById('get-team-email').value;
    var get_catogies= document.getElementById('Category').value;
    
    const teamdetails ={
        get_team_name,
        get_team_email,
        get_catogies
    }

firebase.database().ref('Team_memders/'+user).set({
     get_team_name,
    get_team_email,
    get_catogies
})

console.log(teamdetails);
}

