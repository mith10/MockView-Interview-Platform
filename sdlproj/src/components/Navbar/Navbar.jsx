import React, { useState } from 'react'
import logo from '../../assets/logo1.png'
import {Link} from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
    const [hamburgerCollapse,setHamburgerCollapse] = useState("");
    return (
        <div  style={{marginTop:"-50px"}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/"><img src={logo} className='logo'></img></Link>
                    <button className="navbar-toggler" type="button" onClick={() => setHamburgerCollapse(hamburgerCollapse=="" ? "show" : "")}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse "+hamburgerCollapse} id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-text">
                                <Link className="nav-link active" aria-current="page" to="/practice">Practice</Link>
                            </li>
                            <li className="nav-item nav-text">
                                <Link className="nav-link active" aria-current="page" to="/call">Interview</Link>
                            </li>
                            <li className="nav-item nav-text">
                                <Link className="nav-link active" aria-current="page" to="/">Find a Job</Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <div className="container">
                            <Link to="/login"><button className='btn' type='submit'>Login</button></Link>
                            <Link to="/signup"><button className="btn btn-primary" type="submit">Signup</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
