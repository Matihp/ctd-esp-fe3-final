import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <div className='container'>
        <img src="DH.ico" alt="logo"width={50}height={39} />
        <nav>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <Link to={routes.home} ><p>Home</p></Link>
          <Link to={routes.contact}><p>Contact</p></Link>
          <Link to={routes.favs}><p>Favs</p></Link>
          <button className='btn'>🌛</button>
        </nav>
    </div>
  )
}

export default Navbar