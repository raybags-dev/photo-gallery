import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9L1bOZ8x9ttYvUF7AJC8oB5ioFFJ_8CQ",
  authDomain: "photo-gallery-e0663.firebaseapp.com",
  projectId: "photo-gallery-e0663",
  storageBucket: "photo-gallery-e0663.appspot.com",
  messagingSenderId: "299954297071",
  appId: "1:299954297071:web:791c8a1f6539b0c81da31a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
