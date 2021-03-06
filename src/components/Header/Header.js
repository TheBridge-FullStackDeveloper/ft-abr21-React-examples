import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";
import logo from '../../logo.svg'

import {userContext} from '../../context/userContext';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          <img src={logo} alt="web logo" />
          <h1>Super App React</h1>
            <Nav /> 
        </div>
        <userContext.Consumer>
            {({user,logoutUser}) => 
                <div className="user">
                  <p>User: {user.name}</p>
                  <button onClick={logoutUser}>Logout</button>
                </div>
            }
        </userContext.Consumer>
      </header>
    );
  }
}
