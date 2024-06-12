import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import AlumnoHockey from "./routes/hockey.routes.js";
import AlumnoVoley from "./routes/voley.routes.js";
import AlumnoBasquet from "./routes/basquet.routes.js";
import Deporte from "./routes/deporte.routes.js";
import TurnoSociales from "./routes/turnoSociales.routes.js";
import TurnoRRHH from "./routes/turnoRRHH.routes.js"
import TurnoDiscapacidad from "./routes/turnoDiscapacidad.routes.js"
import TurnoObrasPublicas from "./routes/turnoObrasPublicas.routes.js"
import Noticias from "./routes/noticias.routes.js";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use('/dbimages', express.static(path.join(__dirname, "dbimages")));

// Ensure dbimages directory exists
const dbImagesDir = path.join(__dirname, '../dbimages');
if (!fs.existsSync(dbImagesDir)) {
  fs.mkdirSync(dbImagesDir);
}

// Rutas para diferentes módulos
app.use("/api/", AlumnoHockey);
app.use("/api/", AlumnoVoley);
app.use("/api/", AlumnoBasquet);
app.use("/api/", Deporte);
app.use("/api/", TurnoSociales);
app.use("/api/", TurnoRRHH);
app.use("/api/", TurnoDiscapacidad);
app.use("/api/", TurnoObrasPublicas);
app.use("/api/", Noticias);

const PORT = 2500;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
