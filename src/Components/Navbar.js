import React from "react";
import { logo, pic } from "../Utils/consts";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div id="header">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav id="navbar">
          <ul>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Categories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="content">
        <div id="content-left">
          <h1>Digital</h1>
          <h2>Marketing</h2>
          <p>
            We provides you with a large number of services to grow your company
            into a brand digitally. We aim to assist your business reach new
            heights by converting it into a brand and expanding your market base
            through digitization.
          </p>
        </div>
        <div id="content-right">
          <img src={pic} alt="pic" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
