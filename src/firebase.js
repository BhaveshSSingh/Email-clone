import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdAySBE6z_W2INegki7qs1seYDO3W3muY",
  authDomain: "inlook-email.firebaseapp.com",
  projectId: "inlook-email",
  storageBucket: "inlook-email.appspot.com",
  messagingSenderId: "484993443819",
  appId: "1:484993443819:web:838e3d429cdfd701675bae",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// auth
const auth = getAuth();

const provider = new GoogleAuthProvider();

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User Logged Out");
    })
    .catch((err) => {
      alert(err.message);
    });
};
const login = () => {
  signInWithPopup(auth, provider).catch((error) => {
    alert(error.message);
  });
};
export { db, app, auth, provider, logout, login };
