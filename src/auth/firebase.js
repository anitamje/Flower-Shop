import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgIIcYQtfG7Ewsxgdp7cQJSTzEQkaclHs",
    authDomain: "flower-shop-fff85.firebaseapp.com",
    projectId: "flower-shop-fff85",
    storageBucket: "flower-shop-fff85.appspot.com",
    messagingSenderId: "25189165483",
    appId: "1:25189165483:web:6a3dce7f7dac5e88d64aee",
    measurementId: "G-SLQ8Z4H5E3"
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the auth instance
const analytics = getAnalytics(app); // Get the analytics instance

export { app, auth, analytics };
