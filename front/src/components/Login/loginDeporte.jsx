import React, { useState } from 'react';
import AlumnoBasquet from '../Deporte/basquet';
import AlumnoHockey from '../Deporte/hockey';
import AlumnoVoley from '../Deporte/voley';
import '../../style/login.css';
import logo from '../../imagenes/logo.jpg';

function LoginDeporte() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === 'deporte' && password === 'deporte') {
      setLoggedIn(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedMenu('');
    setUsername('');
    setPassword('');
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
          <h1>Deporte</h1>
          <img src={logo} alt="Logo" className='logo' />
          <input
            className='input1'
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> 
          <input
            className='input2'
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='button' onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default LoginDeporte;
