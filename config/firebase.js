import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCH4nbQncsqOqkJQXYRTp5omKO3kCmQPW0",
  authDomain: "messagingapp-d1a43.firebaseapp.com",
  projectId: "messagingapp-d1a43",
  storageBucket: "messagingapp-d1a43.appspot.com",
  messagingSenderId: "170882820252",
  appId: "1:170882820252:web:2ffa7fc78b6f804781a559",
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
