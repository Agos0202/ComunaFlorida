import { Router } from 'express';
import {getTurno,getTurn,postTurno,putTurno,deleteTurno } from '../controllers/turnoRRHH.controllers.js';


const router = Router()

router.get('/TurnoRRHH',getTurno)
router.get("/TurnoRRHH/:id",getTurn);
router.post('/TurnoRRHH',postTurno)
router.put('/TurnoRRHH/:id', putTurno)
router.delete('/TurnoRRHH/:id',deleteTurno)


export default router