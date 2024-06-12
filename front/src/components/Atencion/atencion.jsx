import React, { useState } from 'react';
import FormularioDiscapacidad from './formuarioDiscapacidad';
import FormularioRRHH from './formularioRRHH';
import FormularioSociales from './formularioSociales';
import FormularioObrasPublicas from './formularioObrasPublicas';
import imgDiscapacidad from "../../imagenes/imgDiscapacidad.png";
import imgObrasPublicas from "../../imagenes/imgObrasPublicas.png";
import imgRRHH from "../../imagenes/imgRRHH.png";
import imgSociales from "../../imagenes/imgSociales.png";
import '../../style/formulario.css'; // Assuming you have a CSS file for styling
import '../../style/atencion.css'

function Atencion() {
    const [showDiscapacidad, setShowDiscapacidad] = useState(false);
    const [showRRHH, setShowRRHH] = useState(false);
    const [showSociales, setShowSociales] = useState(false);
    const [showObrasPublicas, setShowObrasPublicas] = useState(false);

    return (
        <div>
            <h1>SOLICITA TU TURNO DE ATENCION</h1>
            <div className="grid-container">
                <button className="boton" onClick={() => {
                    setShowDiscapacidad(true);
                    setShowRRHH(false);
                    setShowSociales(false);
                    setShowObrasPublicas(false);
                }}>
                    <img src={imgDiscapacidad} alt="Discapacidad" className="boton-imagen" />
                    <span>Discapacidad</span>
                </button>

                <button className="boton" onClick={() => {
                    setShowDiscapacidad(false);
                    setShowRRHH(true);
                    setShowSociales(false);
                    setShowObrasPublicas(false);
                }}>
                    <img src={imgRRHH} alt="RRHH" className="boton-imagen" />
                    <span>RRHH</span>
                </button>

                <button className="boton" onClick={() => {
                    setShowDiscapacidad(false);
                    setShowRRHH(false);
                    setShowSociales(true);
                    setShowObrasPublicas(false);
                }}>
                    <img src={imgSociales} alt="Sociales" className="boton-imagen" />
                    <span>Sociales</span>
                </button>

                <button className="boton" onClick={() => {
                    setShowDiscapacidad(false);
                    setShowRRHH(false);
                    setShowSociales(false);
                    setShowObrasPublicas(true);
                }}>
                    <img src={imgObrasPublicas} alt="Obras Publicas" className="boton-imagen" />
                    <span>Obras Públicas</span>
                </button>
            </div>

            <div className="form-container">
                {showDiscapacidad && <FormularioDiscapacidad />}
                {showRRHH && <FormularioRRHH />}
                {showSociales && <FormularioSociales />}
                {showObrasPublicas && <FormularioObrasPublicas />}
            </div>
            <h1>DEBES CONFIRMAR EL TURNO 40MIN ANTES DEL HORARIO ESTIPULADO</h1>
            <h2>Vía whatsApp 3813670162</h2>
        </div>
    );
}

export default Atencion;
