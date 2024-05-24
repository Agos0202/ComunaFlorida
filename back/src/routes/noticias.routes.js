import { Router } from 'express';
import { getAllNoticias, createNoticia, updateNoticia, deleteNoticia } from '../controllers/noticias.controllers.js';

const router = Router();

router.get('/Noticias', getAllNoticias);
router.post('/Noticias', createNoticia);
router.put('/Noticias/:id', updateNoticia);
router.delete('/Noticias/:id', deleteNoticia);

export default router;
