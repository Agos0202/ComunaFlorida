import { Router } from 'express';
import {getAlumnoBasquet,getBasquet,postAlumnoBasquet,putAlumnoBasquet,deleteAlumnoBasquet } from '../controllers/basquet.controllers.js';


const router = Router()

router.get('/AlumnoBasquet',getAlumnoBasquet)
router.get("/AlumnoBasquet/:id",getBasquet);
router.post('/AlumnoBasquet',postAlumnoBasquet)
router.put('/AlumnoBasquet/:id', putAlumnoBasquet)
router.delete('/AlumnoBasquet/:id',deleteAlumnoBasquet)


export default router