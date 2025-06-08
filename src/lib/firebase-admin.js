import admin from "firebase-admin";
import serviceAccountKey from "./aquot_service_account.json"; // Ensure this path is correct

let db;
let firebaseAdmin;

if (!admin.apps.length) {
  try {
    // Initialize Firebase Admin SDK with service account credentials
    firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
      databaseURL: "https://fir-auth-6de3c-default-rtdb.firebaseio.com",
    });

    // Initialize Firestore for the "quino" database (non-default Firestore DB)
    db = firebaseAdmin.firestore("quino"); // Specify the non-default "quino" database

    console.log("✅ Firebase Admin SDK initialized successfully.");
  } catch (error) {
    console.error("❌ Error initializing Firebase Admin SDK:", error.message);
    throw new Error("Failed to initialize Firebase Admin SDK");
  }
} else {
  // Use existing Firebase Admin SDK app if already initialized
  firebaseAdmin = admin.app();
  db = firebaseAdmin.firestore("quino"); // Again, specify the database if necessary in future with firebaseAdmin.firestore('quino')
  console.log("ℹ️ Firebase Admin SDK already initialized.");
}

export { db, firebaseAdmin };
