import React, { useEffect } from 'react';
import './App.css';
import { ChatBox } from './components/ChatBox';
import ChatContainer from './components/ChatContainer';
import InputText from './components/InputText';


function App() {
  const obj = {user: 'Vinzenz', message: "Test123"};

  return (
    <div className="App">
      <ChatBox message='Vinzenz'/>
      <ChatBox message='Clemens'/>
      <InputText />
    </div>
  );
}

export default App;
