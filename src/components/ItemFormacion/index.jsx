import React from 'react'

import estilos from './estilos.module.css';
const imagen = require.context('./img', true);

export default function index(props) {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedor__img}>
        <img src={imagen(props.logo)} alt="img formacion" />
      </div>
      <div className={estilos.contenedor__text}>
        <h4 className={estilos.text__tittle}>{props.titulo}</h4>
        <p className={estilos.text__descripcion}>{props.descripcion}</p>
      </div>
    </div>
  )
}
