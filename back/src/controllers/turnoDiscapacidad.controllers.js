import { pool } from "../db.js";

// Obtener todos los turnos
export const getTurno = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM TurnoDiscapacidad");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los turnos" });
    }
};

// Obtener un turno por ID
export const getTurn = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM TurnoDiscapacidad WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el turno" });
    }
};

// Crear un nuevo turno
export const postTurno = async (req, res) => {
    try {
        const { nombre, apellido, documento, fecha, horario, telefono, correo } = req.body;
        const [result] = await pool.query(
            "INSERT INTO TurnoDiscapacidad (nombre, apellido, documento, fecha, horario, telefono, correo) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [nombre, apellido, documento, fecha, horario, telefono, correo]
        );
        res.status(201).json({ id: result.insertId, nombre, apellido, documento, fecha, horario, telefono, correo });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ message: 'Ya existe un turno reservado en esa fecha y hora.' });
        } else {
            console.error(error);
            res.status(500).json({ message: "Error al crear el turno" });
        }
    }
};

// Actualizar un turno existente
export const putTurno = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, documento, fecha, horario, telefono, correo } = req.body;
        const [result] = await pool.query(
            "UPDATE TurnoDiscapacidad SET nombre = ?, apellido = ?, documento = ?, fecha = ?, horario = ?, telefono = ?, correo = ? WHERE id = ?",
            [nombre, apellido, documento, fecha, horario, telefono, correo, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }
        res.json({ id, nombre, apellido, documento, fecha, horario, telefono, correo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el turno" });
    }
};

// Eliminar un turno
export const deleteTurno = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM TurnoDiscapacidad WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el turno" });
    }
};
