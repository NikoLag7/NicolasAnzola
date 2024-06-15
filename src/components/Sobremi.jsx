import React, { Component } from 'react'
import FotoPerfil from '../assets/perfil.jpg'
import Grado from '../assets/grado.jpg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";




export class Sobremi extends Component {
  render() {
    return (
      <div className='flex flex-col gap-5'>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <p>Soy Nicolás Anzola, tengo 23 años y me apasiona la tecnología. En 2023, obtuve el título de Ingeniero de Sistemas en la Universidad Uniminuto de Colombia. Poseo más de 2 años de experiencia en diversos roles, incluyendo desarrollador front-end, desarrollador low-code, webmaster y desarrollador web. Tengo conocimientos en tecnologías como HTML, CSS, JavaScript, WordPress, ReactJS, Bubble.io, Elementor y API-Rest.</p>
          <img className='  w-full  border-1' src={Grado}/>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Tecnologías dominadas</span>
          <div className='grid grid-cols-3 place-items-center'>
            <FaHtml5 className='h-32 w-32 '/>
            <FaCss3Alt className='h-32 w-32'/>
            <IoLogoJavascript className='h-32 w-32'/>
            <RiReactjsLine className='h-32 w-32'/>
            <FaWordpress className='h-32 w-32'/>
            <FaElementor className='h-32 w-32'/>
          </div>          
        </div>
      </div>
    )
  }
}

export default Sobremi