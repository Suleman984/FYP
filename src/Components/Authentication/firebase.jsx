// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUK0Pg0P953nFgETXSgnhsYdPPBGckQgc",
    authDomain: "login-auth-d57a4.firebaseapp.com",
    projectId: "login-auth-d57a4",
    storageBucket: "login-auth-d57a4.appspot.com",
    messagingSenderId: "267282897563",
    appId: "1:267282897563:web:e2b4eb95362269009b043e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;