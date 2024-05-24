import { pool } from "../db.js"

//--------------------OBTENER Alumno-----------------------

export const getAlumnoHockey=async(req,res)=> {
    const [rows] = await pool.query("SELECT * FROM hockey");
    res.json(rows)
}


//--------------------OBTENER CLIENTE : id-----------------------

export const getHockey =async(req,res)=>{
   
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM hockey WHERE id = ?", [
      id,
    ])
    res.json(rows[0])
    // req.send('Obtener Alumno')
}

/*--------------------AGREGAR ALUMNO-----------------------*/ 
export const postAlumnoHockey=async(req,res)=> {
    const {nombre,apellido,dni,edad,fecha,localidad,direccion,telefono,correo}= req.body
    const [ rows]=await pool.query('INSERT INTO hockey(nombre,apellido,dni,edad,fecha,localidad,direccion,telefono,correo) VALUES(?,?,?,?,?,?,?,?,?)',[nombre,apellido,dni,edad,fecha,localidad,direccion,telefono,correo ])
    console.log(req.body)
    res.send={rows}
}


//--------------------MODIFICAR Alumno----------------------
export const putAlumnoHockey = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, dni, edad, fecha, localidad, direccion, telefono, correo } = req.body;
        const result = await pool.query(`UPDATE hockey SET nombre = ?, apellido = ?, dni = ?, edad = ?, fecha = ?, localidad = ?, direccion = ?, telefono = ?, correo = ? WHERE id = ?`, [nombre, apellido, dni, edad, fecha, localidad, direccion, telefono, correo, id]);
        res.json(result);
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};





//----------------ELIMINAR ALUMNO
export const deleteAlumnoHockey=async(req,res)=>{
    const result = await pool.query('DELETE FROM hockey WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('ALUMNO ELIMINADO')
}


