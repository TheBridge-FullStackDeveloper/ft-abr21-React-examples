import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import {userContext} from './context/userContext';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:"Alex"
      }
    }
  }
  
  logout = () => this.setState({user: {}});
  login = (name) => this.setState({user:{name}});
  

  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Header/>
            <Main/>
          </userContext.Provider>
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}

export default App



