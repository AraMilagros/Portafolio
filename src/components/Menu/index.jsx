import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./estilos.module.css";
import ThemeSwitch from '../ThemeSwitch';

export default function index() {
    return (
        <div className={estilos.div}>
            {/* <ThemeSwitch /> */}
            {window.innerWidth > '768' ? <ThemeSwitch /> : <></>}
            <div id={estilos.categorias}>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <Link to="/">
                            <i className="fa-solid fa-house"></i>
                        </Link>
                    </div>

                    <div className={estilos.categoria__label}>
                        <Link to="/">Principal</Link>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <Link to="/skills"><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div className={estilos.categoria__label}>
                        <Link to="/skills">Skills</Link>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <Link to="/estudios"><i className="fa-solid fa-graduation-cap"></i></Link>
                    </div>
                    <div className={estilos.categoria__label}>
                        <Link to="/estudios">Estudios</Link>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <Link to="/proyectos"><i className="fa-solid fa-terminal"></i></Link>
                    </div>
                    <div className={estilos.categoria__label}>
                        <Link to="/proyectos">Proyectos</Link>
                    </div>
                </div>
                <div className={estilos.categoria__item}>
                    <div className={estilos.item__icon}>
                        <Link to="/contacto"><i className="fa-solid fa-envelope"></i></Link>
                    </div>
                    <div className={estilos.categoria__label}>
                        <Link to="/contacto">Contacto</Link>
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
