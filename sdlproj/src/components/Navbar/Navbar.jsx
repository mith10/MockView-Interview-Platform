<<<<<<< HEAD
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoImage from "../../assets/logo.png";
// Initialization for ES Users
import { Collapse, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Collapse, Ripple });
// import "./Navbar.css"; // Import the CSS file for Navbar styling

const CustomNavbar = () => {
  return (
    // <Navbar className="navbar" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#" className="logo-container">
    //       <img
    //         src={logoImage}
    //         height="30"
    //         className="logo-image d-inline-block align-top"
    //         alt="Logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="nav-links me-auto">
    //         <Nav.Link href="#" className="nav-link">
    //           Practitioner
    //         </Nav.Link>
    //         <Nav.Link href="#" className="nav-link">
    //           Find
    //         </Nav.Link>
    //         <Nav.Link href="#" className="nav-link">
    //           Job
    //         </Nav.Link>
    //         <Nav.Link href="#" className="nav-link">
    //           Interviewee
    //         </Nav.Link>
    //       </Nav>
    //       <Nav className="auth-buttons">
    //         <Nav.Link href="#" className="login-button">
    //           Login
    //         </Nav.Link>
    //         <Nav.Link href="#" className="join-button">
    //           Join Now
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarButtonsExample">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
      </ul>

      <div className="d-flex align-items-center">
        <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2">
          Login
        </button>
        <button data-mdb-ripple-init type="button" className="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          data-mdb-ripple-init
          className="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i className="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default CustomNavbar;
=======
import React, { useState } from 'react'
import logo from '../../assets/logo1.png'
import "./Navbar.css";


export default function Navbar() {
    const [hamburgerCollapse,setHamburgerCollapse] = useState("");
    return (
        <div  style={{marginTop:"-50px"}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src={logo} className='logo'></img>
                    <button className="navbar-toggler" type="button" onClick={() => setHamburgerCollapse(hamburgerCollapse=="" ? "show" : "")}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse "+hamburgerCollapse} id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-text">
                                <a className="nav-link active" aria-current="page" href="#">Practice</a>
                            </li>
                            <li className="nav-item nav-text">
                                <a className="nav-link active" aria-current="page" href="#">Interview</a>
                            </li>
                            <li className="nav-item nav-text">
                                <a className="nav-link active" aria-current="page" href="#">Find a Job</a>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <div className="container">
                            <button className='btn' type='submit'>Login</button>
                            <button className="btn btn-primary" type="submit">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
>>>>>>> 96e16f827de37f021c4ec23e6b393b7c7e266e6d
