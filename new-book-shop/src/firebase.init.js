// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsbBFnEisO_RgGeL6jmpmjicY_sUZ6cc4",
    authDomain: "book-shop-f5159.firebaseapp.com",
    projectId: "book-shop-f5159",
    storageBucket: "book-shop-f5159.appspot.com",
    messagingSenderId: "599614365765",
    appId: "1:599614365765:web:34f44a56ddec5db69ec32c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;