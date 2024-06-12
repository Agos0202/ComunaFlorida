// Controlador de Noticias
import fs from 'fs';
import path from 'path';
import { pool } from '../db.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbImagesDir = path.join(__dirname, '../dbimages');
if (!fs.existsSync(dbImagesDir)) {
  fs.mkdirSync(dbImagesDir);
}

export const getAllNoticias = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM noticias");

    rows.forEach(img => {
      if (img.imagen_url) {
        const imagePath = path.join(__dirname, `../${img.imagen_url}`);
        if (fs.existsSync(imagePath)) {
          const destPath = path.join(dbImagesDir, `${img.id}-image.png`);
          fs.copyFileSync(imagePath, destPath);
          img.imagen_url = `http://localhost:2500/dbimages/${img.id}-image.png`;
        } else {
          img.imagen_url = null;
        }
      }
    });

    res.json(rows);
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    res.status(500).json({ error: "Error al obtener noticias" });
  }
};


// Crear una nueva noticia
export const createNoticia = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const imagen_url = req.file ? `dbimages/${req.file.filename}` : null;
    const [result] = await pool.query('INSERT INTO noticias (titulo, contenido, imagen_url) VALUES (?, ?, ?)', [titulo, contenido, imagen_url]);
    res.json({ id: result.insertId, titulo, contenido, imagen_url });
  } catch (error) {
    console.error("Error al crear noticia:", error);
    res.status(500).json({ error: "Error al crear noticia" });
  }
};

// Actualizar una noticia existente
export const updateNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, contenido } = req.body;
    const imagen_url = req.file ? `dbimages/${req.file.filename}` : null;
    const updateFields = imagen_url ? [titulo, contenido, imagen_url, id] : [titulo, contenido, id];
    const updateQuery = imagen_url 
      ? 'UPDATE noticias SET titulo = ?, contenido = ?, imagen_url = ? WHERE id = ?' 
      : 'UPDATE noticias SET titulo = ?, contenido = ? WHERE id = ?';
    await pool.query(updateQuery, updateFields);
    res.json({ id, titulo, contenido, imagen_url });
  } catch (error) {
    console.error("Error al actualizar noticia:", error);
    res.status(500).json({ error: "Error al actualizar noticia" });
  }
};

// Eliminar una noticia
export const deleteNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM noticias WHERE id = ?', [id]);
    res.json({ message: "Noticia eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar noticia:", error);
    res.status(500).json({ error: "Error al eliminar noticia" });
  }
};
