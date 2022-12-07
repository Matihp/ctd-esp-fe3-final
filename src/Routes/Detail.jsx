import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentList,setDentList]=useState([]);
  const URL='https://jsonplaceholder.typicode.com/users/:id';
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail