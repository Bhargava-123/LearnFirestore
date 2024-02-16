// @firebase package
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

// firebase-admin package
import { initializeApp as initializeAdminApp,cert } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { credentials,config } from "./serviceAccountKey.js";

const adminApp = initializeAdminApp();
const adminAuth = getAdminAuth();
const firestore = getFirestore();


const firebaseConfig = {
    credential: cert(credentials),
    ...config
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);


export { firebaseAuth };