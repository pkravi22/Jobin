import { signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged,getAuth } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup,signInWithRedirect } from 'firebase/auth'; 
export const LoginApi = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const RegisterApi = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const googleSignIn=async()=>{
    const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Google Sign-In successful:", user);
    return user;
  } catch (error) {
    console.error("Google Sign-In error:", error.message);
    throw error;
  }
  

}  
 
