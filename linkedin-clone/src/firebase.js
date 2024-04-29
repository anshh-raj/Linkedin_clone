import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6UTyy4QYXdxiG-cWIYta6d3CUhPchnNg",
  authDomain: "linkedin-clone-1a4ae.firebaseapp.com",
  projectId: "linkedin-clone-1a4ae",
  storageBucket: "linkedin-clone-1a4ae.appspot.com",
  messagingSenderId: "245526389149",
  appId: "1:245526389149:web:68aa27d833e3e32f180f74",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
