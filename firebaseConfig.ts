import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI014ti6U6PdmRiyfwHWiWeOpD5X_9508",
  authDomain: "decathlonclone-315ad.firebaseapp.com",
  projectId: "decathlonclone-315ad",
  storageBucket: "decathlonclone-315ad.firebasestorage.app",
  messagingSenderId: "31853298845",
  appId: "1:31853298845:web:96274f4d1766c578248074"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
