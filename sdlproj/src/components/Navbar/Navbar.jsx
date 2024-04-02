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
