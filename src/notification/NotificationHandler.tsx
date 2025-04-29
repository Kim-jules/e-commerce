// import { useEffect, useState } from "react";
// import { messaging, getToken, onMessage } from "../lib/firebase";

// const NotificationsHandler = () => {
//   const [token, setToken] = useState<string>('');

//   useEffect(() => {
//     async function requestPermission() {
//       try {
//         const permission = await Notification.requestPermission();
//         if (permission == "granted") {
//           console.log("Notification Permission Granted.");

//           const swRegistration = await navigator.serviceWorker.register(
//             "/firebase-messaging-sw.js"
//           );

//           messaging.then((msg) => {
//             if (!msg) return;

//           })
//         }
//       } catch (error) {}
//     }
//   });
// };
