// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUNMPpFzOHYKEg6r7MKLeAPTaQaJKQsek",
  authDomain: "travel-tracker-db.firebaseapp.com",
  projectId: "travel-tracker-db",
  storageBucket: "travel-tracker-db.appspot.com",
  messagingSenderId: "299976764835",
  appId: "1:299976764835:web:391fab13d811e00d377e16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);