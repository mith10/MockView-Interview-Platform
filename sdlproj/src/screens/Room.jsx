import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from 'react-router-dom';
import './Room.css';
import './Lobby.css';

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [endCall,setEndCall] = useState(false);
  
  const navigate = useNavigate();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
    setEndCall(true);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
    setEndCall(true);
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  const handleEndCall = ()=>{
      console.log(endCall);
      if (peer.peer) {
        peer.peer.close();
        peer.peer = null; // Optionally, nullify the peer object
    }
    myStream.getTracks().forEach(track => {
      track.stop();
    });
    // navigate('/');
    {window.location.href="http://localhost:5173";}
  }

  return (
    <div>
      <h4>{remoteSocketId ? "Interview Started" : "No one in room"}</h4>
      <div className="container">
        {myStream && <button onClick={sendStreams} className="call-submit-button send-stream" >Start Video</button>}
        {remoteSocketId && <button onClick={!endCall?handleCallUser:handleEndCall} className="call-submit-button call" style={endCall?{backgroundColor:"#e02f2f"}:{}}>{endCall?'End Call':'Call'}</button>}
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {remoteStream && (
                <>
                  <h1>Other</h1>
                  <ReactPlayer
                    playing
                    url={remoteStream}
                    className="video-player"
                    id="remoteVideo"
                  />
                </>
                
            )}
          </div>
          <div className="col-sm-6">
            {myStream && (
              <>
              <h1>You</h1>
                <ReactPlayer
                  playing
                  url={myStream}
                  className="video-player"
                  id="localVideo"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
