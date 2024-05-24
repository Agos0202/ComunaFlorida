import React, { useState } from 'react';
import AlumnoBasquet from './basquet';
import AlumnoHockey from './hockey';
import AlumnoVoley from './voley'
import '../style/loguin.css';
import logo from '../imagenes/logo.jpg'

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleLogin = () => {
    // Your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedMenu('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <div className="menu"> 
            <button className={`menu-item ${selectedMenu === 'hockey' && 'active'}`} onClick={() => setSelectedMenu('hockey')}>HOCKEY</button>
            <button className={`menu-item ${selectedMenu === 'basquet' && 'active'}`} onClick={() => setSelectedMenu('basquet')}>BASQUET</button>
            <button className={`menu-item ${selectedMenu === 'voley' && 'active'}`} onClick={() => setSelectedMenu('voley')}>VOLEY</button>
          </div>
          <div>
            {selectedMenu === 'basquet' && <AlumnoBasquet />}
            {selectedMenu === 'hockey' && <AlumnoHockey />}
            {selectedMenu === 'voley' && <AlumnoVoley />}
          </div>
        </div>
      ) : (
        <div className='login'>
          <img src={logo} alt="Logo" className='logo' />
          <input
            className='input1'
            type="text"
            placeholder="Usuario"
          /> 
          <input
            className='input2'
            type="password"
            placeholder="Contraseña"
          />
          <button className='button' onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
     
    </div>
  );
}

export default Login;
