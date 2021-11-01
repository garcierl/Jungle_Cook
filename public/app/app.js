function showContent(pageID){
    console.log(pageID);
}

function mobile(){
  console.log("hello");
  $(".mobile-nav").css("display" , "flex");

}

function disappear(){
  console.log("hide");
  $(".mobile-nav").css("display" , "none");
}


function initListeners(){
    $(window).on("hashchange", function(e){
        let navID = e.currentTarget.id;
        MODEL.route(navID, showContent);
    })
    $(".fas").on("click", mobile);
    $(".mobile-nav").on("click", disappear);
    $("nav a").click(function(e) {
      e.preventDefault();
      let btnID = e.currentTarget.id;
      if(btnID == "create"){
          createUser();
      }else if(btnID == "login"){
          console.log("hi")
          login();
      }else if(btnID == "signout"){
          signout();
      }
      console.log(btnID);
  });
}


function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
          console.log("connected");
          $(".pName").css("display", "block");
      } else {
          console.log("user is not there");
          $(".pName").css("display", "none");
      }
  });
}

function createUser(){
  let password = $("#password").val();
  let email = $("email").val();
  let fName = $("firstname").val();
  let lName = $("lastname").val();
  firebase.auth().createUserWithEmailAndPassword(email, password, fName, lName)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

function login(){
  let password = $("#loginpassword").val();
  let email = $("loginemail").val();
  firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("signed in");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signout(){
  firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("signedout");
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
}

$(document).ready(function(){
  initListeners();
  MODEL.route("home", showContent);
  try {
    let app = firebase.app();
    initFirebase();
    initListerners();
}
catch {
    console.error(e);
}
  // MODEL.route("home", showContent);
})