import React from 'react'

import hard from './json/hardskill.json';
import soft from './json/softskill.json';
import ItemSkill from '../../components/ItemSkill';
import estilos from './estilos.module.css';
export default function index() {
  return (
    <div id="skills" className={estilos.contenedor}>

      <h2 className={estilos.contenedor__tittle}>Soft skill</h2>
      <div className={estilos.contenedor__softskill}>
        {
          soft.map((item, id) => {
            return (
              <ItemSkill key={id}
                logo={item.logo}
                nombre={item.nombre}
              />
            )
          })
        }
      </div>

      <h2 className={estilos.contenedor__tittle}>Hard skill</h2>
      <div className={estilos.contenedor__hardskill}>
        {
          hard.map((item, id) => {
            return (
              <ItemSkill key={id}
                logo={item.logo}
                nombre={item.nombre}
              />
            )
          })
        }
      </div>

    </div>
  )
}
