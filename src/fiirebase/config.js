import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyD2o_NNZx_L791vfA9P_hseBYbcZJGIlAQ',
  authDomain: 'fiiregram.firebaseapp.com',
  databaseURL: 'https://fiiregram.firebaseio.com',
  projectId: 'fiiregram',
  storageBucket: 'fiiregram.appspot.com',
  messagingSenderId: '149519443512',
  appId: '1:149519443512:web:8138674922b30a3ca268cd',
  measurementId: 'G-QMWZJ6XNXT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
