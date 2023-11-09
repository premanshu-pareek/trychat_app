import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs6mf7JjBTvLx-FL0YWmLaxwJitxEj0sk",
    authDomain: "trychatv2-787fb.firebaseapp.com",
    projectId: "trychatv2-787fb",
    storageBucket: "trychatv2-787fb.appspot.com",
    messagingSenderId: "607450833825",
    appId: "1:607450833825:web:fe50ffdaf8a0f7274d21e0"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)
