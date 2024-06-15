import React from 'react'
import ItemFormacion from './ItemFormacion'

// este componente sigue la misma logica que ContainerSkill
export default function ContainerFormacion(props) {
  return (
    <section className='academic__box' id="formacion">
      <h3 className='academic__title'>{props.titulo}</h3>
      <div className='academic__line'>
        {
         props.lista.map((item, id) => {
            return <ItemFormacion key={id} logo={item.logo} titulo={item.titulo} descripcion={item.descripcion} />
          })
        }
      </div>
    </section>

  )
}
