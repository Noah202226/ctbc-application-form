// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt8OGQmEMJLtZVpkHiC9lB92ccd_UnRBs",
  authDomain: "rsbc-agents-app.firebaseapp.com",
  projectId: "rsbc-agents-app",
  storageBucket: "rsbc-agents-app.appspot.com",
  messagingSenderId: "102758156659",
  appId: "1:102758156659:web:c1b2504ccc264b3df15d06",
  measurementId: "G-7FE26GB53S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  persistence: false, // Disable offline persistence
});

export const db = getFirestore(app);
// const analytics = getAnalytics(app);
