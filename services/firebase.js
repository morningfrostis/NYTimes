// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLt3gEQKcqT8GDwSEyaCQ0MqWWXEi9nMs",
    authDomain: "nytimesapi-454f3.firebaseapp.com",
    projectId: "nytimesapi-454f3",
    storageBucket: "nytimesapi-454f3.appspot.com",
    messagingSenderId: "864169902577",
    appId: "1:864169902577:web:b8ac0ac88bc13175588450"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore()
const colRef = collection(db, 'favorites');

export const saveFavs = (book) => {
    addDoc(colRef, book)
}
export async function getFavs() {
    const docsSnap = await getDocs(colRef);
    const datos = []
    docsSnap.forEach((doc) => {

        datos.push({
            id: doc.id,
            ...doc.data(),
        })
    });
    return datos;
}