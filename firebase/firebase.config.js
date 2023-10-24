
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeNRZEkl0QmdNW5qQXCv94znTaOxOw4g4",
    authDomain: "crud-reactnative-7615e.firebaseapp.com",
    projectId: "crud-reactnative-7615e",
    storageBucket: "crud-reactnative-7615e.appspot.com",
    messagingSenderId: "926457947910",
    appId: "1:926457947910:web:cd238f30f1cf6fd1512087",
    measurementId: "G-5KC8SBKQDG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore()