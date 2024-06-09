import './App.css';
import FotoPerfil from './assets/perfil.jpg'
import image from './assets/pexels-jplenio-2850287.jpg'
import Button from '@mui/material/Button';
import { FaLinkedin } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";



function App() {
  return (
    <div className="App">
      <div className=' flex items-center justify-center mx-auto '>
      
      <div className='principal h-dvh w-3/6 bg-slate-900 flex flex-col'>
      <div className='bg-stone-300 w-full h-44'></div>
      <div className='content mx-16 '>
        <div className=' flex flex-row justify-between items-end '> <img className='h-28 rounded-full border-4' src={FotoPerfil}/>
        <Button className='h-8 w-25 capitalize' style={{marginBottom:10, borderRadius:15,fontSize:14,textTransform:'capitalize'}} variant="contained" endIcon={<FaLinkedin />}>
        Linkedin
        </Button> 
        </div>
          <div className='Information-content flex flex-col gap-2 text-slate-300'>
            <div className='text-lg flex items-center gap-2'><h1 className='font-bold text-slate-100'>Nicolas Anzola</h1> <RiVerifiedBadgeFill /></div>
            <span className='text-xs'>!keep calm and codify your ideas! ✨</span>
            <p className='text-sm'>Ingeniero de sistemas. Desarrollador Junior Front-end. Desarrollador low code. Desarrollador Wordpress. Aprendiz Analista de datos. Experto en habilidades blandas</p>
            <div className='flex flex-row gap-3 text-slate-500'><div className='flex text-xs items-center'><CgWorkAlt />Disponible</div>
            <div className='flex text-xs items-center text-slate-500 border-b'><FaGithub /><a href='https://developer.mozilla.org/es/docs/Web/HTML/Element/link'>Github</a></div>
            <div className='flex text-xs items-center text-slate-500'><FaBirthdayCake />Noviembre 14th</div>
            
            
            </div>
          </div>
          <ul className='max-w-full overflow-auto grid grid-flow-col items-center text-fluid--1 mt-4 gap-1 text-slate-500'>
              <li><a><span className='flex justify-center'>Proyectos</span></a></li>
              <li><a><span className='flex justify-center'>Sobre mi</span></a></li>
              <li><a><span className='flex justify-center'>Recomendaciones</span></a></li>
              <li><a><span className='flex justify-center'>Contacto</span></a></li> 
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
