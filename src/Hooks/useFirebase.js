import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useLocation, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   google signin
  const googleLogin = () => {
    setIsloading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   sign out
  const logOut = () => {
    setIsloading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser([]);
        window.location.reload(false)
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsloading(false));

  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        console.log("User SignOut");
        // ...
      }
      setIsloading(false)
    });
  }, []);
  return { user, googleLogin, logOut,setUser,setIsloading,isLoading };
};

export default useFirebase;
