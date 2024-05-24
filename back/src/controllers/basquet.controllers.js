import { pool } from "../db.js"

//--------------------OBTENER Alumno-----------------------

export const getAlumnoBasquet=async(req,res)=> {
    const [rows] = await pool.query("SELECT * FROM basquet");
    res.json(rows)
}


//--------------------OBTENER CLIENTE : id-----------------------

export const getBasquet =async(req,res)=>{
   
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM basquet WHERE id = ?", [
      id,
    ])
    res.json(rows[0])
    // req.send('Obtener Alumno')
}

/*--------------------AGREGAR ALUMNO-----------------------*/ 
export const postAlumnoBasquet=async(req,res)=> {
    const {nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo}= req.body
    const [ rows]=await pool.query('INSERT INTO basquet(nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo) VALUES(?,?,?,?,?,?,?,?,?)',[nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo ])
    console.log(req.body)
    res.send={rows}
}


//--------------------MODIFICAR Alumno----------------------
export const putAlumnoBasquet=async(req,res)=>{
const {id}= req.params
const {nombre,apellido,documento,edad,fecha,localidad,direccion,telefono,correo}= req.body
const  result =await pool.query(`update basquet set nombre = '${nombre}', apellido = '${apellido}', dni = '${documento}',edad = '${edad}',fech = '${fecha}',localidad = '${localidad}',direccion = '${direccion}', telefono = '${telefono},'correo = '${correo}' where id = ${id}`)
res.json(result)
console.log(result)

}



//----------------ELIMINAR ALUMNO
export const deleteAlumnoBasquet=async(req,res)=>{
    const result = await pool.query('DELETE FROM basquet WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('ALUMNO ELIMINADO')
}


