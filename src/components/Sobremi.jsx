import React, { Component } from 'react'
import FotoPerfil from '../assets/perfil.jpg'
import Grado from '../assets/grado.jpg'
import logojs from '../assets/js.webp'
import Skills from './Skills'





export class Sobremi extends Component {
  render() {
    return (
      <div className='flex flex-col gap-5'>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <p className='text-sm'>Soy Nicolás Anzola, tengo 24 años y me apasiona la tecnología. En 2023, obtuve el título de Ingeniero de Sistemas en la Universidad Uniminuto de Colombia. Poseo más de 3 años de experiencia en diversos roles, incluyendo desarrollador front-end, Senior low code developer, webmaster y desarrollador web. Tengo conocimientos en tecnologías como <b>ReactJS, NextJs, Tailwind, HTML, CSS, JavaScript, Bubble.io, Elementor, Wordpress y API-Rest</b>.</p>
          <img className='  w-full  border-1' src={Grado}/>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span><b>Skills</b></span>
          <Skills/>       
        </div>
      </div>
    )
  }
}

export default Sobremi