import { pool } from "../db.js"

//--------------------OBTENER Alumno-----------------------

export const getDeporte=async(req,res)=> {
    const [rows] = await pool.query("SELECT * FROM deporte");
    res.json(rows)
}


//--------------------OBTENER CLIENTE : id-----------------------

export const getDeport =async(req,res)=>{
   
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM deporte WHERE id = ?", [
      id,
    ])
    res.json(rows[0])
    // req.send('Obtener Alumno')
}

/*--------------------AGREGAR ALUMNO-----------------------*/ 
export const postDeporte=async(req,res)=> {
    const {descrip,imagen}= req.body
    const [ rows]=await pool.query('INSERT INTO deporte(descrip,imagen) VALUES(?,?)',[descrip,imagen ])
    console.log(req.body)
    res.send={rows}
}


//--------------------MODIFICAR Alumno----------------------
export const putDeporte=async(req,res)=>{
const {id}= req.params
const {descrip,imagen}= req.body
const  result =await pool.query(`update deporte set descrip = '${descrip}', imagen = '${imagen}' where id = ${id}`)
res.json(result)
console.log(result)

}



//----------------ELIMINAR ALUMNO
export const deleteDeporte=async(req,res)=>{
    const result = await pool.query('DELETE FROM deporte WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('ALUMNO ELIMINADO')
}


