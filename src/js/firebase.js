import firebase, { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBy5-JwlvpmjHXW-AklzbVH6xCfs81Eh84",
  authDomain: "tuition-panda.firebaseapp.com",
  projectId: "tuition-panda",
  storageBucket: "tuition-panda.appspot.com",
  messagingSenderId: "129910770531",
  appId: "1:129910770531:web:4d5270546da6788c592156"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
