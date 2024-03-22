// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARFxcejA4ot7fjTlBYu7h47EHvSNTjDq0",
  authDomain: "vjti-f9506.firebaseapp.com",
  projectId: "vjti-f9506",
  storageBucket: "vjti-f9506.appspot.com",
  messagingSenderId: "466002798272",
  appId: "1:466002798272:web:6d9cb563a125e7ff4f6f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app , storage};