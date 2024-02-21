import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase.Config';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const handlegoogle =async (e)=>{

        const provider = await new GoogleAuthProvider();
        await signInWithPopup(auth, provider).then((response) => {
            localStorage.setItem("user", JSON.stringify(response.user));
            // setIsLoggedIn(true);
            console.log(response.user);
            navigate("/login");
        });
     

    }
  return (
   <button onClick={handlegoogle} > google </button>
  )
}

export default Login