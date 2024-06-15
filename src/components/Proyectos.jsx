import React, { Component } from 'react'
import FotoPerfil from '../assets/perfil.jpg'
import Peliculas from '../assets/pelis.PNG'
import './Proyectos.css'
import Proyecto1 from '../assets/imagencalcu.png'
import { FaGithub } from "react-icons/fa";
import { IoBulb } from "react-icons/io5";
import Pagos from '../assets/modulo-pagos.jpg'

export class Proyectos extends Component {
  render() {
    return (
      <div className='flex flex-col gap-5'>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Calculadora en react</span>
          <p className='text-xs'>Mi primer proyecto en React, realizado en 2022, me permitió aprender conceptos básicos del framework.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='#'>Demo</a></div>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><FaGithub /><a target="_blank" href='https://github.com/NikoLag7/Calculadora-React'>Link Github</a></div>
          </div>
          <img className='  w-full  border-1' src={Proyecto1}/>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Página de peliculas</span>
          <p className='text-xs'>Este proyecto es una web de películas sencilla que recopila, filtra y muestra en tiempo real un resumen de una API pública de películas. Además, se usaron librerías interesantes como React-router-dom</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='#'>Demo</a></div>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><FaGithub /><a target="_blank" href='https://github.com/NikoLag7/ConsumoAPI-Peliculas'>Link Github</a></div>
          </div>
          <img className='  w-full  border-1' src={Peliculas}/>
        </div>
        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Modulo para diferir y pagar una deuda</span>
          <p className='text-xs'>Este es un proyecto que realicé para una prueba técnica. Es un módulo de pago de deudas que permite diferir en varias cuotas y realizar el pago de cada una. Este tipo de mini proyectos son interesantes porque reflejan tareas comunes en el día a día laboral.</p>
          <div className='flex flex-row gap-2'>
            <div  className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='#'>Demo</a></div>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><FaGithub /><a target="_blank" href='https://github.com/NikoLag7/Componente-pagos'>Link Github</a></div>
          </div>
          <img className='  w-full  border-1' src={Pagos}/>
        </div>
      </div>
    )
  }
}

export default Proyectos