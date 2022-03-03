import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAH-82zP9qm5g0KAIWBX-UUws1LMo4IysI",
  authDomain: "e-commerce-boardgames.firebaseapp.com",
  projectId: "e-commerce-boardgames",
  storageBucket: "e-commerce-boardgames.appspot.com",
  messagingSenderId: "41591906450",
  appId: "1:41591906450:web:f31327b8a6707fe044064b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const firestoreDb =getFirestore(app)

