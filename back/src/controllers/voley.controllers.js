import { pool } from "../db.js"

//--------------------OBTENER Alumno-----------------------

export const getAlumnoVoley=async(req,res)=> {
    const [rows] = await pool.query("SELECT * FROM voley");
    res.json(rows)
}


//--------------------OBTENER CLIENTE : id-----------------------

export const getVoley =async(req,res)=>{
   
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM voley WHERE id = ?", [
      id,
    ])
    res.json(rows[0])
    // req.send('Obtener Alumno')
}

/*--------------------AGREGAR ALUMNO-----------------------*/ 
export const postAlumnoVoley=async(req,res)=> {
    const {nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo}= req.body
    const [ rows]=await pool.query('INSERT INTO voley(nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo) VALUES(?,?,?,?,?,?,?,?,?)',[nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo ])
    console.log(req.body)
    res.send={rows}
}


//--------------------MODIFICAR Alumno----------------------
export const putAlumnoVoley=async(req,res)=>{
const {id}= req.params
const {nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo}= req.body
const  result =await pool.query(`update voley set nombre = '${nombre}', apellido = '${apellido}', documento = '${documento}',edad = '${edad}',fech = '${fecha}',localidad = '${localidad}',direccion = '${direccion}', telefono = '${telefono},'correo = '${correo}' where id = ${id}`)
res.json(result)
console.log(result)

}



//----------------ELIMINAR ALUMNO
export const deleteAlumnoVoley=async(req,res)=>{
    const result = await pool.query('DELETE FROM voley WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('ALUMNO ELIMINADO')
}


