import React, { useState } from "react";
import Formulario from './formularioHockey'
import FormularioBasquet from "./formulariobasquet";
import FormularioVoley from "./formularioVoley";
import Login from './loguinDeporte'
import Secretaria from "./secretariadep"
import logoFacebook from '../imagenes/facebook.png'
import logoInstagram from '../imagenes/instagram.png'
import Deporte from '../imagenes/correr.png'
import "../style/deporte.css"; // Importa tu archivo CSS aquí
import user from '../imagenes/user.png'

import hockey1 from '../imagenes/hockey1.jpg'
import hockey2 from '../imagenes/hockey2.jpg'
import hockey3 from '../imagenes/hockey3.jpg'
import hockey4 from '../imagenes/hockey4.jpg'
import hockey5 from '../imagenes/hockey5.jpg'
import hockey6 from '../imagenes/hockey6.jpg'
import hockey7 from '../imagenes/hockey7.jpg'
import hockey8 from '../imagenes/hockey8.jpg'

import Basquet1 from '../imagenes/basquet1.jpg'
import Basquet2 from '../imagenes/basquet2.jpg'
import Basquet3 from '../imagenes/basquet3.jpg'
import Basquet4 from '../imagenes/basquet4.jpg'
import Basquet5 from '../imagenes/basquet5.jpg'
import Basquet6 from '../imagenes/basquet6.jpg'
import Basquet7 from '../imagenes/basquet7.jpg'
import Basquet8 from '../imagenes/basquet8.jpg'

function Dep() {
  // Estado para controlar qué deporte está seleccionado
  const [selectedSport, setSelectedSport] = useState(null);

  // Función para mostrar el formulario correspondiente al deporte seleccionado
  const mostrarFormulario = (formulario) => {
    setSelectedSport(formulario);
  };

  return (
    <div>
      {/* Menú desplegable para seleccionar el deporte */}
      <h1 className="titulo">DEPORTE</h1>
      
      <h1 className="subtitulo">ESCUELA DE HOCKEY COMUNA LA FLORIDA Y LUISIANA</h1>
      <div className="imagenesHockey">
        <img src={hockey1} alt="Hockey" />
        <img src={hockey2} alt="Hockey" />
        <img src={hockey3} alt="Hockey" />
        <img src={hockey4} alt="Hockey" />
        <img src={hockey5} alt="Hockey" />
        <img src={hockey6} alt="Hockey" />
        <img src={hockey7} alt="Hockey" />
        <img src={hockey8} alt="Hockey" />
      </div>
     <div>
      <h1 className="subtitulo">ESCUELA DE BASQUET COMUNA LA FLORIDA Y LUISIANA</h1>
      <div className="imagenesHockey">
        <img src={Basquet1} alt="BASQUET" />
        <img src={Basquet2} alt="BASQUET" />
        <img src={Basquet3} alt="BASQUET" />
        <img src={Basquet4} alt="BASQUET" />
        <img src={Basquet5} alt="BASQUET" />
        <img src={Basquet6} alt="BASQUET"/>
        <img src={Basquet7} alt="BASQUET" />
        <img src={Basquet8} alt="BASQUET" />
      </div></div>

      {/* Botones para mostrar los formularios */}
      <div>
        <h1 className="subtitulo">¿QUÉ ESTÁS ESPERANDO PARA FORMAR PARTE DE NUESTRA FAMILIA?</h1>
        <button className="boton" onClick={() => mostrarFormulario(<Formulario />)}>HAZ CLICK AQUÍ PARA INSCRIBIRTE A HOCKEY</button>
        <button className="boton"  onClick={() => mostrarFormulario(<FormularioBasquet />)}>HAZ CLICK AQUÍ PARA INSCRIBIRTE A BASQUET</button>
        <button className="boton"  onClick={() => mostrarFormulario(<FormularioVoley />)}>HAZ CLICK AQUÍ PARA INSCRIBIRTE A VOLEY</button>
        <button className="boton"  onClick={() => mostrarFormulario(<Login />)}>HAZ CLICK AQUÍ PARA INSCRIBIRTE A VOLEY</button>
      </div>
     <div className="secretaria">
      <h1 className="secret">SECRETARIA DE DEPORTE</h1>
      <button className="sec"  onClick={() => mostrarFormulario(<Secretaria />)}>Haz click aquí</button>
     </div>
      {/* Mostrar el formulario seleccionado */}
      {selectedSport}

      <footer className="foot">
        
      <img className="logo" src={Deporte} alt='Logo de la Comuna Rural La Florida y Luisiana' /> 
      <h1 className='deporte'>Deporte</h1>
      <h2 className='redes'>Seguinos en </h2> 
      <a href="https://www.facebook.com/profile.php?id=100083782791245&locale=es_LA" target="_blank" rel="noopener noreferrer">
      <img className="facebook" src={logoFacebook} alt='Logo facebook' /> 
      </a>
    
      <a href="https://www.tiktok.com/@comunalafloridayluisiana?_t=8lk9BqL36nO&_r=1" target="_blank" rel="noopener noreferrer">
      <img className="instagram" src={logoInstagram} alt='Logo Instagram' />
       </a>
      </footer>
    </div>
  );
}

export default Dep;
