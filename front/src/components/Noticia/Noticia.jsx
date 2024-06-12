import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/noticias.css'; // Importa el archivo CSS

function Noticia() {
  const [id, setId] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);
  const [noticias, setNoticias] = useState([]);
  const [editar, setEditar] = useState(false);

  const obtenerNoticias = async () => {
    try {
      const response = await axios.get("http://localhost:2500/api/Noticias");
      setNoticias(response.data);
      setNoticias(response.data.slice(-300).reverse()); 
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    obtenerNoticias();
  }, []);

  const agregarNoticia = async () => {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('contenido', contenido);
    if (imagen) formData.append('imagen', imagen);

    try {
      await axios.post("http://localhost:2500/api/Noticias", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Noticia agregada correctamente");
      obtenerNoticias();
      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar noticia:", error);
    }
  };

  const updateNoticia = async () => {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('contenido', contenido);
    if (imagen) formData.append('imagen', imagen);

    try {
      await axios.put(`http://localhost:2500/api/Noticias/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      obtenerNoticias();
      limpiarFormulario();
    } catch (error) {
      console.error("Error al actualizar noticia:", error);
    }
  };

  const editarNoticia = (noticia) => {
    setEditar(true);
    setId(noticia.id);
    setTitulo(noticia.titulo);
    setContenido(noticia.contenido);
    setImagen(null); // clear the image field
  };

  const eliminarNoticia = async (id) => {
    try {
      await axios.delete(`http://localhost:2500/api/Noticias/${id}`);
      alert("Noticia eliminada correctamente");
      obtenerNoticias();
    } catch (error) {
      console.error("Error al eliminar noticia:", error);
    }
  };

  const limpiarFormulario = () => {
    setId(null);
    setTitulo("");
    setContenido("");
    setImagen(null);
    setEditar(false);
  };

  return (
    <div>
      <h2>CARGAR NOTICIA</h2>
      <div className="container">
        <label>Título: <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" /></label> <br />
        <label>Contenido: <input value={contenido} onChange={(e) => setContenido(e.target.value)} type="text" /></label><br />
        <label>Imagen: <input onChange={(e) => setImagen(e.target.files[0])} type="file" /></label><br />
        {editar ?
          <button onClick={updateNoticia}>Actualizar</button> :
          <button onClick={agregarNoticia}>Agregar Noticia</button>
        }
      </div>

      <h2>CANTIDAD DE NOTICIAS ({noticias.length})</h2>
      <div className="news-list">
        {noticias.map((noticia) => (
          <div className="news-card" key={noticia.id}>
            {noticia.imagen_url && <img src={noticia.imagen_url} alt="Imagen de la noticia" />}
            <div className="news-card-body">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.contenido}</p>
              <div className="actions">
                <button className="edit" onClick={() => editarNoticia(noticia)}>Editar</button>
                <button className="delete" onClick={() => eliminarNoticia(noticia.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticia;
