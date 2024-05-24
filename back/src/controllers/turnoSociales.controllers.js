import { pool } from "../db.js"

//--------------------OBTENER Alumno-----------------------

export const getTurno=async(req,res)=> {
    const [rows] = await pool.query("SELECT * FROM turno");
    res.json(rows)
}


//--------------------OBTENER CLIENTE : id-----------------------

export const getTurn =async(req,res)=>{
   
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM turno WHERE id = ?", [
      id,
    ])
    res.json(rows[0])
    // req.send('Obtener Alumno')
}

/*--------------------AGREGAR ALUMNO-----------------------*/ 
export const postTurno=async(req,res)=> {
    const {nombre,apellido,documento,fecha,horario,telefono,correo}= req.body
    const [ rows]=await pool.query('INSERT INTO turno(nombre,apellido,documento,fecha,horario,telefono,correo) VALUES(?,?,?,?,?,?,?)',[nombre,apellido,documento,fecha,horario,telefono,correo ])
    console.log(req.body)
    res.send={rows}
}


//--------------------MODIFICAR Alumno----------------------
export const putTurno=async(req,res)=>{
const {id}= req.params
const {nombre,apellido,documento,fecha,horario,telefono,correo}= req.body
const  result =await pool.query(`update turno set nombre = '${nombre}', apellido = '${apellido}', documento = '${documento}',fecha = '${fecha}',horario = '${horario}', telefono = '${telefono},'correo = '${correo}' where id = ${id}`)
res.json(result)
console.log(result)

}



//----------------ELIMINAR ALUMNO
export const deleteTurno=async(req,res)=>{
    const result = await pool.query('DELETE FROM turno WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('Turno eliminado')
}


