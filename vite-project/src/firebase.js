import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCY-pn5rSlB0F47mt3DNQg9YW0NqiRi6cU",
    authDomain: "static-builder-86610.firebaseapp.com",
    projectId: "static-builder-86610",
    storageBucket: "static-builder-86610.appspot.com",
    messagingSenderId: "81950508393",
    appId: "1:81950508393:web:640de687b02db253efe9f8",
    measurementId: "G-GE9G9EXH43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
