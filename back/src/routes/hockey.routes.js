import { Router } from 'express';
import {getAlumnoHockey,getHockey,postAlumnoHockey,putAlumnoHockey,deleteAlumnoHockey } from '../controllers/hockey.controllers.js';


const router = Router()

router.get('/AlumnoHockey',getAlumnoHockey)
router.get("/AlumnoHockey/:id",getHockey);
router.post('/AlumnoHockey',postAlumnoHockey)
router.put('/AlumnoHockey/:id', putAlumnoHockey)
router.delete('/AlumnoHockey/:id',deleteAlumnoHockey)


export default router