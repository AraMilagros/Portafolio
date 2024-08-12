import React from 'react'
import estilos from './estilos.module.css';

import img from './pageNotFound.png';
export default function index() {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedor__img}>
        <img src={img} alt="Vector image by VectorStock / katflare" />
      </div>
      <div className={estilos.contenedor__text}>
        <label>PÁGINA NO ENCONTRADA</label>
      </div>
{/* <a href="https://www.vectorstock.com/royalty-free-vector/faq-concept-flat-vector-33666387">Vector image by VectorStock / katflare</a> */}
    </div>

  )
}
