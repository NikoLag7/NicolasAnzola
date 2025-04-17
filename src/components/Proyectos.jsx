import React, { Component } from 'react'
import FotoPerfil from '../assets/perfil.jpg'
import Peliculas from '../assets/pelis.PNG'
import './Proyectos.css'
import Proyecto1 from '../assets/imagencalcu.png'
import { FaGithub } from "react-icons/fa";
import { IoBulb } from "react-icons/io5";
import Pagos from '../assets/modulo-pagos.jpg'
import Slider from './Slider'
import SApedidos from "../assets/control_pedidos_sistemainterno.png";
import SAdashboard from "../assets/dashboard_princpial_sistemainterno.png";
import SAventas from "../assets/registro_ventas_sistemainterno.png";
import Ecommerce1 from "../assets/e-comerce-1.png";
import Ecommerce2 from "../assets/e-commerce-2.png";
import Ecommerce3 from "../assets/e-comerce-3.png";
import Yustiiapp1 from "../assets/yustiiapp1.png";
import Yustiiapp2 from "../assets/Yustiiapp2.png";
import Yustiiapp3 from "../assets/Yustiiapp3.png";
import Yustiiapp4 from "../assets/Yustiiapp4.png";
import portfolio from "../assets/porfolio1.png";


export class Proyectos extends Component {
  render() {

    
    return (
      <div className='flex flex-col gap-5'>

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Yustii App</span>
          <p className='text-sm'>Yustii App es una plataforma legal desarrollada en Bubble.io que centraliza la comunicación entre clientes y abogados. Integra herramientas clave como firma electrónica, gestión de plantillas legales, verificación de identidad y validación en listas oficiales del Estado colombiano. El sistema soporta múltiples roles de usuario (cliente, abogado, gestor y administrador) y fue construido con una arquitectura modular, permitiendo escalabilidad e integración de nuevos servicios.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='https://apps.yustii.com/'>Demo</a></div>
            
          </div>
          <Slider items={[Yustiiapp1,Yustiiapp2,Yustiiapp3,Yustiiapp4]}/>
        </div>

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Sistema de Gestión Interna de Ventas y Facturación</span>
          <p className='text-sm'>Este proyecto fue desarrollado principalmente con Bubble.io y consiste en un sistema interno diseñado para gestionar ventas, facturación y pedidos. Su objetivo es optimizar los procesos operativos, brindando una solución personalizada y eficiente para el control y seguimiento de las actividades comerciales.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='https://demo-sistemainterno.bubbleapps.io/version-test/home'>Demo</a></div>
            
          </div>
          <Slider items={[SAdashboard,SApedidos,SAventas]}/>
        </div>

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Tienda E-commerce</span>
          <p className='text-sm'>Este proyecto es una tienda e-commerce desarrollada en WordPress, con un diseño de interfaz realizado en Elementor y la gestión del backend a través de WooCommerce. Se trata de un proyecto real, creado a partir de un análisis detallado de los requerimientos del cliente, eligiendo las tecnologías más adecuadas para satisfacer sus necesidades y garantizar una solución eficiente y funcional.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='https://amorcrochet.co'>Demo</a></div>
            
          </div>
          <Slider items={[Ecommerce1,Ecommerce2,Ecommerce3]}/>
        </div>

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Portafolio personal</span>
          <p className='text-sm'>Este es mi portafolio personal, desarrollado con React y Tailwind CSS. Fue uno de mis primeros proyectos y está diseñado para ser completamente responsive. Me basé parcialmente en la interfaz de Twitter para lograr un diseño limpio, moderno y fácil de navegar. Su objetivo es presentar mis habilidades, experiencia y proyectos de manera clara y visualmente atractiva, aplicando buenas prácticas de desarrollo frontend.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='#'>Demo</a></div>
          </div>
          <img className='  w-full  border-1' src={portfolio}/>
        </div>

       

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Página de peliculas</span>
          <p className='text-sm'>Este proyecto es una aplicación web sencilla de películas, desarrollada en React. Se conecta a una API pública para recopilar, filtrar y mostrar información en tiempo real sobre distintas películas. Además, incorpora librerías como react-router-dom para la gestión de rutas y una mejor experiencia de navegación entre vistas.</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='https://consumo-api-peliculas.vercel.app'>Demo</a></div>
          </div>
          <img className='  w-full  border-1' src={Peliculas}/>
        </div>

        <div className='proyectosPrincipal p-2 rounded text-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 font-bold'><img className='  h-8 rounded-full border-1' src={FotoPerfil}/> <span> Nicolas Anzola</span></div>
          <span>Calculadora en react</span>
          <p className='text-sm'>Este proyecto, realizado en 2022, fue mi primer acercamiento a React. Me permitió aprender los conceptos básicos del framework y sentó las bases para desarrollar aplicaciones más complejas. A través de este proyecto, pude explorar la estructura de componentes y el manejo del estado</p>
          <div className='flex flex-row gap-2'>
            <div className='flex w-auto text-xs items-center text-slate-500  gap-1 hover:text-slate-300'><IoBulb /><a target="_blank" href='#'>Demo</a></div>
          </div>
          <img className='  w-full  border-1' src={Proyecto1}/>
        </div>

      </div>
    )
  }
}

export default Proyectos