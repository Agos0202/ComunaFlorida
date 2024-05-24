import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";


function AlumnoVoley() {
  // State variables to manage form fields and student list
  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const [editar, setEditar] = useState(false);
  

  // Function to fetch the list of students
  const obtenerAlumnos = () => {
    axios.get("http://localhost:2500/api/AlumnoVoley")
      .then(response => {
        console.log("Datos de alumnos:", response.data);
        setAlumnos(response.data);
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  };

  // Effect hook to fetch students when component mounts
  useEffect(() => {
    obtenerAlumnos();
  }, []);

  // Function to add a new student
  const agregarAlumno = () => {
    axios.post("http://localhost:2500/api/AlumnoVoley", {
        nombre: nombre,
        apellido: apellido,
        documento:documento,
        edad: edad,
        fecha: fecha,
        localidad: localidad,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
      })
      .then(() => {
        alert("Alumno agregado correctamente");
        obtenerAlumnos();
        limpiarFormulario();
      })
      .catch(error => {
        console.error("Error al agregar alumno:", error);
      });
  };

  // Function to update an existing student

  const Update = () => {
    axios.put(`http://localhost:2500/api/AlumnoVoley/${id}`, {
        id: id,
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        edad: edad,
        fecha: fecha,
        localidad: localidad,
        direccion: direccion,
        telefono: telefono,
        correo: correo
      })
      .then(() => {
        obtenerAlumnos();
        limpiarFormulario();
      })
      .catch(error => {
        console.error("Error al agregar alumno:", error);
      });
  };

  // Function to populate form fields when editing a student
  const editarAlumno = (val) => {
    setEditar(true);
    setId(val.id);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setDocumento(val.documento);
    setEdad(val.edad);
    setFecha(val.fecha);
    setLocalidad(val.localidad);
    setDireccion(val.direccion);
    setTelefono(val.telefono);
    setCorreo(val.correo);
    setId(val.id);
  };

  // Function to delete a student
  const eliminarAlumno = (id) => {
    axios.delete(`http://localhost:2500/api/AlumnoVoley/${id}`)
      .then(() => {
        alert("Alumno eliminado correctamente");
        obtenerAlumnos();
      })
      .catch(error => {
        console.error("Error al eliminar alumno:", error);
      });
  };

  // Function to clear form fields
  const limpiarFormulario = () => {
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

  const generarPDF = () => {
    const pdf = new jsPDF();
    let y = 40; // Initial position for the first element

    // Title of the document
    pdf.text("Listado de Alumnos - Voley", 40, 40);

    // Content of the document
    alumnos.forEach((alumno, index) => {
      pdf.text(`${index + 1}. ${alumno.nombre} ${alumno.apellido}`, 40, y);
      y += 40; // Increment in the Y position for the next element
    });

    // Save the PDF
    pdf.save("listado_alumnos_voley.pdf");
  };

 

  return (
    <div>
      
      {/* Form for adding/editing students */}
      <h2 className="h2">FORMULARIO DE INSCRIPCION</h2>
      <h1 className="h1">VOLEY 2024</h1>
      <div className="container">
      <label>Nombre: <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text"/></label> <br/>
      <label>Apellido: <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/></label><br/>
      <label>DNI: <input value={documento} onChange={(e) => setDocumento(e.target.value)} type="text"/></label><br/>
      <label>Edad: <input value={edad} onChange={(e) => setEdad(e.target.value)} type="text"/></label><br/>
      <label>Fecha de Nacimiento: <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date"/></label><br/>
      <label>Localidad: <input value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text"/></label><br/>
      <label>Direccion: <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text"/></label><br/>
      <label>Telefono: <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text"/></label><br/>
      <label>Correo: <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text"/></label><br/>
      { editar ?
        <button className="actualizar" onClick={Update}>Actualizar</button> :
        <button className="agregar" onClick={agregarAlumno}>Agregar Alumno</button>
      }
     </div>

<h2 className="cantidad">CANTIDAD DE ALUMNOS ({alumnos.length})</h2>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>DNI</th>
      <th>Edad</th>
      <th>Fecha de Nacimiento</th>
      <th>Localidad</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Correo</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {alumnos.map((alumno) => (
      <tr key={alumno.id}>
        <td>{alumno.nombre}</td> 
        <td>{alumno.apellido}</td>
        <td>{alumno.documento}</td> 
        <td>{alumno.edad}</td> 
        <td>{alumno.fecha}</td>
        <td>{alumno.localidad}</td>
        <td>{alumno.direccion}</td>
        <td>{alumno.telefono}</td>
        <td>{alumno.correo}</td>
        <td>
          <button className="editar" onClick={() => editarAlumno(alumno)}>Editar</button>
          <button className="eliminar" onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

<div>
      <button onClick={generarPDF}>Descargar listado</button>
  </div>
     
    </div>
  );

    
  
}

export default AlumnoVoley;
