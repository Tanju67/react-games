import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.logoBox}>
        <NavLink to={"/"}>
          <h2>REACT GAME</h2>
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
