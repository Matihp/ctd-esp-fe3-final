import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
import { useGlobalStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const {state,dispatch}=useGlobalStates()

  const style={color: state.dark && '#FFF'};
  return (
    <div className='container'style={{ backgroundColor: state.dark && '#566573' }}>
        <img src="DH.ico" alt="logo"width={50}height={39} />
        <nav>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <Link to={routes.home}className='link' style={style}><p>Home</p></Link>
          <Link to={routes.contact} style={style}><p>Contact</p></Link>
          <Link to={routes.favs} style={style}><p>Favs</p></Link>
          <button onClick={()=>dispatch(!state.dark ? { type: 'dark' }: { type: 'light' })} className='btn'
          style={{ color: state.dark && 'white', background: state.dark && '#db7093' }}>{state.dark ?'🌞' : '🌛'}</button>
        </nav>
    </div>
  )
}

export default Navbar