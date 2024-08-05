import React from 'react'

import estilos from './estilos.module.css';
import img1 from '../../assets/img/girl1c.png';
import img2 from '../../assets/img/girl2.png';
import img3 from '../../assets/img/girl3.png';

export default function index() {
  return (

    <div id="/" className={estilos.contenedor}>

      <div className={estilos.contenedor__descripcion}>
        <h2>¡Hola! Mi nombre es <strong>Araceli</strong> y construyo páginas web</h2>
        <h3>Estoy formada en los lenguajes de programación como Javascript y Java, y
          actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</h3>
      </div>

      <div className={estilos.contenedor__network}>
        <ul className={estilos.network__ul}>
          <li className="title__network__item"><a href="https://github.com/AraMilagros" target="_blank"><i className="fa-brands fa-github"></i> Github</a></li>
          <li className="title__network__item"><a href="https://www.linkedin.com/in/aracelipalenque/" target="_blank"><i className="fa-brands fa-linkedin"></i>Linkedin</a></li>
          <li className="title__network__item"><a href="https://www.frontendmentor.io/profile/AraMilagros" target="_blank"><i className="fa-solid fa-code"></i>FrontedMentor</a></li>
        </ul>
      </div>

      <div className={estilos.contenedor__sobremi}>
        <div className={estilos.sobremi__texto}>
          <p className={estilos.sobremi__p}>Comencé mi formación con el lenguaje de Java,
            desarrollando programas de escritorio y luego un pequeño paso por la facultad, me encontré con
            ReactJs, lo que me llevó a adentrarme al mundo web</p>
          <br />
          <p className={estilos.sobremi__p}>Mi objetivo es consolidar los conocimientos adquiridos y lograr
            replicarlos a resultados tangibles. Me emociona la posibilidad de seguir aprendiendo a mano de nuevos
            proyectos.</p>
        </div>
        <div className={estilos.sobremi__img}>
          <img src={img1} alt="" />
        </div>
      </div>

    </div>
  )
}
