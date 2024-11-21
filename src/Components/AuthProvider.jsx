import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase-init";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [forgetEmail, setForgetEmail] = useState("")
    console.log(forgetEmail)
    const registration = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const AuthupdateProfile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
    }

    const forgetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        })
        return()=>{
            unSubcribe()
        }
    },[])

    const authInfo ={
        registration,
        userLogin,
        setUser,
        user,
        logOut,
        loader,
        AuthupdateProfile,
        setForgetEmail,
        forgetEmail,
        forgetPassword,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;