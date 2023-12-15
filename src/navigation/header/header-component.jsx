import React from "react";
import { Link } from "react-router-dom"
import logo from '../../assest/images/logo.png'
import "./header-styles.css";






const Header = () => {
    return(
        <>
        <nav>
            <div className="heading">
                <img src={logo} alt="#" className="logo-image"/>
            </div>
            <ul className="nav-links">
                <li className="nav-list">
                    <Link to="/home" className="nav-active">Home</Link>
                </li>
                <li className="nav-list">
                    <Link to="/our-product" className="nav-active">Our product</Link>
                </li>
                <li className="nav-list">
                    <Link to="" className="nav-active">Contact Us</Link>
                </li>
                <li className="nav-list">
                    <Link to="" className="nav-active">About Us</Link>
                </li>
                <li className="nav-list">
                    <Link to="" className="nav-active">Advertisement</Link>
                </li>
                <li className="nav-list">
                    <Link to="/walmart" className="nav-active">Walmart</Link>
                </li>
                <li className="nav-list">
                    <Link to="/" className="nav-active">Log out</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Header;