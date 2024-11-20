import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase-init";
import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const registration = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        registration,
        userLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;