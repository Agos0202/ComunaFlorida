import '../style/inicio.css'

import comuna from '../imagenes/comunaPrincipal.jpg'
import VerNoti from './Noticia/verNoticia';


function Inicio() {


  return (
    <div className='contenedor'>
    <div className='comunafoto'>
    <img src={comuna} alt="holaaa" className='comuna' />
    </div>


   <div className='titulo'>
    <h1>JUNTOS TRABAJANDO POR LA CIUDAD QUE SOÑAMOS</h1>
   </div>
  
   
   <div>
    <VerNoti/>
   </div>
   
  


   <h1 className='titulos'>NUESTRA UBICACION</h1>
 {/* Agrega el iframe de Google Maps */}
      <div className="mapa-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6465319446997!2d-65.09743952528957!3d-26.819381276702945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422f55023e5f3ad%3A0xc3d62bda31f51d7a!2sComuna%20La%20Florida%20y%20Luisiana!5e0!3m2!1sen!2sar!4v1713815253975!5m2!1sen!2sar" 
      width="100%" 
      height="450" 
      style={{border:0}}
       allowfullscreen="" 
       loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


               <h1 className='titulos'>TELEFONOS DE EMERGENCIAS</h1>        
      <div className="telefonos-container">
          
          <div className="telefono">
            <h1 className='numero'>103</h1>
            <h2 className='descripcion'>Defensa Civil</h2>
          </div>
          <div className="telefono">
            <h1 className='numero'>107</h1>
            <h2 className='descripcion'>Medicina Gratuita</h2>
          </div>
          <div className="telefono">
            <h1 className='numero'>4922015</h1>
            <h2 className='descripcion'>Comisaria la Florida</h2>
          </div>
          <div className="telefono">
            <h1 className='numero'>3813670162</h1>
            <h2 className='descripcion'>Seguridad de Vigias</h2>
          </div>
          <div className="telefono">
            <h1 className='numero'>3813650265</h1>
            <h2 className='descripcion'>Monitoreo</h2>
          </div>
          <div className="telefono">
            <h1 className='numero'>3813519701</h1>
            <h2 className='descripcion'>Atencion 24hs</h2>
          </div>
        </div>
   </div>

  )
}

export default Inicio;