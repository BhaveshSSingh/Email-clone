import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, app, auth, provider };
