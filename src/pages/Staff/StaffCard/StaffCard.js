import React from 'react';
import './StaffCard.css';

function StaffCard(props) {
  return (
      // Por probar fragmentos....
      <>
        <h3>Nombre:{props.person.name}</h3>    
        <p>Email:{props.person.email}</p>
      </>)
}

export default StaffCard
