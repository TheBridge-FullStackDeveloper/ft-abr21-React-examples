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
            <br />


            <userContext.Consumer>
            {({user,logoutUser}) => 
                <>
                  <p>User: {user.name}</p>
                  <button onClick={logoutUser}>Logout</button>
                </>
            }
            </userContext.Consumer>
            
            
        </div>
      </header>
    );
  }
}
