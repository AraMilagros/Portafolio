import React from 'react'

import estilos from './estilos.module.css';
import formacion from './json/formacion.json';
import ItemFormacion from '../../components/ItemFormacion';
export default function index() {
  return (
    <div className={estilos.contenedor} id="estudios">
      <h2 className={estilos.contenedor__tittle}>Formación académica</h2>
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
