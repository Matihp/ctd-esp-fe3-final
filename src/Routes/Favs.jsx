import React from "react";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const borrarStorage=()=>{
    localStorage.clear()
    window.location.reload()
  }

  const fav=JSON.parse(localStorage.getItem('favs')) 

  return (
    <>
      <h1>Dentists favs</h1>
      <div className="fav">
        
        <p></p>
        {fav ? <img src="./images/doctor.jpg" alt=""width={200}height={200} /> : null}

        {fav ? <p>{fav.name} <p>{fav.username}</p></p> : null}

        {fav ? <button className="btn2" onClick={borrarStorage}>Eliminar</button> : null}
        
      </div>
      
    </>
  )
}

export default Favs;
