import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ObrasPublicas() {
  const [id, setId] = useState();
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen_url, setImagen_url] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const [editar, setEditar] = useState(false);

  const obtenerAlumnos = async () => {
    try {
      const response = await axios.get("http://localhost:2500/api/Noticias");
      setAlumnos(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const agregarAlumno = async () => {
    try {
      await axios.post("http://localhost:2500/api/Noticias", {
        titulo: titulo,
        contenido: contenido,
        imagen_url: imagen_url,
      });
      alert("Alumno agregado correctamente");
      obtenerAlumnos();
      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar alumno:", error);
    }
  };

  const Update = async () => {
    try {
      await axios.put(`http://localhost:2500/api/Noticias/${id}`, {
        titulo: titulo,
        contenido: contenido,
        imagen_url: imagen_url,
      });
      obtenerAlumnos();
      limpiarFormulario();
    } catch (error) {
      console.error("Error al actualizar alumno:", error);
    }
  };

  const editarAlumno = (alumno) => {
    setEditar(true);
    setId(alumno.id);
    setTitulo(alumno.titulo);
    setContenido(alumno.contenido);
    setImagen_url(alumno.imagen_url);
  };

  const eliminarAlumno = async (id) => {
    try {
      await axios.delete(`http://localhost:2500/api/Noticias/${id}`);
      alert("Alumno eliminado correctamente");
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
    }
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setContenido("");
    setImagen_url("");
    setEditar(false);
  };

  return (
    <div>
      <h2>FORMULARIO DE INSCRIPCIÓN</h2>
      <div className="container">
        <label>Nombre: <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text"/></label> <br/>
        <label>Apellido: <input value={contenido} onChange={(e) => setContenido(e.target.value)} type="text"/></label><br/>
        <label>DNI: <input value={imagen_url} onChange={(e) => setImagen_url(e.target.value)} type="file"/></label><br/>
        { editar ?
          <button onClick={Update}>Actualizar</button> :
          <button onClick={agregarAlumno}>Agregar Alumno</button>
        }
      </div>

      <h2>CANTIDAD DE ALUMNOS ({alumnos.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.titulo}</td> 
              <td>{alumno.contenido}</td>
              <td>{alumno.imagen_url}</td> 
              <td>
                <button onClick={() => editarAlumno(alumno)}>Editar</button>
                <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ObrasPublicas;
