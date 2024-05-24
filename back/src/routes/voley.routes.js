import { Router } from 'express';
import {getAlumnoVoley,getVoley,postAlumnoVoley,putAlumnoVoley,deleteAlumnoVoley} from '../controllers/voley.controllers.js';


const router = Router()

router.get('/AlumnoVoley',getAlumnoVoley)
router.get("/AlumnoVoley/:id",getVoley);
router.post('/AlumnoVoley',postAlumnoVoley)
router.put('/AlumnoVoley/:id', putAlumnoVoley)
router.delete('/AlumnoVoley/:id',deleteAlumnoVoley)


export default router