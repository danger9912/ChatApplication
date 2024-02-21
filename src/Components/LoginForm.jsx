import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const LoginForm = () => {
    const [username,setusername] = useState('');
    const[password ,setpassword] =useState('');
    const [error ,seterror] =useState('');
    const handlesubmit =async(e) =>{
        e.preventDefault();
        const authObject ={ 'Project-ID':"8b52ea55-0efc-4911-8b36-ae47ff286446",'User-Name':username, 'User-Secret':password}
        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        }
        catch(error){
            seterror('Oops, Incorrect Credentials...')
        }
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'> Chat Application</h1>
            <form on onSubmit={handlesubmit}>
                <input type ="text" value={username} on onChange={(e) => setusername(e.target.value)} className='input' placeholder='Usernmame' required/>
                <input type ="password" value={password} on onChange={(e) => setpassword(e.target.value)} className='input' placeholder='password' required/>
                <div align="center">
                    <button type='submit' className='button'>
                        <span> Start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm