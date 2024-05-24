import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import '../style/hockey.css'

function AlumnoHockey() {
  // State variables to manage form fields and student list
  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
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
    axios.get("http://localhost:2500/api/AlumnoHockey")
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
    axios.post("http://localhost:2500/api/AlumnoHockey", {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
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
    axios.put(`http://localhost:2500/api/AlumnoHockey/${id}`, {
        id: id,
        nombre: nombre,
        apellido: apellido,
        dni: dni,
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
    setDni(val.dni);
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
    axios.delete(`http://localhost:2500/api/AlumnoHockey/${id}`)
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
    setDni("");
    setEdad("");
    setFecha("");
    setLocalidad("");
    setDireccion("");
    setTelefono("");
    setCorreo("");
  };

  const filtrarPorEdad = (rangoEdad) => {
    return alumnos.filter(alumno => {
      switch (rangoEdad) {
        case "<12":
          return alumno.edad <= 12;
        case "13-15":
          return alumno.edad >= 13 && alumno.edad <= 15;
        case "16-18":
            return alumno.edad >= 16 && alumno.edad <= 18;
        case ">18":
          return alumno.edad > 18;
        default:
          return true; // Mostrar todos si no se especifica ningún rango
      }
    });
  };

  const generarPDF = (alumnos, categoria) => {
    const pdf = new jsPDF();
    let y = 20; // Posición inicial para el primer elemento

    // Título de la categoría
    pdf.text(`Categoría: ${categoria}`, 10, 10);

    // Contenido de la categoría
    alumnos.forEach((alumno, index) => {
      pdf.text(`${index + 1}. ${alumno.nombre} ${alumno.apellido}`, 10, y);
      y += 10; // Incremento en la posición Y para el próximo elemento
    });

    // Guardar el PDF
    pdf.save(`alumnos_${categoria}.pdf`);
  };



  return (
    <div >
      <h2 className="h2">FORMULARIO DE INSCRIPCION</h2>
      <h1 className="h1">HOCKEY 2024</h1>
      <div className="container">
          
    <label>Nombre: <input placeholder="Pía Guadalupe" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text"/></label><br/>
    <label>Apellido: <input placeholder="Medina" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/></label><br/>
    <label>DNI: <input placeholder="44056982" value={dni} onChange={(e) => setDni(e.target.value)} type="text"/></label><br/>
    <label>Edad: <input placeholder="21" value={edad} onChange={(e) => setEdad(e.target.value)} type="text"/></label><br/>
    <label>Fecha de Nacimiento: <input placeholder=" 02/05/2002" className="inp5" value={fecha} onChange={(e) => setFecha(e.target.value)} type="date"/></label><br/>
    <label>Localidad: <input placeholder="La Florida"  value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text"/></label><br/>
    <label>Direccion: <input placeholder="Av.Hipolito Irigoye" value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text"/></label><br/>
    <label>Telefono:<input placeholder="3813640265"  value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text"/></label><br/>
    <label>Correo: <input placeholder="piamedina14@gmail.com" value={correo} onChange={(e) => setCorreo(e.target.value)} type="text"/></label><br/>

      { editar ?
        <button onClick={Update}>Actualizar</button> :
       <button className="agregar" onClick={agregarAlumno}>Agregar Alumno</button> 
      }

</div>
<h2 className="h2">LISTA DE ALUMNOS</h2>

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
        <td>{alumno.dni}</td> 
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
<h3 className="cantidad">CANTIDAD TOTAL DE ALUMNOS ({alumnos.length})</h3>
     <h2 className="h2">CATEGORIA DE ALUMNOS</h2>
      {/* Mostrar alumnos por grupos de edad */}
      <div>
        <h3 className="categoria">OCTAVA({filtrarPorEdad("<=12").length})</h3>
        
        <ul>
          {filtrarPorEdad("<=12").map(alumno => (
            <li key={alumno.id}>{alumno.nombre} {alumno.apellido}</li>
            
          
          ))}
        </ul>
        <button onClick={() => generarPDF(filtrarPorEdad("<=12"), "OCTAVA")}>Imprimir Listado</button>
      </div>
      <div>
        <h3 className="categoria">SEPTIMA</h3>
        
        <ul>
          {filtrarPorEdad("13-15").map(alumno => (
            <li key={alumno.id}>{alumno.nombre} {alumno.apellido}</li>
          ))}
        </ul>
        <button onClick={() => generarPDF(filtrarPorEdad("13-15"), "SEPTIMA")}>Imprimir Listado</button>
      </div>
      <div>
        <h3 className="categoria">SEXTA</h3>
        
        <ul>
          {filtrarPorEdad("16-18").map(alumno => (
            <li key={alumno.id}>{alumno.nombre} {alumno.apellido}</li>
          ))}
        </ul>
        <button onClick={() => generarPDF(filtrarPorEdad("16-18"), "SEXTA")}>Imprimir Listado</button>
      </div>
      <div>
        <h3 className="categoria">PRIMERA</h3>
        
        <ul>
          {filtrarPorEdad(">18").map(alumno => (
            <li key={alumno.id}>{alumno.nombre} {alumno.apellido}</li>
          ))}
        </ul>
        <button onClick={() => generarPDF(filtrarPorEdad(">18"), "SEXTA")}>Imprimir Listado</button>
      </div>
    </div>
  );

    
  
}

export default AlumnoHockey;
