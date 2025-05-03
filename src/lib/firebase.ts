// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   };
  
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const messaging = getMessaging(app);

// export { messaging, getToken, onMessage, database };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { isSupported } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFKepHZ58Yotr73Yo20h8CEO2-rE-2Un8",
  authDomain: "e-commerce-app-86970.firebaseapp.com",
  projectId: "e-commerce-app-86970",
  storageBucket: "e-commerce-app-86970.firebasestorage.app",
  messagingSenderId: "254474802451",
  appId: "1:254474802451:web:7c4472706a7cd3743ab6e6",
  measurementId: "G-NZRK16TRT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messaging = isSupported().then((supported) => supported ? getMessaging(app) : null);
const db = getFirestore(app)

export {messaging, getToken, onMessage, database, db};