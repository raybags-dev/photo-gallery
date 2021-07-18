import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const {
  REACT_APP_PHOTO_GALLERY_API_KEY,
  REACT_APP_PHOTO_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: REACT_APP_PHOTO_GALLERY_API_KEY,
  authDomain: "photo-gallery-e0663.firebaseapp.com",
  projectId: "photo-gallery-e0663",
  storageBucket: "photo-gallery-e0663.appspot.com",
  messagingSenderId: REACT_APP_PHOTO_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
