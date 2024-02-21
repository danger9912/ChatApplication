
import'./App.css';
import LoginForm from './Components/LoginForm';
import Login from './Components/Login';
import Chats from './Components/Chats';
import Logout from './Components/Logout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const App=() =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  // if(!localStorage.getItem('username')) return <Login/>

    return(
      <>
     
     <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn , user , setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/chat" element={localStorage.getItem("username") ?<Chats /> : <LoginForm></LoginForm>} />
            <Route path="/logout" element={<Logout />} />

           
          </Routes>
        </Router>
        </AppContext.Provider>
      </>
    );
}
export default App;