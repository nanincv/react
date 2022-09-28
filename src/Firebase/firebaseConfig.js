
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC2QCUWmg2ZhQ_rQaq11l7LJjOz2ixIf58",
  authDomain: "gusteau-s.firebaseapp.com",
  projectId: "gusteau-s",
  storageBucket: "gusteau-s.appspot.com",
  messagingSenderId: "682309572725",
  appId: "1:682309572725:web:ae09e2cdc11a6aa685803c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export function async getAllItems () {
    const miCol = collection (fireStoreDB, 'emulsions');
    getDocs (miCol). then ( result => console.log (result) );
}