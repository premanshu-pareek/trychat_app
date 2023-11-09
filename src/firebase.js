import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHQUCW8vZAm0MZkA3tFm7fXMaAKbDq-rs",
    authDomain: "trychat-8b941.firebaseapp.com",
    projectId: "trychat-8b941",
    storageBucket: "trychat-8b941.appspot.com",
    messagingSenderId: "621459607496",
    appId: "1:621459607496:web:25956ddb20d9e6830b7afd"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
