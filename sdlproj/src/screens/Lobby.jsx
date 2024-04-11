import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import './Lobby.css';
import registerSvg from '../assets/register.svg';
import practiceSvg from '../assets/interview-practice.svg';
import successedSvg from '../assets/successed.svg';

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="container call-container">
        <div className="row">
    <div className="col-sm-6"style={{paddingTop: "10%"}}>
    <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className='call-input container'
        />
        <br />
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Room Code"
          className='call-input container'
        />
        <br />
        <button className='call-submit-button container'>Join</button>
      </form>
    </div>
    <div className="col-sm-6">
      {/* <img src={svgImage} alt="Floating Image" className='interview-img'/>   */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={registerSvg} alt="Floating Image" className='interview-img'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Step 1</h5>
        <p>Register Yourself.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={practiceSvg} alt="Floating Image" className='interview-img'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Step 2</h5>
        <p>Give practice interviews</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={successedSvg} alt="Floating Image" className='interview-img'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Step 3</h5>
        <p>Get Placed in Multi National Companies</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
      
    </div>
  );
};

export default LobbyScreen;
