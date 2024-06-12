import { Router } from 'express';
import {getTurno,getTurn,postTurno,putTurno,deleteTurno } from '../controllers/turnoDiscapacidad.controllers.js';


const router = Router()

router.get('/TurnoDiscapacidad',getTurno)
router.get("/TurnoDiscapacidad/:id",getTurn);
router.post('/TurnoDiscapacidad',postTurno)
router.put('/TurnoDiscapacidad/:id', putTurno)
router.delete('/TurnoDiscapacidad/:id',deleteTurno)


export default router