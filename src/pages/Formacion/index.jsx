import React from 'react'

import estilos from './estilos.module.css';
import formacion from '../../assets/json/formacion.json';
import ItemFormacion from '../../components/ItemFormacion';
export default function index() {
  return (
    <div className={estilos.contenedor}>
      <h2>Formación académica</h2>
      <div className={estilos.contenedor__estudios}>
        {
          formacion.map((item, id)=>{
            return(
              <ItemFormacion key={id}
                logo={item.logo}
                titulo={item.titulo}
                descripcion={item.descripcion}
              />
            )
          })
        }
      </div>
    </div>
  )
}
