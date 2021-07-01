import React, { Component } from 'react';
import axios from 'axios';
import StaffCard from './StaffCard';

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
  
  paintCards = () => 
    this.state.persons.map((person,index) => <StaffCard person={person} key={index}/>)



  render() {
    return (
      <section>
        {this.paintCards()}
      </section>
    );
  }
}

export default Staff;