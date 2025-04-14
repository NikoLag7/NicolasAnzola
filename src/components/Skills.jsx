import React from 'react'
import styles from "./Skills.module.css";
import HTML from "../assets/html-1.svg";
import JAVASCRIPT from "../assets/js.webp";
import REACT from "../assets/react-2.svg";
import NEXT from "../assets/next-js.svg";
import TAILWIND from "../assets/tailwind-css-2.svg";
import BUBBLE from "../assets/bubble-io.svg";
import FIGMA from "../assets/figma-icon.svg";


const skills = [
    { name: 'HTML', src: `${HTML}` },
    { name: 'Javascript', src: `${JAVASCRIPT}` },
    { name: 'ReactJs', src: `${REACT}` },
    { name: 'NextJs', src: `${NEXT}` },
    { name: 'Tailwaind CSS', src: `${TAILWIND}` },
    { name: 'Bubble.io', src: `${BUBBLE}` },
    { name: 'Figma', src: `${FIGMA}` },
    ]


function Skills() {
  const duplicatedSkills = [...skills, ...skills];

  
  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
      {duplicatedSkills.map((tech, index) => (
        <div
          key={index}
          className={styles.techBox}
        >
          <img src={tech.src} alt={tech.name} ></img>
          <p>{tech.name}</p>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Skills