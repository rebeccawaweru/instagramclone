document.getElementById("buttonsgnup").onclick = function () {
    
    var email = document.getElementById("email"). value;
    var password = document.getElementById("password").value;
    var userName=document.getElementById("Username").value;
    var phoneNumber=document.getElementById("Phonenumber").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            //
            

            // firebase.firestore().collection("users").doc().set({

            //     nameValue: userName,
            //     phoneValue: phoneNumber
                
                
            // }).then((docRef) => {

            //     console.log("Document written with ID: ", docRef.id);
               
            // });
          
                   


                     firebase.firestore().collection("users").add({
                        nameValue: userName,
                        phoneValue: phoneNumber
                    })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);

                       
                    });

                    window.location.href = "profile.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}
