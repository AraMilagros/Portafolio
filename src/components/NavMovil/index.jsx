import React from 'react'
import estilos from './estilos.module.css';
import ThemeSwitch from '../ThemeSwitch';
export default function index() {
    return (
        <div className={estilos.contenedor}>
            <div className={estilos.text}>
                <label>&copy;AraaMilagros</label>
            </div>
            <ThemeSwitch />
        </div>
    )
}
