import React, { Component } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";


export class Recomendaciones extends Component {
  render() {
    return (
      <div className='flex flex-col gap-5'>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><IoPersonCircle className=' h-8 w-8 '/> <span> Manuel Patarroyo</span></div>
          <span>Ingeniero de Microsoft</span>
          <div className='flex flex-row'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          <p className='text-xs'>Nicolás es increíble para resolver problemas complejos. Siempre está al tanto de las últimas tecnologías y sabe cómo aplicarlas de manera efectiva. Su habilidad para encontrar soluciones creativas ha sido esencial en nuestros proyectos. Es un verdadero placer trabajar con él.</p>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><IoPersonCircle className=' h-8 w-8 '/> <span> Luis Roca</span></div>
          <span>CTO de Yustii</span>
          <div className='flex flex-row'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          <p className='text-xs'>Nicolas es un desarrollador de software altamente competente y dedicado. Su capacidad para resolver problemas técnicos y su enfoque innovador han sido cruciales para el éxito de nuestros proyectos. Además, su disposición para colaborar y ayudar a sus compañeros de equipo lo hace un excelente colaborador.</p>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><IoPersonCircle className=' h-8 w-8 '/> <span> Nicolas Tamayo</span></div>
          <span>Desarrollador de software</span>
          <div className='flex flex-row'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          <p className='text-xs'>Nicolás es súper dedicado y se nota en la calidad de su trabajo. Es muy detallista y siempre busca la excelencia en cada proyecto. Además, es muy fácil trabajar con él, siempre dispuesto a colaborar y a compartir sus conocimientos. Sin duda, un gran compañero de equipo.</p>
        </div>
      </div>
      
    )
  }
}

export default Recomendaciones