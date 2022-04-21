import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA940Stc-elBkYdckMlwWdTxKB8xKoqTQk",
  authDomain: "react-crud-f6df4.firebaseapp.com",
  projectId: "react-crud-f6df4",
  storageBucket: "react-crud-f6df4.appspot.com",
  messagingSenderId: "605013533216",
  appId: "1:605013533216:web:8b669216165fa7f7cd1245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);