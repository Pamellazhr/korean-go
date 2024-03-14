import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkY5TV86nGY7fvE0lvNi5N1i4SSDHSMUg",
  authDomain: "ujikom-japan.firebaseapp.com",
  projectId: "ujikom-japan",
  storageBucket: "ujikom-japan.appspot.com",
  messagingSenderId: "705302213678",
  appId: "1:705302213678:web:475af71f8a0edad47b5bbf",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
