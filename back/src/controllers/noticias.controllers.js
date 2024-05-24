import { pool } from '../db.js';

// Obtener todas las noticias
export const getAllNoticias = async (req, res) => {

  const [rows] = await pool.query("SELECT * FROM noticias");
  res.json(rows)
}




// Crear una nueva noticia
export const createNoticia = async (req, res) => {
  const {titulo, contenido, imagen_url}= req.body
  const [ rows]= await pool.query('INSERT INTO noticias (titulo, contenido, imagen_url) VALUES (?, ?, ?)', [titulo, contenido, imagen_url]);
  console.log(req.body)
  res.send={rows}
}

// Actualizar una noticia existente
export const updateNoticia = async (req, res) => {
 try { const { id } = req.params;
       const { titulo, contenido, imagen_url } = req.body;
  
    const result =await pool.query('UPDATE noticias SET titulo = ?, contenido = ?, imagen_url = ? WHERE id = ?', [titulo, contenido, imagen_url, id]);
    res.json(result);
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ error: 'Error updating news' });
  }
};



// Eliminar una noticia
export const deleteNoticia = async (req, res) => {

  try {
    const result =  await pool.query('DELETE FROM noticias WHERE id = ?', [req.params.id]);
    res.json(result);
    console.log(result)
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({ error: 'Error deleting news' });
  }
};

