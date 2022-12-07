import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const user = localStorage.getItem('user')
  const borrarStorage=()=>{
    localStorage.clear()
  }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {user}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <button onClick={borrarStorage}>borrar</button>
    </>
  );
};

export default Favs;
