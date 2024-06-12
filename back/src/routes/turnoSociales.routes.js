import { Router } from 'express';
import {getTurno,getTurn,postTurno,putTurno,deleteTurno } from '../controllers/turnoSociales.controllers.js';


const router = Router()

router.get('/TurnoSociales',getTurno)
router.get("/TurnoSociales/:id",getTurn);
router.post('/TurnoSociales',postTurno)
router.put('/TurnoSociales/:id', putTurno)
router.delete('/TurnoSociales/:id',deleteTurno)


export default router