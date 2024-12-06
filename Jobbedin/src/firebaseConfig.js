// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR0D4_0MHmKgEYK8FWKfPMxog7TDsoMZ4",
  authDomain: "lnkedin-clone-b1546.firebaseapp.com",
  projectId: "lnkedin-clone-b1546",
  storageBucket: "lnkedin-clone-b1546.firebasestorage.app",
  messagingSenderId: "724124868351",
  appId: "1:724124868351:web:dca0e10dbeb37a5c8c76ca",
  measurementId: "G-KMQ1XVCL4S"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);