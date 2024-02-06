import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { IoGameControllerSharp } from "react-icons/io5";

function NavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.logoBox}>
        <NavLink className={classes.logo} to={"/"}>
          <IoGameControllerSharp />
          r-Games
        </NavLink>
      </div>
      <ul className={classes.menuBox}>
        <li>
          <NavLink to={"/games"}>Games</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
