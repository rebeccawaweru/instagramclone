firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
    } else {
      // No user is signed in.
      console.log("no user signed in");
      window.location.href ="login.html";
    }
  });
  
  document.getElementById("signout").onclick = function(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login.html";
      }).catch((error) => {
        // An error happened.
      });
  }
