
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaOhin_G5b2wY1iGSXimKtnGex-1OY5lM",
  authDomain: "chat-application-40e74.firebaseapp.com",
  projectId: "chat-application-40e74",
  storageBucket: "chat-application-40e74.appspot.com",
  messagingSenderId: "863033821926",
  appId: "1:863033821926:web:c2a2a152f15c93b6298927",
  measurementId: "G-CS9DPLVL4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth =getAuth(app);
export default app;