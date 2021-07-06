import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


import { userContext } from './context/userContext';
// importamos ThemeContext para añadir el provider en App.js
import { ThemeContext } from './context/themeContext'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:"Alex"
      },
      theme: ''
    }
  }
  
  logout = () => this.setState({user: {}});
  login = (name) => this.setState({user:{name}});
  // creamos una función toggleTheme que reciba un booleando y setee el estado theme a 'dark' o a ''
  toggleTheme = (dark) => dark ? this.setState({theme: 'dark'}) : this.setState({theme:''})
  

  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login
    }

    const theme = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
          <ThemeContext.Provider value={theme}>
            {/* añadimos el provider de nuestro ThemeContext envolviendo los componentes que necesitan utilizar dicho contexto */}
            <Header/>
            <Main/>
            <Footer/>
          </ThemeContext.Provider>
          </userContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App



