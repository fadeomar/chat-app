// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTR_QCAUKStVNizNy-B66QJQEqk0AmrY",
  authDomain: "chat-6d72b.firebaseapp.com",
  projectId: "chat-6d72b",
  storageBucket: "chat-6d72b.appspot.com",
  messagingSenderId: "566000729922",
  appId: "1:566000729922:web:bbefb0ae7e8c6dbb7a92db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();