import React from "react";
import { useState } from "react";

const Card = ({ name, username, id }) => {

  const [odont,setOdont]=useState()
  const addFav = ()=>{
   const users={
      id:id,
      name:name,
    }
    localStorage.setItem(users.id,users.name)
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="doctor"width={200}height={200} />
        <h4>{name}</h4>
        <h5>{username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;