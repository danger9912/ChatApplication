import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import'./App.css';
import LoginForm from './Components/LoginForm';

const App=() =>{

  if(!localStorage.getItem('username')) return <LoginForm/>

    return(
      <ChatEngine
        height="100vh"
        projectID="8b52ea55-0efc-4911-8b36-ae47ff286446"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps}></ChatFeed>}
      />
       
    );
}
export default App;