import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import brand_logo from '../../images/logos/logo.png';
const Login = () => {
   
    
   
    const handleSignIn = () => {
      if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      };
       let provider= new  firebase.auth.GoogleAuthProvider()
       firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div className='row log_div text-center'>
         <div className="col-sm-12 text-center my-5 ">
         <img src={brand_logo} className='w-25  img-fluid' alt=""/>
         </div>
           <div className=" col-sm-12 log_box">
           <h1>Login With</h1>
           <div className="btn">
           <button onClick={handleSignIn}>Log In</button>
           </div>
           </div>
        </div>
    );
};

export default Login;