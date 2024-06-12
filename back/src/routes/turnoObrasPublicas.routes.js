import { Router } from 'express';
import {getTurno,getTurn,postTurno,putTurno,deleteTurno } from '../controllers/turnoObrasPublicas.controllers.js';


const router = Router()

router.get('/TurnoObrasPublicas',getTurno)
router.get("/TurnoObrasPublicas/:id",getTurn);
router.post('/TurnoObrasPublicas',postTurno)
router.put('/TurnoObrasPublicas/:id', putTurno)
router.delete('/TurnoObrasPublicas/:id',deleteTurno)


export default router