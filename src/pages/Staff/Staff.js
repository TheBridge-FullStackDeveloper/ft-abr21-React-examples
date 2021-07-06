// Vamos a refactorizar nuestro componente Staff para hacerlo funcional y poder trabajar con nuestro custom hook
import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import StaffCard from './StaffCard';

import './Staff.scss';

const Staff = () => {

  const [persons, setPersons] = useState([])
  const { loading, result } = useFetch(`https://jsonplaceholder.typicode.com/users`)


  useEffect(()=>{
    setPersons(result)
  }, [result])

  
  const paintCards = () => persons.map((person,index) => <StaffCard person={person} key={index}/>)

    return (
      <section>
        { loading ? <p>LOADING...</p> : paintCards()}
      </section>
    )
}

export default Staff;