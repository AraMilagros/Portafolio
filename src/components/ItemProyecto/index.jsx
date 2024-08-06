import React from 'react'
const imagen = require.context('./img', true);

import estilos from './estilos.module.css';
export default function index(props) {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedor__img}>
        <img src={imagen(props.logo)} alt="imagen proyecto" />
      </div>
      <div className={estilos.contenedor__text}>
        <h3>{props.titulo}</h3>
        <p>{props.descripcion}</p>
      </div>
      <div className={estilos.contenedor__btn}>
        <a href={props.repo} target='_black'>Repositorio</a>
        <a href={props.demolive} target='_black'>Demo Live</a>
      </div>
    </div>
  )
}
