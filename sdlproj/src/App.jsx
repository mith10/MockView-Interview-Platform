import React from 'react';
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {BrowserRouter,Routes, Route} from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

import { SocketProvider } from "./context/SocketProvider";
import Practice from './components/Practice/Practice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <SocketProvider>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/call" element={<LobbyScreen />} />
                  <Route path="/room/:roomId" element={<RoomPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path='/practice' element={<Practice/>}/>
              </Routes>
            </SocketProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;


