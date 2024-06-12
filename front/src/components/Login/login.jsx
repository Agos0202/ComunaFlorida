import React, { useState } from 'react';
import LoginNoticia from './loginNoticia'; 
import LoginDeporte from './loginDeporte'; 
import LoginRRHH from './loginRRHH';
import LoginSociales from './loginSociales';
import LoginDiscapacidad from './loginDiscapacidad';
import LoginObrasPublicas from './loginObrasPublicas'; 
import '../../style/login.css'; 

function Login() {
  
  const [selectedSport, setSelectedSport] = useState(null);

 
  const mostrarFormulario = (formulario) => {
    setSelectedSport(formulario);
  };

  return (
    <div className="login-container">
      <button className="botonDeporte" onClick={() => mostrarFormulario(<LoginDeporte />)}>
        DEPORTE
      </button>
      <button className="botonNoticia" onClick={() => mostrarFormulario(<LoginNoticia />)}>
        NOTICIA
      </button>
      <button className="botonNoticia" onClick={() => mostrarFormulario(<LoginRRHH />)}>
        RRHH
      </button>
      <button className="botonNoticia" onClick={() => mostrarFormulario(<LoginSociales />)}>
        SOCIALES
      </button>
      <button className="botonNoticia" onClick={() => mostrarFormulario(<LoginDiscapacidad />)}>
        DISCAPACIDAD
      </button>
      <button className="botonNoticia" onClick={() => mostrarFormulario(<LoginObrasPublicas />)}>
        OBRAS PUBLICAS
      </button>
      
      {/* Render the selected sport form */}
      <div className="selected-sport-form">
        {selectedSport}
      </div>
    </div>
  );
}

export default Login;
