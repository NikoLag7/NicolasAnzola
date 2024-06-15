import './App.css';
import FotoPerfil from './assets/perfil.jpg'
import Button from '@mui/material/Button';
import Proyectos from './components/Proyectos';
import { FaLinkedin } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import Sobremi from './components/Sobremi';
import Recomendaciones from './components/Recomendaciones';
import Contacto from './components/Contacto';
import { useState } from 'react';
import Fondo from './assets/fondo.jpeg'
import { CgMail } from "react-icons/cg";



function App() {
  
  const [seleccion,Setseleccion] = useState(<Sobremi/>)
  
  
  return (
    <div className="App hola ">
      <div className=' flex items-center justify-center mx-auto '>
      
      <div className='principal min-h-dvh w-3/6 bg-slate-900 flex flex-col'>
      <div className='bg-stone-300 bg w-full h-44 fondo' ></div>
      <div className='content mx-16 flex  flex-col gap-8'>
        <div className='header-mobile flex flex-row justify-between items-end '> <img className='h-28 rounded-full border-4' src={FotoPerfil}/>
        <a target='_Blank' href='https://www.linkedin.com/in/nicolas-anzola-061b4b22b/'><Button className='h-8 w-25 capitalize' style={{marginBottom:10, borderRadius:15,fontSize:14,textTransform:'capitalize'}} variant="contained" endIcon={<FaLinkedin />}>
        Linkedin
        </Button> </a>
        </div>
          <div className='Information-content flex flex-col gap-2 text-slate-300'>
            <div className='text-lg flex items-center gap-2'><h1 className='font-bold text-slate-100'>Nicolas Anzola</h1> <RiVerifiedBadgeFill /></div>
            <span className='text-xs'>!keep calm and codify your ideas! ✨</span>
            <p className='text-sm'>Ingeniero de sistemas. Desarrollador Junior Front-end. Desarrollador low code. Desarrollador Wordpress. Aprendiz Analista de datos. Experto en habilidades blandas</p>
            <div className='flex flex-row gap-3 text-slate-500'><div className='flex text-xs items-center'><CgWorkAlt />Disponible</div>
            <div className='flex text-xs items-center text-slate-500 border-b'><FaGithub /><a target='_Blank' href='https://github.com/NikoLag7/NicolasAnzola'>Github</a></div>
            <div className='flex text-xs items-center text-slate-500'><FaBirthdayCake />Noviembre 14th</div>
            
            
            </div>
          </div>
          <ul className='max-w-full overflow-auto grid grid-flow-col items-center text-fluid--1 mt-4 gap-1 text-slate-500'>
              <li><a><span className='flex justify-center' onClick={() => Setseleccion(<Sobremi/>)}>Sobre mi</span></a></li>
              <li><a><span className='flex justify-center' onClick={() => Setseleccion(<Proyectos/>)}>Proyectos</span></a></li>
              <li><a><span className='flex justify-center' onClick={() => Setseleccion(<Recomendaciones/>)}>Recomendaciones</span></a></li>
              <li><a><span className='flex justify-center' onClick={() => Setseleccion(<Contacto/>)}>Contacto</span></a></li> 
          </ul>
          <div>
            {seleccion}
          </div>
          <div className='flex flex-col text-slate-300 items-center justify-center m-5'>
            <div className='flex flex-row gap-2'>
              <div className='bg-[#cbd5e121] rounded-full h-10 w-10 flex justify-center items-center '><a target="_blank" href="https://www.linkedin.com/in/nicolas-anzola-061b4b22b/"><FaLinkedin  className='h-6 w-6 rounded-lg' /></a> </div>
              <div className='bg-[#cbd5e121] rounded-full h-10 w-10 flex justify-center items-center '><a target="_blank" href="https://github.com/NikoLag7"><FaGithub className='h-6 w-6 rounded-lg'/></a></div>
              <div className='bg-[#cbd5e121] rounded-full h-10 w-10 flex justify-center items-center '><a target="_blank" href='mailto:nicolasanzola200@gmail.com'><CgMail className='h-6 w-6 rounded-lg'/></a></div>
            </div>
            <span className='text-slate-300 '>By Nicolas Anzola</span>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
