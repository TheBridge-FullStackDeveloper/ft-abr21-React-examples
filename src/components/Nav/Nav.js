import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {

  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__listItem">
            <a className="Nav__link" href="/landing">Inicio</a>
          </li>
          <li>
            <a href="/staff"> Quienes somos</a>
          </li>
          <li>
            <a href="/location"> Dónde Estamos</a>
          </li>
          <li>
            <a href="/contact"> Conócenos</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
