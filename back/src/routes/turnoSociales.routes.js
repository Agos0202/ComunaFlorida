import { Router } from 'express';
import {getTurno,getTurn,postTurno,putTurno,deleteTurno } from '../controllers/turnoSociales.controllers.js';


const router = Router()

router.get('/Turno',getTurno)
router.get("/Turno/:id",getTurn);
router.post('/Turno',postTurno)
router.put('/Turno/:id', putTurno)
router.delete('/Turno/:id',deleteTurno)


export default router