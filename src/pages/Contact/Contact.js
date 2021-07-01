import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

import {userContext} from '../../context/userContext';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Cambio hecho!")
  }
  
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    let res = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user })

    console.log(res);
    console.log(res.data);
    this.setState({register:res.data})
  
  }

  sendConfirm = () => this.state.register && this.state.register.user.name?
  <h2>Gracias, {this.state.register.user.name}. Tracking nº: {this.state.register.id}</h2>
  :""
    

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
        <userContext.Consumer>
        {({loginUser}) => 
          <button type="submit" onClick={()=>loginUser(this.state.name)}>Add</button>
        }
        </userContext.Consumer>
        </form>

        <p>Usuario introducido: {this.state.name ||"--"}</p>
        
        {this.sendConfirm()}    
      </div>
    )
  }
}

export default Contact;