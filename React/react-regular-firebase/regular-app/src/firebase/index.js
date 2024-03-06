import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore from Firestore module

const firebaseConfig = {
  apiKey: "AIzaSyBNHiU76_cCGk0tjo3UsUK0nYh2UI96G9A",
  authDomain: "react-regular.firebaseapp.com",
  projectId: "react-regular",
  storageBucket: "react-regular.appspot.com",
  messagingSenderId: "646605797198",
  appId: "1:646605797198:web:eded005066d8777d22d01f",
  measurementId: "G-TT3HERRFV2"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp)
const analytics = getAnalytics(firebaseapp);
const auth = getAuth(firebaseapp)

export {auth,db}