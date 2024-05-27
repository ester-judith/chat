import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e8de5.firebaseapp.com",
  projectId: "reactchat-e8de5",
  storageBucket: "reactchat-e8de5.appspot.com",
  messagingSenderId: "220363667933",
  appId: "1:220363667933:web:699f33e622644330a81e34"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

