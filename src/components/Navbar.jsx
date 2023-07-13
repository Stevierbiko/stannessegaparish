import { useState } from "react";
import { Link, link, NavLink } from "react-router-dom";
import Logo from "../image/logo.png";
import { links } from "..//data";
import { FaBars } from "react-icons/fa";
import {GrClose} from "react-icons/gr"
import "./Navbar.css";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div>
      <nav>
        <div className="container nav__container">
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="St Annes Sega" />
          </Link>
          <ul
            className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
          >
            {links.map(({ tag, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : 
                  "")}onClick={() => setIsNavShowing(prev =>!prev)}
                >
                  {" "}
                  {tag}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="nav__navtoggle-btn" onClick={() => setIsNavShowing(prev =>!prev)}>
            {
                isNavShowing ? <GrClose/> : <FaBars/>
            }
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
