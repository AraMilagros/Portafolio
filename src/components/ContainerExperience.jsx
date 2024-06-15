import React from 'react'
import ItemExperience from './ItemExperience'

// este componente sigue la misma logica que ContainerSkill
export default function ContainerExperience(props) {
  return (
    <section className='experience' id="xp">
        <h3 className='experience__section__title'>{props.titulo}</h3>
        <div className='experience__box'>
          {
           props.lista.map((item, id) => {
              return <ItemExperience key={id} logo={item.logo} titulo={item.titulo} descripcion={item.descripcion} repo={item.repo} demolive={item.demolive} />
            })
          }
        </div>
    </section>
  )
}
