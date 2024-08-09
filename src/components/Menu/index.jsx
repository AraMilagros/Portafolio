import React, { useEffect, useState } from "react";

import estilos from "./estilos.module.css";
export default function index() {
    const [bandera, setBandera] = useState(true);

    const cambiarTheme = () => {
        bandera ? document.body.setAttribute('data-theme', 'light') : document.body.setAttribute('data-theme', 'dark');

        setBandera(!bandera);
    }

    return (
        <div className={estilos.div}>
            <section className={estilos.theme}>
                {/* <p>Dark Mode</p> */}
                <label>Light</label>
                <div className={estilos.theme__btn}>
                    <input id={estilos.btn_check}
                        type="checkbox" onClick={cambiarTheme}></input>
                    <label htmlFor={estilos.btn_check} className={estilos.lbl_check}></label>
                </div>
                <label>Dark</label>
            </section>

            <div id={estilos.categorias}>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <a href="/">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </div>

                    <div className={estilos.categoria__label}>
                        <a href="/">Principal</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <a href="/skills"><i className="fa-solid fa-code"></i></a>
                    </div>
                    <div className={estilos.categoria__label}>
                        <a href="/skills">Skills</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <a href="/estudios"><i className="fa-solid fa-graduation-cap"></i></a>
                    </div>
                    <div className={estilos.categoria__label}>
                        <a href="/estudios">Estudios</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <a href="/proyectos"><i className="fa-solid fa-terminal"></i></a>
                    </div>
                    <div className={estilos.categoria__label}>
                        <a href="/proyectos">Proyectos</a>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <a href="/contacto"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                    <div className={estilos.categoria__label}>
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
            </div>

            <div className={estilos.footer}>
                <label>&copy; 2024 <br />AraaMilagros</label>
                <div></div>
            </div>
        </div>
    );
}
