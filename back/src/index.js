import express from "express";
import cors from "cors"; 
import AlumnoHockey from "./routes/hockey.routes.js"
import AlumnoVoley from "./routes/voley.routes.js"
import AlumnoBasquet from "./routes/basquet.routes.js"
import Deporte from "./routes/deporte.routes.js"
import Turno from "./routes/turnoSociales.routes.js"
import Noticias from "./routes/noticias.routes.js"
const app = express();
app.use(express.json());
app.use(cors());
//Ruta Alumno de Hockey
app.use("/api/", AlumnoHockey);
//Ruta Alumno de Voley
app.use("/api/", AlumnoVoley);
//Ruta Alumno de Basquet
app.use("/api/", AlumnoBasquet);
//Ruta Alumno de Deporte
app.use("/api/", Deporte);
//Ruta Alumno de Deporte
app.use("/api/", Turno);

app.use("/api/",Noticias);

app.listen(2500);
console.log("Servidor ejecutandose en el puerto 2500");
