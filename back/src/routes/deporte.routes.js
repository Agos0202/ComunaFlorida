import { Router } from 'express';
import {getDeporte,getDeport,postDeporte,putDeporte,deleteDeporte } from '../controllers/deporte.controllers.js';


const router = Router()

router.get('/Deporte',getDeporte)
router.get("/Deporte/:id",getDeport);
router.post('/Deporte',postDeporte)
router.put('/Deporte/:id', putDeporte)
router.delete('/Deporte/:id',deleteDeporte)


export default router