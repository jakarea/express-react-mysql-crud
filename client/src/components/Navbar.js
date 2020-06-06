import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">React Express MySQL CRUD</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" exact to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/add">Add</NavLink>
          </div>
        </div>
      </nav>
    </div>

    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/about">About</NavLink>
    //   </li>

    // </ul>
  );
};

export default Navbar;
