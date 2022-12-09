import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentList,setDentList]=useState([]);
  const URL='https://jsonplaceholder.typicode.com/users/:id';
  
  const {id}=useParams()

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>setDentList(res.data))
  },[])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentList.name}</td>
          <td>{dentList.email}</td>
          <td>{dentList.phone}</td>
          <td>{dentList.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail