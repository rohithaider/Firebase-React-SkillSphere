import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../firebase-config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

 const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    console.log(user)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);  
        });
    
       
        return () => unsubscribe();
      }, []);

     const googleLogIn =()=>{
        return signInWithPopup(auth, provider)
     }
    
    
    
      const authInfo = {
        user, 
        setUser,
        createUser,
        logOut,
        signIn,
        googleLogIn
      };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;
