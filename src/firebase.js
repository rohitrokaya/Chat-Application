import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBpRuWlmUcaWw16ZDAoYMSRHQikcd6MPGg",
    authDomain: "chatapp-roshreta.firebaseapp.com",
    databaseURL: "https://chatapp-roshreta-default-rtdb.firebaseio.com",
    projectId: "chatapp-roshreta",
    storageBucket: "chatapp-roshreta.appspot.com",
    messagingSenderId: "318377310568",
    appId: "1:318377310568:web:f66a4d9c9f774f63a83edd",
    measurementId: "G-R4T1RFHW02"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
