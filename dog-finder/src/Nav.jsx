import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

const Nav = ({names}) => {
  return (
    <nav className="Nav">
      {names.map((name) => {
        return (
        <NavLink to={`/dogs/${name}`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "inactive"
          }
        >
          {name}
        </NavLink>);
      })}
    </nav>
  );
};

export default Nav;