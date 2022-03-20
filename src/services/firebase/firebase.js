import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyAH-82zP9qm5g0KAIWBX-UUws1LMo4IysI",
//   authDomain: "e-commerce-boardgames.firebaseapp.com",
//   projectId: "e-commerce-boardgames",
//   storageBucket: "e-commerce-boardgames.appspot.com",
//   messagingSenderId: "41591906450",
//   appId: "1:41591906450:web:f31327b8a6707fe044064b"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const firestoreDb =getFirestore(app)

