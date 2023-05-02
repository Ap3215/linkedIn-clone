import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGGeQrJd2-NXHl8n4YGqW6Mt7IdCnDAB4",
  authDomain: "linkedin-clone-aba1b.firebaseapp.com",
  projectId: "linkedin-clone-aba1b",
  storageBucket: "linkedin-clone-aba1b.appspot.com",
  messagingSenderId: "536402159724",
  appId: "1:536402159724:web:d77557cc4b59b3c831d049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
