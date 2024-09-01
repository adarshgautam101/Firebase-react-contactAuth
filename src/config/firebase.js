// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvNnhSVdPVjyEDEVv_Oio3ZpKuVtf4QzU",
  authDomain: "vite-contact-421d7.firebaseapp.com",
  projectId: "vite-contact-421d7",
  storageBucket: "vite-contact-421d7.appspot.com",
  messagingSenderId: "674780089002",
  appId: "1:674780089002:web:125e8c06fa32db456e5ed3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);