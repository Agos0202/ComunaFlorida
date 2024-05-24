import React from 'react';
import '../style/secretaria.css'; // Importa tu archivo CSS aquí
import Hernan from '../imagenes/Hernan.jpg';
import Lucas from '../imagenes/Lucas.jpg';
import Enzo from '../imagenes/Enzo.jpg';
import Nacho from '../imagenes/Nacho.jpg';
import Camila from '../imagenes/Camila.jpg';

function secretaria() {
  return (
    <div className="secretaria-container">
      <h1>SECRETARIA DE DEPORTE</h1>
      <p className='texto'>La Secretaría de Deportes, tiene como misión fomentar el deporte, impulsar un estilo de vida saludable en toda la población y potenciar el desarrollo social y la inclusión a través de la práctica deportiva. Con ese objetivo, busca acercar diferentes propuestas a menores, adolescentes y jóvenes, y diseñar políticas públicas para brindarle apoyo a deportistas de distintos niveles. </p>
      <h1>OBJETIVOS</h1>
      <p className='texto1'>
        <ul>
          <li>Diagramar acciones tendientes a la socialización deportiva como proceso de aprendizaje a lo largo de toda la vida, para estimular el potencial humano y solidario, en plena convivencia democrática y participativa.</li>
          <li>Incentivar la cultura deportiva como forma de adquirir hábitos, emociones y sanas conductas.</li>
          <li>Promover el deporte como factor contribuyente a la transformación social, vinculando los diferentes ámbitos de la sociedad.</li>
          <li>Promocionar el cuidado personal, del entorno y de los demás a través de la práctica deportiva, incentivando la inclusión social a través del deporte.</li>
          <li>Convertir el deporte en una experiencia que estimule el potencial personal, familiar y social, para la unión y el máximo desarrollo de la Puntanidad.</li>
          <li>Fomentar tareas que conlleven una real integración de todas y cada una de las partes intervinientes de la sociedad, sin ningún tipo de exclusión.</li>
        </ul>
      </p>
      {/* Sección de Hernan */}
      <div className="encargado-section">
        <div className="encargado-details">
          <h1 className="PROFES">ENCARGADO</h1> 
          <img src={Hernan} alt="Hernan" className="hernan" />
          <h2 className='name'>Tello Hernan</h2>
          <h3 className='descrip'>Profesor y Licenciado en Educación Física</h3>
        </div>
       
      </div>
        <h1 className='PROFES'>NUESTROS PROFES</h1>
      {/* Imágenes de Lucas y Enzo en la primera fila */}
      <div className="profesor-grid">
        <div className="profesor-item">
          <img src={Lucas} alt="" className="profesor-img" />
          <div className="profesor-details">
            <h2 className="profesor-name">Lucas Tello</h2>
            <h2 className="profesor-name">Profesor de Basquet</h2>
            {/* Otros detalles de Lucas */}
          </div>
        </div>
        <div className="profesor-item">
          <img src={Enzo} alt="" className="profesor-img" />
          <div className="profesor-details">
            <h2 className="profesor-name">Enzo Jerez</h2>
            <h2 className="profesor-name">Profesor de hockey</h2>
            {/* Otros detalles de Enzo */}
          </div>
        </div>
        {/* Imágenes de Nacho y Camila en la segunda fila */}
        <div className="profesor-item">
          <img src={Nacho} alt="" className="profesor-img" />
          <div className="profesor-details">
            <h2 className="profesor-name">Ignacio Bernachi</h2>
            <h2 className="profesor-name">Profesor de voley</h2>
            {/* Otros detalles de Nacho */}
          </div>
        </div>
        <div className="profesor-item">
          <img src={Camila} alt="" className="profesor-img" />
          <div className="profesor-details">
            <h2 className="profesor-name">Camila Salvatierra</h2>
            <h2 className="profesor-name">Profesora de hockey</h2>
            {/* Otros detalles de Camila */}
          </div>
        </div>
      </div>
      {/* Más contenido aquí */}
    </div>
  );
}

export default secretaria;
