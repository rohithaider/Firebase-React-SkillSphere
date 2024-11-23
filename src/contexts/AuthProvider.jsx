import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../firebase-config";


export const AuthContext = createContext();
const auth = getAuth(app)

 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);  // Update the user state
        });
    
        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
      }, []);
    
    
    
      const authInfo = {
        user, 
        setUser,
        createUser,
        logOut
      };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;
