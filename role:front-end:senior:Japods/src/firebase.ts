import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6GBgAzzhBL7IjGEgn-KTdKxnuKol5Jq8",
    authDomain: "azulo-app-ea045.firebaseapp.com",
    databaseURL: "https://azulo-app-ea045-default-rtdb.firebaseio.com",
    projectId: "azulo-app-ea045",
    storageBucket: "azulo-app-ea045.appspot.com",
    messagingSenderId: "339063079696",
    appId: "1:339063079696:web:271b90864019cdc6b71b95",
    measurementId: "G-97616QFQ4Z"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)