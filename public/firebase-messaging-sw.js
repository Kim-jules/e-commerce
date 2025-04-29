importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

firbase.initializeApp({
  apiKey: "AIzaSyAFKepHZ58Yotr73Yo20h8CEO2-rE-2Un8",
  authDomain: "e-commerce-app-86970.firebaseapp.com",
  projectId: "e-commerce-app-86970",
  storageBucket: "e-commerce-app-86970.firebasestorage.app",
  messagingSenderId: "254474802451",
  appId: "1:254474802451:web:7c4472706a7cd3743ab6e6",
  measurementId: "G-NZRK16TRT9",
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Message received. ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/images/icons/icon-192x192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
