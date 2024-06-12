import React, { useState } from 'react';
import Turno from '../Atencion/turnoRRHH';
import '../../style/login.css';
import logo from '../../imagenes/logo.jpg';

function LoginRRHH() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === 'rrhh' && password === 'rrhh') {
      setLoggedIn(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>RRHH</h1>
      {loggedIn ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <div>
            <Turno />
          </div>
        </div>
      ) : (
        <div className='login'>
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

export default LoginRRHH;
