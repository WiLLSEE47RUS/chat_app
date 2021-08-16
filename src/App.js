import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm.js";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height = '100vh'
            projectID = 'c55d0e06-a91e-4e8c-a349-c46979cbb2de'
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;

