// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDU8-hfmlcmAiwlwqwmwdwWXilOaFh8eek",
  authDomain: "assignment-12-b780d.firebaseapp.com",
  projectId: "assignment-12-b780d",
  storageBucket: "assignment-12-b780d.appspot.com",
  messagingSenderId: "388111242275",
  appId: "1:388111242275:web:141d88cc81b43da322cd96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;