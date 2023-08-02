import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjxaTh6vYz_lZM5AWV2vJWOpdEigvlY6w",
  authDomain: "chatgptmessenger-cf704.firebaseapp.com",
  projectId: "chatgptmessenger-cf704",
  storageBucket: "chatgptmessenger-cf704.appspot.com",
  messagingSenderId: "250773917719",
  appId: "1:250773917719:web:38a74e1f7d933154fccc52"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };