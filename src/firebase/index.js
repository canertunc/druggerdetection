// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",
//   authDomain: "vue-fire-auth-yt-f1899.firebaseapp.com",
//   projectId: "vue-fire-auth-yt-f1899",
//   storageBucket: "vue-fire-auth-yt-f1899.appspot.com",
//   messagingSenderId: "876419201426",
//   appId: "1:876419201426:web:3886dafc2a96676a5a294b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// // const provider2 = GoogleAuthProvider();

// const storage = getStorage(app);

// export { auth , storage}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",
  authDomain: "vue-fire-auth-yt-f1899.firebaseapp.com",
  projectId: "vue-fire-auth-yt-f1899",
  storageBucket: "vue-fire-auth-yt-f1899.appspot.com",
  messagingSenderId: "876419201426",
  appId: "1:876419201426:web:3886dafc2a96676a5a294b",
  databaseURL: "https://vue-fire-auth-yt-f1899-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Kullanıcı bilgilerini Firestore'a kaydet
async function saveUserInfoToFirestore(uid, name, surname,gender,date,job,country) {
  const userCollection = collection(firestore, "users");
  const userDocRef = doc(userCollection, uid);

  await setDoc(userDocRef, {
    name: name,
    surname: surname,
    gender: gender,
    date : date,
    job: job,
    country : country,
    
    // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
  });
}

export { auth, storage, saveUserInfoToFirestore };




// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries
// // import { getAuth } from "firebase/auth";
// // import { getStorage } from "firebase/storage";

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",
// //   authDomain: "vue-fire-auth-yt-f1899.firebaseapp.com",
// //   projectId: "vue-fire-auth-yt-f1899",
// //   storageBucket: "vue-fire-auth-yt-f1899.appspot.com",
// //   messagingSenderId: "876419201426",
// //   appId: "1:876419201426:web:3886dafc2a96676a5a294b"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // const auth = getAuth(app);
// // // const provider2 = GoogleAuthProvider();

// // const storage = getStorage(app);

// // export { auth , storage}
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",
//   authDomain: "vue-fire-auth-yt-f1899.firebaseapp.com",
//   projectId: "vue-fire-auth-yt-f1899",
//   storageBucket: "vue-fire-auth-yt-f1899.appspot.com",
//   messagingSenderId: "876419201426",
//   appId: "1:876419201426:web:3886dafc2a96676a5a294b",
//   databaseURL: "https://vue-fire-auth-yt-f1899-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// // Kullanıcı bilgilerini Firestore'a kaydet
// async function saveUserInfoToFirestore(uid, name, surname,job) {
//   const userCollection = collection(firestore, "users");
//   const userDocRef = doc(userCollection, uid);

//   await setDoc(userDocRef, {
//     name: name,
//     surname: surname,
//     job: job,



//     // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
//   });
// }

// export { auth, storage, saveUserInfoToFirestore };

