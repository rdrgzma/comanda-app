import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-menu">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comanda">
                  Comanda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/atendimento">
                  Atendimento
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
