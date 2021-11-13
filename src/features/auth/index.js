import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {Button} from 'reactstrap'

// Configure Firebase.
    const config = {
    apiKey: 'AIzaSyCKtwFMJhWAHR6TlKphLxDSIDyZPQvdZwE',
    authDomain: 'shopedemo-e681d.firebaseapp.com',
  };
  firebase.initializeApp(config);

    const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
    signInSuccessUrl: '/',
  };
  

function SignIn(){
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
        setIsSignedIn(!!user);
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
  
    if (!isSignedIn) {
      return (
        <div className="text-center mt-5">
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
    return (
      <div className="text-center mt-5">
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <Button color="danger" outline onClick={() => firebase.auth().signOut()}>Sign-out</Button>
      </div>
    );
  }

export default SignIn;