// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBycKrcqQs4qIaSC9GkR2izc7WRbgKQNcM',
  authDomain: 'netflix-clone-dbe09.firebaseapp.com',
  projectId: 'netflix-clone-dbe09',
  storageBucket: 'netflix-clone-dbe09.appspot.com',
  messagingSenderId: '49734430008',
  appId: '1:49734430008:web:3b72255cda02791424a5cd',
  measurementId: 'G-MV2RQ6KFGT',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
