import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/noticias.css'; // Importa el archivo CSS

function VerNotici() {
  const [noticias, setNoticias] = useState([]);

  const obtenerNoticias = async () => {
    try {
      const response = await axios.get("http://localhost:2500/api/Noticias");
     
      setNoticias(response.data.slice(-150).reverse()); // Obtener las últimas 150 noticias y ordenarlas
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    obtenerNoticias();
  }, []);


 

  return (
   
      <div>
      <div className="news-list">
        {noticias.map((noticia) => (
          <div className="news-card" key={noticia.id}>
            {noticia.imagen_url && <img src={noticia.imagen_url} alt="Imagen de la noticia" />}
            <div className="news-card-body">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.contenido}</p>
            </div>
          </div>
        ))}
      </div>

    

      
     
    </div>
  );

}export default VerNotici