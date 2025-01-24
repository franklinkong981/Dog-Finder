import React from "react";
import {NavLink} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import "./Nav.css";

const Nav = ({names}) => {
  return (
    <nav className="Nav">
      {names.map((name) => {
        return (
        <NavLink key={uuid()} to={`/dogs/${name}`}
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