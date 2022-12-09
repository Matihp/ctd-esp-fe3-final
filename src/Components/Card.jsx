import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  
  const [fav,setFav]=useState([])
  // const [nombre,setNombre]=useState([])
  const addFav = ()=>{
    let fav={
      name:name,
      username:username,
    }
    // lol.push(hola)
    localStorage.setItem("favs",JSON.stringify(fav))
  }
  
  const {state}=useGlobalStates()
  const style={color: state.dark && '#FFF'};


    return (
    <div className="card" style={{}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {username ? <img src="./images/doctor.jpg" alt="doctor"width={200}height={200} /> : null}
        {username ? <Link to={`/dentist/${id}`}style={style}><a>{name}</a></Link> : null}
        <h5>{username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {username ? <button onClick={addFav}className="favButton">⭐</button> : null}  
    </div>
  );
};

export default Card;