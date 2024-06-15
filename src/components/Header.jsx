import React from 'react'
import foto1 from '../assets/img/foto1.jpg';

export default function Header() {
  return (
    <section className="title">
        <div className="title__div">
            <img className="title__profile" src={foto1} alt="foto de perfil" />
            <div className="title__container">
                <h2 className="title__bio">Hola, mi nombre es <strong>Araceli</strong> Palenque y construyo páginas web</h2>
                <h3 className="title__subsection">Estoy formada en los lenguajes de programación como Javascript y Java, y
                    actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</h3>
                <ul className="title__network">
                    {/* <!--//! Pon los enlaces de tus redes sociales favoritas --> */}
                    <li className="title__network__item"><a href="https://github.com/AraMilagros" target="_blank"><i className="fa-brands fa-github"></i> Github</a></li>
                    <li className="title__network__item"><a href="https://www.linkedin.com/in/aracelipalenque/" target="_blank"><i className="fa-brands fa-linkedin"></i>Linkedin</a></li>
                    <li className="title__network__item"><a href="https://www.frontendmentor.io/profile/AraMilagros" target="_blank"><i className="fa-solid fa-code"></i>FrontedMentor</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
