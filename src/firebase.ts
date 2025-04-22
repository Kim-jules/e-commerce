import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyD2FNomjNJct4U-iGWOgtrUOx70ortHhsE",
    authDomain: "e-commerce-project-689e1.firebaseapp.com",
    projectId: "e-commerce-project-689e1",
    storageBucket: 'e-commerce-project-689e1',
    messagingSenderId: "1064156092747",
    appId: "1:1064156092747:web:84455b701b8adbe7c7b0ce",
    measurementId: "G-JRJTK1LPR3"
};
  
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };