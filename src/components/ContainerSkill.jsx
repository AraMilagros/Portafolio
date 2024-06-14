import React from 'react'
// este es un componente que se centra en items que éste componente contendra
import ItemSkill from './ItemSkill'

// se recibe props desde App, que seria un json con los datos necesarios que se pasara al item
export default function ContainerSkill(props) {
    return (

        <section className='skills__box' id="all-skills">
            <h3 className='skills__title'>{props.titulo}</h3>            
            <div className="skills__line">
                {/*     uno de los props pasados desde app era una lista (que contiene datos) y se utilizara
                    pasando cada uno de los 'campos' como props para el componente ItemSkill
                    
                    Esta forma de trabajar permitirá no repetir codigo identico, donde sólo cambiaría el contenido
                    Es decir en vez de tener:
                        <h2>Jazmin</h2>
                        <h2>Nicolas</h2>
                        <h2>Valentina</h2>
                    tres etiquetas de <h2> donde solo cambia el contenido, tendríamos
                        <h2>{props.nombre}</h2>
                    Una etiqueta <h2> que recibe un props con una variable nombre y por medio de map, se iria creando
                    los h2 necesario, es decir cuántos elementos posea la lista pasada
                */}
                {
                    props.lista.map((item, id) => {
                        return <ItemSkill key={id} name={item.nombre} logo={item.logo} />
                    })
                }

            </div>
        </section>


    )
}
