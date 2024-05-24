import React, { useState, useEffect } from "react";
import axios from "axios";

function Turno() {
  // State variables to manage form fields and student list
  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [fecha, setFecha] = useState("");
  const [telefono, setTelefono] = useState("");
  const [horario, setHorario] = useState("");
  const [correo, setCorreo] = useState("");
  const [turno, setTurno] = useState([]);
  const [editar, setEditar] = useState(false);
  
  // Horarios disponibles
  const horarios = ["08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00"];

  const handleChangeHorario = (event) => {
    setHorario(event.target.value);
  };

  // Function to fetch the list of students
  const obtenerTurno = () => {
    axios.get("http://localhost:2500/api/Turno")
      .then(response => {
        console.log("Datos de alumnos:", response.data);
        setTurno(response.data);
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  };

  // Effect hook to fetch students when component mounts
  useEffect(() => {
    obtenerTurno();
  }, []);

  // Function to add a new student
  const agregarTurno = () => {
    axios.post("http://localhost:2500/api/Turno", {
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        fecha: fecha,
        horario: horario, // Aquí se usa el estado horario
        telefono: telefono,
        correo: correo,
      })
      .then(() => {
        alert("Turno Solicitado correctamente");
        obtenerTurno();
        limpiarFormulario();
      })
      .catch(error => {
        console.error("Error al solicitar turno:", error);
      });
  };

  // Function to update an existing student
  const Update = () => {
    axios.put(`http://localhost:2500/api/Turno/${id}`, {
        id: id,
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        fecha: fecha,
        horario: horario, // Aquí se usa el estado horario
        telefono: telefono,
        correo: correo
      })
      .then(() => {
        obtenerTurno();
        limpiarFormulario();
      })
      .catch(error => {
        console.error("Error al agregar alumno:", error);
      });
  };

  // Function to populate form fields when editing a student
  const editarTurno = (val) => {
    setEditar(true);
    setId(val.id);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setDocumento(val.documento);
    setFecha(val.fecha);
    setHorario(val.horario); // Aquí se usa el estado horario
    setTelefono(val.telefono);
    setCorreo(val.correo);
    setId(val.id);
  };

  // Function to delete a student
  const eliminarTurno = (id) => {
    axios.delete(`http://localhost:2500/api/Turno/${id}`)
      .then(() => {
        alert("Alumno eliminado correctamente");
        obtenerTurno();
      })
      .catch(error => {
        console.error("Error al eliminar su turno:", error);
      });
  };

  // Function to clear form fields
  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setDocumento("");
    setFecha("");
    setHorario(""); // Se limpia el estado horario
    setTelefono("");
    setCorreo("");
  };

  const renderHorarios = () => {
    return (
      <select value={horario} onChange={handleChangeHorario}>
        <option value="">Seleccionar horario</option>
        {horarios.map((horario, index) => (
          <option key={index} value={horario}>{horario}</option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {/* Form for adding/editing students */}
      <h1 className="h1">SOLICITUD DE TURNO PARA ATENCION </h1>
      <div className="container">
        <label>Nombre: <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text"/></label><br/>
        <label>Apellido: <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/></label><br/>
        <label>DNI: <input value={documento} onChange={(e) => setDocumento(e.target.value)} type="text"/></label><br/>
        <label>Fecha: <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date"/></label><br/>
        <label>Seleccione un horario:</label>
        {renderHorarios()}
        <label>Telefono: <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text"/></label><br/>
        <label>Correo: <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text"/></label><br/>
        { editar ?
          <button onClick={Update}>Actualizar</button> :
          <button className="agregar" onClick={agregarTurno}>Solicitar Turno</button>
        }
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turno.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.nombre}</td> 
              <td>{turno.apellido}</td>
              <td>{turno.documento}</td> 
              <td>{turno.fecha}</td>
              <td>{turno.horario}</td>
              <td>{turno.telefono}</td>
              <td>{turno.correo}</td>
              <td>
                <button className="editar" onClick={() => editarTurno(turno)}>Editar</button>
                <button className="eliminar" onClick={() => eliminarTurno(turno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Turno;
