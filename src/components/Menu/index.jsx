import React, { useEffect, useState } from 'react'

import estilos from './estilos.module.css';
export default function index() {

    const [bandera, setBandera] = useState(false);

    const colapsar = () => {
        setBandera(!bandera);

        const etiqueta = document.getElementsByClassName('categoria__label');
        console.log(etiqueta);

        for (let index = 0; index < etiqueta.length; index++) {
            if(bandera){
                etiqueta[index].style.display='block';
            }else{
                etiqueta[index].style.display='none';
            }
        }
    }

    return (
        <div className={estilos.div}>
            <div className={estilos.colapse} onClick={colapsar}>
                {bandera ? <i className="fa-regular fa-square-caret-right"></i> : <i className="fa-solid fa-square-caret-right"></i>}

            </div>
                    
            <div id={estilos.categorias} className={bandera ? estilos.active: ''}>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className='categoria__label'>
                        <a href="/">Principal</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className='categoria__label'>
                        <a href="/skills">Skills</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className='categoria__label'>
                        <a href="/estudios">Estudios</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <i className="fa-solid fa-terminal"></i>
                    </div>
                    <div className='categoria__label'>
                        <a href="/proyectos">Proyectos</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='categoria__label'>
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
            </div>

            <div>
                <p>Dark</p>
                <div></div>
            </div>
        </div>
    )
}
