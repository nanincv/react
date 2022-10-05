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

    return emulsionsSnap.docs.map( doc => {  
      return {  
        ...doc.data(),
        id:doc.id  
    }
    });
}

//Filtro categories

export async function getItemCat(categoryid) {
    const miCol = collection (firestoreDB, 'emulsiones');
    const queryEmulsion = query (miCol, where("line", "==",categoryid));

    const emulsionsSnap = await getDocs (queryEmulsion);

    return emulsionsSnap.docs.map( doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
    });
}

//un solo item
export async function getItem(id){
    const miCol = collection (firestoreDB, 'emulsiones');
    const itemRef = doc(miCol, id);
    const emulsionsSnap = await getDoc(itemRef);

    return { ...emulsionsSnap.data(), id: emulsionsSnap.id };
}

