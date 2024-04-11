// import React, { useEffect,useCallback,useState } from 'react';
// import {useSocket} from "../providers/socket";
// import {usePeer} from "../providers/Peer";
// import ReactPlayer from 'react-player';

// export default function RoomPage() {
//     const {socket} = useSocket();
//     const {peer,createOffer,createAnswer,setRemoteAns,sendStream,remoteStream} = usePeer();
//     const [myStream,setMyStream] = useState(null);
//     const [remoteEmailId,setRemoteEmailId] = useState(null);


//     const handleNewUserJoined = useCallback(
//         async (data) => {
//             const {emailId} = data;
//             console.log("New User joined room",emailId);
//             const offer = await createOffer();
//             socket.emit("call-user",{emailId,offer});
//             setRemoteEmailId(emailId);
//         },[createOffer,socket]
//     );

//     const handleIncommingCall = useCallback(async (data) => {
//         const {from,offer} = data;
//         console.log("incomming call from",from,offer);
//         const ans = await createAnswer(offer);
//         socket.emit("call-accepted",{emailId : from, ans});
//         setRemoteEmailId(from);
//     },[createAnswer,socket]);

//     const handleCallAccepted = useCallback(async(data) => {
//         const {ans} = data;
//         console.log("call accepted",ans);
//         await setRemoteAns(ans);
        
//     },[setRemoteAns]);

//     const  getUserMediaStream = useCallback(async ()=>{
//         const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
//         setMyStream(stream);
//     },[]);

//     useEffect(() => {
//         socket.on("user-joined",handleNewUserJoined);
//         socket.on("incomming-call",handleIncommingCall);
//         socket.on("call-accepted",handleCallAccepted);

//         return () => {
//             socket.off("user-joined",handleNewUserJoined);
//             socket.off("incomming-call",handleIncommingCall);
//             socket.off("call-accepted",handleCallAccepted);
//         };
//     },[handleCallAccepted,handleIncommingCall,handleNewUserJoined,socket]);
  

//     const handleNegosiation = useCallback(()=>{
//         const localOffer = peer.localDescription;
//         socket.emit('call-user',{emailId:remoteEmailId,offer:localOffer});
//     },[remoteEmailId,socket]);

//     useEffect(()=>{
//         peer.addEventListener('negotiationneeded',handleNegosiation);

//         return ()=>{
//             peer.removeEventListener('negotiationneeded',handleNegosiation);
//         }
//     },[]);
//     useEffect(()=>{
//         getUserMediaStream();
//     },[getUserMediaStream])
    
  
//     return (
//     <div>
//         <h4> You are connced to {remoteEmailId}</h4>
//         <button onClick={(e)=>sendStream(myStream)}>Send My video</button>
//         <ReactPlayer url={myStream} playing muted/>
//         <ReactPlayer url={remoteStream} playing />
//     </div>
//   )
// }


import React, { useEffect, useCallback, useState } from 'react';
import { useSocket } from "../providers/socket";
import { usePeer } from "../providers/Peer";

export default function RoomPage() {
    const { socket } = useSocket();
    const { peer, createOffer, createAnswer, setRemoteAns, sendStream, remoteStream } = usePeer();
    const [myStream, setMyStream] = useState(null);
    const [remoteEmailId, setRemoteEmailId] = useState(null);

    const handleNewUserJoined = useCallback(
        async (data) => {
            const { emailId } = data;
            console.log("New User joined room", emailId);
            const offer = await createOffer();
            socket.emit("call-user", { emailId, offer });
            setRemoteEmailId(emailId);
        }, [createOffer, socket]
    );

    const handleIncommingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log("incoming call from", from, offer);
        const ans = await createAnswer(offer);
        socket.emit("call-accepted", { emailId: from, ans });
        setRemoteEmailId(from);
    }, [createAnswer, socket]);

    const handleCallAccepted = useCallback(async (data) => {
        const { ans } = data;
        console.log("call accepted", ans);
        await setRemoteAns(ans);
    }, [setRemoteAns]);

    const getUserMediaStream = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
            setMyStream(stream);
        } catch (error) {
            console.error('Error accessing user media:', error);
        }
    }, []);

    useEffect(() => {
        socket.on("user-joined", handleNewUserJoined);
        socket.on("incoming-call", handleIncommingCall);
        socket.on("call-accepted", handleCallAccepted);

        return () => {
            socket.off("user-joined", handleNewUserJoined);
            socket.off("incoming-call", handleIncommingCall);
            socket.off("call-accepted", handleCallAccepted);
        };
    }, [handleCallAccepted, handleIncommingCall, handleNewUserJoined, socket]);

    useEffect(() => {
        getUserMediaStream();
    }, [getUserMediaStream]);

    const handleSendStream = () => {
        if (myStream) {
            sendStream(myStream);
        } else {
            console.warn("No local stream available to send.");
        }
    };

    return (
        <div>
            <h4>You are connected to {remoteEmailId}</h4>
            <button onClick={handleSendStream}>Send My Video</button>
            {myStream && <video srcObject={myStream} autoPlay muted />}
            {remoteStream && <video srcObject={remoteStream} autoPlay />}
        </div>
    );
}

