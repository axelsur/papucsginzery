// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGcZ1UE17dErKGJmpZ9areQp_a2i8_3og",
  authDomain: "papucsreact.firebaseapp.com",
  projectId: "papucsreact",
  storageBucket: "papucsreact.appspot.com",
  messagingSenderId: "791199808979",
  appId: "1:791199808979:web:060ecd40b351fca200c326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)