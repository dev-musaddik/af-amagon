import React from "react";
import "./Navbar.css";
import logo from "./watchweblogo.png";
import { Link } from "react-scroll";
const Nabvar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link spy={true} to="collection" smooth={true}>
              Collection
            </Link>
          </li>
          <li>
          <Link spy={true} to="About" smooth={true}>
              About
            </Link></li>
          <li>
            <Link spy={true} to="Contract" smooth={true}>
              Contracts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nabvar;
