// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK7Szg4gHGJZl3LzO5435RBAOESNIoVZE",
    authDomain: "review-databasewithfirebase.firebaseapp.com",
    projectId: "review-databasewithfirebase",
    storageBucket: "review-databasewithfirebase.firebasestorage.app",
    messagingSenderId: "338907205758",
    appId: "1:338907205758:web:74ec9617f438ebba27c82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth