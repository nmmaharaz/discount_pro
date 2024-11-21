import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase-init";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    console.log(user)
    const registration = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const AuthupdateProfile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;