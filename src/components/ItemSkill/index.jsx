import React from 'react'

import estilos from './estilos.module.css';
export default function index(props) {
  return (
    <div className={estilos.contenedor}>
      <i className={props.logo}></i>
      <label>{props.nombre}</label>
    </div>
  )
}
