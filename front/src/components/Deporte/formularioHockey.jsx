import React, { useState } from "react";
import axios from "axios";
import '../../style/formulario.css'

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  const addStudent = () => {
    if (!nombre || !apellido || !dni || !edad || !fecha || !localidad || !direccion || !telefono || !correo) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    axios.post("http://localhost:2500/api/AlumnoHockey", {
      nombre,
      apellido,
      dni,
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
    setDni("");
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
      <h1 className="titulo2">HOCKEY 2024</h1>
      <div className="contenedor">
        <label>Nombre: <input placeholder="Pía Guadalupe" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text"/></label><br/>
        <label>Apellido: <input placeholder="Medina" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/></label><br/>
        <label>DNI: <input placeholder="44056982" value={dni} onChange={(e) => setDni(e.target.value)} type="text"/></label><br/>
        <label>Edad: <input placeholder="21" value={edad} onChange={(e) => setEdad(e.target.value)} type="text"/></label><br/>
        <label>Fecha de Nacimiento: <input placeholder=" 02/05/2002" className="inp5" value={fecha} onChange={(e) => setFecha(e.target.value)} type="date"/></label><br/>
        <label>Localidad: <input placeholder="La Florida"  value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text"/></label><br/>
        <label>Direccion: <input placeholder="Av.Hipolito Irigoye" value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text"/></label><br/>
        <label>Telefono:<input placeholder="3813640265"  value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text"/></label><br/>
        <label>Correo: <input placeholder="piamedina14@gmail.com" value={correo} onChange={(e) => setCorreo(e.target.value)} type="text"/></label><br/>
        <button className="botonagregar" onClick={addStudent}>ENVIAR FORMULARIO</button>
      </div>
    </div>
  );
}

export default Formulario;
