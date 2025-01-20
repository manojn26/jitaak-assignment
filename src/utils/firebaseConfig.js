// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrAiKTs26Qr-pcHD1itk-foZNQ6T9BBW8",
  authDomain: "jitaak-321e2.firebaseapp.com",
  projectId: "jitaak-321e2",
  storageBucket: "jitaak-321e2.firebasestorage.app",
  messagingSenderId: "730593881346",
  appId: "1:730593881346:web:d66a244ce99fcd79c3a61b",
  measurementId: "G-9TQNLQTYGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
