import React from 'react'

import estilos from './estilos.module.css';

export default function index(props) {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedor__img}>
        <img src={props.logo} alt="img formacion"/>
      </div>
      <div className={estilos.contenedor__text}>
        <h3>{props.titulo}</h3>
        <p>{props.descripcion}</p>
      </div>
    </div>
  )
}
