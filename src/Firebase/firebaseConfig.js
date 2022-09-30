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
const firestoreDB= getFirestore (app);

export default firestoreDB;

export async function getAllItems () {
    const miCol = collection (firestoreDB, 'emulsiones');
    const emulsionsSnap = await getDocs (miCol);

    return emulsionsSnap.docs.map( doc => doc.data());
}