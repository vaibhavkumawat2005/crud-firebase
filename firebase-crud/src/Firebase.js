// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVMgGwb9ITazk0Ia8Rg4OP6AoPzSeqBZo",
  authDomain: "fir-crud-cd6ae.firebaseapp.com",
  projectId: "fir-crud-cd6ae",
  storageBucket: "fir-crud-cd6ae.firebasestorage.app",
  messagingSenderId: "583352509317",
  appId: "1:583352509317:web:25bf4fcca0548b385f1aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);