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

// // Import the functions you need from the SDKs you need
// import { getApp, getApps, initializeApp } from "firebase/app";
// import { isSupported } from "firebase/analytics";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getDatabase } from "firebase/database";
// import { getFirestore, initializeFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAFKepHZ58Yotr73Yo20h8CEO2-rE-2Un8",
// //   authDomain: "e-commerce-app-86970.firebaseapp.com",
// //   projectId: "e-commerce-app-86970",
// //   storageBucket: "e-commerce-app-86970.firebasestorage.app",
// //   messagingSenderId: "254474802451",
// //   appId: "1:254474802451:web:7c4472706a7cd3743ab6e6",
// //   measurementId: "G-NZRK16TRT9"
// // };

// // Firebase with firestore
// const firebaseConfig = {
//   apiKey: "AIzaSyCyu92j5EmLVAJ8xk8KouB8lEIHsKrXmPw",
//   authDomain: "fir-auth-6de3c.firebaseapp.com",
//   databaseURL: "https://fir-auth-6de3c-default-rtdb.firebaseio.com",
//   projectId: "fir-auth-6de3c",
//   storageBucket: "fir-auth-6de3c.firebasestorage.app",
//   messagingSenderId: "97111434530",
//   appId: "1:97111434530:web:0542c2e9230265dc3ab17b"
// };

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const database = getDatabase(app);
// const messaging = isSupported().then((supported) => supported ? getMessaging(app) : null);
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true, // Fallback to long polling if WebChannel fails
// }, 'quino');
// const storage = getStorage(app);

// export { messaging, getToken, onMessage, database, db, storage };

"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  initializeFirestore,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";
import { getDatabase } from "firebase/database";

// Log environment variables to ensure they're loaded correctly
console.log("Firebase Config Environment Variables:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
});

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with the correct database name ('soothe')
const db = initializeFirestore(
  app,
  {
    experimentalForceLongPolling: true, // Fallback to long polling if WebChannel fails
  },
  "quino"
); // Specify the database name here

// Enable offline persistence for Firestore
enableIndexedDbPersistence(db).catch((err) => {
  console.error("Failed to enable Firestore persistence:", err);
});

const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
const messaging = isSupported().then((supported) =>
  supported ? getMessaging(app) : null
);

export { app, auth, db, storage, database, messaging };
