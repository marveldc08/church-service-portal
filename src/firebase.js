
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from "firebase/app";
import { useState, useEffect } from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxbtqmJcu74PzAIPyhCwBEytPvnzbXEfI",
  authDomain: "celz4-church-portal.firebaseapp.com",
  projectId: "celz4-church-portal",
  storageBucket: "celz4-church-portal.appspot.com",
  messagingSenderId: "1017932775368",
  appId: "1:1017932775368:web:e90ff526684ee7d5734afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}

export function logOut(){
     return signOut(auth);
}
export function login(email, password){
     return signInWithEmailAndPassword(auth, email, password )
}

// custom Hook
export function useAuth(){
     useEffect(() => {
         const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user);})
         return unsub;
     }, [])
     const[currentUser, setCurrentUser] = useState();
     return currentUser;
}