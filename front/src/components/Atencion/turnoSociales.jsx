import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import logocomuna from "../../imagenes/logo.jpg";

function Turno() {
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
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  // Horarios base
  const horarios = [
    "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45",
    "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00"
  ];

  // Fetch turnos and sort by date
  const obtenerTurno = () => {
    axios.get("http://localhost:2500/api/TurnoSociales")
      .then(response => {
        const turnosOrdenados = response.data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        console.log("Datos de turnos:", turnosOrdenados);
        setTurno(turnosOrdenados);
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
      });
  };

  // Load turnos on component mount
  useEffect(() => {
    obtenerTurno();
  }, []);

  // Update available horarios when fecha changes
  useEffect(() => {
    if (fecha) {
      const horariosOcupados = turno
        .filter(t => t.fecha === fecha)
        .map(t => t.horario);
      const disponibles = horarios.filter(h => !horariosOcupados.includes(h));
      setHorariosDisponibles(disponibles);
    } else {
      setHorariosDisponibles(horarios);
    }
  }, [fecha, turno]);

  // Generate PDF
  const generarPDF = (turnoData) => {
    const doc = new jsPDF();

    // Add comuna logo (assuming you have a logo URL)
    const imgData = logocomuna; 

    doc.addImage(imgData, 'JPEG', 10, 10, 50, 20);
    doc.setFontSize(20);
    doc.text("TURNO DE ATENCION - AREA SOCIALES", 20, 40);

    doc.setFontSize(12);
    doc.text(`Nombre: ${turnoData.nombre}`, 20, 50);
    doc.text(`Apellido: ${turnoData.apellido}`, 20, 60);
    doc.text(`DNI: ${turnoData.documento}`, 20, 70);
    doc.text(`Fecha: ${turnoData.fecha}`, 20, 80);
    doc.text(`Horario: ${turnoData.horario}`, 20, 90);
    doc.text(`Telefono: ${turnoData.telefono}`, 20, 100);
    doc.text(`Correo: ${turnoData.correo}`, 20, 110);

    doc.save('comprobante_turno.pdf');
  };

  // Add new turno
  const agregarTurno = () => {
    const turnoData = {
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      fecha: fecha,
      horario: horario,
      telefono: telefono,
      correo: correo,
    };

    axios.post("http://localhost:2500/api/TurnoSociales", turnoData)
      .then(() => {
        alert("Turno solicitado correctamente");
        obtenerTurno();
        limpiarFormulario();
        generarPDF(turnoData);
      })
      .catch(error => {
        console.error("Error al solicitar turno:", error);
      });
  };

  // Update existing turno
  const Update = () => {
    axios.put(`http://localhost:2500/api/TurnoSociales/${id}`, {
      id: id,
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      fecha: fecha,
      horario: horario,
      telefono: telefono,
      correo: correo
    })
      .then(() => {
        obtenerTurno();
        limpiarFormulario();
      })
      .catch(error => {
        console.error("Error al actualizar turno:", error);
      });
  };

  // Populate form fields for editing
  const editarTurno = (val) => {
    setEditar(true);
    setId(val.id);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setDocumento(val.documento);
    setFecha(val.fecha);
    setHorario(val.horario);
    setTelefono(val.telefono);
    setCorreo(val.correo);
  };

  // Delete turno
  const eliminarTurno = (id) => {
    axios.delete(`http://localhost:2500/api/TurnoSociales/${id}`)
      .then(() => {
        alert("Turno eliminado correctamente");
        obtenerTurno();
      })
      .catch(error => {
        console.error("Error al eliminar turno:", error);
      });
  };

  // Clear form fields
  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setDocumento("");
    setFecha("");
    setHorario("");
    setTelefono("");
    setCorreo("");
    setEditar(false);
  };

  return (
    <div>
      <h1 className="h1">SOLICITUD DE TURNO PARA ATENCION</h1>
      <div className="container">
        <label>Nombre: <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" /></label><br />
        <label>Apellido: <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" /></label><br />
        <label>DNI: <input value={documento} onChange={(e) => setDocumento(e.target.value)} type="text" /></label><br />
        <label>Fecha: <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" /></label><br />
        <label>Seleccione un horario:</label>
        <select value={horario} onChange={(e) => setHorario(e.target.value)}>
          <option value="">Seleccionar horario</option>
          {horariosDisponibles.map((horario, index) => (
            <option key={index} value={horario}>{horario}</option>
          ))}
        </select><br />
        <label>Telefono: <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" /></label><br />
        <label>Correo: <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text" /></label><br />
        {editar ? 
          <button onClick={Update}>Actualizar</button> : 
          <button className="agregar" onClick={agregarTurno}>Solicitar Turno y Generar Comprobante PDF</button>
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
