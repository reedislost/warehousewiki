// Import the functions you need from the SDKs you need
import { collection, doc, getFirestore, setDoc } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ4Itqq3iwkb6KbUuCajD2KlO8W1M5a04",
  authDomain: "warehouse-wiki.firebaseapp.com",
  projectId: "warehouse-wiki",
  storageBucket: "warehouse-wiki.appspot.com",
  messagingSenderId: "936162159087",
  appId: "1:936162159087:web:b6f91e3aed0e16942eee1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const submitEmail = async (email: any) => {
  const docRef = doc(collection(firestore, "email"));
  await setDoc(docRef, { email: email });
};
