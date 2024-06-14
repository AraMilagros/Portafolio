import React from 'react'

import perfil from '../assets/img/profile.png';


export default function Header() {
  return (
    <section className="title">
        <div className="title__div">
            <img className="title__profile" src={perfil} alt="foto de perfil" />
            <div className="title__container">
                <h2 className="title__bio">Hola, mi nombre es <strong>Araceli</strong> del Milagro Palenque y construyo páginas web</h2>
                <h3 className="title__subsection">Estoy formada en los lenguajes de programación como Javascript y Java, y
                    actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</h3>
                <ul className="title__network">
                    {/* <!--//! Pon los enlaces de tus redes sociales favoritas --> */}
                    <li className="title__network__item"><a href=""><i className="fa-brands fa-github"></i> Github</a></li>
                    <li className="title__network__item"><a href=""><i className="fa-brands fa-linkedin"></i>Linkedin</a></li>
                    <li className="title__network__item"><a href=""><i className="fa-solid fa-code"></i>FrontedMentor</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
