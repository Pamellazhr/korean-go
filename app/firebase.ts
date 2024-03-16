import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI9iAO57yeJxEgJpIPZFmuIMLk0riWw6Y",
  authDomain: "ujikom-korea.firebaseapp.com",
  projectId: "ujikom-korea",
  storageBucket: "ujikom-korea.appspot.com",
  messagingSenderId: "445429754060",
  appId: "1:445429754060:web:d98affb3d5bc2becfc3a69",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
