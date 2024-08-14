import React, { useState } from 'react'
import estilos from './estilos.module.css';

export default function index() {
    const [bandera, setBandera] = useState(true);

    const cambiarTheme = () => {
        bandera ? document.body.setAttribute('data-theme', 'light') : document.body.setAttribute('data-theme', 'dark');

        setBandera(!bandera);
    }
    return (
        <section className={estilos.theme}>
            <label>Light</label>
            <div className={estilos.theme__btn}>
                <input id={estilos.btn_check}
                    type="checkbox" onClick={cambiarTheme}></input>
                <label htmlFor={estilos.btn_check} className={estilos.lbl_check}></label>
            </div>
            <label>Dark</label>
        </section>
    )
}
