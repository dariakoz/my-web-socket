import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { ChatBox } from './components/ChatBox';
import ChatContainer from './components/ChatContainer';
import InputText from './components/InputText';
import ChatServices from "./socket/ChatService";
import { IMessage } from './types/chat';



function App() {

return (
    <div className="App">
      <ChatContainer />
    </div>
  );
}

export default App;
