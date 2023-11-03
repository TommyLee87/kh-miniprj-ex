import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaCpE1mJ_K2MHFYbaPNCJh22ChgXTxTh0",
  authDomain: "kh-mini-project-ex.firebaseapp.com",
  projectId: "kh-mini-project-ex",
  storageBucket: "kh-mini-project-ex.appspot.com",
  messagingSenderId: "597707286033",
  appId: "1:597707286033:web:67bae502caefc02bda33b0",
  measurementId: "G-ZLN5GVL3GQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
