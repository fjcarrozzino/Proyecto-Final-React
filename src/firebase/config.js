import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC8pLL1zTd3wJGo36DTBVR1z7Zr8RKmhdI",
  authDomain: "e-commerce-2b779.firebaseapp.com",
  projectId: "e-commerce-2b779",
  storageBucket: "e-commerce-2b779.appspot.com",
  messagingSenderId: "902316975873",
  appId: "1:902316975873:web:562b99f5908743b2d3dd00"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)