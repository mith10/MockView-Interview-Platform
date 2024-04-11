import React, { useState, useEffect,useCallback } from 'react'
import './CallPage.css';
import {useSocket} from "../providers/socket";
import {useNavigate} from 'react-router-dom';
export default function CallPage() {
    const {socket} = useSocket();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [roomId,setRoomId] = useState("");

    const handleRoomJoined= useCallback(
        ({roomId}) =>{
          navigate(`/room/${roomId}`);
        },[navigate]
    );

    useEffect(()=>{
        socket.on("joined-room",handleRoomJoined);

        return () => {
            socket.off("joined-room",handleRoomJoined);
        };
    },[handleRoomJoined,socket]);

    const handleJoinRoom = () =>{
        socket.emit("join-room",{emailId:email,roomId});
    }
  return (
    <div>
        <div className="container call-container">
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' name='email' placeholder='Email' className='call-input container'/>
            <input value={roomId} onChange={e => setRoomId(e.target.value)} type='text' name='room_code' placeholder='Room Code' className='call-input container'/>
            <button onClick={handleJoinRoom} className='call-submit-button container'>Submit</button>
        </div>
    </div>
  )
}
