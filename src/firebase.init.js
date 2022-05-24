import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDw009byW2UuvXqKczNr4i-kaLn_tNnsBg",
  authDomain: "refrigerator-manufacturing.firebaseapp.com",
  projectId: "refrigerator-manufacturing",
  storageBucket: "refrigerator-manufacturing.appspot.com",
  messagingSenderId: "934945676619",
  appId: "1:934945676619:web:73637be4224fea98c89cce"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;