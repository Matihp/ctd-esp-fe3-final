import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  
  const [fav,setFav]=useState([])
  const addFav = ()=>{
    let fav={
      name:name,
      username:username,
    }
    localStorage.setItem("favs",JSON.stringify(fav))
    alert(`Se agrego a ${fav.name} a los favoritos`)
  }
  
  const {state}=useGlobalStates()
  const style={color: state.dark ?'#FFF':'black',textDecoration:'none'};


    return (
    <div className="card" style={{}}>
        {username ? <img src="./images/doctor.jpg" alt="doctor"width={200}height={200} /> : null}
        {username ? <Link to={`/dentist/${id}`}style={style}>{name}</Link> : null }
        <h5 style={{color:'gray'}}>{username}</h5>
        {username ? <button onClick={addFav}className="favButton">⭐</button> : null}  
    </div>
  );
};

export default Card;