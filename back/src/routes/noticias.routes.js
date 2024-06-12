import { Router } from 'express';
import { getAllNoticias, createNoticia, updateNoticia, deleteNoticia } from '../controllers/noticias.controllers.js';
import upload from '../config/multer.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/Noticias', getAllNoticias);
router.post('/Noticias', upload.single('imagen'), createNoticia);
router.put('/Noticias/:id', upload.single('imagen'), updateNoticia);
router.delete('/Noticias/:id', deleteNoticia);

// Serve images from dbimages directory
router.get('/images/get', (req, res) => {
  try {
    const dbImagesDir = path.join(__dirname, '../dbimages');
    const imageFiles = fs.readdirSync(dbImagesDir);
    const imagePaths = imageFiles.map(file => `http://localhost:2500/dbimages/${file}`);
    res.json(imagePaths);
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
    res.status(500).json({ error: "Error al obtener imágenes" });
  }
});

export default router;
