import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Dep from './components/deporte';
import Turnos from './components/turnoSociales';
import Inicio from './components/inicio'
import ObrasPublicas from './components/obrasPublicas';
import logo from './imagenes/comunalogo.webp'
import logoFacebook from './imagenes/facebook.png'
import logoTiktok from './imagenes/tiktok.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
        <h1 className='comuna'>COMUNA RURAL LA FLORIDA Y LUISIANA</h1>
        <img className="logo" src={logo} alt='Logo de la Comuna Rural La Florida y Luisiana' />
        </div>
      </header>
      <main>
         <Router>
      <div className="menu-horizontal">
        {/* Aquí están los enlaces uno al lado del otro */}
        <Link to="/ini">Inicio</Link>
        <Link to="/dep">Deporte</Link>
        <Link to="/Turno">Turno</Link>
        <Link to="/obras Publicas">Obras Publicas</Link>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/ini" element={<Inicio />} />
          <Route path="/dep" element={<Dep />} />
          <Route path="/Turno" element={<Turnos />} />
          <Route path="/obras Publicas" element={<ObrasPublicas />} />
          {/* Ruta predeterminada: */}
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
      </main>
      <footer className="footer">
       
      <img className="logo2" src={logo} alt='Logo de la Comuna Rural La Florida y Luisiana' /> 
      <h1 className='gestion'>GESTION ARTURO "CHICHO" SORIA</h1>
      <h2 className='redes'>Seguinos en </h2> 
      <a href="https://www.facebook.com/florida.luisiana.7?locale=es_LA" target="_blank" rel="noopener noreferrer">
      <img className="facebook" src={logoFacebook} alt='Logo facebook' /> 
      </a>
    
      <a href="https://www.tiktok.com/@comunalafloridayluisiana?_t=8lk9BqL36nO&_r=1" target="_blank" rel="noopener noreferrer">
      <img className="tiktok" src={logoTiktok} alt='Logo TikTok' />
       </a>
      </footer>
    </div>
  );
}

export default App;
