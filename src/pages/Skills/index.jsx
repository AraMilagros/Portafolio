import React from 'react'

import hard from '../../assets/json/hardskill.json';
import soft from '../../assets/json/softskill.json';
import ItemSkill from '../../components/ItemSkill';
import estilos from './estilos.module.css';
export default function index() {
  return (
    <div id="skills" className={estilos.contenedor}>
      <div className={estilos.contenedor__hardskill}>
        {
          hard.map((item, id)=>{
            return(
              <ItemSkill key={id}
                logo={item.logo}
                nombre={item.nombre}
              />
            )
          })
        }
      </div>
      {/* <div className={estilos.contenedor__softskill}>
        {
          soft.map((item, id)=>{
            return(
              <ItemSkill key={id}
                logo={item.logo}
                nombre={item.nombre}
              />
            )
          })
        }
      </div> */}
    </div>
  )
}
