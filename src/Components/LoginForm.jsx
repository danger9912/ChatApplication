import React from 'react'
import { useState,createContext } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AppContext } from "../App";
// import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase.Config';
import { useNavigate } from "react-router-dom";
import googlepng from './google.png';
const LoginForm = () => {
    const { setIsLoggedIn , user , setUser } = React.useContext(AppContext);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [googleuser,setusergoogle] =useState('');
    const [googlepass,setpassgoogle] =useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "8b52ea55-0efc-4911-8b36-ae47ff286446", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            setIsLoggedIn(true);
            Swal.fire({
                title: "Login successfully",
                // text: "That thing is still around?",
                icon: "success" 
              }).then(()=>[
              
                window.location.href="/chat"
              ]);
        }
        catch (error) {
            seterror('Oops, Incorrect Credentials...')
        }
    }
    const navigate = useNavigate();
    const handlegoogle = async (e) => {
        e.preventDefault();
        
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            const user = response.user;
            console.log(user);
            setusergoogle(user.displayName);
            setpassgoogle(user.email);
    
            const authObject = { 'Project-ID': "8b52ea55-0efc-4911-8b36-ae47ff286446", 'User-Name': user?.displayName, 'User-Secret': user?.email };
    
            try {
                await axios.get('https://api.chatengine.io/chats', { headers: authObject });
                localStorage.setItem('username', user?.displayName);
                localStorage.setItem('password',  user?.email);
                setIsLoggedIn(true);
                Swal.fire({
                    title: "Login successfully",
                   
                    icon: "success" 
                  }).then(()=>[
                  
                    window.location.href="/chat"
                  ]);
                // navigate("/chat");
            } catch (error) {
                seterror('Oops, Incorrect Credentials...');
            }
        } catch (error) {
            seterror('Error signing in with Google: Need to signup' );
        }
    }
    
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'> Chat Application</h1>
                <form on onSubmit={handlesubmit}>
                    <input type="text" value={username} on onChange={(e) => setusername(e.target.value)} className='input' placeholder='Username' />
                    <input type="password" value={password} on onChange={(e) => setpassword(e.target.value)} className='input' placeholder='password' />
                    <div align="center">
                    <button onClick={handlesubmit} style={signInButtonStyle}>
                            <span> Start Chatting</span>
                        </button>
                    </div>
                   <span style={{marginLeft:"90px"}}> ---------------- or ----------------</span>  
                    <button onClick={handlegoogle} style={signInButtonStyle2}>
                        <img src={googlepng} alt="Google Logo" style={googleLogoStyle} />
                        Sign in with Google
                    </button>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}
const signInButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '190px',
    height: '50px',
    backgroundColor: '#000', // Google's brand color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft: "0px",
    marginBottom: "20px"
};
const signInButtonStyle2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '190px',
    height: '50px',
    backgroundColor: '#000', // Google's brand color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft: "110px",
    marginBottom: "20px"
};

const googleLogoStyle = {
    width: '30px',
    height: '30px',
    marginRight: '10px',
};
export default LoginForm