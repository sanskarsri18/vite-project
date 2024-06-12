// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpt-DiFfTo0iT1vDyR29K6Cp9SIzjdl0Q",
  authDomain: "myblog-9bf08.firebaseapp.com",
  projectId: "myblog-9bf08",
  storageBucket: "myblog-9bf08.appspot.com",
  messagingSenderId: "463587083381",
  appId: "1:463587083381:web:e8c2f3aec94a806c10a43c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
