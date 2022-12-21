/** @format */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUNQdcOq4G-iqv7BxyeHcQBLDLqOd_vdk",
  authDomain: "finbuh-98ba8.firebaseapp.com",
  projectId: "finbuh-98ba8",
  storageBucket: "finbuh-98ba8.appspot.com",
  messagingSenderId: "952254182394",
  appId: "1:952254182394:web:a0f18ff1885726513d6a43",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
