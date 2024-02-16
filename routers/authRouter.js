
import { Router } from "express";
//firebase after initialized
// import { firebaseApp } from "../config.js";
// //for firebase.auth() not found error
// import 'firebase/compat/auth';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "../config.js";


const router = Router();
router.get("/register", (req, res) => {
    const email = "baggythecreator03@gmail.com";
    const password = "password@132";
    createUserWithEmailAndPassword(firebaseAuth,email, password);
    res.status(200).send("success");
})  

export { router };




