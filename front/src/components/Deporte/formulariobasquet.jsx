import React, { useState } from "react";
import axios from "axios";
import '../../style/formulario.css'

function FormularioBasquet() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  const addStudent = () => {
    if (!nombre || !apellido || !documento || !edad || !fecha || !localidad || !direccion || !telefono || !correo) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    axios.post("http://localhost:2500/api/AlumnoBasquet", {
      nombre,
      apellido,
      documento,
      edad,
      fecha,
      localidad,
      direccion,
      telefono,
      correo,
    })
    .then(() => {
        alert("Alumno agregado correctamente");
        clearForm();
      })
      .catch(error => {
        console.error("Error al agregar alumno:", error);
        alert("Hubo un error al agregar al alumno. Por favor, inténtelo de nuevo más tarde.");
      });
  };

  const clearForm = () => {
    setNombre("");
    setApellido("");
    setDocumento("");
    setEdad("");
    setFecha("");
    setLocalidad("");
    setDireccion("");
    setTelefono("");
    setCorreo("");
  };

  return (
    <div className="fondo">
      <h2 className="titulo1">FORMULARIO DE INSCRIPCION</h2>
      <h1 className="titulo2">BASQUET 2024</h1>
      <div className="contenedor">
      <label>Nombre: <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text"/></label><br/>
      <label>Apellido: <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/></label><br/>
      <label>DNI: <input value={documento} onChange={(e) => setDocumento(e.target.value)} type="text"/></label><br/>
      <label>Edad: <input value={edad} onChange={(e) => setEdad(e.target.value)} type="text"/></label><br/>
      <label>Fecha de Nacimiento: <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date"/></label><br/>
      <label>Localidad: <input value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text"/></label><br/>
      <label>Direccion: <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text"/></label><br/>
      <label>Telefono: <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text"/></label><br/>
      <label>Correo: <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text"/></label><br/>
        <br/><button className="botonagregar" onClick={addStudent}>ENVIAR FORMULARIO</button>
      </div>
    </div>
  );
}

export default FormularioBasquet;