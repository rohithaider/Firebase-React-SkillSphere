// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIwsQqLb5rx_1VueYT8-KaEBD7rlJSGTI",
    authDomain: "skillsphere-c2034.firebaseapp.com",
    projectId: "skillsphere-c2034",
    storageBucket: "skillsphere-c2034.firebasestorage.app",
    messagingSenderId: "836427973378",
    appId: "1:836427973378:web:c5cc8c3fdae2e4e79bf81b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;