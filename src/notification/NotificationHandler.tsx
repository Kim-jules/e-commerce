import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../firebase";

const NotificationsHandler = () => {
  useEffect(() => {
    async function requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        if (permission == "granted") {
          console.log("Notification Permission Granted.");

          const swRegistration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );

          const currentToken = await getToken(messaging, {
            vapidKey:
              "BBfUEaaJti9pn4T8UENLwqdC-8Bo6WziLsDnA-b74fGElIv0mioGCE_NMoO38CzQ27VcnGSnsC2tP-TBTF9_500",
            serviceWorkerRegistration: swRegistration,
          });
        }
      } catch (error) {}
    }
  });
};
