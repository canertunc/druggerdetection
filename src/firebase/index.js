// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",
  authDomain: "vue-fire-auth-yt-f1899.firebaseapp.com",
  projectId: "vue-fire-auth-yt-f1899",
  storageBucket: "vue-fire-auth-yt-f1899.appspot.com",
  messagingSenderId: "876419201426",
  appId: "1:876419201426:web:3886dafc2a96676a5a294b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const provider2 = GoogleAuthProvider();
export { auth }