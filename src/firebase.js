// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Replace these with your own Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyDfZDBDdGbrG2H934L0EEHqwGAWJWzXJo4",
    authDomain: "sempre-studios-69d19.firebaseapp.com",
    databaseURL: "https://sempre-studios-69d19-default-rtdb.firebaseio.com",
    projectId: "sempre-studios-69d19",
    storageBucket: "sempre-studios-69d19.appspot.com",
    messagingSenderId: "604714315136",
    appId: "1:604714315136:web:a0108210941704f4eea565"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
