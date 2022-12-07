import './index.css'
import Footer from "./Components/Footer";
import {BrowserRouter, Outlet} from 'react-router-dom'

import Navbar from './Components/Navbar';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
