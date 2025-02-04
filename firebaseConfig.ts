import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "***************************************",
    authDomain: "***********************************",
    projectId: "************************************",
    storageBucket: "********************************",
    messagingSenderId: "****************************",
    appId: "****************************************",
    measurementId: "*********************************"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
