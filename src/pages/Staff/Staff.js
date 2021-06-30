import React, { Component } from 'react';
import axios from 'axios';

import './Staff.css';

class Staff extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {


    setTimeout( () => { 
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }, 2000);

   
  }
  

  render() {
    return (
      <ul>
        { this.state.persons.map((person,index) => <li key={index}>{person.name}</li>)}
    </ul>
    );
  }
}

export default Staff;