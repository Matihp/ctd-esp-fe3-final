import './index.css'
import Footer from "./Components/Footer";
import {BrowserRouter, Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar';
import { useGlobalStates } from './Components/utils/global.context';
function App() {

  const {state}=useGlobalStates()
    return (
      // Hola juli,hice las routes en el index porque me resulto mas facil
      //,se me complico el agregar varios destacados con el localstorage
      //entonces solo se puede agregar uno y borrarlo,lo demás salio todo bien
      <div className="App" style={{ backgroundColor: state.dark && '#282c34',color: state.dark && 'white' }}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
